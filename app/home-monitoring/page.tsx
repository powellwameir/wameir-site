import type { Metadata } from "next";
import Section from "@/components/Section";
import LoopGrid, { type LoopStep } from "@/components/LoopGrid";
import LimitsBand from "@/components/LimitsBand";
import ContactSection from "@/components/ContactSection";
import MoreGoals from "@/components/MoreGoals";
import Icon, { type IconName } from "@/components/Icon";
import HouseSectionDiagram from "@/components/diagrams/HouseSectionDiagram";
import { WeirWatermark } from "@/components/WeirLattice";

export const metadata: Metadata = {
  title: "Smarter Preventive Maintenance",
  description:
    "The long-term vision for home monitoring: a home that keeps its own records, watches its own vital signs, and helps you act before small problems become big ones. A goal Wameir is working toward, not a service running today.",
};

const STEPS: LoopStep[] = [
  {
    n: "01 · Know",
    icon: "home-record",
    title: "Your home, on the record",
    body: "Every major system — roof, HVAC, water heater, plumbing, foundation — with its age and expected life, in one place. The manual the house never came with.",
    example: "“Your water heater is 11 years old — near the end of its typical life.”",
  },
  {
    n: "02 · Watch",
    icon: "droplet-watch",
    title: "Quiet monitoring",
    body: "Simple sensors keep an eye on the things that cause the worst damage — water, humidity, temperature, electrical — and alert you the moment something's off.",
    example: "“Moisture detected under the kitchen sink — 2:14 AM.”",
  },
  {
    n: "03 · Act",
    icon: "dispatch",
    title: "The right help, with context",
    body: "When something needs a professional, you see who's genuinely suited to your home and problem — with fair-price guidance up front, before you make a single call.",
    example: "“3 plumbers who know 1970s pier-and-beam homes in your area.”",
  },
];

const WATCHLIST: { icon: IconName; label: string; detail: string }[] = [
  {
    icon: "maintenance",
    label: "Water & leaks",
    detail:
      "Under sinks, near the heater, behind the washer — the top cause of home claims.",
  },
  {
    icon: "thermometer",
    label: "Temperature & humidity",
    detail: "The conditions behind mold, HVAC strain, and rare-freeze pipe bursts.",
  },
  {
    icon: "bolt",
    label: "Electrical faults",
    detail: "Arc faults and failing wiring — quiet warning signs before a fire.",
  },
  {
    icon: "foundation",
    label: "Foundation & soil",
    detail: "Houston's clay soil moves — early signs before cracks become structural.",
  },
];

export default function HomeMonitoringPage() {
  return (
    <>
      <header className="page-header">
        <WeirWatermark className="page-header__watermark" />
        <div className="wrap">
          <span className="eyebrow eyebrow-gold-light">Money back in your pocket</span>
          <h1 className="font-display">
            A home that <span className="accent-italic">looks after itself.</span>
          </h1>
          <p className="lede">
            Owning a home means inheriting a complex machine with no manual — systems you
            can&apos;t see, problems you find too late, and repairs you can&apos;t judge.
            Our aim is to change that: a home that keeps its own records, watches its own
            vital signs, and helps you act before small problems become big ones.
          </p>
          <p className="track__disclaimer track__disclaimer--sm">
            Wameir is early-stage. This describes what we&apos;re working toward for the
            communities we serve — a goal, not a service running today.
          </p>
        </div>
      </header>

      <Section bg="navy-90">
        <div className="wrap">
          <LoopGrid
            label="How it works for you"
            steps={STEPS}
            closer={
              <>
                Know the home, watch the home, act early — so the expensive surprise{" "}
                <span className="g">becomes the small fix that never grew.</span>
              </>
            }
          />
        </div>
      </Section>

      <Section bg="cream">
        <div className="wrap">
          <div className="vsplit">
            <div>
              <span className="eyebrow">What it keeps an eye on</span>
              <h2 className="vsplit__title">
                The problems that cost the most, caught first.
              </h2>
              <p className="vsplit__body">
                Most catastrophic home damage starts small and silent. These are the
                things worth watching — the ones where a few dollars of warning prevents
                thousands in repair.
              </p>
              <ul className="watchlist">
                {WATCHLIST.map((w) => (
                  <li key={w.label}>
                    <span className="watchlist__ic" aria-hidden="true">
                      <Icon name={w.icon} size={20} />
                    </span>
                    <span className="watchlist__t">
                      <strong>{w.label}</strong>
                      <span>{w.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="vsplit__vis">
              <HouseSectionDiagram />
            </div>
          </div>
        </div>
      </Section>

      <LimitsBand heading="What this is — and isn't">
        Monitoring reduces risk; it doesn&apos;t remove it, and it only helps with what
        it can detect. Your home&apos;s information is yours — the point is to protect
        you and help you make good decisions, not to watch over you. Like everything
        here, this is what we&apos;re building toward, not a service running today.
      </LimitsBand>

      <MoreGoals current="/home-monitoring" />

      <ContactSection
        source="/home-monitoring"
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
