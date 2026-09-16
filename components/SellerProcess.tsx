import Section from "./Section";
import VisionIntro from "./VisionIntro";

/*
 * The selling process, in detail (/selling #how-it-works). Rebuilt from the
 * standalone visual spec (reference_material/wameir-seller-process-detailed.html)
 * on the site's tokens: one radius, one card depth, the existing label and
 * disclaimer styles. The copy is the spec's, edited to the site's house style (no em dashes, no
 * "not X" contrasts, no serial comma).
 *
 * Five stages, each a node on a gold rail beside a card: timing, two detail
 * columns and a reassurance line. The overview strip above repeats the stage
 * names for sighted scanning only, so it's hidden from assistive tech (the
 * ordered list already numbers the stages). Each stage fades in with the site's
 * row reveal (MotionObserver, ".sp-stage"); the icon pulse runs only when the
 * visitor hasn't asked for reduced motion.
 */

type Stage = {
  title: string;
  when: string;
  lead: string;
  icon: React.ReactNode;
  cols: [Col, Col];
  reassure: string;
  reassureIcon: React.ReactNode;
};
type Col = { head: string; items: string[] };

const SHIELD = (
  <>
    <path d="M12 3s7 4 7 9a7 7 0 0 1-14 0c0-5 7-9 7-9z" />
    <path d="M9 12l2 2 4-4" />
  </>
);

const STAGES: Stage[] = [
  {
    title: "A first conversation",
    when: "At your pace · no commitment",
    lead: "You reach out, or we're introduced. This first step is a conversation, a chance to get a feel for each other and for whether there's a fit. Nothing is decided, and nothing is expected.",
    icon: (
      <>
        <path d="M4 5h16v11H8l-4 4z" />
        <path d="M8 10h8M8 13h5" />
      </>
    ),
    cols: [
      {
        head: "What happens",
        items: [
          "An informal call or meeting, whenever suits you",
          "We share who we are and how we work",
          "You ask anything you want, in confidence",
        ],
      },
      {
        head: "What we'll need from you",
        items: ["Nothing but a willingness to talk", "No documents, no financials yet"],
      },
    ],
    reassure:
      "Confidential from the first word. If the timing's not right, that's a fine outcome too.",
    reassureIcon: SHIELD,
  },
  {
    title: "Getting to know the business",
    when: "Usually 2–4 weeks",
    lead: "A few conversations and a look at the numbers, enough to understand how the company runs and who makes it run. We want to learn what makes it work, so we can keep it working.",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M16 16l5 5" />
      </>
    ),
    cols: [
      {
        head: "What happens",
        items: [
          "We review financials and key contracts, privately",
          "We learn the team, the communities, the systems",
          "We talk through what you want out of a sale",
        ],
      },
      {
        head: "What we'll need from you",
        items: [
          "Financial statements and a contract overview",
          "Honest context on how the business runs",
          "A confidentiality agreement before anything sensitive is shared",
        ],
      },
    ],
    reassure:
      "Your employees and clients don't learn anything unless and until you choose to tell them.",
    reassureIcon: (
      <>
        <path d="M4 20v-1a6 6 0 0 1 12 0v1" />
        <circle cx="10" cy="7" r="3.5" />
      </>
    ),
  },
  {
    title: "A fair, tailored offer",
    when: "A written offer, built around you",
    lead: "A clear written offer, shaped around what you told us you want: a clean exit, a transition period or a continuing role. We walk you through how we arrived at it, plainly.",
    icon: (
      <>
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M9 12h6M9 15h4" />
      </>
    ),
    cols: [
      {
        head: "How we think about value",
        items: [
          "Your recurring revenue and the doors you manage",
          "Board relationships and the strength of your contracts",
          "A steady team and clean books are worth more to us",
        ],
      },
      {
        head: "How a deal can be structured",
        items: [
          "Cash at close, plus a seller note, so we stay partners through the transition",
          "Room to stay invested in the community's continued success",
          "Shaped around your goals",
        ],
      },
    ],
    reassure: "You take the time you need to decide, with no pressure and no deadline.",
    reassureIcon: (
      <>
        <path d="M12 8v8M8 12h8" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
  },
  {
    title: "The transition",
    when: "Your people stay. That's the point.",
    lead: "The managers and staff who know your communities stay right where they are. We add support, tools and capital behind them, and keep the relationships that made the company worth buying.",
    icon: (
      <>
        <path d="M4 20v-1a5 5 0 0 1 10 0v1" />
        <circle cx="9" cy="8" r="3" />
        <path d="M15 11a4 4 0 1 0 0-6" />
        <path d="M18 20v-1a5 5 0 0 0-3-4.6" />
      </>
    ),
    cols: [
      {
        head: "What stays the same",
        items: [
          "The local team and the faces boards know",
          "Your company's name and identity in the community",
          "The service your clients rely on",
        ],
      },
      {
        head: "What gets better",
        items: [
          "Better tools, so the team spends time on people",
          "Back-office support run once, for everyone",
          "Capital behind investments you couldn't make alone",
        ],
      },
    ],
    reassure:
      "Your role in the transition is yours to choose: a full handoff, a set period or staying on.",
    reassureIcon: (
      <>
        <path d="M3 21h18M6 21V10l6-4 6 4v11" />
        <path d="M10 21v-5h4v5" />
      </>
    ),
  },
  {
    title: "Long-term ownership",
    when: "We operate it and hold it",
    lead: "We run the company ourselves and plan to own it for years. What you built keeps its name, its people and its place in the community, and gets the investment to become stronger over time.",
    icon: (
      <>
        <path d="M4 12a8 8 0 0 1 14-5l2 2M20 12a8 8 0 0 1-14 5l-2-2" />
        <path d="M18 4v5h-5" />
      </>
    ),
    cols: [
      {
        head: "What this means",
        items: [
          "We're owner-operators, here to stay",
          "Decisions made for the long term",
          "Your legacy continues, with more behind it",
        ],
      },
      {
        head: "Your part, if you want one",
        items: [
          "Stay involved, advise or step away entirely",
          "A seller note keeps you invested in how the community does next",
        ],
      },
    ],
    reassure: "You built it. We'll keep building it for the long haul.",
    reassureIcon: SHIELD,
  },
];

const STRIP = ["Conversation", "Getting to know it", "The offer", "Transition", "Long-term ownership"];

function Svg({ children, width = 1.6 }: { children: React.ReactNode; width?: number }) {
  return (
    <svg viewBox="0 0 24 24" strokeWidth={width} aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

const CHECK = <path d="M5 12l5 5L20 7" />;

export default function SellerProcess() {
  return (
    <Section bg="cream" id="how-it-works" className="sp">
      <div className="wrap">
        <VisionIntro
          eyebrow="Thinking about selling?"
          lede="The hardest part of selling is not knowing how it goes. So here's the entire path in detail: what happens at each stage, what we'll ask of you, how long it takes and what stays protected throughout."
          note="Wameir is early-stage. This is how we intend to work with every owner, and the standard we're holding ourselves to."
        >
          The whole process, <span className="g">start to finish.</span>
        </VisionIntro>

        <ol className="sp-strip" aria-hidden="true">
          {STRIP.map((label, i) => (
            <li key={label}>
              <b>{i + 1}</b>
              <span>{label}</span>
            </li>
          ))}
        </ol>

        <ol className="sp-stages">
          {STAGES.map((s, i) => (
            <li className="sp-stage" key={s.title}>
              <div className="sp-rail" aria-hidden="true">
                <span className="sp-node">
                  <span className="sp-num">{i + 1}</span>
                  <Svg width={1.5}>{s.icon}</Svg>
                </span>
              </div>
              <article className="sp-card">
                <div className="sp-card__head">
                  <h3>{s.title}</h3>
                  <span className="sp-when">{s.when}</span>
                </div>
                <p className="sp-lead">{s.lead}</p>
                <div className="sp-cols">
                  {s.cols.map((c) => (
                    <div key={c.head}>
                      <h4>{c.head}</h4>
                      <ul>
                        {c.items.map((item) => (
                          <li key={item}>
                            <Svg>{CHECK}</Svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="sp-reassure">
                  <Svg>{s.reassureIcon}</Svg>
                  <span>{s.reassure}</span>
                </p>
              </article>
            </li>
          ))}
        </ol>

        <div className="sp-promise">
          <h3>
            Ready when you are, <span className="g">even if that&apos;s a year out.</span>
          </h3>
          <p>
            A first conversation costs nothing and commits you to nothing. Every message is
            read by a founder and kept confidential.
          </p>
        </div>
      </div>
    </Section>
  );
}
