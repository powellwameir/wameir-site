import Link from "next/link";
import Section from "@/components/Section";
import DualCTA from "@/components/DualCTA";
import ContactSection from "@/components/ContactSection";
import Icon, { type IconName } from "@/components/Icon";
import Picture from "@/components/Picture";
import Headshot from "@/components/Headshot";
import BenefitsCarousel from "@/components/BenefitsCarousel";
import { DISCLAIMER } from "@/lib/content";
import { TEAM } from "@/lib/team";

// Resident / board track (§5.1). Each item: icon → H3 → plain line.
// Group A first (easy-to-live-with), then B (money back), then C (stronger communities).
const TRACK: {
  head: string;
  items: { icon: IconName; title: string; line: string; pocket?: string }[];
}[] = [
  {
    head: "An association that's easy to live with",
    items: [
      {
        icon: "responsive",
        title: "Reliable execution, responsive service",
        line: "When you ask a question or report a problem, you get an answer — promptly, and consistently, not only when someone happens to have time. We are building the systems and staffing to make responsiveness the norm rather than the exception.",
        pocket: "A management office that responds.",
      },
      {
        icon: "billing",
        title: "Simple, transparent billing",
        line: "Dues, statements, and payments presented plainly and handled online, so it is always clear what you owe and why — without cryptic line items or a phone call to decode a charge.",
        pocket: "Always clear what you're paying, and why.",
      },
      {
        icon: "clarity",
        title: "Financial clarity",
        line: "Budgets, reserves, and spending you can actually see. How the money is used and how decisions are made should be open to the people they affect — because trust in an association begins with books you can read.",
        pocket: "An association you can see into.",
      },
    ],
  },
  {
    head: "Money back in your pocket",
    items: [
      {
        icon: "taxes",
        title: "Lower property taxes",
        line: "We intend to protest every home's assessment each year — the kind of appeal that keeps a tax bill fair but that few homeowners have the time or expertise to pursue. Handled well across an entire community, it returns real money on a bill you would otherwise simply pay.",
        pocket: "A refund you'd never have chased yourself.",
      },
      {
        icon: "maintenance",
        title: "Smarter preventive maintenance",
        line: "Simple sensors that catch a slow leak, a freeze risk, or a failing water heater early — while it is still an inexpensive repair rather than a flooded floor and an insurance claim. The aim is to prevent the costly problem, not manage its aftermath.",
        pocket: "The repair that never has to happen.",
      },
      {
        icon: "insurance",
        title: "Lower insurance costs",
        line: "A home that is monitored and well-maintained should cost less to insure. We want to turn that into a measurable reduction in your premium — savings that show up where you can feel them, not just in principle.",
        pocket: "Lower premiums for doing nothing extra.",
      },
    ],
  },
  {
    head: "Stronger communities",
    items: [
      {
        icon: "board-tools",
        title: "Better tools for your board",
        line: "Serving on a board should not mean living in email threads and PDF attachments. We want to give boards a clear, single view of finances, requests, and decisions — so volunteers can govern well without it consuming their time.",
        pocket: "Board service that respects your time.",
      },
      {
        icon: "technology",
        title: "Technology that works",
        line: "Portals that load, payments that clear, requests that are never lost. The unglamorous commitment: the technology should do its job quietly and reliably, so you rarely have to think about it at all.",
        pocket: "Software that stays out of your way.",
      },
    ],
  },
];

const SELLER_TRIO: { icon: IconName; title: string; line: string }[] = [
  {
    icon: "long-term",
    title: "Long-term ownership",
    line: "We invest our own capital and plan to own the businesses we acquire for the long term.",
  },
  {
    icon: "legacy",
    title: "Preserve your legacy",
    line: "We build on what already makes your company work rather than replacing it.",
  },
  {
    icon: "local-teams",
    title: "Local teams stay local",
    line: "The people and relationships that serve your communities stay right where they are.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---- Hero — Houston skyline behind a navy scrim (§4A req 2) ---- */}
      <header className="hero">
        <Picture
          base="/img/hero-houston-skyline"
          widths={[1000, 1600, 2000, 2560]}
          sizes="100vw"
          alt="Downtown Houston skyline at golden hour"
          width={2560}
          height={1451}
          eager
          className="hero__bg"
          imgClassName="hero__bgimg"
        />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="wrap">
          <p className="eyebrow eyebrow-gold-light hero-reveal">
            Wameir &middot; Greater Houston
          </p>
          <h1 className="t-hero hero-reveal hero-reveal--2">
            Community management,
            <br />
            <span className="accent-italic">done right.</span>
          </h1>
          {/* TODO(§15 #10): confirm final hero supporting line + sub-paragraph. */}
          <p className="hero__sub font-display hero-reveal hero-reveal--3">
            Modern tools. Optimized service. Elevated communities.
          </p>
          <p className="hero__para hero-reveal hero-reveal--3">
            We acquire exceptional HOA management companies and invest in modern
            technology, stronger teams, and better operations — creating better
            experiences for homeowners, stronger businesses for employees, and
            lasting legacies for founders.
          </p>
          <div className="hero__actions hero-reveal hero-reveal--3">
            <DualCTA onDark />
          </div>
        </div>
      </header>

      {/* ---- Resident / board track (cream) — icons replace 01–06 ---- */}
      <Section bg="cream" id="communities">
        <div className="wrap">
          <div className="track__header">
            <div className="track__intro">
              <span className="eyebrow">For your community</span>
              <h2 className="t-h2">
                What we&apos;re working toward in every community.
              </h2>
              <p>
                We are early, so these are goals rather than guarantees — the standard
                we hold ourselves to. Each one has to save a household real money or
                real effort, or it does not belong here.
              </p>
              {/* Early-stage disclaimer, prominent (§6 rule 2, §7 verbatim). */}
              <p className="track__disclaimer">{DISCLAIMER}</p>
            </div>
            {/* Warm human anchor (§4A req 3) — faces not identifiable; kept that way. */}
            <Picture
              base="/img/community-parent-child"
              widths={[640, 960, 1280]}
              sizes="(max-width: 880px) 100vw, 42vw"
              alt="A parent carrying their young child through a Houston neighborhood"
              width={1280}
              height={1920}
              className="track__photo"
              imgClassName="track__photo-img"
            />
          </div>

          <BenefitsCarousel groups={TRACK} />
        </div>
      </Section>

      {/* ---- Approach teaser (paper) ---- */}
      <Section bg="paper">
        <div className="wrap">
          <div className="split">
            <div className="split__label">
              <span className="eyebrow">Our approach</span>
              <p className="kicker">We&apos;re operators, in it for the long term.</p>
            </div>
            <div className="split__body">
              <p>
                We acquire exceptional HOA management companies with our own capital
                and operate them ourselves. Our goal is to build{" "}
                <strong>stronger ones</strong> — putting capital behind the people,
                technology, and relationships that make a community better every year.
              </p>
              <Link className="teaser__link" href="/approach">
                Read our approach <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ---- Seller teaser (cream) + Why founders choose Wameir trio ---- */}
      <Section bg="cream">
        <div className="wrap">
          <div className="track__intro">
            <span className="eyebrow">Thinking about selling?</span>
            <h2 className="t-h2">You built it. We&apos;ll keep building it.</h2>
            <p>
              If you&apos;ve spent years running a management company and you care
              what happens to it next, we should talk.
            </p>
          </div>
          <div className="trio">
            {SELLER_TRIO.map((c) => (
              <div className="card" key={c.title}>
                <span className="card__icon">
                  <Icon name={c.icon} size={26} />
                </span>
                <h3>{c.title}</h3>
                <p>{c.line}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link className="btn btn--line-ink" href="/selling">
              Why founders choose Wameir
            </Link>
          </div>
        </div>
      </Section>

      {/* ---- Who's behind it teaser (navy) ---- */}
      <Section bg="navy">
        <div className="wrap">
          <div className="split">
            <div className="split__label">
              <span className="eyebrow eyebrow-gold-light">Who&apos;s behind it</span>
              <p className="kicker">
                Experienced operators, guided by an industry veteran.
              </p>
            </div>
            <div className="split__body">
              <p style={{ color: "var(--cream-70)" }}>
                We started Wameir because we believe community management can be
                better. We&apos;re putting our own capital in, and we&apos;re here to
                run these companies for the long term.
              </p>
            </div>
          </div>
          <div className="who-grid">
            {TEAM.map((m) => (
              <div className="who-cell" key={m.key}>
                <Headshot member={m} />
                <div className="mono">{m.kind}</div>
                <h3 style={{ color: "#fff" }}>{m.name}</h3>
                <div className="role" style={{ color: "var(--cream-70)" }}>
                  {m.role}
                </div>
                <p style={{ color: "#fff" }}>{m.teaserLine}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link className="btn btn--line-light" href="/team">
              Meet the team
            </Link>
          </div>
        </div>
      </Section>

      {/* ---- Contact (navy, echoes hero) ---- */}
      <ContactSection source="/" />
    </>
  );
}
