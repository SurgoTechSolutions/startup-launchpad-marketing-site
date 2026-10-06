// Extracts every base64 data URI from the mock-ups in design/ into public/images/,
// then writes copies of the HTML with each data URI replaced by its public path.
// Run with: node scripts/extract-assets.mjs
import { createHash } from "node:crypto";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const designDir = path.join(root, "design");
const strippedDir = path.join(designDir, "stripped");
const imagesDir = path.join(root, "public", "images");
const sourcesDir = path.join(designDir, "image-sources");

const sources = ["startup-launchpad.html", "pricing.html"];

const headshotNames = {
  "av-jo": "jo",
  "av-rob": "rob",
  "av-jason": "jason",
  "av-alice": "alice",
  "av-russo": "russo",
  "av-mcleod": "mcleod",
  "av-rosie": "rosie",
};

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const dataUri = /data:image\/(jpeg|png|webp|gif|svg\+xml);base64,([A-Za-z0-9+/=]+)/g;

/** Works out a file name for a data URI from the markup just before it. */
const nameFor = (html, index) => {
  const before = html.slice(Math.max(0, index - 400), index);

  const cssClass = /\.(av-[a-z]+)\{background-image:url\($/.exec(before);
  if (cssClass?.[1] !== undefined) {
    const key = headshotNames[cssClass[1]];
    if (key === undefined) throw new Error(`Unknown avatar class ${cssClass[1]}`);
    return { name: `headshot-${key}`, kind: "headshot" };
  }

  const tagStart = before.lastIndexOf("<img");
  if (tagStart !== -1) {
    const tag = before.slice(tagStart);
    const alt = /alt="([^"]+)"/.exec(tag)?.[1];
    if (alt === undefined) throw new Error(`Image without alt at ${index}`);
    if (/class="face"/.test(tag)) return { name: `feature-${slugify(alt)}`, kind: "feature" };
    // Inside the .logos block if it opened earlier and has not closed yet.
    const logosOpen = html.lastIndexOf('class="logos"', index);
    if (logosOpen !== -1 && html.indexOf("</div>", logosOpen) > index) {
      return { name: `logo-${slugify(alt)}`, kind: "logo" };
    }
    return { name: `image-${slugify(alt)}`, kind: "image" };
  }

  throw new Error(`Could not name the data URI at offset ${index}`);
};

const extension = { jpeg: "jpg", png: "png", webp: "webp", gif: "gif", "svg+xml": "svg" };

// Start clean so renamed files do not linger.
await rm(imagesDir, { recursive: true, force: true });
await rm(sourcesDir, { recursive: true, force: true });
await mkdir(strippedDir, { recursive: true });
await mkdir(imagesDir, { recursive: true });
await mkdir(sourcesDir, { recursive: true });

/** hash -> public path, so the same image in both files is written once. */
const written = new Map();
const report = [];

for (const file of sources) {
  const html = await readFile(path.join(designDir, file), "utf8");
  const matches = [...html.matchAll(dataUri)];
  let stripped = "";
  let cursor = 0;

  for (const match of matches) {
    const [full, type, base64] = match;
    const buffer = Buffer.from(base64, "base64");
    const hash = createHash("sha256").update(buffer).digest("hex");

    let publicPath = written.get(hash);
    if (publicPath === undefined) {
      const { name, kind } = nameFor(html, match.index);
      const ext = extension[type];
      // Keep the untouched original out of public/ for reference.
      await writeFile(path.join(sourcesDir, `${name}.${ext}`), buffer);
      const meta = await sharp(buffer).metadata();

      if (kind === "logo" || type === "svg+xml") {
        // Logos are raster PNGs in the source, so they ship as PNG.
        await writeFile(path.join(imagesDir, `${name}.${ext}`), buffer);
        publicPath = `/images/${name}.${ext}`;
      } else {
        // Photos ship as WebP. next/image resizes per request, so keep source resolution.
        await sharp(buffer).webp({ quality: 82 }).toFile(path.join(imagesDir, `${name}.webp`));
        publicPath = `/images/${name}.webp`;
      }

      written.set(hash, publicPath);
      report.push(`${publicPath}  ${meta.width}x${meta.height}  (${kind}, from ${file})`);
    }

    stripped += html.slice(cursor, match.index) + publicPath;
    cursor = match.index + full.length;
  }

  stripped += html.slice(cursor);
  await writeFile(path.join(strippedDir, file), stripped);
  report.push(`${file}: ${matches.length} data URIs, ${html.length} -> ${stripped.length} chars`);
}

console.log(report.join("\n"));
