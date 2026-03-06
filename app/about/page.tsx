import Container from '@/components/container';
import SectionTitle from '@/components/section-title';
import Timeline from '@/components/timeline';

const timeline = [
  {
    role: 'Engineer in Residence',
    org: 'Hart Institute for Technology, Innovation and Entrepreneurship',
    date: 'Jan 2026 – Present',
    detail: 'Mentoring start-ups and providing technical engineering guidance.'
  },
  {
    role: 'Graduate Research Assistant',
    org: 'Southern Methodist University',
    date: 'Aug 2025 – Present',
    detail: 'Researching quantum computation and machine learning interfaces.'
  },
  {
    role: 'Digital Content Associate',
    org: 'Prokreeti Welfare Trust',
    date: 'Jan 2021 – Present',
    detail: 'Leading digital communication and infrastructure for social initiatives.'
  },
  {
    role: 'Graduate Research Assistant',
    org: 'University of Tennessee, Knoxville',
    date: 'Aug 2023 – Aug 2025',
    detail: 'Developed research systems bridging embedded intelligence and advanced computation.'
  },
  {
    role: 'Software Engineer R&D',
    org: 'Lexmark',
    date: 'Jun 2021 – Jan 2023',
    detail: 'Built and evaluated production research prototypes in industrial settings.'
  }
];

export default function AboutPage() {
  return (
    <Container>
      <section className="py-16">
        <SectionTitle title="About" subtitle="Researcher working across physics, ML, and computing." />
        <div className="max-w-3xl space-y-4 text-fg/80">
          <p>
            My research journey began in electrical engineering and gradually moved toward the foundational questions of computation.
            I became increasingly interested in how physical systems themselves can encode and process information.
          </p>
          <p>
            This transition led me into quantum computing, where I now study quantum algorithms, sensing, and machine learning models.
            I focus on interdisciplinary problems that combine rigorous theoretical thinking with practical experimentation.
          </p>
          <p>
            Across projects, I am motivated by a consistent question: how can we design intelligent systems that leverage both quantum and classical resources in meaningful ways?
          </p>
        </div>
      </section>
      <section className="py-8">
        <SectionTitle title="Career Timeline" />
        <Timeline items={timeline} />
      </section>
      <section className="grid gap-8 py-8 md:grid-cols-2">
        <div>
          <SectionTitle title="Education" />
          <ul className="space-y-4 text-sm text-fg/80">
            <li><strong>University of Tennessee, Knoxville</strong><br />MS Computer Engineering</li>
            <li><strong>Indian Institute of Engineering Science and Technology (IIEST) Shibpur</strong><br />B.Tech Electrical and Electronics Engineering</li>
          </ul>
        </div>
        <div>
          <SectionTitle title="Skills" />
          <ul className="grid grid-cols-2 gap-2 text-sm text-fg/80">
            {['Quantum Computing', 'Pennylane', 'Machine Learning', 'Python', 'Embedded Systems', 'Scientific Computing'].map((s) => (
              <li key={s} className="rounded-lg border border-border bg-muted/20 px-3 py-2">{s}</li>
            ))}
          </ul>
        </div>
      </section>
    </Container>
  );
}
