import type { Metadata } from "next";
import { Fragment } from "react";
import Section from "@/components/Section";
import PullQuote from "@/components/PullQuote";
import { GROUPS, type Goal } from "@/lib/goals";
import ContactSection from "@/components/ContactSection";
import { WeirWatermark } from "@/components/WeirLattice";

export const metadata: Metadata = {
  title: "What We're Working Toward",
  description:
    "The reasoning behind each goal Wameir is working toward for its communities — mechanisms we can explain plainly, framed as intent, not results we don't have yet.",
};

function GoalBlock({ g }: { g: Goal }) {
  return (
    <article className="goal">
      <h3 className="goal__title">{g.title}</h3>
      <p className="goal__goal">
        <span className="goal__k">The goal:</span> {g.goal}
      </p>
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
      <p className="goal__toward">
        <span className="goal__k">What we&apos;re building toward:</span> {g.toward}
      </p>
    </article>
  );
}

export default function WorkingTowardPage() {
  return (
    <>
      <header className="page-header">
        <WeirWatermark className="page-header__watermark" />
        <div className="wrap">
          <span className="eyebrow eyebrow-gold-light">For your community</span>
          <h1 className="font-display">What we&apos;re working toward</h1>
          <p className="lede">
            We are early. Wameir has not yet acquired its first company, so
            everything on this page is a goal, not a service running today. We are
            writing it down anyway, because we think the <em>reasoning</em> behind a
            promise matters as much as the promise — and because we want to be held
            to it.
          </p>
        </div>
      </header>

      {/* The rule */}
      <Section bg="cream">
        <div className="wrap">
          <p className="lead-statement" style={{ maxWidth: "30ch" }}>
            Every benefit has to save a household real money or real effort, or it{" "}
            <span className="g">does not belong here.</span>
          </p>
          <div className="goals-intro">
            <p>
              Not a nice-to-have, not a talking point — a real, measurable
              improvement in the life of someone who lives in one of these
              communities. If we can&apos;t explain plainly why something works, we
              won&apos;t build it.
            </p>
            <p>
              The goals fall into three groups: an association that&apos;s easy to
              live with, money back in your pocket, and stronger communities.
              Here&apos;s the thinking behind each.
            </p>
          </div>
        </div>
      </Section>

      {GROUPS.map((group, gi) => (
        <Fragment key={group.n}>
          <Section bg={gi % 2 === 0 ? "paper" : "cream"}>
            <div className="wrap">
              <div className="goal-group__head">
                <span className="eyebrow">{group.n}</span>
                <h2 className="t-h2">{group.head}</h2>
                <p className="goal-group__intro">{group.intro}</p>
              </div>
              <div className="goal-list">
                {group.goals.map((g) => (
                  <GoalBlock key={g.title} g={g} />
                ))}
              </div>
            </div>
          </Section>

          {/* The page's pull-quote: surfaced from the property-tax goal above. */}
          {gi === 1 && (
            <PullQuote bg="navy" size="md">
              A refund you&apos;d never have chased yourself — because now someone
              chases it <span className="g">for the whole community.</span>
            </PullQuote>
          )}
        </Fragment>
      ))}

      {/* Closing */}
      <Section bg="navy" className="invite">
        <WeirWatermark className="invite__watermark" />
        <div className="wrap goals-closing">
          <p>
            None of this is delivered yet — we&apos;ve been clear about that
            throughout. What we hope this page shows is that the goals aren&apos;t
            wishful. Each one rests on a mechanism we can explain plainly: routine
            work automated so people can do the work that matters; per-home friction
            removed by doing things at community scale; cost asymmetries and risk
            pricing used in the resident&apos;s favor; and technology built by an
            owner who plans to stay.
          </p>
          <p>
            As we acquire and operate our first communities, the reasoning on this
            page will be replaced, piece by piece, with results.{" "}
            <span className="accent-italic">
              We&apos;d rather earn that page than write it early.
            </span>
          </p>
        </div>
      </Section>

      <ContactSection
        source="/working-toward"
        audience="community"
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
