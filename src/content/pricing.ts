import type { PricingContent } from "@/types";
import { resolveQuote } from "./quotes";

/** The pricing block. Shown on the main page (with a lede) and at the top of the pricing page. */
export const PRICING = {
  title: ["Pricing"],
  billing: { legend: "Billing period", monthly: "Monthly", yearly: "Yearly", saving: "Save 30%" },
  plans: [
    {
      title: "Your first scan",
      price: { amount: "Free" },
      features: [
        "Full scan of your repository and live site",
        "Your issue count across all five areas",
        "Broken down by severity, so you know how many are critical",
      ],
      ctaLabel: "Scan my code for free",
    },
    {
      title: "Ongoing protection",
      price: { amount: "£27", period: "a month", billed: "Billed monthly" },
      yearly: { amount: "£19", billed: "Billed £228 a year" },
      features: [
        "Every issue explained in plain English",
        "A fix prompt to paste in for each issue",
        "Repository checked every 6 hours",
        "Full sweep every week",
        "Cancel any time",
      ],
      featured: true,
      note: "About 1% of a contractor one day a week.",
    },
  ],
  quote: resolveQuote("rosiePaying"),
} as const satisfies PricingContent;
