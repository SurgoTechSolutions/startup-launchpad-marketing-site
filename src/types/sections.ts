/** Content shapes for each page section. Organisms take these as props. */
import type {
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
  readonly wordmark: { readonly lead: string; readonly accent: string; readonly href: string };
  readonly navLink: Link;
  readonly ctaLabel: string;
}

export interface HeroContent {
  readonly eyebrow: string;
  readonly title: RichText;
  readonly lede: string;
  readonly ctaLabel: string;
  readonly note: string;
  /** Accessible name for the rotating quote card. */
  readonly quotesLabel: string;
  readonly quotes: readonly QuoteWithPerson[];
}

export interface PartnerLogo {
  readonly src: string;
  readonly alt: string;
  readonly intrinsicWidth: number;
  readonly intrinsicHeight: number;
  /** Rendered height in CSS pixels, from the mock-up. */
  readonly height: number;
}

export interface TrustedByContent {
  readonly eyebrow: string;
  readonly logos: readonly PartnerLogo[];
}

export interface StatsContent {
  readonly title: RichText;
  readonly stats: readonly Stat[];
  readonly note: string;
}

export interface FreeScanContent {
  readonly title: RichText;
  readonly lede: string;
  readonly ctaLabel: string;
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
  readonly title: RichText;
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
  readonly quote: QuoteWithPerson;
  readonly photo: Photo;
  /** Longer bio shown in place of the person's usual role. */
  readonly bio: string;
  readonly ctaText: string;
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
}

export interface ComparisonSource {
  readonly label: string;
  readonly href: string;
}

export interface CostComparisonContent {
  readonly title: RichText;
  /** Screen-reader label for the empty first header cell. */
  readonly rowHeader: string;
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

export interface FooterContent {
  readonly text: string;
}

export interface LaunchpadPageContent {
  readonly header: HeaderContent;
  readonly hero: HeroContent;
  readonly trustedBy: TrustedByContent;
  readonly stats: StatsContent;
  readonly freeScan: FreeScanContent;
  readonly founderStory: FounderStoryContent;
  readonly dashboard: DashboardContent;
  readonly findings: FindingsContent;
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
