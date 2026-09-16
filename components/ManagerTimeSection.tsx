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
    tag: "In most companies today",
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
        detail: "Boards, residents, judgment, the actual relationships.",
        pct: "~30%",
      },
    ],
    note: "The people you rely on spend most of their day on work you never see — and none of it is why they got into this.",
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
        detail: "More presence, faster answers, real attention where judgment matters.",
        pct: "~70%",
      },
      {
        swatch: "busywork",
        label: "The exceptions only people should handle",
        detail: "The routine runs itself and flags the few things that need a human.",
        pct: "~30%",
      },
    ],
    note: "Same team, same local faces — freed to spend their day on your community instead of its paperwork.",
  },
];

export default function ManagerTimeSection() {
  return (
    <Section bg="cream">
      <div className="wrap">
        <VisionIntro
          eyebrow="What automation is really for"
          lede="Good community managers don't leave because the work is hard — they leave because too much of the day is data entry, chasing paperwork, and re-typing the same answers. When the routine handles itself, the people who serve your community get their time back for the part only a person can do."
          note="Wameir is early-stage. This is how we intend to run every company we take on — community managers stay; their time shifts."
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
          Automation here isn&apos;t about fewer people. It&apos;s about{" "}
          <span className="g">giving the people you already trust their time back.</span>
        </p>
        <p className="vsec-subnote">
          The community managers who know your neighborhood stay exactly where they are.
          What changes is how they get to spend their day.
        </p>
      </div>
    </Section>
  );
}
