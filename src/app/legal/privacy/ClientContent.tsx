"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { fadeIn } from "@/lib/animations";
import { company } from "@/config/company";
import { contact } from "@/config/contact";

export default function ClientContent() {
  return (
    <main className="flex flex-col flex-1">
      {/* ---------- Header ---------- */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-primary)]/20 mb-6">
              <Shield size={30} className="text-[var(--color-primary-light)]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Privacy{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              Last Updated: July 20, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Introduction ---------- */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="bg-[var(--color-glass)] border border-[var(--color-glass-border)] backdrop-blur-sm rounded-2xl p-8 lg:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              1. Introduction
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              {company.name} respects your privacy and is committed to protecting the
              personal information you share with us. {company.name} is an early-stage deep technology startup based in {company.headquarters}. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your data when you
              visit our website at {company.domain}, use our services, or interact
              with our platforms in any manner.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              By accessing or using our services, you acknowledge that you have
              read, understood, and agree to the practices described in this
              policy. If you do not agree with any part of this Privacy Policy,
              please discontinue use of our website and services immediately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Information We Collect ---------- */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="bg-[var(--color-glass)] border border-[var(--color-glass-border)] backdrop-blur-sm rounded-2xl p-8 lg:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              2. Information We Collect
            </h2>

            <h3 className="text-lg font-semibold text-[var(--color-primary-light)] mb-3">
              Personal Information
            </h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
              We may collect personally identifiable information that you
              voluntarily provide when you fill out contact forms, subscribe to
              newsletters, register for events, apply for employment, or
              otherwise communicate with us. This may include your name, email
              address, phone number, company name, job title, and any other
              details you choose to share.
            </p>

            <h3 className="text-lg font-semibold text-[var(--color-primary-light)] mb-3">
              Usage Data
            </h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
              When you access our website, our servers automatically log certain
              information, including your IP address, browser type, operating
              system, referring URLs, pages visited, time spent on pages, and
              other diagnostic data. This information helps us analyze traffic
              patterns, improve performance, and enhance user experience.
            </p>

            <h3 className="text-lg font-semibold text-[var(--color-primary-light)] mb-3">
              Cookies and Tracking Technologies
            </h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              We use cookies, web beacons, and similar tracking technologies to
              monitor activity on our website and store certain preferences. You
              can configure your browser to reject all cookies or to alert you
              when a cookie is being sent. However, some features of our website
              may not function properly without cookies. For detailed
              information, please refer to our Cookie Policy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- How We Use Your Information ---------- */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="bg-[var(--color-glass)] border border-[var(--color-glass-border)] backdrop-blur-sm rounded-2xl p-8 lg:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              3. How We Use Your Information
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              {company.name} uses the information we collect for the following
              purposes:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-secondary)] leading-relaxed">
              <li>
                To provide, operate, and maintain our website and services.
              </li>
              <li>
                To respond to your inquiries, requests, and customer support
                needs.
              </li>
              <li>
                To send you administrative communications, newsletters, marketing
                materials, and promotional content — only where you have
                explicitly consented.
              </li>
              <li>
                To process employment applications and evaluate candidates for
                open positions.
              </li>
              <li>
                To detect, prevent, and address technical issues, security
                incidents, and fraudulent activity.
              </li>
              <li>
                To analyze usage trends and improve the functionality,
                performance, and user experience of our platforms.
              </li>
              <li>
                To comply with applicable legal obligations and enforce our
                Terms and Conditions.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ---------- Data Sharing and Disclosure ---------- */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="bg-[var(--color-glass)] border border-[var(--color-glass-border)] backdrop-blur-sm rounded-2xl p-8 lg:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              4. Data Sharing and Disclosure
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              {company.name} does not sell, rent, or trade your personal information
              to third parties for their own marketing purposes. We may share
              your data only in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-secondary)] leading-relaxed">
              <li>
                <strong className="text-white">Service Providers:</strong> We
                may engage trusted third-party vendors to perform functions on
                our behalf — such as cloud hosting, email delivery, analytics,
                and customer support — who are contractually bound to protect
                your data.
              </li>
              <li>
                <strong className="text-white">Legal Compliance:</strong> We
                may disclose information if required to do so by law, court
                order, or governmental regulation, or if such disclosure is
                necessary to protect the rights, property, or safety of
                {company.name}, our users, or the public.
              </li>
              <li>
                <strong className="text-white">Business Transfers:</strong> In
                the event of a merger, acquisition, reorganization, or sale of
                all or a portion of our assets, user information may be among
                the transferred assets.
              </li>
              <li>
                <strong className="text-white">With Your Consent:</strong> We
                may share your information for any other purpose with your
                explicit consent.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ---------- Data Security ---------- */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="bg-[var(--color-glass)] border border-[var(--color-glass-border)] backdrop-blur-sm rounded-2xl p-8 lg:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              5. Data Security
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {company.name} is committed to implementing appropriate security measures to protect your personal information. However, we are an early-stage company with limited resources. While we strive to use commercially reasonable means to protect your personal data, no method of transmission over the Internet or electronic storage is one hundred percent secure, and we cannot guarantee absolute security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Your Rights ---------- */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="bg-[var(--color-glass)] border border-[var(--color-glass-border)] backdrop-blur-sm rounded-2xl p-8 lg:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              6. Your Rights
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
              Depending on your jurisdiction, you may have the following rights
              regarding your personal information:
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-[var(--color-glass-hover)] border border-[var(--color-glass-border)] rounded-xl p-5">
                <h3 className="text-base font-semibold text-[var(--color-primary-light)] mb-2">
                  Right of Access
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  You may request a copy of the personal data we hold about you
                  and verify the lawfulness of our processing.
                </p>
              </div>
              <div className="bg-[var(--color-glass-hover)] border border-[var(--color-glass-border)] rounded-xl p-5">
                <h3 className="text-base font-semibold text-[var(--color-primary-light)] mb-2">
                  Right to Rectification
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  You may request that we correct any inaccurate or incomplete
                  personal information we hold about you.
                </p>
              </div>
              <div className="bg-[var(--color-glass-hover)] border border-[var(--color-glass-border)] rounded-xl p-5">
                <h3 className="text-base font-semibold text-[var(--color-primary-light)] mb-2">
                  Right to Erasure
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  You may request that we delete your personal data under
                  certain circumstances, such as when it is no longer necessary
                  for the purposes for which it was collected.
                </p>
              </div>
              <div className="bg-[var(--color-glass-hover)] border border-[var(--color-glass-border)] rounded-xl p-5">
                <h3 className="text-base font-semibold text-[var(--color-primary-light)] mb-2">
                  Right to Data Portability
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  You may request a copy of your personal data in a structured,
                  machine-readable format and have it transferred to another
                  controller.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- Third-Party Services ---------- */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="bg-[var(--color-glass)] border border-[var(--color-glass-border)] backdrop-blur-sm rounded-2xl p-8 lg:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              7. Third-Party Services
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Our website may contain links to third-party websites, plugins, and
              services that are not owned or controlled by {company.name}. This
              Privacy Policy does not apply to any third-party services. We
              encourage you to review the privacy policies of every third-party
              service you interact with. {company.name} assumes no responsibility
              for the content, privacy practices, or data handling of any
              third-party sites or services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Children's Privacy ---------- */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="bg-[var(--color-glass)] border border-[var(--color-glass-border)] backdrop-blur-sm rounded-2xl p-8 lg:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              8. Children&apos;s Privacy
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Our services are not directed to individuals under the age of
              sixteen. {company.name} does not knowingly collect, use, or disclose
              personal information from children under sixteen without
              verifiable parental consent. If we become aware that we have
              inadvertently collected personal data from a child under sixteen
              without such consent, we will take immediate steps to delete that
              information from our records. If you believe that a child under
              sixteen has provided us with personal information, please contact
              us immediately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- International Data Transfers ---------- */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="bg-[var(--color-glass)] border border-[var(--color-glass-border)] backdrop-blur-sm rounded-2xl p-8 lg:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              9. International Data Transfers
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {company.name} is headquartered in {company.headquarters}. Your personal information may be transferred to,
              stored, and processed in countries outside of your jurisdiction,
              including India, where our servers and central
              databases are located. When we transfer your data across borders,
              we ensure that appropriate safeguards — such as Standard
              Contractual Clauses or equivalent mechanisms — are in place to
              protect your information in accordance with applicable data
              protection laws.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Changes to This Policy ---------- */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="bg-[var(--color-glass)] border border-[var(--color-glass-border)] backdrop-blur-sm rounded-2xl p-8 lg:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {company.name} reserves the right to update or modify this Privacy
              Policy at any time. When we make material changes, we will post
              the updated policy on this page and revise the &ldquo;Last
              Updated&rdquo; date at the top. We encourage you to review this
              Privacy Policy periodically to stay informed about how we are
              protecting your information. Your continued use of our website and
              services following the posting of any changes constitutes your
              acceptance of those changes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Contact Us ---------- */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="bg-[var(--color-glass)] border border-[var(--color-glass-border)] backdrop-blur-sm rounded-2xl p-8 lg:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              11. Contact Us
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please reach out to us:
            </p>
            <div className="space-y-2 text-[var(--color-text-secondary)]">
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[var(--color-primary-light)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {contact.email}
                </a>
              </p>
              <p>
                <strong className="text-white">Address:</strong> {company.headquarters}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
