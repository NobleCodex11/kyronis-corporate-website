"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Server, Building2, FlaskConical, Rocket, Box } from "lucide-react";
import { portfolioDivisions } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain,
  Cpu,
  Server,
  Building2,
};

const divisionGradients: Record<string, string> = {
  ai: "from-[var(--color-primary)]/10 via-[var(--color-primary)]/5 to-transparent",
  robotics: "from-[var(--color-secondary)]/10 via-[var(--color-secondary)]/5 to-transparent",
  "information-technology": "from-[var(--color-accent)]/10 via-[var(--color-accent)]/5 to-transparent",
  "civil-engineering": "from-[var(--color-primary-light)]/10 via-[var(--color-primary)]/5 to-transparent",
};

const divisionBorderGradients: Record<string, string> = {
  ai: "from-[var(--color-primary)] via-[var(--color-accent)] to-transparent",
  robotics: "from-[var(--color-secondary)] via-[var(--color-secondary-light)] to-transparent",
  "information-technology": "from-[var(--color-accent)] via-[var(--color-primary)] to-transparent",
  "civil-engineering": "from-[var(--color-primary-light)] via-[var(--color-secondary)] to-transparent",
};

const highlightCardGradients: Record<string, string> = {
  ai: "from-[var(--color-primary)]/15 to-[var(--color-primary)]/5",
  robotics: "from-[var(--color-secondary)]/15 to-[var(--color-secondary)]/5",
  "information-technology": "from-[var(--color-accent)]/15 to-[var(--color-accent)]/5",
  "civil-engineering": "from-[var(--color-primary-light)]/15 to-[var(--color-primary-light)]/5",
};

const highlightBorderColors: Record<string, string> = {
  ai: "border-[var(--color-primary)]/30",
  robotics: "border-[var(--color-secondary)]/30",
  "information-technology": "border-[var(--color-accent)]/30",
  "civil-engineering": "border-[var(--color-primary-light)]/30",
};

const roadmapAccents: Record<string, string> = {
  ai: "from-[var(--color-accent)]/15 to-[var(--color-accent)]/5 border-[var(--color-accent)]/25",
  robotics: "from-[var(--color-primary)]/15 to-[var(--color-primary)]/5 border-[var(--color-primary)]/25",
  "information-technology": "from-[var(--color-secondary)]/15 to-[var(--color-secondary)]/5 border-[var(--color-secondary)]/25",
  "civil-engineering": "from-[var(--color-secondary)]/15 to-[var(--color-secondary)]/5 border-[var(--color-secondary)]/25",
};

const sectionLabels: Record<string, string> = {
  expertise: "Expertise",
  research: "Research",
  capabilities: "Capabilities",
};

function GridSection({
  title,
  items,
  id,
}: {
  title: string;
  items: string[];
  id: string;
}) {
  return (
    <motion.div
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`h-8 w-1 rounded-full bg-gradient-to-b ${divisionBorderGradients[id]}`}
        />
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{
              y: -2,
              borderColor: "rgba(99,102,241,0.25)",
            }}
            className="group bg-[var(--color-glass)] border border-[var(--color-glass-border)] rounded-xl p-5 backdrop-blur-sm transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 w-2 h-2 rounded-full bg-[var(--color-primary)] shrink-0 group-hover:bg-[var(--color-secondary)] transition-colors duration-300" />
              <span className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed group-hover:text-[var(--color-foreground)] transition-colors duration-300">
                {item}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function PortfolioContent() {
  return (
    <div className="min-h-screen">
      {/* Hero / Page Header */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <SectionHeader
            title="Our Divisions"
            subtitle="Portfolio"
            description="Four integrated domains where we are building long-term expertise. These represent our areas of focus — not existing business divisions with active operations."
            centered={true}
          />
        </div>
      </section>

      {/* Division Sections */}
      {portfolioDivisions.map((division, divIndex) => {
        const DivisionIcon = iconMap[division.icon] || Box;

        return (
          <section
            key={division.id}
            id={division.id}
            className="relative"
          >
            {/* Top border gradient */}
            <div
              className={`h-px w-full bg-gradient-to-r ${divisionBorderGradients[division.id]}`}
            />

            {/* Section background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-b ${divisionGradients[division.id]} pointer-events-none`}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
              {/* Division Header */}
              <motion.div
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-10 lg:mb-14"
              >
                <div className="flex items-center gap-4 sm:gap-5 mb-4">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${highlightCardGradients[division.id]} border ${highlightBorderColors[division.id]} flex items-center justify-center shrink-0`}
                  >
                    {DivisionIcon && (
                      <DivisionIcon size={30} className="text-[var(--color-primary-light)]" />
                    )}
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-[var(--color-primary-light)] mb-1">
                      Division {String(divIndex + 1).padStart(2, "0")}
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                      {division.title}
                    </h2>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-3xl">
                  {division.subtitle}
                </p>
              </motion.div>

              {/* Overview */}
              <motion.p
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm sm:text-base lg:text-lg text-[var(--color-text-muted)] leading-relaxed max-w-4xl mb-12 lg:mb-16"
              >
                {division.overview}
              </motion.p>

              {/* Expertise Grid */}
              <GridSection
                title={sectionLabels.expertise}
                items={division.expertise}
                id={division.id}
              />

              {/* Research Grid */}
              <GridSection
                title={sectionLabels.research}
                items={division.research}
                id={division.id}
              />

              {/* Capabilities Grid */}
              <GridSection
                title={sectionLabels.capabilities}
                items={division.capabilities}
                id={division.id}
              />

              {/* Current Work */}
              <motion.div
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${highlightCardGradients[division.id]} border ${highlightBorderColors[division.id]} p-6 sm:p-8 lg:p-10 backdrop-blur-sm`}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/20 border border-[var(--color-primary)]/25 flex items-center justify-center">
                        <FlaskConical size={20} className="text-[var(--color-primary-light)]" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold">Current Work</h3>
                    </div>
                    <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                      {division.currentWork}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Future Roadmap */}
              <motion.div
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${roadmapAccents[division.id]} p-6 sm:p-8 lg:p-10 backdrop-blur-sm`}
                >
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/25 flex items-center justify-center">
                        <Rocket size={20} className="text-[var(--color-accent)]" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold">Future Roadmap</h3>
                    </div>
                    <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                      {division.futureRoadmap}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Bottom spacer */}
      <div className="h-16 sm:h-24" />
    </div>
  );
}
