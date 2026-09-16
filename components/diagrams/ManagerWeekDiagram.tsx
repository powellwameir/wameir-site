/**
 * The manager's week (/approach "What automation is for"): the same week split
 * two ways, routine on the left and time with the community on the right, so
 * the boundary visibly moves from 70% to 30%. Self-contained (its own key and
 * labels) so it can sit on another page or be exported on its own.
 *
 * The shares are illustrative, as the section says beneath it.
 */
const LABEL =
  "A manager's week, illustrative. Today, about 70% goes to routine work and paperwork and 30% to time with the community. What we're building toward: about 30% on the exceptions only people should handle and 70% with the community.";

export default function ManagerWeekDiagram() {
  return (
    <svg className="dg mw" viewBox="0 0 400 214" fill="none" role="img" focusable="false" aria-label={LABEL}>
      <title>{LABEL}</title>
      <defs>
        <pattern id="mw-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect className="mw-hatch-a" width="8" height="8" />
          <rect className="mw-hatch-b" width="4" height="8" />
        </pattern>
        <clipPath id="mw-bar">
          <rect width="400" height="38" rx="6" />
        </clipPath>
      </defs>

      {/* today */}
      <text className="mw-tag" x="0" y="12">
        A TYPICAL WEEK TODAY
      </text>
      <g transform="translate(0,22)" clipPath="url(#mw-bar)">
        <rect width="280" height="38" fill="url(#mw-hatch)" />
        <rect className="dg-fill-ink" x="280" width="120" height="38" />
      </g>
      <text className="mw-pct" x="140" y="47" textAnchor="middle">
        ~70%
      </text>
      <text className="mw-pct mw-pct--light" x="340" y="47" textAnchor="middle">
        ~30%
      </text>

      {/* building toward */}
      <text className="mw-tag mw-tag--aim" x="0" y="96">
        WHAT WE&apos;RE BUILDING TOWARD
      </text>
      <g transform="translate(0,106)" clipPath="url(#mw-bar)">
        <rect width="120" height="38" fill="url(#mw-hatch)" />
        <rect className="dg-fill-ink" x="120" width="280" height="38" />
      </g>
      <text className="mw-pct" x="60" y="131" textAnchor="middle">
        ~30%
      </text>
      <text className="mw-pct mw-pct--light" x="200" y="131" textAnchor="middle">
        ~70%
      </text>

      {/* where the boundary was, and where it moves */}
      <line className="dg-accent" x1="280" y1="100" x2="280" y2="152" strokeWidth={1.5} strokeDasharray="3 3" />
      <path className="dg-accent" d="M276 158 L126 158" strokeWidth={2} />
      <path className="dg-accent" d="M132 153 L126 158 L132 163" strokeWidth={2} />

      {/* key */}
      <rect x="0" y="186" width="12" height="12" rx="2" fill="url(#mw-hatch)" />
      <text className="mw-key" x="18" y="196">
        Routine and paperwork
      </text>
      <rect className="dg-fill-ink" x="176" y="186" width="12" height="12" rx="2" />
      <text className="mw-key" x="194" y="196">
        Time with the community
      </text>
    </svg>
  );
}
