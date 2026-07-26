import type { Metadata } from "next";
import { company } from "@/config/company";
import PortfolioContent from "@/components/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    `Explore ${company.name}'s four core divisions: Artificial Intelligence, Robotics, Information Technology, and Civil Engineering.`,
};

export default function Page() {
  return <PortfolioContent />;
}
