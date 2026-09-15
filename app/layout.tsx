import type { Metadata } from "next";
import { display, body, mono } from "@/lib/fonts";
import { profile } from "@/lib/content";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? profile.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name}`,
    template: `%s | ${profile.name}`,
  },
  description: `${profile.name} ${profile.headline} CSE student at VIT Chennai working on applied ML, computer vision and backend systems.`,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: profile.name,
    description: `${profile.name} ${profile.headline}`,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name,
    description: `${profile.name} ${profile.headline}`,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} h-full`}>
      <body className="min-h-full flex flex-col overflow-x-clip">{children}</body>
    </html>
  );
}
