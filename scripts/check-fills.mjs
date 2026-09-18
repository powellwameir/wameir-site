/*
 * Fails if any [FILL: ...] placeholder is still in the source (audit v5 F-2).
 * The bios keep the shape of a fact we don't have yet rather than inventing one;
 * this is the gate that stops one reaching production.
 *
 *   node scripts/check-fills.mjs
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["app", "lib", "components"];
const EXT = /\.(tsx?|mdx?)$/;
const SKIP = new Set(["FillText.tsx"]);
const hits = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (EXT.test(name) && !SKIP.has(name)) {
      readFileSync(p, "utf8")
        .split("\n")
        .forEach((line, i) => {
          // Skip comment lines: the docs that explain this mechanism mention
          // the marker, and flagging them would make the check cry wolf.
          const t = line.trim();
          if (t.startsWith("*") || t.startsWith("//") || t.startsWith("/*")) return;
          if (line.includes("[FILL:")) hits.push(`${p}:${i + 1}: ${t}`);
        });
    }
  }
}

ROOTS.forEach(walk);

if (hits.length) {
  console.error(`\n${hits.length} unfilled placeholder(s):\n`);
  for (const h of hits) console.error("  " + h);
  console.error("\nReplace each with a real fact from the owner. Do not guess.\n");
  process.exit(1);
}
console.log("No [FILL:] placeholders remain.");
