"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMounted } from "@/hooks/useMounted";
import {
  Target,
  Eye,
  Users,
  FileText,
  Globe,
  Briefcase,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
import PortfolioCard from "@/components/PortfolioCard";
import Button from "@/components/Button";
import { company } from "@/config/company";
import { portfolioDivisions } from "@/data/portfolio";

function AnimatedCounter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    const controls = animate(count, to, { duration, ease: "easeOut" });
    return controls.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
}

function CounterCard({
  icon: Icon,
  value,
  suffix,
  label,
  delay = 0,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const mounted = useMounted();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      suppressHydrationWarning
      initial={mounted ? { y: 30 } : undefined}
      whileInView={mounted ? { y: 0 } : undefined}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center p-6 rounded-2xl bg-[var(--color-glass)] border border-[var(--color-glass-border)] hover:bg-[var(--color-glass-hover)] transition-colors duration-300"
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-primary)]/20 flex items-center justify-center mb-4">
        <Icon size={26} className="text-[var(--color-primary-light)]" />
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
        {inView ? <AnimatedCounter from={0} to={value} /> : 0}
        {suffix}
      </div>
      <p className="text-sm text-[var(--color-text-muted)]">{label}</p>
    </motion.div>
  );
}

const featureCards = [
  {
    title: "Artificial Intelligence",
    description:
      "Cutting-edge machine learning, NLP, and computer vision systems that transform industries through intelligent automation and data-driven insights.",
    icon: "Brain",
  },
  {
    title: "Robotics",
    description:
      "Autonomous systems, humanoid platforms, and industrial automation solutions that bridge the gap between digital intelligence and the physical world.",
    icon: "Cpu",
  },
  {
    title: "Information Technology",
    description:
      "Enterprise-grade cloud architecture, cybersecurity, and distributed systems that form the resilient digital backbone of modern organizations.",
    icon: "Server",
  },
  {
    title: "Civil Engineering",
    description:
      "Smart infrastructure, sustainable construction, and AI-driven design optimization building the resilient cities and systems of tomorrow.",
    icon: "Building2",
  },
];

export default function Home() {
  const mounted = useMounted();

  return (
    <main className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Company Introduction */}
      <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-[128px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionHeader
            subtitle={`About ${company.name}`}
            title="Building for the Long Term"
            description={company.extendedDescription}
          />

          <motion.p
            suppressHydrationWarning
            initial={mounted ? { y: 20 } : undefined}
            whileInView={mounted ? { y: 0 } : undefined}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-4xl mx-auto text-center leading-relaxed mb-16"
          >
            {`${company.name} was founded with a long-term vision to build a multidisciplinary engineering company that combines software, artificial intelligence, robotics, and civil engineering into integrated systems. The company is currently in its early development stage, being built by its founder with the goal of creating technologies that solve difficult engineering problems over the coming decades.`}
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, index) => (
              <FeatureCard
                key={card.icon}
                title={card.title}
                description={card.description}
                icon={card.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-[128px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionHeader
            title="Mission & Vision"
            description="Guided by a clear purpose and an ambitious outlook for the decades ahead."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              suppressHydrationWarning
              initial={mounted ? { x: -40 } : undefined}
              whileInView={mounted ? { x: 0 } : undefined}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative p-6 sm:p-8 lg:p-10 rounded-2xl bg-[var(--color-glass)] border border-[var(--color-glass-border)] backdrop-blur-xl overflow-hidden group hover:border-[var(--color-primary)]/30 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-primary)]/10 rounded-full blur-[64px] group-hover:bg-[var(--color-primary)]/20 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 flex items-center justify-center mb-5 sm:mb-6">
                  <Target size={24} className="sm:size-[26px] text-[var(--color-primary-light)]" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Our Mission</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  To democratize advanced technology by building open,
                  accessible, and ethically responsible engineering solutions
                  that empower organizations and communities worldwide. We
                  bridge the gap between cutting-edge research and practical
                  deployment, ensuring that transformative technologies reach
                  those who need them most.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              suppressHydrationWarning
              initial={mounted ? { x: 40 } : undefined}
              whileInView={mounted ? { x: 0 } : undefined}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="relative p-6 sm:p-8 lg:p-10 rounded-2xl bg-[var(--color-glass)] border border-[var(--color-glass-border)] backdrop-blur-xl overflow-hidden group hover:border-[var(--color-accent)]/30 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-accent)]/10 rounded-full blur-[64px] group-hover:bg-[var(--color-accent)]/20 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 border border-[var(--color-accent)]/20 flex items-center justify-center mb-5 sm:mb-6">
                  <Eye size={24} className="sm:size-[26px] text-[var(--color-accent-light)]" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Our Vision</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  A world where intelligent systems and sustainable
                  infrastructure work in harmony to elevate human potential. We
                  envision a future where AI-driven automation liberates human
                  creativity, autonomous robots collaborate seamlessly with
                  people, and resilient infrastructure sustains communities for
                  generations — all built on ethical, transparent, and
                  accessible technology foundations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Portfolio Preview */}
      <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-secondary)]/5 rounded-full blur-[160px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionHeader
            subtitle="Our Divisions"
            title="Explore Our Expertise"
            description="Four integrated divisions working together to engineer the future."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {portfolioDivisions.map((division, index) => (
              <PortfolioCard
                key={division.id}
                id={division.id}
                title={division.title}
                subtitle={division.subtitle}
                icon={division.icon}
                overview={division.overview}
                expertise={division.expertise}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            suppressHydrationWarning
            initial={mounted ? { y: 20 } : undefined}
            whileInView={mounted ? { y: 0 } : undefined}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <Button href="/portfolio" variant="secondary" size="lg">
              View All Divisions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 5. Company Highlights / Stats */}
      <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[var(--color-primary)]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[var(--color-accent)]/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionHeader
            title="Where We Stand"
            description="Honest facts about where we are today."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <CounterCard
              icon={Users}
              value={1}
              suffix=""
              label="Founder-led"
              delay={0}
            />
            <CounterCard
              icon={FileText}
              value={1}
              suffix=""
              label="Project Under Active Development"
              delay={0.1}
            />
            <CounterCard
              icon={Globe}
              value={1}
              suffix=""
              label={`Based in ${company.headquarters}`}
              delay={0.2}
            />
            <CounterCard
              icon={Briefcase}
              value={1}
              suffix=""
              label="Long-Term Vision"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-primary)]/5 to-transparent" />
        </div>

        <motion.div
          suppressHydrationWarning
          initial={mounted ? { y: 40 } : undefined}
          whileInView={mounted ? { y: 0 } : undefined}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <div className="relative p-8 sm:p-12 lg:p-14 rounded-3xl bg-[var(--color-glass)] border border-[var(--color-glass-border)] backdrop-blur-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6">
                Interested in What We Are{" "}
                <span className="bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-accent-light)] bg-clip-text text-transparent">
                  Building
                </span>
                ?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                {`${company.name} is in its early stages. Whether you are a potential collaborator, a future team member, or simply curious about our work — we welcome thoughtful conversations.`}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto justify-center">
                  Start a Conversation
                </Button>
                <Button href="/about" variant="secondary" size="lg" className="w-full sm:w-auto justify-center">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
