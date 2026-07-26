"use client";

import { motion } from "framer-motion";
import { FlaskConical, Lightbulb, TrendingUp, Shield, Rocket, ArrowRight } from "lucide-react";
import { researchAreas, innovationPhilosophy, futureResearch } from "@/data/research";
import { company } from "@/config/company";
import SectionHeader from "@/components/SectionHeader";
import ResearchCard from "@/components/ResearchCard";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { fadeInVariants, staggerContainer } from "@/lib/animations";

const pillarIcons: Record<string, React.ElementType> = {
  "Curiosity-Driven": Lightbulb,
  "Impact-Focused": TrendingUp,
  "Responsibly Developed": Shield,
};

export default function ClientContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-primary)]/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--color-accent)]/10 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-primary-light)] mb-3">
              Research Focus
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-[var(--color-primary-light)] via-[var(--color-accent-light)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
                Research Areas
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Exploring the problems we want to solve through long-term research in artificial intelligence, robotics, and engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Innovation Philosophy Section */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={innovationPhilosophy.title}
            description={innovationPhilosophy.description}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {innovationPhilosophy.pillars.map((pillar, index) => {
              const IconComponent = pillarIcons[pillar.title] || Lightbulb;

              return (
                <motion.div key={index} variants={fadeInVariants}>
                  <Card hover className="h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-primary)]/20 border border-[var(--color-accent)]/20 flex items-center justify-center mb-5">
                      <IconComponent size={24} className="text-[var(--color-accent-light)]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{pillar.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {pillar.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Research Focus Areas"
            subtitle="What We Explore"
            description="Three core domains where we are building foundational knowledge for the long term."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {researchAreas.map((area, index) => (
              <ResearchCard
                key={area.id}
                title={area.title}
                description={area.description}
                icon={area.icon}
                focus={area.focus}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Future Research Section */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Future Research Directions"
            subtitle="Looking Ahead"
            description={`Areas we intend to explore as ${company.name} grows its research capabilities.`}
          />

          <motion.div
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <Card hover={false} className="relative overflow-hidden">
              {/* Glassmorphism decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-[var(--color-accent)]/5 -z-0" />

              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-primary)]/20 border border-[var(--color-accent)]/20 flex items-center justify-center">
                  <Rocket size={20} className="text-[var(--color-accent-light)]" />
                </div>
                <h3 className="text-xl font-semibold">On the Horizon</h3>
              </div>

              <ol className="space-y-4">
                {futureResearch.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="flex items-start gap-4 group"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-glass)] border border-[var(--color-glass-border)] flex items-center justify-center text-sm font-semibold text-[var(--color-primary-light)] group-hover:bg-[var(--color-primary)]/10 group-hover:border-[var(--color-primary)]/30 transition-colors duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-[var(--color-text-secondary)] leading-relaxed pt-1 group-hover:text-[var(--color-foreground)] transition-colors duration-300">
                      {item}
                    </span>
                    <ArrowRight
                      size={16}
                      className="flex-shrink-0 mt-1.5 text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--color-primary-light)] group-hover:translate-x-1 transition-all duration-300"
                    />
                  </motion.li>
                ))}
              </ol>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-glass)] to-[var(--color-accent)]/10 border border-[var(--color-glass-border)] p-8 lg:p-12 text-center"
          >
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[var(--color-primary)]/15 blur-[100px] -z-0" />

            <div className="relative z-10">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-primary)]/20 flex items-center justify-center mb-6">
                <FlaskConical size={28} className="text-[var(--color-primary-light)]" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                Interested in Our Research?
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto mb-8 leading-relaxed">
                {`${company.name} is in its early stages and not actively seeking research partnerships at this time. However, we welcome thoughtful conversations with those who share our long-term vision.`}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Start a Collaboration
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
