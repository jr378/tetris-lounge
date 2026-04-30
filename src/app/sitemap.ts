import type { MetadataRoute } from "next";

// Bump this when site content meaningfully changes so search engines see a
// real lastModified signal instead of `new Date()` on every build.
const LAST_MODIFIED = new Date("2026-04-30");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tetrislounge.com";
  const lastModified = LAST_MODIFIED;

  return [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/tetris-lounge`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/nowhere-men`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/epk`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/shows`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/media`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];
}
