import { Section } from "@/components/primitives";
import { beforeLaunch, flagship, horizon, notClaimed } from "@/data/strategy";

/** Where ME is going, and the things it is careful not to claim on the way. */
export function StrategySection() {
  return (
    <Section title={horizon.title} description="Where all of this is meant to go, said plainly enough to be held to.">
      <div className="panel p-6 sm:p-8">
        <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
          {horizon.body}
        </p>
        <div className="mt-6 grid gap-5 border-t border-line pt-6 sm:grid-cols-2">
          {beforeLaunch.map((item) => (
            <div key={item.title}>
              <h3 className="text-base font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <div className="panel p-6 sm:p-8">
          <p className="label">Current hypothesis</p>
          <h3 className="mt-2 text-lg font-medium">{flagship.hypothesis}</h3>
          <p className="mt-3 font-mono text-xs text-faint">{flagship.question}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{flagship.body}</p>
          <ul className="mt-5 space-y-2 border-t border-line pt-5">
            {flagship.why.map((reason) => (
              <li key={reason} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent/40" />
                {reason}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-faint">{flagship.caveat}</p>
        </div>

        <div className="panel-quiet p-6 sm:p-8">
          <h3 className="text-base font-medium">What this is not</h3>
          <ul className="mt-4 space-y-2">
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
