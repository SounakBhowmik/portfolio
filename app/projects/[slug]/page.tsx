import Container from '@/components/container';
import Tag from '@/components/tag';
import { projects } from '@/src/content/projects';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((entry) => entry.slug === params.slug);
  if (!project) notFound();

  return (
    <Container>
      <article className="py-16">
        <h1 className="text-3xl font-semibold">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-fg/75">{project.longDescription}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <div className="mt-6 flex gap-4">
          {project.links.map((link) => (
            <a key={link.label} href={link.href} className="text-accent hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      </article>
    </Container>
  );
}
