/** Why one organisation holds so many branches, drawn instead of argued.
 *
 *  Each layer is built once and borrowed by everything above it. Nothing here
 *  is a claim that the upper layers exist. */
const layers = [
  { role: "Products", members: "Holoprojector · Bracers · Lab Suit · Driver" },
  { role: "Agent layer", members: "Carl" },
  { role: "Shared tools", members: "Research tools · Manufacturing" },
  { role: "Computing base", members: "ME OS" },
];

export function SharedStack() {
  return (
    <figure className="border border-line bg-surface p-5 sm:p-6">
      <figcaption className="label">Built once, borrowed upwards</figcaption>
      <div className="mt-4 flex gap-3">
        <svg
          viewBox="0 0 8 100"
          preserveAspectRatio="none"
          className="w-2 shrink-0 self-stretch text-accent"
          aria-hidden
          focusable="false"
        >
          <line x1="4" y1="98" x2="4" y2="6" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <polygon points="4,0 8,8 0,8" fill="currentColor" />
        </svg>
        <ol className="min-w-0 flex-1 space-y-px">
          {layers.map((layer) => (
            <li
              key={layer.role}
              className="grid gap-1 border border-line bg-surface-2 px-4 py-3 sm:grid-cols-[9rem_1fr] sm:items-baseline sm:gap-4"
            >
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-accent">
                {layer.role}
              </span>
              <span className="text-sm text-muted">{layer.members}</span>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
