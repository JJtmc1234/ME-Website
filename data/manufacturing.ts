/** ME's long term manufacturing model.
 *
 *  Concept and planning only. No factory cell, conveyor, inserter or line
 *  exists. Nothing here is operating, deployed, or being produced.
 */

export const model = [
  { title: "Distributed automated production", body: "Many small automated sites, not one enormous plant." },
  { title: "Standardized Factory Cells", body: "Several standard sizes. One footprint wastes space or cripples the work." },
  { title: "Fixed routing first", body: "Conveyors and inserters. Mobile robots only where routing is awkward." },
  { title: "Simple splitters before smart ones", body: "Predictable first. Smart routing once a line shows where it is needed." },
  { title: "Service routing under the floor", body: "Raised floor and trenches, so the floor stays clear." },
  { title: "Criticality based buffers", body: "A cheap part that stops everything gets a deep buffer." },
  { title: "Buy the ordinary things", body: "Steel, wire, fasteners, bearings, electronics. A human owns suppliers." },
];

export const proofOfConcept = {
  target: "End to end automated production of one simple part",
  part: "A non safety critical automotive cable management clip",
  why: "Deliberately unglamorous. The hard parts are automation, quality control and traceability.",
  process: "Additive manufacturing",
  steps: [
    "Material in, part out, no manual step",
    "Camera and weight checks on every part",
    "Rejects quarantined, not discarded",
    "Full traceability: what, when, which cell, what settings",
    "Carl pauses a cell on a failure pattern, a person decides next",
  ],
};

export const holoRoom = {
  title: "Factory planning in a display volume",
  status: "Far future concept",
  body: "A room scale holoprojector for planning a factory before it is built. Ghost cells and conveyors at a size people can walk around.",
  workflow: [
    { step: "Plan", body: "Lay out cells, routing and walkways" },
    { step: "Simulate", body: "Run throughput, compare alternatives" },
    { step: "Approve", body: "A person signs off a specific layout" },
    { step: "Build", body: "The layout becomes build instructions" },
  ],
  later:
    "Further out the ghost layout could track the real floor. That needs hardware which does not exist.",
};
