/** Company strategy, stated as targets and working plans rather than promises.
 *
 *  Nothing here is a commitment to a customer, a funder or a ship date. ME has
 *  no investors, no customers and no product for sale, and this file must not
 *  imply otherwise. Language is deliberately hedged: target, working plan,
 *  current hypothesis, concept. */

/** Markers on the runway axis. Drawn by components/runway.tsx. */
export const runway = {
  eyebrow: "R and D runway",
  headline: "Formal company launch: around 2035",
  markers: [
    {
      when: "2026",
      what: "Now",
      note: "Software only. Zero physical hardware.",
    },
    {
      when: "2026 to 2035",
      what: "Prototypes and dead ends",
      note: "Build some ideas, drop the rest.",
    },
    {
      when: "~2035",
      what: "Formal launch, target",
      note: "A current working plan, not a promise.",
    },
  ],
  limits: [
    "Target, not a promise",
    "Most of this map will not exist by then",
    "Not a funding round, not a launch date",
  ],
};

/** Why the map is so much wider than the work. Kept short on purpose. */
export const roadmapNote = {
  title: "What this roadmap is",
  body: "Where ME could go, not what is being built. Early work makes technology later work reuses.",
};

/** How early ME actually is. This exists because a wide roadmap and a
 *  confident visual design read as a big organisation. */
export const teamReality = {
  title: "How early this is",
  facts: [
    "Nine branches. Areas on a map, not staffed departments.",
    "Nobody is staffed to any of them.",
    "Three software projects have work happening on them.",
    "ME has not launched and is not trading.",
  ],
};

export const beforeLaunch = [
  {
    title: "A portfolio, not a product",
    body: "Software prototypes, concepts, research. Hardware only once a question needs a physical answer.",
  },
  {
    title: "Foundations first",
    body: "An operating system, a command path, calibration, safety checks. Every later branch borrows them.",
  },
  {
    title: "Capabilities that get reused",
    body: "Routing for a projector is what a robot needs.",
  },
  {
    title: "Honest status labels",
    body: "Every product carries a tier. ME has no physical hardware prototype, and no page says otherwise.",
  },
];

export const flagship = {
  question: "What should ME be able to show in three to five years?",
  hypothesis: "Carl running on ME OS as an agent native computing base",
  body: "Not a device. The agent layer paired with the operating system built to host it, with a human override.",
  why: [
    "Both projects are already active",
    "Every other branch wants the same base",
    "Software, so it needs no factory",
  ],
  caveat: "A hypothesis, not a closed decision. Kept open so it can be argued with.",
};

export const notClaimed = [
  "No investors, no funding, no valuation",
  "No customers, no orders, no revenue",
  "No partnerships, no suppliers, no contracts",
  "No product for sale, no ship date",
  "No physical hardware prototype",
  "No employees, no departments, no staffed branches",
  "Not launched. Around 2035 is a target, not an event",
];
