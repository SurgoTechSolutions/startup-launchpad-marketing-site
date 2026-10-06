import Image from "next/image";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Avatar.module.css";

export type AvatarSize = "md" | "lg" | "feature";

const SIZES = {
  md: { px: 48, sizes: "48px" },
  lg: { px: 60, sizes: "60px" },
  // The feature portrait drops to 96px on narrow screens.
  feature: { px: 140, sizes: "(max-width: 480px) 96px, 140px" },
} as const satisfies Record<AvatarSize, { px: number; sizes: string }>;

export interface AvatarProps {
  readonly src: string;
  readonly alt: string;
  readonly size?: AvatarSize;
  /** Only the first hero avatar should set this. */
  readonly priority?: boolean;
}

/** Circular headshot with the orange ring. */
export function Avatar({ src, alt, size = "md", priority = false }: AvatarProps): ReactNode {
  const { px, sizes } = SIZES[size];

  return (
    <Image
      src={src}
      alt={alt}
      width={px}
      height={px}
      sizes={sizes}
      priority={priority}
      className={cx(styles.avatar, styles[size])}
    />
  );
}
