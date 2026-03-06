import { Card, SectionTitle, Tag } from "@/components/ui";

const interests = [
  {
    title: "Quantum Machine Learning",
    summary: "Investigating model classes where quantum representations contribute measurable inductive bias.",
    tags: ["QFT", "VQEs", "Inductive Bias", "Hybrid Models"]
  },
  {
    title: "Quantum Algorithms",
    summary: "Designing and benchmarking algorithms under realistic depth, connectivity, and noise constraints.",
    tags: ["QAOA", "Complexity", "Compilation"]
  },
  {
    title: "Quantum Sensing",
    summary: "Building signal extraction methods that connect quantum sensors to deployable measurement stacks.",
    tags: ["NV Centers", "Noise Models", "Inference"]
  },
  {
    title: "Security & Information",
    summary: "Studying secure interfaces between quantum and classical systems through information-theoretic analysis.",
    tags: ["Cryptography", "Secure Channels", "Protocols"]
  }
];

export function ResearchCards() {
  return (
    <section className="py-10">
      <SectionTitle title="Research Interests" subtitle="Focused areas across algorithms, systems, and information science." />
      <div className="grid gap-4 md:grid-cols-2">
        {interests.map((item) => (
          <Card key={item.title}>
            <h3 className="font-serif text-xl">{item.title}</h3>
            <p className="mt-2 text-sm text-foreground/75">{item.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
