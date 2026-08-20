/** Public log of real progress. Entries are added when something actually
 *  works, not when it is started. Dates are ISO so they sort and format. */

export type Update = {
  date: string;
  title: string;
  area: string;
  body: string;
};

export const updates: Update[] = [
  {
    date: "2026-08-19",
    title: "Holoprojector control software reaches its first milestone",
    area: "Holoprojector",
    body:
      "A rotating pyramid renders in a 3D simulator, with pause, resume, reverse, X, Y and Z axis selection, speed control, and reset. Every control goes through one command router, animation is driven by elapsed time rather than frame count, and the simulator backend sits behind the same interface a physical projector would use. The physical backend is a stub that refuses to run, and contains no emitter control of any kind.",
  },
  {
    date: "2026-08-19",
    title: "Product registry and milestone ladders defined",
    area: "Company",
    body:
      "ME OS, Holoprojector, Employee Bracers, and the personal computing strategy were written down with explicit hardware and software direction, including the ME OS milestone ladder from boot proof through basic conditionals.",
  },
  {
    date: "2026-08-19",
    title: "Community feedback opened to the public",
    area: "Company",
    body:
      "An open document now collects outside criticism, questions, risks, and ideas on any part of ME. Candid criticism is explicitly welcome.",
  },
  {
    date: "2026-08-19",
    title: "ME OS repository initialized",
    area: "ME OS",
    body:
      "Work began on the from scratch x86-64 operating system, starting with the M1 boot proof rather than any larger subsystem.",
  },
];
