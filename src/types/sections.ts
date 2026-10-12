/** Content shapes for each page section. Organisms take these as props. */
import type {
  Severity,
  ComparisonColumn,
  ComparisonRow,
  DashTileData,
  Faq,
  Finding,
  Link,
  Person,
  Photo,
  Plan,
  RichText,
  Stat,
  Step,
} from "./content";

/** A quote with its person already looked up, ready to render. */
export interface QuoteWithPerson {
  readonly text: string;
  readonly person: Person;
  readonly context?: string;
}

export interface HeaderContent {
  readonly wordmark: {
    readonly lead: string;
    readonly accent: string;
    readonly href: string;
    /** Logo image shown before the name. */
    readonly logo?: string;
  };
  readonly navLinks: readonly Link[];
  readonly ctaLabel: string;
  /** Accessible name for the phone menu button. */
  readonly menuLabel: string;
}

export interface HeroContent {
  readonly title: RichText;
  readonly lede: string;
  readonly ctaLabel: string;
  readonly note: string;
  /** Accessible name for the rotating quote card. */
  readonly quotesLabel: string;
  /** Start of each dot button's label, followed by the person's name. */
  readonly quoteDotLabel: string;
  readonly quotes: readonly QuoteWithPerson[];
}

export interface PartnerLogo {
  readonly src: string;
  readonly alt: string;
  readonly intrinsicWidth: number;
  readonly intrinsicHeight: number;
  /** Rendered height in CSS pixels, from the mock-up. */
  readonly height: number;
  /** The partner's website. The logo links there when set. */
  readonly href?: string;
}

export interface TrustedByContent {
  /** Accessible name for the logo strip. Not shown on the page. */
  readonly label: string;
  readonly logos: readonly PartnerLogo[];
}

export interface StatsContent {
  readonly title: RichText;
  readonly stats: readonly Stat[];
  readonly note: string;
}

export interface FounderStoryContent {
  readonly eyebrow: string;
  readonly title: RichText;
  readonly lede: string;
  readonly ctaLabel: string;
  /** The struck-through "before" and green "after" on the tilted badge. */
  readonly before: string;
  readonly after: string;
  readonly quote: QuoteWithPerson;
}

export interface DashboardContent {
  readonly title: RichText;
  /** Accessible description of the dashboard picture. */
  readonly label: string;
  readonly repo: string;
  readonly badge: string;
  readonly tiles: readonly DashTileData[];
  readonly quote: QuoteWithPerson;
  readonly ctaLabel: string;
}

export interface FindingsContent {
  readonly title: RichText;
  readonly findings: readonly Finding[];
}

export type TerminalLineKind = "input" | "ok" | "question";

export interface TerminalLine {
  readonly kind: TerminalLineKind;
  readonly text: string;
  /** Typed out character by character rather than appearing whole. */
  readonly typed: boolean;
}

export interface TerminalContent {
  /** Accessible description of the whole terminal. */
  readonly label: string;
  readonly windowTitle: string;
  readonly lines: readonly TerminalLine[];
}

export interface ExplainContent {
  /** Heading over the explained issue. */
  readonly title: RichText;
  /** Heading over the fix prompt. */
  readonly fixTitle: RichText;
  readonly quote: QuoteWithPerson;
  readonly issue: {
    readonly severity: string;
    readonly category: string;
    readonly title: string;
    readonly body: string;
    readonly location: string;
    readonly locationNote: string;
  };
  readonly prompt: {
    readonly heading: string;
    readonly text: string;
    readonly copyLabels: { readonly idle: string; readonly copied: string; readonly selected: string };
  };
  readonly terminal: TerminalContent;
  readonly ctaLabel: string;
}

export interface FeatureQuoteContent {
  readonly title: RichText;
  readonly lede?: string;
  readonly quote: QuoteWithPerson;
  readonly photo: Photo;
  /** Longer bio shown in place of the person's usual role. */
  readonly bio: string;
  readonly ctaLabel: string;
}

export interface QuoteWallContent {
  readonly title: RichText;
  readonly quotes: readonly QuoteWithPerson[];
}

export interface HowItWorksContent {
  readonly title: RichText;
  readonly steps: readonly Step[];
  readonly ctaText: string;
  readonly ctaLabel: string;
}

export interface PricingContent {
  readonly title: RichText;
  readonly lede: string;
  readonly plans: readonly Plan[];
  /** Link to the full pricing page. Left out on the pricing page itself. */
  readonly moreLink?: Link;
  readonly quote: QuoteWithPerson;
  /** When set, these quotes cycle in place of the single quote. */
  readonly rotation?: {
    readonly label: string;
    /** Start of each dot button's label, followed by the person's name. */
    readonly dotLabel: string;
    readonly quotes: readonly QuoteWithPerson[];
  };
}

export interface ComparisonSource {
  readonly label: string;
  readonly href: string;
}

export interface CostComparisonContent {
  readonly title: RichText;
  /** Screen-reader label for the empty first header cell. */
  readonly rowHeader: string;
  /** Screen-reader text for the tick and cross cells. */
  readonly cellLabels: { readonly yes: string; readonly no: string };
  readonly columns: readonly ComparisonColumn[];
  readonly rows: readonly ComparisonRow[];
  /** Footnote text with source links in between. */
  readonly footnote: readonly (string | ComparisonSource)[];
  readonly quotes: readonly QuoteWithPerson[];
}

export interface FaqContent {
  readonly title: RichText;
  readonly faqs: readonly Faq[];
}

export interface FinalCtaContent {
  readonly title: RichText;
  readonly lede?: string;
  readonly ctaLabel: string;
  readonly contact?: string;
  readonly quote?: QuoteWithPerson;
}

export type ContactKind = "email" | "phone";

export interface FooterContact {
  readonly kind: ContactKind;
  readonly label: string;
  readonly href: string;
}

export interface FooterColumn {
  readonly title: string;
  readonly links: readonly Link[];
}

export interface FooterContent {
  /** The logo, linking to the home page. */
  readonly home: { readonly href: string; readonly logo: Photo };
  readonly columns: readonly FooterColumn[];
  readonly contact: readonly FooterContact[];
  /** The line along the bottom. */
  readonly text: string;
}

/** A numbered clause, e.g. "3.1", with an optional list underneath. */
export interface LegalClause {
  readonly number: string;
  readonly text: RichText;
  readonly list?: readonly RichText[];
}

export interface LegalSection {
  readonly number: string;
  readonly title: string;
  readonly clauses: readonly LegalClause[];
}

export interface LegalDocumentContent {
  readonly title: string;
  readonly version: string;
  readonly summary: { readonly title: string; readonly paragraphs: readonly RichText[] };
  readonly sections: readonly LegalSection[];
  readonly details: { readonly title: string; readonly lines: readonly RichText[] };
}

export interface LegalPageContent {
  readonly header: HeaderContent;
  readonly document: LegalDocumentContent;
  readonly footer: FooterContent;
}

export interface LaunchpadPageContent {
  readonly header: HeaderContent;
  readonly hero: HeroContent;
  readonly trustedBy: TrustedByContent;
  readonly stats: StatsContent;
  readonly founderStory: FounderStoryContent;
  readonly findings: FindingsContent;
  readonly findingsCta: FinalCtaContent;
  readonly dashboard: DashboardContent;
  readonly explain: ExplainContent;
  readonly featureQuote: FeatureQuoteContent;
  readonly quoteWall: QuoteWallContent;
  readonly howItWorks: HowItWorksContent;
  readonly pricing: PricingContent;
  readonly faq: FaqContent;
  readonly finalCta: FinalCtaContent;
  readonly footer: FooterContent;
}

export interface PricingPageContent {
  readonly header: HeaderContent;
  readonly pricing: PricingContent;
  readonly comparison: CostComparisonContent;
  readonly finalCta: FinalCtaContent;
  readonly footer: FooterContent;
}

export interface MissionValue {
  readonly title: string;
  readonly body: string;
}

export interface MissionContent {
  /** The mission in a few words. It is the page heading. */
  readonly title: RichText;
  /** The rest of the mission, under the heading. */
  readonly lede: string;
  /** Shown under the heading, before the story. */
  readonly photo: Photo & { readonly width: number; readonly height: number };
  readonly paragraphs: readonly string[];
  readonly valuesTitle: RichText;
  readonly values: readonly MissionValue[];
}

export interface MissionPageContent {
  readonly header: HeaderContent;
  readonly mission: MissionContent;
  readonly finalCta: FinalCtaContent;
  readonly footer: FooterContent;
}

/** A real finding, with a one-word tag for what it puts at risk. */
export interface FoundItem {
  readonly tag: string;
  readonly text: string;
}

export interface WhyContent {
  readonly intro: { readonly title: RichText; readonly lede: string };
  readonly reasons: { readonly title: RichText; readonly items: readonly MissionValue[] };
  readonly found: { readonly title: RichText; readonly items: readonly FoundItem[] };
}

export interface WhyPageContent {
  readonly header: HeaderContent;
  readonly why: WhyContent;
  readonly finalCta: FinalCtaContent;
  readonly footer: FooterContent;
}

/** Launchpad Verified levels, lowest first. */
export type Metal = "bronze" | "silver" | "gold" | "platinum";

export interface VerifiedLevel {
  readonly number: string;
  readonly name: string;
  readonly tagline: string;
  readonly rules: readonly string[];
  readonly metal: Metal;
}

export interface VerifiedBadgeExample {
  readonly label: string;
  readonly level: string;
  readonly date: string;
  readonly metal: Metal;
}

export interface RuleGroup {
  readonly title: string;
  readonly items: readonly string[];
}

export interface VerifiedContent {
  readonly intro: { readonly status?: string; readonly title: RichText; readonly lede: string };
  readonly levels: {
    readonly title: RichText;
    readonly lede?: string;
    /** Word before each level number, e.g. "Level". */
    readonly levelLabel: string;
    readonly items: readonly VerifiedLevel[];
  };
  readonly badge: {
    readonly title: RichText;
    readonly lede: string;
    readonly example: VerifiedBadgeExample;
    readonly lapsed: VerifiedBadgeExample;
    /** Caption above the example badges. */
    readonly badgesCaption: string;
    readonly lapsedNote: string;
    readonly page: {
      readonly caption: string;
      readonly heading: string;
      readonly rows: readonly { readonly label: string; readonly value: string }[];
      readonly scope: string;
    };
  };
  readonly rules: { readonly title: RichText; readonly groups: readonly RuleGroup[]; readonly note: string };
}

export interface VerifiedPageContent {
  readonly header: HeaderContent;
  readonly verified: VerifiedContent;
  readonly finalCta: FinalCtaContent;
  readonly footer: FooterContent;
}

export interface CheckGroup {
  readonly title: string;
  readonly body: string;
}

/** One area the scan covers, e.g. Security. */
export interface CheckArea {
  /** Anchor for the jump links, e.g. "security". */
  readonly id: string;
  readonly title: string;
  readonly intro: string;
  /** The most common failures, shown as cards. Security only. */
  readonly common?: { readonly title: string; readonly items: readonly MissionValue[] };
  readonly checksTitle: string;
  readonly checks: readonly CheckGroup[];
}

export interface SeverityLevel {
  readonly severity: Severity;
  readonly name: string;
  readonly body: string;
}

export interface WhatWeCheckContent {
  readonly intro: { readonly title: RichText; readonly lede: string };
  /** Accessible name for the jump links. */
  readonly jumpLabel: string;
  readonly areas: readonly CheckArea[];
  readonly scoring: {
    readonly title: RichText;
    readonly lede: string;
    readonly levels: readonly SeverityLevel[];
    readonly notes?: readonly string[];
  };
}

export interface WhatWeCheckPageContent {
  readonly header: HeaderContent;
  readonly page: WhatWeCheckContent;
  readonly finalCta: FinalCtaContent;
  readonly footer: FooterContent;
}

export interface PageMeta {
  readonly title: string;
  readonly description: string;
  /** Route path, e.g. "/startup-launchpad". Resolved against the site URL. */
  readonly path: string;
}
