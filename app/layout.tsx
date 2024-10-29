import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import Particles from "./components/particles"; // Asegúrate de importar Particles

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
      <body className={`dark flex flex-col items-center justify-center w-screen h-screen overflow-hidden  ${inter.className}`}>
        <Particles className="absolute inset-0 -z-10" quantity={1000} />
        <div className="text-white z-10">
          {children}
        </div>
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}