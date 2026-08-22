/** The Energy branch, whose first focus is power electronics.
 *
 *  Concept and research. ME has designed no power hardware, built no bus, and
 *  operates no electrical system.
 */

export const focus =
  "Power electronics: conversion, control, distribution. The layer everything else sits on.";

/** What real distribution has to deal with. Labels, not lessons. */
export const realities = [
  "Voltage limits",
  "Current limits",
  "Conductor heating",
  "Resistance losses",
  "Insulation ageing",
  "Switchgear under fault",
  "Conversion losses",
  "Cooling",
  "Fault protection",
];

export const firstSystem = {
  name: "Smart DC bus for labs and factory cells",
  status: "Concept",
  body: "Most bench equipment converts AC to DC anyway, often badly and repeatedly. Distributing DC once and well is worth studying.",
  questions: [
    "What voltage suits a bench and a cell",
    "Which device disconnects first on a fault, and how fast",
    "How a cell reports consumption without a second wiring system",
    "What happens on a fault, designed rather than discovered",
  ],
  caution:
    "Not a design, not a specification, not advice. Nothing has been built or energised.",
};
