import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Section from "@/components/Section";
import ContactSection from "@/components/ContactSection";
import Headshot from "@/components/Headshot";
import Arrow from "@/components/Arrow";
import { WeirWatermark } from "@/components/WeirLattice";
import { TEAM } from "@/lib/team";

export const metadata: Metadata = pageMetadata({
  path: "/team",
  title: "Team",
  description:
    "Experienced operators, guided by an industry veteran. Meet the people building Wameir.",
});

export default function TeamPage() {
  return (
    <>
      <header className="page-header">
        <WeirWatermark className="page-header__watermark" />
        <div className="wrap">
          <span className="eyebrow eyebrow-gold-light">Team</span>
          <h1 className="font-display">
            Experienced operators, guided by an{" "}
            <span className="accent-italic">industry veteran.</span>
          </h1>
          <p className="lede">
            We started Wameir because we think community management can be better,
            and the way to show it is to own the work ourselves. We put in our own
            capital, keep the experienced local teams, and give them better technology
            and operations. We plan to stay for decades.
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
                {m.linkedin && (
                  <a
                    className="teaser__link"
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener"
                    aria-label={`${m.name} on LinkedIn`}
                  >
                    LinkedIn <Arrow />
                  </a>
                )}
              </article>
            ))}
          </div>
          <p className="lead-statement" style={{ marginTop: 64, maxWidth: "42ch" }}>
            We&apos;re putting our own capital into this, and we plan to run these
            companies for a <span className="g">long time.</span> If that&apos;s the
            owner you&apos;d want for your company or your community, we&apos;d like to
            talk.
          </p>
        </div>
      </Section>

      <ContactSection
        source="/team"
        audience="founder"
        eyebrow="Get in touch"
        intro="Send a note. One of us will write back personally."
        lead="Send us a note. We'd like to meet you."
        heading={
          <>
            Want to <span className="it">talk?</span>
          </>
        }
      />
    </>
  );
}
