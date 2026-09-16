/*
 * Team roster — single source of truth for both the /team page (full bios) and
 * the home "who's behind it" teaser (first bio sentence).
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
      "Mitch is a finance executive with deep experience in acquisitions, developed in part while helping scale one of the country's fastest-growing HOA management platforms. He has led deals end to end, from the first model through diligence, closing and integration, and has served as interim CFO of a multi-market construction services company.",
      "Earlier in his career he led budgeting and financial planning for large sales organizations and priced complex cloud and software deals for a global technology company. At Wameir he leads finance and acquisitions: how we value a company, how we close, and how the numbers get reported to the people who work there.",
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
      "Will is an analytics and AI consultant who has supported Fortune 100 clients as they put AI and data science to work across their operations.",
      "He has used AI to optimize business processes and built data science models that drive sales, optimize sales budgets and streamline supply chains. At Wameir he leads technology and operations, with a simple goal: the portal loads, the payment posts, and nobody has to retype anything.",
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
      "Bob has spent decades as a senior finance executive, including as CFO of an international HOA management company, where he oversaw a sustained acquisition program.",
      "He has since served as CFO of a national nonprofit and now leads mergers and acquisitions as a chief investment officer. Earlier roles include CFO of an industrial manufacturer's rail division and senior leadership at a federal banking regulator. He advises Wameir on how to buy and integrate companies well.",
    ],
    linkedin: "https://www.linkedin.com/in/bogreen/",
    photoBase: "/img/team-bob-green",
    photoConsent: true, // consent confirmed by the founder
  },
];
