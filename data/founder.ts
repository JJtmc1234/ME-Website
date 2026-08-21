/** Data for the founder page.
 *
 *  Everything here is public and sanitized on purpose. No credentials, hosts,
 *  addresses, logs, message contents, or infrastructure details appear on this
 *  site, and none should be added. Status values are illustrative summaries of
 *  public project state, not a live feed from any internal system. */

export type ProjectCard = {
  name: string;
  focus: string;
  state: "Active" | "Waiting" | "Research" | "Concept";
  progress: number; // rough share of the current milestone, 0 to 100
  note: string;
};

export const founder = {
  name: "JJ",
  role: "Founder",
  blurb:
    "Founder of Multiverse Enterprises. Works across operating systems, agent architecture, volumetric display software, physics, and mathematics. Prefers milestones that can be demonstrated over plans that cannot.",
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
    focus: "M8 variables, verified in QEMU",
    state: "Active",
    progress: 100,
    note: "Boots, reads input, draws, keeps time, works sums out. Never on real hardware",
  },
  {
    name: "Holoprojector",
    focus: "M5 bracer shaped input adapter",
    state: "Active",
    progress: 100,
    note: "Three software input shapes on one path. No projector exists",
  },
  {
    name: "Carl",
    focus: "Agent interface boundaries",
    state: "Research",
    progress: 40,
    note: "Command routing inside products before any central deployment",
  },
  {
    name: "Employee Bracers",
    focus: "Tracking feasibility",
    state: "Research",
    progress: 5,
    note: "Open questions, no sensor choice settled, no hardware designed",
  },
  {
    name: "Research Tools",
    focus: "Platform design",
    state: "Waiting",
    progress: 5,
    note: "Deliberately shallow until a branch is blocked without it",
  },
  {
    name: "Manufacturing",
    focus: "Factory cell model and first part",
    state: "Concept",
    progress: 3,
    note: "Written down only. No cell, no line, no part made",
  },
];

export const systemPanels = [
  { label: "Public site", value: "Static, published", tone: "ok" as const },
  { label: "Site hosting", value: "GitHub Pages", tone: "ok" as const },
  { label: "Public domain", value: "Live over HTTPS", tone: "ok" as const },
  { label: "Carl link", value: "Not connected", tone: "idle" as const },
  { label: "ME OS", value: "Runs in QEMU", tone: "ok" as const },
  { label: "ME OS on real hardware", value: "Never booted", tone: "idle" as const },
  { label: "Holoprojector backend", value: "Simulator", tone: "ok" as const },
  { label: "Projector hardware", value: "Does not exist", tone: "idle" as const },
  { label: "Bracer hardware", value: "Does not exist", tone: "idle" as const },
  { label: "Factory cells", value: "Concept only", tone: "idle" as const },
  { label: "Verified software milestones", value: "13", tone: "ok" as const },
  { label: "Lab suit and tools", value: "Concept only", tone: "idle" as const },
  { label: "Internal command center", value: "Not built", tone: "idle" as const },
];

export const researchInterests = [
  "Distributed automated manufacturing",
  "Agent native operating system design",
  "Volumetric display control and calibration",
  "Command routing shared across many control surfaces",
  "Power electronics for dense compute",
  "Earth observation as a useful service",
  "Prosthetics and human augmentation",
  "Advanced propulsion and spacetime physics",
];

export const recentProgress = [
  { when: "Aug 21", what: "Public site moved to its own domain, HTTPS still pending" },
  { when: "Aug 20", what: "ME OS M8: values can be given names and used again" },
  { when: "Aug 20", what: "ME OS M7: one conditional, taking either branch" },
  { when: "Aug 20", what: "ME OS M6: sums typed on the keyboard, answered on screen" },
  { when: "Aug 20", what: "Holoprojector M5: a bracer shaped input on the same path" },
];
