export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: 'vitonet',
    title: 'ViToNet',
    description: 'A pipeline for generating captions from live video using modern machine learning models.',
    longDescription:
      'ViToNet combines frame extraction, multimodal embedding, and sequence generation to provide low-latency captions for dynamic scenes. The project explores robust computer vision under constrained hardware conditions.',
    tags: ['Computer Vision', 'Multimodal ML', 'Python'],
    links: [{ label: 'Publication', href: '#' }, { label: 'Code', href: '#' }]
  },
  {
    slug: 'nv-center-quantum-sensing-simulation',
    title: 'NV-Center Quantum Sensing Simulation',
    description: 'Simulation framework for studying quantum sensing protocols.',
    longDescription:
      'A modular simulation environment for modeling NV-center spin dynamics, microwave pulse schedules, and noise channels to evaluate precision in realistic sensing scenarios.',
    tags: ['Quantum Sensing', 'Simulation', 'Scientific Computing'],
    links: [{ label: 'Preprint', href: '#' }]
  },
  {
    slug: 'quantum-transfer-learning-experiments',
    title: 'Quantum Transfer Learning Experiments',
    description: 'Empirical investigation of quantum vs classical transfer learning models.',
    longDescription:
      'This study benchmarks quantum transfer learning pipelines against classical baselines, focusing on sample efficiency, inductive priors, and optimization stability in low-data regimes.',
    tags: ['Quantum ML', 'Transfer Learning', 'PennyLane'],
    links: [{ label: 'Results', href: '#' }]
  },
  {
    slug: 'ngo-digital-infrastructure',
    title: 'NGO Digital Infrastructure',
    description: 'Designing web infrastructure for social organizations.',
    longDescription:
      'Built resilient digital systems for NGO operations, including content workflows, analytics dashboards, and secure communications tooling.',
    tags: ['Infrastructure', 'Web Systems', 'Security'],
    links: [{ label: 'Case Study', href: '#' }]
  },
  {
    slug: 'distributed-energy-trading-network',
    title: 'Distributed Energy Trading Network',
    description: 'Blockchain-based decentralized energy trading framework.',
    longDescription:
      'Designed a decentralized architecture for microgrid participants to exchange energy credits with transparent settlement and auditable smart contracts.',
    tags: ['Blockchain', 'Energy Systems', 'Distributed Networks'],
    links: [{ label: 'Architecture', href: '#' }]
  }
];
