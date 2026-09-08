import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactSection from "@/components/ContactSection";
import { WeirWatermark } from "@/components/WeirLattice";

export const metadata: Metadata = {
  title: "What We're Working Toward",
  description:
    "The reasoning behind each goal Wameir is working toward for its communities — mechanisms we can explain plainly, framed as intent, not results we don't have yet.",
};

type Goal = {
  title: string;
  goal: string;
  whyLabel?: string;
  why: string[];
  limit?: string;
  toward: string;
};

type Group = { n: string; head: string; intro: string; goals: Goal[] };

const GROUPS: Group[] = [
  {
    n: "Group 1",
    head: "An association that's easy to live with",
    intro:
      "Most frustration with an HOA isn't about big things. It's the unanswered email, the confusing bill, the sense that no one is really minding the store. These are solvable — not with slogans, but with better systems and the staffing to run them.",
    goals: [
      {
        title: "Reliable execution, responsive service",
        goal: "when you ask a question or report a problem, you get an answer — promptly, and consistently.",
        why: [
          "Slow service is usually a capacity problem, not an attitude problem: a small team is buried in routine requests, so the important ones wait. The fix is to take the routine work off their plate. When common requests — a gate code, a balance, a copy of the rules, a status update — are handled automatically and instantly, the human team is freed to spend its time on the things that actually need judgment. Responsiveness stops depending on whether someone happens to have a free hour.",
        ],
        toward:
          "systems that answer the routine immediately, so the people can answer the rest well.",
      },
      {
        title: "Simple, transparent billing",
        goal: "dues, statements, and payments that are plain and online — always clear what you owe and why.",
        why: [
          "Confusing bills come from systems built for the accountant, not the resident. There's no technical reason a homeowner can't see a clear running statement, understand every line, and pay in a few taps. It's a design choice, and we intend to make the resident-facing choice.",
        ],
        toward: "billing you never have to call to understand.",
      },
      {
        title: "Financial clarity",
        goal: "where the money goes and how decisions get made, out in the open.",
        why: [
          "An association's finances are its members' finances. Budgets, reserves, and spending can be presented in plain language rather than buried in a quarterly PDF. Openness isn't a feature to add — it's the default we intend to start from, because trust in an association begins with books its members can actually read.",
        ],
        toward: "an association you can see into, not one you have to interrogate.",
      },
    ],
  },
  {
    n: "Group 2",
    head: "Money back in your pocket",
    intro:
      "This is the group where the reasoning matters most, because the savings are real but only if the mechanics are right. None of these are magic. Each works because doing something at the scale of a whole community changes the economics of it.",
    goals: [
      {
        title: "Lower property taxes",
        goal: "protest every home's assessment each year, to keep the tax bill fair.",
        whyLabel: "Why it's possible — the scale argument",
        why: [
          "Any homeowner can protest their own property assessment. Almost none do, because for a single household the effort, the paperwork, and the know-how rarely feel worth it against an uncertain outcome. That per-home friction is exactly what disappears at community scale. When the same appeal process runs across hundreds of homes as a standardized, repeatable operation, the cost per home falls dramatically and the expertise is applied once and reused. The individual homeowner was leaving money on the table not because it wasn't there, but because chasing it alone wasn't rational. Doing it collectively makes it rational.",
        ],
        limit:
          "Not every appeal succeeds, and no one can promise a specific reduction — assessments and outcomes vary. What we can commit to is that the appeal actually gets filed, every year, for every home that wants it. The value is in doing the thing that otherwise doesn't get done.",
        toward:
          "a refund you'd never have chased yourself — because now someone chases it for the whole community.",
      },
      {
        title: "Smarter preventive maintenance",
        goal: "simple sensors that catch a leak, a freeze risk, or a failing system early.",
        whyLabel: "Why it's possible — the cost-asymmetry argument",
        why: [
          "The economics of home damage are lopsided. A slow leak caught at the supply line is a small part and an afternoon. The same leak found after it has run behind a wall for a week is a flooded floor, ruined finishes, an insurance claim, and weeks of disruption. Low-cost sensors exploit that asymmetry: they don't need to be sophisticated, they just need to raise the alarm before a small problem becomes an expensive one. Spread across a community, the math is compelling — a modest, predictable cost against a small number of avoided catastrophes.",
        ],
        limit:
          "Sensors reduce risk; they don't eliminate it, and they only help with what they can detect. This is about shifting the odds, not a guarantee against every failure.",
        toward: "the repair that never has to happen.",
      },
      {
        title: "Lower insurance costs",
        goal: "turn a well-monitored, well-kept home into a real reduction on the insurance premium.",
        whyLabel: "Why it's possible — the risk-pricing argument",
        why: [
          "Insurance is priced on risk. A home that is actively monitored for the failures that cause the most claims — water, freeze, and the like — is, measurably, a lower-risk home. The logic that a lower-risk home should cost less to insure is the same logic the insurance industry already runs on. Our aim is to make that connection explicit: pair the monitoring with the coverage so the reduced risk shows up where a homeowner can feel it, on the bill.",
        ],
        limit:
          "This is the goal that depends most on parties outside our control — insurers, underwriting, and regulation. It's a real mechanism, but the size and availability of any discount is not something we can promise in advance. We'll be straight about what's achievable as we build it.",
        toward: "lower premiums for doing nothing extra.",
      },
    ],
  },
  {
    n: "Group 3",
    head: "Stronger communities",
    intro:
      "The first two groups are about residents. This one is about the people who govern and the systems that carry the load — because a community is only as good as the tools the people running it have to work with.",
    goals: [
      {
        title: "Better tools for your board",
        goal: "give boards a clear, single view of finances, requests, and decisions.",
        why: [
          "Board members are volunteers with day jobs. When the information they need is scattered across email threads, PDF attachments, and the management company's internal systems, good governance becomes a time sink that burns out the people willing to serve. Consolidating that into one clear view isn't a technical leap — it's a matter of building the board's experience deliberately instead of leaving it as an afterthought.",
        ],
        toward:
          "board service that respects the time of the people who volunteer for it.",
      },
      {
        title: "Technology that works",
        goal: "portals that load, payments that clear, requests that don't vanish.",
        why: [
          "This is the least glamorous promise and, in a way, the most important. Much of the frustration with community management is simply technology that doesn't work reliably. There's no innovation required to fix it — just the discipline to build things that function and the ownership model to keep investing in them over time. Because we intend to own these companies for the long term, we have every reason to build technology that lasts rather than technology that demos well.",
        ],
        toward: "software that stays out of your way.",
      },
    ],
  },
];

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
        <Section key={group.n} bg={gi % 2 === 0 ? "paper" : "cream"}>
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

      <ContactSection source="/working-toward" audience="community" />
    </>
  );
}
