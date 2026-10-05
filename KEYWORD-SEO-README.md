# Ghaziabad study visa search optimisation

Prepared 5 October 2026 against cloudflare-fix commit 550bbe1be1783afbd7b6ca101e1758311036966b.
This patch follows the earlier SEO fixes already merged in PR #5. It has not been pushed or deployed.

## Target page and search intent

Primary query: Study Visa Consultants in Ghaziabad
Existing URL: https://viasphereglobal.com/student-visa-consultant-ghaziabad
Related intent: student visa guidance, study visa consultation in Rajnagar Extension.
The homepage retains its broader study-abroad focus. No duplicate keyword page or URL change is needed.

## Copy these changed files into the same paths

| File | Change |
| --- | --- |
| src/routes/student-visa-consultant-ghaziabad.tsx | Focused title, description, H1 and local introduction; practical consultation preparation; three additional FAQs; consistent address; Service structured data referencing the existing business |
| src/routes/index.tsx | Descriptive homepage link to the target page |
| src/routes/services.tsx | Contextual link to the target page |
| src/components/Footer.tsx | Clear local service link text |
| public/sitemap.xml | Correct modification date for updated services content |

KEYWORD-SEO-README.md is documentation only. Dependencies and deployment configuration are unchanged. Existing consultation actions and menus are preserved. Service markup describes content; it does not promise a special Google search display or ranking benefit. FAQ markup remains consistent with visible questions, with no FAQ rich-result promise.

## Apply safely

Start with a clean working tree; commit or preserve existing work first.

```sh
git fetch origin
git switch -c seo/ghaziabad-study-visa origin/cloudflare-fix
```

Copy the five files above preserving their paths. If your branch has advanced, review differences before replacing them.

```sh
pnpm install --frozen-lockfile
pnpm run build
pnpm run typecheck
git diff --check
```

Review, commit and push this new branch, then open a PR targeting cloudflare-fix. Use your existing Cloudflare deployment workflow after merging. If deploying manually, use `pnpm run deploy`, which deploys the built Worker configuration. Do not deploy dist/client alone.

## Search Console after deployment

1. In the viasphereglobal.com Domain property (or the matching root HTTPS URL-prefix property), inspect the exact target page above.
2. Test live URL; check that Google can fetch the page and see its new title and main heading. Request indexing once after the update. Confirm the sitemap status is Success.
3. Check the indexed result's Google-selected canonical. It should be the root HTTPS target page, rather than another host or page. A live test alone does not confirm Google's selected canonical.
4. Under Performance > Search results, select Web, filter Country to India, and add an exact-query filter for `study visa consultants in ghaziabad`. Inspect the Pages tab to see which URL receives impressions. Remove the query filter and filter the target page to find related queries.
5. Record deployment date. Compare the following 28 days with the preceding 28 days; inspect mobile and desktop separately if useful. Track impressions, clicks, CTR and average position. This is a measurement interval, not a promised ranking deadline. Low-volume queries can be omitted from reports.
6. If the page remains unindexed, use the exact Page indexing exclusion reason before making further technical changes. If indexed but receiving few impressions, work on useful original content and business reputation rather than repeatedly submitting the same URL.

## Business actions still needed

- Verify and complete your genuine Google Business Profile. Use the real business name, accurate category, the website, phone, address and actual office hours. Do not append the target keyword to your business name unless it is genuinely part of that name.
- Add genuine office and team photos. Ask real clients for honest reviews without incentives; reply helpfully. Keep business information consistent on genuine relevant listings.
- Publish verified counsellor names, relevant experience and original student case studies with permission. These details were not supplied, so this patch does not invent credentials, testimonials or success rates.
- Earn relevant links through actual education partnerships, local organisations and useful original resources. Avoid paid ranking links, copied location pages or fabricated reviews.
- Verify the existing office hours and destination claims with your team. This patch adds consultation preparation guidance, not legal advice or country-specific visa requirements.

## Evidence and limits

Live checks on 5 October returned 200 for the root homepage and target page, with server-rendered content. The www homepage resolved to the root HTTPS homepage. The earlier technical SEO changes are live. Public search retrieval surfaced the www homepage, but it does not establish a Google rank in Ghaziabad, and no Search Console performance export was available.

The exact phrase was not the target page's title or main heading before this patch; its existing wording used student visa. Synonyms are not inherently an SEO error. The changes make the page's purpose clearer while adding practical content. They do not establish that wording was the cause of low visibility.

Local validation: production build, TypeScript and rendered-page smoke checks. No Google ranking result, browser visual audit or Lighthouse score is claimed. Google controls crawling, indexing and ranking; no first-page position or deadline is guaranteed.

Official references:
- https://developers.google.com/search/docs/essentials
- https://support.google.com/business/answer/7091
- https://support.google.com/webmasters/answer/7576553
- https://support.google.com/webmasters/answer/9012289
