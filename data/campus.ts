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

export const bikes = {
  title: "Borrowed campus bikes",
  body:
    "Free bikes at docks around the campus, borrowed rather than assigned. Take one from a dock, ride it to the building you need, leave it at the dock there. They stay ME property, so nobody is responsible for storing, insuring or maintaining one, and nobody has to find their own bike before they can cross the site.",
};

export const disclaimer =
  "No campus exists. This is a written description of what ME would build, not a place anyone can visit.";
