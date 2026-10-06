import type { ReactNode } from "react";
import { serializeJsonLd } from "@/lib/jsonLd";

export interface JsonLdProps {
  readonly data: Record<string, unknown>;
}

/** Structured data for search engines. A plain script tag, as JSON-LD is data, not code. */
export function JsonLd({ data }: JsonLdProps): ReactNode {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />;
}
