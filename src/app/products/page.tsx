import type { Metadata } from "next";
import { company } from "@/config/company";
import { productNames } from "@/config/products";
import ClientContent from "./ClientContent";

export const metadata: Metadata = {
  title: "Products",
  description:
    `Discover ${company.name}'s innovative products: ${productNames.aurora} Platform, ${productNames.xom}, ${productNames.xomed}, and future technologies.`,
};

export default function Page() {
  return <ClientContent />;
}
