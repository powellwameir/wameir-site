import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import Section from "@/components/Section";
import Arrow from "@/components/Arrow";
import ContactSection from "@/components/ContactSection";
import PullQuote from "@/components/PullQuote";
import SellerProcess from "@/components/SellerProcess";
import { WeirWatermark } from "@/components/WeirLattice";

export const metadata: Metadata = pageMetadata({
  path: "/selling",
  title: "Thinking About Selling",
  description:
    "Selling your management company is a big decision. Wameir buys with its own money, runs what it buys, and plans to keep it.",
});

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
            A private conversation with two people who&apos;ll run your company
            themselves and keep it.
          </p>
        </div>
      </header>

      {/* Emotional opener (§5.2) as the page's pull-quote */}
      <PullQuote
        bg="cream"
        size="md"
        after={
          <p>
            That&apos;s why we started Wameir: to be a buyer founders are comfortable
            handing them to.
          </p>
        }
      >
        Selling your company means handing over your employees, your clients and{" "}
        <span className="g">your name.</span>
      </PullQuote>

      {/* Positive statement of how we buy (§5.2 — no fund/PE contrast, §6 rule 1) */}
      <Section bg="paper">
        <div className="wrap">
          <div className="split">
            {/* The label and the line under it used to be a <span> and a <p>,
                so the section had no heading at all and the two ran together
                as one string ("How we buyWe run what we buy."). The line is
                now the real <h2>; the label is marked presentational so it
                isn't read as part of it. */}
            <div className="split__label">
              <span className="eyebrow" aria-hidden="true">
                How we buy
              </span>
              <h2 className="kicker">We run what we buy.</h2>
            </div>
            <div className="split__body">
              <p>
                We buy with our own money and money from people who know us, and we
                run every company ourselves. What already makes your company work stays. What we
                add is support behind your team: <strong>better systems</strong> for
                billing, portals and reporting.
              </p>
              <p>
                Some founders want to retire soon. Others want to stay on for a while.
                Either works.
              </p>
              <Link className="teaser__link" href="/faq">
                Common questions from founders <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* How it works: the whole process, stage by stage (#how-it-works). */}
      <SellerProcess />

      {/* Audit v5 D-9: the "Why founders choose Wameir / What you can count on"
          band was cut. Its three cards (Owners who stay, Preserve your legacy,
          Local teams stay local) repeated the Home tiles word for word, and sat
          immediately after the five-stage process that already covers all three
          in far more detail. Home's tiles now link to #how-it-works. */}

      <ContactSection
        source="/selling"
        audience="founder"
        intro="If a sale is somewhere on your horizon, now is a good time to talk."
        heading={
          <>
            Let&apos;s start the <span className="it">conversation.</span>
          </>
        }
      />
    </>
  );
}
