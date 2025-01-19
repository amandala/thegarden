import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import styles from "@/app/layout.module.css";
import { SunnyBackground } from "@/app/components/SunnyBackground";

import GardenProvider from "./garden-provider";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GardenProvider>
          <div className={styles.page}>
            <SunnyBackground />
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}></footer>
          </div>
        </GardenProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
