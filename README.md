# Multiverse Enterprises public website

The public facing website for Multiverse Enterprises (ME). It explains what ME is,
what it is building, what it is researching, how it executes, and how to send
feedback. It is a static, read only site. It holds no accounts, no internal data,
and no connection to any ME system.

Mission: maximize humanity's long-term ability to understand, build, survive, and
flourish.

## Stack

| Piece | Choice | Why |
| --- | --- | --- |
| Framework | Next.js 16, App Router | Static generation per route, file based routing, first class TypeScript |
| Language | TypeScript 5 | Content data is typed, so a bad status label fails the build |
| Styling | Tailwind CSS 4 | Design tokens live in one CSS file, no runtime cost |
| Fonts | Geist Sans and Geist Mono via next/font | Self hosted at build time, no external font request at runtime |
| Runtime | Node 22 | Whatever the machine already had |

No UI kit, no animation library, no analytics, no tracking. Every route is
prerendered as static HTML.

## Local setup

```
cd ~/Projects/ME-Website
npm install
```

## Run

```
npm run dev
```

Then open http://localhost:3000. Use `npm run dev -- --port 3111` for another port.

## Build and check

```
npm run build      # production build, all routes prerendered
npm run start      # serve the production build
npm run lint       # eslint, including the Next.js rules
```

## Site structure

| Route | Purpose |
| --- | --- |
| `/` | Mission, what ME is, technology areas, selected projects, links deeper |
| `/products` | The five products, each with a status label and what that label means |
| `/products/<slug>` | One product in detail: purpose, current milestone, long term direction, related products, availability |
| `/research` | Nine research branches with their current priority and open threads |
| `/manufacturing` | The manufacturing model, the first proof of concept part, and the factory planning room concept |
| `/operations` | How ME intends to run critical functions: shifts, breaks, handoff logs, camera and machine safety, alert principles |
| `/campus` | The HQ and campus concept: core, wings, separate buildings, borrowed bikes |
| `/hardware` | The hardware status page: zero physical prototypes, stated plainly |
| `/roadmap` | How execution works, and every published milestone |
| `/about` | Mission, long horizon philosophy, multimodal interfaces, shared systems |
| `/feedback` | How to send criticism, linking the open community feedback document |
| `/updates` | Progress log, newest first |
| `/founder` | A mission control style public view of what the founder is working on |

The founder page is deliberately styled differently from the rest of the site:
denser panels, monospace labels, status dots, and progress bars. It is still a
public page.

## Public and internal boundary

This repository is the public site only.

```
www          → this site. Static. No accounts, no internal data, no admin routes.
command.*    → a future authenticated internal command center. Not built.
```

Rules that keep the boundary real:

- No authentication, no session handling, no API routes, and no server actions.
- No hidden admin functionality behind a URL or a query parameter.
- No credentials, hostnames, IP addresses, logs, message contents, or
  infrastructure details anywhere in the repository, including the founder page.
- Founder page status values are illustrative summaries of published project
  state, not a live feed. Nothing on the site reads from an ME system.

When the internal command center is built, it goes in a separate repository on a
separate host. It does not share this frontend.

## Status vocabulary

ME has no physical hardware prototypes. The site says so on the homepage, on the
products page, on every product detail page, on the founder console, and on a
page of its own at `/hardware`. Product
status is a TypeScript union of five careful values:

| Label | Means |
| --- | --- |
| Verified Software Milestone | A stated success condition is met and checked automatically. Software only. |
| Software Prototype | Runs as software. No hardware exists. |
| Planned Prototype | Designed to be built, not built yet. |
| Research | Open questions being worked on. Nothing has been built. |
| Concept | Written down as a direction. Not being built yet. |

The words operational, deployed, in production and hardware prototype are not
used, because none of them is true of anything ME has.

## Where content lives

All copy that is data rather than layout lives in `data/`:

| File | Contents |
| --- | --- |
| `data/site.ts` | Company facts, mission, navigation, feedback document URL, boundary notes |
| `data/products.ts` | Products, status labels, and where each one stands |
| `data/research.ts` | Research branches, priorities, and threads |
| `data/roadmap.ts` | The execution model and selected milestones |
| `data/updates.ts` | The progress log |
| `data/research-tools.ts` | The research tool family and the research loop |
| `data/manufacturing.ts` | Manufacturing model, proof of concept, factory planning room |
| `data/operations.ts` | Shifts, breaks, incident handling, alert principles |
| `data/accessibility.ts` | Multimodal input intent and channels |
| `data/campus.ts` | HQ and campus concept |
| `data/energy.ts` | Power electronics realities and the smart DC bus concept |
| `data/founder.ts` | Founder page cards, panels, and interests |

Pages import from `data/`, so a fact appears once. That is also what makes it
possible later to feed the same shapes from a sanitized live source without
rewriting the pages.

Components live in `components/`, with `primitives.tsx` for layout and typography,
`cards.tsx` for the repeated card shapes, and `status.tsx` for status labels.

More detail: [docs/content-model.md](docs/content-model.md) and
[docs/public-private-boundary.md](docs/public-private-boundary.md).

Design tokens, the grid backdrop, focus styles, and reduced motion handling live
in `app/globals.css`.

## Accessibility

- Semantic landmarks, one `h1` per page, and a skip link to `#main`.
- Visible focus outline on every interactive element.
- Text contrast checked against the actual rendered backgrounds on every route.
  No text on any page falls below the 4.5:1 AA threshold for small text.
- The mobile menu is a `<details>` disclosure, so it works without JavaScript.
- `prefers-reduced-motion` disables the entrance animation, the status pulse, and
  smooth scrolling.
- No horizontal scrolling on any route at 360, 768, 1024 or 1440 pixels wide,
  checked by measuring every page at every width.

## Future deployment notes

Every route is static, so the build output can be served by any static host or by
`npm run start` behind a reverse proxy. Nothing needs a database or a server
runtime. Two things to decide before going live:

- Set the real domain, then add a `metadataBase` in `app/layout.tsx` so social
  previews resolve absolute URLs.
- Add `app/sitemap.ts` and `app/robots.ts` if search indexing matters.

`next/font` downloads Geist at build time, so the build machine needs network
access once. The served site makes no external requests.
