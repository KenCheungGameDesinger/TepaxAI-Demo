import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./MyComponent/navbar";

// import { WagmiConfig } from "wagmi";
// import { chains, wagmiConfig } from "../lib/web3/wallet.js";
// import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

import "@rainbow-me/rainbowkit/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TepaxAI Trip Plan Marketplace",
  description: "TepaxAI Trip Plan Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
