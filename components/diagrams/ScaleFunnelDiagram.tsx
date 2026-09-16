/**
 * The scale argument (/lower-taxes): one home is stopped by the effort barrier;
 * a whole community funnels into a single repeatable appeal. Colour comes from
 * the .dg-* classes in globals.css so the drawing carries no hard-coded hex.
 */
export default function ScaleFunnelDiagram() {
  return (
    <svg
      className="dg"
      viewBox="0 0 440 300"
      fill="none"
      role="img"
      focusable="false"
      aria-label="One home rarely appeals because of the effort barrier — evidence, process and deadline; a whole community funnels into one appeal, run for all, with the evidence gathered once."
    >
      {/* the lone home, stopped by the barrier */}
      <g transform="translate(16,44)">
        <g className="dg-faint" strokeWidth={1.8}>
          <path d="M0 30 L18 14 L36 30 Z" />
          <rect x="6" y="30" width="24" height="22" />
          <rect x="14" y="40" width="10" height="12" />
        </g>
        <text className="dg-label" x="18" y="70" textAnchor="middle">
          one home
        </text>
        <g className="dg-faint" transform="translate(28,-16)" strokeWidth={2}>
          <path d="M0 0 L8 8 M8 0 L0 8" />
        </g>
        <g transform="translate(58,-6)">
          <line className="dg-mute" x1="0" y1="0" x2="0" y2="70" strokeWidth={2.5} strokeDasharray="5 5" />
          <text className="dg-label" x="0" y="86" textAnchor="middle">
            evidence ·
          </text>
          <text className="dg-label" x="0" y="97" textAnchor="middle">
            process ·
          </text>
          <text className="dg-label" x="0" y="108" textAnchor="middle">
            deadline
          </text>
        </g>
      </g>

      {/* the community */}
      <g className="dg-ink" transform="translate(130,32)" strokeWidth={1.7}>
        <g>
          <path d="M0 12 L10 4 L20 12 Z" />
          <rect x="3" y="12" width="14" height="12" />
        </g>
        <g transform="translate(30,0)">
          <path d="M0 12 L10 4 L20 12 Z" />
          <rect x="3" y="12" width="14" height="12" />
        </g>
        <g transform="translate(60,0)">
          <path d="M0 12 L10 4 L20 12 Z" />
          <rect x="3" y="12" width="14" height="12" />
        </g>
        <g transform="translate(0,34)">
          <path d="M0 12 L10 4 L20 12 Z" />
          <rect x="3" y="12" width="14" height="12" />
        </g>
        <g transform="translate(30,34)">
          <path d="M0 12 L10 4 L20 12 Z" />
          <rect x="3" y="12" width="14" height="12" />
        </g>
        <g transform="translate(60,34)">
          <path d="M0 12 L10 4 L20 12 Z" />
          <rect x="3" y="12" width="14" height="12" />
        </g>
        <g transform="translate(0,68)">
          <path d="M0 12 L10 4 L20 12 Z" />
          <rect x="3" y="12" width="14" height="12" />
        </g>
        <g transform="translate(30,68)">
          <path d="M0 12 L10 4 L20 12 Z" />
          <rect x="3" y="12" width="14" height="12" />
        </g>
        <g transform="translate(60,68)">
          <path d="M0 12 L10 4 L20 12 Z" />
          <rect x="3" y="12" width="14" height="12" />
        </g>
      </g>
      <text className="dg-label" x="170" y="140" textAnchor="middle">
        a whole community
      </text>

      {/* funnel into one process */}
      <g className="dg-accent" strokeWidth={1.5} opacity={0.7}>
        <path d="M222 52 L290 96" />
        <path d="M222 86 L290 104" />
        <path d="M222 120 L290 112" />
      </g>
      <path className="dg-accent" d="M270 104 L296 104" strokeWidth={2} />
      <path className="dg-accent" d="M290 98 L296 104 L290 110" strokeWidth={2} />

      <g transform="translate(304,64)">
        <rect className="dg-face" x="0" y="0" width="120" height="82" rx="8" strokeWidth={2} />
        <text className="dg-title" x="60" y="26" textAnchor="middle" fontSize="12">
          One appeal,
        </text>
        <text className="dg-title" x="60" y="43" textAnchor="middle" fontSize="12">
          run for all
        </text>
        <line className="dg-rule" x1="16" y1="52" x2="104" y2="52" strokeWidth={1} />
        <text className="dg-label" x="60" y="66" textAnchor="middle">
          evidence gathered once
        </text>
      </g>
    </svg>
  );
}
