import Section from "./Section";
import Icon, { type IconName } from "./Icon";
import ClockDialDiagram from "./diagrams/ClockDialDiagram";

/*
 * "Always on" (§5.1): the routine answered at any hour, with a person for
 * anything that needs judgment. On /working-toward it follows the first goal
 * group.
 */
const POINTS: { icon: IconName; line: string }[] = [
  {
    icon: "chat-lines",
    line: "Balance, documents, and request status, available on demand.",
  },
  { icon: "clock", line: "Day or night, weekday or weekend. No waiting until Monday." },
  {
    icon: "droplet-watch",
    line: "A person with full context for anything that needs judgment.",
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
              You should not have to wait for office hours to get a simple answer. We
              handle balance inquiries, gate codes, and rule questions instantly, at
              any hour. For anything that requires judgment, you get a real person
              with full context.
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
