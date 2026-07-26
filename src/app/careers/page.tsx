import type { Metadata } from "next";
import { company } from "@/config/company";
import ClientContent from "./ClientContent";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join ${company.name} and help engineer tomorrow. Explore careers, internships, and our innovative company culture.`,
};

export default function Page() {
  return <ClientContent />;
}
