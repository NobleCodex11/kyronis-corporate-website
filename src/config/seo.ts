import { company } from "./company";

export const seo = {
  /** Default <title> for the homepage */
  defaultTitle: `${company.name} — ${company.tagline}`,

  /** Title template for sub-pages. %s is replaced with the page title. */
  titleTemplate: `%s | ${company.name}`,

  /** Default meta description */
  description: `${company.name} is ${company.description}`,

  /** Canonical domain */
  siteUrl: company.website,

  /** OpenGraph site name */
  siteName: company.name,

  /** Meta keywords */
  keywords: [
    company.name,
    "AI",
    "Artificial Intelligence",
    "Robotics",
    "Technology",
    "Engineering",
    "Innovation",
  ] as string[],

  /** robots.txt rules */
  robots: {
    index: true,
    follow: true,
  },

  /** Default locale */
  locale: "en_US" as const,

  /** Favicon / browser title (short name for small displays) */
  shortTitle: company.shortName,
};
