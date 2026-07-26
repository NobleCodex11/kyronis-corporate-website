import type { Metadata } from "next";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${company.name}'s mission, vision, and the team engineering tomorrow's technology.`,
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
