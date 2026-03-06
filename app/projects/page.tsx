import Container from '@/components/container';
import ProjectCard from '@/components/project-card';
import SectionTitle from '@/components/section-title';
import { projects } from '@/src/content/projects';

export default function ProjectsPage() {
  return (
    <Container>
      <section className="py-16">
        <SectionTitle title="Research Projects" subtitle="A selection of ongoing and completed work spanning quantum technologies and intelligent systems." />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
}
