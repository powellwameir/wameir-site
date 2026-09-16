/*
 * "What you can count on" (§5.2): the single source for the /selling cards and
 * the home seller tiles, each paired with its graded photo.
 */
export type SellerPoint = {
  heading: string;
  body: string;
  base: string; // graded asset base, e.g. "/img/seller-longterm"
  alt: string;
};

export const SELLER_POINTS: SellerPoint[] = [
  {
    heading: "Long-term ownership",
    body: "We invest our own capital and plan to own the businesses we acquire for the long term.",
    base: "/img/seller-longterm",
    alt: "A home lit at dusk in a quiet neighborhood",
  },
  {
    heading: "Preserve your legacy",
    body: "We build on what already makes your company work.",
    base: "/img/seller-legacy",
    alt: "An older craftsman carving a wooden panel at his workbench",
  },
  {
    heading: "Local teams stay local",
    body: "The people and relationships that serve your communities stay right where they are.",
    base: "/img/seller-local",
    alt: "A couple laughing together outside their home",
  },
];
