/** Research branches. Wording follows the ME research index: broad by
 *  default, specific only where a branch has actually been thought through. */

export type Branch = {
  slug: string;
  name: string;
  priority: "Primary focus" | "Active interest" | "In scope";
  summary: string;
  threads: string[];
};

export const branches: Branch[] = [
  {
    slug: "computing-ai",
    name: "Computing & AI",
    priority: "Primary focus",
    summary:
      "The branch with the strongest existing knowledge base at ME, and the first one being explored in depth. Agentic systems, operating systems, distributed compute, infrastructure, robotics intelligence, and scientific computing.",
    threads: [
      "Agent native operating system design: permissions, memory, task routing, recovery",
      "Command routing that many control surfaces can share safely",
      "Model infrastructure and use of strong external models rather than training a frontier model",
      "Scientific computing and simulation as shared infrastructure",
    ],
  },
  {
    slug: "energy",
    name: "Energy",
    priority: "Active interest",
    summary:
      "Initial focus is power electronics: efficient conversion, control, and distribution. That is the layer compute, robotics, labs, vehicles, satellites, and storage all depend on.",
    threads: [
      "Power electronics for high density compute and laboratory loads",
      "Storage and grid interaction",
      "Longer horizon generation systems",
    ],
  },
  {
    slug: "space",
    name: "Space & Satellites",
    priority: "Active interest",
    summary:
      "Treated as a major branch rather than a subtopic. The emphasis is Earth observation delivering services governments and large organizations actually buy.",
    threads: [
      "Imaging, mapping, and weather observation",
      "Infrastructure monitoring, disaster response, agriculture, and logistics",
      "Communications, orbital infrastructure, launch, and deeper space systems remain in scope",
    ],
  },
  {
    slug: "robotics",
    name: "Robotics",
    priority: "In scope",
    summary:
      "Industrial, mobile, laboratory, and autonomous systems, including the interfaces that let agents drive them safely.",
    threads: [
      "Laboratory automation feeding the research tools platform",
      "Mobile and industrial platforms",
      "Safe autonomy boundaries between agent intent and actuator command",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    priority: "In scope",
    summary:
      "Automation, advanced factories, materials processing, and scalable production, organized around distributed automated production rather than one large plant.",
    threads: [
      "Distributed automated production cells",
      "Buy commodity inputs such as steel, wire, fasteners, bearings, and standard electronics where making them adds no strategic value",
      "Materials processing tied to the materials branch",
    ],
  },
  {
    slug: "materials",
    name: "Materials",
    priority: "In scope",
    summary:
      "Semiconductors, composites, metamaterials, and nanomaterials, chosen by what other ME branches are blocked on.",
    threads: [
      "Semiconductors for compute and sensing",
      "Metamaterials relevant to displays and optics",
      "Composites and structural materials for robotics and space hardware",
    ],
  },
  {
    slug: "medicine-biotech",
    name: "Medicine & Biotech",
    priority: "In scope",
    summary:
      "Emphasis on prosthetics, augmentation, and longevity, with diagnostics and synthetic biology kept in scope.",
    threads: [
      "Prosthetics and human augmentation, sharing sensing work with wearables",
      "Longevity research",
      "Diagnostics and synthetic biology",
    ],
  },
  {
    slug: "transportation",
    name: "Transportation",
    priority: "In scope",
    summary:
      "Autonomous systems, aerospace, high speed transit, and logistics.",
    threads: [
      "Autonomy shared with the robotics branch",
      "Aerospace and high speed transit",
      "Logistics as a systems problem",
    ],
  },
  {
    slug: "frontier",
    name: "Frontier Research",
    priority: "In scope",
    summary:
      "Speculative and advanced physics, propulsion, and spacetime work. High risk, high upside, and explicitly labelled as such.",
    threads: [
      "Advanced propulsion concepts",
      "Spacetime and gravitation",
      "Work that fails honestly rather than quietly",
    ],
  },
];
