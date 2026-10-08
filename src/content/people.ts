import type { Person } from "@/types";

/** Everyone quoted on the site. Quotes refer to people by key. */
export const PEOPLE = {
  robertBowey: {
    name: "Robert Bowey",
    role: "Co-Founder & Technical Director, Marka",
    photo: { src: "/images/headshot-rob.webp", alt: "Robert Bowey" },
  },
  rousseau: {
    name: "Rousseau Jean-Julien",
    role: "Founder, Nucha",
    photo: { src: "/images/headshot-russo.webp", alt: "Rousseau Jean-Julien" },
  },
  jo: {
    name: "Jo Winslade",
    role: "Founder, BarzVibe",
    photo: { src: "/images/headshot-jo.webp", alt: "Jo Winslade" },
  },
  alice: {
    name: "Alice Clements",
    role: "Founder, Tooti Music",
    photo: { src: "/images/headshot-alice.webp", alt: "Alice Clements" },
  },
  robertMcLeod: {
    name: "Robert McLeod",
    role: "Founder, HutScanner",
    photo: { src: "/images/headshot-mcleod.webp", alt: "Robert McLeod" },
  },
  rosie: {
    name: "Rosie McGilvray",
    role: "The Networker",
    photo: { src: "/images/headshot-rosie.webp", alt: "Rosie McGilvray" },
  },
  jason: {
    name: "Jason Nesbitt",
    role: "Founder, Affordable MTD",
    photo: { src: "/images/headshot-jason.webp", alt: "Jason Nesbitt" },
  },
  wale: {
    name: "Wale Ameen",
    role: "Founder, Kush",
  },
  richard: {
    name: "Richard Blakeborough",
    role: "Co-Founder, Tech Builders NCL",
    photo: { src: "/images/headshot-richard.webp", alt: "Richard Blakeborough" },
  },
  catherine: {
    name: "Catherine Hancher",
    role: "The Networker",
  },
} as const satisfies Record<string, Person>;

export type PersonKey = keyof typeof PEOPLE;

export function getPerson(key: PersonKey): Person {
  return PEOPLE[key];
}
