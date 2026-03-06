import Link from 'next/link';
import { BlogPost } from '@/lib/blog';
import Tag from './tag';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-2xl border border-border bg-muted/20 p-6">
      <p className="text-xs text-fg/60">{post.frontmatter.date} · {post.readingTime}</p>
      <h3 className="mt-2 text-xl font-medium">
        <Link href={`/blog/${post.slug}`} className="hover:text-accent">
          {post.frontmatter.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm text-fg/75">{post.frontmatter.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.frontmatter.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </article>
  );
}
