import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import Section from "@/components/Section";
import Arrow from "@/components/Arrow";
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
    "We run the HOA management companies we buy and plan to keep them, investing in people, technology and relationships that pay off over years.",
});

const INVEST: { icon: IconName; title: string; line: string }[] = [
  {
    icon: "local-teams",
    title: "People, first",
    line: "Local teams run good communities. We give them better tools and support, and our managers stay close to the neighborhoods they know.",
  },
  {
    icon: "technology",
    title: "Technology that empowers",
    line: "We use software to make an association faster to deal with and easier to understand for residents, boards, and the managers running day-to-day operations. Technology should augment what people do, not replace them.",
  },
  {
    icon: "long-term",
    title: "Relationships that last",
    line: "We will continue to serve each community and nurture long-lasting relationships. That is why we do not treat a board or a founder like a transaction.",
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
            We run what we buy, and we plan to keep it.
          </h1>
          <p className="lede">
            We buy established HOA management companies around Houston, then run
            them ourselves.
          </p>
        </div>
      </header>

      <Section bg="cream">
        <div className="wrap">
          <div className="split">
            <div className="split__label">
              <span className="eyebrow">Our commitment</span>
              <h2 className="kicker">
                We invest in people first, then give them the tools to do their jobs
                well.
              </h2>
            </div>
            <div className="split__body">
              <p>
                Our communities deserve management companies that treat their residents,
                boards, and employees with respect. That starts with investing in the
                people who show up every day. We give them better tools, stronger support,
                and technology that makes their work easier instead of replacing them.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* The technology behind it: three layers and what each does for
          residents, boards and local teams. */}
      <PlatformBenefits />

      {/* Where the time goes: the manager's week, today and what we're
          building toward. */}
      <ManagerTimeSection />

      {/* What we invest in: a recap of the two sections above, so it follows
          them rather than previewing them (audit v5, E-3). */}
      <Section bg="paper">
        <div className="wrap">
          <div className="track__intro">
            <span className="eyebrow">What we invest in</span>
            <h2 className="t-h2">Our commitment to people and communities.</h2>
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

      {/* How we think about it: the page's pull-quote band (§4A), on cream so
          it doesn't run into the navy contact band. It ends on the hinge to the
          community goals. */}
      <PullQuote
        bg="cream"
        size="md"
        eyebrow="How we think about it"
        after={
          <>
            <p>
              Communities get easier to live in, homes are better looked after, and the
              business lasts. Each of those helps the others.
            </p>
            <Link className="teaser__link" href="/working-toward">
              What that means for your community <Arrow />
            </Link>
          </>
        }
      >
        A stronger management company makes{" "}
        <span className="g">everything it touches stronger.</span>
      </PullQuote>

      <ContactSection
        source="/approach"
        audience="board"
        intro="Ask us how we would run your company, or what we would change in your community."
        heading={
          <>
            Curious what this could mean for your <span className="it">community?</span>
          </>
        }
      />
    </>
  );
}
