import { type Tier, tierOrder, tierRule, tierShort, tierTone } from "@/data/tiers";

/** A drawn mark per tier. The shape carries the meaning, so the label survives
 *  greyscale, a colour blind reader and a printout. Solid means work is
 *  happening. Everything hollow means nothing exists. */
export function TierGlyph({ tier }: { tier: Tier }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className="h-2.5 w-2.5 shrink-0"
      fill="none"
      stroke="currentColor"
      aria-hidden
      focusable="false"
    >
      {tier === "BUILDING NOW" ? (
        <rect x="1.5" y="1.5" width="9" height="9" fill="currentColor" stroke="none" />
      ) : null}
      {tier === "PLANNED" ? (
        <>
          <rect x="1.5" y="1.5" width="9" height="9" strokeWidth="1.5" />
          <rect x="4.5" y="4.5" width="3" height="3" fill="currentColor" stroke="none" />
        </>
      ) : null}
      {tier === "LONG-TERM" ? (
        <rect x="1.5" y="1.5" width="9" height="9" strokeWidth="1.5" />
      ) : null}
      {tier === "VERY LONG-TERM" ? (
        <rect x="1.5" y="1.5" width="9" height="9" strokeWidth="1.5" strokeDasharray="2 2" />
      ) : null}
    </svg>
  );
}

/** The key to every tier label on the site: four chips in a row. */
export function TierLegend({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      <ul className="flex flex-wrap gap-2">
        {tierOrder.map((tier) => (
          <li
            key={tier}
            className={`flex min-w-0 items-center gap-2 border px-3 py-1.5 ${tierTone[tier]}`}
          >
            <TierGlyph tier={tier} />
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em]">
              {tier}
            </span>
            <span className="text-xs text-muted">{tierShort[tier]}</span>
          </li>
        ))}
      </ul>
      {compact ? null : <p className="mt-3 max-w-2xl text-xs text-faint">{tierRule}</p>}
    </div>
  );
}
