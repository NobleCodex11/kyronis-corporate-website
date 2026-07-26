import type { MetadataRoute } from "next";
import { company } from "@/config/company";
import { assets } from "@/config/assets";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: company.name,
    description: `${company.name} — ${company.tagline}`,
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A1B",
    theme_color: "#4F46E5",
    icons: [
      {
        src: assets.androidIcon192,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: assets.androidIcon512,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: assets.appleTouchIcon,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
