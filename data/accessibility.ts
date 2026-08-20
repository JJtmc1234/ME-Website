/** ME's intent that interfaces be multimodal.
 *
 *  Statements of design intent. ME builds no medical device, makes no medical
 *  or health claim, and has built none of the input hardware described here.
 */

export const intent =
  "One input channel suits one kind of body on one kind of day. ME intends its interfaces to accept several, so a person can use whichever works for them without asking for an exception to be made.";

export const channels = [
  {
    name: "Wearable and muscle sensing",
    body: "Bracer based inertial and optical tracking, with surface electromyography as a research question. An input channel, not a medical device.",
    status: "Research",
  },
  {
    name: "Eye tracking",
    body: "Gaze as a pointing and selection channel, particularly where hands are occupied or unavailable.",
    status: "Concept",
  },
  {
    name: "Voice",
    body: "Spoken instruction through the same command path every other surface uses, so a voice command is neither more nor less privileged than a keypress.",
    status: "Concept",
  },
  {
    name: "Switches and adaptive controllers",
    body: "Support for existing switch inputs and adaptive controllers rather than requiring ME specific hardware.",
    status: "Concept",
  },
  {
    name: "Brain computer interfaces",
    body: "A long horizon research interest, well outside anything ME is building. Mentioned because designing input paths that assume hands would foreclose it.",
    status: "Research",
  },
];

export const principles = [
  "Any control surface goes through the same command path, so a new input method does not need every application rewritten",
  "Calibration at first use and continuous adaptation, because people and conditions differ and change",
  "Text, contrast and motion settings respected rather than overridden",
  "No claim, express or implied, that any ME system diagnoses, treats or assists with a medical condition",
];
