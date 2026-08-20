/** Product concepts and their honest current status.
 *  Nothing here is commercially available. Status labels say where each one
 *  actually is, and they are the only claim the site makes about readiness. */

export type Status = "Concept" | "Research" | "Prototype" | "Early development";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  status: Status;
  summary: string;
  points: string[];
  now: string;
};

export const statusOrder: Status[] = [
  "Early development",
  "Prototype",
  "Research",
  "Concept",
];

export const products: Product[] = [
  {
    slug: "me-os",
    name: "ME OS",
    tagline: "An agent native operating system",
    status: "Early development",
    summary:
      "A general purpose x86-64 operating system written from scratch, where agents are first class system components rather than programs bolted on top. Execution, permissions, memory, task routing, recovery, and human oversight are meant to be OS level concepts.",
    points: [
      "Standard Linux and Unix file formats, filesystem layout, and executable formats wherever practical",
      "No ME specific wrapper or package format required of applications",
      "Desktop organized around agents, tasks, memory, and live system state",
      "Reliability and recovery treated as core features, not add ons",
    ],
    now: "Advancing through small, individually testable milestones. M1 is a boot proof: boot in a virtual machine and print one line of text.",
  },
  {
    slug: "holoprojector",
    name: "Holoprojector",
    tagline: "A shared open air volumetric display",
    status: "Prototype",
    summary:
      "A ceiling mounted volumetric display. The unit lives overhead so the shared workspace below stays physically clear, which suits desks, meetings, and collaborative engineering work.",
    points: [
      "Fixed external chassis with replaceable internal modules, so emitters, sensors, and compute can be serviced independently",
      "Capability improvements shift into software: calibration, scene generation, control logic, and agent driven updates",
      "Control software is display method agnostic, so the physical mechanism can change without a rewrite",
      "Intended control surfaces include agents, bracers, a holo pencil, hand tracking, and ordinary engineering software",
    ],
    now: "The control software runs against a 3D simulator on ordinary computers. The first software milestone, a rotating pyramid driven entirely through the command layer, is complete. No display hardware exists yet.",
  },
  {
    slug: "carl",
    name: "Carl",
    tagline: "The agent layer across ME systems",
    status: "Early development",
    summary:
      "Carl is the agentic system ME products are built to talk to. The design goal is one command path shared by every surface, so an instruction from a person, a wearable, or a piece of engineering software travels the same route and is checked the same way.",
    points: [
      "Model agnostic by design. ME expects to rely mainly on strong external models rather than train a frontier model from scratch",
      "Products integrate against a Carl interface boundary, never against a specific model SDK",
      "Human override is a first class requirement. If Carl is suspected compromised, people revoke its authority through independent systems",
    ],
    now: "Interface boundaries and command routing are being built inside individual products before any centralized deployment.",
  },
  {
    slug: "employee-bracers",
    name: "Employee Bracers",
    tagline: "Multipurpose wearable forearm devices",
    status: "Research",
    summary:
      "Wearable forearm units for ME staff. Intended roles include precise hand and arm tracking for holographic interaction, identity, local agent access, notifications, sensing, and context aware controls.",
    points: [
      "Meant to augment normal work rather than replace keyboards, screens, and standard interfaces",
      "Modular, so different departments can add specialized capabilities",
      "Tracking research covers surface electromyography and inertial sensing for hand and finger intent",
    ],
    now: "Research stage. Sensor approach and tracking accuracy are open questions, and no wearable hardware has been built.",
  },
  {
    slug: "research-tools",
    name: "Research Tools",
    tagline: "Shared instrumentation and simulation platform",
    status: "Concept",
    summary:
      "A common platform for the tools every ME branch keeps rebuilding: simulation, measurement, data capture, experiment tracking, and the scientific computing that sits under all of them.",
    points: [
      "One toolchain shared across computing, energy, robotics, materials, and biotech work",
      "Designed so results and instrument data carry provenance rather than living in scattered files",
      "Agent access through the same interface boundary products use",
    ],
    now: "Platform design. Scope is deliberately being kept small until a branch genuinely needs it.",
  },
];

export const productBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
