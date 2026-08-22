/** The Factorio gap, drawn as two lists with a measured space between them.
 *
 *  Factorio does not run on ME OS. The point of this panel is that the
 *  distance is visible rather than argued for in a paragraph. */
const has = [
  "Framebuffer drawing",
  "Keyboard and mouse",
  "A hardware timer",
  "Typed arithmetic",
  "One conditional",
  "Named values",
];

const needs = [
  "Linux system calls",
  "ELF loading",
  "A filesystem",
  "Memory management",
  "Processes and threads",
  "A graphics path",
];

export function FactorioGap() {
  return (
    <figure className="border border-line bg-surface p-5 sm:p-6">
      <figcaption className="text-sm font-medium">
        Factorio does not run on ME OS.
      </figcaption>
      <p className="mt-2 max-w-2xl text-xs leading-relaxed text-faint">
        Not today, not soon, possibly never. Kept here because it is easy to check.
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
