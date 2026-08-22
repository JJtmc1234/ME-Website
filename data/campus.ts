/** The HQ and campus concept.
 *
 *  Concept only. ME owns no campus, no building and no site. Nothing here has
 *  been built, leased, designed by an architect, or costed.
 */

export const shape = {
  title: "A hybrid: one core, several satellites",
  body:
    "A central tower with research wings extending from it, plus separate buildings where separation is genuinely useful. The core holds the functions that need to be near each other; everything with a reason to stand apart, stands apart.",
};

export const zones = [
  {
    name: "Central tower",
    body: "Leadership, central command and agent operations, major meeting rooms, reception and visitor functions, and the monitoring and control of compute.",
  },
  {
    name: "Research labs",
    body: "Closest to the tower, because they are what the tower exists to support and the walk between a question and the people answering it should be short.",
  },
  {
    name: "Prototyping and engineering",
    body: "Beyond the labs. Noisier, dirtier and more spread out than lab work, and less often needed in a hurry from the core.",
  },
];

export const separateBuildings = [
  { name: "Manufacturing and warehouse", why: "Different footprint, different logistics, different noise." },
  { name: "Hazardous and specialized labs", why: "Separation is the safety measure. It should not be argued about each time." },
  { name: "Data center", why: "Power, cooling and physical access controls that no office should inherit." },
  { name: "Gym", why: "Somewhere to go that is not the desk." },
  { name: "Employee apartments", why: "For people who want to live close, without making it a condition of the job." },
  { name: "Support infrastructure", why: "Plant, storage, utilities and the unglamorous things a site needs to work." },
];

export const aiNativeWork = {
  title: "Designed around AI native work",
  body:
    "The buildings are the easy part of a campus concept. The harder question is how work is actually done inside them, and the assumption here is that agents are ordinary collaborators rather than tools somebody opens. These are principles for a way of working, not a specification for a room.",
};

export const workPrinciples = [
  {
    name: "Voice where voice is better",
    body: "Speaking is faster than typing for asking, deciding and correcting, and worse for anything that has to be exact. The intent is voice first where it genuinely helps and a keyboard everywhere it does not, rather than voice everywhere as a novelty.",
  },
  {
    name: "Agents as normal collaborators",
    body: "An agent is in the room the way a colleague is: it has context, it can be asked, it can be wrong, and it can be told it is wrong. It is not a menu item and not a chat window somebody has to remember to open.",
  },
  {
    name: "Shared spatial interfaces",
    body: "Work that is three dimensional should be looked at together in a volume rather than in turns on a flat screen. This is the same reason the Holoprojector exists, applied to the room instead of the product.",
  },
  {
    name: "Idea to simulation to prototype to test",
    body: "The loop is the unit of work. An idea becomes something simulated the same day, a simulation becomes a prototype when it is worth the cost, and a prototype is not believed until it is tested. Shortening that loop is worth more than any single tool in it.",
  },
  {
    name: "Explicit human override",
    body: "A person can stop, reverse or overrule any agent action, through a path that does not depend on the agent being available or correct. This is a requirement rather than a setting, and it is the same requirement ME OS and Carl are being built to.",
  },
];

export const workModes = [
  {
    name: "Deep work",
    body: "Quiet, interruption free, single person. The default assumption is that concentration is the scarce resource and everything else can wait.",
  },
  {
    name: "Collaborative",
    body: "Several people and their agents on one problem, with the shared spatial display in the middle rather than a projector at one end.",
  },
  {
    name: "Simulation",
    body: "Rooms set up for running and watching simulations, where the output is meant to be walked around rather than read off a monitor.",
  },
];

export const workDisclaimer =
  "None of these spaces exists. No room, no building and no campus has been built, leased or designed by an architect, and no agent works in one.";

export const bikes = {
  title: "Borrowed campus bikes",
  body:
    "Free bikes at docks around the campus, borrowed rather than assigned. Take one from a dock, ride it to the building you need, leave it at the dock there. They stay ME property, so nobody is responsible for storing, insuring or maintaining one, and nobody has to find their own bike before they can cross the site.",
};

export const disclaimer =
  "No campus exists. This is a written description of what ME would build, not a place anyone can visit.";
