/*
 * The Wameir weir-lattice mark — the signature graphic (§4A).
 * Two interlocking gold polylines (the W/M lattice). Used two ways, plus the
 * lattice background tile (public/lattice*.svg):
 *  - <WeirMark>       small logo lockup in nav/footer
 *  - <WeirWatermark>  oversized, low-opacity section watermark
 * Every chevron keeps the mark's angle: never stretch these non-uniformly.
 *
 * TODO(§8, blocking #7): replace with the clean vector weir logo once supplied.
 * This inline SVG is the interim brand graphic — fully in-repo, no CDN.
 */

export function WeirMark({
  size = 40,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={(size * 140) / 240}
      viewBox="0 0 240 140"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <polyline
        points="22,30 67,98 112,30 157,98 202,30"
        fill="none"
        stroke="#C9A85F"
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="22,114 67,46 112,114 157,46 202,114"
        fill="none"
        stroke="#A8854A"
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.82"
      />
    </svg>
  );
}

/**
 * Oversized watermark for dark bands (hero, contact, footer). Kept at ≤8% opacity
 * so large navy areas have depth, not a void (§4A "textured navy bands").
 */
export function WeirWatermark({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 240 140"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <polyline
        points="22,30 67,98 112,30 157,98 202,30"
        fill="none"
        stroke="#C9A85F"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="22,114 67,46 112,114 157,46 202,114"
        fill="none"
        stroke="#A8854A"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
