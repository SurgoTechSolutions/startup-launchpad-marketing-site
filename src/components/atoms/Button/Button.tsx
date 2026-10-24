import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "slide" | "nav";

export interface ButtonProps {
  readonly href: string;
  readonly children: ReactNode;
  /** Shown before the label, e.g. a logo. */
  readonly icon?: ReactNode;
  readonly variant?: ButtonVariant;
  /** Marks the link for the page being viewed. */
  readonly current?: boolean;
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
  className,
}: ButtonProps): ReactNode {
  const classes = cx(styles[variant], icon !== undefined && styles.withIcon, current && styles.current, className);
  const label =
    icon === undefined ? (
      children
    ) : (
      <>
        {icon}
        <span>{children}</span>
      </>
    );
  const ariaCurrent = current ? "page" : undefined;

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} aria-current={ariaCurrent}>
        {label}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} aria-current={ariaCurrent} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}
