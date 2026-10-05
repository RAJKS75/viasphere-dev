# Homepage, consultation and destinations update

Prepared from RAJKS75/viasphere-dev, cloudflare-fix commit
fce3778568169fa697e68da0ea3727d070a1eada (5 October 2026).
The current repository logo and Worker configuration are preserved.

## Changes

- Desktop menu buttons occupy seven evenly spaced columns in a dedicated
  navigation row below the brand/contact row. Mobile navigation opens a
  two-column menu; destinations open an accessible expandable grid.
- The homepage hero contains a visible white form card titled
  "Avail Free Consultation" beside the introduction. On mobile the form
  appears directly below the introduction.
- Homepage consultation buttons scroll to and focus that form. Other pages
  keep the consultation dialog. Inline fields do not autofocus on page load.
- The form keeps the existing email / WhatsApp handoff, required-field
  validation and contact consent. Visitors must review and send the message
  in their chosen app; there is no new backend or CRM integration.
- Malta appears in the header, homepage and destinations listing, with its
  own /destinations/malta route, University of Malta and MCAST links,
  official Identita guidance, downloadable planning PDF and sitemap entry.
- Australia had an invalid Unsplash photo ID ending in e8d4. The verified
  Sydney Harbour photograph is now bundled locally as australia.jpg.
- Malta's photo is bundled locally, with CSS framing chosen for landscape cards.

## Apply to your existing local repository

Create a branch before copying the package files into your clone. Keep the
clone's existing .git folder and commit history.

```sh
git switch cloudflare-fix
git pull --ff-only origin cloudflare-fix
git switch -c homepage-consultation-malta
```

Copy the files from the viasphere-dev folder in this ZIP into the root of
that clone. This package excludes node_modules, dist and temporary files.
Then run:

```sh
pnpm install --frozen-lockfile
pnpm run build
pnpm run typecheck
pnpm run test:smoke
git status
git add src public scripts HOMEPAGE-UPDATE.md
git commit -m "Improve homepage navigation and consultation; add Malta"
git push -u origin homepage-consultation-malta
```

Open a pull request targeting cloudflare-fix. Review before merging.
If the remote branch has advanced since the baseline commit, review the
changed files against your newer version before copying.

## Cloudflare deployment

This is a TanStack Start SSR Worker project. Build with `pnpm run build`.
The deployment command remains:

```sh
pnpm exec wrangler deploy --config dist/server/wrangler.json
```

Do not upload dist/client as a standalone site or add an SPA catch-all redirect.
No GitHub push, merge or live Cloudflare deployment was performed for this update.
DNS and redirects are separate from this source change.

## Verification

- Confirm desktop navigation uses one horizontal row and mobile menu uses columns.
- Confirm the homepage form is visible and "Avail Free Consultation" focuses it.
- Check invalid/empty form fields and consent prevent handoff.
- Check Email and WhatsApp open the intended app with the enquiry details.
- Check Malta from navigation, homepage and destination listing.
- Refresh /destinations/malta directly and open its PDF guide.
- Confirm Australia and Malta images load on both listing and country pages.
- Confirm sitemap.xml includes /destinations/malta.

Automated route/asset checks cover 20 pages, 43 assets and unknown-route 404s.
Build and TypeScript validation passed. Visual browser and end-to-end interaction checks could not be completed because the browser executable was unavailable and its download failed. Perform the checklist above before production deployment.

## Content and image sources

IDP consultation reference: https://www.idp.com/india/what-we-do/free-study-abroad-counselling/
Malta immigration: https://identita.gov.mt/central-visa-unit-student-visa-courses-exceeding-90-days/
University of Malta: https://www.um.edu.mt/study/admissionsadvice/
MCAST: https://mcast.edu.mt/international-applicants/
Malta photograph: Lucas Klein / Unsplash,
https://unsplash.com/photos/a-harbor-filled-with-lots-of-boats-under-a-blue-sky-Ce6v1uwVxMw
Australia photograph: Unsplash,
https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9
