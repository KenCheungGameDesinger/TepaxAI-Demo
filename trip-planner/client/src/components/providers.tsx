"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import React from "react";
import { ThemeProvider } from "./theme-provider";
import { WagmiConfig } from "wagmi";
import { chains, wagmiConfig } from "../lib/web3/connect-wallet.js";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
//
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="system">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
          </WagmiConfig>
        </ThemeProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
