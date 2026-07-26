import type { Metadata } from "next";
import { company } from "@/config/company";
import ClientContent from "./ClientContent";

export const metadata: Metadata = {
  title: { absolute: `Terms & Conditions | ${company.name}` },
  description: `${company.name} Terms and Conditions — governing your use of our website and services.`,
};

export default function Page() {
  return <ClientContent />;
}
