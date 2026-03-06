import Link from 'next/link';
import Container from '@/components/container';
import SectionTitle from '@/components/section-title';
import ProjectCard from '@/components/project-card';
import BlogCard from '@/components/blog-card';
import MotionFade from '@/components/motion-fade';
import { profile } from '@/src/content/profile';
import { projects } from '@/src/content/projects';
import { getAllPosts } from '@/lib/blog';

const researchFocus = [
  {
    title: 'Quantum Machine Learning',
    text: 'Exploring hybrid quantum-classical models and inductive bias in quantum neural networks.'
  },
  { title: 'Quantum Algorithms', text: 'Understanding how quantum mechanics can transform computation and optimization.' },
  { title: 'Quantum Sensing', text: 'Investigating quantum systems such as NV-centers for sensing applications.' },
  { title: 'Security & Information', text: 'Exploring connections between quantum information, cryptography, and secure systems.' }
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <Container>
      <section className="relative py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-50">
          <svg className="h-full w-full" viewBox="0 0 800 400" fill="none">
            <circle cx="210" cy="210" r="120" stroke="currentColor" className="text-fg/20" />
            <circle cx="210" cy="210" r="72" stroke="currentColor" className="text-fg/20" />
            <path d="M80 210h260M210 90v240M120 120l180 180M300 120L120 300" stroke="currentColor" className="text-fg/15" />
            <path d="M420 120h320M420 200h320M420 280h320" stroke="currentColor" className="text-fg/15" />
          </svg>
        </div>
        <MotionFade>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">{profile.title}</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">{profile.name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-fg/80">“{profile.tagline}”</p>
          <p className="mt-4 max-w-3xl text-fg/75">{profile.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="rounded-full border border-accent px-5 py-2 text-sm hover:bg-accent/10">View Research</Link>
            <Link href="/blog" className="rounded-full border border-border px-5 py-2 text-sm hover:bg-muted">Read Blog</Link>
            <Link href="/contact" className="rounded-full border border-border px-5 py-2 text-sm hover:bg-muted">Contact</Link>
          </div>
        </MotionFade>
      </section>

      <section className="py-10">
        <SectionTitle title="Research Focus" />
        <div className="grid gap-4 md:grid-cols-2">
          {researchFocus.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-muted/20 p-6">
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-fg/75">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-10">
        <SectionTitle title="Selected Projects" />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="py-10">
        <SectionTitle title="Latest Writing" />
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </Container>
  );
}
