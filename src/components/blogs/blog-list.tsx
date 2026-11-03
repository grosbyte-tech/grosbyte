"use client";
import { useState } from "react";
import { blogCategories, type BlogSummary } from "@/lib/blogs/types";
import { ArticleCard } from "./article-card";
export function BlogList({ posts }: { posts: BlogSummary[] }) {
  const [category, setCategory] = useState("All articles");
  const visible = posts.filter(
    (post) => category === "All articles" || post.category === category,
  );
  return (
    <section className="blog-library" aria-labelledby="blog-library-title">
      <h2 id="blog-library-title">Explore the articles</h2>
      <div
        className="blog-filters"
        role="group"
        aria-label="Filter articles by category"
      >
        {["All articles", ...blogCategories].map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="article-count" role="status">
        {visible.length} {visible.length === 1 ? "article" : "articles"}
        {category !== "All articles" ? ` in ${category}` : ""}
      </p>
      <div className="article-grid">
        {visible.map((post) => (
          <ArticleCard post={post} key={post.slug} />
        ))}
      </div>
      {visible.length === 0 && (
        <p>No articles in this category yet. Try another category.</p>
      )}
    </section>
  );
}
