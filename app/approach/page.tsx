import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactSection from "@/components/ContactSection";
import { WeirWatermark, WeirBaseline } from "@/components/WeirLattice";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "By building stronger HOA management companies, Wameir creates communities that are easier to live in, more valuable to own, and better for everyone they serve.",
};

export default function ApproachPage() {
  return (
    <>
      <header className="page-header">
        <WeirWatermark className="page-header__watermark" />
        <div className="wrap">
          <span className="eyebrow eyebrow-gold-light">Our approach</span>
          <h1 className="font-display">
            Stronger companies make <span className="accent-italic">stronger communities.</span>
          </h1>
          <p className="lede">
            By building stronger HOA management companies, we&apos;re creating
            communities that are easier to live in, more valuable to own, and better
            for everyone they serve.
          </p>
        </div>
      </header>

      <Section bg="cream">
        <div className="wrap">
          <div className="split">
            <div className="split__label">
              <span className="eyebrow">What we do</span>
              <p className="kicker">Acquire, operate, and build.</p>
            </div>
            <div className="split__body">
              <p>
                We acquire exceptional HOA management companies with our own capital
                and operate them ourselves. Our goal is to build{" "}
                <strong>stronger ones</strong>.
              </p>
              <p>
                We put capital behind the people, the technology, and the
                relationships that make a community genuinely better year after year.
                That long-term commitment changes how we run things — we invest in the
                work that pays off over decades, not quarters.
              </p>
              <p>
                Great communities are built by great local teams. Our job is to give
                those teams the resources, tools, and support to do their best work.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Textured navy band so the philosophy copy isn't floating on plain cream (§4A). */}
      <Section bg="navy" className="invite">
        <WeirWatermark className="invite__watermark" />
        <div className="wrap">
          <p
            className="lead-statement"
            style={{ color: "#fff", maxWidth: "28ch" }}
          >
            We treat every community we take on as one we&apos;ll be proud to run for
            a <span style={{ color: "var(--gold-light)" }}>very long time.</span>
          </p>
        </div>
        <div style={{ height: 80, marginTop: 48 }} aria-hidden="true">
          <WeirBaseline />
        </div>
      </Section>

      <ContactSection source="/approach" audience="community" />
    </>
  );
}
