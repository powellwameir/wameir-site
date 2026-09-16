import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Fragment } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Icon from "@/components/Icon";
import Arrow from "@/components/Arrow";
import GoalIndex from "@/components/GoalIndex";
import DayInCommunitySection from "@/components/DayInCommunitySection";
import AlwaysOnSection from "@/components/AlwaysOnSection";
import { GROUPS, slugify, type Goal } from "@/lib/goals";
import ContactSection from "@/components/ContactSection";
import { WeirWatermark } from "@/components/WeirLattice";

export const metadata: Metadata = pageMetadata({
  path: "/working-toward",
  title: "For Communities: What We're Working Toward",
  description:
    "The reasoning behind each goal Wameir is working toward for its communities: mechanisms we can explain plainly, described as goals, not services running today.",
});

/*
 * Band colours per goal group. Set explicitly rather than alternating, so the
 * vision sections sitting between groups never leave two bands of the same
 * colour touching.
 */
const GROUP_BG = ["paper", "cream", "paper"] as const;

/** The goal sentences are written to follow a label; start them with a capital. */
const sentence = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

/*
 * One goal as a two-column row: the summary (icon, title, the goal, what we're
 * building toward) stays in view on the left while the reasoning scrolls on
 * the right. No "The goal:" / "What we're building toward:" labels: the goal
 * reads as the lead sentence and the payoff line is set apart by its type.
 * The id is the anchor the goal index links to.
 */
function GoalBlock({ g }: { g: Goal }) {
  return (
    <article className="goal" id={slugify(g.title)}>
      <div className="goal__summary">
        <span className="goal__icon" aria-hidden="true">
          <Icon name={g.icon} size={26} />
        </span>
        <h3 className="goal__title">{g.title}</h3>
        <p className="goal__goal">{sentence(g.goal)}</p>
        <p className="goal__toward">{sentence(g.toward)}</p>
        {/* The goals with a page of their own: the mechanism, argued in full.
            A card rather than a text link, so it isn't lost at the end of the
            summary. */}
        {g.link && (
          <Link className="bcard bcard--link goal__deep" href={g.link.href}>
            <span className="bcard__arrow">
              <Arrow />
            </span>
            <span className="goal__deep-title">Read the full write-up</span>
          </Link>
        )}
      </div>
      <div className="goal__reasoning">
        <div className="goal__block">
          <span className="goal__label">{g.whyLabel ?? "Why it's possible"}</span>
          {g.why.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {g.limit && (
          <div className="goal__block goal__block--limit">
            <span className="goal__label">The honest limit</span>
            <p>{g.limit}</p>
          </div>
        )}
      </div>
    </article>
  );
}

export default function WorkingTowardPage() {
  return (
    <>
      <header className="page-header">
        <WeirWatermark className="page-header__watermark" />
        <div className="wrap">
          <span className="eyebrow eyebrow-gold-light">For communities</span>
          <h1 className="font-display">What we&apos;re working toward</h1>
          <p className="lede">
            We are early. Wameir has not yet acquired its first company, so
            everything on this page is a goal, not a service running today. We are
            writing it down anyway, because the <em>reasoning</em> behind a promise
            matters as much as the promise, and because we want to be held to it.
          </p>
        </div>
      </header>

      {/* The rule */}
      <Section bg="cream">
        <div className="wrap">
          <p className="lead-statement" style={{ maxWidth: "30ch" }}>
            Every benefit has to save a household money or effort, or it{" "}
            <span className="g">doesn&apos;t belong here.</span>
          </p>
          <div className="goals-intro">
            <p>
              It has to be a measurable improvement for someone who lives in one of
              these communities. If we can&apos;t explain plainly why something works,
              we won&apos;t build it.
            </p>
            <p>
              The goals fall into three groups: an association that&apos;s easy to
              live with, money back in your pocket, and stronger communities.
              Here&apos;s the thinking behind each.
            </p>
          </div>

          {/* Jump links to every group and goal. */}
          <GoalIndex variant="page" />
        </div>
      </Section>

      {GROUPS.map((group, gi) => (
        <Fragment key={group.n}>
          <Section bg={GROUP_BG[gi]} id={slugify(group.head)} className="goal-group">
            <div className="wrap">
              <div className="goal-group__head">
                <span className="eyebrow">{group.goals.length} goals</span>
                <h2 className="t-h2">{group.head}</h2>
                <p className="goal-group__intro">{group.intro}</p>
              </div>
              <div className="goal-list">
                {group.goals.map((g) => (
                  <GoalBlock key={g.title} g={g} />
                ))}
              </div>
              {/* The index is several screens up by the end of a group. */}
              <a className="teaser__link goal-group__back" href="#all-goals">
                Back to all goals <Arrow direction="up" />
              </a>
            </div>
          </Section>

          {/* Each group is followed by the vision section that shows it, so the
              page alternates argument and picture rather than running as prose. */}
          {gi === 0 && <DayInCommunitySection />}
          {gi === 2 && <AlwaysOnSection />}
        </Fragment>
      ))}

      {/* Closing */}
      <Section bg="navy" className="invite">
        <WeirWatermark className="invite__watermark" />
        <div className="wrap">
          <div className="goals-closing">
            <p>
              None of this is delivered yet. What we hope this page shows is that each
              goal rests on a mechanism we can explain plainly: routine work automated
              so people can do the work that matters, per-home friction removed by
              working at community scale, cost asymmetries and risk pricing used in the
              resident&apos;s favor, and technology built by an owner who plans to
              stay.
            </p>
            <p>
              As we acquire and operate our first communities, the reasoning on this
              page will be replaced, piece by piece, with results.{" "}
              <span className="accent-italic">
                We&apos;d rather earn that page than write it early.
              </span>
            </p>
          </div>
        </div>
      </Section>

      <ContactSection
        source="/working-toward"
        audience="board"
        intro="On a board? Tell us what you'd fix first. Answers like that shape what we build."
        heading={
          <>
            Want to hold us to <span className="it">these goals?</span>
          </>
        }
        lead="Tell us what matters most in your community, and we'll reply personally."
      />
    </>
  );
}
