# ViaSphere SEO and indexing fixes

Prepared 5 October 2026 against RAJKS75/viasphere-dev, branch cloudflare-fix,
commit 74d574421ec1780f9986bfe8468c6514274bf2a5.
This ZIP contains changed/new files only. Apply every file with its folder path.
No remote push, merge, Cloudflare deployment or Search Console submission was performed.

## What the live checks established

The successful checks of the homepage and Ghaziabad student-visa page returned
HTTP 200, server-rendered headings and content, index/follow metadata and root-domain
canonicals. robots.txt and sitemap.xml also returned HTTP 200. No X-Robots-Tag
blocking header appeared in those responses. This is not a Googlebot verification.

The homepage was served as HTTP 200 on all three tested variants:
- https://viasphereglobal.com/
- https://www.viasphereglobal.com/
- http://viasphereglobal.com/

The variants did not redirect to a single canonical host/protocol in those responses.
robots.txt advertised https://www.viasphereglobal.com/sitemap.xml while canonicals
and sitemap page entries used https://viasphereglobal.com.

These are consistency problems worth fixing, not proof of why Google excluded a
particular URL. The exact Search Console Page indexing reason and Google-selected
canonical are still needed. Some additional live requests failed from this testing
environment, so they do not establish how Googlebot sees those URLs.

The source also returned a successful page for unknown /exams/:exam values, with
an 'Exam not found' message. This is a soft-404 risk; the updated route returns 404.

## Applied changes and exact file list

| File | Purpose |
| --- | --- |
| src/lib/canonical.ts | One canonical origin; production-host redirect decisions; preserve query parameters |
| src/server.ts | Permanent 308 redirects for app requests and noindex headers on 404 responses |
| wrangler.jsonc | Point the Worker to the new server entry; required with src/server.ts |
| public/robots.txt | Advertise the canonical root-domain sitemap |
| public/sitemap.xml | Keep 20 canonical content URLs; update dates for changed content |
| src/lib/seo.ts | Shared canonical origin and explicit support for non-indexable error pages |
| src/routes/index.tsx | Clear Ghaziabad-focused title, description, H1 and introduction |
| src/routes/__root.tsx | Website identity schema and a useful real-404 page |
| src/routes/exams_/$exam.tsx | Reject unknown exam IDs with a real 404 |
| src/routes/student-visa-consultant-ghaziabad.tsx | Link Malta to its dedicated guide |
| src/components/Footer.tsx | Consistent office address matching the structured data |
| scripts/smoke-test.mjs | Assert indexability, canonicals, sitemap coverage, metadata and error responses |
| scripts/test-canonical.mjs | Verify redirects, query preservation, preview isolation and loop avoidance |

package.json, the dependency lockfile, the navigation, and the consultation form
are not replaced by this patch. Existing metadata and server-side rendering were
already present; this patch does not pretend they were missing.

## Apply and deploy

1. Commit or safely preserve your current local work.
2. Fetch the current remote branch and create a new branch from it. For a clean clone:

```sh
git fetch origin
git switch -c seo-indexing-fix origin/cloudflare-fix
```

3. Extract this ZIP and copy its contents into the repository root, preserving
   src/, public/ and scripts/. Review changes if your source has advanced since
   the baseline commit. Keep your .git directory and existing commits.
4. Install dependencies if needed, then validate:

```sh
pnpm install --frozen-lockfile
pnpm run build
pnpm run typecheck
node scripts/test-canonical.mjs
pnpm run test:smoke
git diff --check
git diff --stat
```

5. Commit the reviewed files, push seo-indexing-fix, and open a pull request
   targeting cloudflare-fix. Merge only after review.
6. Cloudflare Worker deployment remains:

```sh
pnpm run build
pnpm exec wrangler deploy --config dist/server/wrangler.json
```

Do not deploy dist/client alone or add a blanket SPA _redirects rule.
The production apex and www custom domains must both resolve and be attached
to the same project. Remove any conflicting root-to-www or HTTPS-to-HTTP rule.

The Worker redirects application requests. Cloudflare can serve static assets
before the Worker. To enforce host/HTTPS redirects for EVERY request, including
robots.txt, sitemap.xml and images, also use a Cloudflare Single Redirect rule:

Matching expression:
```
(http.host in {"viasphereglobal.com" "www.viasphereglobal.com"} and (http.host eq "www.viasphereglobal.com" or http.request.scheme eq "http"))
```
Dynamic target:
```
concat("https://viasphereglobal.com", http.request.uri.path)
```
Status 301; preserve query string enabled. Keep the root HTTPS site working before
turning on this rule. The rule and source redirect agree on the same target.

## Verified locally

- Production Cloudflare Worker and client build: passed.
- TypeScript: passed.
- Built Worker redirect calls: HTTP 308 and correct Location headers.
- Canonical redirect cases: HTTPS, www, trailing slash, campaign query preservation,
  unchanged canonical URLs, preview/local host isolation and no redirect loop.
- Production smoke checks: 20 content pages, 44 assets, generic and invalid-exam 404s.
- Each valid page: one title, one H1, one canonical, a description, no blocking robots
  signal, and parseable JSON-LD.
- All 20 canonical pages are represented once in sitemap.xml.
- Existing header dropdowns, exam links and removed top-right phone are preserved.

The local preview required an environment-only workaround for network-interface
introspection. That workaround is not included in the site source. No Lighthouse
score, field Core Web Vitals result or visual browser-test result is claimed.

## Required post-deployment checks

Use your browser or Windows Command Prompt (curl.exe also works in PowerShell):

```sh
curl.exe -I http://viasphereglobal.com/
curl.exe -I https://www.viasphereglobal.com/
curl.exe -I https://viasphereglobal.com/
curl.exe -I https://viasphereglobal.com/exams/not-a-real-exam
```

Expected: first two redirect to the HTTPS root domain; the canonical homepage
returns 200; the invalid exam returns 404 with X-Robots-Tag: noindex.
Open robots.txt and sitemap.xml and confirm they reference the root HTTPS host.
Check direct navigation to the Ghaziabad landing page and Malta guide.

## Google Search Console: finish the indexing work

1. Use the Domain property viasphereglobal.com, or the URL-prefix property
   https://viasphereglobal.com/ for the canonical site.
2. Under Sitemaps, submit https://viasphereglobal.com/sitemap.xml and confirm
   Success. Do not repeatedly submit multiple host variants.
3. Inspect https://viasphereglobal.com/ and select Test live URL. Confirm page
   fetch succeeds, crawling is allowed, indexing is allowed, and rendered content
   is present. A live test does not guarantee indexing.
4. After the live test succeeds, use Request indexing. Repeat for
   https://viasphereglobal.com/student-visa-consultant-ghaziabad . Let the sitemap
   expose the other pages rather than repeatedly requesting all of them.
5. Review the exact Page indexing reason, Last crawl, User-declared canonical,
   Google-selected canonical, and any fetch errors. Check Security issues and
   Manual actions if Search Console reports a problem there.

Interpretation:
- Alternate page with proper canonical / Page with redirect: expected for the
  www or HTTP variants once canonical consolidation is in place. Inspect root HTTPS.
- Duplicate, Google chose different canonical: compare Google's canonical with
  the declared root HTTPS URL and check conflicting redirects/content.
- Blocked by robots / excluded by noindex: inspect the actual URL's live response
  and Cloudflare behaviour; do not assume the homepage's response applies to it.
- Server error / DNS error: fix the reported availability issue first. Review
  Cloudflare events if Google reports a challenge or blocked request.
- Discovered or Crawled, currently not indexed: there may be no remaining technical
  block. Assess useful original content, internal discovery and duplication;
  repeated resubmission is not a substitute for improvement.

Send the expanded Page indexing panel or the exact reason to diagnose the remaining
cause. The generic 'URL is not on Google' message is insufficient by itself.

## Ranking work after technical fixes

1. Complete and verify ViaSphere's Google Business Profile with the real office
   address, current phone, website and accurate hours. Keep this consistent across
   the website and genuine business listings. Verify the currently displayed hours
   with your office team before reusing them elsewhere.
2. Add original, useful destination guidance based on current official sources,
   and identify who reviews it. Review existing university ranking tables against
   their claimed source; this patch does not validate those rank figures.
3. Publish genuine counsellor experience and student case studies only with permission.
   Request honest reviews from actual clients; do not fabricate ratings or results.
4. Use Search Console impressions, queries, clicks and indexed canonical pages to
   monitor progress. Measure Core Web Vitals separately before promising speed scores.

Neither technical eligibility, a sitemap nor Request indexing guarantees inclusion,
a ranking position, or an indexing deadline. Google makes those decisions.

## Official references

- Google technical requirements: https://developers.google.com/search/docs/essentials/technical
- Canonical URLs: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Recrawling: https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- URL Inspection: https://support.google.com/webmasters/answer/9012289
- Local ranking: https://support.google.com/business/answer/7091
