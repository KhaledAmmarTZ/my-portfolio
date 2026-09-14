"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  ExternalLink,

  GraduationCap,
  MapPin,
} from "lucide-react";

const experiences = [
  {
    year: "2025 — Present",
    type: "Academic / Personal",
    title: "UI/UX Designer & Frontend Developer",
    company: "Independent / Personal Projects",
    location: "Bangladesh",
    description:
      "Working on personal digital products and portfolio projects while developing skills across UI/UX design and frontend development.",
    responsibilities: [
      "Designing responsive web and mobile interfaces in Figma.",
      "Creating wireframes, prototypes, and reusable UI components.",
      "Building responsive frontend interfaces from design concepts.",
      "Exploring modern technologies and improving design-to-code workflow.",
    ],
    technologies: [
      "Figma",
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    year: "2025",
    type: "Internship",
    title: "UI/UX Design Intern",
    company: "Aspire / Nexgenix",
    location: "Bangladesh",
    description:
      "Gained practical experience working with UI/UX design workflows and contributing to digital product design during an internship.",
    responsibilities: [
      "Worked on interface design and user experience improvements.",
      "Created and refined Figma designs based on project requirements.",
      "Worked with reusable UI components and design patterns.",
      "Collaborated around design decisions and project requirements.",
    ],
    technologies: [
      "Figma",
      "UI/UX",
      "Prototyping",
      "Design Systems",
    ],
  },
];

const education = [
  {
    year: "Current",
    title: "B.Sc. in Computer Science & Engineering",
    institution: "University",
    description:
      "Studying computer science and engineering with a focus on software development, machine learning, and technology-driven problem solving.",
  },
];

const milestones = [

  {
    icon: Code2,
    title: "Development",
    description:
      "Turning design concepts into responsive and interactive frontend experiences.",
  },
  {
    icon: GraduationCap,
    title: "Learning",
    description:
      "Continuously exploring new technologies, design methods, and development practices.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0B0F] text-white">
      <Navbar />
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative">
        <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-[#D4AF37]/6 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8 lg:pb-32 lg:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#D4AF37] sm:w-10" />

              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] sm:text-sm sm:tracking-[0.3em]">
                Experience
              </span>

              <span className="h-px w-8 bg-[#D4AF37] sm:w-10" />
            </div>

            <h1 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              A journey through
              <span className="block text-[#D4AF37]">
                design & technology.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              A collection of experiences, projects, and learning milestones
              that have shaped the way I approach design and development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          EXPERIENCE TIMELINE
      ========================================================= */}
      <section className="border-y border-white/8">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-2xl sm:mb-16"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                Professional Journey
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-medium sm:text-4xl md:text-5xl">
              Experience that
              <span className="text-white/40"> shaped my work.</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute bottom-0 left-2.5 top-0 w-px bg-white/10 md:left-45" />

            <div className="space-y-14 sm:space-y-16">
              {experiences.map((experience, index) => (
                <motion.article
                  key={`${experience.title}-${experience.year}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className="relative grid grid-cols-[28px_minmax(0,1fr)] gap-5 md:grid-cols-[180px_28px_minmax(0,1fr)] md:gap-0"
                >
                  {/* Date */}
                  <div className="hidden pt-1 md:block">
                    <p className="text-sm font-medium text-white/65">
                      {experience.year}
                    </p>

                    <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#D4AF37]/70">
                      {experience.type}
                    </p>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative flex justify-center">
                    <div className="relative z-10 mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#0B0B0F]">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="rounded-[14px] border border-white/10 bg-white/2.5 p-6 transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-white/4 sm:p-8">
                    {/* Mobile date */}
                    <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 md:hidden">
                      <span className="text-xs font-medium text-white/60">
                        {experience.year}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />

                      <span className="text-[10px] uppercase tracking-[0.15em] text-[#D4AF37]/70">
                        {experience.type}
                      </span>
                    </div>

                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="text-xl font-medium sm:text-2xl">
                          {experience.title}
                        </h3>

                        <p className="mt-2 text-sm text-[#D4AF37]">
                          {experience.company}
                        </p>

                        <div className="mt-3 flex items-center gap-2 text-xs text-white/35">
                          <MapPin size={13} />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-[9px] border border-white/10 bg-white/2.5 sm:flex">
                        <BriefcaseBusiness
                          size={17}
                          className="text-white/40"
                        />
                      </div>
                    </div>

                    <p className="mt-7 max-w-3xl text-sm leading-7 text-white/55">
                      {experience.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mt-7">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                        Responsibilities
                      </p>

                      <div className="mt-4 space-y-3">
                        {experience.responsibilities.map(
                          (responsibility) => (
                            <div
                              key={responsibility}
                              className="flex items-start gap-3"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#D4AF37]" />

                              <p className="text-sm leading-6 text-white/50">
                                {responsibility}
                              </p>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mt-7 flex flex-wrap gap-2 border-t border-white/8 pt-6">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-white/2.5 px-3 py-1.5 text-xs text-white/50"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EDUCATION
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#D4AF37]" />

                <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                  Education
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
                Learning beyond
                <span className="block text-white/40">
                  the classroom.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
                My academic background gives me a foundation in computing
                while personal projects allow me to apply that knowledge to
                real-world problems.
              </p>
            </motion.div>

            {/* Education cards */}
            <div className="space-y-4">
              {education.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="rounded-[14px] border border-white/10 bg-white/2.5 p-6 sm:p-8"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-[#D4AF37]/20 bg-[#D4AF37]/5">
                        <GraduationCap
                          size={20}
                          className="text-[#D4AF37]"
                        />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-[#D4AF37]">
                          {item.year}
                        </p>

                        <h3 className="mt-2 text-lg font-medium sm:text-xl">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-white/45">
                          {item.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-white/30">
                      <CalendarDays size={13} />
                      <span>Education</span>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-white/45">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MILESTONES
      ========================================================= */}
      <section className="border-y border-white/8 bg-white/1.5">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                What Drives Me
              </span>

              <span className="h-px w-10 bg-[#D4AF37]" />
            </div>

            <h2 className="mt-5 text-3xl font-medium sm:text-4xl md:text-5xl">
              Always
              <span className="text-white/40"> learning and building.</span>
            </h2>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {milestones.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="rounded-[14px] border border-white/10 bg-white/2.5 p-6 sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#D4AF37]/20 bg-[#D4AF37]/5">
                    <Icon size={20} className="text-[#D4AF37]" />
                  </div>

                  <h3 className="mt-7 text-xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CURRENT FOCUS
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/3 p-7 sm:p-10 md:p-14 lg:p-16"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D4AF37]/8 blur-[90px]" />

            <div className="relative">
              <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                Currently
              </p>

              <h2 className="mt-5 max-w-4xl text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
                Building, learning,
                <span className="text-white/40"> and improving.</span>
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/50 sm:text-base">
                I&apos;m currently focused on developing my skills through
                thesis work, personal UI/UX projects, frontend development,
                and experimenting with new ideas.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/projects"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-[10px] bg-[#D4AF37] px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-[#E1BF55] sm:w-auto"
                >
                  View Projects

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] border border-white/10 px-6 py-3 text-sm font-medium text-white/70 transition-all duration-300 hover:border-[#D4AF37]/50 hover:text-white sm:w-auto"
                >
                  Get in Touch

                  <ExternalLink size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              Explore More
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
              See what I&apos;ve been
              <span className="text-[#D4AF37]"> working on.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
              Take a look at selected projects and see how design and
              development come together in my work.
            </p>

            <div className="mt-8">
              <Link
                href="/projects"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-[10px] bg-[#D4AF37] px-7 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-[#E1BF55] sm:w-auto"
              >
                Explore Projects

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}