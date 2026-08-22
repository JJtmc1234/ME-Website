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
    date: "2026-08-21",
    title: "The first feedback from outside ME",
    area: "Company",
    body:
      "The open document had been sitting there since it was published. It now has entries in it, from people who are not ME. Feedback is sorted into five kinds, idea, concern, correction, question and action item, and each entry gets a line saying which part of ME it touches and whether it changed a plan. Several of them did, and the ones that did are named on the feedback page rather than quietly absorbed. The most useful entry was a question rather than a suggestion, which is roughly what was hoped for when the document was opened.",
  },
  {
    date: "2026-08-21",
    title: "A target for 2035, and a first answer to what the flagship is",
    area: "Company",
    body:
      "Somebody asked what the one thing ME should be able to show in three to five years is. ME did not have an answer, which was the point of the question. The current hypothesis is Carl running on ME OS: an agent that is a normal part of the system rather than an application on top of it, with permissions, memory, recovery and a human override that works when the agent does not. It is written down as a hypothesis, not a decision, and it can be argued with. Alongside it, around 2035 is now recorded as the working target for ME becoming a formally operating company, and the years before it are for building a portfolio of software prototypes, concepts and research rather than announcing anything. Target, not promise. No investors, no customers, no ship date.",
  },
  {
    date: "2026-08-21",
    title: "ME OS turns a triangle, and hands over the rectangle",
    area: "ME OS",
    body:
      "Two milestones. Floating point was turned on deliberately, and one file is allowed to use it: everything that file exposes takes and returns whole numbers, and the build refuses to link if any other file contains a floating point instruction, so the rule is checked rather than trusted. What it draws is a triangle turning about its own centre on the same clock the rectangle uses. Then the arrow keys were given the rectangle. Arrows rather than letters, because every letter is already part of a typed sum, and the first press stops the rectangle drifting so steering is exact: the automated check measures three presses down as exactly forty eight pixels and eight presses left as exactly one hundred and twenty eight. Numbering went out of order on purpose. The triangle was numbered M12 after milestones people had already read, and building it first was better than renumbering them. Still an emulator. ME OS has never booted on a physical machine.",
  },
  {
    date: "2026-08-21",
    title: "The Holoprojector understands ordinary sentences",
    area: "Holoprojector",
    body:
      "M6 is met. The local Carl adapter takes more ways of saying the same thing, multipliers in words or digits, and sentences carrying several instructions joined by and, then, after that or a semicolon. A later step can depend on an earlier one, so select the cube then pause it pauses the cube rather than whatever happened to be selected when the sentence started. A step it cannot understand now stops the whole sentence and says which part failed, because half obeying a sentence is worse than refusing it: the speaker believes all three things happened and two of them did. That fault was found by a phrase quietly disappearing during this milestone's own testing. Everything still goes through the same command router and the same safety checks, so asking politely for an unsafe speed is refused exactly as a key press would be. Still keyword matching, still offline, no model and no network.",
  },
  {
    date: "2026-08-21",
    title: "ME OS can work things out",
    area: "ME OS",
    body:
      "Three milestones, each small on its own. M6: type a sum and press enter, and a line above the boot message shows the answer, with the precedence arithmetic has on paper and every operation refusing to overflow rather than wrapping. M7: one conditional, IF one value compared to another THEN this ELSE that, verified by typing both a condition that holds and one that does not and reading the two different answers off the screen. M8: a value can be given a name and used on a later line, with eight names, no scope, and an error rather than a zero when a name was never set. 386 checks now run without an emulator, and the emulator itself types on the keyboard and reads the framebuffer back. Still software: ME OS has never booted on a physical machine.",
  },
  {
    date: "2026-08-21",
    title: "The site moves to its own domain",
    area: "Company",
    body:
      "multiverse-enterprises.com now serves the public site. GitHub Pages still hosts it, so nothing about the site itself changed: it is the same static export, built from the root instead of from a project path. That distinction turned out to matter. The first deployment on the domain asked for its stylesheet at the old project path, which does not exist there, so every page arrived as unformatted text. The build now states its path and origin rather than inferring them, and fails outright if the old path reappears anywhere in the output. HTTPS followed shortly afterwards: the certificate covers the domain and its www form, http redirects to https, and www redirects to the plain domain.",
  },
  {
    date: "2026-08-20",
    title: "A permanent ME domain, and a site ready to move to it",
    area: "Company",
    body:
      "ME acquired multiverse-enterprises.com. It does not resolve yet: the account transfer and DNS are still to be done, and nothing builds against it. The site was prepared for the move instead. One value now sets the canonical origin, feeding page metadata, canonical links, social preview URLs, the sitemap and robots.txt, and building against the permanent domain was tried as a dry run: everything came out correct with no page changed. Until DNS is ready, GitHub Pages remains temporary hosting.",
  },
  {
    date: "2026-08-20",
    title: "ME OS moves the rectangle, on a real clock",
    area: "ME OS",
    body:
      "M5 is met. The rectangle crosses the screen at sixty pixels a second and turns around at each edge. Doing that properly meant giving the kernel a sense of time: it reads a hardware counter that wraps about every 55 milliseconds and adds up the differences, so the rectangle moves at a rate rather than at whatever speed the machine happens to run its loop. The wrap arithmetic and the movement are pure functions, tested on an ordinary machine over thousands of steps, because time that jumps backwards once per wrap and a rectangle that creeps off screen after ten minutes are exactly the faults a short look at an emulator misses.",
  },
  {
    date: "2026-08-20",
    title: "A bracer shaped input, and what it taught the simulator",
    area: "Holoprojector",
    body:
      "M5 is met. A third input for the Holoprojector simulator, shaped like a wearable rather than a pointing device: a hand pose in its own coordinate space, an alignment that maps it into the display volume, and a grip. Calibrating it is one gesture, holding a hand somewhere and declaring it the middle. It can also lose tracking, and when that happens mid drag it lets go of what it was holding rather than leaving it stuck to a hand nobody can see. Neither of those needed a change to the interaction layer, the command router or the safety checks, which is the result the milestone was looking for. No bracer exists, and nothing here reads or models a sensor.",
  },
  {
    date: "2026-08-20",
    title: "The public site is live, temporarily on GitHub Pages",
    area: "Company",
    body:
      "The site is published while ME does not have a permanent domain. It is a static export with no server behind it, so the hosting question is small: the build produces a directory of files that any host can serve. One configuration file knows where the site is deployed, and nothing in the content mentions the host, so moving to a permanent ME domain later means changing that file and pointing DNS, not rewriting pages.",
  },
  {
    date: "2026-08-20",
    title: "ME OS has a mouse cursor",
    area: "ME OS",
    body:
      "M4 is met. A polled PS/2 mouse moves a cursor that keeps its shape, puts back whatever it covered, and stays on screen. Input is split three ways so later milestones can change one part without the others: one module talks to the hardware, one holds the position, one draws. The emulator now moves the mouse during the automated check, and the captured framebuffer has to show the cursor moved by exactly that much with the message, key line and rectangle untouched. Nothing follows the cursor yet, and nothing can be dragged.",
  },
  {
    date: "2026-08-20",
    title: "A simulated holo pencil, to prove the pointer layer is not a mouse",
    area: "Holoprojector",
    body:
      "M4 is met. A second pointer source, entirely in software: a pencil tip somewhere in the display volume, walked around with the keyboard, whose ray starts behind the tip so what it touches is what gets picked. It hovers, selects, grabs, drags and releases through the same controller, commands and safety checks as the mouse, and a drag begun with one can be finished with the other. That was the point: to find out whether the interaction layer had quietly been built around a mouse. It had not. No physical pencil exists, and the source for one still refuses to run.",
  },
  {
    date: "2026-08-20",
    title: "ME OS draws a rectangle, and gains a test that cannot be fooled",
    area: "ME OS",
    body:
      "M3 is met: one static filled rectangle below the key line, with the boot message and keyboard line untouched. The automated check now asserts the rectangle is present, solid with no holes, the expected size for the screen, centred, and clear of the text, alongside both lines of text. A second, faster test builds the framebuffer code on an ordinary machine against a fake framebuffer with guard regions on both sides, then tries to draw off every edge: any write outside the visible area changes a sentinel byte and fails the run. Still software in an emulator, never booted on a physical machine.",
  },
  {
    date: "2026-08-20",
    title: "Pointing at objects in the Holoprojector simulator",
    area: "Holoprojector",
    body:
      "M3 is met. A pointer is a ray through the display volume plus a pressed flag, which means a mouse, a holo pencil, a bracer or a hand tracker could each produce one without the rest of the system knowing which. Hovering highlights, clicking selects and grabs, dragging moves an object, releasing lets go. Dragging goes through the same command path as everything else, so safety checks the destination and a drag that would push an object out of the calibrated volume is refused with the reason shown on screen. Only the mouse source exists; the other three are named stubs that refuse to poll. 135 tests, none needing a GPU.",
  },
  {
    date: "2026-08-20",
    title: "ME OS reads the keyboard",
    area: "ME OS",
    body:
      "M2 is met. A polled PS/2 keyboard driver reports the last key pressed on a line below the boot message, and the boot message itself is untouched. It is checked without a person watching: the test boots the image headlessly, injects a key press through the emulator, and inspects the framebuffer that comes back. Two clean builds of the kernel and the ISO are now byte identical, and the boot log goes to a real serial port as well as the emulator's debug port. Still software only, still in an emulator.",
  },
  {
    date: "2026-08-20",
    title: "Holoprojector simulator holds several objects at once",
    area: "Holoprojector",
    body:
      "M2 is met. The scene now contains a pyramid, a cube and a sphere, each with its own transform, visibility and rotation state. One object is selected at a time and untargeted commands act on it, so the same instruction works from a key press or from a typed phrase. The command set became data: one table names every command and its required parameters, the router validates against it, and the simulator's help panel is that same table. 106 tests, none of which need a GPU. There is still no display hardware.",
  },
  {
    date: "2026-08-20",
    title: "ME OS boots",
    area: "ME OS",
    body:
      "M1 is met. A freestanding x86-64 kernel, loaded by Limine over UEFI, draws IF YOU SEE THIS IT WORKED in white on black and halts without crashing or rebooting. It is verified headlessly: the build boots in QEMU with OVMF and the framebuffer is captured, so the milestone can be checked without a display. Next is keyboard input.",
  },
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
