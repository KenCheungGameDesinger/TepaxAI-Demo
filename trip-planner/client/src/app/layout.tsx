import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TourGo | Trip planner AI",
  description: "Generated complete travel plan for free with AI powered!",
  keywords: [
    "Trip",
    "Travel",
    "AI",
    "Planning",
    "TourGo",
    "TepaxAI",
    "Trip planner",
    "Tourism",
    "Travel Planner",
  ],
  verification: { google: "7AjQ2sQF0QQYSO3ZbDrdT4WgccEBeNoFXuWV_QmaZjQ" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*
        <NextUIProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextUIProvider> */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
