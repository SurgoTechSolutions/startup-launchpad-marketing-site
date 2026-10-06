import type { QuoteKey } from "./quotes";

/** Quotes the hero card cycles through, in order. */
export const HERO_QUOTE_KEYS = [
  "robHoly",
  "rousseauMinutes",
  "joFixIt",
  "aliceTimeShort",
  "rosiePaying",
] as const satisfies readonly QuoteKey[];
