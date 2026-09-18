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
import StatusStrip from "@/components/StatusStrip";

export const metadata: Metadata = pageMetadata({
  path: "/working-toward",
  title: "For Communities: What We're Working Toward",
  description:
    "The reasoning behind each goal Wameir is working toward for its communities: mechanisms we can explain plainly, described as goals, not services running today.",
});

/*
 * Band colours per goal group. Set explicitly rather than alternating: the
 * page runs header (navy), day in a community (navy-90), index (cream),
 * group 1 (paper), always on (navy-90), group 2 (cream), group 3 (paper),
 * closing (cream), contact (navy), so no two bands of one colour touch.
 */
const GROUP_BG = ["paper", "cream", "paper"] as const;

/** The goal sentences are written to follow a label; start them with a capital. */
const sentence = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

/*
 * One goal as a two-column row: the summary (icon, title, the goal, what we're
 * building toward) stays in view on the left while the reasoning scrolls on
 * the right. No "The goal:" / "What we're building toward:" labels: the goal
 * reads as the lead sentence and the payoff line is set apart by its type.
 * A goal with a page of its own ends on that link, after its limit, so the row
 * closes on "How it would work" rather than on a caveat. The id is the anchor
 * the goal index links to.
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
      </div>
      <div className="goal__reasoning">
        <div className="goal__block">
          {g.why.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {g.limit && (
          <div className="goal__block goal__block--limit">
            {/* The limit is set apart by its rule, not a label. */}
            <p>{g.limit}</p>
          </div>
        )}
        {g.link && (
          <Link className="teaser__link goal__more" href={g.link.href}>
            How it would work <Arrow />
          </Link>
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
          <h1 className="font-display">For communities</h1>
          <p className="page-header__sub">What we&apos;re working toward</p>
          <StatusStrip />
          <p className="lede">
            We are writing it down anyway, because the <em>reasoning</em> behind a
            promise matters as much as the promise, and because we want to be held to
            it.
          </p>
        </div>
      </header>

      {/* Leads with the day itself: the most concrete picture on the page. */}
      <DayInCommunitySection />

      {/* The rule, then the index */}
      <Section bg="cream">
        <div className="wrap">
          <p className="lead-statement" style={{ maxWidth: "30ch" }}>
            Every benefit has to save a household money or effort, or it{" "}
            <span className="g">doesn&apos;t belong here.</span>
          </p>

          {/* Jump links to every group and goal. */}
          <GoalIndex variant="page" />
        </div>
      </Section>

      {GROUPS.map((group, gi) => (
        <Fragment key={group.n}>
          <Section bg={GROUP_BG[gi]} id={slugify(group.head)} className="goal-group">
            <div className="wrap">
              <div className="goal-group__head">
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

          {/* The 24-hour dial follows the first group: it shows "You get an
              answer" in practice. */}
          {gi === 0 && <AlwaysOnSection />}
        </Fragment>
      ))}

      {/* Closing */}
      <Section bg="cream">
        <div className="wrap">
          <p className="lead-statement" style={{ maxWidth: "30ch" }}>
            Each of these rests on something we can explain,{" "}
            <span className="g">and we&apos;ve tried to.</span>
          </p>
          <div className="goals-intro">
            <p>
              As we buy and run our first communities, the reasoning on this page will
              be replaced, piece by piece, with results. We&apos;d rather earn that page
              than write it early.
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
      />
    </>
  );
}
