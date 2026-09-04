/** Where each project actually stands.
 *
 *  Every line is meant to be checkable against the project's own repository.
 *  If a claim here cannot be traced to something that runs, it should not be
 *  here. Fragments, not sentences: a label beats a paragraph.
 */
import type { Tier } from "@/data/tiers";

export type ProjectStatus = {
  name: string;
  slug?: string;
  tier: Tier;
  /** What is true today. A fragment. */
  state: string;
  /** How somebody could check it. A fragment. */
  evidence: string;
};

export const projectStatus: ProjectStatus[] = [
  {
    name: "ME OS",
    slug: "me-os",
    tier: "BUILDING NOW",
    state: "QEMU and VirtualBox. Never booted on physical hardware. M1 to M28 verified.",
    evidence: "Twenty host suites, and a headless boot that reads the framebuffer back",
  },
  {
    name: "Holoprojector",
    slug: "holoprojector",
    tier: "BUILDING NOW",
    state: "3D simulator. No projector. Planned display method: a laser trapped particle, lit as it moves.",
    evidence: "Six milestones, all against the simulator. The hardware backend refuses to run",
  },
  {
    name: "Carl",
    slug: "carl",
    tier: "BUILDING NOW",
    state: "Agents on one personal machine. A shared chat room is hosted. The agent group is not deployed.",
    evidence: "Frozen v1 panel, event ordering proved against the real binaries",
  },
  {
    name: "AOS",
    slug: "aos",
    tier: "BUILDING NOW",
    state: "One personal machine. Nothing hosted. Phases 0 to 3a done, the command runner is next.",
    evidence: "Supervision, the policy gate and the audit log, checked against real processes",
  },
  {
    name: "Employee Bracers",
    slug: "employee-bracers",
    tier: "LONG-TERM",
    state: "Nothing built. No sensor choice, no design, no accuracy shown.",
    evidence: "A simulator adapter taking a made up hand pose",
  },
  {
    name: "Lab Suit",
    slug: "lab-suit",
    tier: "LONG-TERM",
    state: "A direction. No suit, no module, no visor.",
    evidence: "Nothing to check. No repository, no prototype",
  },
  {
    name: "ME Smart Driver",
    slug: "smart-driver",
    tier: "LONG-TERM",
    state: "A direction. No driver, no torque measurement designed.",
    evidence: "Nothing to check. No repository, no prototype",
  },
  {
    name: "Research Tools",
    slug: "research-tools",
    tier: "LONG-TERM",
    state: "A direction. Kept shallow until a branch is blocked without it.",
    evidence: "Nothing to check. Nothing built",
  },
];
