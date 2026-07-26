import { company } from "./company";

export const contact = {
  /** General contact / support email */
  email: "contact@kyronis.com",

  /** Careers / hiring email */
  careersEmail: "careers@kyronis.com",

  /** Public phone number (empty = not yet available) */
  phone: "",

  /** Physical / mailing address */
  address: company.headquarters,
} as const;
