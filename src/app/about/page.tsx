"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  
  Layers3,
  Lightbulb,
  Palette,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    number: "01",
    title: "UI/UX Design",
    description:
      "Designing clean, intuitive interfaces with a strong focus on usability, visual hierarchy, and user experience.",
    icon: Palette,
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Turning designs into responsive, interactive, and maintainable web experiences using modern frontend technologies.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Design Systems",
    description:
      "Creating consistent visual systems, reusable components, and scalable interfaces across digital products.",
    icon: Layers3,
  },
];

const principles = [
  {
    title: "User First",
    description:
      "Every design decision should make the product easier and more meaningful to use.",
    icon: Lightbulb,
  },
  {
    title: "Simple by Design",
    description:
      "I believe good design removes unnecessary complexity instead of adding more decoration.",
    icon: Sparkles,
  },
  {
    title: "Design Meets Code",
    description:
      "Understanding development helps me create designs that are both visually strong and technically practical.",
    icon: Code2,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0B0F] text-white">
      <Navbar />
      {/* HERO */}
      <section className="relative">
        {/* Background glow */}
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
                About Me
              </span>

              <span className="h-px w-8 bg-[#D4AF37] sm:w-10" />
            </div>

            <h1 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Designing ideas into
              <span className="block text-[#D4AF37]">
                meaningful experiences.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              I&apos;m a UI/UX designer and frontend developer who enjoys
              combining thoughtful design with modern technology to create
              useful digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-y border-white/8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="border-b border-white/8 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-14 xl:p-20"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              Who I Am
            </p>

            <h2 className="mt-5 text-3xl font-medium leading-tight sm:text-4xl">
              More than just
              <span className="block text-white/45">
                pixels and code.
              </span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="p-6 sm:p-10 lg:p-14 xl:p-20"
          >
            <p className="text-base leading-8 text-white/65 sm:text-lg">
              I&apos;m passionate about creating digital products that feel
              simple, purposeful, and enjoyable to use. My work sits between
              design and development, allowing me to think about both how a
              product looks and how it actually works.
            </p>

            <p className="mt-6 text-base leading-8 text-white/65 sm:text-lg">
              From wireframes and prototypes to responsive interfaces and
              frontend implementation, I enjoy being involved throughout the
              process. I&apos;m constantly learning, experimenting, and
              improving my approach to digital product design.
            </p>

            <div className="mt-8">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 text-sm font-medium text-[#D4AF37]"
              >
                Explore my work

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section>
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
                What I Do
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-medium sm:text-4xl md:text-5xl">
              Where design meets
              <span className="text-white/40"> technology.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group relative rounded-[14px] border border-white/10 bg-white/2.5 p-6 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-white/4 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#D4AF37]/20 bg-[#D4AF37]/5">
                      <Icon size={20} className="text-[#D4AF37]" />
                    </div>

                    <span className="text-xs tracking-widest text-white/20">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {item.description}
                  </p>

                  <div className="mt-8 h-px w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-y border-white/8 bg-white/1.5">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
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
                  My Approach
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
                Thoughtful design,
                <span className="block text-white/40">
                  practical solutions.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
                I try to keep every project focused on the actual problem
                rather than adding complexity for the sake of visual
                decoration.
              </p>
            </motion.div>

            {/* Principles */}
            <div className="space-y-0">
              {principles.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    className="group flex gap-5 border-b border-white/10 py-7 first:pt-0 last:border-b-0"
                  >
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-[#D4AF37]/40">
                      <Icon
                        size={17}
                        className="text-white/45 transition-colors duration-300 group-hover:text-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-7 text-white/45">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN + CODE */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/3 p-7 sm:p-10 md:p-14 lg:p-16"
          >
            {/* Decorative elements */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D4AF37]/8 blur-[90px]" />

            <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                  Design + Development
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
                  I don&apos;t just design the interface.
                  <span className="text-white/40">
                    {" "}
                    I understand how to build it.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                  Working across both design and development helps me create
                  interfaces that are visually consistent, responsive, and
                  realistic to implement.
                </p>
              </div>

              <div className="flex items-center gap-3">
                

                <div className="h-px w-7 bg-[#D4AF37]/50" />

                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                  <Code2 size={23} className="text-white/70" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              Let&apos;s Connect
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
              Have an idea worth
              <span className="text-[#D4AF37]"> building?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
              Explore my work or get in touch if you&apos;d like to discuss a
              project, collaboration, or opportunity.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
                className="inline-flex w-full items-center justify-center rounded-[10px] border border-white/10 px-6 py-3 text-sm font-medium text-white/75 transition-all duration-300 hover:border-[#D4AF37]/50 hover:text-white sm:w-auto"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}