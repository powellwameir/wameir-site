import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactSection from "@/components/ContactSection";
import Headshot from "@/components/Headshot";
import { WeirWatermark } from "@/components/WeirLattice";
import { TEAM, TEAM_HEADLINE, PROOF, CAPITAL_LINE, bio } from "@/lib/team";
import { isFilled } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the people building Wameir: two operators who run the companies they buy, and a longtime mentor.",
};

export default function TeamPage() {
  return (
    <>
      <header className="page-header">
        <WeirWatermark className="page-header__watermark" />
        <div className="wrap">
          <span className="eyebrow eyebrow-gold-light">Team</span>
          <h1 className="font-display">
            {TEAM_HEADLINE.lead}{" "}
            <span className="accent-italic">{TEAM_HEADLINE.accent}</span>
          </h1>
          <p className="lede">
            We started Wameir because we believe community management can be better,
            and that the way to prove it is to do the work ourselves. That means
            experienced local teams, better technology, disciplined operations, and
            owners who plan to stay.
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
                {bio(m).map((p, i) => (
                  <p key={i} style={{ marginTop: i === 0 ? 0 : 12 }}>
                    {p}
                  </p>
                ))}
              </article>
            ))}
          </div>
          {/* "By the numbers" proof strip and capital line: owner facts, hidden
              until filled (lib/team.ts). Styling is a placeholder for prompt 4. */}
          {PROOF.every((p) => isFilled(p.figure) && isFilled(p.label)) && (
            <div className="trio" style={{ marginTop: 64 }}>
              {PROOF.map((p) => (
                <div className="card" key={p.label}>
                  <h3>{p.figure}</h3>
                  <p>{p.label}</p>
                </div>
              ))}
            </div>
          )}
          {isFilled(CAPITAL_LINE) && (
            <p style={{ marginTop: 32 }}>{CAPITAL_LINE}</p>
          )}
          <p className="lead-statement" style={{ marginTop: 64, maxWidth: "42ch" }}>
            We&apos;d like to meet the people who built the companies we hope to run,
            and the <span className="g">boards they serve.</span>
          </p>
        </div>
      </Section>

      <ContactSection
        source="/team"
        audience="founder"
        eyebrow="Get in touch"
        lead="Tell us who you are and what you're thinking about."
        body="We'd rather meet you than describe ourselves. Send a note and one of us will reply."
        heading={
          <>
            Want to <span className="it">talk?</span>
          </>
        }
      />
    </>
  );
}
