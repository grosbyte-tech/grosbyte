export const blogCategories = [
  "Web Development",
  "Software Development",
  "Business Automation",
  "Digital Marketing",
  "Technology & Business",
] as const;
export type BlogCategory = (typeof blogCategories)[number];
export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  publishedAt: string;
  serviceSlug: string;
  featured: boolean;
  sections: { heading: string; paragraphs: string[] }[];
};
export type BlogSummary = Omit<BlogPost, "sections"> & {
  readingMinutes: number;
};
