/** Public log of real progress. Entries are added when something actually
 *  works, not when it is started. Dates are ISO so they sort and format.
 *
 *  One short body per entry. If a fact matters, it stays and the words around
 *  it go. */

export type Update = {
  date: string;
  title: string;
  area: string;
  body: string;
};

export const updates: Update[] = [
  {
    date: "2026-09-04",
    title: "Carl and the AOS runtime now live in one repository",
    area: "Carl",
    body: "Three repositories became one. They stay two concerns. Carl decides what work happens. AOS decides what a running agent is allowed to do, in its own process, so it refuses the same things whether or not Carl is correct. A test reads the runtime's own source and fails if work vocabulary appears in it.",
  },
  {
    date: "2026-09-04",
    title: "A room that people and agents are both in",
    area: "Carl",
    body: "One conversation and one record, instead of a chat for the people and a log for the machines that nobody reads together. A name is earned by a password and cannot be chosen, so an agent that has been talked into something still cannot post as somebody else. It is hosted and password gated. The agent group itself is still not deployed.",
  },
  {
    date: "2026-09-03",
    title: "ME OS finishes a name you have started typing",
    area: "ME OS",
    body: "M28. Tab completes a filename and offers nothing rather than the wrong thing. M27 came first: RUN reads a file of commands and does what it says, and a script that runs itself stops instead of going forever.",
  },
  {
    date: "2026-09-02",
    title: "ME OS remembers things after it is switched off",
    area: "ME OS",
    body: "M23 to M26. There is an ATA disk driver and an on disk format, so the filesystem is still there after a restart. A file is a list of blocks from a shared pool. Any command can be redirected to a file or piped into another. Page Up looks back at two hundred lines. The test boots twice and fails if the first boot loaded anything, because a disk left over from last time would pass without the kernel writing a byte.",
  },
  {
    date: "2026-09-01",
    title: "ME OS becomes something you can work in",
    area: "ME OS",
    body: "M17 to M22. A tiling desktop with bars, frames, a taskbar and four workspaces. A terminal whose answers all come from what the kernel measured, never from a written down answer. A filesystem, a text editor, and the real time of day from the CMOS clock.",
  },
  {
    date: "2026-08-29",
    title: "ME OS learns what a window is",
    area: "ME OS",
    body: "M13 to M16. Windows are kernel objects with stable ids and a deterministic z order, drawing into their own surfaces which a compositor clips and stacks. Only what changed is redrawn, so moving the cursor costs 247 pixels instead of two million.",
  },
  {
    date: "2026-08-22",
    title: "Four status tiers, so nobody has to guess",
    area: "Company",
    body: "Four tiers on every product, area and unfinished milestone. Only BUILDING NOW claims anything is happening. Factorio joined the roadmap as a proof point that does not work today.",
  },
  {
    date: "2026-08-21",
    title: "The first feedback from outside ME",
    area: "Company",
    body: "Entries from people who are not ME, sorted into five kinds. The ones that changed a plan are named.",
  },
  {
    date: "2026-08-21",
    title: "A target for 2035, and a first answer on the flagship",
    area: "Company",
    body: "Current hypothesis: Carl running on ME OS. Around 2035 is the working target for a formal launch. Target, not promise.",
  },
  {
    date: "2026-08-21",
    title: "ME OS turns a triangle, and hands over the rectangle",
    area: "ME OS",
    body: "M12: floating point in one file, enforced at link time. M9: three presses down measured at exactly 48 pixels. Never booted on physical hardware.",
  },
  {
    date: "2026-08-21",
    title: "The Holoprojector understands ordinary sentences",
    area: "Holoprojector",
    body: "M6 is met. Several instructions per sentence, and an unknown step stops the whole sentence. Offline keyword matching, no model, no network.",
  },
  {
    date: "2026-08-21",
    title: "ME OS can work things out",
    area: "ME OS",
    body: "M6 arithmetic, M7 one conditional, M8 named values. 386 checks run without an emulator. QEMU only.",
  },
  {
    date: "2026-08-21",
    title: "The site moves to its own domain",
    area: "Company",
    body: "multiverse-enterprises.com serves the site, still on GitHub Pages. The first deployment arrived unformatted, asking for its stylesheet at the old path. The build now states its path.",
  },
  {
    date: "2026-08-20",
    title: "A permanent ME domain, and a site ready for it",
    area: "Company",
    body: "ME acquired multiverse-enterprises.com. One value sets the canonical origin, feeding metadata, the sitemap and robots.",
  },
  {
    date: "2026-08-20",
    title: "ME OS moves the rectangle, on a real clock",
    area: "ME OS",
    body: "M5 is met. Sixty pixels a second off a counter that wraps every 55 milliseconds, tested over thousands of steps.",
  },
  {
    date: "2026-08-20",
    title: "A bracer shaped input for the simulator",
    area: "Holoprojector",
    body: "M5 is met. A hand pose, an alignment, a grip, and losing tracking mid drag without dropping objects on an invisible hand. No bracer exists.",
  },
  {
    date: "2026-08-20",
    title: "The public site is live, on GitHub Pages for now",
    area: "Company",
    body: "A static export, no server. One file knows where the site is deployed.",
  },
  {
    date: "2026-08-20",
    title: "ME OS has a mouse cursor",
    area: "ME OS",
    body: "M4 is met. A polled PS/2 mouse moves a cursor that puts back what it covered, measured in the framebuffer.",
  },
  {
    date: "2026-08-20",
    title: "A simulated holo pencil, proving the pointer layer is not a mouse",
    area: "Holoprojector",
    body: "M4 is met. A second pointer source in software, same commands, same safety checks. No physical pencil exists.",
  },
  {
    date: "2026-08-20",
    title: "ME OS draws a rectangle, and a test that cannot be fooled",
    area: "ME OS",
    body: "M3 is met. The check asserts the rectangle is solid, sized and centred. A second test draws off every edge of a fake framebuffer.",
  },
  {
    date: "2026-08-20",
    title: "Pointing at objects in the Holoprojector simulator",
    area: "Holoprojector",
    body: "M3 is met. A pointer is a ray plus a pressed flag, so any source could make one. Only the mouse exists. 135 tests, no GPU.",
  },
  {
    date: "2026-08-20",
    title: "ME OS reads the keyboard",
    area: "ME OS",
    body: "M2 is met. The last key pressed, checked by injecting one and reading the framebuffer. Two clean builds are byte identical.",
  },
  {
    date: "2026-08-20",
    title: "Holoprojector simulator holds several objects at once",
    area: "Holoprojector",
    body: "M2 is met. Three objects, each with its own state. The command set became one table the router validates against.",
  },
  {
    date: "2026-08-20",
    title: "ME OS boots",
    area: "ME OS",
    body: "M1 is met. A freestanding x86-64 kernel over UEFI draws one line and halts. Verified in QEMU.",
  },
  {
    date: "2026-08-19",
    title: "Holoprojector control software, first milestone",
    area: "Holoprojector",
    body: "A rotating pyramid in a 3D simulator, every control through one router. The physical backend refuses to run.",
  },
  {
    date: "2026-08-19",
    title: "Product registry and milestone ladders defined",
    area: "Company",
    body: "ME OS, Holoprojector and Employee Bracers written down, with the ME OS milestone ladder.",
  },
  {
    date: "2026-08-19",
    title: "Community feedback opened to the public",
    area: "Company",
    body: "An open document now collects outside criticism, questions and risks.",
  },
  {
    date: "2026-08-19",
    title: "ME OS repository initialized",
    area: "ME OS",
    body: "Work began, starting with the M1 boot proof.",
  },
];
