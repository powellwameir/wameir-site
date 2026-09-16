/**
 * The scale argument, compact (money-back 3-up). A miniature of the funnel on
 * /lower-taxes: one home stops at the effort barrier, a community doesn't.
 */
export default function MiniScaleDiagram() {
  return (
    <svg
      className="dg"
      viewBox="0 0 300 150"
      fill="none"
      role="img"
      focusable="false"
      aria-label="One home rarely bothers, stopped by the effort and know-how barrier; many homes together become one appeal, run for all."
    >
      <g className="dg-faint" strokeWidth={1.6}>
        <path d="M20 70 L34 58 L48 70 Z" />
        <rect x="25" y="70" width="18" height="16" />
      </g>
      <text className="dg-label" x="34" y="100" textAnchor="middle" fontSize="8">
        one home
      </text>
      <text className="dg-label" x="34" y="112" textAnchor="middle" fontSize="8">
        rarely bothers
      </text>

      <line className="dg-mute" x1="72" y1="40" x2="72" y2="110" strokeWidth={2} strokeDasharray="4 4" />
      <text className="dg-label" x="72" y="128" textAnchor="middle" fontSize="7.5">
        effort &amp; know-how
      </text>

      <g className="dg-ink" strokeWidth={1.6}>
        <g transform="translate(100,54)">
          <path d="M0 16 L11 6 L22 16 Z" />
          <rect x="4" y="16" width="14" height="13" />
        </g>
        <g transform="translate(128,54)">
          <path d="M0 16 L11 6 L22 16 Z" />
          <rect x="4" y="16" width="14" height="13" />
        </g>
        <g transform="translate(156,54)">
          <path d="M0 16 L11 6 L22 16 Z" />
          <rect x="4" y="16" width="14" height="13" />
        </g>
        <g transform="translate(100,90)">
          <path d="M0 16 L11 6 L22 16 Z" />
          <rect x="4" y="16" width="14" height="13" />
        </g>
        <g transform="translate(128,90)">
          <path d="M0 16 L11 6 L22 16 Z" />
          <rect x="4" y="16" width="14" height="13" />
        </g>
        <g transform="translate(156,90)">
          <path d="M0 16 L11 6 L22 16 Z" />
          <rect x="4" y="16" width="14" height="13" />
        </g>
      </g>

      <path className="dg-accent" d="M188 75 L214 75" strokeWidth={1.8} />
      <path className="dg-accent" d="M208 70 L214 75 L208 80" strokeWidth={1.8} />

      <rect className="dg-face" x="218" y="58" width="66" height="34" rx="5" strokeWidth={1.8} />
      <text className="dg-title" x="251" y="72" textAnchor="middle" fontSize="9">
        one appeal,
      </text>
      <text className="dg-title" x="251" y="84" textAnchor="middle" fontSize="9">
        run for all
      </text>
    </svg>
  );
}
