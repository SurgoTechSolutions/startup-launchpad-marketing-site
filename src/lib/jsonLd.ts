import type { Faq } from "@/types";

/** schema.org FAQPage built from the typed FAQ content. */
export function faqPageJsonLd(faqs: readonly Faq[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Serialises JSON-LD for an inline script, escaping "<" so content cannot close the tag. */
export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
