import { ROUTES } from "@/config/site";
import type { FooterContent } from "@/types";

/** Header copy shared by both pages. Each page adds its own wordmark link and nav link. */
export const HEADER_BASE = {
  ctaLabel: "Scan my code free",
} as const;

/** The header title. The lead keeps its trailing space; the accent is drawn in orange. */
export const WORDMARK = { lead: "Startup ", accent: "Launchpad" } as const;

export const FOOTER = {
  text: "©2026 SurgoTech Solutions · Newcastle upon Tyne, UK",
  links: [{ label: "Privacy policy", href: ROUTES.privacy }],
} as const satisfies FooterContent;
