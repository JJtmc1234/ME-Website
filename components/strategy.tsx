import { Section } from "@/components/primitives";
import { beforeLaunch, flagship, notClaimed } from "@/data/strategy";

/** Where ME is going, and what it is careful not to claim on the way. */
export function StrategySection() {
  return (
    <Section title="Before any launch">
      <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {beforeLaunch.map((item) => (
          <div key={item.title} className="bg-surface p-5">
            <h3 className="text-sm font-medium">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <div className="panel p-5 sm:p-6">
          <p className="label">Current hypothesis</p>
          <h3 className="mt-2 text-base font-medium">{flagship.hypothesis}</h3>
          <p className="mt-2 font-mono text-xs text-faint">{flagship.question}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{flagship.body}</p>
          <ul className="mt-4 flex flex-wrap gap-2 border-t border-line pt-4">
            {flagship.why.map((reason) => (
              <li key={reason} className="border border-line px-2.5 py-1 text-xs text-muted">
                {reason}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-faint">{flagship.caveat}</p>
        </div>

        <div className="panel-quiet p-5 sm:p-6">
          <h3 className="text-sm font-medium">What this is not</h3>
          <ul className="mt-3 space-y-1.5">
            {notClaimed.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-line-strong" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
