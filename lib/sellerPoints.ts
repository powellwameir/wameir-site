/*
 * "What you can count on" (§5.2): the single source for the /selling cards and
 * the home seller tiles, each paired with its graded photo. Home shows the short
 * `teaser`; /selling carries the fuller `body`, so no line appears twice at the
 * same length.
 */
export type SellerPoint = {
  heading: string;
  teaser: string; // home tile, one short sentence
  body: string; // /selling card
  base: string; // graded asset base, e.g. "/img/seller-longterm"
  alt: string;
};

export const SELLER_POINTS: SellerPoint[] = [
  {
    heading: "Long-term ownership",
    teaser: "We buy to keep, not to resell.",
    body: "We buy with our own capital and plan to own what we buy for good. There's no exit date driving our decisions about your company.",
    base: "/img/seller-longterm",
    alt: "A home lit at dusk in a quiet neighborhood",
  },
  {
    heading: "Preserve your legacy",
    teaser: "What you built stays recognizable.",
    body: "We build on what already makes your company work rather than replacing it. Your name, your standards, and your client relationships are the reason it's worth buying.",
    base: "/img/seller-legacy",
    alt: "An older craftsman carving a wooden panel at his workbench",
  },
  {
    heading: "Local teams stay local",
    teaser: "Your people stay with your communities.",
    body: "The managers and staff who serve your communities stay where they are. We add tools and support around them, not layers above them.",
    base: "/img/seller-local",
    alt: "A couple laughing together outside their home",
  },
];
