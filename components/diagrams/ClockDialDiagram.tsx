/**
 * The 24-hour dial ("Always on"): routine questions answered around the clock.
 * Sits on a navy band, so its labels take the on-navy .dg-* colours.
 */
export default function ClockDialDiagram() {
  return (
    <svg
      className="dg"
      viewBox="0 0 260 260"
      fill="none"
      role="img"
      focusable="false"
      aria-label="A 24-hour dial, noon at the top and midnight at the bottom, showing questions answered around the clock."
    >
      <title>A 24-hour dial, noon at the top and midnight at the bottom, showing questions answered around the clock.</title>
      <circle className="dg-ring" cx="130" cy="130" r="112" strokeWidth={1.5} />
      <circle
        className="dg-accent"
        cx="130"
        cy="130"
        r="112"
        strokeWidth={3}
        strokeLinecap="round"
        opacity={0.55}
      />
      <circle className="dg-face-navy" cx="130" cy="130" r="92" strokeWidth={1} />

      <g className="dg-tick" strokeWidth={1.2}>
        <line x1="130" y1="42" x2="130" y2="52" />
        <line x1="130" y1="208" x2="130" y2="218" />
        <line x1="42" y1="130" x2="52" y2="130" />
        <line x1="208" y1="130" x2="218" y2="130" />
        <line x1="68" y1="68" x2="75" y2="75" />
        <line x1="185" y1="185" x2="192" y2="192" />
        <line x1="192" y1="68" x2="185" y2="75" />
        <line x1="75" y1="185" x2="68" y2="192" />
      </g>

      <text className="dg-cap" x="130" y="78" textAnchor="middle" fontSize="10">
        noon
      </text>
      <text className="dg-cap" x="130" y="190" textAnchor="middle" fontSize="10">
        midnight
      </text>

      {/* questions answered, at any hour */}
      <g>
        <circle className="dg-dot" cx="196" cy="96" r="13" strokeWidth={1.5} />
        <path className="dg-accent-l" d="M191 96 l3 3 6 -6" strokeWidth={1.6} />
        <circle className="dg-dot" cx="188" cy="176" r="13" strokeWidth={1.5} />
        <path className="dg-accent-l" d="M183 176 l3 3 6 -6" strokeWidth={1.6} />
        <circle className="dg-dot" cx="64" cy="164" r="13" strokeWidth={1.5} />
        <path className="dg-accent-l" d="M59 164 l3 3 6 -6" strokeWidth={1.6} />
        <circle className="dg-dot" cx="72" cy="84" r="13" strokeWidth={1.5} />
        <path className="dg-accent-l" d="M67 84 l3 3 6 -6" strokeWidth={1.6} />
      </g>

      <circle className="dg-center" cx="130" cy="130" r="34" strokeWidth={1.5} />
      <text className="dg-title-light" x="130" y="126" textAnchor="middle" fontSize="20">
        24
      </text>
      <text className="dg-kicker" x="130" y="144" textAnchor="middle" fontSize="8.5">
        HOURS
      </text>
    </svg>
  );
}
