import { ROUTES } from "@/config/site";
import type {
  FaqContent,
  FinalCtaContent,
  FreeScanPageContent,
  HeaderContent,
  HookContent,
  OfferRowContent,
  PageMeta,
} from "@/types";
import { CHECK_SUMMARY, EXPLAIN, HOOK, QUOTE_STRIP } from "./launchpad";
import { resolveQuote } from "./quotes";
import { FOOTER, FREE_FIXES_CTA_LABEL, HEADER_BASE, NAV_LINKS, WORDMARK } from "./site";

/**
 * The Free App Safety Check landing page. Copy follows the No-Brainer Free Scan Offer doc: lead
 * with the free fixes, keep the trust lines by the button, and say "my app", not "my repository".
 */
const TRUST_LINE = "No card needed";

const FREE_SCAN_HEADER = {
  ...HEADER_BASE,
  wordmark: { ...WORDMARK, href: ROUTES.launchpad },
  navLinks: NAV_LINKS,
} as const satisfies HeaderContent;

const FREE_SCAN_HOOK = {
  ...HOOK,
  title: ["A free cyber security check of your code and live site. ", { highlight: "Get 5 issues fixed free" }, "."],
  subtitle: TRUST_LINE,
  ctaLabel: FREE_FIXES_CTA_LABEL,
} as const satisfies HookContent;

const OFFER_ROWS = [
  {
    title: ["A ", { highlight: "full check" }, "."],
    detail: "Your code and live site. Every issue counted.",
    tone: "ink",
    tiles: CHECK_SUMMARY.checks,
  },
  {
    title: [{ highlight: "2 security fixes" }, "."],
    detail: "Your worst security holes, with the fix to paste in.",
    tone: "crit",
    example: { issue: EXPLAIN.issue, prompt: EXPLAIN.prompt, hint: "Hover to see the fix" },
  },
  {
    title: [{ highlight: "3 more fixes" }, "."],
    detail: "Search, accessibility and speed.",
    tone: "accent",
    tiles: [
      { kind: "search", label: "Search" },
      { kind: "accessibility", label: "Accessibility" },
      { kind: "speed", label: "Speed" },
    ],
  },
] as const satisfies readonly OfferRowContent[];

const OFFER_CLOSE = {
  title: [
    "All of this is worth about a day of expert time. ",
    { lineBreak: true },
    { highlight: "You pay nothing." },
  ],
  lede: TRUST_LINE,
  ctaLabel: FREE_FIXES_CTA_LABEL,
} as const satisfies FinalCtaContent;

const FREE_SCAN_FAQS = {
  title: ["FAQs"],
  faqs: [
    {
      question: "Will you ask for my card?",
      answer: "No card, no call. You see exactly what's wrong before you pay a penny.",
    },
    {
      question: "How long does it take?",
      answer:
        "A couple of minutes to connect. The check then takes 3 to 30 minutes, and you can leave it running and come back.",
    },
    {
      question: "What access do you need?",
      answer:
        "Our GitHub app, with read-only access to your code and its details, using short-lived tokens for each check. Disconnect any time.",
    },
    {
      question: "What happens to my code?",
      answer:
        "It's never kept at rest, never written to logs and never sent to a third-party model. Everything runs in the UK.",
    },
    {
      question: "I'm not technical. Will I understand it?",
      answer:
        "That's who it's built for. Issues are written in terms of what could happen to your business, and each fix is a prompt you paste into the AI tool you already build with.",
    },
    {
      question: "What happens after my 5 free fixes?",
      answer:
        "Nothing, unless you want it to. You've paid nothing, and you know exactly what's wrong. Want the rest fixed? It's £27 a month, with your code checked every 6 hours. Cancel any time.",
    },
    {
      question: "Can it wait until after I launch?",
      answer:
        "Leaked keys get found by bots, not people. Check it before you launch, before your first payment, and before an investor asks who checked your code.",
    },
  ],
} as const satisfies FaqContent;

const FREE_SCAN_FINAL_CTA = {
  title: [
    "Find out what's in your app ",
    { highlight: "before someone else does" },
    ". ",
    { lineBreak: true },
    "Your first 5 fixes are free.",
  ],
  lede: "Every app we've checked so far had at least one critical issue. No card. Pay only if you want the rest fixed.",
  ctaLabel: FREE_FIXES_CTA_LABEL,
  quote: resolveQuote("joThanks"),
} as const satisfies FinalCtaContent;

export const FREE_SCAN_META = {
  title: "The Free App Safety Check",
  description:
    "A free check that finds the holes in your AI-built app and fixes 5 of them, including your 2 worst security issues. No card.",
  path: ROUTES.freeScan,
} as const satisfies PageMeta;

export const FREE_SCAN_PAGE = {
  header: FREE_SCAN_HEADER,
  hook: FREE_SCAN_HOOK,
  offerTitle: ["What you get, ", { highlight: "free" }, "."],
  offerRows: OFFER_ROWS,
  offerClose: OFFER_CLOSE,
  quoteStrip: QUOTE_STRIP,
  faq: FREE_SCAN_FAQS,
  finalCta: FREE_SCAN_FINAL_CTA,
  footer: FOOTER,
} as const satisfies FreeScanPageContent;
