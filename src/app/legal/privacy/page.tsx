import type { Metadata } from "next";
import { company } from "@/config/company";
import ClientContent from "./ClientContent";

export const metadata: Metadata = {
  title: { absolute: `Privacy Policy | ${company.name}` },
  description: `${company.name} Privacy Policy — how we collect, use, and protect your personal information.`,
};

export default function Page() {
  return <ClientContent />;
}
