import type { Quote, QuoteWithPerson } from "@/types";
import { PEOPLE, type PersonKey } from "./people";

/** Every quote on the site, written once. Sections refer to quotes by key. */
export const QUOTES = {
  robHoly: {
    text: "Holy s***, that's a lot of things.",
    person: "robertBowey",
    context: "First look at his dashboard",
  },
  robSelling: {
    text: "You're not selling them their problems. You're selling them the ways to solve and fix all those problems.",
    person: "robertBowey",
  },
  rousseauMinutes: {
    text: "It did in a few minutes what my security colleague spent 1.5 days to unearth.",
    person: "rousseau",
  },
  rousseauExercise: {
    text: "That's good, that we have that exercise, because that means the AI is not making things up either.",
    person: "rousseau",
  },
  rousseauPenTesting: {
    text: "Pen testing in general is expensive. The problem you're solving here goes beyond vibe-coded software.",
    person: "rousseau",
  },
  joIncredible: {
    text: "That's incredible what you've built, guys, honestly... even just the visual side of it, it's brilliant, it's so intuitive.",
    person: "jo",
  },
  joFixIt: {
    text: "The good thing is I can fix it, so I don't have to pay someone to fix it all.",
    person: "jo",
  },
  joScared: {
    text: "I was s***ting myself\u2026 It's not as bad as I thought it was going to be.",
    person: "jo",
  },
  joThanks: {
    text: "What you've given me will be a huge help, I can't thank you enough!",
    person: "jo",
  },
  aliceSimply: {
    text: "I like how simply it's explained. You're clearly explaining the scenario rather than giving me just a bunch of words I don't understand.",
    person: "alice",
  },
  aliceFixes: {
    text: "Not a challenge at all. The explanations are the best part for me. Simple and clear.",
    person: "alice",
  },
  aliceTimeShort: {
    text: "You're giving me my time back.",
    person: "alice",
  },
  aliceTime: {
    text: "You're giving me my time back. Otherwise I'm spending however many hours researching things that don't actually move me forward.",
    person: "alice",
  },
  waleGateway: {
    text: "All you know is you have a very fancy interface, very nice looking, but the truth is at the back end there's so much gateway for a hacker.",
    person: "wale",
  },
  catherineEasy: {
    text: "Looks great from a user's point of view. Nice and easy to use.",
    person: "catherine",
  },
  mcleodVibe: {
    text: "There's a whole bunch of people vibe coding stuff now that don't really know what they can do, and they can totally make mistakes.",
    person: "robertMcLeod",
  },
  // Richard agreed to "first-time builders" in place of "amateur builders".
  richardBuilders: {
    text: "Whilst we're now able to build anything we want, based on any idea we have, the grim reality is you can build something that is inherently insecure or dangerous for your users. Startup Launchpad is a fantastic tool to help first-time builders create proper businesses, reducing risk and safeguarding their users. Love it.",
    person: "richard",
  },
  rosiePaying: {
    text: "I was paying 250 quid a month for a similar service. So the price has come down and the value has gone up.",
    person: "rosie",
  },
  jasonCalm: {
    text: "Even as a seasoned software developer, I feel calmed knowing all my code changes are being checked daily by a 'security expert' system. It's well worth paying to remove the stress of unknown security issues and broken code, and having more time to work on the fun parts of running a tech business!",
    person: "jason",
  },
  jasonPremium: {
    text: "It's specialized. The idea is that AI can go do all the stuff, but this is premium. This is comparing it to a contractor that's £500 a day.",
    person: "jason",
  },
} as const satisfies Record<string, Quote<PersonKey>>;

export type QuoteKey = keyof typeof QUOTES;

/** Looks up a quote and attaches its person, ready to pass to a component. */
export function resolveQuote(key: QuoteKey): QuoteWithPerson {
  const quote: Quote<PersonKey> = QUOTES[key];
  const person = PEOPLE[quote.person];
  return quote.context === undefined
    ? { text: quote.text, person }
    : { text: quote.text, person, context: quote.context };
}
