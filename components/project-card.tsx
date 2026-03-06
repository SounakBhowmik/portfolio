import Link from 'next/link';
import { Project } from '@/src/content/projects';
import Tag from './tag';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-border bg-muted/30 p-6 transition hover:border-accent/60">
      <h3 className="text-xl font-medium">{project.title}</h3>
      <p className="mt-2 text-sm text-fg/75">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <Link href={`/projects/${project.slug}`} className="mt-5 inline-block text-sm text-accent hover:underline">
        Explore project →
      </Link>
    </article>
  );
}
