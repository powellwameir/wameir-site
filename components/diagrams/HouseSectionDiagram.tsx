/**
 * The monitored home (/home-monitoring): a cross-section with the points worth
 * watching. The labels sit below the drawn ground line, so the SVG overflows
 * its box on purpose (.dg sets overflow: visible).
 */
export default function HouseSectionDiagram() {
  return (
    <svg
      className="dg"
      viewBox="0 0 400 340"
      fill="none"
      role="img"
      focusable="false"
      aria-label="A home with monitored points: water under the sink and near the heater, temperature and humidity inside, electrical at the panel, and soil at the foundation."
    >
      <rect className="dg-fill-rule" x="20" y="286" width="360" height="10" rx="3" />

      <path className="dg-ink" d="M60 150 L200 60 L340 150" strokeWidth={2.5} />
      <rect className="dg-body" x="80" y="150" width="240" height="136" strokeWidth={2.5} />
      <line className="dg-rule" x1="200" y1="150" x2="200" y2="286" strokeWidth={1.5} />
      <line className="dg-rule" x1="80" y1="220" x2="320" y2="220" strokeWidth={1.5} />

      {/* water, under the sink */}
      <g transform="translate(130,250)">
        <circle className="dg-accent-l" r="12" strokeWidth={1} opacity={0.5} />
        <circle className="dg-fill-accent" r="6" />
        <path className="dg-check-light" d="M-2 0 l2 2 4 -4" strokeWidth={1.4} />
      </g>
      <text className="dg-cap" x="130" y="278" textAnchor="middle">
        water
      </text>

      {/* temperature and humidity, living area */}
      <g transform="translate(260,185)">
        <circle className="dg-accent-l" r="12" strokeWidth={1} opacity={0.5} />
        <circle className="dg-fill-accent" r="6" />
      </g>
      <text className="dg-cap" x="260" y="210" textAnchor="middle">
        temp · humidity
      </text>

      {/* electrical panel */}
      <g transform="translate(140,190)">
        <circle className="dg-accent-l" r="12" strokeWidth={1} opacity={0.5} />
        <circle className="dg-fill-accent" r="6" />
      </g>
      <text className="dg-cap" x="140" y="172" textAnchor="middle">
        electrical
      </text>

      {/* water heater */}
      <g transform="translate(270,250)">
        <circle className="dg-accent-l" r="12" strokeWidth={1} opacity={0.5} />
        <circle className="dg-fill-accent" r="6" />
      </g>
      <text className="dg-cap" x="270" y="278" textAnchor="middle">
        heater
      </text>

      {/* foundation soil */}
      <g transform="translate(200,296)">
        <circle className="dg-accent-l" r="10" strokeWidth={1} opacity={0.5} />
        <circle className="dg-fill-accent" r="5" />
      </g>
      <text className="dg-cap" x="200" y="318" textAnchor="middle">
        foundation soil
      </text>
    </svg>
  );
}
