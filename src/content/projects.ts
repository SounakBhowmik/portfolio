export type Project = {
  slug: string;
  title: string;
  description: string;
  impact?: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "hybrid-qml-health-signals",
    title: "Hybrid QML for Biomedical Signal Classification",
    description:
      "Designed variational quantum-classical pipelines for noisy physiological signals, emphasizing robust feature maps and low-depth circuits.",
    impact: "Improved precision on minority classes in pilot ECG datasets.",
    tags: ["QML", "Hybrid Models", "Healthcare", "VQE"],
    featured: true
  },
  {
    slug: "secure-quantum-sensing",
    title: "Secure Protocols for Quantum Sensing Networks",
    description:
      "Studied communication-security constraints in distributed sensing architectures that blend classical cryptography with quantum channels.",
    impact: "Outlined deployment trade-offs for constrained sensing nodes.",
    tags: ["Quantum Sensing", "Cryptography", "Information Theory"],
    featured: true
  },
  {
    slug: "resource-aware-qaoa",
    title: "Resource-Aware QAOA Scheduling",
    description:
      "Benchmarked QAOA parameter schedules under realistic hardware constraints and noise budgets for combinatorial optimization tasks.",
    tags: ["QAOA", "NISQ", "Optimization", "Benchmarking"],
    featured: true
  },
  {
    slug: "inductive-bias-qkernels",
    title: "Inductive Bias in Quantum Kernel Methods",
    description:
      "Analyzed representation geometry of quantum kernels to understand generalization behavior in small-data scientific regimes.",
    impact: "Provided practical guidance for kernel-selection workflows.",
    tags: ["Quantum Kernels", "Inductive Bias", "Generalization"],
    featured: true
  },
  {
    slug: "fault-tolerant-primitives",
    title: "Fault-Tolerant Primitives for Sensing Workloads",
    description:
      "Mapped sensing-oriented primitives to error-corrected gate sets and estimated overhead under near-term fault-tolerant assumptions.",
    tags: ["Fault Tolerance", "Compilation", "Sensing"],
    featured: true
  },
  {
    slug: "qft-secure-analytics",
    title: "Quantum Fourier Methods for Secure Analytics",
    description:
      "Explored quantum Fourier transform variants for privacy-preserving frequency-domain analyses in distributed data settings.",
    tags: ["QFT", "Security", "Distributed Systems"],
    featured: false
  }
];
