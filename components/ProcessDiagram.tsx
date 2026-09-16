/**
 * "How it works" step flow — a custom in-palette diagram (§4A technical register)
 * for the seller path. Describes the shape of the process as intent; deliberately
 * carries no durations or numbers (those are gated, not invented); each line
 * opens with an order cue instead (First / Next / When you're ready). Real text,
 * so it stays accessible.
 */
const STEPS = [
  { n: "1", title: "A conversation", line: "First. Confidential, and on your schedule." },
  {
    n: "2",
    title: "Getting to know the business",
    line: "Next. How it runs, and who runs it.",
  },
  { n: "3", title: "A fair, tailored offer", line: "When you're ready. Built around your goals." },
  {
    n: "4",
    title: "Long-term ownership",
    line: "After closing. We run it ourselves, and keep it.",
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
        </li>
      ))}
    </ol>
  );
}
