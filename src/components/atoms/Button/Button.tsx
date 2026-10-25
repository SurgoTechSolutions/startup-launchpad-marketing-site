import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Button.module.css";
import { TraceOutline } from "./TraceOutline";

export type ButtonVariant = "primary" | "slide" | "nav";

export interface ButtonProps {
  readonly href: string;
  readonly children: ReactNode;
  /** Shown before the label, e.g. a logo. */
  readonly icon?: ReactNode;
  readonly variant?: ButtonVariant;
  /** Marks the link for the page being viewed. */
  readonly current?: boolean;
  /** Set when a primary button sits on a navy band: a line of light runs round its edge as it scrolls into view and on hover. */
  readonly onDark?: boolean;
  readonly className?: string | undefined;
}

/**
 * Internal paths use next/link. Anything else, such as the sign-up subdomain, is a plain
 * anchor that opens in a new tab, so visitors keep their place on the site.
 */
export function Button({
  href,
  children,
  icon,
  variant = "primary",
  current = false,
  onDark = false,
  className,
}: ButtonProps): ReactNode {
  const classes = cx(
    styles[variant],
    icon !== undefined && styles.withIcon,
    current && styles.current,
    onDark && styles.onDark,
    className,
  );
  const label =
    icon === undefined ? (
      children
    ) : (
      <>
        {icon}
        <span>{children}</span>
      </>
    );
  // On a navy band the button carries an outline the size of itself; a line of light runs once around it when it
  // scrolls into view, and again on hover.
  // Elsewhere it ends in an arrow that nudges forward on hover.
  let content: ReactNode = label;
  if (variant === "primary" && onDark) {
    content = (
      <>
        <TraceOutline className={styles.trace} />
        {label}
      </>
    );
  } else if (variant === "primary") {
    content = (
      <>
        {label}
        <svg className={styles.arrow} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </>
    );
  }
  const ariaCurrent = current ? "page" : undefined;

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} aria-current={ariaCurrent}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} aria-current={ariaCurrent} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}
