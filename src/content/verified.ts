import { ROUTES } from "@/config/site";
import type { FinalCtaContent, PageMeta, VerifiedContent, VerifiedPageContent } from "@/types";
import { LAUNCHPAD_HEADER } from "./launchpad";
import { FOOTER } from "./site";

export const VERIFIED = {
  intro: {
    status: "Coming soon for subscribers",
    title: ["Launchpad ", { highlight: "Verified" }],
    lede: "A live, public check that your app meets published security rules. Earn it, keep it, and show it to the customers and investors who ask.",
  },
  levels: {
    title: ["The ", { highlight: "Four Levels" }],
    levelLabel: "Level",
    items: [
      {
        number: "1",
        name: "Bronze",
        tagline: "Secrets clean. The most dangerous fixes, done first.",
        rules: [
          "Leaked secrets: none left, including in your code's history",
          "No .env file committed to your repository",
          "Legal pages: privacy policy and sub-processor disclosure published",
        ],
        metal: "bronze",
      },
      {
        number: "2",
        name: "Silver",
        tagline: "Baseline. No open doors.",
        rules: ["Security: no open critical findings", "Vulnerable dependencies: no critical flaws"],
        metal: "silver",
      },
      {
        number: "3",
        name: "Gold",
        tagline: "Hardened. Defended.",
        rules: [
          "Security: no open high findings",
          "Vulnerable dependencies: no high flaws",
          "Missing security headers: every medium one added",
        ],
        metal: "gold",
      },
      {
        number: "4",
        name: "Platinum",
        tagline: "Assured. And kept that way.",
        rules: [
          "Gold held for 30 days in a row",
          "Vulnerable dependencies: no medium flaws",
          "Accessibility: no high findings",
          "Reliability & Performance: no medium findings",
          "Project setup: error monitoring, a pinned Node version and one lockfile",
          "No more than 3 accepted risks, each with a reason",
        ],
        metal: "platinum",
      },
    ],
  },
  badge: {
    title: ["Show it where ", { highlight: "it counts" }],
    lede: "Add the badge to your site footer or README. It links to a public page anyone can check, showing your level and when it was last verified. Never your findings.",
    example: { label: "Launchpad verified", level: "Gold", date: "3 Oct 2026", metal: "gold" },
    lapsed: { label: "Launchpad verified", level: "Lapsed", date: "4 Nov 2026", metal: "silver" },
    lapsedNote: "If a level is lost, the badge goes grey and says so. A badge that can lapse is one people can trust.",
    page: {
      caption: "What your verification page shows",
      heading: "Gold",
      rows: [
        { label: "Held since", value: "3 Oct 2026" },
        { label: "Last verified", value: "2 hours ago" },
        { label: "Findings marked not applicable", value: "1" },
      ],
      scope:
        "Automated continuous scan of code and live site. Not a certification or a penetration test.",
    },
  },
  rules: {
    title: ["The ", { highlight: "rules" }],
    groups: [
      {
        title: "Keeping your level",
        items: [
          "Your level is re-checked on every scan of your production branch.",
          "A new critical finding gives you 7 days to fix it. A new high finding, or a newly disclosed dependency vulnerability, gives you 14.",
          "While you fix it, your page says so openly, with the days left.",
          "Run out of time and you drop to the level you still meet. Fix it and the level comes back. Platinum restarts its 30 days.",
          "No successful scan for 7 days and your badge shows Not currently verified.",
        ],
      },
      {
        title: "Fair for everyone",
        items: [
          "Only the automated checks count. AI security review findings are leads to confirm, so they never affect your level.",
          "Findings you mark not applicable are always counted on your public page.",
          "Only the branch you deploy from counts.",
          "SEO, copy-pasted code, unused code and info findings never block a level.",
          "Public badges are for subscribers, because a badge needs ongoing scanning to mean anything.",
        ],
      },
    ],
    note: "Launchpad Verified is an automated check against published rules. It is not a certification, an audit or a penetration test.",
  },
} as const satisfies VerifiedContent;

export const VERIFIED_FINAL_CTA = {
  title: ["Start your way to ", { highlight: "Bronze" }, " today."],
  lede: "Your first scan shows exactly what stands between you and each level.",
  ctaLabel: "Scan my code for free",
} as const satisfies FinalCtaContent;

export const VERIFIED_META = {
  title: "Launchpad Verified",
  description:
    "A live, public check that your app meets published security rules. Four levels from Bronze to Platinum, and a badge you can show customers and investors.",
  path: ROUTES.verified,
} as const satisfies PageMeta;

export const VERIFIED_PAGE = {
  header: LAUNCHPAD_HEADER,
  verified: VERIFIED,
  finalCta: VERIFIED_FINAL_CTA,
  footer: FOOTER,
} as const satisfies VerifiedPageContent;
