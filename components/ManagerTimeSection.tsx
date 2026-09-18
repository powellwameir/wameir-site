import Section from "./Section";
import VisionIntro from "./VisionIntro";

/*
 * "Where the time goes" (/approach): what the automation is for, as one card.
 * Two bars, today and what we're building toward, each with its label, its two
 * segment names and one human line; one caption for the card (audit v5, E-5).
 * Plain HTML, so the shares are real text rather than an image label.
 */
type Week = {
  tag: string;
  aim?: boolean;
  routine: number;
  note: string;
};

const WEEKS: Week[] = [
  {
    tag: "A typical week today",
    routine: 70,
    note: "The people you rely on spend most of their day on work you never see. None of it is why they got into this.",
  },
  {
    tag: "What we're building toward",
    aim: true,
    routine: 30,
    note: "Same team, same local faces, with their day spent on your community.",
  },
];

export default function ManagerTimeSection() {
  return (
    <Section bg="cream">
      <div className="wrap">
        <VisionIntro
          eyebrow="Where the time goes"
          lede="We take the busywork off people so they can be there for your community. Good managers leave when too much of the day is data entry, chasing paperwork and retyping the same answers."
        >
          Busywork off the manager&apos;s desk.
        </VisionIntro>

        <figure className="card week">
          {WEEKS.map((w) => (
            <div className={`week__row${w.aim ? " week__row--aim" : ""}`} key={w.tag}>
              <p className="week__tag">{w.tag}</p>
              <p className="week__names">
                <span className="week__name">
                  <span className="week__sw week__sw--routine" aria-hidden="true" />
                  Routine &amp; paperwork ~{w.routine}%
                </span>
                <span className="week__sep" aria-hidden="true">
                  ·
                </span>
                <span className="week__name">
                  <span className="week__sw week__sw--people" aria-hidden="true" />
                  Time with the community ~{100 - w.routine}%
                </span>
              </p>
              <div className="week__bar" aria-hidden="true">
                <span className="week__seg week__seg--routine" style={{ flexBasis: `${w.routine}%` }} />
                <span className="week__seg week__seg--people" style={{ flexBasis: `${100 - w.routine}%` }} />
              </div>
              <p className="week__note">{w.note}</p>
            </div>
          ))}
          <figcaption className="week__cap">Illustrative. Same managers; different day.</figcaption>
        </figure>
      </div>
    </Section>
  );
}
