import Link from "next/link";

import { TierBadge } from "@/components/status";
import { projectStatus } from "@/data/execution";

/** Every project on one grid: name, tier, state, how to check it.
 *
 *  It replaced two paragraphs per project. The tier chip carries a shape as
 *  well as a colour, and the state column is words, so nothing here depends on
 *  colour to be read. */
export function ProjectMatrix() {
  return (
    <div className="overflow-x-auto">
      <ul className="min-w-0 divide-y divide-line border-y border-line">
        {projectStatus.map((project) => (
          <li
            key={project.name}
            className="grid gap-2 py-4 lg:grid-cols-[11rem_9rem_1fr_1fr] lg:items-baseline lg:gap-6"
          >
            <h3 className="text-sm font-medium">
              {project.slug ? (
                <Link
                  href={`/products/${project.slug}`}
                  className="transition-colors hover:text-accent"
                >
                  {project.name}
                </Link>
              ) : (
                project.name
              )}
            </h3>
            <div>
              <TierBadge tier={project.tier} />
            </div>
            <p className="text-sm leading-relaxed text-muted">{project.state}</p>
            <p className="text-sm leading-relaxed text-faint">
              <span className="label">Check</span> {project.evidence}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
