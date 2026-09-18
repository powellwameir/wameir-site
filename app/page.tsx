import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata, SITE_DESCRIPTION } from "@/lib/seo";
import Section from "@/components/Section";
import DualCTA from "@/components/DualCTA";
import ContactSection from "@/components/ContactSection";
import Picture from "@/components/Picture";
import Arrow from "@/components/Arrow";
import Headshot from "@/components/Headshot";
import GoalIndex from "@/components/GoalIndex";
import { DISCLAIMER } from "@/lib/content";
import { TEAM } from "@/lib/team";
import { SELLER_POINTS } from "@/lib/sellerPoints";

// Home had no metadata export and silently inherited the root default. Set it
// explicitly so it gets a canonical and its own share card like every page.
export const metadata: Metadata = pageMetadata({
  path: "/",
  title: "Wameir | Community management, done right",
  description: SITE_DESCRIPTION,
  absoluteTitle: true,
});

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
            Greater Houston
          </p>
          <h1 className="t-hero hero-reveal hero-reveal--2">
            Community management,
            <br />
            <span className="accent-italic">done right.</span>
          </h1>
          {/* Audit v5 (G-10) replaced the owner-chosen three-beat line ("Better
              tools. Faster answers. Stronger communities.") with a plain
              statement of what Wameir does. FLAGGED FOR THE OWNER: the rhythm
              was a deliberate choice (§15 #10), but it never said what the
              company is, and the hero is where a seller decides to keep reading. */}
          <p className="hero__sub font-display hero-reveal hero-reveal--3">
            We buy HOA management companies in Greater Houston with our own money,
            and we run them ourselves.
          </p>
          <div className="hero__actions hero-reveal hero-reveal--4">
            <DualCTA onDark />
          </div>
        </div>
      </header>

      {/* ---- Seller teaser (cream) + Why founders choose Wameir trio. Leads the
          page: founders are the visitors who can act today. ---- */}
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
          {/* These three tiles used to land on /selling's "What you can count
              on" band, which repeated them verbatim. That band is gone (D-9);
              the five-stage process is what actually answers them, so that is
              where they point. */}
          <div className="tile-grid">
            {SELLER_POINTS.map((t) => (
              <Link className="tile" href="/selling#how-it-works" key={t.heading}>
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
                <span className="tile__title">
                  {t.heading} <Arrow />
                </span>
                <span className="tile__body">{t.body}</span>
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

      {/* ---- Approach teaser, set on the place band: the street grounds "local,
          one community at a time" while the quote gives the photo something to
          say. Previously these were two separate navy bands, one of them silent.
          The figure mirrors PullQuote's structure on purpose, so the existing
          .on-navy .pullquote__* rules style it with no new CSS. ---- */}
      <Section bg="navy" padded={false} className="image-band">
        <Picture
          base="/img/community-neighborhood"
          widths={[1000, 1600, 2000, 2560]}
          sizes="100vw"
          alt="A tree-lined residential street at golden hour"
          width={2560}
          height={1097}
          className="image-band__pic"
          imgClassName="image-band__img"
        />
        <div className="image-band__scrim" aria-hidden="true" />
        <div className="wrap">
          <figure className="pullquote__figure">
            <figcaption className="eyebrow eyebrow-gold-light">Our approach</figcaption>
            <blockquote className="pullquote__text pullquote__text--md">
              We run what we buy, and <span className="g">we&apos;re not leaving.</span>
            </blockquote>
            <div className="pullquote__after">
              {/* The hero now states what we buy and with whose money, so this
                  band says what that ownership changes instead of repeating it.
                  Deliberately not the same sentence as /approach's opening. */}
              <p>
                Which is why we spend on the things that take years to show up:
                the team, the service, the software.
              </p>
              <Link className="teaser__link" href="/approach">
                Read our approach <Arrow />
              </Link>
            </div>
          </figure>
        </div>
      </Section>

      {/* ---- Who's behind it teaser (cream) — light, so the page stops running
          navy from the approach band all the way into the footer. The portraits
          keep their navy cards, exactly as /team does. The .who-cell and .split
          rules already default correctly on a light ground, so the dark-ground
          inline colours are simply gone rather than replaced. ---- */}
      <Section bg="cream">
        <div className="wrap">
          <div className="split">
            <div className="split__label">
              <span className="eyebrow">Who&apos;s behind it</span>
              <p className="kicker">
                Two founders and an advisor who has done this before.
              </p>
            </div>
            <div className="split__body">
              <p>
                We started Wameir because we believe community management can be
                better, and we run the companies we buy ourselves.
              </p>
            </div>
          </div>
          <div className="who-grid">
            {TEAM.map((m) => (
              <div className="who-cell" key={m.key}>
                <Headshot member={m} />
                <h3>{m.name}</h3>
                <div className="role">{m.role}</div>
                <p>{m.paras[0]}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link className="btn btn--line-ink" href="/team">
              Meet the team
            </Link>
          </div>
        </div>
      </Section>

      {/* ---- Communities teaser (paper): all eight goals as the compact index,
          one disclaimer. Replaces three large cards, which hid the five goals a
          board asks about first. The three goals with a page of their own link
          straight to it; the reasoning for the rest lives on /working-toward. ---- */}
      <Section bg="paper" id="communities">
        <div className="wrap">
          <div className="track__header">
            <div className="track__intro">
              <span className="eyebrow">For communities</span>
              <h2 className="t-h2">
                What we&apos;re working toward in every community.
              </h2>
              <p>
                Each goal has to save a household money or time. If it doesn&apos;t, it
                comes off the list.
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

          <GoalIndex variant="home" />
          <Link className="teaser__link teaser__link--after" href="/working-toward">
            See all eight goals <Arrow />
          </Link>
        </div>
      </Section>

      {/* ---- Contact (navy, echoes hero) ---- */}
      <ContactSection source="/" audience="founder" />
    </>
  );
}
