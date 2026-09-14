"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,

  GitBranch,
  Layers3,
  Palette,
  Smartphone,
  Workflow,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "UI/UX Design",
    description:
      "Designing user-centered digital experiences with clear visual hierarchy, intuitive interaction, and strong attention to detail.",
    icon: Palette,
    skills: [
      "User Research",
      "Wireframing",
      "UI Design",
      "Prototyping",
      "Design Systems",
      "Responsive Design",
      "Interaction Design",
      "Usability",
    ],
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Building responsive and interactive interfaces from design concepts using modern frontend technologies.",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Development",
    ],
  },
  {
    number: "03",
    title: "Tools & Workflow",
    description:
      "Using modern design and development tools to move efficiently from an initial idea to a polished product.",
    icon: Workflow,
    skills: [
      "Figma",
      "Git",
      "GitHub",
      "VS Code",
      "Framer Motion",
      "Component Design",
      "Version Control",
      "Design Handoff",
    ],
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the problem, users, goals, and requirements before jumping into visual design.",
  },
  {
    number: "02",
    title: "Explore",
    description:
      "Explore ideas through research, information architecture, sketches, and wireframes.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Turn the strongest ideas into a consistent and refined visual experience.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Translate the design into a responsive and functional frontend implementation.",
  },
];

export default function SkillsPage() {
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
                Skills & Expertise
              </span>

              <span className="h-px w-8 bg-[#D4AF37] sm:w-10" />
            </div>

            <h1 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Skills that turn
              <span className="block text-[#D4AF37]">
                ideas into products.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              A combination of design thinking and frontend development that
              helps me create digital experiences from the first idea to the
              final interface.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SKILL GROUPS
      ========================================================= */}
      <section className="border-y border-white/8">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-2xl sm:mb-16"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                Expertise
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-medium sm:text-4xl md:text-5xl">
              What I
              <span className="text-white/40"> work with.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.div
                  key={group.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group rounded-[14px] border border-white/10 bg-white/2.5 p-6 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-white/4 sm:p-8"
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#D4AF37]/20 bg-[#D4AF37]/5">
                      <Icon
                        size={21}
                        className="text-[#D4AF37]"
                      />
                    </div>

                    <span className="text-xs tracking-widest text-white/20">
                      {group.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-medium">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {group.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/2.5 px-3 py-1.5 text-xs text-white/55 transition-colors duration-300 group-hover:border-white/15 group-hover:text-white/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 h-px w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          TOOLKIT
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#D4AF37]" />

                <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                  Toolkit
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
                Tools I use to
                <span className="block text-white/40">
                  bring ideas to life.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
                The tools are only part of the process. I focus on using the
                right tool for the problem and keeping the workflow simple.
              </p>
            </motion.div>

            {/* Right */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                
                {
                  title: "React",
                  subtitle: "Frontend Development",
                  icon: Code2,
                },
                {
                  title: "Next.js",
                  subtitle: "Web Applications",
                  icon: Layers3,
                },
                {
                  title: "Git & GitHub",
                  subtitle: "Version Control",
                  icon: GitBranch,
                },
                {
                  title: "Responsive Design",
                  subtitle: "Multi-device Interfaces",
                  icon: Smartphone,
                },
                {
                  title: "Design Systems",
                  subtitle: "Reusable Components",
                  icon: Layers3,
                },
              ].map((tool, index) => {
                const Icon = tool.icon;

                return (
                  <motion.div
                    key={tool.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    // className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-white/[0.04]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[9px] border border-white/10 bg-black/20">
                      <Icon
                        size={19}
                        className="text-white/55 transition-colors duration-300 group-hover:text-[#D4AF37]"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-white">
                        {tool.title}
                      </h3>

                      <p className="mt-1 text-xs text-white/40">
                        {tool.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WORKFLOW
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
                My Workflow
              </span>

              <span className="h-px w-10 bg-[#D4AF37]" />
            </div>

            <h2 className="mt-5 text-3xl font-medium sm:text-4xl md:text-5xl">
              From idea to
              <span className="text-white/40"> interface.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
              A simple process that keeps design decisions connected to the
              actual problem being solved.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-0 md:grid-cols-4">
            {workflow.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative border-b border-white/10 py-7 md:border-b-0 md:border-r md:px-7 md:py-0 md:first:pl-0 md:last:border-r-0"
              >
                {/* Number */}
                <span className="text-xs tracking-widest text-[#D4AF37]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-lg font-medium">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/45">
                  {item.description}
                </p>

                {/* Arrow between items */}
                {index < workflow.length - 1 && (
                  <div className="absolute -right-2.5 top-0 hidden h-full items-center md:flex">
                    <ArrowRight
                      size={16}
                      className="text-[#D4AF37]/50"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          DESIGN + DEVELOPMENT STATEMENT
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
                The Advantage
              </p>

              <h2 className="mt-5 max-w-4xl text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
                I understand both sides of the screen.
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/50 sm:text-base">
                Being comfortable with both UI/UX design and frontend
                development allows me to communicate ideas clearly, think
                about technical constraints early, and create experiences
                that are easier to build and maintain.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/projects"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-[10px] bg-[#D4AF37] px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-[#E1BF55] sm:w-auto"
                >
                  See My Work

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-[10px] border border-white/10 px-6 py-3 text-sm font-medium text-white/70 transition-all duration-300 hover:border-[#D4AF37]/50 hover:text-white sm:w-auto"
                >
                  Let&apos;s Talk
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
              Next Step
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
              Want to see these skills
              <span className="text-[#D4AF37]"> in action?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
              Explore some of the projects where I&apos;ve applied design,
              development, and problem-solving together.
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