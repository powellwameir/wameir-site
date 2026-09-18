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
 *   Bob    how many companies he bought and combined, over how long, and how
 *          long he has been Mitch's mentor
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
      "Mitch helped scale one of the country's fastest-growing HOA management platforms. He has led deals end to end, from the first model through diligence and closing, and has served as interim CFO of a multi-market construction services company.",
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
      "Will is a consultant who builds data and AI systems for Fortune 100 companies.",
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
      "Bob was CFO of an international HOA management company, where he oversaw a sustained programme of buying and combining management companies.",
      "He has since served as CFO of a national nonprofit and now runs mergers and acquisitions as a chief investment officer. He is Mitch's mentor, and he advises Wameir on how to buy a company without breaking it.",
    ],
    linkedin: "https://www.linkedin.com/in/bogreen/",
    photoBase: "/img/team-bob-green",
    photoConsent: true, // consent confirmed by the founder
  },
];
