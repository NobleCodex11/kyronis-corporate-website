"use client";

import { motion } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className = "",
  hover = true,
  delay = 0,
}: CardProps) {
  const mounted = useMounted();

  return (
    <motion.div
      initial={mounted ? { y: 20 } : undefined}
      whileInView={mounted ? { y: 0 } : undefined}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={
        hover
          ? {
              y: -4,
              borderColor: "rgba(99,102,241,0.3)",
            }
          : undefined
      }
      className={`bg-[var(--color-glass)] border border-[var(--color-glass-border)] rounded-2xl p-6 lg:p-8 backdrop-blur-sm transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
