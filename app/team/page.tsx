import type { Metadata } from "next";
import { pageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Section from "@/components/Section";
import ContactSection from "@/components/ContactSection";
import Headshot from "@/components/Headshot";
import FillText from "@/components/FillText";
import Arrow from "@/components/Arrow";
import { WeirWatermark } from "@/components/WeirLattice";
import { TEAM } from "@/lib/team";

export const metadata: Metadata = pageMetadata({
  path: "/team",
  title: "Team",
  description:
    "The two founders who will run the companies themselves, and the advisor guiding them. Meet the people building Wameir.",
});

/*
 * Person structured data for each team member. Deliberately minimal, matching
 * the bios: name, Wameir role and personal LinkedIn only. No past employers,
 * credentials or figures, and no photos, so nothing is asserted beyond the page.
 */
const PEOPLE = {
  "@context": "https://schema.org",
  "@graph": TEAM.map((m) => ({
    "@type": "Person",
    name: m.name,
    jobTitle: m.role,
    worksFor: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    ...(m.linkedin ? { sameAs: [m.linkedin] } : {}),
  })),
};

export default function TeamPage() {
  return (
    <>
      <header className="page-header">
        <WeirWatermark className="page-header__watermark" />
        <div className="wrap">
          <span className="eyebrow eyebrow-gold-light">Who&apos;s behind it</span>
          <h1 className="font-display">
            Two founders, and the advisor who taught one of them the business.
          </h1>
          <p className="lede">
            We started Wameir because we think community management can be better,
            and the way to show it is to own the work ourselves. We put in our own
            money, keep the local teams, and stay.
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
                <h3>{m.name}</h3>
                <div className="role">{m.role}</div>
                {m.paras.map((p, i) => (
                  <p key={i} style={{ marginTop: i === 0 ? 0 : 12 }}>
                    <FillText text={p} />
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
        </div>
      </Section>

      <JsonLd data={PEOPLE} />

      <ContactSection
        source="/team"
        audience="founder"
        eyebrow="Get in touch"
        intro="Send a note. One of us will write back."
        heading={
          <>
            Want to <span className="it">talk?</span>
          </>
        }
      />
    </>
  );
}
