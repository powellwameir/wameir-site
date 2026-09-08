import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactSection from "@/components/ContactSection";
import Headshot from "@/components/Headshot";
import { WeirWatermark } from "@/components/WeirLattice";
import { TEAM } from "@/lib/team";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Experienced operators, guided by an industry veteran. Meet the people building Wameir.",
};

export default function TeamPage() {
  return (
    <>
      <header className="page-header">
        <WeirWatermark className="page-header__watermark" />
        <div className="wrap">
          <span className="eyebrow eyebrow-gold-light">Our story</span>
          <h1 className="font-display">
            Experienced operators, guided by an{" "}
            <span className="accent-italic">industry veteran.</span>
          </h1>
          <p className="lede">
            We started Wameir because we believe community management can be
            meaningfully better — and that the way to prove it is to own the work, not
            advise on it. The industry is ready for a more modern approach:
            experienced local teams, supported by better technology, disciplined
            operations, and owners who plan to stay. By investing our own capital and
            operating every company we acquire, we are building businesses designed to
            strengthen their communities for decades.
          </p>
        </div>
      </header>

      <Section bg="cream">
        <div className="wrap">
          <div className="who-grid">
            {TEAM.map((m) => (
              <article className="who-cell" key={m.key}>
                <Headshot member={m} />
                {!m.photoConsent && (
                  <span className="gated">⚠ Pending consent</span>
                )}
                <div className="mono">{m.kind}</div>
                <h3>{m.name}</h3>
                <div className="role">{m.role}</div>
                {m.paras.map((p, i) => (
                  <p key={i} style={{ marginTop: i === 0 ? 0 : 12 }}>
                    {p}
                  </p>
                ))}
              </article>
            ))}
          </div>
          <p className="lead-statement" style={{ marginTop: 64, maxWidth: "42ch" }}>
            We are putting our own capital into this, and we intend to run these
            companies for a <span className="g">long time.</span> If that is the kind
            of owner you would want for your community — or your company — we would
            like to talk.
          </p>
        </div>
      </Section>

      <ContactSection
        source="/team"
        eyebrow="Get in touch"
        heading={
          <>
            Want to <span className="it">talk?</span>
          </>
        }
      />
    </>
  );
}
