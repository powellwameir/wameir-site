import { isFilled } from "./content";

/*
 * Team roster — single source of truth for the /team page (full bios) and the
 * home "who's behind it" teaser (the short `teaser` line, never the bio itself).
 *
 * `draft` is the fact-based bio waiting on owner facts. It replaces `paras` as
 * soon as every `[FILL: …]` marker in it is replaced (see isFilled).
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
  teaser: string; // home card, one short sentence
  paras: string[]; // bio shown today (team page)
  draft?: string[]; // bio with named facts, shown once filled
  photoBase?: string; // graded asset base, e.g. "/img/team-will-powell"
  photoConsent: boolean;
};

export const TEAM: TeamMember[] = [
  {
    key: "mitch",
    name: "Mitch Maurer",
    kind: "Co-founder",
    role: "Co-Founder, Finance & Growth",
    teaser: "Mitch leads finance and acquisitions.",
    paras: [
      "Mitch has spent his career in finance and acquisitions, most recently helping grow an HOA management platform.",
      "He co-founded Wameir to build and run these businesses himself, investing in the people who do the work and the communities they serve.",
    ],
    draft: [
      "Mitch spent [FILL: years] years in finance and acquisitions, most recently as [FILL: role] at [FILL: HOA management platform], where he [FILL: scale, e.g. led integration across N management companies and N doors].",
      "He co-founded Wameir to build and run these businesses himself, investing in the people who do the work and the communities they serve.",
    ],
    photoBase: "/img/team-mitch-maurer",
    photoConsent: true,
  },
  {
    key: "will",
    name: "Will Powell",
    kind: "Co-founder",
    role: "Co-Founder, Technology & Operations",
    teaser: "Will leads technology and day-to-day operations.",
    paras: [
      "Will leads Wameir's technology and operations, and came to Wameir from consulting.",
      "His focus is making the day-to-day simpler and clearer for residents, boards, and the local teams doing the work.",
    ],
    draft: [
      "Will leads Wameir's technology and operations. Before Wameir he was [FILL: role] at [FILL: firm], where he [FILL: one concrete result, with scale].",
      "His focus is making the day-to-day simpler and clearer for residents, boards, and the local teams doing the work.",
    ],
    photoBase: "/img/team-will-powell",
    photoConsent: true,
  },
  {
    key: "bob",
    name: "Bob Green",
    kind: "Advisor",
    role: "Strategic Advisor",
    teaser: "Bob is Mitch's longtime mentor and advises on how we build.",
    paras: [
      "Bob has spent decades in financial and operating leadership, helping businesses grow with discipline.",
      "He is Mitch's longtime mentor, and a steady voice on how we build.",
    ],
    draft: [
      "Bob spent [FILL: years] years as [FILL: roles and companies], including [FILL: one sentence on his community-management experience specifically].",
      "He is Mitch's longtime mentor, and a steady voice on how we build.",
    ],
    photoBase: "/img/team-bob-green",
    photoConsent: true, // consent confirmed by the founder
  },
];

/** The bio to render: the fact-based draft once it's filled, otherwise today's. */
export function bio(m: TeamMember): string[] {
  return m.draft && m.draft.every(isFilled) ? m.draft : m.paras;
}

/*
 * The team headline claims an "industry veteran" only once Bob's bio names his
 * community-management experience. Until then it says what's plainly true.
 */
const bob = TEAM.find((m) => m.key === "bob");
export const TEAM_HEADLINE =
  bob?.draft && bob.draft.every(isFilled)
    ? { lead: "Experienced operators, guided by an", accent: "industry veteran." }
    : { lead: "Two operators and a", accent: "longtime mentor." };

/*
 * "By the numbers" proof strip for /team, and where the capital comes from.
 * Owner facts only; each renders once its markers are replaced. Honest figures,
 * not rounded-up ones.
 */
export const PROOF: { figure: string; label: string }[] = [
  { figure: "[FILL: figure]", label: "[FILL: e.g. years of combined experience in community management]" },
  { figure: "[FILL: figure]", label: "[FILL: e.g. management companies acquired or integrated before Wameir]" },
  { figure: "[FILL: figure]", label: "[FILL: e.g. homes (doors) served by companies we've helped run]" },
];

export const CAPITAL_LINE =
  "[FILL: one sentence on where Wameir's capital comes from, e.g. the founders' own money and any individual co-investors]";
