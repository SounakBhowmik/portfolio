import Link from "next/link";
import { getLatestPosts } from "@/lib/posts";
import { Card, SectionTitle, Tag } from "@/components/ui";

export function FeaturedWriting() {
  const latest = getLatestPosts(3);

  return (
    <section className="py-10">
      <SectionTitle title="Featured Writing" subtitle="Recent notes on quantum machine learning, sensing, and secure hybrid systems." />
      <div className="grid gap-4 md:grid-cols-3">
        {latest.map((post) => (
          <Card key={post.slug} className="flex h-full flex-col">
            <p className="text-xs text-foreground/60">{new Date(post.date).toLocaleDateString()}</p>
            <h3 className="mt-1 font-serif text-lg">{post.title}</h3>
            <p className="mt-2 text-sm text-foreground/75">{post.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
      <Link href="/blog" className="mt-4 inline-block text-sm text-accent hover:underline">
        View all writing
      </Link>
    </section>
  );
}
