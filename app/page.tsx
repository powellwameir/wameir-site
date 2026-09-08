import Link from "next/link";
import Section from "@/components/Section";
import DualCTA from "@/components/DualCTA";
import ContactSection from "@/components/ContactSection";
import { type IconName } from "@/components/Icon";
import Picture from "@/components/Picture";
import Headshot from "@/components/Headshot";
import BenefitsCarousel from "@/components/BenefitsCarousel";
import { DISCLAIMER } from "@/lib/content";
import { TEAM } from "@/lib/team";

// Resident / board track (§5.1) — home summary: icon + title + one payoff line.
// Full reasoning for each lives on /working-toward (kept off the home page).
const TRACK: {
  head: string;
  items: { icon: IconName; title: string; pocket: string }[];
}[] = [
  {
    head: "An association that's easy to live with",
    items: [
      {
        icon: "responsive",
        title: "Reliable execution, responsive service",
        pocket: "A management office that responds.",
      },
      {
        icon: "billing",
        title: "Simple, transparent billing",
        pocket: "Always clear what you're paying, and why.",
      },
      {
        icon: "clarity",
        title: "Financial clarity",
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
        pocket: "A refund you'd never have chased yourself.",
      },
      {
        icon: "maintenance",
        title: "Smarter preventive maintenance",
        pocket: "The repair that never has to happen.",
      },
      {
        icon: "insurance",
        title: "Lower insurance costs",
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
        pocket: "Board service that respects your time.",
      },
      {
        icon: "technology",
        title: "Technology that works",
        pocket: "Software that stays out of your way.",
      },
    ],
  },
];

// Home seller teaser — image tiles (visual-first); full detail lives on /selling.
const SELLER_TILES: { base: string; title: string; alt: string }[] = [
  {
    base: "/img/seller-longterm",
    title: "Long-term ownership",
    alt: "A home lit at dusk in a quiet neighborhood",
  },
  {
    base: "/img/seller-legacy",
    title: "Preserve your legacy",
    alt: "A craftsperson's hands measuring a piece of woodwork",
  },
  {
    base: "/img/seller-local",
    title: "Local teams stay local",
    alt: "A neon Texas sign above a local storefront",
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
          {/* TODO(§15 #10): confirm final hero supporting line. */}
          <p className="hero__sub font-display hero-reveal hero-reveal--3">
            Modern tools. Optimized service. Elevated communities.
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
              <Link className="teaser__link" href="/working-toward">
                The thinking behind these <span aria-hidden="true">→</span>
              </Link>
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
                We buy HOA management companies with our own capital, operate them
                ourselves, and build them for the <strong>long term</strong>.
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
          <div className="tile-grid">
            {SELLER_TILES.map((t) => (
              <Link className="tile" href="/selling" key={t.title}>
                <Picture
                  base={t.base}
                  widths={[800, 1200]}
                  sizes="(max-width: 880px) 100vw, 33vw"
                  alt={t.alt}
                  width={1200}
                  height={800}
                  className="tile__pic"
                  imgClassName="tile__img"
                />
                <span className="tile__title">{t.title}</span>
              </Link>
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
