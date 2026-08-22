<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Make the site as cool as we want, but make status impossible to misunderstand

The visual design is allowed to be futuristic, dense and confident. What it is
never allowed to do is imply maturity that does not exist. A stranger who reads
one page should come away with the right idea of what ME has, and no amount of
polish is worth being wrong about that.

## The four tiers

Every product, subject area and unfinished milestone carries one, in words, not
in colour alone. They live in `data/tiers.ts`.

| Tier | Means |
| --- | --- |
| BUILDING NOW | Active implementation, or verified technical work, happening now. There are commits this month. |
| PLANNED | The next step is defined and written down. Implementation has not meaningfully started. |
| LONG-TERM | A serious direction ME intends to reach. Nobody is building it. Nothing exists. |
| VERY LONG-TERM | An extremely ambitious idea kept on the map on purpose. Not a product, not a plan, not close. |

BUILDING NOW is the only tier that claims anything is happening. Do not assign
it without checking the project's own repository first. A tier changes when the
work changes, not when the writing does.

## Practical rules

- **Concepts are labelled concepts.** If nobody has built it, the page says so
  in the same sentence that describes it, not three paragraphs later.
- **Active work is labelled active**, and only where a repository backs it up.
- **A verified milestone says exactly what was verified, and where.** "M9 is
  complete" is not enough. "Three presses down move it exactly forty eight
  pixels, checked in QEMU" is.
- **Software only says software only.** No page describes a program in words
  that sound like a device.
- **QEMU only says QEMU only.** ME OS has never booted on physical hardware. If
  that changes, it changes because somebody watched it boot, not because the
  copy improved.
- **No physical hardware means no physical hardware.** ME has zero custom
  physical hardware prototypes. Write "none", never "not yet at scale",
  "early stage hardware" or anything else that leaves room.
- **Future plans use future tense.** "Would", "is intended to", "the design
  goal is". Never the present tense for something that does not exist.
- **Never use visual polish to imply maturity.** A status dot, a progress bar, a
  console panel or a live looking readout must never sit next to something that
  is not running. Nothing on this site is a live feed.
- **Do not invent people or money.** No employee counts, funding, investors,
  customers, partnerships or launch claims. The nine branches are areas on a
  map, not staffed departments.
- **Around 2035 is a current target and a working plan.** Never a promise, never
  a date things will be finished by, and never evidence that anything exists.

## Checking a claim before publishing it

The projects have their own repositories, and those are the source of truth.
Read `docs/milestones.md` or the README of the project before writing a status
line about it. If a repository cannot be read, use conservative wording rather
than guessing.

## Writing style

Short, direct and technically specific. No em dashes. Avoid semicolons in prose.
No "leverages", "facilitates", "robust ecosystem" or similar filler. Cool and
honest, not boring and honest.

## The founder page

`/founder` is a public page, reachable by anybody who has the address. It is
unlisted, which means it is absent from `secondaryNav`, so the footer, the
mobile menu and the sitemap all leave it out, and it asks crawlers not to index
it. That is tidiness, not access control, and it must never be described as
private, protected or internal. A static site cannot tell who is asking.
