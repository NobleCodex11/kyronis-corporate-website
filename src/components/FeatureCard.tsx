"use client";

import { Brain, Cpu, Server, Building2, Box } from "lucide-react";
import Card from "./Card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain,
  Cpu,
  Server,
  Building2,
};

export default function FeatureCard({
  title,
  description,
  icon,
  delay = 0,
}: FeatureCardProps) {
  const Icon = iconMap[icon] || Box;

  return (
    <Card delay={delay}>
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-primary)]/20 flex items-center justify-center mb-4">
        {Icon && <Icon size={24} className="text-[var(--color-primary-light)]" />}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
        {description}
      </p>
    </Card>
  );
}
