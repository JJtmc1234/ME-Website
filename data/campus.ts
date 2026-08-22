/** The HQ and campus concept.
 *
 *  Concept only. ME owns no campus, no building and no site. Nothing here has
 *  been built, leased, designed by an architect, or costed.
 */

export const shape = {
  title: "A hybrid: one core, several satellites",
  body: "A central tower with research wings, plus separate buildings where separation is genuinely useful.",
};

export const zones = [
  { name: "Central tower", body: "Leadership, agent operations, meeting rooms, compute monitoring." },
  { name: "Research labs", body: "Closest to the tower. A short walk from a question to an answer." },
  { name: "Prototyping and engineering", body: "Beyond the labs. Noisier, dirtier, less often needed in a hurry." },
];

export const separateBuildings = [
  { name: "Manufacturing and warehouse", why: "Different footprint, logistics and noise" },
  { name: "Hazardous and specialized labs", why: "Separation is the safety measure" },
  { name: "Data center", why: "Power, cooling and access controls no office should inherit" },
  { name: "Gym", why: "Somewhere to go that is not the desk" },
  { name: "Employee apartments", why: "For people who want to live close, never a condition" },
  { name: "Support infrastructure", why: "Plant, storage and utilities" },
];

export const aiNativeWork = {
  title: "Designed around AI native work",
  body: "Principles for a way of working, not a specification for a room.",
};

export const workPrinciples = [
  { name: "Voice where voice is better", body: "Voice for asking, a keyboard for anything exact." },
  { name: "Agents as normal collaborators", body: "An agent has context, can be wrong, and can be told so." },
  { name: "Shared spatial interfaces", body: "Three dimensional work looked at together, not in turns." },
  { name: "Idea, simulation, prototype, test", body: "The loop is the unit of work. Shortening it beats any tool." },
  { name: "Explicit human override", body: "Stop or reverse any agent action, without needing the agent." },
];

export const workModes = [
  { name: "Deep work", why: "Quiet, single person. Concentration is the scarce resource" },
  { name: "Collaborative", why: "People and agents on one problem, around a shared display" },
  { name: "Simulation", why: "Output meant to be walked around, not read off a monitor" },
];

export const workDisclaimer =
  "None of these spaces exists. No room, no building, no campus, and no agent works in one.";

export const bikes = {
  title: "Borrowed campus bikes",
  body: "Free bikes at docks. Take one, ride it, leave it. They stay ME property, so nobody stores or insures one.",
};

export const disclaimer =
  "No campus exists. A description of what ME would build, not a place anyone can visit.";
