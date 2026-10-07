import { ROUTES } from "@/config/site";
import type { FinalCtaContent, PageMeta, WhyContent, WhyPageContent } from "@/types";
import { LAUNCHPAD_HEADER } from "./launchpad";
import { resolveQuote } from "./quotes";
import { FOOTER, ROLLING_QUALITIES } from "./site";

/**
 * Findings come from real Startup Launchpad case studies, described by type of app
 * rather than by company name.
 */
export const WHY = {
  intro: {
    title: ["Your app works. That doesn't mean it's ", { rotate: ROLLING_QUALITIES, suffix: "." }],
    lede: "AI tools build things that work. They don't build things that defend themselves. Every startup codebase we've scanned had critical security issues. Here's what those issues actually cost.",
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
  risks: {
    title: ["What it ", { highlight: "actually costs" }],
    items: [
      {
        number: "1",
        title: "Strangers in your data",
        body: ["Anyone who knows where to look can sign in as your users, read their data, or make themselves an admin."],
        proofLabel: "From real scans",
        proofs: [
          "A job board where anyone could sign in as any account, including the admin, with just an email address.",
          "A social app where a stranger could guess a six-digit code and see someone's live location.",
          "A charity marketplace where any user could make themselves an admin by adding one field to a profile update.",
        ],
      },
      {
        number: "2",
        title: "Money walking out the door",
        body: ["Every unchecked payment and every open API key is a bill you didn't plan for."],
        proofLabel: "From real scans",
        proofs: [
          "A £2,000 instrument, bought for 1p.",
          "A yearly licence you could buy, copy, refund and keep using.",
          "Anyone on the internet could make an app run paid Google searches as fast as they liked, straight onto the founder's bill.",
          'A fake "payment completed" message unlocked paid features for free.',
        ],
      },
      {
        number: "3",
        title: "It's your name on it, not the AI's",
        body: [
          "Under UK GDPR you're responsible for your users' data, however the code was written and whoever sends your emails. A breach must be ",
          {
            link: {
              label: "reported to the ICO within 72 hours",
              href: "https://ico.org.uk/for-organisations/report-a-breach/",
            },
          },
          ". Fines can reach £17.5 million or 4% of turnover, and users can claim compensation.",
        ],
        proofLabel: "From real scans",
        proofs: [
          "A job board keeping CVs forever after failed sign-ups, despite promising to delete them within 24 hours.",
          "Analytics tracking visitors before they'd agreed to cookies.",
          "A founder who assumed his email provider was responsible for his users' data. It wasn't.",
          "Live sites with no privacy policy at all.",
        ],
      },
      {
        number: "4",
        title: "The worst week to find out",
        body: ['Big customers send security questionnaires. Investors check your code. "We haven\'t looked" stalls both.'],
        proofLabel: "From a real scan",
        proofs: [
          "One founder was mid-negotiation with several national organisations, with hundreds of new users arriving within weeks, when his scan found 21 critical issues.",
        ],
      },
      {
        number: "5",
        title: "The rewrite quote",
        body: [
          "Your first developer will read your code before your business plan. If it's a mess, they'll quote a rewrite, take months to get going, or walk away.",
        ],
        proofLabel: "From real scans",
        proofs: [
          "A pen tester found roughly 30% of one startup's code was dead code left behind by AI.",
          "Housekeeping issues ran into the thousands: 3,694 in one codebase, 2,021 in another.",
        ],
        quote: {
          parts: [
            "I've tried to make it so if I was to get a developer on board, they could read it and go, 'oh, this means that.'",
          ],
          attribution: "Founder of a social app, on keeping her code readable",
        },
      },
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
