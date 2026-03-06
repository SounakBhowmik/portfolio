import { MetadataRoute } from 'next';
import { projects } from '@/src/content/projects';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sounakbhowmik.vercel.app';
  const staticRoutes = ['', '/about', '/projects', '/blog', '/contact'].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date()
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: new Date()
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date)
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
