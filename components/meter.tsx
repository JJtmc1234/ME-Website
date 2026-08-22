import { milestones } from "@/data/roadmap";

/** Milestone ladders that have numbered steps. Only these get a meter, because
 *  a meter beside a project nobody is building would imply progress that does
 *  not exist. */
const ladders = ["ME OS", "Holoprojector"] as const;

function ladderFor(project: string) {
  const steps = milestones.filter(
    (m) => m.project === project && /^M\d+\b/.test(m.title),
  );
  return {
    total: steps.length,
    done: steps.filter((m) => m.state === "Complete").length,
  };
}

/** A segmented bar. Filled segments are verified milestones. The count is
 *  written out beside it, so the bar never carries the meaning alone. */
export function MilestoneMeter({
  project,
  note,
}: {
  project: string;
  note: string;
}) {
  const { done, total } = ladderFor(project);
  // A project with no numbered ladder gets no bar. A meter next to nothing
  // would imply progress that does not exist.
  if (total === 0) return null;
  const segments = Array.from({ length: total }, (_, i) => i);

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <span className="text-sm font-medium">{project}</span>
        <span className="font-mono text-xs text-muted">
          {done} of {total} verified
        </span>
      </div>
      <svg
        viewBox={`0 0 ${total * 10 - 2} 6`}
        preserveAspectRatio="none"
        className="mt-2 h-1.5 w-full"
        role="img"
        aria-label={`${project}: ${done} of ${total} milestones verified. ${note}`}
      >
        {segments.map((i) => (
          <rect
            key={i}
            x={i * 10}
            y="0"
            width="8"
            height="6"
            className={i < done ? "fill-accent" : "fill-line-strong"}
          />
        ))}
      </svg>
      <p className="mt-2 text-xs leading-relaxed text-faint">{note}</p>
    </div>
  );
}

/** Both ladders side by side. */
export function MilestoneMeters({ notes }: { notes: Record<string, string> }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {ladders.map((project) => (
        <MilestoneMeter key={project} project={project} note={notes[project]} />
      ))}
    </div>
  );
}
