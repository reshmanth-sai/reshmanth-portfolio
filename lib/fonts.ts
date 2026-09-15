import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

export const display = localFont({
  src: [
    { path: "../public/fonts/clash-display-500.woff2", weight: "500" },
    { path: "../public/fonts/clash-display-600.woff2", weight: "600" },
    { path: "../public/fonts/clash-display-700.woff2", weight: "700" },
  ],
  variable: "--font-display",
  display: "swap",
});

export const body = localFont({
  src: [
    { path: "../public/fonts/satoshi-400.woff2", weight: "400" },
    { path: "../public/fonts/satoshi-500.woff2", weight: "500" },
    { path: "../public/fonts/satoshi-700.woff2", weight: "700" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
