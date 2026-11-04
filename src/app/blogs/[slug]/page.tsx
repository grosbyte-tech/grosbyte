import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Breadcrumbs, EditorialCTA } from "@/components/editorial/page-shell";
import { ArticleCard, ArticleMeta } from "@/components/blogs/article-card";
import { ShareArticle } from "@/components/blogs/share-article";
import { TableOfContents } from "@/components/blogs/table-of-contents";
import { serviceMetadata } from "@/components/services/service-ui";
import {
  findPost,
  listPosts,
  relatedPosts,
  summarizePost,
} from "@/lib/blogs/repository";
import { getService } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await listPosts()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPost(slug);
  if (!post) notFound();

  const metadata = serviceMetadata(
    post.title,
    post.excerpt,
    `/blogs/${post.slug}`,
  );

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: `${post.publishedAt}T00:00:00Z`,
      tags: [post.category, "Grosbyte Insights"],
      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              alt: post.coverImageAlt || post.title,
              width: 1200,
              height: 630,
            },
          ]
        : metadata.openGraph?.images,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await findPost(slug);
  if (!post) notFound();

  const related = await relatedPosts(post);
  const service = getService(post.serviceSlug);
  const postSummary = summarizePost(post);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://grosbyte.com";
  const articleUrl = `${siteUrl}/blogs/${post.slug}`;
  const tocItems = post.sections.map((section, i) => ({
    id: `section-${i}`,
    heading: section.heading,
  }));

  return (
    <div className="container editorial-container">
      <article className="blog-article">
        {/* Article Header & Metadata */}
        <header className="article-hero">
          <Breadcrumbs current={post.title} blog />

          <div className="article-header-meta">
            <ArticleMeta post={postSummary} />
          </div>

          <h1 className="article-title">{post.title}</h1>

          <p className="article-lead">{post.excerpt}</p>
        </header>

        {/* Article Content Layout: Sticky Table of Contents on Left + Unified 760px Reading Column */}
        <div className="article-layout">
          {/* Left Sidebar: Table of Contents */}
          <aside className="article-toc-sidebar" aria-label="Table of contents">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Unified Reading Column (760px shared max-width across image, text, share, capability, and back navigation) */}
          <div className="article-body">
            {/* Featured Cover Image (Same source as listing card, constrained to reading column width) */}
            {post.coverImage && (
              <div className="article-cover-wrap">
                <div className="article-cover-frame">
                  <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt || post.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 920px"
                    className="article-cover-image"
                  />
                </div>
                {post.coverImageAlt && (
                  <p className="article-cover-caption" aria-hidden="true">
                    {post.coverImageAlt}
                  </p>
                )}
              </div>
            )}

            {/* Article Body Content */}
            {post.sections.map((section, i) => (
              <section
                key={section.heading}
                id={`section-${i}`}
                aria-labelledby={`section-heading-${i}`}
                className="article-section"
              >
                <h2 id={`section-heading-${i}`}>{section.heading}</h2>
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </section>
            ))}

            {/* Share Article Section */}
            <ShareArticle title={post.title} url={articleUrl} />

            {/* Related Service Context Callout */}
            {service && (
              <aside
                className="article-service-card"
                aria-label="Related service"
              >
                <div className="article-service-badge">Relevant Capability</div>
                <h3 className="article-service-title">
                  <Link href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </h3>
                <p className="article-service-summary">{service.summary}</p>
                <Link
                  className="article-service-cta group"
                  href={`/services/${service.slug}`}
                >
                  <span>Explore {service.title}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </aside>
            )}

            {/* Back to Blog Listing */}
            <div className="article-back-nav">
              <Link className="article-back-link group" href="/blogs">
                <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                <span>Back to all articles</span>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Continue Reading (Related Articles Grid) */}
      {related.length > 0 && (
        <section className="related-articles" aria-labelledby="related-title">
          <div className="related-header">
            <p className="eyebrow">More to explore</p>
            <h2 id="related-title">Continue reading</h2>
          </div>
          <div className="article-grid">
            {related.map((item) => (
              <ArticleCard key={item.slug} post={item} />
            ))}
          </div>
        </section>
      )}

      {/* Reusable Editorial CTA */}
      <EditorialCTA
        title="Have a related challenge?"
        description="Share your context and explore a practical next step with Grosbyte."
        buttonText="Start a conversation"
        buttonHref="/contact"
      />
    </div>
  );
}
