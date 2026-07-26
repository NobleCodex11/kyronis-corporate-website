import { company } from "@/config/company";
import { contact } from "@/config/contact";
import { social } from "@/config/social";
import { navLinks, footerLinks } from "@/config/navigation";

// Re-export for existing consumers
export { navLinks, footerLinks };

/** @deprecated Use `company` from @/config/company directly */
export const companyInfo = {
  name: company.name,
  tagline: company.tagline,
  email: contact.email,
  phone: contact.phone,
  address: contact.address,
  linkedin: social.linkedin,
  github: social.github,
};
