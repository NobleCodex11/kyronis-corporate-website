"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { fadeIn } from "@/lib/animations";
import { company } from "@/config/company";
import { contact } from "@/config/contact";
import { productNames } from "@/config/products";

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
              <FileText
                size={30}
                className="text-[var(--color-primary-light)]"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Terms &amp;{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              Last Updated: July 20, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Acceptance of Terms ---------- */}
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
              1. Acceptance of Terms
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              By accessing or using the {company.name} website ({company.domain}), any
              associated subdomains, web applications, APIs, or services
              (collectively, the &ldquo;Services&rdquo;), you agree to be bound
              by these Terms and Conditions. If you do not agree with all of the
              terms set forth herein, you must immediately discontinue use of
              the Services.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              These Terms and Conditions constitute a legally binding agreement
              between you and {company.name}. {company.name} is an early-stage deep technology startup based in {company.headquarters}. Some products, services, and capabilities referenced on this website are under development or represent future plans. We reserve the right to update or
              modify these terms at any time without prior notice. Your
              continued use of the Services following any changes indicates your
              acceptance of the revised terms. It is your responsibility to
              review these Terms and Conditions periodically.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Intellectual Property Rights ---------- */}
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
              2. Intellectual Property Rights
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              All content, features, and functionality available through the
              Services — including but not limited to text, graphics, logos,
              icons, images, audio clips, video clips, software, code,
              algorithms, data compilations, design elements, and the overall
              look and feel — are the exclusive property of {company.name} or its
              licensors and are protected by United States and international
              copyright, trademark, patent, trade secret, and other intellectual
              property laws.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              The {company.name} name, the {company.name} logo, {productNames.aurora}, {productNames.xom}, {productNames.xomed}, and
              all related product and service names, design marks, and slogans
              are trademarks of {company.name} or its affiliates. You may not use any
              of these marks without the prior written permission of {company.name}.
              All other trademarks, service marks, and trade names appearing on
              the Services are the property of their respective owners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Use License ---------- */}
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
              3. Use License
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              {company.name} grants you a limited, non-exclusive, non-transferable,
              and revocable license to access and use the Services for your
              personal or internal business purposes, subject to these Terms and
              Conditions. This license does not include any right to:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-secondary)] leading-relaxed">
              <li>
                Modify, adapt, translate, or create derivative works based on
                the Services or any content therein.
              </li>
              <li>
                Reproduce, distribute, publicly display, or commercially exploit
                any content from the Services without express written
                authorization.
              </li>
              <li>
                Decompile, reverse engineer, disassemble, or otherwise attempt
                to derive the source code of any software component of the
                Services.
              </li>
              <li>
                Remove, obscure, or alter any copyright, trademark, or
                proprietary rights notices.
              </li>
              <li>
                Use any automated means — including bots, scrapers, crawlers, or
                data mining tools — to access, collect, or harvest data from the
                Services without prior written consent.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ---------- User Obligations and Conduct ---------- */}
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
              4. User Obligations and Conduct
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              As a user of the Services, you agree that you will not:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-secondary)] leading-relaxed mb-4">
              <li>
                Use the Services for any unlawful purpose or in violation of any
                applicable local, state, national, or international law or
                regulation.
              </li>
              <li>
                Transmit any viruses, malware, ransomware, or other malicious
                code that could disrupt, damage, or impair the functionality of
                the Services.
              </li>
              <li>
                Engage in any activity that interferes with or disrupts the
                Services, servers, or networks connected to the Services.
              </li>
              <li>
                Impersonate any person or entity, or falsely state or otherwise
                misrepresent your affiliation with a person or entity.
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the
                Services, other user accounts, computer systems, or networks
                through hacking, password mining, or any other means.
              </li>
            </ul>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {company.name} reserves the right to investigate and take appropriate
              legal action against anyone who, in our sole discretion, violates
              these provisions, including reporting violators to law enforcement
              authorities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Disclaimer of Warranties ---------- */}
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
              5. Disclaimer of Warranties
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              THE SERVICES ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS
              AVAILABLE&rdquo; BASIS WITHOUT ANY REPRESENTATIONS OR WARRANTIES
              OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. TO THE
              FULLEST EXTENT PERMITTED BY APPLICABLE LAW, {company.name} DISCLAIMS
              ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES
              OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
              NON-INFRINGEMENT. {company.name} DOES NOT WARRANT THAT THE SERVICES
              WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR
              OTHER HARMFUL COMPONENTS, OR THAT ANY DEFECTS WILL BE CORRECTED.
              YOU EXPRESSLY AGREE THAT YOUR USE OF THE SERVICES IS AT YOUR SOLE
              RISK.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Limitation of Liability ---------- */}
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
              6. Limitation of Liability
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              SHALL {company.name}, ITS DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES,
              AGENTS, CONTRACTORS, OR LICENSORS BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE
              DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE,
              GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN
              CONNECTION WITH:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-secondary)] leading-relaxed">
              <li>Your use of or inability to use the Services.</li>
              <li>
                Any conduct or content of any third party on or through the
                Services.
              </li>
              <li>
                Unauthorized access to or alteration of your transmissions or
                data.
              </li>
              <li>
                Statements or conduct of any third party regarding the Services.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ---------- Indemnification ---------- */}
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
              7. Indemnification
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              You agree to indemnify, defend, and hold harmless {company.name}, its
              affiliates, and their respective officers, directors, employees,
              agents, and licensors from and against any and all claims,
              liabilities, damages, losses, costs, expenses, and fees (including
              reasonable attorneys&apos; fees) arising out of or relating to
              your violation of these Terms and Conditions, your use of the
              Services, your infringement of any intellectual property or other
              right of any person or entity, or your violation of any applicable
              law, rule, or regulation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Governing Law ---------- */}
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
              8. Governing Law
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of the Republic of India, without regard
              to its conflict of law principles. Any legal action, suit, or
              proceeding arising out of or relating to these terms shall be
              instituted exclusively in the courts located in {company.headquarters}. You
              waive any objection to the exercise of jurisdiction over you by
              such courts and to venue in such courts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Termination ---------- */}
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
              9. Termination
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              {company.name} reserves the right, in its sole discretion, to terminate
              or suspend your access to all or any part of the Services at any
              time, with or without notice, for any reason, including without
              limitation any violation of these Terms and Conditions.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Upon termination, your right to use the Services will immediately
              cease. All provisions of these Terms and Conditions that by their
              nature should survive termination — including but not limited to
              ownership provisions, warranty disclaimers, indemnification, and
              limitations of liability — shall survive termination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Contact Information ---------- */}
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
              10. Contact Information
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              If you have any questions, concerns, or feedback regarding these
              Terms and Conditions, please contact us:
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