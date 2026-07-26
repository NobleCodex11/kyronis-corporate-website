"use client";

import { motion } from "framer-motion";
import { Zap, Bot, HeartPulse, Sparkles, CheckCircle2 } from "lucide-react";
import { products } from "@/data/products";
import SectionHeader from "@/components/SectionHeader";
import { fadeInVariants, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Bot,
  HeartPulse,
  Sparkles,
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
          <SectionHeader
            title="What We Are Building"
            subtitle="Innovation Portfolio"
            description="Exploring the intersection of AI, robotics, and software — with a clear view of where we are today and where we are headed."
          />
        </div>
      </section>

      {/* Products */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-32">
            {products.map((product) => {
              const isComingSoon = product.isComingSoon;
              const IconComponent = iconMap[product.icon] || Sparkles;

              return (
                <motion.div
                  key={product.id}
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className={isComingSoon ? "relative" : ""}
                >
                  {/* Coming Soon badge section */}
                  {isComingSoon && (
                    <>
                      {/* Background glow for future products */}
                      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[var(--color-accent)]/5 via-transparent to-[var(--color-primary)]/5" />
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                        <span className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 text-[var(--color-accent-light)] backdrop-blur-sm">
                          <Sparkles className="w-3.5 h-3.5" />
                          Coming Soon
                        </span>
                      </div>
                    </>
                  )}

                  <div
                    className={`grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 ${
                      isComingSoon
                        ? "border border-[var(--color-accent)]/15 rounded-3xl bg-[var(--color-glass)]/50 backdrop-blur-sm p-8 lg:p-12 pt-12 lg:pt-14"
                        : ""
                    }`}
                  >
                    {/* Left Column — Icon & Meta */}
                    <motion.div
                      variants={fadeInVariants}
                      className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                      <div
                        className={`w-20 h-20 rounded-2xl flex items-center justify-center ${
                          isComingSoon
                            ? "bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/25"
                            : "bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20"
                        }`}
                      >
                        <IconComponent
                          className={`w-9 h-9 ${
                            isComingSoon
                              ? "text-[var(--color-accent-light)]"
                              : "text-[var(--color-primary-light)]"
                          }`}
                        />
                      </div>

                      {!isComingSoon && (
                        <div className="mt-6 space-y-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-[var(--color-primary-light)]">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary-light)] opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary-light)]" />
                            </span>
                            Active Development
                          </span>
                        </div>
                      )}
                    </motion.div>

                    {/* Right Column — Content */}
                    <div className="lg:col-span-4 space-y-8">
                      {/* Name & Tagline */}
                      <motion.div variants={fadeInVariants}>
                        <h3
                          className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${
                            isComingSoon
                              ? "bg-gradient-to-r from-[var(--color-accent-light)] to-[var(--color-primary-light)] bg-clip-text text-transparent"
                              : ""
                          }`}
                        >
                          {product.name}
                        </h3>
                        <p
                          className={`mt-2 text-lg font-medium ${
                            isComingSoon
                              ? "text-[var(--color-accent-light)]/80"
                              : "text-[var(--color-primary-light)]"
                          }`}
                        >
                          {product.tagline}
                        </p>
                      </motion.div>

                      {/* Overview */}
                      <motion.p
                        variants={fadeInVariants}
                        className="text-[var(--color-text-secondary)] leading-relaxed text-sm sm:text-base lg:text-lg"
                      >
                        {product.overview}
                      </motion.p>

                      {/* The Problem */}
                      <motion.div
                        variants={fadeInVariants}
                        className={`rounded-xl p-5 lg:p-6 ${
                          isComingSoon
                            ? "bg-[var(--color-glass)] border border-[var(--color-glass-border)]"
                            : "bg-[var(--color-glass)] border border-[var(--color-glass-border)]"
                        }`}
                      >
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-[var(--color-text-muted)] mb-2">
                          The Problem
                        </h4>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                          {product.problem}
                        </p>
                      </motion.div>

                      {/* Technology */}
                      <motion.div variants={fadeInVariants}>
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-[var(--color-text-muted)] mb-2">
                          Technology
                        </h4>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                          {product.technology}
                        </p>
                      </motion.div>

                      {/* Features */}
                      <motion.div variants={fadeInVariants}>
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-[var(--color-text-muted)] mb-4">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {product.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 rounded-lg bg-[var(--color-glass)] border border-[var(--color-glass-border)] p-3.5"
                            >
                              <CheckCircle2
                                className={`w-5 h-5 shrink-0 mt-0.5 ${
                                  isComingSoon
                                    ? "text-[var(--color-accent-light)]"
                                    : "text-[var(--color-primary-light)]"
                                }`}
                              />
                              <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Development Status */}
                      <motion.div variants={fadeInVariants}>
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-[var(--color-text-muted)] mb-2">
                          Development Status
                        </h4>
                        <div
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                            isComingSoon
                              ? "bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/25 text-[var(--color-accent-light)]"
                              : "bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-[var(--color-primary-light)]"
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${
                              isComingSoon
                                ? "bg-[var(--color-accent-light)]"
                                : "bg-[var(--color-primary-light)]"
                            }`}
                          />
                          {product.developmentStatus}
                        </div>
                      </motion.div>

                      {/* Future Vision */}
                      <motion.div
                        variants={fadeInVariants}
                        className={`rounded-xl p-5 lg:p-6 ${
                          isComingSoon
                            ? "bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent border border-[var(--color-accent)]/15"
                            : "bg-[var(--color-glass)] border border-[var(--color-glass-border)]"
                        }`}
                      >
                        <h4 className="text-sm font-semibold tracking-wider uppercase text-[var(--color-text-muted)] mb-2">
                          Future Vision
                        </h4>
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                          {product.futureVision}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
