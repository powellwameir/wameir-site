import Section from "./Section";
import VisionIntro from "./VisionIntro";

/*
 * The technology behind it (/approach). Rebuilt from the standalone visual spec
 * (reference_material/wameir-platform-benefit.html) on the site's tokens. The
 * copy is the spec's, edited to the site's house style (no em dashes, no
 * "not X" contrasts, no intensifiers, no serial comma).
 *
 * The spec drew the whole diagram as one fixed-size SVG, which shrinks its
 * smallest text to a few pixels on a phone and hides every "You get:" line from
 * screen readers behind role="img". Here the three tiers are real HTML that
 * stacks on narrow screens, the figure keeps the spec's accessible label, and
 * only the connectors, data-flow packets, glow and ping are decoration.
 * Ambient motion runs only without prefers-reduced-motion; the module row
 * fades in with the site's row reveal (MotionObserver, ".pf-modules").
 */

const REACH = ["Resident portal", "AI voice & email", "Text", "Payments", "E-signature"];
const RECORD = ["Dues", "Requests", "Documents", "Statements"];

const MODULES: { title: string; what: string; get: React.ReactNode; hero?: boolean }[] = [
  {
    title: "Covenant Engine",
    what: "Reads your community's own rules, bylaws & CC&Rs.",
    get: (
      <>
        You get: every answer follows <em>your</em> rules.
      </>
    ),
    hero: true,
  },
  {
    title: "Workflow engine",
    what: "Handles the routine paperwork end to end.",
    get: "You get: your local team spends its time on people.",
  },
  {
    title: "Grounded answers",
    what: "Tied to your rules, with a record kept.",
    get: "You get: accurate answers you can trust and trace.",
  },
  {
    title: "One place",
    what: "Everything about your community, together.",
    get: "You get: nothing lost between calls or people.",
  },
];

/** Dashed gold connector between tiers, with gold packets flowing down it. */
function TierLink({ packets }: { packets: number }) {
  return (
    <div className="pf-link" aria-hidden="true">
      {Array.from({ length: packets }, (_, i) => (
        <span className={`pf-packet pf-packet--${i + 1}`} key={i} />
      ))}
    </div>
  );
}

export default function PlatformBenefits() {
  return (
    <Section bg="navy" className="pf-sec">
      <div className="wrap">
        <VisionIntro
          onDark
          eyebrow="The technology behind it"
          long
          lede="The software stays in the background, and you feel the difference. Here's what runs underneath, and what each piece does for the people who live and work in your community."
        >
          How the tech becomes a community that <span className="g">just works.</span>
        </VisionIntro>

        <figure
          className="platform"
          aria-label="Three layers: how you reach us, the engine Wameir builds, and the day-to-day system of record. Each labeled with the benefit it delivers to residents, boards and local teams."
        >
          <div className="pf-tier pf-tier--light">
            <h3 className="pf-tier__title">How you reach us</h3>
            <p className="pf-tier__sub">Portal, phone or text, whenever works for you, day or night.</p>
            <ul className="pf-chips pf-chips--breathe">
              {REACH.map((c, i) => (
                <li key={c} style={{ "--i": i } as React.CSSProperties}>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <TierLink packets={2} />

          <div className="pf-tier pf-tier--core">
            <div className="pf-tier__head">
              <div>
                <h3 className="pf-tier__title">What we build ourselves</h3>
                <p className="pf-tier__sub">
                  So your community gets clear answers, and your local team gets its time
                  back.
                </p>
              </div>
              <span className="pf-badge">Built by Wameir</span>
            </div>
            <div className="pf-modwrap">
              <span className="pf-wire" aria-hidden="true" />
              <ul className="pf-modules">
                {MODULES.map((m) => (
                  <li className={`pf-module${m.hero ? " pf-module--hero" : ""}`} key={m.title}>
                    {m.hero && <span className="pf-glow" aria-hidden="true" />}
                    <h4>
                      {m.hero && <span className="pf-ping" aria-hidden="true" />}
                      {m.title}
                    </h4>
                    <p className="pf-module__what">{m.what}</p>
                    <p className="pf-module__get">{m.get}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <TierLink packets={1} />

          <div className="pf-tier pf-tier--light">
            <h3 className="pf-tier__title">The day-to-day, kept straight</h3>
            <p className="pf-tier__sub">
              Your dues, requests and documents, accurate and in order.
            </p>
            <div className="pf-record">
              <ul className="pf-chips">
                {RECORD.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="pf-record__note">Built on trusted, proven systems.</p>
            </div>
          </div>
        </figure>

        <p className="track__disclaimer track__disclaimer--sm pf-foot">
          The technology is worth building when you can feel it: faster answers, a team with
          more time for people and a community that runs the way it should. Wameir is
          early-stage. This is what we&apos;re building toward. It&apos;s not a service
          running today.
        </p>
      </div>
    </Section>
  );
}
