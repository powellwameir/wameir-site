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
      "Experience across finance, acquisitions, and strategic growth after helping scale one of the country's fastest-growing HOA management platforms.",
      "Focused on enduring businesses that invest in people, strengthen communities, and create lasting value for homeowners and founders.",
    ],
    teaserLine:
      "Scaled one of the country's fastest-growing HOA management platforms.",
    photoBase: "/img/team-mitch-maurer",
    photoConsent: true,
  },
  {
    key: "will",
    name: "Will Powell",
    kind: "Co-founder",
    role: "Co-Founder, Technology & Operations",
    paras: [
      "Leads technology strategy, drawing on industry-leading consulting experience to modernize operations and simplify community management.",
      "Focused on improving the day-to-day experience for residents, boards, and local teams.",
    ],
    teaserLine:
      "Modernizes operations and the day-to-day experience for residents and teams.",
    photoBase: "/img/team-will-powell",
    photoConsent: true,
  },
  {
    key: "bob",
    name: "Bob Green",
    kind: "Advisor",
    role: "Strategic Advisor",
    paras: [
      "Industry veteran with decades of experience in community management.",
    ],
    teaserLine: "Industry veteran with decades in community management.",
    photoBase: "/img/team-bob-green",
    photoConsent: true, // consent confirmed by the founder
  },
];
