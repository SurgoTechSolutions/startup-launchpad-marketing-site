import { ROUTES } from "@/config/site";
import type { CostComparisonContent, FinalCtaContent, HeaderContent, PricingPageContent } from "@/types";
import { PRICING } from "./pricing";
import { resolveQuote } from "./quotes";
import { FOOTER, HEADER_BASE, NAV_LINKS, WORDMARK } from "./site";

export const PRICING_HEADER = {
  ...HEADER_BASE,
  wordmark: { ...WORDMARK, href: ROUTES.launchpad },
  navLinks: NAV_LINKS,
} as const satisfies HeaderContent;

export const COST_COMPARISON = {
  title: ["What it would cost ", { highlight: "otherwise" }],
  rowHeader: "Feature",
  cellLabels: { yes: "Yes", no: "No" },
  columns: [
    { label: "One-off pen test" },
    { label: "Security contractor", sublabel: "one day a week" },
    { label: "Startup Launchpad", ours: true },
  ],
  rows: [
    {
      label: "Price",
      isPrice: true,
      cells: [
        { kind: "price", amount: "£2,500 to £12,000", unit: "per test" },
        { kind: "price", amount: "£2,300", unit: "a month" },
        { kind: "price", amount: "£20", unit: "a month" },
      ],
    },
    {
      label: "Find out how many issues you have before you pay",
      cells: [{ kind: "no" }, { kind: "no" }, { kind: "yes" }],
    },
    { label: "Results in minutes", cells: [{ kind: "no" }, { kind: "no" }, { kind: "yes" }] },
    {
      label: "A paste-in fix prompt for every finding",
      cells: [{ kind: "no" }, { kind: "no" }, { kind: "yes" }],
    },
    {
      label: "Covers accessibility, SEO, performance and housekeeping too",
      cells: [{ kind: "no" }, { kind: "no" }, { kind: "yes" }],
    },
    {
      label: "Rechecks after you fix, at no extra cost",
      cells: [{ kind: "no" }, { kind: "yes" }, { kind: "yes" }],
    },
  ],
  footnote: [
    "Contractor price is the UK median day rate for contract cyber security consultants, £576 (",
    { label: "IT Jobs Watch", href: "https://www.itjobswatch.co.uk/contracts/uk/cyber%20security%20consultant.do" },
    ", six months to 2 October 2026), at four days a month. Pen test price is the typical UK range for a small to mid-sized web app, from published 2026 price guides (",
    { label: "Cyphere", href: "https://thecyphere.com/blog/penetration-testing-cost/" },
    ", ",
    { label: "Matproof", href: "https://matproof.com/blog/penetration-testing-cost-uk-2026" },
    "). Launchpad is a first line of defence that runs all the time. It doesn't replace a manual penetration test where you need one.",
  ],
  quotes: [resolveQuote("jasonPremium"), resolveQuote("rousseauPenTesting")],
} as const satisfies CostComparisonContent;

export const PRICING_FINAL_CTA = {
  title: ["Find out how many issues you have ", { highlight: "before you pay" }, " a penny."],
  ctaLabel: "Scan my code for free",
} as const satisfies FinalCtaContent;

/** Everything the pricing page shows, in page order. */
export const PRICING_PAGE = {
  header: PRICING_HEADER,
  pricing: PRICING,
  comparison: COST_COMPARISON,
  finalCta: PRICING_FINAL_CTA,
  footer: FOOTER,
} as const satisfies PricingPageContent;
