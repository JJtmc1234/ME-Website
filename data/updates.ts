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
