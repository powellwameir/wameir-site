/*
 * Seller-carousel images — one shared navy/gold grade so three different sources
 * read as one set (§4A). Reads originals from /images, writes graded webp+avif
 * to /public/img. Baked at asset level (survives the light-mode lock).
 *
 * People over objects: the legacy and local slides show people, not things.
 * Per-slide tweaks so the grade lands the same on very different sources:
 *   1. naomi (home at dusk)        — already warm; base grade.
 *   2. alex-gruber (craftsman)     — dim, moody workshop: lift exposure, lighter
 *                                    navy multiply + stronger gold screen so it
 *                                    doesn't read darker than its neighbours.
 *   3. hannah-bechtel (couple)     — cool grey siding: slight per-channel warm
 *                                    balance; base grade otherwise.
 *
 * Retired from these slides (kept in /images, unused): jean-baptiste (woodwork),
 * enrique-macias (neon TEXAS sign).
 *
 * Run: node scripts/grade-seller-images.mjs
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const SRC = "images";
const OUT = "public/img";
mkdirSync(OUT, { recursive: true });

const NAVY = { r: 20, g: 32, b: 54 };
const GOLD = { r: 201, g: 168, b: 95 };

const solid = (width, height, rgb, alpha) => ({
  input: { create: { width, height, channels: 4, background: { ...rgb, alpha } } },
});

const ASPECT = 3 / 2;
const WIDTHS = [800, 1200, 1600];

async function exportSlide({ src, outBase, opts }) {
  for (const w of WIDTHS) {
    const h = Math.round(w / ASPECT);
    for (const fmt of ["avif", "webp"]) {
      let p = sharp(src, { limitInputPixels: false }).resize(w, h, {
        fit: "cover",
        position: opts.position || "centre",
      });
      p = p.modulate({
        saturation: opts.saturation ?? 0.9,
        brightness: opts.brightness ?? 1,
      });
      // contrast (+ optional per-channel warm balance)
      p = p.linear(opts.linearA ?? 1.06, opts.linearB ?? -6).composite([
        { ...solid(w, h, NAVY, opts.navyAlpha ?? 0.16), blend: "multiply" },
        { ...solid(w, h, GOLD, opts.goldAlpha ?? 0.1), blend: "screen" },
      ]);
      p = fmt === "avif" ? p.avif({ quality: 58, effort: 4 }) : p.webp({ quality: 78 });
      const file = `${OUT}/${outBase}-${w}.${fmt}`;
      await p.toFile(file);
      console.log("  wrote", file, `(${w}x${h})`);
    }
  }
}

async function main() {
  console.log("slide 1 — long-term ownership (home at dusk):");
  await exportSlide({
    src: `${SRC}/naomi-august-xeeoh8C8TJc-unsplash.jpg`,
    outBase: "seller-longterm",
    opts: { saturation: 0.92, navyAlpha: 0.16, goldAlpha: 0.1 },
  });

  console.log("slide 2 — preserve your legacy (craftsman at his workbench, warmed):");
  await exportSlide({
    src: `${SRC}/alex-gruber-96-ZnaO4NfI-unsplash.jpg`,
    outBase: "seller-legacy",
    opts: {
      saturation: 1.0,
      brightness: 1.6, // lands at the same mean luminance as slide 1
      linearA: [1.05, 0.98, 0.86], // warm: hold red, pull blue
      linearB: [16, 12, 4], // lift the shadows around the figure
      navyAlpha: 0.05,
      goldAlpha: 0.08,
    },
  });

  console.log("slide 3 — local teams stay local (couple outside their home):");
  await exportSlide({
    src: `${SRC}/hannah-bechtel-1El98zbDWzA-unsplash.jpg`,
    outBase: "seller-local",
    opts: {
      saturation: 0.9,
      linearA: [1.07, 1.04, 0.98], // warm the cool grey siding slightly
      linearB: [-6, -6, -6],
      navyAlpha: 0.14,
      goldAlpha: 0.12,
    },
  });

  console.log("\nDONE.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
