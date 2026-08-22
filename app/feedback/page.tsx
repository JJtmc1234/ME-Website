import type { Metadata } from "next";

import { pageMeta } from "@/lib/metadata";
import { Container, PageHeader, Section } from "@/components/primitives";
import { communityFeedbackDoc } from "@/data/site";
import { categories, process, processed, promise } from "@/data/feedback";

export const metadata: Metadata = pageMeta({
  title: "Community feedback",
  description:
    "ME welcomes outside criticism, questions, risks, and ideas. Feedback is collected in an open document.",
  path: "/feedback",
});

const areas = [
  "Company strategy",
  "ME OS",
  "Carl and agentic systems",
  "Holoprojectors",
  "Bracers",
  "Research tools",
  "Hardware",
  "Accessibility",
  "Manufacturing",
  "Robotics",
  "Energy",
  "Space",
];

export default function FeedbackPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community feedback"
        title="Tell ME what is wrong with this."
        lead="Useful criticism, strange ideas, risks, questions, and things you think are genuinely exciting are all welcome. Candid is better than polite."
      />

      <Section>
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="panel p-6 sm:p-8">
            <h2 className="text-lg font-medium">Open feedback document</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              Feedback is collected in a shared document rather than a form, so entries stay
              readable, keep their context, and are not silently dropped into an inbox. Add
              a new entry at the bottom. There is a template if you want one, and free form
              writing is fine. Please do not delete or rewrite anyone else&apos;s feedback.
            </p>
            <a
              href={communityFeedbackDoc}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-accent/50 bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/15"
            >
              Open the feedback document
              <span aria-hidden>↗</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <p className="mt-4 font-mono text-xs text-faint">
              Hosted on Google Docs. Access may require a Google account.
            </p>
          </div>

          <div className="panel p-6 sm:p-8">
            <h2 className="text-lg font-medium">What to include</h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
              {[
                "Your name, if you want it attached",
                "Which area you are commenting on",
                "What you like",
                "What concerns you",
                "A suggestion",
                "Why it matters",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-line-strong" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Areas you can comment on">
        <ul className="flex flex-wrap gap-2">
          {areas.map((area) => (
            <li
              key={area}
              className="border border-line px-3 py-1.5 font-mono text-xs text-muted"
            >
              {area}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="How an entry is handled"
        description="Every entry goes into one of five kinds, and each kind is treated differently."
      >
        <ul className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <li key={category.name} className="bg-surface p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                {category.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{category.body}</p>
            </li>
          ))}
        </ul>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, index) => (
            <li key={step} className="border border-line p-4">
              <span className="font-mono text-xs text-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        title="Feedback that changed something"
        description="What was raised, which part of ME it touches, and what happened next."
      >
        <ul className="divide-y divide-line border-y border-line">
          {processed.map((entry) => (
            <li key={entry.summary} className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  {entry.category}
                </span>
                <p className="mt-1 font-mono text-xs text-faint">{entry.area}</p>
              </div>
              <div>
                <p className="text-sm font-medium leading-relaxed">{entry.summary}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  <span className="text-text">{entry.effect}</span> {entry.why}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Container>
        <aside className="panel-quiet mb-8 p-6">
          <h2 className="text-base font-medium">What happens to feedback</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            {promise} There is no promise of a reply to every entry.
          </p>
        </aside>
      </Container>
    </>
  );
}
