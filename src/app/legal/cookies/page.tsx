import type { Metadata } from "next";
import { company } from "@/config/company";
import ClientContent from "./ClientContent";

export const metadata: Metadata = {
  title: { absolute: `Cookie Policy | ${company.name}` },
  description: `${company.name} Cookie Policy — how we use cookies and similar technologies.`,
};

export default function Page() {
  return <ClientContent />;
}
