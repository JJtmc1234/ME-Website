import type { ReactNode } from "react";

/** Shared layout and typography pieces. Kept small on purpose. */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="label">{children}</p>;
}

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <header className="border-b border-line py-14 sm:py-20">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-medium leading-[1.08] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {lead}
        </p>
      </Container>
    </header>
  );
}

export function Section({
  title,
  description,
  children,
  id,
}: {
  title?: string;
  description?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="py-14 sm:py-16">
      <Container>
        {title ? (
          <div className="max-w-2xl">
            <h2 className="text-2xl font-medium sm:text-3xl">{title}</h2>
            {description ? (
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}
        <div className={title ? "mt-8" : undefined}>{children}</div>
      </Container>
    </section>
  );
}

export function Panel({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return <Tag className={`panel p-5 sm:p-6 ${className}`}>{children}</Tag>;
}
