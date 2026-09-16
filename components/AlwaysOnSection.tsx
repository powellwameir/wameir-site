import Section from "./Section";
import Icon, { type IconName } from "./Icon";
import ClockDialDiagram from "./diagrams/ClockDialDiagram";

/*
 * "Always on" (§5.1) — the routine answered at any hour, with a person for
 * anything that needs judgment. navy-90 so the closing navy band that follows
 * reads as its pair rather than a repeat.
 */
const POINTS: { icon: IconName; line: string }[] = [
  {
    icon: "chat-lines",
    line: "Your balance, documents and request status, on demand.",
  },
  { icon: "clock", line: "Day or night, weekday or weekend. No waiting for Monday." },
  {
    icon: "droplet-watch",
    line: "A person, with full context, for anything that needs judgment.",
  },
];

export default function AlwaysOnSection() {
  return (
    <Section bg="navy-90">
      <div className="wrap">
        <div className="alwayson">
          <div className="vsec-intro">
            <span className="eyebrow eyebrow-gold-light">Always on</span>
            <h2 className="t-h2 vsec-title">
              Answered <span className="g">when you ask.</span>
            </h2>
            <p className="vsec-intro__lede">
              The routine questions don&apos;t wait for office hours, so the answers
              shouldn&apos;t either. A balance, a gate code or a rule you forgot,
              handled the moment you ask, at any hour. And a person for anything that
              needs one.
            </p>
            <ul className="icon-list">
              {POINTS.map((p) => (
                <li key={p.icon}>
                  <span aria-hidden="true">
                    <Icon name={p.icon} size={20} />
                  </span>
                  <span>{p.line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="dialwrap">
            <ClockDialDiagram />
          </div>
        </div>
      </div>
    </Section>
  );
}
