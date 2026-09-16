/*
 * The goals Wameir is working toward (§5.1): the single source for the
 * /working-toward deep-dive, the goal index, and the goal-page cross-links. Framed as intent,
 * not results.
 */
import type { IconName } from "@/components/Icon";

export type Goal = {
  title: string;
  icon: IconName; // same icon on the home card and the /working-toward row
  goal: string;
  why: string[];
  limit?: string;
  toward: string;
  /**
   * Goals with a page of their own. Links to it are always labelled with the
   * goal's title, so the goal and its page share one name everywhere.
   */
  link?: { href: string };
};

export type Group = { n: string; head: string; intro: string; goals: Goal[] };

export const GROUPS: Group[] = [
  {
    n: "Group 1",
    head: "An association that's easy to live with",
    intro:
      "Most frustration with an HOA isn't about big things. It's the unanswered email, the confusing bill, the sense that no one is minding the store. Better systems, and the staff to run them, can fix all of it.",
    goals: [
      {
        title: "Reliable execution, responsive service",
        icon: "responsive",
        goal: "when you ask a question or report a problem, you get a prompt answer, every time.",
        why: [
          "Slow service is usually a capacity problem. A small team is buried in routine requests, so the important ones wait. The fix is to take the routine work off their plate. When common requests like a gate code, a balance or a status update are handled automatically, the team can spend its time on the things that need judgment, and responsiveness stops depending on whether someone happens to have a free hour.",
        ],
        toward:
          "systems that answer the routine immediately, so the people can answer the rest well.",
      },
      {
        title: "Simple, transparent billing",
        icon: "billing",
        goal: "dues, statements, and payments that are plain and online, so it's always clear what you owe and why.",
        why: [
          "Confusing bills come from systems built for the accountant. There's no technical reason a homeowner can't see a clear running statement, understand every line, and pay in a few taps. It's a design choice, and we intend to make the resident-facing choice.",
        ],
        toward: "billing you never have to call to understand.",
      },
      {
        title: "Financial clarity",
        icon: "clarity",
        goal: "where the money goes and how decisions get made, out in the open.",
        why: [
          "An association's finances are its members' finances. Budgets, reserves and spending can be set out in plain language, where members can find them. We intend to start from openness, because trust in an association begins with books its members can read.",
        ],
        toward: "an association you can see into.",
      },
    ],
  },
  {
    n: "Group 2",
    head: "Money back in your pocket",
    intro:
      "This is the group where the reasoning matters most, because the savings only exist if the mechanics are right. None of these are magic. Each works because doing something at the scale of a whole community changes the economics of it.",
    goals: [
      {
        title: "Lower property taxes",
        icon: "taxes",
        goal: "protest every home's assessment each year, to keep the tax bill fair.",
        why: [
          "Any homeowner can protest their own property assessment. Almost none do, because for a single household the effort, the paperwork, and the know-how rarely feel worth it against an uncertain outcome. That per-home friction is exactly what disappears at community scale. When the same appeal process runs across hundreds of homes as a standardized, repeatable operation, the cost per home falls dramatically and the expertise is applied once and reused. The individual homeowner was leaving money on the table because chasing it alone wasn't worth the effort. Doing it together makes it worth it.",
        ],
        limit:
          "Not every appeal succeeds, and no one can promise a specific reduction; assessments and outcomes vary. What we can commit to is that the appeal gets filed, every year, for every home that wants it. The value is in doing the thing that otherwise doesn't get done.",
        toward:
          "a refund you'd never have chased yourself, because someone chases it for the whole community.",
        link: { href: "/lower-taxes" },
      },
      {
        title: "Smarter preventive maintenance",
        icon: "maintenance",
        goal: "simple sensors that catch a leak, a freeze risk, or a failing system early.",
        why: [
          "The economics of home damage are lopsided. A slow leak caught at the supply line is a small part and an afternoon. The same leak found after it has run behind a wall for a week is a flooded floor, ruined finishes, an insurance claim, and weeks of disruption. Low-cost sensors use that asymmetry. They only need to raise the alarm before a small problem becomes an expensive one. Spread across a community, the math is simple: a modest, predictable cost against a few avoided catastrophes.",
        ],
        limit:
          "Sensors reduce risk; they don't eliminate it, and they only help with what they can detect. It shifts the odds. It can't guarantee against every failure.",
        toward: "the repair that never has to happen.",
        link: { href: "/home-monitoring" },
      },
      {
        title: "Lower insurance costs",
        icon: "insurance",
        goal: "turn a well-monitored, well-kept home into a lower insurance premium.",
        why: [
          "Insurance is priced on risk. A home monitored for the failures behind many claims, such as water and freeze, is measurably a lower-risk home. The logic that a lower-risk home should cost less to insure is the same logic the insurance industry already runs on. Our aim is to make that connection explicit: pair the monitoring with the coverage so the reduced risk shows up where a homeowner can feel it, on the bill.",
        ],
        limit:
          "This is the goal that depends most on parties outside our control: insurers, underwriting and regulation. The mechanism is sound, but the size and availability of any discount is not something we can promise in advance. We'll be straight about what's achievable as we build it.",
        toward: "lower premiums for doing nothing extra.",
        link: { href: "/lower-insurance" },
      },
    ],
  },
  {
    n: "Group 3",
    head: "Stronger communities",
    intro:
      "The first two groups are about residents. This one is about the people who govern and the systems that carry the load. A community is only as good as the tools its people have to work with.",
    goals: [
      {
        title: "Better tools for your board",
        icon: "board-tools",
        goal: "give boards a clear, single view of finances, requests, and decisions.",
        why: [
          "Board members are volunteers with day jobs. When the information they need is scattered across email threads, PDF attachments, and the management company's internal systems, good governance becomes a time sink that burns out the people willing to serve. Consolidating that into one clear view is a matter of designing the board's experience on purpose.",
        ],
        toward:
          "board service that respects the time of the people who volunteer for it.",
      },
      {
        title: "Technology that works",
        icon: "technology",
        goal: "portals that load, payments that clear, requests that don't vanish.",
        why: [
          "This is the least glamorous goal and, in a way, the most important. Much of the frustration with community management is technology that doesn't work reliably. Fixing it takes discipline: building things that work, and an owner who keeps investing in them. Because we intend to own these companies for the long term, we have every reason to build technology that lasts.",
        ],
        toward: "software that stays out of your way.",
      },
    ],
  },
];

/** URL-safe anchor id for a goal title or group heading, e.g. "lower-insurance-costs". */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * The page-of-its-own link for a goal, looked up by title so a cross-link
 * elsewhere can't drift from the goal's own label. Fails the build if the goal
 * doesn't exist or has no page.
 */
export function goalLink(title: string): { href: string; label: string } {
  for (const group of GROUPS) {
    const g = group.goals.find((x) => x.title === title);
    if (g?.link) return { href: g.link.href, label: g.title };
  }
  throw new Error(`No goal page for "${title}"`);
}
