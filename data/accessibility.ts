/** ME's intent that interfaces be multimodal.
 *
 *  Statements of design intent. ME builds no medical device, makes no medical
 *  or health claim, and has built none of the input hardware described here.
 */

export const intent =
  "One channel suits one kind of body on one kind of day. None of these exists.";

export const channels = [
  { name: "Wearable and muscle sensing", body: "Bracer tracking, muscle sensing as a question", status: "Research" },
  { name: "Eye tracking", body: "Gaze as pointing, where hands are occupied", status: "Concept" },
  { name: "Voice", body: "Spoken instruction on the same command path", status: "Concept" },
  { name: "Switches and adaptive controllers", body: "Existing hardware, not ME specific hardware", status: "Concept" },
  { name: "Brain computer interfaces", body: "A long horizon interest, outside anything ME builds", status: "Research" },
];

export const principles = [
  "One command path, so a new input rewrites no application",
  "Calibration at first use, then continuous adaptation",
  "Text, contrast and motion settings respected",
  "No claim that any ME system diagnoses, treats or assists with a medical condition",
];
