/** Product concepts and their honest current status.
 *
 *  ME has no physical hardware prototypes. Nothing here is commercially
 *  available, nothing is deployed, and nothing is operating anywhere. The
 *  status label on each product is the only claim this site makes about how
 *  far along it is, and the labels are deliberately conservative.
 */

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
  "Verified Software Milestone":
    "A stated success condition is met and checked automatically. Software only.",
  "Software Prototype": "Runs as software. No hardware exists.",
  "Planned Prototype": "Designed to be built, not built yet.",
  Research: "Open questions being worked on. Nothing has been built.",
  Concept: "Written down as a direction. Not being built yet.",
};

export const products: Product[] = [
  {
    slug: "me-os",
    name: "ME OS",
    tagline: "An agent native operating system",
    status: "Verified Software Milestone",
    kind: "Software",
    summary:
      "A general purpose x86-64 operating system written from scratch, where agents are first class system components rather than programs bolted on top. Execution, permissions, memory, task routing, recovery, and human oversight are meant to be OS level concepts.",
    purpose:
      "Every other ME system needs somewhere to run that treats agents as normal citizens and keeps a person in charge of them. Building on an OS that was designed before agents existed means fighting it forever.",
    points: [
      "Standard Linux and Unix file formats, filesystem layout, and executable formats wherever practical",
      "No ME specific wrapper or package format required of applications",
      "Desktop organized around agents, tasks, memory, and live system state",
      "Reliability and recovery treated as core features, not add ons",
    ],
    now: "Boots in QEMU over UEFI. It has never been booted on a physical machine, and that is a later step.",
    currentMilestone:
      "M1 boot proof and M2 keyboard input are both met and checked automatically in QEMU: the machine boots, draws its message, and reports the key it was sent. M3 draws a rectangle.",
    longTerm:
      "A general purpose desktop system with agent execution, permissions and recovery built in, compatible with ordinary Linux applications and file formats.",
    related: ["carl", "research-tools"],
    availability: "Not available. Source only, and it runs in an emulator.",
  },
  {
    slug: "holoprojector",
    name: "Holoprojector",
    tagline: "A shared open air volumetric display",
    status: "Software Prototype",
    kind: "Software and hardware",
    summary:
      "A ceiling mounted volumetric display. The unit would live overhead so the shared workspace below stays physically clear, which suits desks, meetings, and collaborative engineering work.",
    purpose:
      "Engineering work is three dimensional and shared. Screens make people take turns looking at a flat picture of a solid thing. A volume in the middle of a room does not.",
    points: [
      "Fixed external chassis with replaceable internal modules, so emitters, sensors, and compute could be serviced independently",
      "Capability improvements shift into software: calibration, scene generation, control logic, and agent driven updates",
      "Control software is display method agnostic, so the physical mechanism can change without a rewrite",
      "Intended control surfaces include agents, bracers, a holo pencil, hand tracking, and ordinary engineering software",
    ],
    now: "The control software runs against a 3D simulator on ordinary computers. No display hardware exists, and the physical display method is not decided.",
    currentMilestone:
      "M2 is complete: several independent objects in one scene, with selection and per object commands, all driven through one command layer. M3 adds pointer based selection.",
    longTerm:
      "A ceiling mounted unit whose capability grows through software, controlled by the same command path as every other ME surface.",
    related: ["carl", "employee-bracers"],
    availability:
      "Not available. There is no hardware. The simulator is a development tool, not a product.",
  },
  {
    slug: "carl",
    name: "Carl",
    tagline: "The agent layer across ME systems",
    status: "Research",
    kind: "Software",
    summary:
      "Carl is the agentic system ME products are built to talk to. The design goal is one command path shared by every surface, so an instruction from a person, a wearable, or a piece of engineering software travels the same route and is checked the same way.",
    purpose:
      "If every product invents its own way of being told what to do, every product invents its own way of being wrong. One path can be reviewed, bounded, and overridden.",
    points: [
      "Model agnostic by design. ME expects to rely mainly on strong external models rather than train a frontier model from scratch",
      "Products integrate against a Carl interface boundary, never against a specific model SDK",
      "Human override is a first class requirement. If Carl is suspected compromised, people revoke its authority through independent systems",
    ],
    now: "Interface boundaries and command routing exist inside individual products. There is no centralized Carl deployment and no live agent behind this website.",
    currentMilestone:
      "Each product builds its own interface boundary first. The Holoprojector already routes a local, offline text adapter through the same command path a real Carl would use.",
    longTerm:
      "One agent layer across ME systems, with per surface permissions and an override path that does not depend on Carl being available or correct.",
    related: ["me-os", "holoprojector", "employee-bracers"],
    availability: "Not available, and not reachable from this site.",
  },
  {
    slug: "employee-bracers",
    name: "Employee Bracers",
    tagline: "Multipurpose wearable forearm devices",
    status: "Research",
    kind: "Hardware concept",
    summary:
      "Wearable forearm units for ME staff. Intended roles include hand and arm tracking for holographic interaction, identity, local agent access, notifications, sensing, and context aware controls.",
    purpose:
      "A volumetric display needs to know where your hands are, and a person moving between workstations needs their identity and their agent to come with them. A forearm is a place both can live without occupying a hand.",
    points: [
      "Hologram control: hand and arm tracking accurate enough to select and move objects in a display volume",
      "Carl access from wherever the wearer is, through the same command path every other surface uses",
      "Identity and authentication, so a shared machine can tell who is standing at it",
      "Inertial and optical tracking first. Surface electromyography for finer control is a research question, not a plan",
      "Modular, so different departments can add specialized capabilities",
      "Calibration at first use and continuous adaptation afterwards, because bodies and wear positions differ",
      "Accessibility: another input channel for people for whom a keyboard and mouse are not the best fit",
    ],
    now: "Research only. No bracer has been built, no sensor choice is settled, and no tracking accuracy has been demonstrated.",
    currentMilestone:
      "Establish whether inertial and optical sensing, and later surface electromyography, can resolve hand and finger intent well enough for holographic interaction, before any device is designed.",
    longTerm:
      "A modular wearable that carries identity, agent access and precise input between workstations and shared display volumes.",
    related: ["holoprojector", "carl"],
    availability:
      "Not available. No prototype exists. ME makes no medical or health claims about this device.",
  },
  {
    slug: "lab-suit",
    name: "Lab Suit",
    tagline: "Modular protection with sensing built in",
    status: "Concept",
    kind: "Hardware concept",
    summary:
      "A modular protective suit for lab and prototyping work. The base suit carries identity and connects to an Employee Bracer; standardized locking rails let modules be added for the work actually being done.",
    purpose:
      "Protective equipment is chosen once, at the start of a task, and then stops being able to tell you anything. A suit with rails and a sensor pod can be configured for the hazard in front of you, and can notice conditions changing while you work.",
    points: [
      "Modular protection rather than one suit for every job",
      "Base suit integrates with Employee Bracers for identity and authentication",
      "Standardized locking rails, so modules attach the same way every time",
      "First module: an upper chest sensor pod measuring temperature, humidity, basic air quality, ambient light, and motion and orientation from an inertial unit",
      "Modular visor. V1 is anti fog with glare control and no electronics",
      "A later visor could show a heads up display: safety state and the current task first, measurements and agent output only after that earns its place",
      "The bracer is the intended input: a future neural band style channel for hands free control",
      "First workflow: navigating a checklist without using your hands",
      "Important actions require confirmation, and dismissing a safety warning takes a deliberate physical tap on the bracer",
    ],
    now: "Concept and research. No suit, no module, no visor and no bracer exists. Nothing has been prototyped, and no protective claim is made or implied.",
    currentMilestone:
      "Decide what the sensor pod would need to measure usefully, and whether a bracer can drive a checklist reliably enough that a person would trust it with their hands full.",
    longTerm:
      "Protective equipment that is configured for the task, aware of the conditions around it, and controllable without putting anything down.",
    related: ["employee-bracers", "carl", "research-tools"],
    availability:
      "Not available. No prototype exists. This is not certified protective equipment, and ME makes no safety, protective or medical claim about it.",
  },
  {
    slug: "smart-driver",
    name: "ME Smart Driver",
    tagline: "A precision driver that knows the job it is doing",
    status: "Concept",
    kind: "Hardware concept",
    summary:
      "A precision powered screwdriver, first of an eventual multi tool family. Torque accuracy comes first; interchangeable bits and further tool heads come later.",
    purpose:
      "Most fastening mistakes are invisible until something fails: a bolt at the wrong torque, a cross threaded fastener, the wrong screw for the hole. A driver that knows which fastener the task expects can catch those while the person is still holding the tool.",
    points: [
      "Torque accuracy is the first priority, before any other feature",
      "Interchangeable bits later, other tool heads later still",
      "Carl and the task context supply which fastener is expected, and the driver checks that against what it is doing",
      "Automatic stop at the target torque, with a haptic confirmation the hand can feel",
      "An abnormally fast torque rise stops the driver immediately and warns of a likely jam, cross thread or wrong fastener, with a concrete next action rather than an error code",
      "The result eventually attaches to the task record, so what was tightened, to what, and when, is not a memory",
    ],
    now: "Concept. No driver exists, no torque measurement has been designed, and nothing has been built or tested.",
    currentMilestone:
      "Work out what torque accuracy is actually needed for the work ME expects to do, and what a driver has to sense to tell a jam from a fastener that has simply seated.",
    longTerm:
      "A family of tools that know the task, verify what they are working on, and record what they did.",
    related: ["carl", "lab-suit"],
    availability: "Not available. Concept stage, no prototype.",
  },
  {
    slug: "research-tools",
    name: "Research Tools",
    tagline: "Shared instrumentation, simulation and notebooks",
    status: "Concept",
    kind: "Software and hardware",
    summary:
      "A common platform for the tools every ME branch keeps rebuilding: simulation, measurement, data capture, experiment tracking, and the scientific computing under all of them.",
    purpose:
      "Every branch, from energy to biotech, ends up needing the same loop: ask a question, simulate it, run it, measure it, write down what happened, and decide what to do next. Building that loop once is the difference between research that accumulates and research that restarts.",
    points: [
      "One toolchain shared across computing, energy, robotics, materials, and biotech work",
      "Results and instrument data carry provenance rather than living in scattered files",
      "Agent access through the same interface boundary products use",
      "A closed loop: question, simulation, experiment, sensing, analysis, notebook, next experiment",
    ],
    now: "Concept. Nothing has been built, and the tool family below is a description of intent.",
    currentMilestone:
      "Define the shared simulation, measurement and experiment tracking layer other branches would build against. Scope is deliberately shallow until a branch is blocked without it.",
    longTerm:
      "A research platform where an experiment's question, simulation, raw data, analysis and conclusion stay attached to each other.",
    related: ["me-os", "carl"],
    availability: "Not available. Concept stage.",
  },
];

export const productBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
