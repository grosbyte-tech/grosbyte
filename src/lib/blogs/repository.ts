import { samplePosts } from "./sample-posts";
import type { BlogPost, BlogSummary } from "./types";

// Replace these data access functions when a publishing backend is introduced.
export function summarizePost(post: BlogPost): BlogSummary {
  const { sections, ...summary } = post;
  const words = sections
    .flatMap((section) => [section.heading, ...section.paragraphs])
    .join(" ")
    .split(/\s+/).length;
  return { ...summary, readingMinutes: Math.max(1, Math.ceil(words / 200)) };
}
export async function listPosts(): Promise<BlogSummary[]> {
  return [...samplePosts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map(summarizePost);
}
export async function findPost(slug: string): Promise<BlogPost | undefined> {
  return samplePosts.find((post) => post.slug === slug);
}
export async function relatedPosts(post: BlogPost): Promise<BlogSummary[]> {
  return (await listPosts())
    .filter((item) => item.slug !== post.slug)
    .sort(
      (a, b) =>
        Number(b.category === post.category) -
        Number(a.category === post.category),
    )
    .slice(0, 3);
}
