import { Fragment, type ReactNode } from "react";
import { CritBadge } from "@/components/atoms/CritBadge";
import { Highlight } from "@/components/atoms/Highlight";
import { Kbd } from "@/components/atoms/Kbd";
import { RotatingWord } from "@/components/atoms/RotatingWord";
import type { RichSegment, RichText as RichTextContent } from "@/types";
import styles from "./RichText.module.css";

export interface RichTextProps {
  readonly content: RichTextContent;
}

function renderSegment(segment: RichSegment): ReactNode {
  if (typeof segment === "string") return segment;
  if ("highlight" in segment) {
    return <Highlight noWrap={segment.noWrap ?? false}>{segment.highlight}</Highlight>;
  }
  if ("badge" in segment) return <CritBadge>{segment.badge}</CritBadge>;
  if ("keys" in segment) {
    return (
      <span className={styles.keys}>
        {segment.keys.map((key, index) => (
          <Fragment key={key}>
            {index > 0 && "+"}
            <Kbd>{key}</Kbd>
          </Fragment>
        ))}
      </span>
    );
  }
  if ("rotate" in segment) {
    return <RotatingWord words={segment.rotate} suffix={segment.suffix ?? ""} />;
  }
  if ("link" in segment) return <a href={segment.link.href}>{segment.link.label}</a>;
  return <br />;
}

/** Renders typed heading content: plain text plus highlights, badges, keys and line breaks. */
export function RichText({ content }: RichTextProps): ReactNode {
  return content.map((segment, index) => (
    // Segments are static content, so their position is a stable key.
    <Fragment key={index}>{renderSegment(segment)}</Fragment>
  ));
}
