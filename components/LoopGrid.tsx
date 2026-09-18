import Link from "next/link";
import Arrow from "./Arrow";
import Icon, { type IconName } from "./Icon";

export type LoopStep = {
  n: string;
  icon: IconName;
  title: string;
  body: string;
  /** Optional concrete example, shown under a hairline (monitoring page). */
  example?: string;
  /** Optional link to a related page the step depends on. */
  link?: { href: string; label: string };
};

/**
 * The three-step "how it would work" band on each deep page (§5.1). The 1px
 * grid gap is the divider — the gold shows through from the grid's background,
 * so the cells carry no borders of their own.
 *
 * `label` is the band's real heading (a group heading), so the three step
 * headings beneath it aren't orphaned in the outline.
 */
export default function LoopGrid({
  label,
  steps,
  closer,
}: {
  label: string;
  steps: LoopStep[];
  closer?: React.ReactNode;
}) {
  return (
    <>
      <h2 className="group-head">{label}</h2>
      <div className="loop">
        {steps.map((s) => (
          <div className="loop__step" key={s.n}>
            <p className="loop__n">{s.n}</p>
            <span className="loop__ic">
              <Icon name={s.icon} size={24} />
            </span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            {s.example && <p className="loop__ex">{s.example}</p>}
            {s.link && (
              <Link className="teaser__link" href={s.link.href}>
                {s.link.label} <Arrow />
              </Link>
            )}
          </div>
        ))}
      </div>
      {closer && <p className="vsec-closer">{closer}</p>}
    </>
  );
}
