/** How outside feedback is sorted and what has been done with it.
 *
 *  Public safe. No names beyond what a person chose to put in the open
 *  document, no contact details, and no internal discussion.
 */

export type Category = "Idea" | "Concern" | "Correction" | "Question" | "Action item";

export const categories: { name: Category; body: string }[] = [
  { name: "Idea", body: "Something ME could build or aim at. Recorded either way." },
  { name: "Concern", body: "A risk, a doubt, or an overclaim. The most valuable kind." },
  { name: "Correction", body: "A fact that is wrong. Fixed first, and logged." },
  { name: "Question", body: "A repeated question usually means a page is missing." },
  { name: "Action item", body: "Work that follows, once somebody could start it." },
];

export const process = [
  "Put the entry in one category.",
  "Name the part of ME it touches.",
  "Decide whether it changes a plan, and say why.",
  "If it changes something, do the work and log it.",
];

export type Processed = {
  category: Category;
  summary: string;
  area: string;
  effect: string;
  why: string;
};

export const processed: Processed[] = [
  {
    category: "Question",
    summary: "What should ME be able to show in three to five years?",
    area: "Company strategy",
    effect: "Changed the plan.",
    why: "Current hypothesis: Carl running on ME OS, written so it can be argued with.",
  },
  {
    category: "Idea",
    summary: "Aim at around 2035 for ME to become a formally operating company.",
    area: "Company strategy",
    effect: "Recorded as a working target.",
    why: "A far target decides what the years before it are for. Not a promise.",
  },
  {
    category: "Idea",
    summary: "Build a portfolio before launch rather than announcing things.",
    area: "Company strategy",
    effect: "Changed the plan.",
    why: "A portfolio is evidence. A roadmap is only an intention.",
  },
  {
    category: "Idea",
    summary: "Design the eventual office around AI native work.",
    area: "Campus concept",
    effect: "Added to the campus concept.",
    why: "Intent only. ME owns no building, site or lease.",
  },
  {
    category: "Correction",
    summary: "ME has no physical hardware prototype, and wording must not suggest one.",
    area: "Whole site",
    effect: "Changed the site.",
    why: "Every product carries a status label, and the hardware page says it plainly.",
  },
  {
    category: "Concern",
    summary: "An OS that boots reads as one that runs on a computer.",
    area: "ME OS",
    effect: "Changed the wording, not the work.",
    why: "ME OS has only ever run in an emulator, and every page says so.",
  },
];

export const promise =
  "Entries are read. Some change a design, some get an answer. Nothing is deleted to make ME look better.";
