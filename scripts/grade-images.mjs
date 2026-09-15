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

  // 3. NEIGHBORHOOD — tree-lined street at golden hour. Wide banner in the home
  //    community section; crop biased slightly low to keep the houses in frame
  //    and trim empty sky.
  console.log("community (neighborhood street):");
  {
    const src = `${SRC}/nikola-knezevic-sDyXOlpCrAY-unsplash.jpg`;
    const { width, height } = await sharp(src).metadata();
    const cropH = Math.round(width / (21 / 9));
    await exportSet({
      src,
      extract: { left: 0, top: Math.round((height - cropH) * 0.62), width, height: cropH },
      aspect: 21 / 9,
      widths: [1000, 1600, 2000, 2560], // full-bleed band on the home page
      outBase: "community-neighborhood",
    });
  }

  // 4. HEADSHOTS — one consistent set. Each person is pre-cut from their original
  //    backdrop (scripts/cutout-headshots.py -> images/cutouts), then placed on
  //    the same navy card at the same head size and eye-line, and given the
  //    shared grade. Uniform card chrome lives in the layout (.who-photo).
  console.log("headshots:");
  for (const m of HEADSHOTS) await composeHeadshot(m);

  console.log("\nDONE.");
}

// Headshot frame (4:5), composed at 2x then downsized to the exported width.
const HS_W = 1120;
const HS_H = 1400;
const HS_OUT_W = 560;
// Shared framing for all three. Will's source is the narrowest relative to his
// head, so it sets the floor: below ~0.55 his shoulders no longer fill the frame
// width.
const HEAD_RATIO = 0.555; // head width (ear to ear) as a share of frame width
const EYE_LINE = 0.38; // eye height as a share of frame height

// Hand-measured on the cutouts (source px): eye midpoint, ear-to-ear head width.
const HEADSHOTS = [
  { cutout: "team-mitch-maurer", eyeX: 408, eyeY: 312, headW: 275 },
  { cutout: "team-will-powell", eyeX: 568, eyeY: 470, headW: 598 },
  // Bob's original is 600px, so it is upscaled ~1.7x at the exported size; a
  // higher-res original would sharpen it.
  { cutout: "team-bob-green", eyeX: 292, eyeY: 167, headW: 180 },
];

/** Soft gold light behind head height + navy fade at the base, as SVG. */
const cardLight = (w, h) =>
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs>
    <radialGradient id="g" cx="50%" cy="34%" r="58%">
      <stop offset="0" stop-color="rgb(${GOLD.r},${GOLD.g},${GOLD.b})" stop-opacity="0.22"/>
      <stop offset="1" stop-color="rgb(${GOLD.r},${GOLD.g},${GOLD.b})" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="rgb(${NAVY.r},${NAVY.g},${NAVY.b})"/>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
</svg>`);

const baseFade = (w, h) =>
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs>
    <linearGradient id="f" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.86" stop-color="rgb(${NAVY.r},${NAVY.g},${NAVY.b})" stop-opacity="0"/>
      <stop offset="1" stop-color="rgb(${NAVY.r},${NAVY.g},${NAVY.b})" stop-opacity="0.55"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#f)"/>
</svg>`);

async function composeHeadshot({ cutout, eyeX, eyeY, headW }) {
  const src = `${SRC}/cutouts/${cutout}.png`;
  const meta = await sharp(src).metadata();
  const scale = (HEAD_RATIO * HS_W) / headW;
  const sw = Math.round(meta.width * scale);
  const sh = Math.round(meta.height * scale);
  const top = Math.round(EYE_LINE * HS_H - eyeY * scale);

  // The source must cover the frame's width and run off its bottom, or the card
  // shows a hard cut through the shoulders. Tune HEAD_RATIO / EYE_LINE (for all
  // three) if this trips.
  if (sw < HS_W) {
    throw new Error(`${cutout}: source is ${HS_W - sw}px narrower than the frame`);
  }
  if (top + sh < HS_H) {
    throw new Error(`${cutout}: body ends ${HS_H - (top + sh)}px above the frame bottom`);
  }
  // Centre on the eyes, clamped so the source always spans the full width.
  const left = Math.min(0, Math.max(HS_W - sw, Math.round(HS_W / 2 - eyeX * scale)));

  // Scale the cutout, crop off whatever falls outside the frame, then place the
  // visible part on the card. (Separate sharp instances: within one pipeline
  // sharp crops before it resizes.)
  // Feather the matte edge in proportion to the upscale, so a low-res source
  // (Bob) doesn't show stair-stepped hair against the navy.
  const resized = sharp(src).resize(sw, sh);
  const rgb = await resized.clone().removeAlpha().png().toBuffer();
  const alpha = await resized
    .clone()
    .extractChannel("alpha")
    .blur(Math.max(1, scale * 0.5))
    .png()
    .toBuffer();
  const scaled = await sharp(rgb)
    .joinChannel(alpha)
    .png()
    .toBuffer();
  const visTop = Math.max(0, -top);
  const person = await sharp(scaled)
    .extract({ left: -left, top: visTop, width: HS_W, height: Math.min(sh - visTop, HS_H - Math.max(0, top)) })
    .png()
    .toBuffer();

  const card = await sharp(cardLight(HS_W, HS_H))
    .composite([
      { input: person, left: 0, top: Math.max(0, top) },
      { input: baseFade(HS_W, HS_H) },
    ])
    .flatten({ background: NAVY })
    .png()
    .toBuffer();

  const outH = Math.round(HS_OUT_W / (HS_W / HS_H));
  for (const fmt of ["avif", "webp"]) {
    let p = grade(sharp(card).resize(HS_OUT_W, outH), HS_OUT_W, outH);
    p = fmt === "avif" ? p.avif({ quality: 62, effort: 4 }) : p.webp({ quality: 82 });
    const file = `${OUT}/${cutout}-${HS_OUT_W}.${fmt}`;
    await p.toFile(file);
    console.log("  wrote", file, `(${HS_OUT_W}x${outH})`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
