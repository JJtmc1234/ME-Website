/** Data for the founder page.
 *
 *  Everything here is public and sanitized on purpose. No credentials, hosts,
 *  addresses, logs, message contents, or infrastructure details appear on this
 *  site, and none should be added. Status values are illustrative summaries of
 *  public project state, not a live feed from any internal system. */

import { milestones } from "@/data/roadmap";

export type ProjectCard = {
  name: string;
  focus: string;
  state: "Active" | "Waiting" | "Research" | "Concept";
  /** Share of a real, numbered milestone ladder, 0 to 100.
   *
   *  Absent when there is no ladder to measure against. A bar needs a denominator, and a
   *  project with nothing built has none, so drawing one there would invent a number and
   *  make a concept look like work in progress. The state word and the note say more.
   *
   *  Worked out from `roadmap.ts` rather than written here. Three hand written numbers
   *  disagreed with the milestones the rest of the site derives from, and one of them said
   *  a project was thirty percent done when it had finished twenty eight milestones. A
   *  number typed in a second place is a number that goes stale in a second place. */
  progress?: number;
  /** The same figure in words, so the bar is never read on its own.
   *
   *  A bare 97% beside an operating system reads as nearly finished. It is not. The
   *  denominator is the milestones ME has published so far, not the milestones a finished
   *  system would need, and the only honest fix is to say which. */
  ladder?: string;
  note: string;
};

export const founder = {
  name: "JJ",
  role: "Founder",
  blurb:
    "Operating systems, agent architecture, display software, physics, mathematics. Prefers milestones that can be demonstrated.",
  operatingPrinciples: [
    "Broad roadmap, narrow active scope",
    "A milestone counts when it runs, not when it compiles",
    "Find the root cause rather than silencing the symptom",
    "Build what the task needs and no more",
  ],
} as const;

/** How far along a project is, counted from the milestone list itself.
 *
 *  Undefined when the project has no numbered ladder, which is what keeps a bar off a
 *  concept that has nothing to measure. */
function share(project: string): number | undefined {
  const ladder = milestones.filter((m) => m.project === project);
  if (ladder.length === 0) return undefined;
  const done = ladder.filter((m) => m.state === "Complete").length;
  return Math.round((done / ladder.length) * 100);
}

/** The same count in words. Drawn beside the bar, never instead of it. */
function counted(project: string): string | undefined {
  const ladder = milestones.filter((m) => m.project === project);
  if (ladder.length === 0) return undefined;
  const done = ladder.filter((m) => m.state === "Complete").length;
  return `${done} of ${ladder.length} published milestones`;
}

export const activeProjects: ProjectCard[] = [
  {
    name: "ME OS",
    focus: "M28 tab completion, verified in QEMU",
    state: "Active",
    progress: share("ME OS"),
    ladder: counted("ME OS"),
    note: "QEMU and VirtualBox. Never booted on real hardware. Factorio does not run on it",
  },
  {
    name: "Holoprojector",
    focus: "M7 multi user interaction",
    state: "Waiting",
    progress: share("Holoprojector"),
    ladder: counted("Holoprojector"),
    note: "Simulator only. No projector exists. The planned display method is unproven",
  },
  {
    name: "Carl",
    focus: "A room people and agents share",
    state: "Active",
    progress: share("Carl"),
    ladder: counted("Carl"),
    note: "One personal machine. The agent group is not deployed",
  },
  {
    name: "AOS",
    focus: "The command runner",
    state: "Active",
    progress: share("AOS"),
    ladder: counted("AOS"),
    note: "One personal machine. Nothing hosted",
  },
  {
    name: "Employee Bracers",
    focus: "Tracking feasibility",
    state: "Research",
    note: "No sensor choice, no hardware designed",
  },
  {
    name: "Research Tools",
    focus: "Platform design",
    state: "Waiting",
    note: "Shallow until a branch is blocked without it",
  },
  {
    name: "Manufacturing",
    focus: "Factory cell model",
    state: "Concept",
    note: "No cell, no line, no part made",
  },
];

export const systemPanels = [
  { label: "Public site", value: "Static, published", tone: "ok" as const },
  { label: "Site hosting", value: "GitHub Pages", tone: "ok" as const },
  { label: "Public domain", value: "Live over HTTPS", tone: "ok" as const },
  { label: "Link from this site", value: "The shared room only", tone: "ok" as const },
  { label: "Carl agent group", value: "Not deployed", tone: "idle" as const },
  { label: "Shared room", value: "Hosted, password gated", tone: "ok" as const },
  { label: "AOS runtime", value: "One machine, not hosted", tone: "idle" as const },
  { label: "ME OS", value: "Runs in QEMU and VirtualBox", tone: "ok" as const },
  { label: "ME OS on real hardware", value: "Never booted", tone: "idle" as const },
  { label: "Holoprojector backend", value: "Simulator", tone: "ok" as const },
  { label: "Projector hardware", value: "Does not exist", tone: "idle" as const },
  { label: "Particle trap and illumination", value: "Planned, never built", tone: "idle" as const },
  { label: "Bracer hardware", value: "Does not exist", tone: "idle" as const },
  { label: "Factory cells", value: "Concept only", tone: "idle" as const },
  {
    label: "Verified software milestones",
    value: String(milestones.filter((m) => m.state === "Complete").length),
    tone: "ok" as const,
  },
  { label: "Lab suit and tools", value: "Concept only", tone: "idle" as const },
  { label: "Internal command center", value: "Not built", tone: "idle" as const },
];

export const researchInterests = [
  "Distributed manufacturing",
  "Agent native operating system design",
  "Volumetric display control",
  "Command routing across control surfaces",
  "Power electronics for dense compute",
  "Earth observation",
  "Prosthetics and human augmentation",
  "Propulsion and spacetime physics",
];

export const recentProgress = [
  { when: "Sep 4", what: "Carl and the AOS runtime combined into one repository" },
  { when: "Sep 4", what: "A room people and agents share, one record for both" },
  { when: "Sep 3", what: "ME OS M28: tab finishes a filename, or offers nothing" },
  { when: "Sep 3", what: "ME OS M27: RUN reads a file of commands" },
  { when: "Sep 2", what: "ME OS M23 to M26: a disk, blocks, pipes and scrollback" },
  { when: "Sep 1", what: "ME OS M20 and M21: a filesystem, an editor and a clock" },
  { when: "Sep 1", what: "ME OS M17 to M19: a tiling desktop with a terminal that measures" },
];
