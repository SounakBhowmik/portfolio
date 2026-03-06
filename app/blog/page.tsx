import BlogCard from '@/components/blog-card';
import Container from '@/components/container';
import SectionTitle from '@/components/section-title';
import { getAllPosts, getAllTags } from '@/lib/blog';
import Link from 'next/link';

export default function BlogPage({ searchParams }: { searchParams?: { tag?: string } }) {
  const selectedTag = searchParams?.tag;
  const posts = getAllPosts().filter((post) => (selectedTag ? post.frontmatter.tags.includes(selectedTag) : true));
  const tags = getAllTags();

  return (
    <Container>
      <section className="py-16">
        <SectionTitle title="Writing" subtitle="Notes and essays on quantum computing, machine learning, and computational science." />
        <div className="mb-8 flex flex-wrap gap-2">
          <Link className="rounded-full border border-border px-3 py-1 text-xs" href="/blog">All</Link>
          {tags.map((tag) => (
            <Link key={tag} className="rounded-full border border-border px-3 py-1 text-xs" href={`/blog?tag=${encodeURIComponent(tag)}`}>
              {tag}
            </Link>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </Container>
  );
}
