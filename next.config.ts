import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
