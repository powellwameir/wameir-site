/*
 * Team roster — single source of truth for both the /team page (full bios) and
 * the home "who's behind it" teaser (first bio sentence).
 *
 * Bios are cut to the HOA credential (audit v5 F-2). Specifics we don't have
 * were written as [FILL: ...] placeholders and then STRIPPED rather than
 * guessed, so every sentence here is true but less specific than it could be.
 * To put the detail back, ask the owner for:
 *   Mitch  the HOA platform's name, years there, how many companies folded in
 *   Will   years as a consultant, the firm, one concrete project and its result
 *   Bob    how many companies he bought and combined, over how long
 * Re-add them as [FILL: ...] while drafting: they render as a dashed warning
 * chip (components/FillText.tsx) and `npm run check:fills` fails while any
 * remain, so a placeholder cannot reach production unnoticed.
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
      "Mitch scaled one of the fastest-growing HOA management platforms in the country. He has led acquisitions from initial modeling through diligence and closing, and served as interim CFO for a multi-market construction and HOA management company.",
      "At Wameir, he manages all financial matters: valuations, transaction closings, and reporting to our team members.",
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
      "Will is a Data and Analytics consultant with over 10 years of experience across CPG, Retail, Automotive, and Aerospace industries. He has led projects across Sales and Marketing, Supply Chain, and R&D that improved revenue growth and reduced costs, often using AI tools and change management strategies to streamline business processes.",
      "At Wameir, he leads technology and operations, implementing modern systems that improve the homeowner experience.",
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
      "Bob is a senior finance executive with over 25 years of experience in finance and operations across publicly-traded and privately-held corporations in the service, manufacturing, and nonprofit sectors.",
      "He has served as CFO for multiple HOA management companies and non-profits, where he led the acquisition and integration of businesses.",
      "At Wameir, he advises us on acquiring companies while preserving their value.",
    ],
    linkedin: "https://www.linkedin.com/in/bogreen/",
    photoBase: "/img/team-bob-green",
    photoConsent: true, // consent confirmed by the founder
  },
];
