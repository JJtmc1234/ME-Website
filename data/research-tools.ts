/** The research tool family.
 *
 *  Concept stage. None of these exist, in software or hardware. They are
 *  described together because they are meant to be one loop rather than five
 *  separate products.
 */

export type Tool = {
  name: string;
  role: string;
  kind: "Software" | "Hardware concept";
};

export const loop = [
  "Question",
  "Simulation",
  "Experiment",
  "Sensing",
  "Analysis",
  "Notebook",
  "Next experiment",
];

export const tools: Tool[] = [
  { name: "ME Lab Bench", kind: "Hardware concept", role: "Power, sensing and capture built into the bench" },
  { name: "Scientific Notebook", kind: "Software", role: "Results with provenance. Negative results are first class" },
  { name: "Autonomous Microscope", kind: "Hardware concept", role: "Unattended scans, returned with their conditions" },
  { name: "Simulation Environment", kind: "Software", role: "The cheap version, before materials or machine time" },
  { name: "Sensor Tiles", kind: "Hardware concept", role: "Measurement placed anywhere, no new data path" },
];
