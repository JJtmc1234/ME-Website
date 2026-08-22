/** How ME intends to run critical functions once there is something to run.
 *
 *  Philosophy, not a schedule. ME operates nothing around the clock today. No
 *  real staffing, rota, incident or alert data appears on this site, and none
 *  should ever be added to it.
 */

export const shiftModel = [
  { title: "Round the clock, eventually", body: "Once there is something that must not stop." },
  { title: "Eight hour shifts with overlap", body: "A handoff is a conversation, not a note." },
  { title: "A named incident commander", body: "One person at a time, and everyone knows who." },
  { title: "On call specialists", body: "Depth on call rather than on shift." },
  { title: "Independent safety and red teams", body: "Checkers do not report to the checked." },
  { title: "Human override", body: "Works with Carl unavailable or wrong." },
  { title: "Fatigue and two person rules", body: "Bounded hours. Critical actions need two people." },
  { title: "Drills and post incident reviews", body: "Emergencies practised on ordinary days." },
];

export const breaks = {
  principle: "Breaks are paid, scheduled and mandatory.",
  detail: [
    "Two paid fifteen minute breaks and a paid thirty minute meal break per shift",
    "Mandatory. A break nobody takes is a policy nobody has",
    "Carl proposes staggered schedules, a supervisor can change them",
    "Coverage handed off before anyone leaves a critical post",
  ],
  why: "Tired people miss things.",
};

export const handoffLog = {
  title: "What a written handoff contains",
  intro: "A document, not a conversation somebody remembers.",
  items: [
    "Active incidents, and who holds command",
    "Unfinished tasks, and where they were left",
    "Unusual behaviour, including what was not chased",
    "Decisions made, and why",
    "Risks and watch items",
    "Follow up owners, by name",
  ],
};

export const cameraPolicy = {
  title: "Cameras and machine safety",
  status: "Design intent. No camera system exists.",
  points: [
    "Where machines and people share space: floors, labs, plant, loading",
    "Never in private spaces. Bathrooms and changing areas, no exceptions",
    "Safety, not surveillance of people's work",
    "Carl may eventually stop an affected machine on a clear hazard",
    "Restart needs both: Carl verifying the hazard is gone, and a person authorising",
  ],
};

export const incidentHandling = [
  { title: "Written handoff", body: "Structured, every shift change." },
  { title: "Overlap, extended when needed", body: "Fifteen to thirty minutes. The clock does not end it." },
  { title: "Joint command during transitions", body: "Transferred and accepted, never assumed." },
  { title: "Closing needs agreement", body: "Incident commander and technical lead both." },
  { title: "Review, then tracked follow up", body: "Actions become tracked tasks." },
  { title: "Overdue safety work escalates", body: "Automatically. Nothing depends on remembering." },
];

export const alerts = {
  title: "Alerts go to the people who can act",
  points: [
    "Not everyone by default. Broadcasting is a deliberate choice",
    "Every alert says why this person, and what action",
    "Three answers: accept, need backup, unable",
    "Escalation is a chain, not a retry",
    "Shared displays show safe instructions only, never incident detail",
    "A site can resolve a local alert with central systems down",
    "An offline manual panel that does not need Carl",
  ],
  status: "Design notes only. No alert system has been built.",
};
