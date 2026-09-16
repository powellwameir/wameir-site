/**
 * The risk-pricing argument (/lower-insurance): a monitored home lowers real
 * risk, and because insurance is priced on risk, the premium should follow.
 */
export default function RiskPricingDiagram() {
  return (
    <svg
      className="dg"
      viewBox="0 0 460 260"
      fill="none"
      role="img"
      focusable="false"
      aria-label="A monitored home leads to lower measured risk, which leads to your premium, and it should follow it down."
    >
      <title>A monitored home leads to lower measured risk, which leads to your premium, and it should follow it down.</title>
      {/* a monitored home */}
      <g transform="translate(14,95)">
        <g className="dg-ink" strokeWidth={1.8}>
          <path d="M0 32 L22 12 L44 32 Z" />
          <rect x="7" y="32" width="30" height="26" />
        </g>
        <circle className="dg-face" cx="40" cy="20" r="8" strokeWidth={1.8} />
        <path className="dg-accent" d="M36 20 l3 3 5 -5" strokeWidth={1.8} />
        <text className="dg-label" x="22" y="74" textAnchor="middle">
          a monitored home
        </text>
      </g>

      <path className="dg-accent" d="M82 130 L128 130" strokeWidth={2} />
      <path className="dg-accent" d="M122 124 L128 130 L122 136" strokeWidth={2} />

      {/* the risk gauge, reading low */}
      <g transform="translate(140,95)">
        <path className="dg-mute" d="M0 52 A52 52 0 0 1 104 52" strokeWidth={8} strokeLinecap="round" />
        <path className="dg-ink" d="M0 52 A52 52 0 0 1 28 8" strokeWidth={8} strokeLinecap="round" />
        <line className="dg-accent" x1="52" y1="52" x2="20" y2="22" strokeWidth={2.5} />
        <circle className="dg-fill-ink" cx="52" cy="52" r="4" />
        <text className="dg-label" x="52" y="74" textAnchor="middle">
          lower measured risk
        </text>
      </g>

      <path className="dg-accent" d="M258 130 L304 130" strokeWidth={2} />
      <path className="dg-accent" d="M298 124 L304 130 L298 136" strokeWidth={2} />

      {/* the premium, falling */}
      <g transform="translate(316,86)">
        <rect className="dg-paper" x="0" y="0" width="130" height="88" rx="8" strokeWidth={2} />
        <text className="dg-title" x="65" y="26" textAnchor="middle" fontSize="13">
          Your premium
        </text>
        <line className="dg-rule" x1="18" y1="38" x2="112" y2="38" strokeWidth={1} />
        <rect className="dg-fill-mute" x="26" y="50" width="16" height="30" />
        <rect className="dg-fill-light" x="52" y="58" width="16" height="22" />
        <rect className="dg-fill-accent" x="78" y="66" width="16" height="14" />
        <path className="dg-ink" d="M108 52 l0 22 m-5 -6 l5 6 l5 -6" strokeWidth={2} />
        <text className="dg-label" x="65" y="102" textAnchor="middle">
          should follow it down
        </text>
      </g>
    </svg>
  );
}
