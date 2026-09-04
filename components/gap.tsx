/** The Factorio gap, drawn as two lists with a measured space between them.
 *
 *  Factorio does not run on ME OS. The point of this panel is that the
 *  distance is visible rather than argued for in a paragraph. */
const has = [
  "Framebuffer drawing and a compositor",
  "Keyboard and mouse",
  "A hardware timer and a real time clock",
  "A tiling desktop with four workspaces",
  "A shell, a text editor and pipes",
  "A filesystem on a disk that survives a restart",
];

// ME OS having a filesystem of its own is not the same as Factorio being able
// to reach one. Everything here is about the interface a Linux program expects
// to find, and the kernel still has no allocator, which is why memory
// management stays on this side.
const needs = [
  "Linux system calls, including the file ones",
  "ELF loading",
  "A memory allocator",
  "Processes and threads",
  "A graphics path",
  "Sound, networking and a great deal more",
];

export function FactorioGap() {
  return (
    <figure className="border border-line bg-surface p-5 sm:p-6">
      <figcaption className="text-sm font-medium">
        Factorio does not run on ME OS.
      </figcaption>
      <p className="mt-2 max-w-2xl text-xs leading-relaxed text-faint">
        Not today, not soon, possibly never. Kept here because it is easy to check.
        The left column grew a lot between M20 and M28. The right column did not
        get any shorter, which is the point of drawing both.
      </p>

      <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <GapList title="ME OS has today" items={has} />
        <svg
          viewBox="0 0 40 12"
          className="hidden h-3 w-10 shrink-0 self-center text-line-strong sm:block"
          aria-hidden
          focusable="false"
        >
          <line x1="0" y1="6" x2="34" y2="6" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
          <polygon points="40,6 32,10 32,2" fill="currentColor" />
        </svg>
        <GapList title="Factorio needs" items={needs} />
      </div>

      <p className="mt-5 border-t border-line pt-4 text-xs text-faint">
        Route: Linux compatibility, not a rewrite.
      </p>
    </figure>
  );
}

function GapList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="min-w-0">
      <p className="label">{title}</p>
      <ul className="mt-2 space-y-1">
        {items.map((item) => (
          <li key={item} className="text-sm text-muted">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
