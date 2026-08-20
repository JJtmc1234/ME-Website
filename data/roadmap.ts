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
    body: "The map covers computing, robotics, energy, space, manufacturing, materials, medicine, transportation, and frontier physics. Keeping the map wide is cheap. It is what lets one branch borrow from another.",
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
    title: "Shared infrastructure",
    body: "ME OS, Carl, the research tools platform, and manufacturing are shared across products, so work done once is reused instead of rebuilt per project.",
  },
];

export const milestones: Milestone[] = [
  {
    id: "meos-m1",
    project: "ME OS",
    title: "M1: boot proof",
    state: "In progress",
    detail:
      "Boot in a virtual machine to a black screen reading IF YOU SEE THIS IT WORKED. Nothing else. The point is proving the boot path is real.",
  },
  {
    id: "holo-sim",
    project: "Holoprojector",
    title: "Software simulator, first milestone",
    state: "Complete",
    detail:
      "A rotating pyramid in a 3D scene, with pause, resume, reverse, axis and speed control, all driven through the command layer rather than the renderer. The simulator backend is separable from the core, and a physical backend exists as an interface stub only.",
  },
  {
    id: "bracer-semg",
    project: "Employee Bracers",
    title: "Hand tracking and sEMG research",
    state: "Next",
    detail:
      "Establish whether surface electromyography plus inertial sensing can resolve hand and finger intent accurately enough for holographic interaction, before any wearable is designed.",
  },
  {
    id: "tools-platform",
    project: "Research Tools",
    title: "Platform design",
    state: "Planned",
    detail:
      "Define the shared simulation, measurement, and experiment tracking layer that other branches will build against.",
  },
  {
    id: "meos-m2",
    project: "ME OS",
    title: "M2 to M7: input, graphics, arithmetic, conditionals",
    state: "Planned",
    detail:
      "Keyboard input, a drawn primitive, a mouse cursor, a moving object, integer arithmetic, and branching logic. Each is separately demonstrable.",
  },
];
