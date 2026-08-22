/** Company strategy, stated as targets and working plans rather than promises.
 *
 *  Nothing here is a commitment to a customer, a funder or a ship date. ME has
 *  no investors, no customers and no product for sale, and this file must not
 *  imply otherwise. Language is deliberately hedged: target, working plan,
 *  current hypothesis, concept. */

export const horizon = {
  title: "Formal launch is a target for around 2035",
  body:
    "ME treats 2035 as a working target for becoming a formally operating company rather than a personal project with public repositories. It is a target and not a promise. The date is far enough out to be honest about how long an operating system, an agent layer and a volumetric display actually take, and near enough to make decisions today point somewhere.",
};

export const beforeLaunch = [
  {
    title: "A portfolio, not a product",
    body:
      "The years before launch are for building a portfolio of software prototypes, written concepts and research, plus selected hardware prototypes once a question genuinely needs a physical answer. A portfolio is what makes a claim checkable. Anyone can read a plan. Fewer plans survive being run.",
  },
  {
    title: "Foundations first",
    body:
      "The shared systems come before the products that would sit on them. An operating system, a command path, calibration and safety checks are all things every later branch borrows, so building them badly early is the expensive mistake.",
  },
  {
    title: "Capabilities that get reused",
    body:
      "Work is chosen partly by how many branches it serves. Command routing built for a projector is the routing a robot needs. Sensing work for a wearable feeds prosthetics. A capability that is only ever used once was probably the wrong thing to build first.",
  },
  {
    title: "Honest status labels",
    body:
      "Concept, research, software prototype, planned prototype, verified software milestone. ME has no physical hardware prototype, and no page here will say otherwise until one exists and can be shown.",
  },
];

export const flagship = {
  question:
    "What is the one thing ME should be able to show in three to five years?",
  hypothesis: "Carl running on ME OS as an agent native computing base",
  body:
    "The current hypothesis is that the flagship is not a device but the pairing of the agent layer with the operating system built to host it: an agent that is a normal part of the system rather than an application bolted on top, with permissions, memory, recovery and a human override that works when the agent does not.",
  why: [
    "Both projects are already active and already have demonstrable milestones, so the hypothesis is being tested by building rather than by argument.",
    "Every other ME branch wants the same thing underneath it, which means the work counts more than once.",
    "It is software, so it can be finished and shown without a factory, a supply chain or a physical prototype.",
  ],
  caveat:
    "This is a hypothesis about direction, not a decision that is closed. It would be revised if the work showed a different capability mattered more, and the question is deliberately kept open in public.",
};

export const notClaimed = [
  "No investors, no funding round and no valuation.",
  "No customers, no orders and no revenue.",
  "No product is for sale and no ship date is promised.",
  "No physical hardware prototype exists.",
];
