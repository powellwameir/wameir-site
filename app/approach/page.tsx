import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactSection from "@/components/ContactSection";
import Icon, { type IconName } from "@/components/Icon";
import { WeirWatermark } from "@/components/WeirLattice";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "We operate the HOA management companies we buy and build them for the long term — investing in people, technology, and relationships that compound over years.",
};

const INVEST: { icon: IconName; title: string; line: string }[] = [
  {
    icon: "local-teams",
    title: "People, first",
    line: "Great communities are run by great local teams. Our role is to give those teams better tools, better systems, and real support — not to replace what already works. Community managers stay close to the communities they serve.",
  },
  {
    icon: "technology",
    title: "Technology that removes friction",
    line: "We build software that makes an association faster to deal with and easier to understand — for residents, for boards, and for the people managing the day-to-day. The goal is quiet, reliable technology that does its job so no one has to think about it.",
  },
  {
    icon: "long-term",
    title: "Relationships over transactions",
    line: "Every community we take on is one we expect to serve for a long time. That shapes how we treat boards, residents, and the people who built the companies we acquire.",
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
            our own capital, and we run them ourselves.
          </p>
        </div>
      </header>

      <Section bg="cream">
        <div className="wrap">
          <div className="split">
            <div className="split__label">
              <span className="eyebrow">Why the long horizon</span>
              <p className="kicker">
                When you plan to hold a business, you invest differently.
              </p>
            </div>
            <div className="split__body">
              <p>
                We are not assembling a portfolio to resell. We are building companies
                we intend to own and improve for years — which changes{" "}
                <strong>nearly every decision we make</strong>.
              </p>
              <p>
                That long horizon is the whole point. When you plan to hold a business,
                you invest in the things that compound: the people who run it, the
                service residents actually feel, and the technology that makes both
                better over time. Rather than cut to hit a number, we would rather
                spend to build something that is genuinely stronger a decade from now.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="paper">
        <div className="wrap">
          <div className="track__intro">
            <span className="eyebrow">What we invest in</span>
            <h2 className="t-h2">Where the long term actually shows up.</h2>
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

      {/* How we think about it — textured navy band so the philosophy isn't floating (§4A). */}
      <Section bg="navy" className="invite">
        <WeirWatermark className="invite__watermark" />
        <div className="wrap">
          <span className="eyebrow eyebrow-gold-light">How we think about it</span>
          <p
            className="lead-statement"
            style={{ color: "#fff", maxWidth: "30ch", marginTop: 18 }}
          >
            Strengthen the management company and you strengthen everything it
            touches — which is why we treat it as{" "}
            <span style={{ color: "var(--gold-light)" }}>one job, not three.</span>
          </p>
          <p style={{ color: "var(--cream-70)", marginTop: 24, maxWidth: "60ch" }}>
            Communities become easier to live in, homes become more valuable to own,
            and the business itself becomes more durable. Those goals reinforce each
            other.
          </p>
        </div>
      </Section>

      <Section bg="cream">
        <div className="wrap">
          <p className="lead-statement" style={{ maxWidth: "44ch" }}>
            We are early in this work. What we have described here is the standard we
            are <span className="g">building toward</span>, and the way we intend to
            operate every company we own.
          </p>
        </div>
      </Section>

      <ContactSection source="/approach" audience="community" />
    </>
  );
}
