import type { ReactNode } from "react";
import { Avatar, type AvatarSize } from "@/components/atoms/Avatar";
import { cx } from "@/lib/cx";
import type { Person } from "@/types";
import styles from "./PersonCredit.module.css";

export interface PersonCreditProps {
  readonly person: Person;
  readonly avatarSize?: Extract<AvatarSize, "md" | "lg">;
  readonly priority?: boolean;
  /** Overrides the role line, e.g. for the longer bio under the feature quote. */
  readonly role?: string;
  /** Hides the headshot, e.g. when a large portrait sits next to the quote. */
  readonly showAvatar?: boolean;
  readonly className?: string | undefined;
}

/** Name and role under a quote, with the headshot when there is one. */
export function PersonCredit({
  person,
  avatarSize = "md",
  priority = false,
  role,
  showAvatar = true,
  className,
}: PersonCreditProps): ReactNode {
  const roleLine = role ?? person.role;

  if (person.photo === undefined || !showAvatar) {
    return (
      <figcaption className={cx(styles.who, className)}>
        <b className={styles.name}>{person.name}</b>
        {roleLine}
      </figcaption>
    );
  }

  return (
    <figcaption className={cx(styles.who, styles.withAvatar, className)}>
      <Avatar src={person.photo.src} alt={person.photo.alt} size={avatarSize} priority={priority} />
      <span>
        <b className={styles.name}>{person.name}</b>
        {roleLine}
      </span>
    </figcaption>
  );
}
