import type { Status } from "@/data/products";
import type { MilestoneState } from "@/data/roadmap";

const productTone: Record<Status, string> = {
  "Early development": "text-status-early border-status-early/35 bg-status-early/8",
  Prototype: "text-status-prototype border-status-prototype/35 bg-status-prototype/8",
  Research: "text-status-research border-status-research/35 bg-status-research/8",
  Concept: "text-status-concept border-status-concept/35 bg-status-concept/8",
};

const milestoneTone: Record<MilestoneState, string> = {
  Complete: "text-status-early border-status-early/35 bg-status-early/8",
  "In progress": "text-status-active border-status-active/35 bg-status-active/8",
  Next: "text-status-prototype border-status-prototype/35 bg-status-prototype/8",
  Planned: "text-status-concept border-status-concept/35 bg-status-concept/8",
};

export function StatusBadge({
  status,
  kind = "product",
}: {
  status: Status | MilestoneState;
  kind?: "product" | "milestone";
}) {
  const tone =
    kind === "milestone"
      ? milestoneTone[status as MilestoneState]
      : productTone[status as Status];

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 border px-2 py-0.5 font-mono text-[0.6875rem] tracking-wide ${tone}`}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

export function StatusDot({
  tone,
  label,
}: {
  tone: "ok" | "idle" | "warn";
  label?: string;
}) {
  const color =
    tone === "ok" ? "bg-status-early" : tone === "warn" ? "bg-status-prototype" : "bg-faint";
  return (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden
        className={`h-2 w-2 rounded-full ${color} ${tone === "ok" ? "live-dot" : ""}`}
      />
      {label ? <span className="sr-only">{label}</span> : null}
    </span>
  );
}
