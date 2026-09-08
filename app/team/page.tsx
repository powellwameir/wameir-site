import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactSection from "@/components/ContactSection";
import { WeirWatermark, WeirMark } from "@/components/WeirLattice";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Experienced operators, guided by an industry veteran. Meet the people building Wameir.",
};

type Bio = {
  name: string;
  role: string;
  kind: "Co-founder" | "Advisor";
  paras: string[];
  gated?: boolean;
};

const BIOS: Bio[] = [
  {
    name: "Mitch Maurer",
    role: "Co-Founder, Finance & Growth",
    kind: "Co-founder",
    paras: [
      "Experience across finance, acquisitions, and strategic growth after helping scale one of the country's fastest-growing HOA management platforms.",
      "Focused on enduring businesses that invest in people, strengthen communities, and create lasting value for homeowners and founders.",
    ],
  },
  {
    name: "Will Powell",
    role: "Co-Founder, Technology & Operations",
    kind: "Co-founder",
    paras: [
      "Leads technology strategy, drawing on industry-leading consulting experience to modernize operations and simplify community management.",
      "Focused on improving the day-to-day experience for residents, boards, and local teams.",
    ],
  },
  {
    name: "Bob Green",
    role: "Strategic Advisor",
    kind: "Advisor",
    gated: true,
    paras: [
      "Industry veteran with decades of experience in community management.",
      // TODO(§15 #2): full bio, title, and photo gated on Bob's written consent
      // and agreed framing ("Industry Veteran" vs. a named former employer).
    ],
  },
];

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
            We started Wameir because we believe community management can be better —
            something residents, boards, and local teams are genuinely glad to have.
          </p>
        </div>
      </header>

      <Section bg="cream">
        <div className="wrap">
          <div className="who-grid">
            {BIOS.map((b) => (
              <article className="who-cell" key={b.name}>
                <div className="who-photo">
                  <WeirMark size={44} />
                  {/* TODO(§15 #6): real headshots on one uniform navy backdrop. */}
                  <span className="who-photo__note">Headshot to come</span>
                </div>
                {b.gated && <span className="gated">⚠ Pending consent</span>}
                <div className="mono">{b.kind}</div>
                <h3>{b.name}</h3>
                <div className="role">{b.role}</div>
                {b.paras.map((p, i) => (
                  <p key={i} style={{ marginTop: i === 0 ? 0 : 12 }}>
                    {p}
                  </p>
                ))}
              </article>
            ))}
          </div>
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
