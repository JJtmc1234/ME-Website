/** Company level facts and navigation. Every page reads from here. */

export const site = {
  name: "Multiverse Enterprises",
  short: "ME",
  mission:
    "Maximize humanity's long-term ability to understand, build, survive, and flourish.",
  summary:
    "ME is a research, engineering, and product organization. We work across computing, robotics, energy, space, manufacturing, materials, medicine, and frontier physics, and we build the shared systems those fields keep needing: an operating system, an agent layer, research tools, and volumetric displays.",
  principle: "Broad roadmap, narrow active scope.",
  founded: 2026,
} as const;

export type NavItem = { href: string; label: string; description?: string };

export const primaryNav: NavItem[] = [
  { href: "/products", label: "Products", description: "What ME is building" },
  { href: "/research", label: "Research", description: "Branches and open questions" },
  { href: "/roadmap", label: "Roadmap", description: "Milestone gated execution" },
  { href: "/updates", label: "Updates", description: "Recent progress" },
  { href: "/about", label: "About", description: "Mission and method" },
];

export const secondaryNav: NavItem[] = [
  { href: "/feedback", label: "Community feedback" },
  { href: "/founder", label: "Founder" },
];

/** Live Google Doc from the ME Drive folder. Anyone may add feedback. */
export const communityFeedbackDoc =
  "https://docs.google.com/document/d/18eUJ0EzZkwMIqgS8boKKHCPKxKjzx21mWmUipSCd-Zs/edit";

/** The public site never touches internal systems. Recorded here so the
 *  boundary is documented in code as well as in the README. */
export const boundary = {
  publicSite: "This site. Static, read only, no accounts, no internal data.",
  internal:
    "A separate authenticated command center, planned but not built. It will live on its own host and share nothing with this frontend.",
} as const;
