import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe, ExternalLink, ArrowUpRight } from "lucide-react";
import { company } from "@/config/company";
import { contact } from "@/config/contact";
import { social } from "@/config/social";
import { branding } from "@/config/branding";
import { assets } from "@/config/assets";
import { footerLinks } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-glass-border)] bg-[var(--color-surface)] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src={assets.logo}
                alt={company.name}
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span className="text-lg font-bold">{company.name}</span>
            </Link>
            <p className="text-sm text-[var(--color-text-muted)] mb-6 leading-relaxed">
              {branding.footerTagline}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-[var(--color-glass-hover)] text-[var(--color-text-muted)] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Globe size={18} />
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-[var(--color-glass-hover)] text-[var(--color-text-muted)] hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Link Groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold mb-4 text-white">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--color-glass-border)]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[var(--color-text-muted)]">
              <span className="inline-flex items-center gap-1.5">
                <Mail size={14} className="shrink-0" /> {contact.email}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone size={14} className="shrink-0" /> {contact.phone}
              </span>
              <span className="inline-flex items-center gap-1.5 max-w-[280px] sm:max-w-none">
                <MapPin size={14} className="shrink-0" /> <span className="truncate">{contact.address}</span>
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)]">
              {branding.copyright(new Date().getFullYear())}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
