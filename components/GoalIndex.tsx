import Link from "next/link";
import Icon from "./Icon";
import Arrow from "./Arrow";
import { GROUPS, slugify } from "@/lib/goals";

/*
 * All eight goals as a compact three-column index: group heading, then one
 * icon link per goal. Rendered at the top of /working-toward and in the home
 * communities band, so every goal is one click from the front door.
 *
 * - "page" (on /working-toward): same-page jumps to each group and goal.
 * - "home": cross-page links. Goals with a page of their own link straight to
 *   it; the rest go to their row on /working-toward.
 *
 * Goals with a page of their own end in an arrow in both variants, so a reader
 * can see which links go deeper than a summary.
 */
export default function GoalIndex({ variant }: { variant: "page" | "home" }) {
  const onPage = variant === "page";

  return (
    <nav
      className="goal-index"
      id={onPage ? "all-goals" : undefined}
      aria-label={onPage ? "Goals on this page" : "All eight goals"}
    >
      {GROUPS.map((group) => {
        const groupHref = `${onPage ? "" : "/working-toward"}#${slugify(group.head)}`;
        return (
          <div key={group.n}>
            {onPage ? (
              <a className="goal-index__group" href={groupHref}>
                {group.head}
              </a>
            ) : (
              <Link className="goal-index__group" href={groupHref}>
                {group.head}
              </Link>
            )}
            <ul className="goal-index__list">
              {group.goals.map((g) => {
                const inner = (
                  <>
                    <span className="goal-index__icon" aria-hidden="true">
                      <Icon name={g.icon} size={16} />
                    </span>
                    <span>{g.title}</span>
                    {g.link && <Arrow />}
                  </>
                );
                return (
                  <li key={g.title}>
                    {onPage ? (
                      <a className="goal-index__link" href={`#${slugify(g.title)}`}>
                        {inner}
                      </a>
                    ) : (
                      <Link
                        className="goal-index__link"
                        href={g.link?.href ?? `/working-toward#${slugify(g.title)}`}
                      >
                        {inner}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
