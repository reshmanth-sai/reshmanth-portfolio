import type { MetadataRoute } from "next";
import { profile } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? profile.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
