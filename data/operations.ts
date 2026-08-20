/** How ME intends to run critical functions once there is something to run.
 *
 *  This is philosophy, not a schedule. ME operates nothing around the clock
 *  today. No real staffing, rota, incident or alert data appears on this site,
 *  and none should ever be added to it.
 */

export const shiftModel = [
  {
    title: "Round the clock, eventually",
    body: "Critical functions are meant to be staffed continuously once they exist. Systems that matter do not stop mattering at six in the evening.",
  },
  {
    title: "Eight hour shifts with overlap",
    body: "Eight hours by default, with a deliberate overlap at each boundary so a handoff is a conversation rather than a note left behind.",
  },
  {
    title: "A named incident commander",
    body: "One person holds command of an incident at a time. Everyone can name who that is.",
  },
  {
    title: "On call specialists",
    body: "Depth is on call rather than on shift. A specialist is reached when their specialism is needed.",
  },
  {
    title: "Independent safety and red teams",
    body: "The people checking a system do not report to the people running it. A safety function that can be overruled by delivery pressure is decoration.",
  },
  {
    title: "Human override that does not depend on the agent",
    body: "Override paths work with Carl unavailable, wrong, or suspected compromised.",
  },
  {
    title: "Fatigue rules and two person rules",
    body: "Hours are bounded, and critical actions need two people. Tiredness and single points of judgement cause the same kind of accident.",
  },
  {
    title: "Drills and post incident reviews",
    body: "Emergencies are practised on ordinary days, and every significant incident is reviewed afterwards.",
  },
];

export const breaks = {
  principle: "Breaks are paid, scheduled and mandatory.",
  detail: [
    "Two paid fifteen minute breaks and one paid thirty minute meal break in a typical eight hour critical shift",
    "Mandatory, not offered. A break nobody takes is a policy nobody has",
    "Carl proposes staggered break schedules so coverage never drops, and a human shift supervisor can change them",
    "Coverage is handed off before anyone steps away from a critical post",
  ],
  why: "Tired people miss things. Treating rest as optional is how an organisation converts goodwill into incidents.",
};

export const handoffLog = {
  title: "What a written handoff contains",
  intro:
    "A handoff is a document, not a conversation someone remembers. The incoming shift should be able to read it and know what they have inherited.",
  items: [
    "Active incidents, and who currently holds command of each",
    "Unfinished tasks, with where they were left",
    "Unusual system behaviour, including things that looked odd and were not chased",
    "Decisions made during the shift, and why",
    "Risks and watch items for the next shift",
    "Follow up owners, by name, for anything that outlives the shift",
  ],
};

export const cameraPolicy = {
  title: "Cameras and machine safety",
  status: "Design intent. No camera system is installed, and nothing is watching anything.",
  points: [
    "Broad camera coverage in operationally relevant areas: production floors, labs, plant, loading, and other places where machines and people share space",
    "No cameras in private spaces. Bathrooms and changing areas are not covered, and no exception makes them covered",
    "The primary purpose is safety, not surveillance of people's work",
    "Carl may eventually stop an affected machine or cell when it detects a clear hazard, because a machine that keeps running through a hazard is the problem",
    "Restarting takes two things: Carl verifying the hazard is gone, and a person authorising the restart. Neither alone is enough",
  ],
};

export const incidentHandling = [
  {
    title: "Written handoff",
    body: "Shift changes carry a structured written handoff, covering active incidents, unfinished tasks, unusual behaviour, decisions, risks and follow up owners.",
  },
  {
    title: "Overlap, extended when needed",
    body: "Fifteen to thirty minutes of overlap by default, longer when the situation warrants it. The clock does not decide when a handoff is finished.",
  },
  {
    title: "Joint command during transitions",
    body: "An active incident is held jointly across a shift change, and the incoming lead explicitly accepts command. Command is transferred, never assumed.",
  },
  {
    title: "Closing needs agreement",
    body: "An incident closes when the incident commander and the relevant technical lead both agree it is closed.",
  },
  {
    title: "Review, then tracked follow up",
    body: "Significant incidents get a post incident review, and its follow up actions become tracked tasks rather than good intentions.",
  },
  {
    title: "Overdue safety work escalates",
    body: "Safety and security follow ups that go overdue escalate automatically. Nothing important should depend on someone remembering.",
  },
];

export const alerts = {
  title: "Alerts go to the people who can act",
  points: [
    "Not everyone by default. Broadcasting to all is a deliberate choice for specific incidents, never the normal path",
    "Every alert says why this person was alerted and what action is expected",
    "Three answers: accept, need backup, unable",
    "Escalation is a chain, not a retry: primary, backup, shift lead, incident commander",
    "Public and shared displays show safe public instructions only, never incident detail",
    "Each site can raise, route and resolve a local alert with central systems unreachable",
    "The long term local controller has an offline manual panel that does not depend on Carl",
  ],
  status: "Design notes only. No alert system has been built.",
};
