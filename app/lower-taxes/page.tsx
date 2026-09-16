import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Section from "@/components/Section";
import LoopGrid, { type LoopStep } from "@/components/LoopGrid";
import LimitsBand from "@/components/LimitsBand";
import ContactSection from "@/components/ContactSection";
import MoreGoals from "@/components/MoreGoals";
import ScaleFunnelDiagram from "@/components/diagrams/ScaleFunnelDiagram";
import { WeirWatermark } from "@/components/WeirLattice";

export const metadata: Metadata = pageMetadata({
  path: "/lower-taxes",
  title: "Lower Property Taxes",
  description:
    "The thinking behind a community-wide property-tax appeal: what isn't worth doing for one household becomes worth doing across hundreds. A goal Wameir is working toward, not a service running today.",
});

const STEPS: LoopStep[] = [
  {
    n: "01 · Review",
    icon: "doc-search",
    title: "Check every assessment",
    body: "Each home's assessed value is compared against genuinely comparable properties nearby — the same evidence an appraisal district uses, gathered once for the whole community.",
  },
  {
    n: "02 · File",
    icon: "doc-file",
    title: "Protest on your behalf",
    body: "For every enrolled home, the appeal is prepared and filed the same way, on time, every year — the deadline never missed, the paperwork never skipped.",
  },
  {
    n: "03 · Repeat",
    icon: "long-term",
    title: "Every year, automatically",
    body: "Assessments reset annually, so the appeal isn't one-and-done. Filing every year keeps values honest over time, without you having to remember or re-learn the process.",
  },
];

export default function LowerTaxesPage() {
  return (
    <>
      <header className="page-header">
        <WeirWatermark className="page-header__watermark" />
        <div className="wrap">
          <span className="eyebrow eyebrow-gold-light">Money back in your pocket</span>
          <h1 className="font-display">
            Lower property taxes,{" "}
            <span className="accent-italic">done for the whole community.</span>
          </h1>
          <p className="lede">
            Every year, homes across a community are over-assessed and quietly overpay.
            The fix — protesting the assessment — is something almost any homeowner is
            entitled to do, and almost no one does. Our aim is to change that by doing it
            for everyone, at once.
          </p>
          <p className="track__disclaimer track__disclaimer--sm">
            Wameir is early-stage. This explains the thinking behind the goal — how a
            community-wide tax-appeal effort would work — not a service running today.
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
                The appeal that finally gets filed —{" "}
                <span className="g">for every home, every year.</span>
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
              <h2 className="vsplit__title">The scale argument</h2>
              <p className="vsplit__body">
                Any homeowner can protest their assessment. Almost none do — for a single
                household, gathering comparable-value evidence, learning the process, and
                meeting the deadline rarely feels worth it against an uncertain result.
                So most people simply pay whatever number arrives.
              </p>
              <p className="vsplit__body">
                Across a whole community, that math inverts. The same appeal becomes{" "}
                <strong>one standardized process</strong>: the evidence pulled once, the
                filings prepared the same way for every home, the deadline handled
                centrally. The effort that stopped one household disappears when it&apos;s
                spread across hundreds.
              </p>
              <p className="vsplit__payoff">
                What isn&apos;t worth doing alone becomes worth doing together.
              </p>
            </div>
            <div className="vsplit__vis">
              <ScaleFunnelDiagram />
            </div>
          </div>
        </div>
      </Section>

      <LimitsBand heading="What we can and can't promise">
        Not every appeal succeeds, and no one can promise a specific reduction —
        assessments and outcomes vary from home to home and year to year. What a
        community-wide effort can commit to is that the appeal actually gets filed,
        correctly and on time, for every home that wants it. The value is in reliably
        doing the thing that otherwise doesn&apos;t get done. This is a goal we&apos;re
        working toward, not a service running today.
      </LimitsBand>

      <MoreGoals current="/lower-taxes" />

      <ContactSection
        source="/lower-taxes"
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
