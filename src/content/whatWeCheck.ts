import { ROUTES } from "@/config/site";
import type { FinalCtaContent, PageMeta, WhatWeCheckContent, WhatWeCheckPageContent } from "@/types";
import { LAUNCHPAD_HEADER } from "./launchpad";
import { FOOTER } from "./site";

/**
 * What the scan covers, area by area. Check descriptions follow the dashboard's own
 * sections. Examples come from real scans, described by type of app rather than by name.
 */
export const WHAT_WE_CHECK = {
  intro: {
    title: ["What we ", { highlight: "check" }],
    lede: "Five areas, checked automatically every time we scan your code and your live site. Here's what's in each one, and what we've found in real apps.",
  },
  jumpLabel: "Jump to an area",
  areas: [
    {
      id: "security",
      title: "Security",
      intro:
        "The failures we find most often in AI-built products. None of them are clever attacks. All of them are one line of missing code between a stranger and your users' data.",
      common: {
        title: "What we find most often",
        items: [
          {
            title: "Keys sitting in your JavaScript",
            body: "API keys and tokens hardcoded into the bundle every visitor downloads.",
          },
          {
            title: "Database tables anyone can read",
            body: "Missing Supabase row-level security or Firebase rules, leaving user records open to anyone holding the public key.",
          },
          {
            title: "Routes that never ask who you are",
            body: "API endpoints that create, change or delete records without checking identity.",
          },
          {
            title: "Secrets committed to the repo",
            body: ".env files and credentials sitting in your git history, still live long after they were pasted in.",
          },
          {
            title: "Dependencies with known exploits",
            body: "Packages carrying published vulnerabilities, including the ones you never chose directly.",
          },
          {
            title: "Unsafe rendering and missing headers",
            body: "Patterns that let someone else's content run inside your users' browsers.",
          },
        ],
      },
      checksTitle: "The checks",
      checks: [
        {
          title: "Leaked secrets",
          body: "A password or key that unlocks one of your accounts, sitting in your code or its history where anyone with a copy can read it. We treat every one as already stolen.",
        },
        {
          title: "Risky code",
          body: "Patterns in your own code that give an attacker a way in, usually by letting them slip their own instructions into something your app trusts.",
        },
        {
          title: "Vulnerable dependencies",
          body: "Your project is built on other people's code, and some of it has publicly known flaws. Attackers scan for exactly these, because the weakness is already written up.",
        },
        {
          title: "Missing security headers",
          body: "Standard settings that tell browsers how to protect your visitors. Without them, browsers fall back to their most permissive behaviour.",
        },
        {
          title: "Legal pages",
          body: "Pages you are required to publish in the UK and EU, like a privacy policy and a sub-processor disclosure. The gap usually surfaces in a customer's security review or a regulator's complaint.",
        },
      ],
      aiReview: {
        title: "AI security review",
        body: "An AI model also reads how your app fits together and asks how someone could misuse it, using STRIDE, a standard way of listing how software gets attacked. Its findings are labelled AI-generated and treated as leads to confirm, not verdicts, so they never count towards your score.",
      },
      exampleLabel: "From a real scan",
      example:
        "17 leaked keys in one codebase, including two Stripe keys and a private signing key. 15 of them were still in the live code.",
    },
    {
      id: "accessibility",
      title: "Accessibility",
      intro:
        "The people who can't use what you built, and the standards your customers' procurement teams will ask about.",
      checksTitle: "The checks",
      checks: [
        {
          title: "Screen readers and keyboards",
          body: "Parts of a site that people relying on a screen reader or a keyboard cannot use. That locks out real customers, and in many places it is also a legal requirement.",
        },
      ],
      exampleLabel: "From a real scan",
      example:
        "A site that blocked zooming on phones and gave keyboard users no way to skip past its repeated menus.",
    },
    {
      id: "seo",
      title: "SEO",
      intro: "The reasons search engines can't find, read or rank the product you just launched.",
      checksTitle: "The checks",
      checks: [
        {
          title: "Search basics",
          body: "The tags that tell Google and social platforms what each page is. When they're missing or wrong, pages rank lower and look broken when shared.",
        },
        {
          title: "How search engines find your pages",
          body: "Whether search engines can find and index your pages. A page that never gets crawled can never rank, however good it is.",
        },
        {
          title: "Page content",
          body: "Pages with too little on them for search engines to treat as worth showing. Search engines increasingly drop thin pages from results altogether.",
        },
        {
          title: "Trust signals",
          body: "Whether a real, accountable business is clearly behind the site: a contact page, a privacy policy, named authors. It matters most if you sell anything or write about money, health or safety.",
        },
        {
          title: "Internal links",
          body: "Whether your pages link to each other, so visitors and search engines can move between them instead of hitting dead ends.",
        },
        {
          title: "AI agent readiness",
          body: "How easily AI assistants like ChatGPT and Claude can read your site. These are recommendations only and never affect your score.",
        },
      ],
      exampleLabel: "From a real scan",
      example: "99 pages that almost nothing linked to, and the same page title used on 100 pages.",
    },
    {
      id: "reliability",
      title: "Reliability & Performance",
      intro: "Slow pages and silent errors that lose people before they ever sign up.",
      checksTitle: "The checks",
      checks: [
        {
          title: "Speed",
          body: "Pages that are slower to load than they need to be. Visitors leave slow pages, and Google factors loading speed into where you rank.",
        },
      ],
      exampleLabel: "From a real scan",
      example: "No caching on any of 100 pages, and one JavaScript file over 250 KB.",
    },
    {
      id: "housekeeping",
      title: "Housekeeping",
      intro:
        "Dead code, unused dependencies and duplication: the drag that makes every future change slower.",
      checksTitle: "The checks",
      checks: [
        {
          title: "Project setup",
          body: "Groundwork most projects have, like keeping .env files out of git, error monitoring and a pinned Node version. None of it is urgent on its own, but each one is a safety net you will want later.",
        },
        {
          title: "Copy-pasted code",
          body: "The same logic copied into more than one place. Fix a bug in one copy and the others keep it, which is how problems you thought were fixed come back.",
        },
        {
          title: "Unused packages",
          body: "Packages your project installs but never uses. Each one is extra code shipped with your app, and one more thing that can carry a security flaw.",
        },
        {
          title: "Unused code",
          body: "Files nothing in your project uses. They're a common leftover from AI coding tools, and they make every change riskier because it is not obvious what is safe to touch.",
        },
      ],
      exampleLabel: "From a real scan",
      example: "600 unused files and 962 copied blocks of code in a single project.",
    },
  ],
  scoring: {
    title: ["How we ", { highlight: "score it" }],
    lede: "Every finding gets a severity, so you always know what to fix first.",
    levels: [
      { severity: "critical", name: "Critical", body: "Someone could exploit this now. Fix it first." },
      { severity: "high", name: "High", body: "Serious, and worth fixing this week." },
      { severity: "medium", name: "Medium", body: "A real weakness to fix when you can." },
      { severity: "low", name: "Low", body: "Minor, but worth tidying." },
      { severity: "info", name: "Info", body: "For awareness only. Never urgent." },
    ],
  },
} as const satisfies WhatWeCheckContent;

export const WHAT_WE_CHECK_FINAL_CTA = {
  title: ["See what we'd find in ", { highlight: "your code" }, "."],
  lede: "Your first scan is free.",
  ctaLabel: "Scan my code for free",
} as const satisfies FinalCtaContent;

export const WHAT_WE_CHECK_META = {
  title: "What we check",
  description:
    "Security, accessibility, SEO, reliability and housekeeping: what Startup Launchpad checks in your code and live site, and what we've found in real apps.",
  path: ROUTES.whatWeCheck,
} as const satisfies PageMeta;

export const WHAT_WE_CHECK_PAGE = {
  header: LAUNCHPAD_HEADER,
  page: WHAT_WE_CHECK,
  finalCta: WHAT_WE_CHECK_FINAL_CTA,
  footer: FOOTER,
} as const satisfies WhatWeCheckPageContent;
