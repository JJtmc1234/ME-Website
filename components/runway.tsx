import { runway } from "@/data/strategy";

/** The 2035 line, drawn as an axis rather than described in paragraphs.
 *
 *  The axis is decoration. Every marker is real text beside it, so the panel
 *  reads the same with images off, in greyscale, or at 320px wide. */
export function RunwayPanel() {
  return (
    <figure className="panel p-6 sm:p-8">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className="label">{runway.eyebrow}</span>
        <span className="text-sm font-medium sm:text-base">{runway.headline}</span>
      </figcaption>

      <svg
        viewBox="0 0 300 16"
        preserveAspectRatio="none"
        className="mt-5 h-4 w-full text-line-strong"
        aria-hidden
        focusable="false"
      >
        <line
          x1="4"
          y1="8"
          x2="296"
          y2="8"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        {[4, 150, 296].map((x, index) => (
          <line
            key={x}
            x1={x}
            y1="2"
            x2={x}
            y2="14"
            stroke="currentColor"
            strokeWidth={index === 2 ? 3 : 1}
            vectorEffect="non-scaling-stroke"
            className={index === 2 ? "text-accent" : undefined}
          />
        ))}
      </svg>

      <ol className="mt-4 grid gap-4 sm:grid-cols-3">
        {runway.markers.map((marker) => (
          <li key={marker.when} className="border-t border-line pt-3">
            <p className="font-mono text-xs text-accent">{marker.when}</p>
            <p className="mt-1 text-sm font-medium">{marker.what}</p>
            <p className="mt-1 text-xs leading-relaxed text-faint">{marker.note}</p>
          </li>
        ))}
      </ol>

      <ul className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
        {runway.limits.map((limit) => (
          <li key={limit} className="border border-line px-2.5 py-1 font-mono text-[0.6875rem] text-faint">
            {limit}
          </li>
        ))}
      </ul>
    </figure>
  );
}
