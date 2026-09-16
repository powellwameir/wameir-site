import type { MetadataRoute } from "next";
import { GROUPS } from "@/lib/goals";
import { SITE_URL } from "@/lib/seo";

/*
 * Every indexable route. Goal pages come from lib/goals, so a new one is listed
 * as soon as its goal carries a link. /privacy is excluded to match its noindex.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const goalPages = GROUPS.flatMap((g) => g.goals.flatMap((goal) => (goal.link ? [goal.link.href] : [])));
  const routes = ["/", "/selling", "/approach", "/team", "/faq", "/working-toward", ...goalPages];
  return routes.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
