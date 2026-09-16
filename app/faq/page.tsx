import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactSection from "@/components/ContactSection";
import { WeirWatermark } from "@/components/WeirLattice";
import { isFilled } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions founders ask about selling to Wameir, and questions boards and residents ask about what changes.",
};

type QA = {
  q: string;
  a: string[]; // paragraphs
  gated?: boolean; // ⚠️ attorney review needed before publishing
};

// Legal/valuation answers are phrased as "how we think about it," never a number
// or a promise. A question renders only when it isn't gated and every paragraph
// is free of [FILL: …] markers; the rest stay here and return once answered.
const FOUNDER_FAQS: QA[] = [
  {
    q: "Where does your funding come from?",
    a: [
      "We invest our own capital. Every acquisition is made with money we've committed to owning and running the business, not to moving on from it.",
    ],
  },
  {
    q: "What kind of companies do you buy?",
    a: [
      "Established HOA management companies, primarily in Greater Houston, with strong local teams and reputations worth building on. We look for businesses that are already good at what they do. Our aim is to strengthen them, not to turn them into something they're not.",
    ],
  },
  {
    q: "How big a company are you looking for?",
    a: [
      "[FILL: the range we look for, in doors under management, revenue, or staff]. If you're outside that range, talk to us anyway.",
    ],
  },
  {
    q: "What happens to my employees and community managers?",
    a: [
      "They stay, and we invest in them. The local teams and relationships are what make a management company work, so keeping them in place is the point. We give those teams better tools, systems, and support, and the people closest to the communities stay closest to them.",
    ],
  },
  {
    q: "What happens to our client contracts?",
    a: [
      "Your associations keep their management agreements, and the same people keep serving them. We'll plan with you how and when clients hear about the change, so it comes from people they already trust.",
    ],
  },
  {
    q: "What happens to me after the sale?",
    a: [
      "That's your decision. Some founders are ready to step back; others want to stay involved to help with the transition, or longer. We build the arrangement around what you want. There's no single expectation you have to fit.",
    ],
  },
  {
    q: "Will my company be merged with others?",
    a: [
      "Where shared tools or support help your team, we bring them in. Where your name, local identity, and relationships are part of what makes the business work, they stay. The test is whether a change makes the community better, not whether it makes things uniform.",
    ],
  },
  {
    q: "Is this confidential?",
    a: [
      "Yes. A founder exploring a sale rarely wants it known. Every conversation and every document you share stays private, from the first call on.",
    ],
  },
  {
    q: "How do you think about valuation?",
    gated: true,
    a: [
      "How we think about it: we look at recurring management revenue, how long clients stay, the strength of the team, and how the business runs day to day. We won't put a number on your company before we understand it.",
      "[FILL: anything further on valuation, after counsel review]",
    ],
  },
  {
    q: "Do you buy the whole company?",
    gated: true,
    a: [
      "How we think about it: the right structure depends on what you want and what keeps the business strong, and we'll walk through the options together.",
      "[FILL: whole-company vs. partial acquisitions, after counsel review]",
    ],
  },
  {
    q: "Can I keep some equity?",
    gated: true,
    a: [
      "How we think about it: some founders want a stake in what comes next, and we're open to that conversation.",
      "[FILL: whether equity rollover is offered, after counsel review]",
    ],
  },
  {
    q: "Do you use debt, earnouts, or seller notes?",
    gated: true,
    a: [
      "How we think about it: we'd rather keep a deal simple enough to explain in a few sentences, and built around your goals rather than a template.",
      "[FILL: whether deals use debt, earnouts, or seller notes, after counsel review]",
    ],
  },
  {
    q: "How long does the process take?",
    a: [
      "We move at your pace. [FILL: a typical timeline from first call to close, once we can state it from experience]",
    ],
  },
  {
    q: "Do you buy outside Greater Houston?",
    a: ["Greater Houston is where we're starting. [FILL: whether and where we'd look beyond it]"],
  },
  {
    q: "What does “Wameir” mean?",
    a: ["[FILL: where the name comes from]"],
  },
];

const COMMUNITY_FAQS: QA[] = [
  {
    q: "Will my dues go up?",
    a: [
      "Your association's board sets dues, not the management company, and a change in who owns the management company doesn't change that. The management fee is set by your management agreement, which your board approved.",
    ],
  },
  {
    q: "Does my board have to approve a sale?",
    a: [
      "It depends on your management agreement. Some require the board's consent before the agreement moves to a new owner; others don't. Either way, your board keeps every right it has under the agreement, including how it can be ended.",
    ],
  },
  {
    q: "What changes on day one?",
    a: [
      "Very little you'd notice: the same manager, the same office, and the same way to reach them. Changes come later, one at a time, and we explain them to your board before they happen.",
    ],
  },
];

const shown = (items: QA[]) =>
  items.filter((item) => !item.gated && item.a.every(isFilled));

function FaqList({ items }: { items: QA[] }) {
  return (
    <div className="faq">
      {shown(items).map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <div className="faq__body">
            {item.a.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <header className="page-header">
        <WeirWatermark className="page-header__watermark" />
        <div className="wrap">
          <span className="eyebrow eyebrow-gold-light">FAQ</span>
          <h1 className="font-display">Questions founders ask.</h1>
          <p className="lede">
            How we think about the things that matter most when you&apos;re
            considering a sale, and what boards and residents ask us.
          </p>
        </div>
      </header>

      {/* Quiet by design (§4A) — the accordion structure is the visual. */}
      <Section bg="paper">
        <div className="wrap">
          <div className="track__intro">
            <span className="eyebrow">For founders</span>
            <h2 className="t-h2">Selling your company</h2>
          </div>
          <FaqList items={FOUNDER_FAQS} />

          <div className="track__intro" style={{ marginTop: 72 }}>
            <span className="eyebrow">For boards and residents</span>
            <h2 className="t-h2">Questions boards and residents ask</h2>
          </div>
          <FaqList items={COMMUNITY_FAQS} />
        </div>
      </Section>

      <ContactSection
        source="/faq"
        audience="founder"
        eyebrow="Still have questions?"
        lead="Send us your question."
        body="If your question isn't here, ask it. We answer every one personally."
        heading={
          <>
            Ask us <span className="it">directly.</span>
          </>
        }
      />
    </>
  );
}
