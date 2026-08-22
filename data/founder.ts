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
   *  make a concept look like work in progress. The state word and the note say more. */
  progress?: number;
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

export const activeProjects: ProjectCard[] = [
  {
    name: "ME OS",
    focus: "M10 edge wrapping, not verified",
    state: "Active",
    progress: 30,
    note: "QEMU only. Never booted on real hardware. Factorio does not run on it",
  },
  {
    name: "Holoprojector",
    focus: "M6 offline Carl adapter",
    state: "Active",
    progress: 100,
    note: "Simulator only. No projector exists",
  },
  {
    name: "Carl",
    focus: "Agent runtime, first slice",
    state: "Active",
    progress: 60,
    note: "One personal machine. The agent group is not deployed",
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
  { label: "Carl link from this site", value: "None", tone: "idle" as const },
  { label: "Carl agent group", value: "Not deployed", tone: "idle" as const },
  { label: "ME OS", value: "Runs in QEMU", tone: "ok" as const },
  { label: "ME OS on real hardware", value: "Never booted", tone: "idle" as const },
  { label: "Holoprojector backend", value: "Simulator", tone: "ok" as const },
  { label: "Projector hardware", value: "Does not exist", tone: "idle" as const },
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
  { when: "Aug 22", what: "Status tiers on every product, area and milestone" },
  { when: "Aug 21", what: "Holoprojector M6: several instructions in one sentence" },
  { when: "Aug 21", what: "ME OS M9: arrow keys steer the rectangle" },
  { when: "Aug 21", what: "ME OS M12: floating point, and a turning triangle" },
  { when: "Aug 21", what: "Around 2035 recorded as the working launch target" },
  { when: "Aug 21", what: "Public site moved to its own domain, over HTTPS" },
  { when: "Aug 20", what: "ME OS M8: named values" },
];
