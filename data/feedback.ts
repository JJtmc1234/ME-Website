/** How outside feedback is sorted and what has been done with it.
 *
 *  Public safe. No names beyond what a person chose to put in the open
 *  document, no contact details, and no internal discussion. Each entry says
 *  what was raised, which part of ME it touches, and whether it changed a plan.
 */

export type Category = "Idea" | "Concern" | "Correction" | "Question" | "Action item";

export const categories: { name: Category; body: string }[] = [
  {
    name: "Idea",
    body: "A suggestion for something ME could build, try or aim at. Recorded whether or not it is acted on.",
  },
  {
    name: "Concern",
    body: "A risk, a doubt, or something that reads as overclaimed. Treated as the most valuable category, because it is the one that stops a mistake.",
  },
  {
    name: "Correction",
    body: "A statement of fact that is wrong. These are fixed first and the fix is written down, because a wrong fact left standing makes every other fact worth less.",
  },
  {
    name: "Question",
    body: "Something unclear or unanswered. A question that keeps coming back usually means a page is missing, not that the asker missed something.",
  },
  {
    name: "Action item",
    body: "Work that follows from one of the others. It is only an action item once somebody could actually start it.",
  },
];

export const process = [
  "Read the entry and put it in one category.",
  "Say which part of ME it touches, in one line.",
  "Decide whether it changes a plan, and write down why or why not.",
  "If it changes something, do the work and say so in the updates log.",
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
    summary:
      "What is the one flagship thing ME should be able to show in three to five years?",
    area: "Company strategy",
    effect: "Changed the plan.",
    why: "ME had a wide map and honest milestones but no single answer to what it was building towards. The current hypothesis is Carl running on ME OS, written down on the about page as a hypothesis rather than a decision, so it can be argued with.",
  },
  {
    category: "Idea",
    summary:
      "Aim at around 2035 for ME to become a formally operating company rather than a personal project.",
    area: "Company strategy",
    effect: "Recorded as a working target.",
    why: "A far target is more useful than no target, because it decides what the years before it are for. It is written as a target and not a promise, and no page treats it as a date anything is owed on.",
  },
  {
    category: "Idea",
    summary:
      "Spend the years before launch building a portfolio of software prototypes, written concepts and research, plus selected hardware prototypes once a question needs a physical answer.",
    area: "Company strategy",
    effect: "Changed the plan.",
    why: "It matches what ME can honestly do now, and it makes claims checkable. A portfolio is evidence. A roadmap is only an intention.",
  },
  {
    category: "Idea",
    summary:
      "Design the eventual office around AI native work rather than fitting agents into an ordinary office.",
    area: "Campus concept",
    effect: "Added to the campus concept.",
    why: "The campus page described buildings and zones but not how work would actually be done inside them. The principles are written as intent, and ME owns no building, no site and no lease.",
  },
  {
    category: "Correction",
    summary:
      "ME has no custom physical hardware prototype, and status wording must not suggest one exists.",
    area: "Whole site",
    effect: "Changed the site.",
    why: "Every product now carries an explicit status label, the hardware status page states the position plainly, and words like operational, deployed and in production are not used anywhere without evidence.",
  },
  {
    category: "Concern",
    summary:
      "An operating system that boots is easily read as an operating system that runs on a computer.",
    area: "ME OS",
    effect: "Changed the wording, not the work.",
    why: "ME OS has only ever run in an emulator. Every page that mentions it says so, and the milestone status word is verified software milestone rather than working or shipped.",
  },
];

export const promise =
  "Entries are read. Some change a design, some change a roadmap decision, and some get an answer explaining why ME disagrees. Nothing is deleted to make the company look better.";
