import type { PricingContent } from "@/types";
import { resolveQuote } from "./quotes";

/** The pricing block. Shown on the main page and at the top of the pricing page. */
export const PRICING = {
  title: ["Pricing"],
  lede: "See your numbers first. Pay when you want the fixes.",
  plans: [
    {
      title: "Your first scan",
      price: { amount: "Free" },
      features: [
        "Full scan of your repository and live site",
        "Your issue count across all six areas",
        "Broken down by severity, so you know how many are critical",
      ],
      ctaLabel: "Scan my code for free",
    },
    {
      title: "Ongoing protection",
      price: { amount: "£20", period: "a month" },
      features: [
        "Every finding explained in plain English",
        "A fix prompt to paste in for each one",
        "Repository checked every 6 hours",
        "Full sweep every week",
        "Cancel any time",
      ],
      featured: true,
      note: "Under 1% of a contractor one day a week.",
    },
  ],
  quote: resolveQuote("rosiePaying"),
} as const satisfies PricingContent;
