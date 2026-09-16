import Section from "./Section";
import VisionIntro from "./VisionIntro";

/*
 * "Where a manager's time goes" (§5.1) — what the automation is actually for.
 * The split bar is drawn in CSS, not SVG; the legend beneath states both
 * categories and both shares in text, so the bar itself is decorative.
 */
type State = {
  tag: string;
  head: string;
  aim?: boolean;
  segments: { className: string; width: string }[];
  legend: { swatch: "busywork" | "people"; label: string; detail: string; pct: string }[];
  note: string;
};

const STATES: State[] = [
  {
    tag: "A typical week today",
    head: "A manager's week",
    segments: [
      { className: "seg--busywork", width: "70%" },
      { className: "seg--people", width: "30%" },
    ],
    legend: [
      {
        swatch: "busywork",
        label: "Routine & paperwork",
        detail:
          "Posting payments, chasing documents, re-typing the same answers, manual reports.",
        pct: "~70%",
      },
      {
        swatch: "people",
        label: "Time with the community",
        detail: "Boards, residents, judgment, the relationships.",
        pct: "~30%",
      },
    ],
    note: "The people you rely on spend most of their day on work you never see. None of it is why they got into this.",
  },
  {
    tag: "What we're building toward",
    head: "The same manager's week",
    aim: true,
    segments: [
      { className: "seg--busywork-aim", width: "30%" },
      { className: "seg--people-aim", width: "70%" },
    ],
    legend: [
      {
        swatch: "people",
        label: "Time with the community",
        detail: "More presence, faster answers, attention where judgment matters.",
        pct: "~70%",
      },
      {
        swatch: "busywork",
        label: "The exceptions only people should handle",
        detail: "The routine runs itself and flags the few things that need a human.",
        pct: "~30%",
      },
    ],
    note: "Same team, same local faces, with their day spent on your community.",
  },
];

export default function ManagerTimeSection() {
  return (
    <Section bg="cream">
      <div className="wrap">
        <VisionIntro
          eyebrow="What automation is for"
          lede="Good community managers leave when too much of the day is data entry, chasing paperwork and retyping the same answers. When the routine handles itself, the people who serve your community get their time back for the work only a person can do."
        >
          We take the busywork off people, so they can{" "}
          <span className="g">be there for your community.</span>
        </VisionIntro>

        <div className="states">
          {STATES.map((s) => (
            <div
              className={`card card--state${s.aim ? " card--state-aim" : ""}`}
              key={s.head}
            >
              <p className="state-tag">{s.tag}</p>
              <h3 className="state-h">{s.head}</h3>
              {/* Decorative: the legend below carries the same information. */}
              <div className="bar" aria-hidden="true">
                {s.segments.map((seg) => (
                  <div
                    className={`seg ${seg.className}`}
                    style={{ width: seg.width }}
                    key={seg.className}
                  />
                ))}
              </div>
              <div className="legend">
                {s.legend.map((l) => (
                  <div className="legend__row" key={l.label}>
                    <span className={`legend__sw sw--${l.swatch}`} aria-hidden="true" />
                    <p className="legend__text">
                      <strong>{l.label}</strong>
                      <span>{l.detail}</span>
                    </p>
                    <span className="legend__pct">{l.pct}</span>
                  </div>
                ))}
              </div>
              <p className="card__note">{s.note}</p>
            </div>
          ))}
        </div>

        <p className="vsec-closer">
          Automation here is for{" "}
          <span className="g">giving the people you already trust their time back.</span>
        </p>
        <p className="vsec-subnote">
          The shares shown are illustrative. The community managers who know your
          neighborhood stay where they are; what changes is how they spend their day.
        </p>
      </div>
    </Section>
  );
}
