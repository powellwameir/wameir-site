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
};

// Founders considering a sale (§5.5).
const FAQS: QA[] = [
  {
    q: "Where does your funding come from?",
    a: (
      <p>
        Our own capital, backed by friends and family who believe in what we&apos;re
        building. We buy each company to own and run it for the long term.
      </p>
    ),
  },
  {
    q: "What kind of companies do you buy?",
    a: (
      <p>
        HOA management companies in Greater Houston. We look for established
        businesses with strong local teams and reputations worth building on, and our
        aim is to make them stronger.
      </p>
    ),
  },
  {
    q: "What happens to my employees and community managers?",
    a: (
      <p>
        They stay, and we invest in them. Your community managers and staff are the
        reason boards and residents trust your company, so keeping them is the plan.
        We give them better tools, systems and support, and the people who know each
        community keep looking after it.
      </p>
    ),
  },
  {
    q: "What happens to me after the sale?",
    a: (
      <p>
        We expect you to step back gradually. You stay involved through a transition
        period, introducing us to your boards and handing over relationships and
        day-to-day decisions at a pace that protects the business. Over time your role
        gets lighter until you&apos;re ready to step away. How long that takes, and what
        your role looks like along the way, is something we work out together.
      </p>
    ),
  },
  {
    q: "Is this confidential?",
    a: (
      <p>
        Yes. Every conversation and every document you share stays confidential, from
        the first call onward. Your employees, boards and clients won&apos;t hear about
        it from us.
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

const PUBLISHED = [...FAQS, ...BOARD_FAQS];

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
          {[
            { label: "From founders", items: FAQS },
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
