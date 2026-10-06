import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./Logo.module.css";

export interface LogoProps {
  readonly src: string;
  readonly alt: string;
  /** Pixel size of the source file, used to keep the aspect ratio. */
  readonly intrinsicWidth: number;
  readonly intrinsicHeight: number;
  /** Rendered height in CSS pixels. Width follows from the aspect ratio. */
  readonly height: number;
}

/** A partner logo at a fixed rendered size, so it never shifts the layout. */
export function Logo({ src, alt, intrinsicWidth, intrinsicHeight, height }: LogoProps): ReactNode {
  const width = Math.round((height * intrinsicWidth) / intrinsicHeight);

  return <Image src={src} alt={alt} width={width} height={height} className={styles.logo} />;
}
