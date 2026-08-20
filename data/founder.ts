/** Data for the founder page.
 *
 *  Everything here is public and sanitized on purpose. No credentials, hosts,
 *  addresses, logs, message contents, or infrastructure details appear on this
 *  site, and none should be added. Status values are illustrative summaries of
 *  public project state, not a live feed from any internal system. */

export type ProjectCard = {
  name: string;
  focus: string;
  state: "Active" | "Paused" | "Queued";
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
    name: "Holoprojector",
    focus: "Simulator milestone 1",
    state: "Active",
    progress: 100,
    note: "Rotating pyramid, full command layer, tests passing",
  },
  {
    name: "ME OS",
    focus: "M1 boot proof",
    state: "Active",
    progress: 25,
    note: "Boot path first, nothing else until it prints",
  },
  {
    name: "Carl",
    focus: "Agent interface boundaries",
    state: "Active",
    progress: 40,
    note: "Command routing inside products before any central deployment",
  },
  {
    name: "Employee Bracers",
    focus: "sEMG and inertial tracking research",
    state: "Queued",
    progress: 5,
    note: "Feasibility questions open, no hardware designed",
  },
  {
    name: "Research Tools",
    focus: "Platform design",
    state: "Queued",
    progress: 5,
    note: "Deliberately shallow until a branch needs it",
  },
];

export const systemPanels = [
  { label: "Public site", value: "Online", tone: "ok" as const },
  { label: "Carl link", value: "Not connected", tone: "idle" as const },
  { label: "Holoprojector backend", value: "Simulator", tone: "ok" as const },
  { label: "Projector hardware", value: "None attached", tone: "idle" as const },
  { label: "Active milestones", value: "3", tone: "ok" as const },
  { label: "Internal command center", value: "Not built", tone: "idle" as const },
];

export const researchInterests = [
  "Agent native operating system design",
  "Volumetric display control and calibration",
  "Command routing shared across many control surfaces",
  "Power electronics for dense compute",
  "Earth observation as a useful service",
  "Prosthetics and human augmentation",
  "Advanced propulsion and spacetime physics",
];

export const recentProgress = [
  { when: "Aug 19", what: "Holoprojector simulator milestone finished and committed" },
  { when: "Aug 19", what: "Product registry written, ME OS milestone ladder defined" },
  { when: "Aug 19", what: "Community feedback document opened to the public" },
  { when: "Aug 19", what: "Public ME site brought up" },
];
