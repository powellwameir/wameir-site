import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Section from "@/components/Section";
import ContactSection from "@/components/ContactSection";
import Icon, { type IconName } from "@/components/Icon";
import { WeirWatermark } from "@/components/WeirLattice";
import PullQuote from "@/components/PullQuote";
import ManagerTimeSection from "@/components/ManagerTimeSection";
import PlatformBenefits from "@/components/PlatformBenefits";

export const metadata: Metadata = pageMetadata({
  path: "/approach",
  title: "Our Approach",
  description:
    "We operate the HOA management companies we buy and build them for the long term, investing in people, technology and relationships that pay off over years.",
});

const INVEST: { icon: IconName; title: string; line: string }[] = [
  {
    icon: "local-teams",
    title: "People, first",
    line: "Local teams run good communities. We give them better tools, better systems and support, and community managers stay close to the communities they serve.",
  },
  {
    icon: "technology",
    title: "Technology that removes friction",
    line: "Software that makes an association faster to deal with and easier to understand, for residents, boards and the managers running the day-to-day. It should work well enough that nobody has to think about it.",
  },
  {
    icon: "long-term",
    title: "Relationships that last",
    line: "We expect to serve every community we take on for a long time, and we treat boards, residents and founders accordingly.",
  },
];

export default function ApproachPage() {
  return (
    <>
      <header className="page-header">
        <WeirWatermark className="page-header__watermark" />
        <div className="wrap">
          <span className="eyebrow eyebrow-gold-light">Our approach</span>
          <h1 className="font-display">
            We operate what we buy, and we build{" "}
            <span className="accent-italic">for the long term.</span>
          </h1>
          <p className="lede">
            We acquire established HOA management companies in the Houston area with
            our own capital, backed by friends and family, and we run them ourselves.
          </p>
        </div>
      </header>

      <Section bg="cream">
        <div className="wrap">
          <div className="split">
            <div className="split__label">
              <span className="eyebrow">Why the long horizon</span>
              <p className="kicker">
                An owner who stays invests in what pays off slowly.
              </p>
            </div>
            <div className="split__body">
              <p>
                We plan to own these companies for decades, and that shapes{" "}
                <strong>nearly every decision we make</strong>.
              </p>
              <p>
                An owner who stays is the one who lives with the results. So we spend on
                what pays off over years: the people who run the company, the service
                residents notice, and technology that keeps improving. We set budgets for
                the company we want to be running a decade from now.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="paper">
        <div className="wrap">
          <div className="track__intro">
            <span className="eyebrow">What we invest in</span>
            <h2 className="t-h2">Where the long term shows up.</h2>
          </div>
          <div className="trio">
            {INVEST.map((c) => (
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

      {/* The technology behind it: each piece of the platform and what it does
          for residents, boards and local teams. Navy, between the paper and
          cream bands. */}
      <PlatformBenefits />

      {/* What the automation is for — the manager's week, before and after. */}
      <ManagerTimeSection />

      {/* How we think about it — the page's navy pull-quote band (§4A). */}
      <PullQuote
        bg="navy"
        size="md"
        eyebrow="How we think about it"
        after={
          <p>
            Communities get easier to live in, homes are better looked after, and the
            business lasts. Each of those helps the others.
          </p>
        }
      >
        A stronger management company makes{" "}
        <span className="g">everything it touches stronger.</span>
      </PullQuote>

      <Section bg="cream">
        <div className="wrap">
          <p className="lead-statement" style={{ maxWidth: "44ch" }}>
            This is how we intend to run <span className="g">every company we own</span>,
            and we expect to be held to it.
          </p>
        </div>
      </Section>

      <ContactSection
        source="/approach"
        audience="board"
        intro="Want to know how we'd run a company, or what it could mean for your community? Ask us."
        heading={
          <>
            Curious what this could mean for your <span className="it">community?</span>
          </>
        }
      />
    </>
  );
}
