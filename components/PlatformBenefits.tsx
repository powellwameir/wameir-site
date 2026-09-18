import Section from "./Section";
import VisionIntro from "./VisionIntro";

/*
 * The technology behind it (/approach). Three layers of one system: how people
 * reach us, what we build, and the record underneath. They are layers, not
 * steps, so they sit side by side as three cards of one style on one ground,
 * with no connector suggesting a sequence (audit v5, E-4). No product names,
 * and nothing is singled out: each card says what it does for the community.
 */

const REACH = ["Resident portal", "Phone", "Email", "Text"];
const RECORD = ["Dues", "Requests", "Documents", "Statements"];

const BUILD: { lead: string; body: string }[] = [
  {
    lead: "It knows your rules.",
    body: "Every answer comes from your community's own documents, and there's a record of what was said.",
  },
  {
    lead: "It handles the paperwork.",
    body: "Routine requests, forms and follow-ups run on their own, so your local team's day is spent on people.",
  },
  {
    lead: "It keeps everything in one place.",
    body: "Nothing is lost between a call, an email and a person.",
  },
];

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="pf-chips">
      {items.map((c) => (
        <li key={c}>{c}</li>
      ))}
    </ul>
  );
}

export default function PlatformBenefits() {
  return (
    <Section bg="paper" className="pf-sec">
      <div className="wrap">
        <VisionIntro
          eyebrow="The technology behind it"
          lede="The software stays in the background. Here's what each piece does for the people who live and work in your community."
        >
          What runs underneath.
        </VisionIntro>

        <div className="platform">
          <article className="card pf-card">
            <h3>How you reach us</h3>
            <Chips items={REACH} />
            <p>
              Routine questions are answered automatically, by phone or email, any hour.
              Anything else goes to a person.
            </p>
          </article>

          <article className="card pf-card">
            <h3>What we build ourselves</h3>
            <ul className="pf-build">
              {BUILD.map((b) => (
                <li key={b.lead}>
                  <strong>{b.lead}</strong> {b.body}
                </li>
              ))}
            </ul>
          </article>

          <article className="card pf-card">
            <h3>The day-to-day, kept straight</h3>
            <p>Your dues, requests and documents, accurate and in order.</p>
            <Chips items={RECORD} />
            <p>Runs on standard association accounting and payment systems.</p>
          </article>
        </div>

        <p className="pf-foot">
          The technology is worth building when you can feel it: faster answers, a team
          with more time for people and a community that runs the way it should.
        </p>
      </div>
    </Section>
  );
}
