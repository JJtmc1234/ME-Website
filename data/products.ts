/** Product concepts and their honest current status.
 *
 *  ME has no physical hardware prototypes. Nothing here is commercially
 *  available, nothing is deployed, and nothing is operating anywhere.
 *
 *  Two labels, two questions. The status says what a thing is. The tier says
 *  when. Both are deliberately conservative and both are meant to be checkable
 *  against the source repositories.
 *
 *  Prose is kept to fragments on purpose. If a sentence can be a label, it is
 *  a label.
 */
import type { Tier } from "@/data/tiers";

export type Status =
  | "Concept"
  | "Research"
  | "Planned Prototype"
  | "Software Prototype"
  | "Verified Software Milestone";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  status: Status;
  /** When, not what. See data/tiers.ts. */
  tier: Tier;
  kind: "Software" | "Hardware concept" | "Software and hardware";
  summary: string;
  purpose: string;
  points: string[];
  now: string;
  currentMilestone: string;
  longTerm: string;
  related: string[];
  availability: string;
};

export const statusOrder: Status[] = [
  "Verified Software Milestone",
  "Software Prototype",
  "Planned Prototype",
  "Research",
  "Concept",
];

export const statusMeaning: Record<Status, string> = {
  "Verified Software Milestone": "Success condition met and checked automatically. Software only.",
  "Software Prototype": "Runs as software. No hardware exists.",
  "Planned Prototype": "Designed to be built, not built.",
  Research: "Open questions. Nothing built.",
  Concept: "Written down as a direction. Not being built.",
};

export const products: Product[] = [
  {
    slug: "me-os",
    name: "ME OS",
    tagline: "An agent native operating system",
    status: "Verified Software Milestone",
    tier: "BUILDING NOW",
    kind: "Software",
    summary:
      "An x86-64 operating system written from scratch, where agents are system components rather than programs on top.",
    purpose:
      "Every other ME system needs somewhere to run that treats agents as normal citizens, with a person in charge.",
    points: [
      "Standard Linux formats and filesystem layout where practical",
      "No ME specific wrapper or package format",
      "Desktop organized around agents, tasks and memory",
      "Reliability and recovery as core features, not add ons",
    ],
    now: "QEMU and VirtualBox. Never booted on physical hardware.",
    currentMilestone:
      "M1 to M28 verified in QEMU by automated framebuffer inspection. The same ISO also boots in VirtualBox, checked by hand. It reaches a tiling desktop with four workspaces, a shell, a text editor and a filesystem on a real disk that survives a restart.",
    longTerm:
      "A desktop system with agent execution and recovery built in, compatible with ordinary Linux applications. The long-term proof point is Factorio running on ME OS. It does not run today, and the missing pieces are Linux system calls, ELF loading, memory management, processes and a graphics path.",
    related: ["carl", "research-tools"],
    availability: "Not available. Source only, and it runs in a virtual machine.",
  },
  {
    slug: "holoprojector",
    name: "Holoprojector",
    tagline: "A shared open air volumetric display",
    status: "Software Prototype",
    tier: "BUILDING NOW",
    kind: "Software and hardware",
    summary:
      "A ceiling mounted volumetric display, so the workspace below stays clear.",
    purpose:
      "Engineering work is three dimensional. Screens make people take turns looking at a flat picture of a solid thing.",
    points: [
      "Fixed chassis, replaceable modules for emitters and compute",
      "Capability grows in software: calibration, scenes, control logic",
      "Control software does not depend on the display method, so the backend can be replaced",
      "Intended control surfaces: agents, bracers, a holo pencil, hand tracking",
    ],
    now: "A 3D simulator on an ordinary computer. No display hardware. The planned display method is a laser trapped particle, and none of it has been built.",
    currentMilestone:
      "Six milestones met, all against the simulator. M7 adds a second control surface on one scene. The physical backend is an interface stub that refuses to run.",
    longTerm:
      "A ceiling mounted unit whose capability grows through software, on the shared command path. The planned way of drawing in open air is to trap a single particle with light, move it through the volume, and illuminate it at chosen points so those points read as voxels. That is a chosen direction and nothing more. ME has not trapped a particle, has built no trapping or illumination hardware, and has produced no physical voxel. Whether it works at all is an open question, and hardware would come only after an independent safety review.",
    related: ["carl", "employee-bracers"],
    availability: "Not available. There is no hardware.",
  },
  {
    slug: "carl",
    name: "Carl",
    tagline: "The layer that decides what work happens",
    status: "Software Prototype",
    tier: "BUILDING NOW",
    kind: "Software",
    summary:
      "The work layer. It owns priorities, delegation, summaries and what reaches a person. It does not run processes, which is AOS's job.",
    purpose:
      "If every product invents its own way of being told what to do, every product invents its own way of being wrong.",
    points: [
      "Model agnostic. External models, not a frontier model trained here",
      "Products integrate against an interface boundary, never a model SDK",
      "Human override is a requirement, through independent systems",
      "Deciding work and owning processes stay separate. Carl decides, AOS enforces",
      "A test reads the runtime's own source and fails if work vocabulary appears in it",
    ],
    now: "Agents run on one personal development machine. A password gated chat room is hosted so people and agents share one record, and this site has an unlisted page that opens it. The agent group itself is not deployed, and nothing on this site reaches an ME machine.",
    currentMilestone:
      "Panel v1 frozen and verified. The agent runtime's first slice is built and tested. A shared room is hosted and in use. The agent group is still not deployed.",
    longTerm:
      "One work layer across ME systems, with an override that does not depend on Carl being correct.",
    related: ["aos", "me-os", "holoprojector"],
    availability: "Not available. The agent group is not deployed. The only thing this site can reach is the shared room, and only with a password.",
  },
  {
    slug: "aos",
    name: "AOS",
    tagline: "The runtime that bounds what an agent may do",
    status: "Software Prototype",
    tier: "BUILDING NOW",
    kind: "Software",
    summary:
      "An agent runtime and safety layer over Linux. Agents are supervised like processes. It starts them, bounds what they may run, records every attempt including the refusals, and can stop all of them at once.",
    purpose:
      "A capability that only holds while the layer above it behaves correctly is not a capability. AOS refuses a path in its own process, so it would refuse it just the same if Carl were wrong or compromised.",
    points: [
      "Agents are real Linux processes, not rows in a database",
      "The audit log is the only durable state, folded back on start",
      "A start record carries the process start time as well as the pid, so recovery never adopts a stranger",
      "Holds no opinion about whether work is worth doing, on purpose",
      "One command stops every agent at once",
    ],
    now: "One personal development machine. Not deployed, not hosted, nothing anybody outside can reach.",
    currentMilestone:
      "Phases 0 to 3a are done and checked against real processes: supervision, crash recovery, adoption of orphaned processes, the daemon over a real socket, the policy gate, and a file capability server. The command runner is next and is the harder half.",
    longTerm:
      "A runtime any ME system can host agents on, where what an agent may touch is enforced somewhere the agent cannot reach.",
    related: ["carl", "me-os"],
    availability: "Not available. Source only, on one machine.",
  },
  {
    slug: "employee-bracers",
    name: "Employee Bracers",
    tagline: "Multipurpose wearable forearm devices",
    status: "Research",
    tier: "LONG-TERM",
    kind: "Hardware concept",
    summary:
      "Wearable forearm units. Intended roles: hand tracking, identity, agent access, sensing.",
    purpose:
      "A volumetric display needs to know where your hands are, and identity should follow a person between workstations.",
    points: [
      "Tracking accurate enough to move objects in a volume",
      "Carl access through the shared command path",
      "Identity, so a shared machine can tell who is standing at it",
      "Inertial and optical first. Muscle sensing is a question, not a plan",
      "Modular, so departments can add capabilities",
      "Calibration at first use, then continuous adaptation",
      "Another input channel where a keyboard and mouse do not fit",
    ],
    now: "Research only. No bracer built, no sensor choice settled, no accuracy demonstrated.",
    currentMilestone:
      "Can inertial, optical and later muscle sensing resolve hand and finger intent well enough? Asked before any device is designed.",
    longTerm:
      "A modular wearable carrying identity, agent access and input between workstations.",
    related: ["holoprojector", "carl"],
    availability: "Not available. No prototype. ME makes no medical or health claim.",
  },
  {
    slug: "lab-suit",
    name: "Lab Suit",
    tagline: "Modular protection with sensing built in",
    status: "Concept",
    tier: "LONG-TERM",
    kind: "Hardware concept",
    summary:
      "A modular protective suit for lab work. Locking rails let modules be added for the job being done.",
    purpose:
      "Protective equipment is chosen once, then stops being able to tell you anything.",
    points: [
      "Modular protection rather than one suit for every job",
      "Base suit integrates with a bracer for identity",
      "Standardized locking rails, so modules attach the same way each time",
      "First module: a chest pod for temperature, humidity, air quality, light, motion",
      "Modular visor. V1 is anti fog, no electronics",
      "A later visor could show safety state and the current task first",
      "Bracer as the intended hands free input",
      "First workflow: a checklist navigated without hands",
      "Dismissing a safety warning takes a deliberate tap on the bracer",
    ],
    now: "Concept. No suit, no module, no visor, no bracer. Nothing prototyped.",
    currentMilestone:
      "Decide what the sensor pod would measure, and whether a bracer can drive a checklist reliably enough.",
    longTerm:
      "Protective equipment configured for the task and controllable without putting anything down.",
    related: ["employee-bracers", "carl", "research-tools"],
    availability:
      "Not available. Not certified protective equipment. ME makes no safety, protective or medical claim.",
  },
  {
    slug: "smart-driver",
    name: "ME Smart Driver",
    tagline: "A precision driver that knows the job it is doing",
    status: "Concept",
    tier: "LONG-TERM",
    kind: "Hardware concept",
    summary:
      "A precision powered screwdriver, first of a tool family. Torque accuracy first, bits later.",
    purpose:
      "Most fastening mistakes are invisible until something fails: wrong torque, a cross thread, the wrong screw.",
    points: [
      "Torque accuracy before any other feature",
      "Interchangeable bits later, other tool heads later still",
      "Carl supplies the expected fastener, the driver checks it",
      "Automatic stop at target torque, with a haptic confirmation",
      "A fast torque rise stops the driver and names the likely cause",
      "The result attaches to the task record",
    ],
    now: "Concept. No driver, no torque measurement designed, nothing built or tested.",
    currentMilestone:
      "Work out what torque accuracy the work needs, and what tells a jam from a fastener that has seated.",
    longTerm: "A family of tools that know the task, verify the work, and record what they did.",
    related: ["carl", "lab-suit"],
    availability: "Not available. Concept stage, no prototype.",
  },
  {
    slug: "research-tools",
    name: "Research Tools",
    tagline: "Shared instrumentation, simulation and notebooks",
    status: "Concept",
    tier: "LONG-TERM",
    kind: "Software and hardware",
    summary:
      "A common platform for the tools every branch rebuilds: simulation, measurement, capture, experiment tracking.",
    purpose:
      "Every branch needs the same loop. Building it once separates research that accumulates from research that restarts.",
    points: [
      "One toolchain across every branch",
      "Results and instrument data carry provenance",
      "Agent access through the same interface boundary products use",
      "A closed loop from question back to next experiment",
    ],
    now: "Concept. Nothing built. The tool family below is intent.",
    currentMilestone:
      "Define the shared simulation and measurement layer. Kept shallow until a branch is blocked.",
    longTerm:
      "A platform where a question, its data, analysis and conclusion stay attached.",
    related: ["me-os", "carl"],
    availability: "Not available. Concept stage.",
  },
];

export const productBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
