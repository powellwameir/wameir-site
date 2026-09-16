import Link from "next/link";
import Section from "./Section";
import VisionIntro from "./VisionIntro";
import MiniScaleDiagram from "./diagrams/MiniScaleDiagram";
import MiniCostAsymmetryDiagram from "./diagrams/MiniCostAsymmetryDiagram";
import MiniRiskChainDiagram from "./diagrams/MiniRiskChainDiagram";

/*
 * "Why the savings are real" (§5.1) — the three money-back mechanisms, each in
 * one card, each linking to the page that argues it in full. The row is a plain
 * .trio, so it picks up the existing card depth, hover lift and reveal stagger.
 *
 * The card is not itself a link: it contains a diagram with its own accessible
 * name, which a card-wide link would swallow. The link sits in the footer.
 */
const CARDS = [
  {
    kicker: "Lower property taxes",
    title: "The scale argument",
    arg: "What isn't worth doing alone becomes worth doing together.",
    diagram: <MiniScaleDiagram />,
    body: (
      <>
        Any homeowner can protest their assessment — almost none do, because for one
        household the effort rarely feels worth it. Run as{" "}
        <strong>one standardized process across hundreds of homes</strong>, the cost per
        home falls and the expertise is applied once.
      </>
    ),
    foot: "A refund you'd never have chased alone.",
    href: "/lower-taxes",
    linkText: "How lower property taxes would work",
  },
  {
    kicker: "Smarter maintenance",
    title: "The cost-asymmetry argument",
    arg: "A tiny cost now against a huge one later.",
    diagram: <MiniCostAsymmetryDiagram />,
    body: (
      <>
        The economics of home damage are lopsided. A leak caught at the supply line is{" "}
        <strong>a small part and an afternoon</strong>; the same leak found a week later
        is a flooded floor and a claim. Simple sensors exploit that gap.
      </>
    ),
    foot: "The repair that never has to happen.",
    href: "/home-monitoring",
    linkText: "How early warning works",
  },
  {
    kicker: "Lower insurance costs",
    title: "The risk-pricing argument",
    arg: "Lower risk should cost less to insure.",
    diagram: <MiniRiskChainDiagram />,
    body: (
      <>
        Insurance is priced on risk. A home actively watched for the failures that cause
        the most claims is, measurably, <strong>a lower-risk home</strong> — and our aim
        is to make that reduced risk show up on the bill.
      </>
    ),
    foot: "Lower premiums for doing nothing extra.",
    href: "/lower-insurance",
    linkText: "How lower insurance costs would be earned",
  },
];

export default function MoneyBackSection() {
  return (
    <Section bg="paper">
      <div className="wrap">
        <VisionIntro
          eyebrow="Why the savings are real"
          lede="Each way we aim to put money back in your pocket rests on a simple mechanism — something that isn't worth doing for one household alone, but changes entirely across a whole community. Here's the logic behind each."
          note="Wameir is early-stage. These describe how each program is designed to work — they're goals we're building toward, not guarantees of a specific result."
        >
          None of this is magic. It&apos;s{" "}
          <span className="g">math that only works at scale.</span>
        </VisionIntro>

        <div className="trio">
          {CARDS.map((c) => (
            <article className="card card--flow" key={c.title}>
              <p className="card__kicker">{c.kicker}</p>
              <h3>{c.title}</h3>
              <p className="card__arg">{c.arg}</p>
              <div className="card__dia">{c.diagram}</div>
              <p className="card__exp">{c.body}</p>
              <p className="card__foot">{c.foot}</p>
              <Link className="teaser__link" href={c.href}>
                {c.linkText} <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>

        <p className="mb-closer">
          <strong>The honest limits:</strong> not every tax appeal succeeds, sensors
          reduce risk rather than remove it, and any insurance discount depends on
          parties outside our control. We&apos;ll be straight about what&apos;s achievable
          as we build each of these.
        </p>
      </div>
    </Section>
  );
}
