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
  | "local-teams"
  // vision sections & deep-dive pages (§5.1)
  | "clock"
  | "chat-lines"
  | "mail-x"
  | "doc-alert"
  | "doc-check"
  | "doc-search"
  | "doc-file"
  | "alert-triangle"
  | "list-status"
  | "droplet-check"
  | "droplet-watch"
  | "shield-check"
  | "chart-up"
  | "card-down"
  | "home-record"
  | "thermometer"
  | "bolt"
  | "foundation"
  | "dispatch";

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
  /* Vision sections & deep-dive pages. The specs' gold check-marks inherit
     currentColor here instead of carrying a hard-coded hex. */
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  "chat-lines": (
    <>
      <path d="M4 5h16v11H8l-4 4z" />
      <path d="M9 10h6M9 13h4" />
    </>
  ),
  "mail-x": (
    <>
      <path d="M4 6h16v12H4z" />
      <path d="M4 7l8 6 8-6" />
      <path d="M15 17l4 4M19 17l-4 4" />
    </>
  ),
  "doc-alert": (
    <>
      <path d="M4 5h16v14H4z" />
      <path d="M8 10h8M8 14h5" />
      <path d="M17 3v4M15 5h4" />
    </>
  ),
  "doc-check": (
    <>
      <path d="M4 5h16v14H4z" />
      <path d="M8 10h8M8 14h8" />
      <path d="M15.5 17.5l2 2 3.5-3.5" />
    </>
  ),
  "doc-search": (
    <>
      <path d="M4 5h16v14H4z" />
      <path d="M8 10h8M8 14h5" />
      <circle cx="17" cy="15" r="3" />
      <path d="M19 17l2 2" />
    </>
  ),
  "doc-file": (
    <>
      <path d="M6 3h9l3 3v15H6z" />
      <path d="M9 12h6M9 16h6" />
    </>
  ),
  "alert-triangle": (
    <>
      <path d="M12 3l9 16H3z" />
      <path d="M12 9v5M12 17h.01" />
    </>
  ),
  "list-status": (
    <>
      <path d="M4 6h16M4 12h16M4 18h10" />
      <circle cx="19" cy="18" r="2" />
    </>
  ),
  "droplet-check": (
    <>
      <path d="M12 3s6 5 6 10a6 6 0 0 1-12 0c0-5 6-10 6-10z" />
      <path d="M9.5 13.5l1.8 1.8 3.2-3.3" />
    </>
  ),
  "droplet-watch": (
    <>
      <path d="M12 4s7 4 7 9a7 7 0 0 1-14 0c0-5 7-9 7-9z" />
      <circle cx="12" cy="13" r="2.5" />
    </>
  ),
  "shield-check": (
    <>
      <path d="M12 3s7 4 7 9a7 7 0 0 1-14 0c0-5 7-9 7-9z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  "chart-up": <path d="M4 19V5M4 19h16M8 15l4-5 3 3 4-6" />,
  "card-down": (
    <>
      <rect x="4" y="6" width="16" height="13" rx="2" />
      <path d="M4 10h16M9 15l3 3 3-3" />
    </>
  ),
  "home-record": (
    <>
      <path d="M4 9l8-5 8 5v10H4z" />
      <path d="M9 19v-6h6v6" />
    </>
  ),
  thermometer: (
    <>
      <path d="M12 4v8M12 12a4 4 0 1 0 4 4" />
      <circle cx="12" cy="16" r="4" />
    </>
  ),
  bolt: <path d="M13 3l-7 10h5l-1 8 7-11h-5z" />,
  foundation: <path d="M4 18h16M6 18V9M10 18V9M14 18V9M18 18V9M4 9l8-5 8 5" />,
  dispatch: (
    <>
      <path d="M12 3v6M12 3l3 3M12 3l-3 3" />
      <rect x="4" y="12" width="16" height="8" rx="2" />
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
