import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import Section from "@/components/Section";
import ContactSection from "@/components/ContactSection";
import { WeirWatermark } from "@/components/WeirLattice";
import JsonLd from "@/components/JsonLd";
import Arrow from "@/components/Arrow";
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
        We use our own capital and funds from partners who know us well. We are not
        backed by a fund with a fixed timeline, so we have full control over our
        decisions.
      </p>
    ),
  },
  {
    q: "What kind of companies do you buy?",
    a: (
      <p>
        We acquire HOA management companies in Greater Houston. We seek established
        businesses with strong local teams and reputations that we can build upon.
        Our goal is to strengthen these companies.
      </p>
    ),
  },
  {
    q: "What happens to my employees and community managers?",
    a: (
      <p>
        Your employees and community managers remain in their positions. We invest in
        them because they are the foundation of trust between your company and its
        communities. We provide better tools, systems, and support so your team can
        continue serving their neighborhoods effectively.
      </p>
    ),
  },
  {
    q: "What happens to me after the sale?",
    a: (
      <p>
        The transition is your choice. Most owners remain through an initial handover
        period to introduce us to boards and transfer operations at a comfortable
        pace. Some choose to step away sooner, while others stay involved for several
        years.
      </p>
    ),
  },
  {
    q: "Is this confidential?",
    a: (
      <p>
        Confidentiality begins immediately. All conversations and documents remain
        secure from our first interaction. We will not disclose your interest to
        employees, boards, or clients.
      </p>
    ),
  },
  {
    q: "Will you merge us into something else?",
    a: (
      <p>
        We integrate shared tools and support only where they benefit your team. Your
        local identity, company name, and community relationships remain intact when
        they contribute to the business&apos;s success. Every decision is evaluated
        based on whether it improves outcomes for residents.
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
        Not yet. Wameir has not acquired its first management company, so these goals
        represent our commitments for the future rather than current services.{" "}
        <Link href="/working-toward">View all seven goals<Arrow /></Link>
      </p>
    ),
  },
  {
    q: "Can you promise a lower property tax bill?",
    a: (
      <p>
        We cannot guarantee specific tax reductions. Property assessment appeals vary
        by location and year, and success is never certain. Our commitment is to file
        accurate, timely appeals for every home that requests one.{" "}
        <Link href="/lower-taxes">See how it works<Arrow /></Link>
      </p>
    ),
  },
  {
    q: "Will monitoring stop damage to our homes?",
    a: (
      <p>
        Monitoring reduces risk but does not eliminate it entirely. Sensors only
        detect issues they are designed to sense. Your property data remains private
        and under your control.{" "}
        <Link href="/home-monitoring">See how it works<Arrow /></Link>
      </p>
    ),
  },
  {
    q: "Will our insurance premiums go down?",
    a: (
      <p>
        Insurance discounts depend on external factors including insurer policies,
        coverage terms, and regulatory requirements. We cannot guarantee specific
        premium reductions. Our approach is to demonstrate measurable risk reduction
        to insurers, creating a foundation for potential savings.{" "}
        <Link href="/lower-insurance">See how it works<Arrow /></Link>
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
          <span className="eyebrow eyebrow-gold-light">For founders, boards and residents</span>
          <h1 className="font-display">Common questions.</h1>
          <p className="lede">
            Direct answers. We are honest about what we can and cannot deliver.
          </p>
        </div>
      </header>

      {/* Quiet by design (§4A) — the accordion structure is the visual. */}
      <Section bg="paper">
        <div className="wrap">
          {/* The two groups were 12px gold eyebrows: the only structure across
              fourteen identical accordion rows, and too small to do that job.
              They address the reader directly now, each with a line saying what
              its half is for (F-6). */}
          {[
            {
              label: "If you own a management company",
              intro:
                "Questions from founders considering a sale",
              items: FAQS,
            },
            {
              label: "If you're on a board, or live in a managed community",
              intro: "Questions from boards and residents",
              items: BOARD_FAQS,
            },
          ].map((group, i) => (
            <div key={group.label} style={{ marginTop: i === 0 ? 0 : 56 }}>
              <h2 className="group-head">{group.label}</h2>
              <p className="group-intro">{group.intro}</p>
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
        heading={
          <>
            Ask us <span className="it">directly.</span>
          </>
        }
      />
    </>
  );
}
