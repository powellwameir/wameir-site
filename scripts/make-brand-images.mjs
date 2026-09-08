/*
 * Generate branded static images from the weir mark (no new photography):
 *   public/og.png            — 1200x630 Open Graph / social share card
 *   public/apple-touch-icon.png — 180x180 iOS icon
 * Composed as SVG and rasterized with sharp (same toolchain as grade-images.mjs).
 * Run: node scripts/make-brand-images.mjs
 */
import sharp from "sharp";

const NAVY = "#142036";
const GOLD = "#A8854A";
const GOLD_LIGHT = "#C9A85F";
const CREAM = "#CFCABD";

// Interlocking weir mark as reusable SVG paths, scalable via a transform.
const mark = (x, y, unit, stroke) => `
  <g transform="translate(${x},${y}) scale(${unit})">
    <polyline points="0,0 0.45,0.68 0.9,0 1.35,0.68 1.8,0" fill="none"
      stroke="${GOLD_LIGHT}" stroke-width="0.16" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="0,0.84 0.45,0.16 0.9,0.84 1.35,0.16 1.8,0.84" fill="none"
      stroke="${GOLD}" stroke-width="0.16" stroke-linecap="round" stroke-linejoin="round"/>
  </g>`;

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${NAVY}"/>
  <g fill="none" stroke="${GOLD_LIGHT}" stroke-opacity="0.07" stroke-width="6"
     stroke-linecap="round" stroke-linejoin="round">
    <polyline points="-60,140 120,380 300,140 480,380 660,140 840,380 1020,140 1260,380"/>
    <polyline points="-60,520 120,280 300,520 480,280 660,520 840,280 1020,520 1260,280"/>
  </g>
  ${mark(96, 232, 150, GOLD)}
  <text x="98" y="452" font-family="Georgia, 'Times New Roman', serif" font-size="92"
        font-weight="600" letter-spacing="5" fill="#ffffff">WAMEIR</text>
  <text x="102" y="512" font-family="Arial, Helvetica, sans-serif" font-size="30"
        fill="${CREAM}">Community management, done right.</text>
  <text x="102" y="556" font-family="Arial, Helvetica, sans-serif" font-size="24"
        fill="${GOLD_LIGHT}">Greater Houston, Texas</text>
</svg>`;

const appleIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="34" fill="${NAVY}"/>
  ${mark(40, 66, 56, GOLD)}
</svg>`;

async function main() {
  await sharp(Buffer.from(og)).png().toFile("public/og.png");
  console.log("  wrote public/og.png (1200x630)");
  await sharp(Buffer.from(appleIcon)).png().toFile("public/apple-touch-icon.png");
  console.log("  wrote public/apple-touch-icon.png (180x180)");
  console.log("DONE.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
