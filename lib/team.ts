/*
 * Team roster — single source of truth for both the /team page (full bios) and
 * the home "who's behind it" teaser (condensed).
 *
 * `photoConsent` is the consent gate (§15 #2). When false, the layout renders a
 * neutral placeholder and never publishes the person's photo — flip to true only
 * after sign-off. All three members are consent-confirmed.
 */
export type TeamMember = {
  key: string;
  name: string;
  kind: "Co-founder" | "Advisor";
  role: string; // full title (team page)
  paras: string[]; // full bio (team page)
  teaserLine: string; // one-liner (home teaser)
  photoBase?: string; // graded asset base, e.g. "/img/team-will-powell"
  photoConsent: boolean;
};

export const TEAM: TeamMember[] = [
  {
    key: "mitch",
    name: "Mitch Maurer",
    kind: "Co-founder",
    role: "Co-Founder, Finance & Growth",
    paras: [
      "Mitch brings experience across finance, acquisitions, and strategic growth, developed in part while helping scale one of the country's fastest-growing HOA management platforms.",
      "He focuses on building enduring businesses — the kind that invest in their people, strengthen the communities they serve, and create lasting value for homeowners and founders alike.",
    ],
    teaserLine: "Building disciplined businesses designed for the long term.",
    photoBase: "/img/team-mitch-maurer",
    photoConsent: true,
  },
  {
    key: "will",
    name: "Will Powell",
    kind: "Co-founder",
    role: "Co-Founder, Technology & Operations",
    paras: [
      "Will leads Wameir's technology and operations, drawing on industry-leading consulting experience to modernize how communities are managed.",
      "His focus is making the day-to-day simpler and more transparent — a better experience for residents, boards, and the local teams doing the work.",
    ],
    teaserLine: "Modernizing community management through thoughtful technology.",
    photoBase: "/img/team-will-powell",
    photoConsent: true,
  },
  {
    key: "bob",
    name: "Bob Green",
    kind: "Advisor",
    role: "Strategic Advisor",
    paras: [
      "An industry veteran with decades of experience, Bob has spent a career helping high-performing organizations grow through disciplined financial leadership and operational excellence.",
      "He is Mitch's longtime mentor and a guide to how we build.",
    ],
    teaserLine: "Decades of industry leadership, guiding how we build.",
    photoBase: "/img/team-bob-green",
    photoConsent: true, // consent confirmed by the founder
  },
];
