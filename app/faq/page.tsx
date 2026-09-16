import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import Section from "@/components/Section";
import ContactSection from "@/components/ContactSection";
import { WeirWatermark } from "@/components/WeirLattice";
import JsonLd from "@/components/JsonLd";
import { isValidElement, type ReactNode } from "react";

export const metadata: Metadata = pageMetadata({
  path: "/faq",
  title: "FAQ",
  description:
    "Common questions from founders considering a sale, and from boards and residents asking what Wameir is working toward.",
});

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
        Our own capital. Every acquisition is funded with our own money, and we buy
        each company to own and run it for the long term.
      </p>
    ),
  },
  {
    q: "What kind of companies do you buy?",
    a: (
      <p>
        Established HOA management companies, primarily in the Greater Houston area,
        with strong local teams and reputations worth building on. We look for
        businesses that are already good at what they do, and our aim is to make them
        stronger.
      </p>
    ),
  },
  {
    q: "What happens to my employees and community managers?",
    a: (
      <p>
        They stay, and we invest in them. The local teams and relationships are what
        make a management company work, so keeping them in place is the point. We give
        those teams better tools, systems and support, and the people closest to the
        communities stay closest to them.
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
        longer. We build the arrangement around what you want, with no single
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
        Yes. A founder exploring a sale rarely wants it known, and we treat that
        seriously: every conversation and every document you share is kept strictly
        confidential, from the first call onward.
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
        Where shared tools or support help your team, we bring them in. Where your
        local identity, name and relationships are part of what makes the business
        work, they stay. The test is always whether a change makes the community
        better.
      </p>
    ),
  },
];

// Boards and residents (F-04). Each answer restates the "what we can and can't
// promise" copy from its goal page and links to it. Every answer is framed as a
// goal; none describes a service running today.
const BOARD_FAQS: QA[] = [
  {
    q: "Is any of this running in our community today?",
    a: (
      <p>
        No. Wameir hasn&apos;t acquired its first company yet, so the goals on this
        site describe what we&apos;re working toward, not services running today.{" "}
        <Link href="/working-toward">See all eight goals</Link>.
      </p>
    ),
  },
  {
    q: "Can you promise a lower property tax bill?",
    a: (
      <p>
        No one can. Not every appeal succeeds, and assessments and outcomes vary from
        home to home and year to year. What a community-wide effort can commit to is
        that the appeal gets filed, correctly and on time, for every home that wants
        it. <Link href="/lower-taxes">Lower property taxes: the full write-up</Link>.
      </p>
    ),
  },
  {
    q: "Will monitoring stop damage to our homes?",
    a: (
      <p>
        It reduces risk; it doesn&apos;t remove it, and it only helps with what it can
        detect. Your home&apos;s information stays yours.{" "}
        <Link href="/home-monitoring">
          Smarter preventive maintenance: the full write-up
        </Link>
        .
      </p>
    ),
  },
  {
    q: "Will our insurance premiums go down?",
    a: (
      <p>
        We can&apos;t promise a specific number. Any discount depends on insurers,
        coverage and factors outside our control. What we can do is make a home
        lower-risk and make that reduction visible, which is the honest basis for a
        better rate. <Link href="/lower-insurance">Lower insurance costs: the full write-up</Link>.
      </p>
    ),
  },
];

/** Plain text of an answer, for structured data (the page renders the JSX). */
function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return textOf(node.props.children);
  return "";
}

// Only the questions the page shows: gated answers (counsel review pending)
// are placeholders and stay out of search results too.
const FOUNDER_PUBLISHED = FAQS.filter((item) => !item.gated);
const PUBLISHED = [...FOUNDER_PUBLISHED, ...BOARD_FAQS];

const FAQ_PAGE = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PUBLISHED.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: textOf(item.a).replace(/\s+/g, " ").trim() },
  })),
};

export default function FaqPage() {
  return (
    <>
      <header className="page-header">
        <WeirWatermark className="page-header__watermark" />
        <div className="wrap">
          <span className="eyebrow eyebrow-gold-light">FAQ</span>
          <h1 className="font-display">Questions we hear.</h1>
          <p className="lede">
            From founders thinking about a sale, and from boards and residents asking
            what we&apos;d change.
          </p>
        </div>
      </header>

      {/* Quiet by design (§4A) — the accordion structure is the visual. */}
      <Section bg="paper">
        <div className="wrap">
          {/* Only questions with real answers render. Gated ones (legal review
              pending) stay in the data and return once they're answered. */}
          {[
            { label: "From founders", items: FOUNDER_PUBLISHED },
            { label: "From boards and residents", items: BOARD_FAQS },
          ].map((group, i) => (
            <div key={group.label} style={{ marginTop: i === 0 ? 0 : 56 }}>
              <h2 className="eyebrow eyebrow--heading" style={{ display: "block", marginBottom: 16 }}>
                {group.label}
              </h2>
              <div className="faq">
                {group.items.map((item) => (
                  <details key={item.q}>
                    <summary>{item.q}</summary>
                    <div className="faq__body">{item.a}</div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <JsonLd data={FAQ_PAGE} />

      <ContactSection
        source="/faq"
        audience="founder"
        eyebrow="Still have questions?"
        intro="If your question isn't here, send it. We'll answer, and we may add it to this page."
        lead="Send us your question, and we'll answer it personally."
        heading={
          <>
            Ask us <span className="it">directly.</span>
          </>
        }
      />
    </>
  );
}
