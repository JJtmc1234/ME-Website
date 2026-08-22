/** Public status tiers.
 *
 *  The status label answers what a thing is. The tier answers when, which is
 *  the part visitors were previously left to guess.
 *
 *  Four tiers, four meanings, no overlap. A tier is a claim about ME's own
 *  activity, so it can be checked: BUILDING NOW should always be traceable to
 *  commits in a real repository, and everything else to nothing at all.
 *
 *  The label is always shown as words, with a shape beside it. Colour is a
 *  third signal and never the only one.
 */

export type Tier = "BUILDING NOW" | "PLANNED" | "LONG-TERM" | "VERY LONG-TERM";

export const tierOrder: Tier[] = [
  "BUILDING NOW",
  "PLANNED",
  "LONG-TERM",
  "VERY LONG-TERM",
];

/** The gloss shown beside every tier chip. Fragments, not sentences. */
export const tierShort: Record<Tier, string> = {
  "BUILDING NOW": "Commits this month",
  PLANNED: "Next step written down, not started",
  "LONG-TERM": "Direction only, nobody building it",
  "VERY LONG-TERM": "Ambitious idea, nowhere near",
};

export const tierTone: Record<Tier, string> = {
  "BUILDING NOW": "text-status-active border-status-active/45 bg-status-active/10",
  PLANNED: "text-status-prototype border-status-prototype/40 bg-status-prototype/8",
  "LONG-TERM": "text-status-research border-status-research/40 bg-status-research/8",
  "VERY LONG-TERM": "text-status-concept border-status-concept/40 bg-status-concept/8",
};

/** Read this before believing any tier on this site. */
export const tierRule =
  "Only BUILDING NOW claims work is happening. The other three do not exist.";
