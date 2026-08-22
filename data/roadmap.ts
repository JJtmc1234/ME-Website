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
    state: "In progress",
    tier: "BUILDING NOW",
    detail: "Started. Nothing verified until the QEMU check passes.",
  },
  {
    id: "meos-m11",
    project: "ME OS",
    title: "M11: click and drag the rectangle",
    state: "Planned",
    tier: "PLANNED",
    detail: "Written down with a success condition. Not started.",
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
