import { loop, tools } from "@/data/research-tools";

/** The research tool family and the loop it serves. Concept stage: none of it
 *  exists, in software or hardware. */
export function ResearchToolFamily() {
  return (
    <>
      <div className="panel p-5 sm:p-6">
        <h2 className="text-base font-medium">The tool family</h2>
        <p className="mt-1 text-sm text-faint">Concept stage. None of these exist.</p>
        <ul className="mt-4 divide-y divide-line border-t border-line">
          {tools.map((tool) => (
            <li
              key={tool.name}
              className="grid gap-1 py-3 sm:grid-cols-[11rem_8rem_1fr] sm:items-baseline sm:gap-4"
            >
              <h3 className="text-sm font-medium">{tool.name}</h3>
              <span className="font-mono text-[0.6875rem] text-faint">{tool.kind}</span>
              <span className="text-sm leading-relaxed text-muted">{tool.role}</span>
            </li>
          ))}
        </ul>
      </div>

      <figure className="panel p-5 sm:p-6">
        <figcaption className="text-base font-medium">The loop they serve</figcaption>
        <ol className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2">
          {loop.map((stage, index) => (
            <li key={stage} className="flex items-center gap-2">
              <span className="border border-line bg-surface-2 px-2.5 py-1 text-sm text-muted">
                {stage}
              </span>
              {index < loop.length - 1 ? (
                <svg
                  viewBox="0 0 16 8"
                  className="h-2 w-4 shrink-0 text-line-strong"
                  aria-hidden
                  focusable="false"
                >
                  <line x1="0" y1="4" x2="11" y2="4" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                  <polygon points="16,4 10,7 10,1" fill="currentColor" />
                </svg>
              ) : null}
            </li>
          ))}
        </ol>
        <p className="mt-3 text-xs text-faint">The notebook decides the next question.</p>
      </figure>
    </>
  );
}
