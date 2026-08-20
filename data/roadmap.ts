/** How ME executes: a broad map, a small active set, and milestone gates.
 *  Only milestones safe to state publicly appear here. */

export type MilestoneState = "Complete" | "In progress" | "Next" | "Planned";

export type Milestone = {
  id: string;
  project: string;
  title: string;
  state: MilestoneState;
  detail: string;
};

export const executionModel = [
  {
    title: "Broad roadmap",
    body: "The map covers computing, robotics, energy, space, manufacturing, materials, medicine, transportation and frontier physics. Keeping the map wide is cheap. It is what lets one branch borrow from another.",
  },
  {
    title: "Narrow active scope",
    body: "Only a few projects are active at once. Planning stays shallow until a branch genuinely needs deeper design, rather than pretending every subsystem needs a five year plan today.",
  },
  {
    title: "Milestone gates",
    body: "Each project advances through small milestones that can be individually demonstrated. A milestone is done when it runs, not when it compiles.",
  },
  {
    title: "Projects earn expansion",
    body: "Scope is granted, not assumed. A project widens after it has shown a working milestone, which is why the active list is short and the map is long.",
  },
  {
    title: "Shared infrastructure",
    body: "ME OS, Carl, the research tools platform and manufacturing are shared across products, so work done once is reused instead of rebuilt per project.",
  },
];

export const milestones: Milestone[] = [
  {
    id: "meos-m1",
    project: "ME OS",
    title: "M1: boot proof",
    state: "Complete",
    detail:
      "Boot in a virtual machine to a black screen reading IF YOU SEE THIS IT WORKED. Nothing else. A freestanding x86-64 kernel boots over UEFI, draws the line, and does not crash. Checked automatically by inspecting the framebuffer.",
  },
  {
    id: "meos-m2",
    project: "ME OS",
    title: "M2: keyboard input",
    state: "Complete",
    detail:
      "The boot message stays where it was and a line below it reports the last key pressed. Verified in QEMU by injecting a key press and inspecting what was drawn. Not yet run on a physical machine.",
  },
  {
    id: "meos-m3",
    project: "ME OS",
    title: "M3: draw a rectangle",
    state: "Next",
    detail:
      "A filled rectangle at chosen coordinates in a chosen colour. After it: a mouse cursor, a moving rectangle, arithmetic, conditionals, variables, then keyboard and pointer control of the rectangle.",
  },
  {
    id: "holo-m1",
    project: "Holoprojector",
    title: "M1: rotating pyramid",
    state: "Complete",
    detail:
      "A pyramid in a 3D simulator, rotating on elapsed time, with pause, resume, reverse, axis, speed and reset, all driven through the command layer rather than the renderer.",
  },
  {
    id: "holo-m2",
    project: "Holoprojector",
    title: "M2: multiple scene objects",
    state: "Complete",
    detail:
      "Several independent objects in one scene, each with its own transform, visibility and rotation, plus selection and per object commands. Still a simulator. No display hardware exists.",
  },
  {
    id: "holo-m3",
    project: "Holoprojector",
    title: "M3: pointer selection",
    state: "Next",
    detail:
      "Picking an object with a pointer rather than by name, as the first step towards a device neutral pointer and drag model that a bracer or holo pencil could drive.",
  },
  {
    id: "bracer-research",
    project: "Employee Bracers",
    title: "Hand tracking feasibility",
    state: "Planned",
    detail:
      "Establish whether inertial and optical sensing, and later surface electromyography, can resolve hand and finger intent accurately enough for holographic interaction, before any wearable is designed.",
  },
  {
    id: "tools-platform",
    project: "Research Tools",
    title: "Platform design",
    state: "Planned",
    detail:
      "Define the shared simulation, measurement and experiment tracking layer other branches would build against.",
  },
  {
    id: "factory-poc",
    project: "Manufacturing",
    title: "First production proof of concept",
    state: "Planned",
    detail:
      "End to end automated production of one simple non safety critical automotive clip, using additive manufacturing, with camera and weight quality control and full traceability for rejected parts. Nothing has been built.",
  },
];
