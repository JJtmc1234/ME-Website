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
    state: "Complete",
    detail:
      "One static filled rectangle, with the boot message and the key line untouched. Checked automatically: the captured framebuffer must contain a solid rectangle of the expected size, centred and clear of the text, alongside both lines of text. Framebuffer clipping is also checked on the development machine with guard regions around a fake framebuffer.",
  },
  {
    id: "meos-m4",
    project: "ME OS",
    title: "M4: mouse cursor",
    state: "Complete",
    detail:
      "A cursor drawn on the framebuffer that follows the mouse, keeps its shape, and stays on screen. Checked automatically: the emulator moves the mouse and the captured framebuffer must show the cursor moved by exactly that much, with the message, key line and rectangle all untouched.",
  },
  {
    id: "meos-m5",
    project: "ME OS",
    title: "M5: move the rectangle",
    state: "Complete",
    detail:
      "The rectangle crosses the screen at sixty pixels a second and turns around at each edge. It moves at a rate rather than at whatever speed the machine runs its loop, because the kernel now reads a hardware timer. Checked automatically across four captures: the rectangle is whole, on screen, and somewhere different each time.",
  },
  {
    id: "meos-m6",
    project: "ME OS",
    title: "M6: basic arithmetic",
    state: "Complete",
    detail:
      "Type a sum and press enter, and a line above the boot message shows the answer. Addition, subtraction, multiplication, whole number division and powers, with the precedence they have on paper. Overflow, division by zero and fractional powers are refused and shown as an error rather than producing a wrong answer, which matters in a kernel with no interrupt table to catch a fault.",
  },
  {
    id: "meos-m7",
    project: "ME OS",
    title: "M7: conditionals",
    state: "Complete",
    detail:
      "One conditional expression on the same line: IF one value compared to another THEN this ELSE that, with =, <  or > as the comparison, and a sum allowed in all three places. Checked by typing both a condition that holds and one that does not, and reading the two different answers off the framebuffer.",
  },
  {
    id: "meos-m8",
    project: "ME OS",
    title: "M8: variables",
    state: "Complete",
    detail:
      "A value can be given a name and used on any later line. Eight names fit, each an uppercase letter and up to three more characters. Reading a name that was never set is an error rather than zero, because a typo that quietly reads as zero gives a wrong answer and says nothing about it. One table, no scope, and nothing survives a reboot.",
  },
  {
    id: "meos-m9",
    project: "ME OS",
    title: "M9: keyboard controlled rectangle",
    state: "Next",
    detail:
      "Keys move the rectangle, which until now has only moved on its own. After it: wrapping at the screen edges, then picking the rectangle up with the pointer.",
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
    title: "M3: pointer interaction",
    state: "Complete",
    detail:
      "A device neutral pointer: hover, select, grab, drag and release. A pointer sample is a ray plus a pressed flag, so a mouse, a holo pencil, a bracer or a hand tracker could each produce one. Only the mouse works; the others are named stubs that refuse to poll. Dragging goes through a command that safety checks, so a drag out of the display volume is refused.",
  },
  {
    id: "holo-m4",
    project: "Holoprojector",
    title: "M4: simulated Holo Pencil",
    state: "Complete",
    detail:
      "A second pointer source, simulated in software: a tip in the display volume that the keyboard walks around. It selects, grabs, drags and releases through the same controller, commands and safety checks as the mouse, and a drag begun with one source can be finished with the other. No physical pencil exists.",
  },
  {
    id: "holo-m5",
    project: "Holoprojector",
    title: "M5: bracer input adapter",
    state: "Complete",
    detail:
      "An adapter shaped like a wearable: a hand pose in its own tracking space, an alignment that maps it into the scene, and a grip. It can also lose tracking, which lets go of whatever was being held instead of leaving it attached to a hand nobody can see. None of that needed a change in the interaction layer, the commands or safety. No bracer exists, and nothing reads or models a sensor.",
  },
  {
    id: "holo-m6",
    project: "Holoprojector",
    title: "M6: richer Carl adapter",
    state: "Next",
    detail:
      "Broader phrasing and multi step instructions through the same command path, still model agnostic and still offline.",
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
    id: "energy-dc-bus",
    project: "Energy",
    title: "Smart DC bus study",
    state: "Planned",
    detail:
      "Study a shared DC distribution bus for a lab bench or factory cell, with monitoring and protection built in. Paper study only. Nothing has been built or energised.",
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
