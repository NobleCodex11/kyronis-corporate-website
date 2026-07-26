"use client";

import { motion } from "framer-motion";
import { Cookie } from "lucide-react";
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
              <Cookie size={30} className="text-[var(--color-primary-light)]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Cookie{" "}
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

      {/* ---------- What Are Cookies ---------- */}
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
              1. What Are Cookies
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Cookies are small text files that are placed on your device
              (computer, smartphone, tablet, or other electronic device) when
              you visit a website. Cookies are widely used to make websites
              function efficiently, enhance user experience, remember
              preferences, and provide information to website owners about how
              users interact with their sites. In addition to cookies, we may
              use similar technologies such as web beacons, pixels, local
              storage, and scripts (collectively referred to as
              &ldquo;cookies&rdquo; in this policy) to collect and store
              information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- How We Use Cookies ---------- */}
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
              2. How We Use Cookies
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              {company.name} uses cookies and similar technologies for a variety of
              purposes that are essential to the operation of our website and
              services, including:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-secondary)] leading-relaxed">
              <li>
                Ensuring the website functions correctly by enabling core
                functionality such as page navigation, secure login areas, and
                form submissions.
              </li>
              <li>
                Analyzing how users interact with our website to identify areas
                for improvement, measure performance, and understand which
                content is most valuable to our audience.
              </li>
              <li>
                Remembering your preferences — such as language selection,
                display settings, and accessibility options — to provide a more
                personalized browsing experience.
              </li>
              <li>
                Delivering relevant content and measuring the effectiveness of
                our communications and outreach efforts.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ---------- Types of Cookies We Use ---------- */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="bg-[var(--color-glass)] border border-[var(--color-glass-border)] backdrop-blur-sm rounded-2xl p-8 lg:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              3. Types of Cookies We Use
            </h2>

            <div className="space-y-6">
              <div className="bg-[var(--color-glass-hover)] border border-[var(--color-glass-border)] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[var(--color-primary-light)] mb-2">
                  Essential Cookies
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  These cookies are strictly necessary for the operation of our
                  website. They enable core functionality such as page
                  navigation, secure access to protected areas, and form
                  processing. The website cannot function properly without these
                  cookies, and they cannot be disabled through our cookie
                  preference center. Essential cookies do not gather information
                  about you for marketing purposes and do not track your
                  browsing activity on other sites.
                </p>
              </div>

              <div className="bg-[var(--color-glass-hover)] border border-[var(--color-glass-border)] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[var(--color-primary-light)] mb-2">
                  Performance Cookies
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  Performance cookies collect anonymous information about how
                  visitors use our website — such as which pages are visited most
                  often, how users navigate between pages, and whether they
                  encounter error messages. These cookies help us understand
                  user behavior, measure site performance, and identify
                  opportunities for improvement. All information collected by
                  performance cookies is aggregated and therefore anonymous.
                </p>
              </div>

              <div className="bg-[var(--color-glass-hover)] border border-[var(--color-glass-border)] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[var(--color-primary-light)] mb-2">
                  Functionality Cookies
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  Functionality cookies allow our website to remember choices
                  you make — such as your preferred language, region, display
                  theme, or text size — and provide enhanced, more personalized
                  features. These cookies may be set by us or by third-party
                  providers whose services we have integrated into our pages.
                  Disabling functionality cookies may impact your experience, as
                  certain settings will need to be reselected on each visit.
                </p>
              </div>

              <div className="bg-[var(--color-glass-hover)] border border-[var(--color-glass-border)] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[var(--color-primary-light)] mb-2">
                  Targeting Cookies
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  Targeting cookies are typically used to deliver content and
                  communications that are more relevant to you and your
                  interests. {company.name} does not currently use targeting or
                  advertising cookies on our website.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- Third-Party Cookies ---------- */}
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
              4. Third-Party Cookies
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              In addition to our own cookies, we may allow trusted third-party
              service providers to place cookies on your device through our
              website. These third parties include analytics providers such as
              Google Analytics, which help us understand how users engage with
              our content, and platform integration partners whose embedded
              tools and interactive features may rely on cookies. These
              third-party cookies are governed by the respective privacy and
              cookie policies of those providers, and we do not control the
              dissemination or use of those cookies. We encourage you to review
              the cookie policies of each third-party service for detailed
              information about their practices and opt-out mechanisms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Your Choices ---------- */}
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
              5. Your Choices
            </h2>

            <h3 className="text-lg font-semibold text-[var(--color-primary-light)] mb-3">
              Browser Settings
            </h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
              Most web browsers allow you to manage your cookie preferences
              through their settings. You can configure your browser to block
              all cookies, accept only first-party cookies, or delete cookies
              when you close your browser. Please note that disabling cookies
              may affect the functionality, performance, and user experience of
              our website. Instructions for managing cookies can typically be
              found in your browser&apos;s &ldquo;Help,&rdquo;
              &ldquo;Preferences,&rdquo; or &ldquo;Settings&rdquo; menu.
            </p>

            <h3 className="text-lg font-semibold text-[var(--color-primary-light)] mb-3">
              Opt-Out Options
            </h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              You may exercise control over certain types of cookies through the
              following opt-out mechanisms:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[var(--color-text-secondary)] leading-relaxed">
              <li>
                <strong className="text-white">Our Cookie Banner:</strong>{" "}
                When you first visit our website, a cookie consent banner
                allows you to accept or decline non-essential cookie categories.
                Your preferences will be saved and respected on subsequent
                visits.
              </li>
              <li>
                <strong className="text-white">Google Analytics:</strong> You
                can opt out of Google Analytics tracking by installing the
                Google Analytics Opt-out Browser Add-on, available at
                tools.google.com/dlpage/gaoptout.
              </li>
              <li>
                <strong className="text-white">
                  Digital Advertising Alliance:
                </strong>{" "}
                You can learn more about interest-based advertising and opt out
                from participating companies at optout.aboutads.info.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ---------- Changes to This Cookie Policy ---------- */}
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
              6. Changes to This Cookie Policy
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {company.name} may update this Cookie Policy from time to time to
              reflect changes in our practices, technology, legal requirements,
              or for other operational reasons. When we make changes, we will
              revise the &ldquo;Last Updated&rdquo; date at the top of this
              page. We encourage you to review this Cookie Policy periodically
              to stay informed about how we use cookies and your associated
              choices.
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
              7. Contact Us
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              If you have any questions or concerns about this Cookie Policy and
              our use of cookies and similar technologies, please contact us:
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
