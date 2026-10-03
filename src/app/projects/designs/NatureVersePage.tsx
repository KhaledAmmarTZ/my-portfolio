import Image from "next/image";
import Link from "next/link";
import type { ProjectDesignProps } from "./types";

export default function NatureVersePage({
  project,
}: ProjectDesignProps) {
  return (
    <article className="overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 px-5 py-16 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green-500/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-[#D4AF37]"
            >
              <span aria-hidden="true">←</span>
              All projects
            </Link>

            <p className="mt-10 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              Featured project · {project.category}
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {project.title}
              <span className="text-[#D4AF37]">.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              {project.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#E8C65A]"
                >
                  GitHub ↗
                </a>
              )}

              {project.figma && (
                <a
                  href={project.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  View in Figma ↗
                </a>
              )}
            </div>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-white/10 bg-[#111116]">
            <Image
              src={project.image}
              alt={`${project.title} project cover`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project information */}
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-10 md:grid-cols-3 lg:px-16">
        {[
          { label: "Client", value: project.info.client },
          { label: "Duration", value: project.info.duration },
          { label: "My role", value: project.info.role },
        ].map((item) => (
          <div
            key={item.label}
            className="border-l border-[#D4AF37]/50 pl-5"
          >
            <p className="text-sm text-white/40">{item.label}</p>
            <p className="mt-2 text-lg text-white">{item.value}</p>
          </div>
        ))}
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-10 lg:px-16">
        <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
          01 — Overview
        </p>
        <h2 className="mt-4 text-3xl font-medium text-white sm:text-4xl">
          About the project
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-white/60">
          {project.overview}
        </p>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-10 lg:px-16">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              02 — The challenge
            </p>
            <h2 className="mt-4 text-3xl font-medium text-white">
              Problems to solve
            </h2>
          </div>

          <div className="space-y-3">
            {project.problem.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/2 p-5"
              >
                <span className="text-sm text-[#D4AF37]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="leading-7 text-white/65">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-10 lg:px-16">
        <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
          03 — The approach
        </p>
        <h2 className="mt-4 text-3xl font-medium text-white sm:text-4xl">
          Proposed solutions
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {project.solution.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="rounded-2xl border border-white/10 bg-[#111116] p-6 transition hover:border-[#D4AF37]/40"
            >
              <span className="text-2xl text-[#D4AF37]">
                0{index + 1}
              </span>
              <p className="mt-4 leading-7 text-white/65">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-10 lg:px-16">
        <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
          04 — Tools
        </p>
        <h2 className="mt-4 text-3xl font-medium text-white">
          Technologies used
        </h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.technologies.map((technology, index) => (
            <span
              key={`${technology}-${index}`}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/65"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-10 lg:px-16">
        <div className="rounded-3xl border border-[#D4AF37]/25 bg-linear-to-br from-[#D4AF37]/10 to-transparent p-8 sm:p-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            05 — Outcome
          </p>
          <h2 className="mt-4 text-3xl font-medium text-white">
            Project impact
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-white/65">
            {project.impact}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-10 lg:px-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 text-sm text-white/60 transition hover:text-[#D4AF37]"
        >
          <span aria-hidden="true">←</span>
          Explore other projects
        </Link>
      </div>
    </article>
  );
}