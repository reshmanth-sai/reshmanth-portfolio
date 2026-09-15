import type { MetadataRoute } from "next";
import { profile } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? profile.siteUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
