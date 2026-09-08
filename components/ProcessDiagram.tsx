/**
 * "How it works" step flow — a custom in-palette diagram (§4A technical register)
 * for the seller path. Describes the shape of the process as intent; deliberately
 * carries no timeframes or numbers (those are gated / not invented). Real text,
 * so it stays accessible.
 */
const STEPS = [
  { n: "1", title: "A conversation", line: "Confidential, and at your pace." },
  {
    n: "2",
    title: "Getting to know the business",
    line: "How it works — and who makes it work.",
  },
  { n: "3", title: "A fair, tailored offer", line: "Built around your goals." },
  {
    n: "4",
    title: "Long-term ownership",
    line: "We operate it ourselves, and hold it.",
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
