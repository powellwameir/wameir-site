/*
 * Seller-carousel images — one shared navy/gold grade so three clashing sources
 * read as one set (§4A). Reads originals from /images, writes graded webp+avif
 * to /public/img. Baked at asset level (survives the light-mode lock).
 *
 * Per-slide tweaks so the grade lands the same on very different sources:
 *   1. naomi (home at dusk)  — already warm; base grade.
 *   2. jean-baptiste (B&W)   — stronger navy multiply + gold screen turns the
 *                              grayscale into a warm navy->gold DUOTONE.
 *   3. enrique (TEXAS/cyan)  — per-channel warm balance neutralizes the cyan
 *                              sky and warms highlights; red sign preserved.
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
      // For the B&W source: flatten to gray, then a warm tint makes a clear warm
      // monochrome (the "warm duotone" treatment) instead of the odd gray slide.
      if (opts.grayscale) p = p.grayscale();
      else p = p.modulate({ saturation: opts.saturation ?? 0.9 });
      if (opts.tint) p = p.tint(opts.tint);
      // contrast (+ optional per-channel warm balance for cyan neutralize)
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

  console.log("slide 2 — preserve your legacy (B&W -> warm duotone):");
  await exportSlide({
    src: `${SRC}/jean-baptiste-d-TH_3Igq3Rik-unsplash.jpg`,
    outBase: "seller-legacy",
    opts: {
      grayscale: true,
      tint: { r: 208, g: 178, b: 126 }, // warm tan -> clearly warm monochrome
      linearA: 1.08,
      linearB: -6,
      navyAlpha: 0.18, // faint navy in the shadows to tie to the brand
      goldAlpha: 0.06,
    },
  });

  console.log("slide 3 — local teams stay local (TEXAS sign, cyan -> warm):");
  await exportSlide({
    src: `${SRC}/enrique-macias-BXXYZ4HtGxU-unsplash.jpg`,
    outBase: "seller-local",
    opts: {
      saturation: 0.82,
      // per-channel: boost red, hold green, cut blue -> removes cyan/blue cast
      linearA: [1.08, 1.02, 0.86],
      linearB: [-6, -6, -2],
      navyAlpha: 0.16,
      goldAlpha: 0.16,
    },
  });

  console.log("\nDONE.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
