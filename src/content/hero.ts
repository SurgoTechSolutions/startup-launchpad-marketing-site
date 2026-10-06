import type { Quote } from "@/types";
import type { PersonKey } from "./people";

/** Quotes the hero card cycles through, in order. */
export const HERO_QUOTES = [
  {
    text: "Holy s***, that's a lot of things.",
    person: "robertBowey",
    context: "First look at his dashboard",
  },
  {
    text: "It did in a few minutes what my security colleague spent 1.5 days to unearth.",
    person: "rousseau",
  },
  {
    text: "The good thing is I can fix it, so I don't have to pay someone to fix it all.",
    person: "jo",
  },
  {
    text: "You're giving me my time back.",
    person: "alice",
  },
  {
    text: "I was paying 250 quid a month for a similar service. So the price has come down and the value has gone up.",
    person: "rosie",
  },
] as const satisfies readonly Quote<PersonKey>[];
