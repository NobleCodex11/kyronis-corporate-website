"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Server, Building2, ArrowRight, Box } from "lucide-react";
import Link from "next/link";
import Card from "./Card";

interface PortfolioCardProps {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  overview: string;
  expertise: string[];
  delay?: number;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain,
  Cpu,
  Server,
  Building2,
};

export default function PortfolioCard({
  id,
  title,
  subtitle,
  icon,
  overview,
  expertise,
  delay = 0,
}: PortfolioCardProps) {
  const Icon = iconMap[icon] || Box;

  return (
    <Card delay={delay} className="group">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-primary)]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
          {Icon && <Icon size={28} className="text-[var(--color-primary-light)]" />}
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-[var(--color-primary-light)] mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>

      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5 line-clamp-3">
        {overview}
      </p>

      <div className="space-y-2 mb-5">
        {expertise.slice(0, 4).map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
            {item}
          </div>
        ))}
      </div>

      <Link
        href={`/portfolio#${id}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary-light)] hover:text-[var(--color-secondary-light)] transition-colors"
      >
        Explore Division
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowRight size={14} />
        </motion.span>
      </Link>
    </Card>
  );
}
