import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import Section from "@/components/Section";
import Arrow from "@/components/Arrow";
import ContactSection from "@/components/ContactSection";
import SellerPoints from "@/components/SellerPoints";
import { SELLER_POINTS } from "@/lib/sellerPoints";
import PullQuote from "@/components/PullQuote";
import SellerProcess from "@/components/SellerProcess";
import { WeirWatermark } from "@/components/WeirLattice";

export const metadata: Metadata = pageMetadata({
  path: "/selling",
  title: "Thinking About Selling",
  description:
    "Selling your management company is a big decision. Wameir buys with its own capital, runs what it buys, and plans to own it for the long term.",
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
            A confidential conversation with operators who plan to own what they buy
            for the long term.
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

      {/* Positive operator statement (§5.2 — no fund/PE contrast, §6 rule 1) */}
      <Section bg="paper">
        <div className="wrap">
          <div className="split">
            <div className="split__label">
              <span className="eyebrow">How we buy</span>
              <p className="kicker">We run what we buy.</p>
            </div>
            <div className="split__body">
              <p>
                We buy with our own capital, backed by friends and family, and run every
                company ourselves. What already makes your company work stays. What we
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

      {/* Why founders choose Wameir — three icon cards (§5.2). Paper, so it
          alternates with the cream process band above. */}
      <Section bg="paper">
        <div className="wrap">
          <div className="track__intro">
            <span className="eyebrow">Why founders choose Wameir</span>
            <h2 className="t-h2">What you can count on.</h2>
          </div>
          <SellerPoints points={SELLER_POINTS} />
        </div>
      </Section>

      <ContactSection
        source="/selling"
        audience="founder"
        intro="If a sale is somewhere on your horizon, now is a good time to talk."
        lead="Tell us a little about your company, and we'll reply personally."
        heading={
          <>
            Let&apos;s start the <span className="it">conversation.</span>
          </>
        }
      />
    </>
  );
}
