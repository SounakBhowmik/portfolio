import Link from "next/link";
import { projects } from "@/content/projects";
import { Card, SectionTitle, Tag } from "@/components/ui";

export function SelectedWork() {
  const featured = projects.filter((project) => project.featured).slice(0, 6);

  return (
    <section className="py-10">
      <SectionTitle title="Selected Work" subtitle="Curated project highlights spanning quantum ML, sensing, and secure information workflows." />
      <div className="grid gap-4 md:grid-cols-2">
        {featured.map((project) => (
          <Card key={project.slug} className="flex h-full flex-col">
            <h3 className="font-serif text-xl">{project.title}</h3>
            <p className="mt-2 text-sm text-foreground/75">{project.description}</p>
            {project.impact ? <p className="mt-2 text-xs text-foreground/65">Impact: {project.impact}</p> : null}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <Link href={`/projects/${project.slug}`} className="mt-4 inline-block text-sm text-accent hover:underline">
              Read more
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
