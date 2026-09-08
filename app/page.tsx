import Link from "next/link";
import Section from "@/components/Section";
import DualCTA from "@/components/DualCTA";
import ContactSection from "@/components/ContactSection";
import Icon, { type IconName } from "@/components/Icon";
import Picture from "@/components/Picture";
import Headshot from "@/components/Headshot";
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
        line: "Answers when you ask and things done when they should be — consistently, not occasionally.",
      },
      {
        icon: "billing",
        title: "Simple, transparent billing",
        line: "Dues, statements, and payments that are plain and online. Always clear what you owe and why.",
      },
      {
        icon: "clarity",
        title: "Financial clarity",
        line: "Where the money goes and how decisions get made, out in the open.",
      },
    ],
  },
  {
    head: "Money back in your pocket",
    items: [
      {
        icon: "taxes",
        title: "Lower property taxes",
        line: "Protest assessments each year so the tax bill stays fair and in check.",
        pocket: "A check you'd never have chased yourself.",
      },
      {
        icon: "maintenance",
        title: "Smarter preventive maintenance",
        line: "Simple sensors that flag a leak or a freeze early — the difference between a small part and a flooded floor.",
        pocket: "A repair that never happens.",
      },
      {
        icon: "insurance",
        title: "Lower insurance costs",
        line: "A home that's watched and well-kept should cost less to insure. We work to turn that into real money off the premium.",
        pocket: "Lower bills for doing nothing extra.",
      },
    ],
  },
  {
    head: "Stronger communities",
    items: [
      {
        icon: "board-tools",
        title: "Better board tools",
        line: "Clear reporting and simple workflows so boards can govern without the busywork.",
      },
      {
        icon: "technology",
        title: "Technology that works",
        line: "Software built for residents and managers, not a portal nobody wants to log into.",
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
                What we&apos;re working to bring to every community we serve.
              </h2>
              <p>
                These are the standards we hold ourselves to — for residents, boards,
                and the local teams who serve them.
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

          {TRACK.map((group) => (
            <div className="vgroup" key={group.head}>
              <div className="vgroup__head">{group.head}</div>
              {group.items.map((item) => (
                <div className="ventry" key={item.title}>
                  <span className="ventry__icon">
                    <Icon name={item.icon} size={30} />
                  </span>
                  <h3>{item.title}</h3>
                  <div>
                    <p>{item.line}</p>
                    {item.pocket && <span className="pocket">{item.pocket}</span>}
                  </div>
                </div>
              ))}
            </div>
          ))}
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
