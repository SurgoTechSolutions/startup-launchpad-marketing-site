import type { Metadata } from "next";
import type { PageMeta } from "@/types";

/**
 * Title, description, canonical URL, Open Graph and Twitter card for one route.
 * Relative URLs resolve against metadataBase in the root layout. The share image
 * comes from the opengraph-image file in the route segment.
 */
export function buildMetadata(meta: PageMeta, siteName: string): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.path },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName,
      title: meta.title,
      description: meta.description,
      url: meta.path,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}
