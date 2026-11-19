import { serviceMetadata } from "@/components/services/service-ui";
import { BlogPageContent } from "@/components/blogs/blog-page-content";
import { listPosts } from "@/lib/blogs/repository";

export const metadata = serviceMetadata(
  "Blogs",
  "Practical reading on websites, software, automation, and digital marketing. Explore Grosbyte’s sample article library.",
  "/blogs",
);

export default async function BlogsPage() {
  const posts = await listPosts();

  return <BlogPageContent posts={posts} />;
}
