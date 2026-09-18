/*
 * Team roster — single source of truth for both the /team page (full bios) and
 * the home "who's behind it" teaser (first bio sentence).
 *
 * BIOS CONTAIN [FILL: ...] PLACEHOLDERS (audit v5 F-2). They are rendered with
 * a dashed warning chip so they cannot ship unnoticed, and `npm run check:fills`
 * fails while any remain. Replace them with real facts from the owner; do not
 * guess. Grep: [FILL:
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
  paras: string[]; // full bio (team page); paras[0] also leads the home teaser
  linkedin?: string; // personal profile, shown on /team when set
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
      "Mitch helped scale [FILL: platform name], one of the country's fastest-growing HOA management platforms, over [FILL: N] years, folding in [FILL: N] management companies along the way. He has led deals end to end, from the first model through diligence and closing, and has served as interim CFO of a multi-market construction services company.",
      "At Wameir he handles the money side: what a company is worth, how the purchase closes, and how the numbers get reported back to the people who work there.",
    ],
    linkedin: "https://www.linkedin.com/in/mitchell-r-maurer-8826a357/",
    photoBase: "/img/team-mitch-maurer",
    photoConsent: true,
  },
  {
    key: "will",
    name: "Will Powell",
    kind: "Co-founder",
    role: "Co-Founder, Technology & Operations",
    paras: [
      "Will spent [FILL: N] years as a consultant at [FILL: firm name], building data and AI systems for Fortune 100 companies. [FILL: one concrete project, one sentence: what he built and what it changed.]",
      "At Wameir he leads technology and operations, with a simple goal: the portal loads, the payment posts, and nobody has to retype anything.",
    ],
    linkedin: "https://www.linkedin.com/in/william-1-powell/",
    photoBase: "/img/team-will-powell",
    photoConsent: true,
  },
  {
    key: "bob",
    name: "Bob Green",
    kind: "Advisor",
    role: "Strategic Advisor",
    paras: [
      "Bob was CFO of an international HOA management company, where he bought and combined [FILL: N] management companies over [FILL: N] years.",
      "He has since served as CFO of a national nonprofit and now runs mergers and acquisitions as a chief investment officer. He has been Mitch's mentor for [FILL: N] years, and he advises Wameir on how to buy a company without breaking it.",
    ],
    linkedin: "https://www.linkedin.com/in/bogreen/",
    photoBase: "/img/team-bob-green",
    photoConsent: true, // consent confirmed by the founder
  },
];
