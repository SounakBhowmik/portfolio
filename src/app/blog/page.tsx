import Link from "next/link";
import { posts } from "@/lib/posts";

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <section className="py-12">
      <h1 className="font-serif text-4xl">Writing</h1>
      <div className="mt-6 space-y-4">
        {sorted.map((post) => (
          <article key={post.slug} className="rounded-xl border border-border bg-card p-5">
            <p className="text-xs text-foreground/60">{post.date}</p>
            <h2 className="font-serif text-2xl">{post.title}</h2>
            <p className="text-sm text-foreground/75">{post.summary}</p>
            <Link href={`/blog/${post.slug}`} className="mt-2 inline-block text-sm">
              Read post
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
