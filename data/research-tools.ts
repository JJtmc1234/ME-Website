/** The research tool family.
 *
 *  Concept stage. None of these exist, in software or hardware. They are
 *  described together because they are meant to be one loop rather than five
 *  separate products.
 */

export type Tool = {
  name: string;
  role: string;
  detail: string;
  kind: "Software" | "Hardware concept";
};

export const loop = [
  { step: "Question", body: "A branch writes down what it actually wants to know." },
  { step: "Simulation", body: "The cheap version runs first, in the simulation environment." },
  { step: "Experiment", body: "The lab bench runs the physical version, automated where it can be." },
  { step: "Sensing", body: "Sensor tiles and instruments capture what happened, not what was expected." },
  { step: "Analysis", body: "Raw data stays attached to the question that produced it." },
  { step: "Notebook", body: "The result, including the failures, is written down where it can be found again." },
  { step: "Next experiment", body: "The notebook decides what is worth doing next." },
];

export const tools: Tool[] = [
  {
    name: "ME Lab Bench",
    kind: "Hardware concept",
    role: "The physical experiment surface",
    detail:
      "A standard bench with power, sensing, capture and automation built in, so an experiment is instrumented by default instead of by improvisation. Concept only. No bench has been built.",
  },
  {
    name: "Scientific Notebook",
    kind: "Software",
    role: "Where results live",
    detail:
      "Experiments, parameters, raw data, analysis and conclusions kept together with their provenance. Negative results are first class, because a lab that only records successes repeats its failures.",
  },
  {
    name: "Autonomous Microscope",
    kind: "Hardware concept",
    role: "Unattended observation",
    detail:
      "Imaging that can run a scan plan on its own and hand back data with the conditions it was captured under. Concept only.",
  },
  {
    name: "Simulation Environment",
    kind: "Software",
    role: "The cheap version first",
    detail:
      "Shared scientific computing and simulation, so a branch can test an idea before it costs materials, machine time or a person's week.",
  },
  {
    name: "Sensor Tiles",
    kind: "Hardware concept",
    role: "Measurement you can place anywhere",
    detail:
      "Small standard sensing units that can be added to a bench, a machine or a room without designing a new data path each time. Concept only.",
  },
];
