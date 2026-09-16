/**
 * The site's one arrow: buttons, text links and link cards all use this glyph,
 * at one size, so "this goes somewhere" looks the same everywhere. Decorative;
 * the link text carries the meaning. `direction="up"` for "back to top" links.
 */
export default function Arrow({ direction = "right" }: { direction?: "right" | "up" }) {
  return (
    <svg
      className={`arrow${direction === "up" ? " arrow--up" : ""}`}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={direction === "up" ? "M12 19V5M6 11l6-6 6 6" : "M5 12h14M13 6l6 6-6 6"} />
    </svg>
  );
}
