/*
 * Wameir image pipeline — one grade, one set (Spec §4A req 1).
 *
 * Reads the confirmed originals from /images (kept untouched) and writes graded,
 * responsive webp + avif exports to /public/img. The SAME grade is applied to
 * every asset so a skyline, a candid photo, and headshots read as one company:
 * shadows lifted toward navy, highlights warmed toward gold, gently desaturated
 * with a touch more contrast. Baked at the asset level so it survives the
 * light-mode lock (no runtime CSS filters).
 *
 * Run (from repo root):  node scripts/grade-images.mjs
 * Re-run any time originals change; outputs are deterministic.
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const SRC = "images";
const OUT = "public/img";
mkdirSync(OUT, { recursive: true });

// Brand grade tokens
const NAVY = { r: 20, g: 32, b: 54 }; // #142036 -> shadows
const GOLD = { r: 201, g: 168, b: 95 }; // #C9A85F -> highlights

// Overlay strength (subtle — keep photos recognizable).
const NAVY_ALPHA = 0.16;
const GOLD_ALPHA = 0.09;

const solid = (width, height, rgb, alpha) => ({
  input: {
    create: {
      width,
      height,
      channels: 4,
      background: { ...rgb, alpha },
    },
  },
});

/** Apply the shared grade to a resized pipeline of known width/height. */
function grade(pipeline, width, height) {
  return pipeline
    .modulate({ saturation: 0.9 }) // calm clashing temperatures
    .linear(1.06, -6) // gentle contrast
    .composite([
      { ...solid(width, height, NAVY, NAVY_ALPHA), blend: "multiply" }, // navy shadows
      { ...solid(width, height, GOLD, GOLD_ALPHA), blend: "screen" }, // gold highlights
    ]);
}

/**
 * Export one source (optionally pre-cropped) at several widths, as webp + avif.
 * `aspect` = width / height of the output frame.
 */
async function exportSet({ src, extract, aspect, widths, outBase }) {
  for (const w of widths) {
    const h = Math.round(w / aspect);
    for (const fmt of ["avif", "webp"]) {
      let p = sharp(src, { limitInputPixels: false });
      if (extract) p = p.extract(extract);
      p = p.resize(w, h, { fit: "cover", position: "centre" });
      p = grade(p, w, h);
      p =
        fmt === "avif"
          ? p.avif({ quality: 58, effort: 4 })
          : p.webp({ quality: 78 });
      const file = `${OUT}/${outBase}-${w}.${fmt}`;
      await p.toFile(file);
      console.log("  wrote", file, `(${w}x${h})`);
    }
  }
}

async function main() {
  // 1. HERO — Houston skyline. Crop the bottom highway-barrier strip out of frame
  //    (drop ~13% off the bottom); keep the open sky up top for the headline.
  console.log("hero (skyline):");
  {
    const src = `${SRC}/adrian-newell-VGK4F9Euro0-unsplash.jpg`;
    const { width, height } = await sharp(src).metadata();
    const cropH = Math.round(height * 0.87);
    await exportSet({
      src,
      extract: { left: 0, top: 0, width, height: cropH },
      aspect: width / cropH, // ~1.76 landscape
      widths: [1000, 1600, 2000, 2560],
      outBase: "hero-houston-skyline",
    });
  }

  // 2. RESIDENT / COMMUNITY — parent + child. Warm human anchor; faces are not
  //    identifiable and we keep it that way (no crop toward the face). Native
  //    portrait aspect preserved.
  console.log("community (parent + child):");
  {
    const src = `${SRC}/jose-losada-7Kh2fyCWDVI-unsplash.jpg`;
    const { width, height } = await sharp(src).metadata();
    await exportSet({
      src,
      aspect: width / height, // ~0.667 portrait
      widths: [640, 960, 1280],
      outBase: "community-parent-child",
    });
  }

  // 3. HEADSHOTS — crop all to an identical 4:5 head-and-shoulders frame with a
  //    matched eye-line, then the shared grade. Uniform card treatment lives in
  //    the layout. Bob Green is consent-gated (§15 #2) and intentionally NOT
  //    exported here — his card stays a neutral placeholder until sign-off.
  console.log("headshots:");
  const HEADSHOT_ASPECT = 4 / 5;
  const HEADSHOT_WIDTHS = [560];
  // Tuned crops (source px) so heads match in size and eye-line.
  await exportSet({
    src: `${SRC}/mitch-maurer-headshot.png`,
    extract: { left: 150, top: 96, width: 500, height: 625 },
    aspect: HEADSHOT_ASPECT,
    widths: HEADSHOT_WIDTHS,
    outBase: "team-mitch-maurer",
  });
  await exportSet({
    src: `${SRC}/will-powell-headshot.jpg`,
    extract: { left: 70, top: 40, width: 344, height: 430 },
    aspect: HEADSHOT_ASPECT,
    widths: HEADSHOT_WIDTHS,
    outBase: "team-will-powell",
  });

  console.log("\nDONE.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
