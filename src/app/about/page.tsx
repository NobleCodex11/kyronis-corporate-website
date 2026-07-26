"use client";

import { motion } from "framer-motion";
import { Target, Rocket } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import Timeline from "@/components/Timeline";
import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import { company } from "@/config/company";
import { productNames } from "@/config/products";

const timelineItems = [
  {
    year: "2025",
    title: `Foundation of ${company.name}`,
    description: `${company.name} was founded by ${company.founderName} in ${company.founderLocation}, with a long-term vision to build a multidisciplinary deep technology company spanning AI, robotics, software engineering, and civil infrastructure.`,
  },
  {
    year: "2026",
    title: "Early Development Phase",
    description: `${productNames.aurora} — the company's primary software project and intelligent social platform — entered active development. ${company.name} established its foundational research directions across AI, robotics, and engineering.`,
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col flex-1">
      {/* ---------- Hero ---------- */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <section className="text-center">
            <motion.p
              initial={{ y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium tracking-widest uppercase text-[var(--color-primary-light)] mb-4"
            >
              {company.tagline}
            </motion.p>
            <motion.h1
              initial={{ y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              About{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
                {company.name}
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed"
            >
              An early-stage deep technology company building long-term capabilities across artificial intelligence, robotics, software engineering, and civil infrastructure.
            </motion.p>
          </section>
        </div>
      </section>

      {/* ---------- Company Story ---------- */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Journey"
            title={`The ${company.name} Story`}
            description="From an idea in Kerala to an early-stage deep technology company."
          />
          <motion.div
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Card hover={false} className="!bg-[var(--color-glass)] backdrop-blur-md !border-[var(--color-glass-border)]">
              <div className="prose prose-invert max-w-none">
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {company.name} was founded by {company.founderName}, an engineer based in{" "}
                  {company.founderLocation}, with a long-term vision to build a multidisciplinary
                  engineering company at the intersection of software, artificial
                  intelligence, robotics, and civil infrastructure.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Rather than following the conventional startup path of rapid
                  scaling and venture funding, {company.name} is taking a deliberate,
                  long-term approach — building foundational knowledge across
                  multiple engineering domains before bringing products and
                  services to market. The company believes that the most
                  significant engineering challenges require patience, deep
                  research, and sustained effort over decades, not quarters.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Today, {company.name} is in its early development stage. The primary
                  project, {productNames.aurora} — an intelligent social platform — is under
                  active development. Future ambitions span humanoid robotics
                  ({productNames.xom}), medical robotics ({productNames.xomed}), and long-term research across
                  defence, space, materials science, and sustainable infrastructure.
                  Everything begins with a single commitment: to build technology
                  that serves real-world needs over the long term.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ---------- Mission & Vision ---------- */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            subtitle="What Drives Us"
            title="Mission & Vision"
            description="Clarity of purpose fuels everything we build."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ x: -30 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <Card hover={false} className="h-full bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-primary)]/20 flex items-center justify-center mb-5">
                  <Target size={24} className="text-[var(--color-primary-light)]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-primary-light)]">
                  Our Mission
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  To build a deep technology company that solves difficult engineering problems through research, software, and integrated systems — creating technologies that serve real-world needs over the long term.
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ x: 30 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <Card hover={false} className="h-full bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-primary)]/20 border border-[var(--color-accent)]/20 flex items-center justify-center mb-5">
                  <Rocket size={24} className="text-[var(--color-accent-light)]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-accent-light)]">
                  Our Vision
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  To become one of the world&apos;s leading engineering and technology companies — where intelligent systems and sustainable infrastructure work together to elevate human potential.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- Our Values ---------- */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            subtitle="What We Stand For"
            title="Our Values"
            description="Four principles that guide every decision we make."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon="Lightbulb"
              title="Innovation"
              description="We pursue bold ideas with intellectual rigor, turning
              ambitious research into real-world impact."
              delay={0.1}
            />
            <FeatureCard
              icon="Shield"
              title="Integrity"
              description="We hold ourselves to the highest ethical standards —
              transparency, safety, and accountability are non-negotiable."
              delay={0.2}
            />
            <FeatureCard
              icon="Users"
              title="Collaboration"
              description="Great engineering is a team sport. We bring together
              diverse minds across disciplines, cultures, and continents."
              delay={0.3}
            />
            <FeatureCard
              icon="Target"
              title="Excellence"
              description="We sweat the details. From architecture to deployment,
              every layer is built to perform, scale, and endure."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* ---------- Why We Exist ---------- */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Purpose"
            title="Why We Exist"
            description="Technology should serve real human needs — not the other way around."
          />
          <motion.div
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Card hover={false} className="!bg-[var(--color-glass)] backdrop-blur-md !border-[var(--color-glass-border)]">
              <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  Most technology companies are built to scale fast and exit faster.
                  {company.name} takes a different path. We believe that the most meaningful
                  engineering challenges — building safe AI, creating useful robots,
                  designing resilient infrastructure — require decades of sustained
                  effort, not a few quarters of growth.
                </p>
                <p>
                  We exist to build a different kind of technology company: one that
                  prioritizes long-term capability over short-term valuation, one that
                  puts research and first-principles thinking before market hype, and
                  one that measures success in decades rather than funding rounds.
                </p>
                <p>
                  The problems worth solving — from climate resilience to healthcare
                  access to intelligent automation — will not be solved overnight.
                  But they will be solved by companies that commit to the long term,
                  invest in foundational research, and build with genuine curiosity
                  and care. That is the kind of company {company.name} aspires to be.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ---------- Founder & Leadership ---------- */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            subtitle="Founder"
            title={`The Mind Behind ${company.name}`}
            description="Building a deep technology company from the ground up."
          />
          <div className="grid md:grid-cols-1 gap-8 max-w-sm mx-auto">
            <motion.div
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <Card className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-primary)]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[var(--color-primary-light)]">
                    NS
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{company.founderName}</h3>
                <p className="text-sm text-[var(--color-primary-light)] mb-2">
                  Founder
                </p>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  An engineer based in {company.founderLocation}, building {company.name} from the ground up with a long-term vision across AI, robotics, software engineering, and civil infrastructure.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- Company Timeline ---------- */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            subtitle="Milestones"
            title="Our Journey So Far"
            description={`Key moments that shaped ${company.name} from an idea into a global technology company.`}
          />
          <div className="max-w-4xl mx-auto">
            <Timeline items={timelineItems} />
          </div>
        </div>
      </section>

      {/* ---------- Future Goals ---------- */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            subtitle="Looking Ahead"
            title="Future Goals"
            description="What we are working toward — over years and decades."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon="Brain"
              title="AI Research"
              description="Build foundational AI capabilities — exploring deep learning, NLP, and computer vision toward practical, interpretable systems."
              delay={0.1}
            />
            <FeatureCard
              icon="Bot"
              title="Robotics Exploration"
              description="Advance research into autonomous systems, manipulation, and human-robot collaboration for real-world applications."
              delay={0.2}
            />
            <FeatureCard
              icon="Leaf"
              title="Sustainable Infrastructure"
              description="Explore advanced materials and computational design for climate-resilient and sustainable infrastructure systems."
              delay={0.3}
            />
            <FeatureCard
              icon="Rocket"
              title="Long-Term Horizons"
              description="Investigate future domains including defence technology, space systems, and next-generation engineering challenges."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-accent)]/20 to-[var(--color-primary)]/10 border border-[var(--color-glass-border)] p-10 lg:p-16 text-center"
          >
            <div className="absolute inset-0 bg-[var(--color-glass)] backdrop-blur-sm" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Interested in Learning More?
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto mb-8">
                {company.name} is in its early stages. Reach out if you are curious about
                our work or interested in following our journey.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href="/contact" variant="secondary" size="lg">
                  Get in Touch
                </Button>
                <Button href="/careers" variant="secondary" size="lg">
                  Join Our Team
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
