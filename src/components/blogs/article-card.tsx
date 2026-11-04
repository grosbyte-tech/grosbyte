import Link from "next/link";
import type { BlogSummary } from "@/lib/blogs/types";
export function ArticleMeta({ post }: { post: BlogSummary }) {
  return (
    <p className="article-meta">
      <span>{post.category}</span>
      <span>
        <time dateTime={post.publishedAt}>
          {new Date(`${post.publishedAt}T00:00:00Z`).toLocaleDateString(
            "en-GB",
            {
              day: "numeric",
              month: "short",
              year: "numeric",
              timeZone: "UTC",
            },
          )}
        </time>{" "}
        · {post.readingMinutes} min read
      </span>
    </p>
  );
}
export function ArticleCard({ post }: { post: BlogSummary }) {
  return (
    <article className="article-card">
      <ArticleMeta post={post} />
      <h3>
        <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <Link
        className="editorial-link"
        href={`/blogs/${post.slug}`}
        aria-label={`Read ${post.title}`}
      >
        Read article <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
