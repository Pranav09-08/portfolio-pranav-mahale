import Link from "next/link";
import { getAllPostsMeta } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

export const metadata = {
  title: "Blog | Pranav",
  description: "Thoughts on software engineering, projects, and student growth.",
};

export default async function BlogPage() {
  const posts = await getAllPostsMeta();

  return (
    <main className="section-space flex-1">
      <Container>
        <SectionTitle
          eyebrow="Blog"
          title="Notes From My Learning Journey"
          subtitle="Written in MDX so you can manage posts directly in files without any backend."
        />

        <div className="grid gap-4">
          {posts.map((post) => (
            <article key={post.slug} className="glass-card rounded-2xl p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-brand">
                {formatDate(post.publishedAt)}
              </p>
              <h2 className="mt-3 text-2xl font-bold">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
