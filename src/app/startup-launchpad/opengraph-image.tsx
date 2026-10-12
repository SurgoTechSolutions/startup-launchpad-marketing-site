import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { HERO } from "@/content/launchpad";
import { SHARE_IMAGE_ALT } from "@/content/metadata";
import { WORDMARK } from "@/content/site";

// Generated once at build time. The pricing route re-exports it.
export const alt = SHARE_IMAGE_ALT;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#001524";
const ACCENT = "#EB7300";

interface TitleWord {
  readonly word: string;
  readonly highlight: boolean;
}

/** Splits the hero title into words so it wraps like running text. The rolling word shows its first option. */
function titleWords(): TitleWord[] {
  return HERO.title.flatMap((segment): TitleWord[] => {
    if (typeof segment !== "string") {
      return [
        { word: segment.rotate[0], highlight: true },
        { word: segment.suffix, highlight: false },
      ];
    }
    return segment
      .split(/(?<=\s)/)
      .filter((word) => word !== "")
      .map((word) => ({ word, highlight: false }));
  });
}

export default async function OpengraphImage(): Promise<ImageResponse> {
  // Comfortaa Bold, bundled under the SIL Open Font License (see OFL.txt beside it).
  const comfortaa = await readFile(path.join(process.cwd(), "src/assets/fonts/comfortaa-latin-700-normal.woff"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#F5F6F8",
          backgroundImage:
            "linear-gradient(rgba(0,21,36,.05) 2px, transparent 2px), linear-gradient(90deg, rgba(0,21,36,.05) 2px, transparent 2px)",
          backgroundSize: "56px 56px",
          color: INK,
          fontFamily: "Comfortaa",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, whiteSpace: "pre" }}>
          {WORDMARK.lead}
          <span style={{ color: ACCENT }}>{WORDMARK.accent}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: 68, lineHeight: 1.2 }}>
            {titleWords().map(({ word, highlight }, index) => (
              <span
                // Words are static content, so their position is a stable key.
                key={index}
                style={{ color: highlight ? ACCENT : INK, whiteSpace: "pre" }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Comfortaa", data: comfortaa, weight: 700, style: "normal" }] },
  );
}
