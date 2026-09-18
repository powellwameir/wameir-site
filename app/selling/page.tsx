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

      {/* Why founders choose Wameir — three photo cards (§5.2). Paper, so it
          alternates with the cream process band above.

          Audit v5 D-9 cut this band: its three cards repeat the Home tiles word
          for word, and they sit after the process that covers all three in more
          detail. Restored by request, because cutting it left /selling with no
          photographs at all. The duplication D-9 named is real and unresolved;
          the fix is to give these cards seller-specific copy, not to delete the
          only images on the page. */}
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
        heading={
          <>
            Let&apos;s start the <span className="it">conversation.</span>
          </>
        }
      />
    </>
  );
}
