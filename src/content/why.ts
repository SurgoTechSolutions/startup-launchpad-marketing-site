import { ROUTES } from "@/config/site";
import type { FinalCtaContent, PageMeta, WhyContent, WhyPageContent } from "@/types";
import { LAUNCHPAD_HEADER } from "./launchpad";
import { FOOTER } from "./site";

/**
 * Findings come from real Startup Launchpad case studies, described by type of app
 * rather than by company name.
 */
export const WHY = {
  intro: {
    title: ["Your app works. That doesn't mean it's ", { highlight: "safe" }, "."],
    lede: "AI tools build things that work. They don't build things that defend themselves. Every startup codebase we've scanned had critical security issues. Here's what those issues actually cost.",
  },
  reasons: {
    title: ["Why vibe-coded apps are ", { highlight: "different" }],
    items: [
      {
        title: "It builds the happy path",
        body: "If it works when you click through it, the AI moves on. Nobody tries what a stranger would.",
      },
      {
        title: "It doesn't know your business",
        body: "It can't tell that one customer shouldn't see another's data, or that a price should never come from the browser.",
      },
      {
        title: "It forgets what it fixed",
        body: "Old versions of files get left behind, and an AI assistant can pull them straight back in. One founder fixed the same admin loophole twice.",
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
  reassurance: {
    title: "None of this means stop vibe coding.",
    body: "Build fast. Ship ideas. Just check what you've built before strangers do. Founders who saw their results felt it too.",
    quotes: [
      {
        parts: ["Now I'm stressed. I'm really stressed.", "I'm happy that you found it."],
        attribution: "Founder of a charity marketplace, as his findings came in",
      },
      {
        parts: ["It's not as bad as I thought it was going to be."],
        attribution: "Founder of a social app, after her first scan",
      },
    ],
  },
} as const satisfies WhyContent;

export const WHY_FINAL_CTA = {
  title: ["Find out what's in your code ", { highlight: "before someone else does" }, "."],
  lede: "Free first scan. Money back if your first scan finds nothing. Cancel any time.",
  ctaLabel: "Scan my code free",
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
