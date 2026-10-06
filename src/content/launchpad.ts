import { ROUTES } from "@/config/site";
import type {
  DashboardContent,
  HeaderContent,
  PricingContent,
  ExplainContent,
  FaqContent,
  FeatureQuoteContent,
  FinalCtaContent,
  FindingsContent,
  FounderStoryContent,
  FreeScanContent,
  HeroContent,
  HowItWorksContent,
  LaunchpadPageContent,
  QuoteWallContent,
  StatsContent,
  TrustedByContent,
} from "@/types";
import { HERO_QUOTE_KEYS } from "./hero";
import { PRICING } from "./pricing";
import { resolveQuote } from "./quotes";
import { FOOTER, HEADER_BASE, LEGAL_NAV_LINKS, WORDMARK } from "./site";

export const LAUNCHPAD_HEADER = {
  ...HEADER_BASE,
  wordmark: { ...WORDMARK, href: ROUTES.launchpad },
  navLinks: [{ label: "Pricing", href: ROUTES.pricing }, ...LEGAL_NAV_LINKS],
} as const satisfies HeaderContent;

export const HERO = {
  title: ["You built something real. Do you know it's ", { highlight: "secure" }, "?"],
  lede: "Built with Lovable, Bolt, Replit, v0, Cursor or Claude? We scan your repository and your live site, explain what we find in plain English, and give you a prompt to paste in for every fix.",
  ctaLabel: "Scan my code free",
  note: "Find out how many issues you have before you pay anything.",
  quotesLabel: "What founders said when they saw their results",
  quoteDotLabel: "Show quote from",
  quotes: HERO_QUOTE_KEYS.map(resolveQuote),
} as const satisfies HeroContent;

export const TRUSTED_BY = {
  eyebrow: "Trusted by",
  logos: [
    {
      src: "/images/logo-sunderland-software-city.png",
      alt: "Sunderland Software City",
      intrinsicWidth: 314,
      intrinsicHeight: 140,
      height: 44,
    },
    {
      src: "/images/logo-durham-city-incubator.png",
      alt: "Durham City Incubator",
      intrinsicWidth: 140,
      intrinsicHeight: 140,
      height: 52,
    },
    {
      src: "/images/logo-newcastle-university.png",
      alt: "Newcastle University",
      intrinsicWidth: 493,
      intrinsicHeight: 140,
      height: 46,
    },
    {
      src: "/images/logo-tech-builders-uk-co-working-club.png",
      alt: "Tech Builders UK Co-working Club",
      intrinsicWidth: 495,
      intrinsicHeight: 76,
      height: 34,
    },
  ],
} as const satisfies TrustedByContent;

export const STATS = {
  title: [
    { highlight: "100%" },
    " of the codebases we've scanned had",
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

export const FREE_SCAN = {
  title: ["Find out how many issues you have ", { highlight: "before you pay" }, " a penny."],
  lede: "Connect your repository and we scan it for free. You get your real numbers across all six areas, split by severity, so you know exactly what you're dealing with.",
  ctaLabel: "Scan my code free",
} as const satisfies FreeScanContent;

export const FOUNDER_STORY = {
  eyebrow: "Founder story",
  title: ["Rousseau got ", { highlight: "1.5 days", noWrap: true }, " of security review in a few minutes"],
  lede: "One scan of Nucha, his live platform. It matched what his own pen tester had already found, and he started the clean-up the next morning.",
  ctaLabel: "Get started for free",
  before: "1.5 days",
  after: "A few minutes",
  quote: resolveQuote("rousseauMinutes"),
} as const satisfies FounderStoryContent;

export const DASHBOARD = {
  title: ["Everything you ", { highlight: "need" }],
  label:
    "Example scan dashboard showing open issues across security, accessibility, SEO, reliability and performance, cost and housekeeping",
  repo: "demo/your-app",
  badge: "Example scan",
  tiles: [
    { area: "security", label: "Security", counts: { critical: 13, high: 53, medium: 28, low: 10, info: 57 } },
    { area: "accessibility", label: "Accessibility", counts: { high: 11, low: 14, info: 1 } },
    { area: "seo", label: "SEO", counts: { high: 3, low: 30, info: 7 } },
    { area: "reliability", label: "Reliability & Performance", counts: { medium: 14, info: 2 } },
    { area: "cost", label: "Cost", counts: { high: 1, medium: 5, low: 2, info: 1 } },
    { area: "housekeeping", label: "Housekeeping", counts: { low: 532, info: 51 } },
  ],
  quote: resolveQuote("joIncredible"),
  ctaLabel: "Get started for free",
} as const satisfies DashboardContent;

export const FINDINGS = {
  title: ["Real findings we caught in ", { highlight: "live" }, " applications"],
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
  title: [
    "Your issues explained in ",
    { highlight: "plain English" },
    ".",
    { lineBreak: true },
    "Then fixed with ",
    { keys: ["Ctrl", "V"] },
  ],
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
  ctaLabel: "Fix my s***!",
} as const satisfies ExplainContent;

export const FEATURE_QUOTE = {
  title: ["Peace of mind, even for the ", { highlight: "pros" }, "."],
  quote: resolveQuote("jasonCalm"),
  photo: { src: "/images/feature-jason-nesbitt.webp", alt: "Jason Nesbitt" },
  bio: "Founder, Affordable MTD. 15 years building software, sold his last SaaS business in 2023.",
  ctaText: "See what's in your code. Your first scan is free.",
  ctaLabel: "Scan my code free",
} as const satisfies FeatureQuoteContent;

export const QUOTE_WALL = {
  title: ["What founders said once they'd seen their own ", { highlight: "results" }, "."],
  quotes: [
    resolveQuote("aliceTime"),
    resolveQuote("robSelling"),
    resolveQuote("waleGateway"),
    resolveQuote("catherineEasy"),
    resolveQuote("rousseauExercise"),
    resolveQuote("mcleodVibe"),
    resolveQuote("joFixIt"),
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
      body: "For £20 a month, each finding says what's wrong, how someone would abuse it, and gives you a prompt to paste in to fix it.",
    },
    {
      title: "Keep watching",
      body: "Subscribers get their repository checked every 6 hours and a full sweep every week.",
    },
  ],
  ctaText: "Step one takes a couple of minutes.",
  ctaLabel: "Connect my GitHub",
} as const satisfies HowItWorksContent;

export const LAUNCHPAD_PRICING = {
  ...PRICING,
  moreLink: { label: "See full pricing and how it compares →", href: ROUTES.pricing },
} as const satisfies PricingContent;

export const FAQS = {
  title: ["Questions you ", { highlight: "should" }, " be asking"],
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
  title: ["Find out what's in your codebase before someone else does."],
  lede: "Connect your repository, run the scan and see your numbers. No payment until you decide to unlock the fixes.",
  ctaLabel: "Scan my code free",
  contact: "Info@SurgoTechSolutions.co.uk · +44 7407 742219",
  quote: resolveQuote("joThanks"),
} as const satisfies FinalCtaContent;


/** Everything the main page shows, in page order. */
export const LAUNCHPAD_PAGE = {
  header: LAUNCHPAD_HEADER,
  hero: HERO,
  trustedBy: TRUSTED_BY,
  stats: STATS,
  freeScan: FREE_SCAN,
  founderStory: FOUNDER_STORY,
  dashboard: DASHBOARD,
  findings: FINDINGS,
  explain: EXPLAIN,
  featureQuote: FEATURE_QUOTE,
  quoteWall: QUOTE_WALL,
  howItWorks: HOW_IT_WORKS,
  pricing: LAUNCHPAD_PRICING,
  faq: FAQS,
  finalCta: FINAL_CTA,
  footer: FOOTER,
} as const satisfies LaunchpadPageContent;
