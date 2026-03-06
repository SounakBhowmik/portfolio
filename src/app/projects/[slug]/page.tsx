import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) return notFound();

  return (
    <article className="prose py-12">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {project.impact ? <p><strong>Impact:</strong> {project.impact}</p> : null}
      <ul>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}
