import { ROUTES } from "@/config/site";
import type { PageMeta } from "@/types";

export const SITE_NAME = "SurgoTech Solutions";

/** Alt text for the shared Open Graph image. */
export const SHARE_IMAGE_ALT = "Startup Launchpad: you built something real. Do you know it's secure?";

export const LAUNCHPAD_META = {
  title: "Startup Launchpad",
  description:
    "Built with Lovable, Bolt, Replit, v0, Cursor or Claude? We scan your repository and your live site, explain what we find in plain English, and give you a prompt to paste in for every fix.",
  path: ROUTES.launchpad,
} as const satisfies PageMeta;

export const PRICING_META = {
  title: "Launchpad Pricing",
  description:
    "See your numbers first. Pay when you want the fixes. Your first scan is free, then £20 a month for every finding explained with a fix prompt.",
  path: ROUTES.pricing,
} as const satisfies PageMeta;
