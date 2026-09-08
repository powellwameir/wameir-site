import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import ContactSection from "@/components/ContactSection";
import SellerCarousel, { type SellerSlide } from "@/components/SellerCarousel";
import ProcessDiagram from "@/components/ProcessDiagram";
import { WeirWatermark } from "@/components/WeirLattice";

export const metadata: Metadata = {
  title: "Thinking About Selling",
  description:
    "Selling your management company is a big decision. Wameir is a long-term operator that invests its own capital and plans to own the businesses it acquires for the long term.",
};

const SLIDES: SellerSlide[] = [
  {
    heading: "Long-term ownership",
    body: "We invest our own capital and plan to own the businesses we acquire for the long term.",
    base: "/img/seller-longterm",
    alt: "A home lit at dusk in a quiet neighborhood",
  },
  {
    heading: "Preserve your legacy",
    body: "We build on what already makes your company work rather than replacing it.",
    base: "/img/seller-legacy",
    alt: "A craftsperson's hands measuring a piece of woodwork",
  },
  {
    heading: "Local teams stay local",
    body: "The people and relationships that serve your communities stay right where they are.",
    base: "/img/seller-local",
    alt: "A neon Texas sign above a local storefront",
  },
];

export default function SellingPage() {
  return (
    <>
      <header className="page-header">
        <WeirWatermark className="page-header__watermark" />
        <div className="wrap">
          <span className="eyebrow eyebrow-gold-light">Thinking about selling</span>
          <h1 className="font-display">
            You built it. We&apos;ll keep <span className="accent-italic">building it.</span>
          </h1>
          <p className="lede">
            A confidential conversation with operators who plan to own what they buy
            for the long term.
          </p>
        </div>
      </header>

      {/* Emotional opener (§5.2) */}
      <Section bg="cream">
        <div className="wrap stack-lg">
          <p className="lead-statement">
            Selling your business is one of the biggest decisions you&apos;ll ever
            make. It&apos;s not just about the numbers — it&apos;s about your
            employees, your clients, your reputation, and everything you&apos;ve spent
            years <span className="g">building.</span>
          </p>
          <p className="t-body text-secondary" style={{ maxWidth: "60ch" }}>
            That&apos;s why we started Wameir.
          </p>
        </div>
      </Section>

      {/* Positive operator statement (§5.2 — no fund/PE contrast, §6 rule 1) */}
      <Section bg="paper">
        <div className="wrap">
          <div className="split">
            <div className="split__label">
              <span className="eyebrow">How we buy</span>
              <p className="kicker">We&apos;re operators, not just owners.</p>
            </div>
            <div className="split__body">
              <p>
                We invest our own capital, operate every business we acquire, and plan
                to own them for the long term. Our goal isn&apos;t to change what makes
                your company successful — it&apos;s to give it the resources to become{" "}
                <strong>even stronger</strong>.
              </p>
              <p>
                Whether you&apos;re ready to retire, looking for a partner, or simply
                exploring your options, we&apos;d welcome a confidential conversation.
              </p>
              <Link className="teaser__link" href="/faq">
                Common questions from founders <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* How it works — visual step-flow (no timeframes; those are gated). */}
          <div style={{ marginTop: 72 }}>
            <span className="eyebrow" style={{ display: "block" }}>
              How it works
            </span>
            <ProcessDiagram />
          </div>
        </div>
      </Section>

      {/* Why founders choose Wameir — three icon cards (§5.2) */}
      <Section bg="cream">
        <div className="wrap">
          <div className="track__intro">
            <span className="eyebrow">Why founders choose Wameir</span>
            <h2 className="t-h2">What you can count on.</h2>
          </div>
          <SellerCarousel slides={SLIDES} />
        </div>
      </Section>

      <ContactSection
        source="/selling"
        audience="seller"
        eyebrow="Start a confidential conversation"
        heading={
          <>
            Let&apos;s start the <span className="it">conversation.</span>
          </>
        }
      />
    </>
  );
}
