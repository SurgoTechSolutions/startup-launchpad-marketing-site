import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "underline" | "nav";

export interface ButtonProps {
  readonly href: string;
  readonly children: ReactNode;
  readonly variant?: ButtonVariant;
  /** Marks the link for the page being viewed. */
  readonly current?: boolean;
  readonly className?: string | undefined;
}

/** Internal paths use next/link. Anything else, such as the sign-up subdomain, is a plain anchor. */
export function Button({
  href,
  children,
  variant = "primary",
  current = false,
  className,
}: ButtonProps): ReactNode {
  const classes = cx(styles[variant], current && styles.current, className);
  const ariaCurrent = current ? "page" : undefined;

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} aria-current={ariaCurrent}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} aria-current={ariaCurrent}>
      {children}
    </a>
  );
}
