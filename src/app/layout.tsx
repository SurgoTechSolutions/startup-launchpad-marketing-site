import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import type { ReactNode } from "react";
import { SITE_URL } from "@/config/site";
import "./globals.css";

// Comfortaa is a variable font, so one file covers the 400 to 700 weights the design uses.
const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "swap",
  variable: "--font",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Startup Launchpad",
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): ReactNode {
  return (
    <html lang="en-GB" className={comfortaa.variable}>
      <body>{children}</body>
    </html>
  );
}
