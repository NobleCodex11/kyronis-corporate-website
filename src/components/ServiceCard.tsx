"use client";

import { Brain, Code2, Cpu, Building2, FlaskConical, CheckCircle2, Box } from "lucide-react";
import Card from "./Card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  highlights: string[];
  delay?: number;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain,
  Code2,
  Cpu,
  Building2,
  FlaskConical,
};

export default function ServiceCard({
  title,
  description,
  icon,
  highlights,
  delay = 0,
}: ServiceCardProps) {
  const Icon = iconMap[icon] || Box;

  return (
    <Card delay={delay}>
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-primary)]/20 flex items-center justify-center mb-5">
        {Icon && <Icon size={24} className="text-[var(--color-primary-light)]" />}
      </div>

      <h3 className="text-lg font-semibold mb-3">{title}</h3>

      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
        {description}
      </p>

      <ul className="space-y-2">
        {highlights.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
          >
            <CheckCircle2
              size={14}
              className="text-[var(--color-primary-light)] shrink-0 mt-0.5"
            />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
