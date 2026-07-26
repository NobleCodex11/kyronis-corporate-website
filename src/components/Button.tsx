"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 font-medium rounded-xl transition-all duration-300 group";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white hover:shadow-lg hover:shadow-[var(--color-primary)]/25 hover:-translate-y-0.5",
    secondary:
      "bg-[var(--color-glass)] border border-[var(--color-glass-border)] text-white hover:bg-[var(--color-glass-hover)] hover:border-white/20 hover:-translate-y-0.5",
    ghost:
      "text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-glass)]",
  };

  const styles = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {variant === "primary" && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={styles}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      type={type}
      className={styles}
    >
      {content}
    </motion.button>
  );
}
