import { ROUTES } from "@/config/site";
import type { FinalCtaContent, PageMeta, WhyContent, WhyPageContent } from "@/types";
import { LAUNCHPAD_HEADER } from "./launchpad";
import { resolveQuote } from "./quotes";
import { FOOTER } from "./site";

/**
 * Findings come from real Startup Launchpad case studies, described by type of app
 * rather than by company name.
 */
export const WHY = {
  intro: {
    title: ["AI tools build things that work. They don't build things that defend themselves."],
    lede: "Every startup codebase we've scanned had critical security issues.",
  },
  reasons: {
    title: ["Why your AI ", { highlight: "didn't warn you" }],
    items: [
      {
        title: "It only tested what you tried",
        body: "Your app works because you clicked through it. A stranger won't click the same buttons. They'll try the ones you never thought of.",
      },
      {
        title: "It doesn't know what's precious",
        body: "To the AI it's all just code. It can't tell that your customers' data is private, or that a price should never come from the browser.",
      },
      {
        title: 'It says "fixed" and moves on',
        body: "Old files get left behind and slip straight back in. One founder fixed the same admin loophole twice.",
      },
    ],
  },
  found: {
    title: ["What we've found in ", { highlight: "real apps" }],
    items: [
      { tag: "Data", text: "Any account, including the admin, could be opened with just an email address." },
      { tag: "Money", text: "A \u00a32,000 instrument, bought for 1p." },
      { tag: "Data", text: "A stranger could guess a six-digit code and see someone's live location." },
      { tag: "Law", text: "CVs kept forever, despite a promise to delete them within 24 hours." },
      { tag: "Growth", text: "21 critical issues, found mid-negotiation with national partners." },
      { tag: "Hiring", text: "30% of one startup's code was dead code left behind by AI." },
    ],
  },
} as const satisfies WhyContent;

export const WHY_FINAL_CTA = {
  title: ["Find out what's in your code ", { highlight: "before someone else does" }, "."],
  lede: "Free first scan. Cancel any time.",
  ctaLabel: "Scan my code for free",
  quote: resolveQuote("joScared"),
} as const satisfies FinalCtaContent;

export const WHY_META = {
  title: "Why it matters",
  description:
    "AI tools build things that work. They don't build things that defend themselves. Here's what security gaps in vibe-coded apps actually cost: data, money, fines and growth.",
  path: ROUTES.why,
} as const satisfies PageMeta;

export const WHY_PAGE = {
  header: LAUNCHPAD_HEADER,
  why: WHY,
  finalCta: WHY_FINAL_CTA,
  footer: FOOTER,
} as const satisfies WhyPageContent;
