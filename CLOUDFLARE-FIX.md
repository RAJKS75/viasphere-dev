# ViaSphere Cloudflare repair — 3 October 2026

## Findings and changes

1. Country detail routes were children of the destinations listing, which has no Outlet. Likewise exam details were children of the exams listing. This hides the requested detail content behind the listing. Moved these files into destinations_ and exams_, using TanStack Router non-nested routes. Public URLs are unchanged. Updated the exam parameter hook to match the new internal route ID.
2. The prerender configuration used an unsupported routes property and did not enable prerendering. Vite transpiled it but TypeScript rejected it. Removed that inactive configuration and retained server-side rendering using the existing official Cloudflare Vite adapter.
3. README and AGENTS described a static SPA shell and Pages deployment that the code does not produce. Corrected both documents. Deployment now explicitly targets the generated dist/server/wrangler.json, which includes the server entry and dist/client assets.
4. Added a clean build, production preview, typecheck, deployment dry-run and HTTP smoke-test scripts. Pinned pnpm to the 10.11.1 version shown in the supplied Cloudflare build history and allowed esbuild/workerd installation scripts.
5. Removed unused imports/constants that failed strict TypeScript checking. Business content, branding and enquiry destinations are preserved.

## Validation completed

- Frozen-lockfile installation with pnpm 10.11.1: passed.
- Production client/server build: passed.
- TypeScript strict checking: passed.
- Production Cloudflare Worker HTTP checks: all 19 pages passed. Country and exam pages return their specific H1, one H1 per page, correct canonical URL and CSS links. Country university content is present.
- 41 linked/local assets passed, including CSS, JavaScript, logo, sitemap, robots and all seven visa PDFs; PDF/CSS/JS content types checked.
- Unknown URL returned HTTP 404.
- Wrangler deployment dry run: passed with bundled server modules and client assets.

The test environment needed a temporary loopback-interface shim because its network-interface enumeration is restricted. That shim is not included in the project or required for deployment. HTTP smoke checks tested the real workerd runtime. Browser visual rendering, enquiry app handoff and real external images were not tested.

## Update your Git checkout

Extract this archive. Copy its root contents into your existing checkout (the folder containing package.json), including .gitignore and pnpm-workspace.yaml. Keep your .git folder.

IMPORTANT: delete the old src/routes/destinations and src/routes/exams folders when copying this fix. They are replaced by src/routes/destinations_ and src/routes/exams_. Keeping both will create duplicate routes. These folders contain only the country and exam detail pages in the uploaded snapshot.

Review with git status and git diff, then commit all intended changes, including deleted routes and new underscore folders. Push to the branch selected in Cloudflare; do not assume main if your Worker is linked to another branch.

## Cloudflare settings for the existing Worker

- Worker name in wrangler.jsonc: viasphere-dev2 (retained from uploaded source).
- Root directory: repository root containing package.json.
- Build command: pnpm run build
- Deploy command: pnpm exec wrangler deploy --config dist/server/wrangler.json
- Node.js: 22.12 or newer.
- Package manager: pnpm 10.11.1.

This package is for Cloudflare Workers. Uploading only dist/client to Cloudflare Pages will not deploy the server and will not provide the homepage. If the current account uses Pages, deploy this version to the existing/intended Worker and attach the website domains there.

Confirm viasphereglobal.com and www.viasphereglobal.com under the intended Worker's Domains & Routes. Remove conflicting redirect loops only if observed in your account. DNS, custom-domain bindings, dashboard build settings and the live outage could not be verified from the archive. The public website was not reachable from this environment.

## After deployment

Open /, /destinations/usa, /destinations/uk, /exams/ielts, /contact, /robots.txt and /sitemap.xml. Country guides must show universities for that country, and exam guides must show the selected exam. Verify Email/WhatsApp buttons with a sample enquiry.

To run the automated HTTP checks against production:

```powershell
$env:SMOKE_BASE_URL = 'https://viasphereglobal.com'
pnpm run test:smoke
Remove-Item Env:SMOKE_BASE_URL
```

No GitHub push or production deployment was performed from this session.
