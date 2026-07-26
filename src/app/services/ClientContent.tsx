"use client";

import { motion } from "framer-motion";
import { Briefcase, Star, Zap, Handshake, Trophy } from "lucide-react";
import { services } from "@/data/services";
import { company } from "@/config/company";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { fadeInVariants, staggerContainer } from "@/lib/animations";

const whyChooseData = [
  {
    title: "Expertise",
    description:
      "We are building deep domain knowledge across AI, software, robotics, and engineering — with a focus on first-principles understanding and practical application.",
    icon: Star,
  },
  {
    title: "Innovation",
    description:
      "We are committed to staying at the cutting edge through continuous research and development, with patience for the time that real innovation requires.",
    icon: Zap,
  },
  {
    title: "Partnership",
    description:
      "As we grow, we aspire to work as an extension of clients' teams — with transparent communication, shared goals, and long-term commitment.",
    icon: Handshake,
  },
  {
    title: "Results",
    description:
      "We believe success is measured by real-world outcomes. Our focus is on delivering measurable value over the long term, not quick wins.",
    icon: Trophy,
  },
];

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
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-primary)]/20 flex items-center justify-center mb-6">
              <Briefcase size={28} className="text-[var(--color-primary-light)]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-[var(--color-primary-light)] via-[var(--color-accent-light)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
                Future Capabilities
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
              {`These represent the services ${company.name} intends to offer as the company grows its engineering team and capabilities. We are not currently providing commercial services.`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                highlights={service.highlights}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={`Why Choose ${company.name}`}
            subtitle="Our Differentiators"
            description={`What guides our thinking as we build ${company.name} for the long term.`}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {whyChooseData.map((item, index) => (
              <motion.div key={index} variants={fadeInVariants}>
                <Card hover className="h-full text-center">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-primary)]/20 border border-[var(--color-accent)]/20 flex items-center justify-center mb-4">
                    <item.icon size={24} className="text-[var(--color-accent-light)]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
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
                <Briefcase size={28} className="text-[var(--color-primary-light)]" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                Exploring Future Services?
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto mb-8 leading-relaxed">
                {`These capabilities represent our long-term vision. ${company.name} is in its early`}
                stages and not offering commercial services at this time. Follow our journey
                as we build toward these goals.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Get in Touch
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Explore Solutions
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
