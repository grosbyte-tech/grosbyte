import type { MetadataRoute } from "next";
import { serviceDetails } from "@/lib/services";
import { listPosts } from "@/lib/blogs/repository";

const BASE_URL = "https://grosbyte.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static Public Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/custom-software-development`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/web-mobile-applications`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/digital-marketing`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blogs`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // 2. Dynamic Service Detail Routes (excluding the 3 pillar services that redirect to root routes)
  const dynamicServices: MetadataRoute.Sitemap = serviceDetails
    .filter(
      (service) =>
        service.slug !== "custom-software-development" &&
        service.slug !== "web-mobile-applications" &&
        service.slug !== "digital-marketing",
    )
    .map((service) => ({
      url: `${BASE_URL}/services/${service.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  // 3. Dynamic Published Blog Post Routes
  const posts = await listPosts();
  const dynamicBlogs: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blogs/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicServices, ...dynamicBlogs];
}
