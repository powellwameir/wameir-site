import { isFilled } from "@/lib/content";

/**
 * "How it works" step flow — a custom in-palette diagram (§4A technical register)
 * for the seller path. Describes the shape of the process as intent. Each step's
 * time cue (`when`) is an owner fact and stays hidden until filled — no invented
 * timeframes. Real text, so it stays accessible.
 */
const STEPS = [
  {
    n: "1",
    title: "A conversation",
    line: "Private, and at your pace.",
    detail: "We talk about what you've built and what you want next. There's nothing to prepare.",
    when: "[FILL: typical length of the first call]",
  },
  {
    n: "2",
    title: "Getting to know the business",
    line: "How it works, and who makes it work.",
    detail: "We meet your team, learn your communities, and go through the numbers with you.",
    when: "[FILL: typical length of this stage]",
  },
  {
    n: "3",
    title: "A fair, tailored offer",
    line: "Built around your goals.",
    detail: "The offer reflects what you want: your timing, your role afterward, and your team's future.",
    when: "[FILL: typical time from first call to offer]",
  },
  {
    n: "4",
    title: "Long-term ownership",
    line: "We operate it ourselves, and hold it.",
    detail: "Your team keeps serving your communities while we invest in their tools and support.",
    when: "[FILL: typical time from offer to close]",
  },
];

export default function ProcessDiagram() {
  return (
    <ol className="process">
      {STEPS.map((s) => (
        <li className="process__step" key={s.n}>
          <span className="process__node" aria-hidden="true">
            {s.n}
          </span>
          <h3 className="process__title">{s.title}</h3>
          <p className="process__line">{s.line}</p>
          <p className="process__line">
            {s.detail}
            {isFilled(s.when) && ` ${s.when}`}
          </p>
        </li>
      ))}
    </ol>
  );
}
