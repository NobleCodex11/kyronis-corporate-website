import type { Metadata } from "next";
import { company } from "@/config/company";
import ClientContent from "./ClientContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    `${company.name} technology services including AI solutions, software development, robotics, engineering consulting, and technical research.`,
};

export default function Page() {
  return <ClientContent />;
}
