# ViaSphere website review and redesign — 3 October 2026

## Assessment and comparison
The source used dark navy home-page sections, oversized display headings, and mixed gold/purple/pink colours. Destinations appeared below lengthy service content. Counselling buttons navigated away to Contact, and the Header inadvertently omitted Services.

IDP's indexed India homepage and counselling pages emphasise free personalised counselling and course/university guidance. AECC's current accessible India homepage foregrounds destination discovery, a staged student journey and a free consultation form. These patterns informed the redesign; ViaSphere retains its own content and branding.

References:
- https://www.idp.com/india/
- https://www.idp.com/india/what-we-do/free-study-abroad-counselling/
- https://www.aeccglobal.com/in

Limits: ViaSphere returned HTTP 502 in the review browser; IDP returned Forbidden. IDP comparison therefore uses indexed content, not a pixel-level visual assessment. No browser visual/mobile interaction verification was possible for the local preview.

## Changes
- Home and student-visa landing hero and CTA backgrounds changed to light blue, with dark readable text.
- Home destination cards promoted directly below the initial support cards.
- Shorter home headline and consistent sans-serif headings; responsive home headline 36–54px and section headings 28–36px.
- Header navigation text increased to 15px; desktop navigation moves to mobile menu below 1280px to prevent crowding. Services restored.
- White/light-blue footer, coordinated blue palette, calmer spacing, reduced oversized headings.
- Free counselling buttons in header, home and landing open a shared on-page dialog. No automatic unsolicited popup.
- Form: name, phone, email, destination, UG/PG level, intake, interests and contact consent. Required field validation; dialog supports keyboard Escape, focus containment through native dialog, close button, outside click, and scroll restoration.
- Existing email/WhatsApp enquiry model retained. Visitor reviews and sends in the selected app; no backend lead storage or automatic submission.
- Landing destination cards lead to available country detail pages. Netherlands/Malta use the destination overview because there are no dedicated routes in this source.
- Country/exam routes, canonical metadata, documents, Cloudflare build configuration and source lockfile retained.

## Validation
Fresh extraction of this deliverable: production Vite/Cloudflare build passed; TypeScript --noEmit passed.
React component checks passed for opening the counselling dialog, required fields, close, Escape cancel and scroll restoration.
Full browser visual verification and production Worker smoke testing could not be completed due preview environment networking restrictions. Check desktop/mobile layouts after deployment.

## Deploy from a feature branch
Extract this ZIP. Copy its contents into your existing local repository, preserving .git.
From the repository directory (PowerShell):

```powershell
git switch -c design/light-blue-counselling
pnpm install --frozen-lockfile
pnpm run build
pnpm run typecheck
git add .
git commit -m "Improve ViaSphere layout and add on-page counselling"
git push -u origin design/light-blue-counselling
```

Create a pull request into main and review before merging. Configure Cloudflare to deploy the intended branch. Keep build command `pnpm run build` and deploy command `pnpm exec wrangler deploy --config dist/server/wrangler.json` for this Workers SSR project. Do not publish dist/client alone.

Before merging, check /, /student-visa-consultant-ghaziabad, one country page, one exam page, mobile menu and counselling popup. Verify the enquiry destination before sending a test message yourself.

This deliverable updates source code; it has not been pushed to GitHub or deployed to viasphereglobal.com.
