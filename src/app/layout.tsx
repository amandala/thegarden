import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import styles from "@/app/layout.module.css";
import { SkyBackground } from "@/app/components/animations/SkyBackground";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  weight: "500",
});

export const metadata: Metadata = {
  title: "The Garden",
  description: "Watch the seeds that have been planted grow!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable}`}
      >
        <div className={styles.page}>
          <SkyBackground />
          <main className={styles.main}>{children}</main>
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
