import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export type BlogFrontmatter = {
  title: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
};

const contentDir = path.join(process.cwd(), "src/content/blog");

const readPost = async (slug: string) => {
  const fullPath = path.join(contentDir, `${slug}.mdx`);
  const file = await fs.readFile(fullPath, "utf8");
  return matter(file);
};

export const getAllPostSlugs = async (): Promise<string[]> => {
  const files = await fs.readdir(contentDir);
  return files.filter((name) => name.endsWith(".mdx")).map((name) => name.replace(/\.mdx$/, ""));
};

export const getAllPostsMeta = async (): Promise<BlogPostMeta[]> => {
  const slugs = await getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { data } = await readPost(slug);
      return {
        slug,
        ...(data as BlogFrontmatter),
      };
    }),
  );

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
};

export const getPostBySlug = async (slug: string) => {
  const { content } = await readPost(slug);

  const { content: compiled, frontmatter } = await compileMDX<BlogFrontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
      },
    },
  });

  return {
    slug,
    frontmatter,
    content: compiled,
  };
};
