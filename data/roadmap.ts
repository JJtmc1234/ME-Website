/** Published milestones. Only milestones safe to state publicly appear here.
 *
 *  A completed milestone says what was verified and where, in as few words as
 *  that takes. Everything not complete carries a tier, because "Planned" on
 *  its own has been read as "coming soon" and that is not what it means. */
import type { Tier } from "@/data/tiers";

export type MilestoneState =
  | "Complete"
  | "In progress"
  | "Next"
  | "Planned"
  | "Long term";

export type Milestone = {
  id: string;
  project: string;
  title: string;
  state: MilestoneState;
  /** Set on everything that is not complete. See data/tiers.ts. */
  tier?: Tier;
  /** A fragment. Nine words beats a paragraph. */
  detail: string;
};

export const milestones: Milestone[] = [
  {
    id: "meos-m1",
    project: "ME OS",
    title: "M1: boot proof",
    state: "Complete",
    detail: "Boots over UEFI to one line. Framebuffer checked in QEMU.",
  },
  {
    id: "meos-m2",
    project: "ME OS",
    title: "M2: keyboard input",
    state: "Complete",
    detail: "Last key pressed, below the boot line. Injected in QEMU, framebuffer read back.",
  },
  {
    id: "meos-m3",
    project: "ME OS",
    title: "M3: draw a rectangle",
    state: "Complete",
    detail: "One filled rectangle. Size, centring and clipping checked.",
  },
  {
    id: "meos-m4",
    project: "ME OS",
    title: "M4: mouse cursor",
    state: "Complete",
    detail: "Cursor follows the mouse. Movement measured in QEMU.",
  },
  {
    id: "meos-m5",
    project: "ME OS",
    title: "M5: move the rectangle",
    state: "Complete",
    detail: "Sixty pixels a second off a hardware timer. Four captures checked.",
  },
  {
    id: "meos-m6",
    project: "ME OS",
    title: "M6: basic arithmetic",
    state: "Complete",
    detail: "Type a sum, get the answer. Overflow and divide by zero refused.",
  },
  {
    id: "meos-m7",
    project: "ME OS",
    title: "M7: conditionals",
    state: "Complete",
    detail: "IF, THEN, ELSE on one line. Both branches typed and read back.",
  },
  {
    id: "meos-m8",
    project: "ME OS",
    title: "M8: variables",
    state: "Complete",
    detail: "Eight named values. An unset name is an error, not a quiet zero.",
  },
  {
    id: "meos-m9",
    project: "ME OS",
    title: "M9: keyboard controlled rectangle",
    state: "Complete",
    detail: "Arrow keys steer it. Three presses down measured at exactly 48 pixels.",
  },
  {
    id: "meos-m12",
    project: "ME OS",
    title: "M12: rotating triangle and floating point",
    state: "Complete",
    detail: "Floating point confined to one file, enforced at link time.",
  },
  {
    id: "meos-m10",
    project: "ME OS",
    title: "M10: edge wrapping",
    state: "Complete",
    detail: "The rectangle wraps at both corridor edges, checked in QEMU.",
  },
  {
    id: "meos-m11",
    project: "ME OS",
    title: "M11: click and drag the rectangle",
    state: "Complete",
    detail: "Picked up with the pointer, keeping the press offset, and left on release.",
  },
  {
    id: "meos-m13",
    project: "ME OS",
    title: "M13: window object model",
    state: "Complete",
    detail: "Stable window ids, geometry and z order in a bounded pool.",
  },
  {
    id: "meos-m14",
    project: "ME OS",
    title: "M14: window surfaces and compositor",
    state: "Complete",
    detail: "Window local pixels, clipped and composited in z order.",
  },
  {
    id: "meos-m15",
    project: "ME OS",
    title: "M15: focus and event queues",
    state: "Complete",
    detail: "Focused input routed as bounded per window events.",
  },
  {
    id: "meos-m16",
    project: "ME OS",
    title: "M16: dirty regions and an immediate cursor",
    state: "Complete",
    detail: "Only what changed is drawn. A cursor move costs a few hundred pixels, not a screen.",
  },
  {
    id: "meos-m17",
    project: "ME OS",
    title: "M17: tiling layout",
    state: "Complete",
    detail: "Windows placed by a rule into tiles that never overlap.",
  },
  {
    id: "meos-m18",
    project: "ME OS",
    title: "M18: the ME OS Default desktop",
    state: "Complete",
    detail: "Bars, frames, focus and a taskbar, with clicks routed to the right window.",
  },
  {
    id: "meos-m19",
    project: "ME OS",
    title: "M19: a terminal that knows what the machine is",
    state: "Complete",
    detail: "A shell answering with what the kernel measured, never a written down answer.",
  },
  {
    id: "meos-m20",
    project: "ME OS",
    title: "M20: a filesystem and the commands that move around it",
    state: "Complete",
    detail: "Real directories, files and paths, with real errors when a path is wrong.",
  },
  {
    id: "meos-m21",
    project: "ME OS",
    title: "M21: an editor, a clock, and a shell you can work in",
    state: "Complete",
    detail: "Text changed in the middle of a line and saved. The machine knows the time.",
  },
  {
    id: "meos-m22",
    project: "ME OS",
    title: "M22: four workspaces",
    state: "Complete",
    detail: "Ctrl 1 to 4 switch, Ctrl M sends a window across.",
  },
  {
    id: "meos-m23",
    project: "ME OS",
    title: "M23: a disk",
    state: "Complete",
    detail: "The filesystem is written to an ATA disk and survives a restart.",
  },
  {
    id: "meos-m24",
    project: "ME OS",
    title: "M24: files made of blocks",
    state: "Complete",
    detail: "A file is a list of blocks from a shared pool, so a document fits in one.",
  },
  {
    id: "meos-m25",
    project: "ME OS",
    title: "M25: output that need not go to the screen",
    state: "Complete",
    detail: "Any command can be redirected to a file or piped into another.",
  },
  {
    id: "meos-m26",
    project: "ME OS",
    title: "M26: scrollback",
    state: "Complete",
    detail: "Page Up and Page Down look back at what went past.",
  },
  {
    id: "meos-m27",
    project: "ME OS",
    title: "M27: files of commands",
    state: "Complete",
    detail: "RUN reads a file and does what it says. A script that runs itself stops.",
  },
  {
    id: "meos-m28",
    project: "ME OS",
    title: "M28: finishing a name",
    state: "Complete",
    detail: "Tab completes a filename, and offers nothing rather than the wrong thing.",
  },
  {
    id: "meos-factorio",
    project: "ME OS",
    title: "Proof point: Factorio running on ME OS",
    state: "Long term",
    tier: "LONG-TERM",
    detail: "Factorio does not run on ME OS. No processes, no filesystem, no memory management.",
  },
  {
    id: "holo-m1",
    project: "Holoprojector",
    title: "M1: rotating pyramid",
    state: "Complete",
    detail: "A pyramid in a 3D simulator, driven through the command layer.",
  },
  {
    id: "holo-m2",
    project: "Holoprojector",
    title: "M2: multiple scene objects",
    state: "Complete",
    detail: "Several objects, each with its own transform. No display hardware.",
  },
  {
    id: "holo-m3",
    project: "Holoprojector",
    title: "M3: pointer interaction",
    state: "Complete",
    detail: "Hover, select, grab, drag, release. Only the mouse works, the rest are stubs.",
  },
  {
    id: "holo-m4",
    project: "Holoprojector",
    title: "M4: simulated Holo Pencil",
    state: "Complete",
    detail: "A software pointer on the same commands. No physical pencil exists.",
  },
  {
    id: "holo-m5",
    project: "Holoprojector",
    title: "M5: bracer input adapter",
    state: "Complete",
    detail: "Hand pose, alignment, grip, losing tracking. No bracer exists, no sensor is read.",
  },
  {
    id: "holo-m6",
    project: "Holoprojector",
    title: "M6: richer Carl adapter",
    state: "Complete",
    detail: "Several instructions per sentence. Offline keyword matching, no model, no network.",
  },
  {
    id: "holo-m7",
    project: "Holoprojector",
    title: "M7: multi user interaction model",
    state: "Next",
    tier: "PLANNED",
    detail: "Several control surfaces on one scene. Still a simulator.",
  },
  {
    id: "carl-panel-v1",
    project: "Carl",
    title: "Command Panel v1, frozen and verified",
    state: "Complete",
    detail: "Event ordering proved against the real binaries. Nothing hosted.",
  },
  {
    id: "carl-army-runtime",
    project: "Carl",
    title: "Agent runtime, first slice",
    state: "Complete",
    detail: "Identity, session and process as three lifetimes. A restart is not a new agent.",
  },
  {
    id: "carl-deployment",
    project: "Carl",
    title: "A deployed agent group",
    state: "Long term",
    tier: "LONG-TERM",
    detail: "Not installed. No server, nothing anybody outside can reach.",
  },
  {
    id: "bracer-research",
    project: "Employee Bracers",
    title: "Hand tracking feasibility",
    state: "Planned",
    tier: "PLANNED",
    detail: "Can sensing resolve finger intent? Asked before anything is designed.",
  },
  {
    id: "tools-platform",
    project: "Research Tools",
    title: "Platform design",
    state: "Planned",
    tier: "PLANNED",
    detail: "Define the shared simulation and measurement layer.",
  },
  {
    id: "energy-dc-bus",
    project: "Energy",
    title: "Smart DC bus study",
    state: "Long term",
    tier: "LONG-TERM",
    detail: "Paper study only. Nothing built, nothing energised.",
  },
  {
    id: "factory-poc",
    project: "Manufacturing",
    title: "First production proof of concept",
    state: "Long term",
    tier: "LONG-TERM",
    detail: "One clip, printed, checked by camera and weight. Nothing built.",
  },
];
