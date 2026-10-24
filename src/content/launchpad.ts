import jasonNesbitt from "@/assets/images/jason-nesbitt.webp";
import { ROUTES } from "@/config/site";
import type {
  CheckSummaryContent,
  CostBandContent,
  DashboardContent,
  HeaderContent,
  PricingContent,
  ExplainContent,
  FaqContent,
  FeatureQuoteContent,
  FinalCtaContent,
  FindingsContent,
  FounderStoryContent,
  HeroContent,
  HookContent,
  HowItWorksContent,
  LaunchpadPageContent,
  QuoteWallContent,
  StatsContent,
  TrustedByContent,
} from "@/types";
import { HERO_QUOTE_KEYS } from "./hero";
import { PRICING } from "./pricing";
import { resolveQuote } from "./quotes";
import { FOOTER, HEADER_BASE, NAV_LINKS, WORDMARK } from "./site";

export const LAUNCHPAD_HEADER = {
  ...HEADER_BASE,
  wordmark: { ...WORDMARK, href: ROUTES.launchpad },
  navLinks: NAV_LINKS,
} as const satisfies HeaderContent;

export const HERO = {
  title: ["Automated security checks for apps ", { highlight: "built with AI" }, "."],
  lede: "Built with Lovable, Bolt, Replit, v0, Cursor or Claude? We scan your repository and your live site, explain what we find in plain English, and give you a prompt to paste in and fix everything.",
  ctaLabel: "Scan my code for free",
  note: "Find out how many issues you have before you pay anything.",
  figureLabel: "A brick wall with three bricks missing. The bricks lift off the ground and slide back into their gaps, then fall out again.",
  quotesLabel: "What founders said when they saw their results",
  quoteDotLabel: "Show quote from",
  quotes: HERO_QUOTE_KEYS.map(resolveQuote),
} as const satisfies HeroContent;

/** The question after the logos, answered by the stats that follow. */
export const HOOK = {
  title: [
    "Find the holes in your app's security, ",
    { highlight: "and fix them yourself without paying a developer" },
    ".",
  ],
  video: {
    title: "Startup Launchpad dashboard demo and fix guide",
    embedUrl: "https://www.loom.com/embed/7e43aaf3906c4d8589c2fdbb4f72dc5f",
    thumbnailSrc: "https://www.loom.com/v1/videos/7e43aaf3906c4d8589c2fdbb4f72dc5f/thumbnail.gif",
    playLabel: "Play video",
    width: 1316,
    height: 720,
  },
  ctaLabel: "Scan my code for free",
  note: "See how many issues you have before you pay anything.",
} as const satisfies HookContent;

export const TRUSTED_BY = {
  label: "Trusted by",
  logos: [
    {
      src: "/images/logo-sunderland-software-city.png",
      alt: "Sunderland Software City",
      intrinsicWidth: 314,
      intrinsicHeight: 140,
      height: 60,
      href: "https://www.sunderlandsoftwarecity.com/",
    },
    {
      src: "/images/logo-durham-city-incubator.png",
      alt: "Durham City Incubator",
      intrinsicWidth: 140,
      intrinsicHeight: 140,
      height: 70,
      href: "https://www.dcincubator.co.uk/",
    },
    {
      src: "/images/logo-tech-builders-uk-co-working-club.png",
      alt: "Tech Builders UK Co-working Club",
      intrinsicWidth: 495,
      intrinsicHeight: 76,
      height: 46,
      href: "https://techbuilders.uk/",
    },
    {
      src: "/images/logo-silicon-mingle.png",
      alt: "Silicon Mingle",
      intrinsicWidth: 577,
      intrinsicHeight: 291,
      height: 64,
      href: "https://siliconmingle.com/",
    },
  ],
} as const satisfies TrustedByContent;

export const STATS = {
  title: [
    "100% of the codebases we've scanned had ",
    { lineBreak: true },
    { badge: "critical security issues" },
  ],
  stats: [
    { value: 78, suffix: "%", label: "had API keys or secrets exposed in their code or its history" },
    { value: 67, suffix: "%", label: "let a stranger change or trigger things without logging in" },
    { value: 44, suffix: "%", label: "let someone get a product or paid features without paying" },
  ],
  note: "Figures from Startup Launchpad scans, 2026.",
} as const satisfies StatsContent;

export const FOUNDER_STORY = {
  eyebrow: "Founder story",
  title: ["Rousseau's colleague took 1.5 days to find them. ", { highlight: "We took minutes.", noWrap: true }],
  lede: "One scan of Nucha, his live platform. It matched what his own pen tester had already found, and he started the clean-up the next morning.",
  ctaLabel: "Get started for free",
  before: "1.5 days",
  after: "A few minutes",
  quote: resolveQuote("rousseauMinutes"),
} as const satisfies FounderStoryContent;

/** What a scan covers, straight after the real findings. */
export const CHECK_SUMMARY = {
  title: ["So we look for ", { highlight: "all of it" }, "."],
  checks: [
    { kind: "secrets", label: "Leaked secrets" },
    { kind: "dependencies", label: "Vulnerable dependencies" },
    { kind: "code", label: "Risky code" },
    { kind: "https", label: "HTTPS and certificates" },
    { kind: "headers", label: "Missing security headers" },
    { kind: "legal", label: "Legal pages" },
    { kind: "accessibility", label: "Accessibility" },
    { kind: "speed", label: "Speed" },
    { kind: "search", label: "Search basics" },
  ],
  moreLink: { label: "See everything we check →", href: ROUTES.whatWeCheck },
} as const satisfies CheckSummaryContent;

/** Call to action straight after the real findings. */
export const FINDINGS_CTA = {
  title: ["See what we'd find in ", { highlight: "your code" }, "."],
  lede: "Your first scan is free.",
  ctaLabel: "Scan my code for free",
} as const satisfies FinalCtaContent;

export const DASHBOARD = {
  title: ["See every issue ", { highlight: "at a glance" }, "."],
  label:
    "Example scan dashboard showing open issues across security, accessibility, SEO, reliability and performance, and housekeeping",
  repo: "demo/your-app",
  badge: "Example scan",
  tiles: [
    { area: "security", label: "Security", counts: { critical: 13, high: 53, medium: 28, low: 10, info: 57 } },
    { area: "accessibility", label: "Accessibility", counts: { high: 11, low: 14, info: 1 } },
    { area: "seo", label: "SEO", counts: { high: 3, low: 30, info: 7 } },
    { area: "reliability", label: "Reliability & Performance", counts: { medium: 14, info: 2 } },
    // Cost is hidden until the feature ships. When it does, restore this tile, the word "cost"
    // in the label above, and "six areas" in the free scan lede and the pricing plan.
    // { area: "cost", label: "Cost", counts: { high: 1, medium: 5, low: 2, info: 1 } },
    { area: "housekeeping", label: "Housekeeping", counts: { low: 532, info: 51 } },
  ],
  quote: resolveQuote("joIncredible"),
  ctaLabel: "Get started for free",
} as const satisfies DashboardContent;

export const FINDINGS = {
  title: ["The worst were the ", { highlight: "easiest to miss" }, "."],
  findings: [
    {
      category: "Tampering",
      source: "Secondhand marketplace",
      title: "A £2,000 item, yours for 1p",
      body: "Prices were worked out in the browser and saved straight to the database. A buyer could rewrite the total before checkout.",
    },
    {
      category: "Spoofing",
      source: "Subscription platform",
      title: "Paid features without paying",
      body: 'The payment webhook never checked who was calling. A fake "payment completed" message marked any account as a paying subscriber.',
    },
    {
      category: "Elevation of privilege",
      source: "Marketplace",
      title: "Make yourself an admin",
      body: "Any logged-in user could add one extra field to a routine profile update and give themselves full admin rights.",
    },
  ],
} as const satisfies FindingsContent;

export const EXPLAIN = {
  title: ["Understand each one ", { lineBreak: true }, "in ", { highlight: "plain English" }, "."],
  fixTitle: ["Then fix them with ", { keys: ["Ctrl", "V"] }],
  quote: resolveQuote("aliceSimply"),
  issue: {
    severity: "Critical",
    category: "Security",
    title: "Your profiles table can be read by anyone",
    body: "Row-level security isn't switched on for this table. Anyone who opens your site can copy the public Supabase key out of your JavaScript and read every row in it: names, email addresses, and anything else you store there.",
    location: "supabase/migrations/0002_profiles.sql:14",
    locationNote: "No alter table ... enable row level security statement on this table.",
  },
  prompt: {
    heading: "Fix prompt",
    text: `In supabase/migrations/, add a migration that enables Row Level
Security on the \`profiles\` table, with policies so a signed-in
user can select and update only their own row (auth.uid() = user_id).
Do not add a policy granting the anon role read access to all rows.

Then check every other table in the schema for the same gap and
list any you find.

Review the change before merging.`,
    copyLabels: { idle: "Copy prompt", copied: "Copied", selected: "Selected, press copy" },
  },
  terminal: {
    label:
      "A terminal: the fix prompt is pasted, a migration adds row level security on profiles, one critical issue is fixed. Ready to fix your code?",
    windowTitle: "your-app",
    lines: [
      { kind: "input", text: "[fix prompt pasted]", typed: true },
      { kind: "ok", text: "Added migration: row level security on profiles", typed: false },
      { kind: "ok", text: "1 critical issue fixed", typed: false },
      { kind: "question", text: "Ready to fix your code?", typed: true },
    ],
  },
} as const satisfies ExplainContent;

/** A slate band between the fixing section and Jason's story, with its button beside it. */
export const FIX_BANNER = {
  title: ["Your AI tool wrote the code. ", { lineBreak: true }, { highlight: "Now it can fix it too." }],
  ctaLabel: "Start fixing my code",
} as const satisfies FinalCtaContent;

export const FEATURE_QUOTE = {
  title: ["One less thing to ", { highlight: "worry about" }, "."],
  lede: "More time for the good stuff.",
  quote: resolveQuote("jasonCalm"),
  photo: { src: jasonNesbitt, alt: "Jason Nesbitt, smiling, in front of a dark wall" },
  bio: "15 years building software, sold his last SaaS business in 2023.",
  ctaLabel: "Scan my code for free",
} as const satisfies FeatureQuoteContent;

export const QUOTE_WALL = {
  title: ["What founders said once they'd seen their own ", { highlight: "results" }, "."],
  // Every quote used on the site except Jason's long one, which would stretch every card in its
  // row. The first half is the top row, the second half the bottom row, ordered so the same
  // person never appears twice in a row.
  quotes: [
    resolveQuote("robHoly"),
    resolveQuote("aliceTime"),
    resolveQuote("rousseauMinutes"),
    resolveQuote("joIncredible"),
    resolveQuote("waleGateway"),
    resolveQuote("jasonPremium"),
    resolveQuote("richardBuilders"),
    resolveQuote("rosiePaying"),
    resolveQuote("mcleodVibe"),
    resolveQuote("aliceSimply"),
    resolveQuote("robSelling"),
    resolveQuote("joFixIt"),
    resolveQuote("rousseauExercise"),
    resolveQuote("catherineEasy"),
    resolveQuote("aliceFixes"),
    resolveQuote("joThanks"),
    resolveQuote("robPrice"),
    resolveQuote("rousseauPenTesting"),
    resolveQuote("joScared"),
  ],
} as const satisfies QuoteWallContent;

export const HOW_IT_WORKS = {
  title: ["How it ", { highlight: "works" }],
  steps: [
    { title: "Connect", body: "Install our GitHub app. Read-only, and you can revoke it whenever you like." },
    {
      title: "Scan free",
      body: "The scan runs against your repository and your live site. You find out how many issues you have, by area and severity.",
    },
    {
      title: "Unlock",
      body: "For £27 a month, each finding says what's wrong, how someone would abuse it, and gives you a prompt to paste in to fix it.",
    },
    {
      title: "Keep watching",
      body: "Subscribers get their repository checked every 6 hours and a full sweep every week.",
    },
  ],
  ctaText: "Step one takes a couple of minutes.",
  ctaLabel: "Connect my GitHub",
  ctaIcon: "github",
} as const satisfies HowItWorksContent;

/** A slate band just above the pricing, so the reader sees what the alternatives cost first. Figures are the ones sourced on the pricing page. */
export const COST_BAND = {
  title: [
    "£2,500 buys one pen test and a PDF.",
    { lineBreak: true },
    "£27 a month checks your code ",
    { highlight: "every\u00a06\u00a0hours" },
    ", with a fix to paste in.",
  ],
  lede: "That's about 20 minutes of a security contractor's day.",
  link: { label: "See the full comparison →", href: ROUTES.pricing },
} as const satisfies CostBandContent;

// The full-comparison link lives on the cost band just above, so it isn't repeated here.
export const LAUNCHPAD_PRICING = {
  ...PRICING,
  lede: "See your numbers first. Pay when you want the fixes.",
} as const satisfies PricingContent;

export const FAQS = {
  title: ["FAQs"],
  faqs: [
    {
      question: "How does the scan work?",
      answer:
        "Around 90% is fixed rules run by purpose-built engines, so you get the same result every time. The other 10% is AI, guided by STRIDE threat modelling, looking for the ways someone would chain weaknesses together.",
    },
    {
      question: "Does this replace a pen test?",
      answer:
        "No. It's a cheap, constant first pass that catches most of what a manual review would spend its first day or two on. If you're handling sensitive data at scale, you'll still want a human to sign it off.",
    },
    {
      question: "Do I need to get every number down to zero?",
      answer:
        "No. No piece of software sits at zero. Start with the criticals, then the highs. Housekeeping is usually the biggest number and the least urgent.",
    },
    {
      question: "I'm not technical. Will I understand it?",
      answer:
        "That's who it's built for. Findings are written in terms of what could happen to your business, and each one has a prompt you can paste into the AI tool you already build with.",
    },
    {
      question: "What access do you need?",
      answer: "A GitHub app with read-only access to contents and metadata, using short-lived tokens for each scan.",
    },
    {
      question: "What happens to my code?",
      answer:
        "It's never kept at rest, never written to logs and never sent to a third-party model. Everything runs in the UK.",
    },
  ],
} as const satisfies FaqContent;

export const FINAL_CTA = {
  title: ["Find out what's in your codebase ", { highlight: "before someone else does" }, "."],
  lede: "Connect your repository, run the scan and see your numbers. No payment until you decide to unlock the fixes.",
  ctaLabel: "Scan my code for free",
  quote: resolveQuote("joThanks"),
} as const satisfies FinalCtaContent;


/** Everything the main page shows, in page order. */
export const LAUNCHPAD_PAGE = {
  header: LAUNCHPAD_HEADER,
  hero: HERO,
  trustedBy: TRUSTED_BY,
  hook: HOOK,
  stats: STATS,
  findings: FINDINGS,
  checkSummary: CHECK_SUMMARY,
  founderStory: FOUNDER_STORY,
  findingsCta: FINDINGS_CTA,
  dashboard: DASHBOARD,
  explain: EXPLAIN,
  fixBanner: FIX_BANNER,
  featureQuote: FEATURE_QUOTE,
  quoteWall: QUOTE_WALL,
  howItWorks: HOW_IT_WORKS,
  costBand: COST_BAND,
  pricing: LAUNCHPAD_PRICING,
  faq: FAQS,
  finalCta: FINAL_CTA,
  footer: FOOTER,
} as const satisfies LaunchpadPageContent;
