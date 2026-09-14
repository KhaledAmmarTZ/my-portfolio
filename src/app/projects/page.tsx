"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Button from "@/components/ui/Button";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
<Navbar />
      {/* ================= HERO ================= */}
      <section className="px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mt-10 max-w-3xl sm:mt-12">

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] sm:text-sm">
                My Work
              </span>
            </div>

            <h1
              className="
                mt-5
                text-4xl
                font-medium
                leading-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              All Projects
            </h1>

            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-6
                text-[#A1A1AA]
                sm:text-base
                sm:leading-7
              "
            >
              A collection of projects spanning UI/UX design, web
              applications, digital products, and frontend development.
            </p>

          </div>

        </div>
      </section>

      {/* ================= PROJECT GRID ================= */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">

          <div
            className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
              lg:gap-8
            "
          >
            {projects.map((project) => (
              <article
                key={project.id}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#D4AF37]/30
                  bg-[#101014]
                  transition-all
                  duration-500
                  hover:border-[#D4AF37]/70
                "
              >

                {/* ================= IMAGE ================= */}
                <div className="relative aspect-4/3 overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Gradient */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-linear-to-t
                      from-black/80
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* Category */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs uppercase tracking-[0.15em] text-[#D4AF37]">
                      {project.category}
                    </span>
                  </div>

                </div>

                {/* ================= CONTENT ================= */}
                <div className="p-5 sm:p-6">

                  <h2 className="text-xl font-medium text-white sm:text-2xl">
                    {project.title}
                  </h2>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#A1A1AA]">
                    {project.overview}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">

                    {project.technologies.slice(0, 4).map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/5
                          px-3
                          py-1
                          text-xs
                          text-white/50
                        "
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                  {/* Links */}
                  {(project.github || project.figma) && (
                    <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            rounded-lg
                            border
                            border-white/10
                            px-4
                            py-2
                            text-xs
                            text-white/60
                            transition-all
                            duration-300
                            hover:border-[#D4AF37]
                            hover:text-[#D4AF37]
                          "
                        >
                          GitHub
                        </a>
                      )}

                      {project.figma && (
                        <a
                          href={project.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            rounded-lg
                            border
                            border-white/10
                            px-4
                            py-2
                            text-xs
                            text-white/60
                            transition-all
                            duration-300
                            hover:border-[#D4AF37]
                            hover:text-[#D4AF37]
                          "
                        >
                          Figma
                        </a>
                      )}

                    </div>
                  )}

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="border-t border-white/5 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">

          <p className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
            Let's Create
          </p>

          <h2 className="mt-4 text-3xl font-medium text-white sm:text-4xl">
            Have a project in mind?
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-[#A1A1AA] sm:text-base">
            I'm always interested in working on meaningful digital
            experiences and creative projects.
          </p>

          <div className="mt-8">
            <Link href="/#contact">
              <Button
                text="Let's Talk"
                variant="gold"
                iconPosition="right"
                normalIcon="/icons/right.svg"
                pressedIcon="/icons/right.svg"
              />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}