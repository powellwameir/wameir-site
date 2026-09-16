/**
 * The cost-asymmetry argument, compact (money-back 3-up): a small early cost
 * against the very large one that arrives if the same problem is found late.
 */
export default function MiniCostAsymmetryDiagram() {
  return (
    <svg
      className="dg"
      viewBox="0 0 300 150"
      fill="none"
      role="img"
      focusable="false"
      aria-label="Caught early is a small part and a fix; the same problem found too late is a flood, a claim and disruption — a far larger cost."
    >
      <rect className="dg-fill-ink" x="40" y="100" width="60" height="26" rx="3" />
      <text className="dg-title-light" x="70" y="117" textAnchor="middle" fontSize="10">
        caught early
      </text>
      <text className="dg-cap" x="70" y="140" textAnchor="middle" fontSize="8">
        a small part &amp; a fix
      </text>
      <circle className="dg-fill-accent" cx="70" cy="88" r="4" />

      <rect
        className="dg-accent"
        x="180"
        y="20"
        width="80"
        height="106"
        rx="3"
        strokeWidth={1.8}
        strokeDasharray="5 4"
      />
      <rect className="dg-fill-mute" x="180" y="86" width="80" height="40" rx="3" />
      <text className="dg-title" x="220" y="110" textAnchor="middle" fontSize="10">
        found too late
      </text>
      <text className="dg-cap" x="220" y="140" textAnchor="middle" fontSize="8">
        flood, claim, disruption
      </text>

      <text className="dg-vs" x="140" y="118" textAnchor="middle" fontSize="12">
        vs
      </text>
    </svg>
  );
}
