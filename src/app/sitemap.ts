import type { MetadataRoute } from "next";

const BASE_URL = "https://www.gpsl-ubo.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/execution", "/technology", "/contact"];
  const now = new Date();
  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));
}
