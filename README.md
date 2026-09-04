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
| `/products` | The eight products, each with a status label and what that label means |
| `/products/<slug>` | One product in detail: purpose, current milestone, long term direction, related products, availability |
| `/research` | Nine research branches with their tier and open threads |
| `/manufacturing` | The manufacturing model, the first proof of concept part, and the factory planning room concept |
| `/operations` | How ME intends to run critical functions: shifts, breaks, handoff logs, camera and machine safety, alert principles |
| `/campus` | The HQ and campus concept: core, wings, separate buildings, borrowed bikes |
| `/hardware` | The hardware status page: zero physical prototypes, stated plainly |
| `/roadmap` | How execution works, and every published milestone |
| `/about` | Mission, long horizon philosophy, multimodal interfaces, shared systems |
| `/feedback` | How to send criticism, linking the open community feedback document |
| `/updates` | Progress log, newest first |
| `/founder` | A mission control style public view of what the founder is working on |
| `/portal` | Unlisted. A password gated room shared by people and agents, held by an external service |

The founder page is deliberately styled differently from the rest of the site:
denser panels, monospace labels, status dots, and progress bars. It is still a
public page, reachable by anybody who has the address.

It is **unlisted**, not private. It is absent from `secondaryNav`, which is what
the footer, the mobile menu and the sitemap all read, and it asks crawlers not
to index it. Nothing links to it. That is tidiness rather than access control,
and it must never be described as private, protected or internal, because a
static site cannot tell who is asking. Keeping it unlisted is also what stops a
mission control styled page from dominating a first impression of ME.

## Public and internal boundary

This repository is the public site only.

```
www          → this site. Static. No accounts, no internal data, no admin routes.
command.*    → a future authenticated internal command center. Not built.
```

Rules that keep the boundary real:

- No API routes and no server actions. The site itself remains a static export
  with no server of its own.
- No hidden admin functionality behind a URL or a query parameter.
- No credentials, IP addresses, logs or message contents anywhere in the
  repository, including the founder page.
- Founder page status values are illustrative summaries of published project
  state, not a live feed. Nothing on the site reads from an ME system.

The one exception, added with `/portal`, is written down rather than left as a
quiet contradiction. That page holds a password prompt and its script calls one
external service, whose address is in `app/portal/config.ts`. The address is not
a secret, because the service refuses everybody without a password and holds the
password checking itself. No page on this site reads from an ME machine, and the
room is the only thing any page can reach.

When the internal command center is built, it goes in a separate repository on a
separate host. It does not share this frontend.

## Status vocabulary

Two labels, answering two different questions. The tier says **when**. The
status says **what**. Both are TypeScript unions, so a bad label fails the
build.

### Tiers: is anybody building this

Shown on every product, every subject area, and every milestone that is not
complete. Words, not colour alone. Defined in `data/tiers.ts`.

| Tier | Means |
| --- | --- |
| BUILDING NOW | Active implementation or verified technical work happening now. There are commits this month. |
| PLANNED | The next step is defined and written down. Implementation has not meaningfully started. |
| LONG-TERM | A serious direction ME intends to reach. Nobody is building it. Nothing exists. |
| VERY LONG-TERM | An extremely ambitious idea kept on the map on purpose. Not a product, not a plan, not close. |

BUILDING NOW is the only tier that claims work is happening, and it is only
assigned after reading the project's own repository. Four projects hold it
today: ME OS, the Holoprojector control software, Carl, and AOS.

### Status: how far along it is

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

### The 2035 R&D runway

Around 2035 is ME's current target for a formal company launch, stated as a
target and a working plan rather than a promise. The years before it are an R&D
runway: build prototypes, test ideas, and find out which concepts deserve to
become products. It appears on `/about` and `/roadmap`, and it never implies
that everything on the roadmap will exist by then, that any branch is staffed,
or that the company has launched. `data/strategy.ts` holds the wording.

## Where content lives

All copy that is data rather than layout lives in `data/`:

| File | Contents |
| --- | --- |
| `data/site.ts` | Company facts, mission, navigation, feedback document URL, boundary notes |
| `data/products.ts` | Products, status labels, and where each one stands |
| `data/research.ts` | Research branches, priorities, and threads |
| `data/tiers.ts` | The four public status tiers and what each one means |
| `data/roadmap.ts` | Selected milestones, each with a state and a tier |
| `data/execution.ts` | How execution works, and where each project stands with the evidence for it |
| `data/strategy.ts` | The 2035 runway, what the roadmap is, how early ME is, and what ME does not claim |
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

Company level documents also live here, because there is no separate ME
documentation repository: [docs/me-change-log.md](docs/me-change-log.md) records
ME decisions and milestones, and [docs/me-doc-style.md](docs/me-doc-style.md)
records how ME documents are formatted. Both are public safe and written so they
can be mirrored into Drive without editing.

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

## Deployment

The site is a static export. `npm run build` writes the whole site to `out/`,
which any static host can serve.

**GitHub Pages hosts it, on multiverse-enterprises.com.** A custom domain
serves from the root, so production builds with no path prefix:

```
BASE_PATH= SITE_URL=https://multiverse-enterprises.com npm run build   # production
npm run build                                                          # local preview
```

`deployment.config.mjs` is the only place that knows about any of this. Next
applies the prefix to every link, route and asset itself, so no page, component
or data file mentions the host. `.github/workflows/pages.yml` builds and deploys
on every push to `main`, with no secrets in the repository, and fails the build
if the old project path appears anywhere in the output.

HTTPS is issued and enforced: `http` redirects to `https`, `www` redirects to
the apex, and the old project address redirects to the domain. Details are in
[docs/deployment.md](docs/deployment.md) and
[docs/domain-cutover.md](docs/domain-cutover.md).

`next/font` downloads Geist at build time, so the build machine needs network
access once. The served site makes no external requests.
