import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Section from "@/components/Section";
import LoopGrid, { type LoopStep } from "@/components/LoopGrid";
import LimitsBand from "@/components/LimitsBand";
import ContactSection from "@/components/ContactSection";
import MoreGoals from "@/components/MoreGoals";
import { goalLink } from "@/lib/goals";
import RiskPricingDiagram from "@/components/diagrams/RiskPricingDiagram";
import { WeirWatermark } from "@/components/WeirLattice";

export const metadata: Metadata = pageMetadata({
  path: "/lower-insurance",
  title: "Lower Insurance Costs",
  description:
    "The thinking behind lower premiums earned honestly: a monitored home is a measurably lower-risk home, and insurance is priced on risk. A goal Wameir is working toward, not a service running today.",
});

const STEPS: LoopStep[] = [
  {
    n: "01 · Protect",
    icon: "shield-check",
    title: "Reduce the real risk",
    body: "The same monitoring that catches leaks and failures early makes a home measurably less likely to file the claims insurers care most about — water, freeze, and electrical.",
    // The monitoring is what earns the lower rate, so the dependency is linked.
    link: goalLink("Smarter preventive maintenance"),
  },
  {
    n: "02 · Show",
    icon: "chart-up",
    title: "Prove it, in the home's record",
    body: "A home that's actively watched and well-maintained has something most don't: evidence. That documented, lower-risk profile is what makes a better rate defensible rather than hopeful.",
  },
  {
    n: "03 · Save",
    icon: "card-down",
    title: "See it on the bill",
    body: "Our aim is to connect that lower risk to the coverage, so the savings show up where you can feel them — the premium — instead of staying a nice idea in principle.",
  },
];

export default function LowerInsurancePage() {
  return (
    <>
      <header className="page-header">
        <WeirWatermark className="page-header__watermark" />
        <div className="wrap">
          <span className="eyebrow eyebrow-gold-light">Money back in your pocket</span>
          <h1 className="font-display">
            Lower insurance costs,{" "}
            <span className="accent-italic">earned by a safer home.</span>
          </h1>
          <p className="lede">
            Insurance is one of the fastest-rising costs of owning a home. Our aim is to
            help bring it down the honest way — not with a coupon, but by making each
            home genuinely less risky to insure, and making sure that lower risk is
            recognized.
          </p>
          <p className="track__disclaimer track__disclaimer--sm">
            Wameir is early-stage. This explains the thinking behind the goal — how lower
            premiums would be earned — not a service running today.
          </p>
        </div>
      </header>

      <Section bg="navy-90">
        <div className="wrap">
          <LoopGrid
            label="How it would work"
            steps={STEPS}
            closer={
              <>
                A safer home should be a cheaper home to insure —{" "}
                <span className="g">and we want to make that real.</span>
              </>
            }
          />
        </div>
      </Section>

      <Section bg="cream">
        <div className="wrap">
          <div className="vsplit">
            <div>
              <span className="eyebrow">Why it works</span>
              <h2 className="vsplit__title">The risk-pricing argument</h2>
              <p className="vsplit__body">
                Insurance is priced on risk — that&apos;s the whole logic the industry
                already runs on. The failures that drive the most home claims are exactly
                the ones a monitored, well-kept home catches early: water, freeze,
                electrical.
              </p>
              <p className="vsplit__body">
                So a home that&apos;s actively watched is, measurably,{" "}
                <strong>a lower-risk home</strong> — and lower risk is the one thing
                insurers reliably reward. The opportunity isn&apos;t to argue for a
                discount; it&apos;s to make the reduced risk visible so the price can
                follow it down.
              </p>
              <p className="vsplit__payoff">
                Lower premiums for a home that looks after itself.
              </p>
            </div>
            <div className="vsplit__vis">
              <RiskPricingDiagram />
            </div>
          </div>
        </div>
      </Section>

      <LimitsBand heading="What we can and can't promise">
        Any discount depends on insurers, coverage, and factors outside our control, so
        we can&apos;t promise a specific number in advance. What we can do is make a home
        genuinely lower-risk and make that reduction visible — the honest basis for a
        better rate. Monitoring reduces risk; it doesn&apos;t remove it. This is a goal
        we&apos;re working toward, not a service running today.
      </LimitsBand>

      <MoreGoals current="/lower-insurance" />

      <ContactSection
        source="/lower-insurance"
        audience="resident"
        heading={
          <>
            Want this for your <span className="it">community?</span>
          </>
        }
        lead="Tell us about your community, and we'll reply personally."
      />
    </>
  );
}
