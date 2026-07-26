"use client";

import { Brain, Cpu, Building2, Box } from "lucide-react";
import Card from "./Card";

interface ResearchCardProps {
  title: string;
  description: string;
  icon: string;
  focus: string[];
  delay?: number;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain,
  Cpu,
  Building2,
};

export default function ResearchCard({
  title,
  description,
  icon,
  focus,
  delay = 0,
}: ResearchCardProps) {
  const Icon = iconMap[icon] || Box;

  return (
    <Card delay={delay}>
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-secondary)]/20 to-[var(--color-primary)]/20 border border-[var(--color-secondary)]/20 flex items-center justify-center mb-5">
        {Icon && <Icon size={24} className="text-[var(--color-secondary-light)]" />}
      </div>

      <h3 className="text-lg font-semibold mb-3">{title}</h3>

      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
        {description}
      </p>

      <div className="space-y-2">
        {focus.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </Card>
  );
}
