/** Shared shapes for everything in src/content. Components take these as props. */

export type Severity = "critical" | "high" | "medium" | "low" | "info";

export interface Photo {
  readonly src: string;
  readonly alt: string;
}

export interface Person {
  readonly name: string;
  /** Job title and company, shown under the name. */
  readonly role: string;
  readonly photo?: Photo;
}

/**
 * A quote attributed to a person in the people registry.
 * K is the registry's key type, so a typo in a person key fails type checking.
 */
export interface Quote<K extends string = string> {
  /** The words only, without quote marks. Components add the marks they need. */
  readonly text: string;
  readonly person: K;
  /** Short scene-setting line shown above the quote, e.g. "First look at his dashboard". */
  readonly context?: string;
}

/**
 * Heading text with inline styling. Plain strings render as text.
 * Objects mark the orange highlight, the red badge, keyboard keys or a line break.
 */
export type RichSegment =
  | string
  | { readonly highlight: string; readonly noWrap?: boolean }
  | { readonly badge: string }
  | { readonly keys: readonly string[] }
  | { readonly link: Link }
  | { readonly rotate: readonly string[]; readonly suffix?: string }
  | { readonly lineBreak: true };

export type RichText = readonly RichSegment[];

export interface Stat {
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
}

/** STRIDE threat categories used to tag findings. */
export type ThreatCategory =
  | "Spoofing"
  | "Tampering"
  | "Repudiation"
  | "Information disclosure"
  | "Denial of service"
  | "Elevation of privilege";

export interface Finding {
  readonly category: ThreatCategory;
  /** The kind of application it was found in. */
  readonly source: string;
  readonly title: string;
  readonly body: string;
}

export interface Step {
  readonly title: string;
  readonly body: string;
}

export interface Plan {
  readonly title: string;
  readonly price: { readonly amount: string; readonly period?: string };
  readonly features: readonly string[];
  /** Draws the plan with the orange border. */
  readonly featured?: boolean;
  /** Button label. Plans without one show the note instead. */
  readonly ctaLabel?: string;
  readonly note?: string;
}

export interface Faq {
  readonly question: string;
  readonly answer: string;
}

/** A tick or cross, or a price with a short unit underneath. */
export type ComparisonCell =
  | { readonly kind: "yes" }
  | { readonly kind: "no" }
  | { readonly kind: "price"; readonly amount: string; readonly unit: string };

export interface ComparisonColumn {
  readonly label: string;
  readonly sublabel?: string;
  /** The Startup Launchpad column, drawn with the warm background. */
  readonly ours?: boolean;
}

export interface ComparisonRow {
  readonly label: string;
  readonly cells: readonly ComparisonCell[];
  /** The price row uses larger figures. */
  readonly isPrice?: boolean;
}

export type DashArea =
  | "security"
  | "accessibility"
  | "seo"
  | "reliability"
  | "cost"
  | "housekeeping";

export interface DashTileData {
  readonly area: DashArea;
  readonly label: string;
  /** Open issues per severity. Severities with no issues are left out. */
  readonly counts: Partial<Record<Severity, number>>;
}

export interface Link {
  readonly label: string;
  readonly href: string;
}
