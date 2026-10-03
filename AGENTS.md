# AGENTS.md

Overview of this codebase for AI agents and developers.

## Project Overview

Marketing site for ViaSphere Global Consultants, a student visa and higher-education admissions consulting company.
Static content, no authentication, and no database. Built with TanStack Start and configured for server-side rendering on Cloudflare Workers with static assets.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (custom CSS variables for palette, no default theme) |
| Forms | Client-side email and WhatsApp actions |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Cloudflare Workers SSR + static assets |

## Directory Structure

```
├── public
│   └── favicon.ico
├── wrangler.jsonc             # Worker name and static asset directory
├── src
│   ├── components
│   │   ├── Header.tsx        # Sticky nav with mobile menu
│   │   └── Footer.tsx        # Site footer: office info, sitemap links
│   ├── data
│   │   └── content.ts        # Shared services, destinations, and process-step content
│   ├── routes
│   │   ├── __root.tsx        # Root layout: Header/Footer wrap, SEO meta
│   │   ├── index.tsx         # Home page
│   │   ├── services.tsx      # Service detail list
│   │   ├── destinations.tsx  # Country study pathways
│   │   ├── about.tsx         # Company purpose and approach
│   │   └── contact.tsx       # Consultation form with email and WhatsApp actions
│   ├── router.tsx            # TanStack Router setup
│   └── styles.css            # Tailwind import, font imports, CSS custom properties for the palette
└── tsconfig.json              # @/* path alias for src/*
```

The Cloudflare Vite plugin builds the server to `dist/server` and assets to
`dist/client`. Deploy `dist/server/wrangler.json`; do not deploy `dist/client`
alone or add a catch-all `public/_redirects` rule. No SPA shell is generated.

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are plain files under `src/routes/`. `__root.tsx` is the shared layout. No dynamic route params are used on
country pages; exam pages use `$exam`. Content is static and sourced from `src/data/content.ts`.

### Content

Shared service descriptions, destination data, and process steps live in `src/data/content.ts` as typed
arrays. Update that file to change site content rather than editing route components directly, unless the change is
structural (new page, new section layout).

### Contact Form

`src/routes/contact.tsx` builds a formatted enquiry from the form fields. The visitor chooses Email or WhatsApp,
and the browser opens the corresponding application with a prefilled message. Update `CONSULTATION_EMAIL` and
`WHATSAPP_NUMBER` in that file when the business contact details change.

## Styling Conventions

- Palette and fonts are defined as CSS custom properties in `src/styles.css` (`--navy`, `--gold`, `--parchment`,
  etc.) and referenced in Tailwind classes via `bg-[var(--navy)]` style arbitrary values, rather than extending the
  Tailwind theme config.
- Display font is Fraunces (serif), body font is Work Sans — both loaded via Google Fonts `@import` in `styles.css`.
- `@/` path alias resolves to `src/`.

## Development Commands

```bash
npm run dev      # Start dev server on port 3000
pnpm run build   # Production Worker and asset build
pnpm run typecheck # Run after build generates route tree
```

Detail pages are in `destinations_` and `exams_` so they are not nested under
the listings. Their public URL paths do not include the underscore.
