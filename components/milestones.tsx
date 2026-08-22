import { StatusBadge, TierBadge } from "@/components/status";
import { milestones, type Milestone } from "@/data/roadmap";

/** Milestones grouped under their project, so the project name is written once
 *  instead of once per row. */
export function MilestoneLadders() {
  const groups: { project: string; rows: Milestone[] }[] = [];
  for (const milestone of milestones) {
    const last = groups[groups.length - 1];
    if (last && last.project === milestone.project) last.rows.push(milestone);
    else groups.push({ project: milestone.project, rows: [milestone] });
  }

  return (
    <div className="space-y-8">
      {groups.map((group) => (
        <section key={group.project}>
          <h3 className="label border-b border-line pb-2">{group.project}</h3>
          <ul className="divide-y divide-line">
            {group.rows.map((milestone) => (
              <li
                key={milestone.id}
                className="grid gap-1.5 py-3 sm:grid-cols-[10rem_1fr] sm:gap-6"
              >
                <div className="flex items-start">
                  {milestone.tier ? (
                    <TierBadge tier={milestone.tier} />
                  ) : (
                    <StatusBadge status={milestone.state} kind="milestone" />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium">{milestone.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {milestone.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
