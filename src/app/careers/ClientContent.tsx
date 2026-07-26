"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Heart,
  Users,
  Rocket,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  Mail,
  Lightbulb,
  Globe,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { companyInfo } from "@/data/navigation";
import { company } from "@/config/company";
import { contact } from "@/config/contact";

const cultureCards = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We encourage bold thinking and reward intellectual curiosity. Every team member has the freedom to explore, experiment, and push boundaries — because the next breakthrough can come from anywhere.",
  },
  {
    icon: Heart,
    title: "Work-Life Harmony",
    description:
      "We believe sustainable innovation requires balance. Flexible hours, remote-friendly policies, and generous time off ensure you bring your best self to work every day.",
  },
  {
    icon: Users,
    title: "Diverse & Inclusive",
    description:
      "Our strength comes from our differences. We actively build teams that reflect the world we serve — diverse in background, thought, and experience — united by a shared mission.",
  },
  {
    icon: Rocket,
    title: "Growth Mindset",
    description:
      "Continuous learning is in our DNA. From conference sponsorships and internal workshops to tuition reimbursement and leadership development, we invest in your growth at every stage.",
  },
];

const openPositions = [
  {
    title: "AI/ML Engineer",
    department: "Artificial Intelligence",
    location: "Future Opportunity",
    type: "Full-time",
  },
  {
    title: "Robotics Software Engineer",
    department: "Robotics",
    location: "Future Opportunity",
    type: "Full-time",
  },
  {
    title: "Cloud Infrastructure Engineer",
    department: "Information Technology",
    location: "Future Opportunity",
    type: "Full-time",
  },
  {
    title: "Software Engineer",
    department: "Software Engineering",
    location: "Future Opportunity",
    type: "Full-time",
  },
];

const internshipPerks = [
  {
    icon: Users,
    label: "Mentorship",
    desc: "Guidance from experienced engineers and researchers.",
  },
  {
    icon: Briefcase,
    label: "Real Projects",
    desc: "Contribute to meaningful work, not side tasks.",
  },
  {
    icon: GraduationCap,
    label: "Learning Environment",
    desc: "A culture that values curiosity and growth.",
  },
  {
    icon: Rocket,
    label: "Future Opportunities",
    desc: "Build relationships for potential future roles.",
  },
];

export default function CareersClientContent() {
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
              Future Opportunities
            </motion.p>
            <motion.h1
              initial={{ y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Join the{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
                Journey
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed"
            >
              {`${company.name} is not actively hiring at this time. However, we are always interested in connecting with talented engineers and researchers who share our long-term vision.`}
            </motion.p>
          </section>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            subtitle={`Life at ${company.name}`}
            title="Our Culture"
            description="Four pillars that define how we work, collaborate, and grow together."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureCards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-primary)]/20 flex items-center justify-center mb-5">
                    <item.icon
                      size={22}
                      className="text-[var(--color-primary-light)]"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-[128px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            subtitle="Join Our Team"
            title="Open Positions"
            description="We are not actively hiring, but here are the kinds of roles we envision for the future."
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {openPositions.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full relative overflow-hidden group">
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-[var(--color-primary-light)]">
                      <Sparkles size={12} />
                      Coming Soon
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-primary)]/20 flex items-center justify-center mb-4">
                    <Briefcase
                      size={18}
                      className="text-[var(--color-primary-light)]"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 pr-24">
                    {job.title}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                      <Briefcase size={14} />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                      <MapPin size={14} />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                      <Clock size={14} />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            subtitle="Start Your Journey"
            title="Internships"
            description="Future internship opportunities for students and recent graduates who want to work on meaningful engineering problems."
          />
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <Card hover={false} className="!bg-[var(--color-glass)] backdrop-blur-md !border-[var(--color-glass-border)]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-primary)]/20 border border-[var(--color-accent)]/20 flex items-center justify-center shrink-0">
                    <GraduationCap
                      size={26}
                      className="text-[var(--color-accent-light)]"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {company.name} Internship Program
                    </h3>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      We plan to offer an internship program for students and recent
                      graduates who want to work on meaningful engineering problems.
                      Interns will be embedded in real teams, contributing to active
                      projects from day one. This is a future capability — we are not
                      currently accepting internship applications.
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {internshipPerks.map((perk) => (
                    <div
                      key={perk.label}
                      className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-glass)] border border-[var(--color-glass-border)]"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-primary)]/20 flex items-center justify-center shrink-0">
                        <perk.icon
                          size={16}
                          className="text-[var(--color-primary-light)]"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-0.5">{perk.label}</p>
                        <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                          {perk.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            subtitle="Take the Next Step"
            title="Express Interest"
            description="While we are not actively hiring, we welcome thoughtful connections."
          />
          <motion.div
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-accent)]/20 to-[var(--color-primary)]/10 border border-[var(--color-glass-border)] p-10 lg:p-12 text-center">
              <div className="absolute inset-0 bg-[var(--color-glass)] backdrop-blur-sm" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-primary)]/20 flex items-center justify-center mx-auto mb-6">
                  <Mail size={28} className="text-[var(--color-primary-light)]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Interested in Future Opportunities?
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Email us at{" "}
                  <span className="text-[var(--color-primary-light)] font-medium">
                    {contact.careersEmail}
                  </span>{" "}
                  with a brief introduction about yourself and your interests.
                  We may not respond immediately as we are a small team, but we
                  read every message and will reach out when the time is right.
                </p>
                <Button
                  href={`mailto:${contact.careersEmail}`}
                  variant="primary"
                  size="lg"
                >
                  <Mail size={16} />
                  Express Interest
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            subtitle="Stay in the Loop"
            title="Stay Connected"
            description="Follow us for the latest updates, job postings, and behind-the-scenes stories."
          />
          <motion.div
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto"
          >
            <Card className="text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0077B5]/20 to-[#0077B5]/5 border border-[#0077B5]/20 flex items-center justify-center mx-auto mb-4">
                <Globe size={24} className="text-[#0077B5]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Follow Us on LinkedIn
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
                Connect with {company.name} on LinkedIn for company updates, new
                job postings, thought leadership, and a glimpse into life at
                the intersection of AI, robotics, IT, and civil engineering.
              </p>
              <Button
                href={companyInfo.linkedin}
                variant="secondary"
                size="md"
              >
                <Globe size={16} />
                Visit LinkedIn
                <ArrowRight size={14} />
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
