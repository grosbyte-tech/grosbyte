"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/contexts/language-context";
import type { BlogSummary } from "@/lib/blogs/types";

const dateLocales: Record<string, string> = {
  eng: "en-GB",
  nep: "ne-NP",
  ger: "de-DE",
  spa: "es-ES",
};

export function ArticleMeta({ post }: { post: BlogSummary }) {
  const { language, t } = useTranslation();
  const localizedCategory =
    t<string>(`blogsPage.posts.${post.slug}.category`) ||
    t<string>(`blogsPage.categories.${post.category}`) ||
    post.category;
  const minReadText = t<string>("blogsPage.minRead") || "min read";
  const dateLocale = dateLocales[language] || "en-GB";

  return (
    <p className="article-meta flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mt-4 text-slate-500">
      <span className="text-[#0966fa] font-semibold">{localizedCategory}</span>
      <span>
        <time dateTime={post.publishedAt}>
          {new Date(`${post.publishedAt}T00:00:00Z`).toLocaleDateString(
            dateLocale,
            {
              day: "numeric",
              month: "short",
              year: "numeric",
              timeZone: "UTC",
            },
          )}
        </time>{" "}
        · {post.readingMinutes} {minReadText}
      </span>
    </p>
  );
}

export function ArticleCard({ post }: { post: BlogSummary }) {
  const { t } = useTranslation();
  const localizedTitle =
    t<string>(`blogsPage.posts.${post.slug}.title`) || post.title;
  const localizedExcerpt =
    t<string>(`blogsPage.posts.${post.slug}.excerpt`) || post.excerpt;
  const readArticleText = t<string>("blogsPage.readArticle") || "Read article";

  return (
    <article className="article-card group flex flex-col items-start border-t border-slate-200/90 pt-6 pb-3 min-w-0">
      {post.coverImage && (
        <Link
          href={`/blogs/${post.slug}`}
          className="article-card-media block w-full mb-4 overflow-hidden rounded-[10px]"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="article-card-image-wrap relative w-full aspect-[16/10] overflow-hidden rounded-[10px] bg-slate-100 border border-slate-200/80">
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt || localizedTitle}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="article-card-image object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </Link>
      )}
      <ArticleMeta post={post} />
      <h3 className="text-xl sm:text-[1.35rem] font-bold text-slate-900 group-hover:text-[#0966fa] transition-colors mt-2.5 mb-2 leading-snug line-clamp-2">
        <Link href={`/blogs/${post.slug}`}>{localizedTitle}</Link>
      </h3>
      <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed line-clamp-3 mb-4">
        {localizedExcerpt}
      </p>
      <Link
        className="editorial-link text-[#0966fa] hover:text-[#0052cc] font-semibold text-sm inline-flex items-center gap-1.5 transition-colors mt-auto group/link"
        href={`/blogs/${post.slug}`}
        aria-label={`${readArticleText}: ${localizedTitle}`}
      >
        <span>{readArticleText}</span>
        <span
          aria-hidden="true"
          className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
        >
          ↗
        </span>
      </Link>
    </article>
  );
}
