import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import ContactSection from "@/components/ContactSection";
import Icon, { type IconName } from "@/components/Icon";
import { WeirWatermark } from "@/components/WeirLattice";

export const metadata: Metadata = {
  title: "Thinking About Selling",
  description:
    "Selling your management company is a big decision. Wameir is a long-term operator that invests its own capital and plans to own the businesses it acquires for the long term.",
};

const TRIO: { icon: IconName; title: string; line: string }[] = [
  {
    icon: "long-term",
    title: "Long-term ownership",
    line: "We invest our own capital, operate every business we acquire, and plan to own them for the long term.",
  },
  {
    icon: "legacy",
    title: "Preserve your legacy",
    line: "Our goal isn't to change what makes your company successful — it's to give it the resources to become even stronger.",
  },
  {
    icon: "local-teams",
    title: "Local teams stay local",
    line: "Great communities are built by great local teams. The people and relationships that serve them stay in place.",
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
        </div>
      </Section>

      {/* Why founders choose Wameir — three icon cards (§5.2) */}
      <Section bg="cream">
        <div className="wrap">
          <div className="track__intro">
            <span className="eyebrow">Why founders choose Wameir</span>
            <h2 className="t-h2">What you can count on.</h2>
          </div>
          <div className="trio">
            {TRIO.map((c) => (
              <div className="card" key={c.title}>
                <span className="card__icon">
                  <Icon name={c.icon} size={26} />
                </span>
                <h3>{c.title}</h3>
                <p>{c.line}</p>
              </div>
            ))}
          </div>
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
