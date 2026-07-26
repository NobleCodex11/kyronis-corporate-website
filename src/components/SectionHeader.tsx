"use client";

import { motion } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
}: SectionHeaderProps) {
  const mounted = useMounted();

  return (
    <motion.div
      initial={mounted ? { y: 20 } : undefined}
      whileInView={mounted ? { y: 0 } : undefined}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-10 lg:mb-16 ${centered ? "text-center" : ""}`}
    >
      {subtitle && (
        <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-primary-light)] mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 px-1">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base lg:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed px-1">
          {description}
        </p>
      )}
    </motion.div>
  );
}
