import { MetadataRoute } from 'next';
import { siteConfig } from "@/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    "",
    "/features",
    "/about",
    "/contact",
    "/solutions",
    "/pricing",
    "/privacy",
    "/terms",
    "/blog",
    "/case-studies",
    "/support"
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8
  }));

  return [...routes];
}
