import type { MetadataRoute } from "next";
import { DOCS } from "../lib/docs";

const BASE_URL = "https://www.claw-navi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "daily", priority: 1, lastModified: now },
    { url: `${BASE_URL}/docs`, changeFrequency: "daily", priority: 0.9, lastModified: now },
  ];

  const docPages: MetadataRoute.Sitemap = DOCS.filter((doc) => doc.indexable !== false).map((doc) => ({
    url: `${BASE_URL}/docs/${doc.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
    lastModified: doc.updatedAt ? new Date(doc.updatedAt) : now,
  }));

  return [...staticPages, ...docPages];
}
