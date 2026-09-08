import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactSection from "@/components/ContactSection";
import { WeirWatermark } from "@/components/WeirLattice";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions from founders considering a sale, and how Wameir thinks about them.",
};

type QA = {
  q: string;
  a: React.ReactNode;
  gated?: boolean; // ⚠️ attorney review / real numbers needed before publishing
};

// Seller-FAQ (§5.5 / §15 draft list). Legal/valuation answers are phrased as
// "how we think about it," never a number or a promise — and are marked as
// placeholders pending attorney review (blocking #3) or real numbers (#9).
const FAQS: QA[] = [
  {
    q: "Where does your funding come from?",
    a: (
      <p>
        We invest our own capital. Every acquisition is funded with our own money,
        committed with the intention of owning and operating the business for the
        long term rather than moving on from it.
      </p>
    ),
  },
  {
    q: "What kind of companies do you buy?",
    a: (
      <p>
        Established HOA management companies, primarily in the Greater Houston area,
        with strong local teams and reputations worth building on. We look for
        businesses that are already good at what they do — our aim is to strengthen
        them, not to turn them into something they are not.
      </p>
    ),
  },
  {
    q: "What happens to my employees and community managers?",
    a: (
      <p>
        They stay, and we invest in them. The local teams and relationships are what
        make a management company work, so keeping them in place is the point, not a
        courtesy. Our focus is on giving those teams better tools, systems, and
        support — the people closest to the communities remain closest to them.
      </p>
    ),
  },
  {
    q: "Do you buy the whole company?",
    gated: true,
    a: (
      <p>
        How we think about it: every situation is different, and the right structure
        depends on what the founder wants and what keeps the business strong. We will
        walk through the options together.{" "}
        <em>Full answer pending counsel review.</em>
      </p>
    ),
  },
  {
    q: "What do your deal structures look like?",
    gated: true,
    a: (
      <p>
        How we think about it: we design each arrangement around the founder&apos;s
        goals and the continued health of the business, rather than fitting everyone
        to a single template. <em>Full answer pending counsel review.</em>
      </p>
    ),
  },
  {
    q: "What happens to me after the sale?",
    a: (
      <p>
        That is your decision. Some founders are ready to step back and retire;
        others want to stay involved for a while to help with the transition, or
        longer. We build the arrangement around what you want — there is no single
        expectation you have to fit.
      </p>
    ),
  },
  {
    q: "How long does the process take?",
    gated: true,
    a: (
      <p>
        We move at your pace and keep the process straightforward and confidential.{" "}
        <em>
          A typical timeframe will be added here once we can state it from
          experience.
        </em>
      </p>
    ),
  },
  {
    q: "Is this confidential?",
    a: (
      <p>
        Yes — completely. A founder exploring a sale rarely wants it known, and we
        treat that seriously: every conversation and every document you share is kept
        strictly confidential, from the first call onward.
      </p>
    ),
  },
  {
    q: "What is my company worth?",
    gated: true,
    a: (
      <p>
        How we think about it: value depends on the specifics of your business, and
        we will not attach a number to it before we understand it properly. The
        honest answer is that it is worth having the conversation.{" "}
        <em>
          Full answer pending counsel review — we will not quote a figure or make a
          promise here.
        </em>
      </p>
    ),
  },
  {
    q: "Will my company be integrated with others?",
    a: (
      <p>
        Where shared tools or support genuinely help your team, we bring them in.
        Where your local identity, name, and relationships are part of what makes the
        business work, they stay. The test is always whether a change makes the
        community better, not whether it makes things uniform.
      </p>
    ),
  },
];

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
            considering a sale.
          </p>
        </div>
      </header>

      {/* Quiet by design (§4A) — the accordion structure is the visual. */}
      <Section bg="paper">
        <div className="wrap">
          <div className="faq">
            {FAQS.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <div className="faq__body">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <ContactSection
        source="/faq"
        audience="seller"
        eyebrow="Still have questions?"
        heading={
          <>
            Ask us <span className="it">directly.</span>
          </>
        }
      />
    </>
  );
}
