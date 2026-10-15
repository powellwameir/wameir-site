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
  /** Only set where there is a real duration to give. The pill used to carry
   *  slogans on four of the five stages (audit v5 D-4); rather than invent
   *  timings we don't stand behind, the stages without one now have no pill. */
  when?: string;
  lead: string;
  icon: React.ReactNode;
  /** Every stage uses the same two labels (D-3). The page previously ran eight
   *  different label pairs across five cards, which read as eight ideas. */
  cols: [Col, Col];
  /** Content that isn't "what happens" or "what we need" — how we value a
   *  company, how the money works, what changes in a transition. Prose, so we
   *  don't reintroduce a label pair per card. */
  extra?: string[];
  reassure?: string;
  reassureIcon?: React.ReactNode;
};
type Col = { head: string; items: string[] };

const HAPPENS = "What happens";
const NEEDED = "What we need from you";

const SHIELD = (
  <>
    <path d="M12 3s7 4 7 9a7 7 0 0 1-14 0c0-5 7-9 7-9z" />
    <path d="M9 12l2 2 4-4" />
  </>
);

const STAGES: Stage[] = [
  {
    title: "A first conversation",
    lead: "This initial step is simply a conversation. It is a chance to see if we are a good fit for each other. No decisions are made, and no commitments are required.",
    icon: (
      <>
        <path d="M4 5h16v11H8l-4 4z" />
        <path d="M8 10h8M8 13h5" />
      </>
    ),
    cols: [
      {
        head: HAPPENS,
        items: [
          "An informal call or meeting at your convenience",
          "We explain who we are and how we operate",
          "You can ask any questions in confidence",
        ],
      },
      {
        head: NEEDED,
        items: ["Just a willingness to talk", "No documents or financials required yet"],
      },
    ],
    reassure:
      "Confidentiality begins immediately. If the timing is not right, that is an acceptable outcome.",
    reassureIcon: SHIELD,
  },
  {
    title: "Getting to know the business",
    when: "Usually 2–4 weeks",
    lead: "Through several conversations and a review of your financials, we gain a clear understanding of how your company operates and who drives its success. Our goal is to learn what makes your business work so we can preserve and strengthen it.",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M16 16l5 5" />
      </>
    ),
    cols: [
      {
        head: HAPPENS,
        items: [
          "We review financials and key contracts privately",
          "We learn about your team, communities, and systems",
          "We discuss what you want from the sale",
        ],
      },
      {
        head: NEEDED,
        items: [
          "Financial statements and a contract overview",
          "An honest account of how the business operates",
          "A signed confidentiality agreement before sharing sensitive information",
        ],
      },
    ],
  },
  {
    title: "A fair, tailored offer",
    lead: "A clear written offer designed around your goals: a clean exit, a transition period, or a continuing role.",
    icon: (
      <>
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M9 12h6M9 15h4" />
      </>
    ),
    cols: [
      {
        head: HAPPENS,
        items: [
          "You receive the offer in writing",
          "We explain how we determined the valuation",
          "You review it with your lawyer and accountant",
        ],
      },
      {
        head: NEEDED,
        items: [
          "Nothing new; we use information already shared",
          "Time to review and discuss",
        ],
      },
    ],
    extra: [
      "We consider recurring revenue, managed properties, board relationships, contract strength, team stability, and financial clarity when determining the offer.",
      "How the money usually works: most of the price at closing, the rest paid over the next year or two, so we both have a stake in how the handover goes. You can keep a share if you want one.",
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
    lead: "Your managers and staff remain in their current positions. We provide additional support, tools, and capital for your team while maintaining the relationships that give your company its value.",
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
        head: HAPPENS,
        items: [
          "Your managers and staff remain in their positions",
          "We provide support, tools, and capital for your team",
          "We maintain the relationships that give your company value",
        ],
      },
      {
        head: NEEDED,
        items: [
          "Introductions to your boards at your pace",
          "Time with your team to understand daily operations",
        ],
      },
    ],
    extra: [
      "What stays the same: The local team, community identity, and service quality remain unchanged.",
      "What gets better: Tools that return time to your team, centralized back-office support, and capital for investments you could not make alone.",
    ],
    reassure:
      "Your role in the transition is your choice: a full handoff, a set period, or staying on.",
    reassureIcon: (
      <>
        <path d="M3 21h18M6 21V10l6-4 6 4v11" />
        <path d="M10 21v-5h4v5" />
      </>
    ),
  },
  {
    title: "We stay",
    lead: "We work hands-on with your team to preserve and grow your legacy for years to come. Your company keeps its name, its people, and its community presence while receiving the investment needed to become stronger over time.",
    icon: (
      <>
        <path d="M4 12a8 8 0 0 1 14-5l2 2M20 12a8 8 0 0 1-14 5l-2-2" />
        <path d="M18 4v5h-5" />
      </>
    ),
    cols: [
      {
        head: HAPPENS,
        items: [
          "We manage the company and intend to keep it",
          "Your legacy continues with stronger support",
        ],
      },
      {
        head: NEEDED,
        items: ["Now you get to relax and enjoy a job well done."],
      },
    ],
    extra: [
      "You may choose to stay involved, advise, or step away entirely. The remaining payment over one to two years keeps you invested in the community's success regardless of your role.",
    ],
    reassure:
      "We bought it to run it, so you can feel confident leaving your company in good hands.",
    reassureIcon: SHIELD,
  },
];

const STRIP = ["Conversation", "Getting to know it", "The offer", "Transition", "We stay"];

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
          eyebrow="The process"
          lede="Uncertainty makes selling difficult. Here is the complete path: what happens at each stage, what we need from you, how long it takes, and what remains protected. This is our standard for working with every owner."
        >
          From first contact <span className="g">to closing.</span>
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
                  {s.when && <span className="sp-when">{s.when}</span>}
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
                {s.extra?.map((para) => (
                  <p className="sp-extra" key={para}>
                    {para}
                  </p>
                ))}
                {s.reassure ? (
                  <p className="sp-reassure">
                    <Svg>{s.reassureIcon}</Svg>
                    <span>{s.reassure}</span>
                  </p>
                ) : null}
              </article>
            </li>
          ))}
        </ol>

        <div className="sp-promise">
          <h3>
            Ready when you are, <span className="g">even if that&apos;s a year out.</span>
          </h3>
        </div>
      </div>
    </Section>
  );
}
