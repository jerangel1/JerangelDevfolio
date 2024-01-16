import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jesus Rangel | Full Stack Developer",
  description:
    "Bringing ideas to life with React, JavaScript, and TypeScript. Ready to take the first step? Lets discuss your idea today. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`dark bg-black ${inter.className}`}>
        {children}
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
