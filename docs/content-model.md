# Content model

Every fact about ME lives in `data/` as a typed record. Pages decide how
something looks; they never decide what it says. That is what keeps the
homepage, the products page, a product detail page and the founder console from
drifting apart.

## Files

| File | Holds | Read by |
| --- | --- | --- |
| `data/site.ts` | Mission, summary, hardware note, navigation, the feedback document link, the public and internal boundary | Every page, header, footer |
| `data/tiers.ts` | The four public status tiers, what each one means, and the rule for assigning them | Home, products, research, roadmap, about, product detail |
| `data/products.ts` | The products, their tier, status, kind, purpose, current milestone, long term direction, related products and availability | Home, products index, product detail |
| `data/research.ts` | Nine subject areas, their tier, a one line summary and open threads | Home, research |
| `data/research-tools.ts` | The research tool family and the research loop | Research Tools detail page |
| `data/manufacturing.ts` | The manufacturing model, the first proof of concept, the factory planning room concept | Manufacturing |
| `data/operations.ts` | Shift model, breaks, incident handling, alert principles | Operations |
| `data/accessibility.ts` | Multimodal input intent, channels and principles | About |
| `data/campus.ts` | HQ shape, zones, separate buildings, campus bikes | Campus |
| `data/energy.ts` | What power distribution has to deal with, and the smart DC bus concept | Research |
| `data/roadmap.ts` | Every published milestone, each with a state and, where it is not complete, a tier | Home, roadmap, product detail, founder |
| `data/execution.ts` | Where each project stands, and the evidence for it | Roadmap |
| `data/strategy.ts` | The 2035 runway, what the roadmap is, how early ME is, the flagship hypothesis, and what ME does not claim | Home, about, roadmap |
| `data/updates.ts` | The progress log | Updates |
| `data/founder.ts` | Founder console cards, panels, interests, recent progress | Founder |

## Rules

**Two labels, two questions.** The tier answers *when*: is anybody building
this. The status answers *what*: how far along it is. Both are unions, so an
invented label fails the build.

```ts
"BUILDING NOW" | "PLANNED" | "LONG-TERM" | "VERY LONG-TERM"
```

`tierShort` prints a short gloss next to every label, and `TierLegend` draws the
four of them as chips with a distinct shape each, so a reader never has to infer
what one means and never has to see the colour. BUILDING NOW is the only tier
that claims work is happening, and it is assigned only after reading the
project's own repository. A tier changes when the work changes, not when the
writing does.

**Status is a type, not a sentence.** `Status` is a union of five values, so an
invented status fails the build rather than shipping:

```ts
"Concept" | "Research" | "Planned Prototype" | "Software Prototype" | "Verified Software Milestone"
```

`statusMeaning` gives each one a plain definition, printed on the products page
so a reader does not have to guess what a label means. The words
`operational`, `deployed`, `in production` and `hardware prototype` are not in
the vocabulary, because none of them is true of anything ME has.

**Milestones live once.** `data/roadmap.ts` is the only place a milestone is
described. The roadmap page lists all of them, each product detail page filters
to its own, the homepage shows the recent ones, and the founder console shows
the tracked subset. Changing a state changes it everywhere.

**Products reference each other by slug.** `related: ["carl", "employee-bracers"]`
resolves through `productBySlug`, so a broken reference is visible immediately
rather than becoming a dead link.

**Visuals carry the load prose used to.** `components/runway.tsx` draws the
2035 axis, `components/matrix.tsx` the project status grid, `components/meter.tsx`
the segmented milestone bars, `components/stack.tsx` the shared technology
layers, `components/gap.tsx` the distance between ME OS and Factorio, and
`components/tiers.tsx` the tier chips and their SVG glyphs. Every one carries a
text label or an accessible name, and none of them signals status by colour
alone.

**Prose that belongs to one page stays on that page.** Data files hold facts
that more than one page needs. A paragraph of framing written for a single
section stays in that section's JSX. Moving unique prose into `data/` makes it
harder to read, not easier to maintain.

## Adding things

- **A product**: add a record to `data/products.ts`. It appears on the products
  index, gets a detail page at `/products/<slug>` automatically through
  `generateStaticParams`, and shows on the homepage if its slug is in the
  featured list in `app/page.tsx`.
- **A milestone**: add a record to `data/roadmap.ts` with a `project` that
  matches a product name, and it will appear on that product's page too. Give it
  a `tier` unless its state is `Complete`, because a completed milestone already
  answers when.
- **An update**: add a record to `data/updates.ts`. Entries sort newest first.
- **A research branch**: add a record to `data/research.ts`. Its slug becomes
  the anchor the homepage grid links to.
