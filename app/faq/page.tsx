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
        We invest our own capital. We&apos;re operators putting our own money behind
        the businesses we acquire, with the intent to own them for the long term.
      </p>
    ),
  },
  {
    q: "What kind of companies do you buy?",
    a: (
      <p>
        Exceptional HOA management companies, primarily in Greater Houston, with
        strong local teams and good reputations we can build on.
      </p>
    ),
  },
  {
    q: "What happens to my employees and community managers?",
    a: (
      <p>
        The local teams and relationships that make your company work stay in place.
        We invest in the people, tools, and support they need to do their best work.
      </p>
    ),
  },
  {
    q: "Do you buy the whole company?",
    gated: true,
    a: (
      <p>
        How we think about it: every situation is different, and we&apos;ll walk
        through the options with you. <em>Placeholder pending attorney review.</em>
      </p>
    ),
  },
  {
    q: "What do your deal structures look like?",
    gated: true,
    a: (
      <p>
        How we think about it: we design each arrangement around what the founder
        wants and what keeps the business strong. <em>Placeholder pending attorney
        review.</em>
      </p>
    ),
  },
  {
    q: "What happens to me after the sale?",
    a: (
      <p>
        That&apos;s up to you. Some founders step back and retire; others stay
        involved for a time to help with the transition. We&apos;ll design it around
        what you want.
      </p>
    ),
  },
  {
    q: "How long does the process take?",
    gated: true,
    a: (
      <p>
        We move at your pace and keep it straightforward. <em>Typical timeframe
        pending — to be confirmed with real numbers.</em>
      </p>
    ),
  },
  {
    q: "Is this confidential?",
    a: (
      <p>
        Yes. A founder exploring a sale doesn&apos;t want it known — we treat every
        conversation and everything you share as strictly confidential.
      </p>
    ),
  },
  {
    q: "What is my company worth?",
    gated: true,
    a: (
      <p>
        How we think about it: value depends on the specifics of your business, and
        we won&apos;t put a number on it before we understand it. Let&apos;s talk.{" "}
        <em>Placeholder pending attorney review — never a number or a promise.</em>
      </p>
    ),
  },
  {
    q: "Will my company be integrated with others?",
    a: (
      <p>
        We build on what already works. Where shared tools or support help your team,
        we bring them in; where your local identity and relationships matter, they
        stay right where they are.
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
