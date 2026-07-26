"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useMounted } from "@/hooks/useMounted";
import { company } from "@/config/company";
import Button from "./Button";

export default function Hero() {
  const mounted = useMounted();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-secondary)]/5 rounded-full blur-[160px]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          suppressHydrationWarning
          initial={mounted ? { y: 30 } : undefined}
          animate={mounted ? { y: 0 } : undefined}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            suppressHydrationWarning
            initial={mounted ? { scale: 0.95 } : undefined}
            animate={mounted ? { scale: 1 } : undefined}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-glass)] border border-[var(--color-glass-border)] text-sm text-[var(--color-text-secondary)] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Early-Stage Deep Technology Startup
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="bg-gradient-to-r from-white via-white to-[var(--color-text-muted)] bg-clip-text text-transparent">
              Engineering
            </span>
            <br />
            <span className="bg-gradient-to-r from-[var(--color-primary-light)] via-[var(--color-secondary)] to-[var(--color-accent-light)] bg-clip-text text-transparent">
              the Future with Purpose.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed px-2">
            {`${company.name} is ${company.description}`}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
            <Button href="/portfolio" variant="primary" size="lg" className="w-full sm:w-auto justify-center">
              Explore Our Vision
            </Button>
            <Button href="/about" variant="secondary" size="lg" className="w-full sm:w-auto justify-center">
              {`About ${company.name}`}
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          suppressHydrationWarning
          initial={mounted ? { opacity: 0 } : undefined}
          animate={mounted ? { opacity: 1 } : undefined}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-[var(--color-text-muted)]"
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
