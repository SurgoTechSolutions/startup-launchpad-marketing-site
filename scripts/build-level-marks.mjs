// Crops the S mark out of each level artwork in design/brand/levels/, removes the white
// background around it, and writes transparent WebP files to public/images/.
// Only white connected to the edge is removed, so bright highlights inside the mark stay.
// Usage: node scripts/build-level-marks.mjs
import sharp from "sharp";

const METALS = ["bronze", "silver", "gold", "platinum"];
/** The artwork has the level name lettered underneath; the mark sits above this line. */
const MARK_BOTTOM = 0.76;
const OUTPUT_HEIGHT = 240;

/** Platinum's outline is nearly white, so it needs a stricter test to keep its edges. */
const WHITE_THRESHOLD = { bronze: 236, silver: 236, gold: 236, platinum: 249 };

const isBackground = (metal, r, g, b) =>
  Math.min(r, g, b) > WHITE_THRESHOLD[metal] && Math.max(r, g, b) - Math.min(r, g, b) < 14;

for (const metal of METALS) {
  const source = sharp(`design/brand/levels/${metal}.jpg`);
  const { width, height } = await source.metadata();
  const cropHeight = Math.round(height * MARK_BOTTOM);
  const { data } = await source
    .extract({ left: 0, top: 0, width, height: cropHeight })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Flood fill from the border, clearing background pixels.
  const seen = new Uint8Array(width * cropHeight);
  const stack = [];
  for (let x = 0; x < width; x++) stack.push(x, (cropHeight - 1) * width + x);
  for (let y = 0; y < cropHeight; y++) stack.push(y * width, y * width + width - 1);
  while (stack.length > 0) {
    const i = stack.pop();
    if (seen[i] === 1) continue;
    seen[i] = 1;
    const o = i * 4;
    if (!isBackground(metal, data[o], data[o + 1], data[o + 2])) continue;
    data[o + 3] = 0;
    const x = i % width;
    if (x > 0) stack.push(i - 1);
    if (x < width - 1) stack.push(i + 1);
    if (i >= width) stack.push(i - width);
    if (i < (cropHeight - 1) * width) stack.push(i + width);
  }

  await sharp(data, { raw: { width, height: cropHeight, channels: 4 } })
    .trim({ threshold: 0 })
    .resize({ height: OUTPUT_HEIGHT })
    .webp({ quality: 90, alphaQuality: 100 })
    .toFile(`public/images/level-${metal}.webp`);
  const meta = await sharp(`public/images/level-${metal}.webp`).metadata();
  console.log(`public/images/level-${metal}.webp ${String(meta.width)}x${String(meta.height)}`);
}
