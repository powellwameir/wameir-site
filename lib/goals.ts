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
    head: "Money back in your pocket",
    intro:
      "Your home should work for you, not against you. We are actively pursuing strategies that put money back into your pocket through lower taxes, reduced insurance premiums, and prevention of costly repairs. These benefits come from leveraging the scale of community management to negotiate better rates and catch problems before they become expensive.",
    goals: [
      {
        title: "Lower property taxes",
        icon: "taxes",
        goal: "We will protest every home's assessment annually to ensure you pay a fair tax bill.",
        why: [
          "Any homeowner can protest their own property assessment, but almost none do: for one household, the effort rarely feels worth an uncertain result. At community scale that friction disappears, because the same appeal is prepared once and filed the same way for every home.",
        ],
        limit:
          "While we cannot guarantee specific reduction amounts, our commitment is to file appeals for every home that wants them. The value is in doing the work that homeowners typically skip.",
        toward:
          "This is a refund you would rarely chase on your own, but we handle it for the entire community.",
        link: { href: "/lower-taxes" },
      },
      {
        title: "Home monitoring",
        icon: "maintenance",
        goal: "We will install simple sensors to detect leaks, freeze risks, or system failures early.",
        why: [
          "Home damage is lopsided: a slow leak caught at the supply line is a small repair, and the same leak found a week later is a flooded floor and an insurance claim. Low-cost sensors only need to raise the alarm before the small problem becomes the expensive one.",
        ],
        limit:
          "These sensors reduce risk and shift the odds in your favor. While they cannot guarantee against every failure, they significantly lower the chance of catastrophic damage like flooding.",
        toward:
          "Our goal is to prevent repairs entirely by catching issues when they are small and inexpensive.",
        link: { href: "/home-monitoring" },
      },
      {
        title: "Lower insurance costs",
        icon: "insurance",
        goal: "We aim to turn your well-monitored home into a lower insurance premium.",
        why: [
          "Insurance is priced on risk, and a home monitored for the failures behind many claims, such as water and freeze, is measurably lower-risk. Our aim is to make that connection explicit, so the reduced risk shows up where a homeowner can feel it: on the bill.",
        ],
        limit:
          "This depends on external factors like insurers and regulation. We will be transparent about what is achievable as we build it, but the mechanism is sound and the potential savings are real.",
        toward:
          "Because monitored homes are statistically lower-risk, we will work with insurers to ensure this reduced risk shows up as lower bills for you.",
        link: { href: "/lower-insurance" },
      },
    ],
  },
  {
    n: "Group 2",
    head: "Stronger communities",
    intro:
      "A thriving community needs empowered leaders and reliable systems. We are building a future where board members have the tools they need to govern effectively, and where technology works seamlessly in the background to support your community's operations.",
    goals: [
      {
        title: "Better tools for your board",
        icon: "board-tools",
        goal: "We will provide boards with a single, clear view of finances, requests, and decisions.",
        why: [
          "By consolidating scattered information into one easy-to-use dashboard, we eliminate the time sink that often burns out volunteers. This allows boards to focus on governance rather than data hunting.",
        ],
        toward:
          "Our goal is to make board service efficient and respectful of the time our volunteer members contribute.",
      },
      {
        title: "Technology that works",
        icon: "technology",
        goal: "We envision software that simply works: portals that load quickly, payments that clear instantly, and requests that never disappear.",
        why: [
          "Reliable technology is the foundation of good management. We are committed to building systems that last and investing in them consistently because we run these companies ourselves.",
        ],
        toward:
          "Our goal is for technology to stay out of your way and support your community's needs.",
      },
    ],
  },
  {
    n: "Group 3",
    head: "An association that's easy to live with",
    intro:
      "Imagine a community where daily life is smooth and predictable. No more chasing answers or deciphering confusing bills. We are building an environment where technology handles the routine, so our team can focus on what matters: your experience.",
    goals: [
      {
        title: "You get an answer",
        icon: "responsive",
        goal: "Our goal is simple: when you reach out, you get a prompt response every time.",
        why: [
          "Slow service is usually a capacity problem. A small team is buried in routine requests, so the important ones wait. The fix is to take the routine work off their plate. When common requests like a gate code, a balance or a status update are handled automatically, the team can spend its time on the things that need judgment, and responsiveness stops depending on whether someone happens to have a free hour.",
        ],
        toward:
          "We use automated systems to handle routine inquiries instantly, ensuring that our team is always available for issues that require human judgment and care.",
      },
      {
        title: "A bill you can read",
        icon: "billing",
        goal: "We envision billing that is completely transparent and easy to understand.",
        why: [
          "Confusing bills come from systems built for the accountant. There's no technical reason a homeowner can't see a clear running statement, understand every line, and pay in a few taps. It's a design choice, and we'll make it for the resident, not the accountant.",
        ],
        toward:
          "Dues, statements, and payments will be clear and accessible online, so you always know exactly what you owe and why, without ever needing to make a phone call.",
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
