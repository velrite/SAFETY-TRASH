import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/services/platform-engineering",
    "/services/devsecops",
    "/services/cloud-infrastructure",
    "/services/systems-engineering",
    "/case-studies",
    "/blog",
    "/contact",
  ];
  return routes.map((r) => ({
    url: `https://velrite.com${r}`,
    lastModified: new Date(),
  }));
}
