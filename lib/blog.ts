import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const blogDir = path.join(process.cwd(), 'content/blog');

export type BlogFrontmatter = {
  title: string;
  date: string;
  tags: string[];
  summary: string;
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: string;
};

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith('.mdx'));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(blogDir, file), 'utf8');
      const { data, content } = matter(raw);
      return {
        slug,
        frontmatter: data as BlogFrontmatter,
        content,
        readingTime: readingTime(content).text
      };
    })
    .sort((a, b) => +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const postPath = path.join(blogDir, `${slug}.mdx`);
  if (!fs.existsSync(postPath)) return null;

  const raw = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    content,
    readingTime: readingTime(content).text
  };
}

export function getAllTags() {
  const tags = new Set<string>();
  getAllPosts().forEach((post) => post.frontmatter.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

export function getTableOfContents(content: string) {
  return content
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => {
      const text = line.replace('## ', '').trim();
      const slug = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
      return { text, slug };
    });
}
