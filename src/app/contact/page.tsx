import type { Metadata } from "next";
import { company } from "@/config/company";
import ClientContent from "./ClientContent";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${company.name}. Contact us for partnerships, inquiries, or career opportunities.`,
};

export default function Page() {
  return <ClientContent />;
}
