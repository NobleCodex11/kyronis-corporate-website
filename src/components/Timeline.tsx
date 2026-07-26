"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)]/50 via-[var(--color-glass-border)] to-[var(--color-primary)]/50" />

      <div className="space-y-12">
        {items.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative flex items-start gap-6 lg:gap-0 ${
              i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 lg:left-1/2 w-3 h-3 rounded-full bg-[var(--color-primary)] border-2 border-[var(--color-background)] -translate-x-1/2 mt-1.5 z-10 shadow-[0_0_12px_rgba(99,102,241,0.5)]" />

            {/* Content */}
            <div
              className={`ml-12 lg:ml-0 lg:w-1/2 ${
                i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"
              }`}
            >
              <span className="inline-block text-sm font-mono text-[var(--color-primary-light)] mb-1">
                {item.year}
              </span>
              <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden lg:block lg:w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
