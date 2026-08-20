/** The Energy branch, whose first focus is power electronics.
 *
 *  Concept and research. ME has designed no power hardware, built no bus, and
 *  operates no electrical system.
 */

export const focus =
  "Power electronics: efficient conversion, control and distribution. It is the layer compute, robotics, labs, vehicles, satellites and storage all sit on top of, which makes it the useful place to start.";

export const realities = [
  { name: "Voltage limits", body: "Every component has a voltage it is rated for, and insulation that fails above it." },
  { name: "Current limits", body: "Conductors, connectors and switches each have a current they can carry continuously." },
  { name: "Conductor heating", body: "Current through resistance makes heat. Heat is what sets the real limit long before anything melts." },
  { name: "Resistance losses", body: "Energy lost in the wiring is energy paid for and not used, and it grows with the square of the current." },
  { name: "Insulation", body: "What separates conductors from each other and from people. It ages, and it is checked, not assumed." },
  { name: "Switchgear", body: "Making and breaking a circuit safely, including under fault conditions, is its own engineering problem." },
  { name: "Conversion", body: "Changing voltage or converting between AC and DC costs efficiency and produces heat." },
  { name: "Cooling", body: "Anything that dissipates power needs somewhere for that heat to go." },
  { name: "Fault protection", body: "Detecting a short or an overload and disconnecting fast enough to prevent damage or injury." },
];

export const firstSystem = {
  name: "Smart DC bus for labs and factory cells",
  status: "Concept",
  body:
    "A shared DC distribution bus for a lab bench or a factory cell, with monitoring and protection built in rather than bolted on. Most equipment on a bench converts incoming AC to DC anyway, often badly and repeatedly, so distributing DC once and well is worth studying.",
  questions: [
    "What voltage makes sense for a bench and a cell, given the equipment that would actually connect to it",
    "How protection coordinates: which device disconnects first, and how quickly, when something faults",
    "How a cell reports its own consumption and temperature without adding a second wiring system",
    "What happens on a fault, in enough detail that the answer is designed rather than discovered",
  ],
  caution:
    "Electrical work is dangerous and its rules exist because of accidents. Nothing here is a design, a specification or advice, and nothing has been built or energised.",
};
