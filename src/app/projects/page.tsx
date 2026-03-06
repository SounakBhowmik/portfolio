import Link from "next/link";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <section className="py-12">
      <h1 className="font-serif text-4xl">Research Projects</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} className="rounded-xl border border-border bg-card p-5">
            <h2 className="font-serif text-2xl">{project.title}</h2>
            <p className="mt-2 text-sm text-foreground/75">{project.description}</p>
            <Link href={`/projects/${project.slug}`} className="mt-3 inline-block text-sm">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
