/**
 * The risk-pricing argument, compact (money-back 3-up): monitored home →
 * lower risk → the premium should follow. Miniature of /lower-insurance.
 */
export default function MiniRiskChainDiagram() {
  return (
    <svg
      className="dg"
      viewBox="0 0 300 150"
      fill="none"
      role="img"
      focusable="false"
      aria-label="A monitored home means lower risk, and because insurance is priced on risk, the premium should follow."
    >
      <g className="dg-ink" transform="translate(20,52)" strokeWidth={1.6}>
        <path d="M0 22 L16 8 L32 22 Z" />
        <rect x="6" y="22" width="20" height="18" />
      </g>
      <circle className="dg-accent" cx="52" cy="60" r="7" strokeWidth={1.6} />
      <path className="dg-accent" d="M49 60 l2 2 4-4" strokeWidth={1.6} />
      <text className="dg-cap" x="30" y="104" textAnchor="middle" fontSize="8">
        monitored home
      </text>

      <path className="dg-accent" d="M84 66 L110 66" strokeWidth={1.6} />
      <path className="dg-accent" d="M104 61 L110 66 L104 71" strokeWidth={1.6} />

      <path className="dg-mute" d="M118 78 a30 30 0 0 1 60 0" strokeWidth={6} />
      <path className="dg-ink" d="M118 78 a30 30 0 0 1 20 -28" strokeWidth={6} />
      <text className="dg-cap" x="148" y="96" textAnchor="middle" fontSize="8">
        lower risk
      </text>

      <path className="dg-accent" d="M186 66 L212 66" strokeWidth={1.6} />
      <path className="dg-accent" d="M206 61 L212 66 L206 71" strokeWidth={1.6} />

      <rect className="dg-face" x="222" y="46" width="56" height="40" rx="5" strokeWidth={1.8} />
      <text className="dg-title" x="250" y="62" textAnchor="middle" fontSize="9">
        premium
      </text>
      <path className="dg-accent" d="M240 72 l6 8 6 -8" strokeWidth={1.8} />
      <text className="dg-cap" x="250" y="104" textAnchor="middle" fontSize="8">
        should follow
      </text>
    </svg>
  );
}
