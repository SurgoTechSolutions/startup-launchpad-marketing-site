import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the tracing root to this project. A stray lockfile higher up the tree otherwise wins.
  outputFileTracingRoot: __dirname,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // The app only serves the launchpad routes, so the bare root goes there.
  redirects() {
    return Promise.resolve([
      { source: "/", destination: "/startup-launchpad", permanent: false },
    ]);
  },
};

export default nextConfig;
