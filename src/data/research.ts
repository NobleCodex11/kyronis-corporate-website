import { ResearchArea } from "@/types";

export const researchAreas: ResearchArea[] = [
  {
    id: "ai-research",
    title: "Artificial Intelligence",
    icon: "Brain",
    description:
      "Exploring the foundations of machine intelligence — from deep learning architectures and natural language processing to computer vision and reinforcement learning. Our AI research is focused on building systems that are capable, interpretable, and aligned with human values.",
    focus: [
      "Deep learning architectures and model design",
      "Natural language understanding and generation",
      "Computer vision and multi-modal perception",
      "Reinforcement learning for complex decision-making",
      "AI alignment, interpretability, and safety",
    ],
  },
  {
    id: "robotics-research",
    title: "Robotics",
    icon: "Cpu",
    description:
      "Investigating intelligent machines that can perceive, reason, and act in the physical world. Our robotics research spans manipulation, locomotion, sensing, and human-robot interaction — with the understanding that practical robotic systems require sustained, long-term effort.",
    focus: [
      "Manipulation and dexterous control",
      "Dynamic locomotion and balance",
      "Multi-modal sensing and perception",
      "Human-robot interaction and collaboration",
      "Learning-based control and adaptation",
    ],
  },
  {
    id: "engineering-research",
    title: "Engineering",
    icon: "Building2",
    description:
      "Researching materials science, computational design, and sustainable infrastructure. Our engineering research is focused on understanding how to design and build systems that are safer, more resilient, and more sustainable over their entire lifecycle.",
    focus: [
      "Advanced materials and smart composites",
      "Computational design and simulation",
      "Structural health and infrastructure monitoring",
      "Sustainable construction technologies",
      "Climate-resilient infrastructure design",
    ],
  },
];

export const innovationPhilosophy = {
  title: "Our Innovation Philosophy",
  description:
    "We believe that meaningful innovation happens at the intersection of disciplines. Our research is guided by three core principles: curiosity-driven exploration, real-world impact, and responsible development. We invest in fundamental research while maintaining a sharp focus on translating discoveries into practical solutions that improve lives and industries.",
  pillars: [
    {
      title: "Curiosity-Driven",
      description:
        "We pursue fundamental questions without predetermined outcomes, knowing that the most transformative discoveries often come from unexpected directions.",
    },
    {
      title: "Impact-Focused",
      description:
        "Every research initiative is evaluated not just by its technical novelty, but by its potential to create meaningful, positive change in the world.",
    },
    {
      title: "Responsibly Developed",
      description:
        "We embed ethics, safety, and societal consideration into every stage of research — from problem formulation through deployment and beyond.",
    },
  ],
};

export const futureResearch = [
  "AI systems that can reason, plan, and learn from limited data",
  "General-purpose robotic platforms for unstructured environments",
  "Sustainable construction materials and methods for the developing world",
  "Computational tools for engineering design and simulation",
  "Human-centered AI that augments rather than replaces human capability",
  "Resilient infrastructure systems for climate adaptation",
  "Privacy-preserving machine learning and federated intelligence",
  "Cross-disciplinary approaches to complex engineering challenges",
];
