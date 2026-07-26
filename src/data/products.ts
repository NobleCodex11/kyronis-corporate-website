import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "aurora",
    name: "Aurora",
    tagline: "Intelligent Social Platform. Built for Trust.",
    icon: "Zap",
    overview:
      "Aurora is a next-generation intelligent social platform designed from the ground up with privacy, trust, and modern engineering principles. It is the primary software project at Kyronis and is currently under active development. Aurora has not yet been released as production software.",
    problem:
      "Modern social platforms face deep challenges around user privacy, algorithmic transparency, data sovereignty, and scalable architecture. Aurora aims to address these by rethinking the fundamentals of how people connect, share, and collaborate online.",
    technology:
      "Aurora is being built on a cloud-native architecture with a focus on end-to-end encryption, decentralized data ownership, and AI-powered content discovery that respects user agency. The technology stack prioritizes scalability, security, and developer ergonomics.",
    features: [
      "Privacy-first architecture with end-to-end encryption",
      "AI-powered content discovery without algorithmic manipulation",
      "Decentralized data ownership and user-controlled identity",
      "Scalable cloud-native infrastructure for global reach",
      "Modern developer APIs for extensibility and integration",
      "Real-time communication with low-latency protocols",
      "Accessible cross-platform experience",
      "Transparent content moderation frameworks",
    ],
    developmentStatus:
      "Aurora is under active development. No production release has been made yet.",
    futureVision:
      "Aurora aims to demonstrate a new model for social platforms — one built on trust, privacy, and user empowerment from the ground up.",
  },
  {
    id: "xo-m",
    name: "XO-M",
    tagline: "Humanoid Robotics. Research Phase.",
    icon: "Bot",
    overview:
      "XO-M is a future humanoid robotic platform being explored at the research and concept development stage. It represents Kyronis's long-term ambition in general-purpose robotics. No prototype has been completed. The project is currently focused on foundational research into locomotion, manipulation, and human-robot interaction.",
    problem:
      "General-purpose humanoid robots that can operate safely and effectively in human environments remain an unsolved engineering challenge. XO-M is a research initiative aimed at understanding the fundamental problems that must be solved to make versatile humanoid robots practical.",
    technology:
      "The XO-M research program explores actuation systems, multi-modal sensor fusion, whole-body motion planning, and learning-based control. The project draws from advances in reinforcement learning, computer vision, and mechanical design — with the understanding that significant breakthroughs are required before a functional prototype can be realized.",
    features: [
      "Research into human-equivalent dexterity and manipulation",
      "Exploration of dynamic locomotion and balance control",
      "Investigation of multi-modal perception systems",
      "Study of safe human-robot collaboration frameworks",
      "Simulation-based training and sim-to-real transfer research",
      "Investigation of energy-efficient actuation mechanisms",
      "Research into natural language task understanding",
      "Open-architecture design philosophy for extensibility",
    ],
    developmentStatus:
      "XO-M is in the research and concept development phase. No prototype has been completed.",
    futureVision:
      "XO-M represents Kyronis's long-term ambition to contribute to the field of general-purpose humanoid robotics, with the understanding that this is a multi-decade effort requiring fundamental breakthroughs.",
  },
  {
    id: "xo-med",
    name: "XO-Med",
    tagline: "Medical Robotics. Concept Exploration.",
    icon: "HeartPulse",
    overview:
      "XO-Med is a future medical robotics platform currently in the research and concept development phase. The project explores how advanced robotics and AI can assist in surgical procedures, diagnostics, and patient care. No hardware or software prototype has been completed.",
    problem:
      "Medical robotics holds tremendous potential to improve surgical precision, reduce recovery times, and expand access to quality care — especially in underserved regions. However, developing safe, reliable, and regulatory-compliant medical systems requires years of rigorous research, testing, and validation.",
    technology:
      "The XO-Med research initiative investigates precision actuation, real-time imaging integration, haptic feedback systems, and AI-assisted surgical planning. All work is currently at the theoretical and simulation stage, with a focus on understanding regulatory pathways, safety requirements, and clinical needs.",
    features: [
      "Research into precision robotic manipulation for surgical applications",
      "Investigation of AI-assisted diagnostic imaging and analysis",
      "Exploration of haptic feedback and teleoperation systems",
      "Study of real-time patient monitoring and early warning systems",
      "Research into minimally invasive robotic procedures",
      "Investigation of regulatory frameworks for medical devices",
      "Exploration of training and simulation platforms",
      "Study of accessible healthcare delivery models",
    ],
    developmentStatus:
      "XO-Med is in the research and concept development phase. No prototype has been completed.",
    futureVision:
      "XO-Med represents a long-term exploration into how robotics and AI can meaningfully improve healthcare delivery, with the understanding that medical robotics requires years of rigorous research and validation before clinical use.",
  },
  {
    id: "future-initiatives",
    name: "Future Initiatives",
    tagline: "Long-Term Exploration Across Engineering Domains.",
    icon: "Sparkles",
    overview:
      "Beyond our current projects, Kyronis maintains a long-term research outlook across multiple engineering domains. These include defence technology, space systems, advanced materials, and sustainable infrastructure. All of these are at the concept exploration stage.",
    problem:
      "The most significant engineering challenges of the coming decades — from climate resilience to space industrialization — demand long-term thinking. Kyronis is building the intellectual foundation to contribute to these domains over time, not overnight.",
    technology:
      "Future initiatives span a broad technological landscape: autonomous systems for defence and security, space-grade robotics and construction, carbon-neutral infrastructure materials, quantum-accelerated computing for scientific discovery, and AI systems for complex decision-making in high-stakes environments.",
    features: [
      "Defence technology research for autonomous systems",
      "Space-rated robotics for extra-terrestrial operations",
      "AI-driven materials science and discovery",
      "Carbon-neutral construction and infrastructure systems",
      "Quantum computing applications for engineering",
      "Distributed intelligence and edge computing",
      "Cybersecurity and zero-trust architecture",
      "Brain-computer interface research for assistive technology",
    ],
    developmentStatus: "Concept exploration stage. No active development.",
    futureVision:
      "Kyronis is building the intellectual foundation to contribute to these domains over time, with the understanding that meaningful progress in these areas requires decades of sustained effort and collaboration.",
    isComingSoon: true,
  },
];
