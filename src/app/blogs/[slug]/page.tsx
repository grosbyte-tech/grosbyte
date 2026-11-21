import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleLayout } from "@/components/blogs/article-layout";
import { serviceMetadata } from "@/components/services/service-ui";
import { JsonLd } from "@/components/seo/json-ld";
import { getBlogPostingSchema } from "@/lib/seo/schema";
import { findPost, listPosts, relatedPosts } from "@/lib/blogs/repository";
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

  return (
    <>
      <JsonLd data={getBlogPostingSchema(post)} />
      <ArticleLayout post={post} related={related} service={service} />
    </>
  );
}
