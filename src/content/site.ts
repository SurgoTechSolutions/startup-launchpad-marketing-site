import type { FooterContent } from "@/types";

/** Header copy shared by both pages. Each page adds its own wordmark link and nav link. */
export const HEADER_BASE = {
  ctaLabel: "Scan my code free",
} as const;

export const WORDMARK = { lead: "Surgo", accent: "Tech" } as const;

export const FOOTER = {
  text: "©2026 SurgoTech Solutions · Newcastle upon Tyne, UK",
} as const satisfies FooterContent;
