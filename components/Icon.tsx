/*
 * Custom line-icon set (§4A / §8, blocking #7).
 * One consistent family: gold single-stroke, ~1.5px, rounded joins, 28px default.
 * Inline SVG only — no emoji, no icon font, no third-party CDN.
 * Colour is inherited via `currentColor`; wrappers set color to var(--gold).
 *
 * TODO(§8): swap for the final custom-drawn icon set once supplied. These interim
 * icons keep the family (weight/joins/size) consistent so the layout is stable.
 */

export type IconName =
  // resident / board benefits
  | "responsive"
  | "billing"
  | "clarity"
  | "taxes"
  | "maintenance"
  | "insurance"
  | "board-tools"
  | "technology"
  // seller promises ("why founders choose Wameir")
  | "long-term"
  | "legacy"
  | "local-teams";

const PATHS: Record<IconName, React.ReactNode> = {
  responsive: <path d="M4 5h16v10H8l-4 4V5z" />,
  billing: (
    <>
      <path d="M6 3h12v18l-2-1.5L14 21l-2-1.5L10 21l-2-1.5L6 21V3z" />
      <path d="M9 8h6M9 12h6" />
    </>
  ),
  clarity: (
    <>
      <path d="M5 20V11M10.5 20V5M16 20v-6" />
      <path d="M3 20h18" />
    </>
  ),
  taxes: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8.5 12.5 12 16l3.5-3.5" />
    </>
  ),
  maintenance: <path d="M12 3s6 6.5 6 10a6 6 0 0 1-12 0c0-3.5 6-10 6-10z" />,
  insurance: <path d="M12 3l7 3v6c0 4-3 6.5-7 8-4-1.5-7-4-7-8V6l7-3z" />,
  "board-tools": (
    <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
  ),
  technology: (
    <>
      <path d="M7 7h10v10H7z" />
      <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" />
    </>
  ),
  "long-term": (
    <>
      <path d="M4 12a8 8 0 0 1 13.7-5.6M20 12a8 8 0 0 1-13.7 5.6" />
      <path d="M17 3v3.5h-3.5M7 21v-3.5h3.5" />
    </>
  ),
  legacy: <path d="M3 21h18M4 21V9l8-5 8 5v12M9 21v-6h6v6" />,
  "local-teams": (
    <>
      <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
};

export default function Icon({
  name,
  size = 28,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
