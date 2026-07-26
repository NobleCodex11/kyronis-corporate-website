import type { Metadata } from "next";
import { company } from "@/config/company";
import ClientContent from "./ClientContent";

export const metadata: Metadata = {
  title: "Research & Innovation",
  description:
    `Explore ${company.name}'s groundbreaking research in AI, Robotics, and Engineering.`,
};

export default function Page() {
  return <ClientContent />;
}
