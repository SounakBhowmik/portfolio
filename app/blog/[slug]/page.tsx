import Container from '@/components/container';
import { getAllPosts, getPostBySlug, getTableOfContents } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import { mdxComponents } from '@/components/mdx-components';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const toc = getTableOfContents(post.content);
  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [rehypeKatex, rehypeSlug, rehypePrism]
      }
    }
  });

  return (
    <Container>
      <article className="grid gap-10 py-16 lg:grid-cols-[1fr_240px]">
        <div>
          <p className="text-sm text-fg/60">
            {post.frontmatter.date} · {post.readingTime}
          </p>
          <h1 className="mt-2 text-4xl font-semibold">{post.frontmatter.title}</h1>
          <div className="prose mt-8 max-w-none dark:prose-invert">{content}</div>
        </div>
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <h2 className="text-sm font-semibold uppercase tracking-wide">Table of Contents</h2>
          <ul className="mt-3 space-y-2 text-sm text-fg/70">
            {toc.map((item) => (
              <li key={item.slug}>
                <a href={`#${item.slug}`} className="hover:text-accent">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </article>
    </Container>
  );
}
