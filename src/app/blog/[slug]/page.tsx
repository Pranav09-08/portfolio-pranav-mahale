import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui/container";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: `${post.frontmatter.title} | Blog`,
      description: post.frontmatter.excerpt,
    };
  } catch {
    return {
      title: "Post Not Found | Blog",
    };
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);

    return (
      <main className="section-space flex-1">
        <Container>
          <article className="glass-card mx-auto max-w-3xl rounded-3xl p-8 md:p-10">
            <p className="font-mono text-xs uppercase tracking-widest text-brand">
              {formatDate(post.frontmatter.publishedAt)}
            </p>
            <h1 className="mt-3 text-3xl font-black leading-tight md:text-5xl">{post.frontmatter.title}</h1>
            <p className="mt-4 text-base leading-8 text-muted">{post.frontmatter.excerpt}</p>

            <div className="mdx-content mt-10">
              {post.content}
            </div>
          </article>
        </Container>
      </main>
    );
  } catch {
    notFound();
  }
}
