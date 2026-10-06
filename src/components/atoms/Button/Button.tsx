import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "underline";

export interface ButtonProps {
  readonly href: string;
  readonly children: ReactNode;
  readonly variant?: ButtonVariant;
  readonly className?: string | undefined;
}

/** Internal paths use next/link. Anything else, such as the sign-up subdomain, is a plain anchor. */
export function Button({ href, children, variant = "primary", className }: ButtonProps): ReactNode {
  const classes = cx(styles[variant], className);

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
