import { company } from "./company";

export const branding = {
  /** Single-letter logo mark used in Navbar and Footer */
  logoInitial: company.shortName,

  /** Generate copyright string for a given year */
  copyright: (year: number) =>
    `\u00A9 ${year} ${company.name}. All rights reserved.`,

  /** Footer tagline (defaults to company tagline) */
  footerTagline: company.tagline,
} as const;
