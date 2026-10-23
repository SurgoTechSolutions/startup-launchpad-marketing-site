"use client";

import { useState, type ReactNode } from "react";
import { preconnect } from "react-dom";
import type { VideoContent } from "@/types";
import styles from "./VideoEmbed.module.css";

export interface VideoEmbedProps {
  readonly video: VideoContent;
  readonly className?: string | undefined;
}

/** Loom serves the player page, its scripts and the video from these, so connections open before the click. */
const LOOM_ORIGINS = ["https://www.loom.com", "https://cdn.loom.com", "https://luna.loom.com"] as const;

/** Hides Loom's title bar and share and owner overlays, and starts playing as soon as the player loads. */
const PLAYER_PARAMS = "autoplay=1&hideEmbedTopBar=true&hide_owner=true&hide_share=true&hide_title=true";

/**
 * Shows the animated thumbnail until someone presses play, so Loom's start screen and its badge never appear.
 * The player starts loading on press rather than release, and the thumbnail stays up with a spinner until it is in.
 */
export function VideoEmbed({ video, className }: VideoEmbedProps): ReactNode {
  const [started, setStarted] = useState(false);
  const [ready, setReady] = useState(false);
  const frameClass = [styles.frame, className].filter(Boolean).join(" ");

  for (const origin of LOOM_ORIGINS) preconnect(origin, { crossOrigin: "anonymous" });

  const start = (): void => {
    setStarted(true);
  };

  return (
    <div className={frameClass} style={{ aspectRatio: `${String(video.width)} / ${String(video.height)}` }}>
      {started && (
        <iframe
          className={styles.player}
          src={`${video.embedUrl}?${PLAYER_PARAMS}`}
          title={video.title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          onLoad={() => {
            setReady(true);
          }}
        />
      )}
      {!ready && (
        <button
          type="button"
          className={styles.poster}
          onPointerDown={start}
          onClick={start}
          aria-label={`${video.playLabel}: ${video.title}`}
          aria-busy={started}
        >
          {/* An animated GIF from Loom, so next/image would add nothing. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.thumbnail} src={video.thumbnailSrc} alt="" loading="lazy" decoding="async" />
          <span className={[styles.play, started && styles.loading].filter(Boolean).join(" ")} aria-hidden="true">
            {started ? (
              <span className={styles.spinner} />
            ) : (
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
              </svg>
            )}
          </span>
        </button>
      )}
    </div>
  );
}
