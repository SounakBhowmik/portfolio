import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import { Callout } from "@/components/mdx/Callout";

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) return notFound();

  return (
    <article className="prose py-12">
      <p className="text-xs text-foreground/60">{post.date}</p>
      <h1>{post.title}</h1>
      <p>{post.summary}</p>
      <Callout title="Research Note">
        This placeholder route keeps the App Router + MDX pipeline surface intact while applying the updated scholarly visual style.
      </Callout>
    </article>
  );
}
