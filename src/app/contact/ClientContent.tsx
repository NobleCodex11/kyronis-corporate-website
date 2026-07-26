"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ExternalLink,
  Clock,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import Card from "@/components/Card";
import { companyInfo } from "@/data/navigation";
import { company } from "@/config/company";
import { contact } from "@/config/contact";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
    color: "primary",
  },
  {
    icon: Phone,
    label: "Phone",
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone}`,
    color: "accent",
  },
  {
    icon: MapPin,
    label: "Location",
    value: companyInfo.address,
    href: null,
    color: "primary",
  },
  {
    icon: Globe,
    label: "LinkedIn",
    value: "Connect with us",
    href: companyInfo.linkedin,
    color: "primary",
    extraIcon: ExternalLink,
    extraLabel: "GitHub",
    extraHref: companyInfo.github,
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon - Fri, 9:00 AM - 6:00 PM PST",
    href: null,
    color: "accent",
  },
];

export default function ContactClientContent() {
  return (
    <main className="flex flex-col flex-1">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <section className="text-center">
            <motion.p
              initial={{ y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium tracking-widest uppercase text-[var(--color-primary-light)] mb-4"
            >
              Let&apos;s Talk
            </motion.p>
            <motion.h1
              initial={{ y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Get in{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed"
            >
              {`${company.name} is in its early stages. Official contact channels will be announced as the company grows. For now, you can reach us here.`}
            </motion.p>
          </section>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            subtitle="Reach Out"
            title="Send Us a Message"
            description="Fill out the form below or use any of the contact channels on the right."
          />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <motion.div
              initial={{ x: -30 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ x: 30 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-4"
            >
              {contactCards.map((card, index) => {
                const isSocial = card.label === "LinkedIn";
                const colorVar =
                  card.color === "primary"
                    ? "var(--color-primary)"
                    : "var(--color-accent)";
                const colorLightVar =
                  card.color === "primary"
                    ? "var(--color-primary-light)"
                    : "var(--color-accent-light)";

                return (
                  <motion.div
                    key={card.label}
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <Card className="!p-5">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                          style={{
                            background: `linear-gradient(135deg, ${colorVar}20, ${colorVar}08)`,
                            border: `1px solid ${colorVar}20`,
                          }}
                        >
                          <card.icon
                            size={18}
                            style={{ color: colorLightVar }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium tracking-widest uppercase text-[var(--color-text-muted)] mb-1">
                            {card.label}
                          </p>
                          {card.href ? (
                            <a
                              href={card.href}
                              target={
                                card.href.startsWith("mailto") ||
                                card.href.startsWith("tel")
                                  ? undefined
                                  : "_blank"
                              }
                              rel={
                                card.href.startsWith("mailto") ||
                                card.href.startsWith("tel")
                                  ? undefined
                                  : "noopener noreferrer"
                              }
                              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary-light)] transition-colors duration-200 break-all"
                            >
                              {card.value}
                            </a>
                          ) : (
                            <p className="text-sm text-[var(--color-text-secondary)] break-all">
                              {card.value}
                            </p>
                          )}

                          {isSocial && card.extraIcon && card.extraHref && (
                            <a
                              href={card.extraHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 mt-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary-light)] transition-colors duration-200"
                            >
                              <card.extraIcon size={16} />
                              <span>{card.extraLabel}</span>
                              <ArrowRight size={12} />
                            </a>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            subtitle="Find Us"
            title="Our Location"
            description={`${company.name} is based in ${contact.address}.`}
          />
          <motion.div
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card hover={false} className="!p-0 overflow-hidden">
              <div className="aspect-[16/7] sm:aspect-[16/5] bg-[var(--color-glass)] flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 border border-[var(--color-glass-border)] flex items-center justify-center">
                  <MapPin
                    size={36}
                    className="text-[var(--color-primary-light)]"
                  />
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Map will be rendered here
                </p>
              </div>
              <div className="p-6 lg:p-8 border-t border-[var(--color-glass-border)]">
                <h3 className="text-lg font-semibold mb-2">
                  {company.name} Headquarters
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {companyInfo.address}
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
