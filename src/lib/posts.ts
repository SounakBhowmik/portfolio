export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

export const posts: Post[] = [
  {
    slug: "quantum-kernel-inductive-bias",
    title: "On Inductive Bias in Quantum Kernel Pipelines",
    date: "2026-01-12",
    summary:
      "A concise look at how feature map geometry influences sample efficiency and stability across low-data scientific tasks.",
    tags: ["Quantum ML", "Kernels", "Theory"]
  },
  {
    slug: "sensing-noise-models",
    title: "Noise Modeling for Practical Quantum Sensing",
    date: "2025-12-04",
    summary:
      "Notes on translating lab-grade noise assumptions into deployable sensing models for distributed instrumentation.",
    tags: ["Quantum Sensing", "Noise", "Applied"]
  },
  {
    slug: "security-interface-quantum-classical",
    title: "Security Interfaces Between Quantum and Classical Systems",
    date: "2025-10-09",
    summary:
      "A framework for reasoning about authentication, key exchange, and attack surfaces in hybrid compute stacks.",
    tags: ["Security", "Hybrid Systems"]
  },
  {
    slug: "qaoa-hardware-aware-design",
    title: "Hardware-Aware QAOA Design Patterns",
    date: "2025-08-28",
    summary:
      "Practical circuit-depth and parameterization choices for near-term optimization experiments.",
    tags: ["QAOA", "NISQ"]
  }
];

export const getLatestPosts = (count: number) =>
  [...posts].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, count);
