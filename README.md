# Viasphere

Marketing website for ViaSphere Global Consultants, a student visa and university admissions consultancy. The site presents the company, its services, supported destinations, and email/WhatsApp consultation options.

## Tech Stack

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing via TanStack Router)
- Vite 7
- Tailwind CSS 4
- Email and WhatsApp enquiry actions
- Server-side rendering on Cloudflare Workers with static assets

## Project Structure

- `src/routes/` — pages: home, student visa landing page, services, destinations, about, contact
- `src/components/` — shared `Header` and `Footer`
- `src/data/content.ts` — services, destinations, and process steps
- `wrangler.jsonc` — source Cloudflare Worker configuration

## Local development and verification

Use Node.js 22.12 or newer and pnpm 10.11.1 (pinned in package.json).

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm run build
pnpm run typecheck
pnpm run deploy:check
pnpm run test:smoke
pnpm run preview
```

Build generates src/routeTree.gen.ts before typechecking. Do not commit generated
output, node_modules, or .wrangler. Preview runs the production Worker locally.

## Cloudflare Workers deployment

This project deploys a server Worker, not a static-only Pages site.
The Cloudflare Vite plugin generates dist/server/wrangler.json, the bundled
server, and dist/client assets. There is no static homepage index.html.

Use these settings for the existing viasphere-dev2 Worker:

| Setting | Value |
| --- | --- |
| Production branch | main (or the branch you actually push this fix to) |
| Root directory | Repository root containing package.json |
| Build command | pnpm run build |
| Deploy command | pnpm exec wrangler deploy --config dist/server/wrangler.json |
| Node.js | 22.12 or newer |
| Package manager | pnpm 10.11.1 |

Do not set an assets-only deploy command or use dist/client as a Pages output
folder for this version. Do not add a catch-all public/_redirects rule or SPA
fallback: the server renders the requested route and handles missing routes.
For local authenticated deployment, pnpm run deploy builds and deploys together.

In Cloudflare, confirm both viasphereglobal.com and www.viasphereglobal.com
are attached to the intended Worker under Settings > Domains & Routes.
If the deployment passes but the domain fails, check the custom-domain status,
DNS and any redirect rules. Account settings cannot be confirmed from this archive.

## Routing

The destinations_ and exams_ folders use TanStack Router's trailing-underscore
convention to render details independently of the listing pages. Public URLs
remain /destinations/usa, /destinations/uk, /exams/ielts, and so on.
When copying these fixes into an existing checkout, remove the old
src/routes/destinations and src/routes/exams directories to avoid duplicate routes.

## Study abroad content

Country pages: UK, USA, Australia, New Zealand, France, Germany and Ireland. Each includes destination imagery, student visa process guidance, downloadable visa guide PDFs and university directories. Exam pages cover IELTS, TOEFL, GMAT, GRE and SAT.

## Study-abroad page enhancements
- Country university entries now include city, study levels, popular subject areas, a typical admissions checklist, and verified official university website links for selected institutions.
- Exam pages now include purpose/audience, duration, section-by-section structure, scoring, score scale, preparation checklist, results information, registration links and official sources for IELTS, TOEFL, GMAT, GRE and SAT.
- Admissions requirements and test policies can change by institution, programme and intake. The website directs students to the official university/test-provider source for final verification.
