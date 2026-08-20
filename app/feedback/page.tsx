import type { Metadata } from "next";
import { Container, PageHeader, Section } from "@/components/primitives";
import { communityFeedbackDoc } from "@/data/site";

export const metadata: Metadata = {
  title: "Community feedback",
  description:
    "ME welcomes outside criticism, questions, risks, and ideas. Feedback is collected in an open document.",
};

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

      <Container>
        <aside className="panel-quiet mb-8 p-6">
          <h2 className="text-base font-medium">What happens to feedback</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            Entries are read. Some change a design, some change a roadmap decision, and some
            get an answer explaining why ME disagrees. There is no promise of a reply to
            every entry, and no feedback is deleted to make the company look better.
          </p>
        </aside>
      </Container>
    </>
  );
}
