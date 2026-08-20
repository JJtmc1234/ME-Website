/** ME's long term manufacturing model.
 *
 *  Concept and planning only. No factory cell, conveyor, inserter or line
 *  exists. Nothing here is operating, deployed, or being produced.
 */

export const model = [
  {
    title: "Distributed automated production",
    body: "Many small automated sites rather than one enormous plant. A distributed model survives a single site's problems and puts production nearer to where it is used.",
  },
  {
    title: "Standardized Factory Cells",
    body: "Production is organized into standard cells rather than bespoke lines. Several standard sizes, not one universal size, because forcing every process into one footprint wastes space in small cases and cripples large ones.",
  },
  {
    title: "Fixed routing first",
    body: "Conveyors and belts move material between cells, with robotic inserters and arms handling transfer. Autonomous mobile robots are used only where fixed routing would be awkward, not as the default.",
  },
  {
    title: "Simple splitters before smart ones",
    body: "Filter splitters come first because they are predictable and easy to reason about. Smart splitters arrive later, when a real line has shown where routing decisions actually need to be made.",
  },
  {
    title: "Service routing under the floor",
    body: "A raised floor and service trenches let conveyors cross and utilities reach cells without turning the floor into an obstacle course.",
  },
  {
    title: "Criticality based buffers",
    body: "Inventory buffers are sized by how badly a stall would hurt, not by a single blanket rule. A cheap part that stops everything gets a deep buffer; an expensive part that stops one cell does not.",
  },
  {
    title: "Buy the ordinary things",
    body: "Steel, wire and cable, fasteners, bearings and standard electronics are bought from external suppliers. Making commodity inputs adds no strategic value. A human procurement lead owns supplier relationships, with Carl assisting rather than deciding.",
  },
];

export const proofOfConcept = {
  target: "Full end to end automated production of one simple part",
  part: "A non safety critical automotive wiring and cable management clip",
  why: "It is deliberately unglamorous. A clip is simple enough that the interesting problems are the automation, the quality control and the traceability, rather than the part itself. Nothing about it is safety critical, so a bad part is a scrap part, not a hazard.",
  process: "Additive manufacturing, as the first process to bring up end to end",
  steps: [
    "Material in, part out, with no manual step in the middle",
    "Camera and weight checks on every part",
    "Rejects quarantined rather than discarded, so a failure can be examined",
    "Full traceability for rejected parts: what was made, when, by which cell, under what settings",
    "Carl pauses an affected cell when it detects a significant failure pattern, and a person decides what happens next",
  ],
};

export const holoRoom = {
  title: "Factory planning in a display volume",
  status: "Far future concept",
  body:
    "A room scale holoprojector used to plan a real factory before it is built: ghost cells, ghost conveyors, ghost inserters, buffers and walkways standing in the middle of the room at a size people can walk around.",
  workflow: [
    { step: "Plan", body: "Lay out cells, routing, buffers and walkways in the volume." },
    { step: "Simulate", body: "Run throughput against the layout and compare routing alternatives." },
    { step: "Approve", body: "A person signs off on a specific layout, not a vague direction." },
    { step: "Build", body: "The approved layout becomes build instructions and task assignments for people and robots." },
  ],
  later:
    "Further out, the planned ghost layout could stay synchronized with the real factory's live state, so the plan and the floor are the same picture. This depends on hardware that does not exist, and on a Holoprojector that is currently a simulator.",
};
