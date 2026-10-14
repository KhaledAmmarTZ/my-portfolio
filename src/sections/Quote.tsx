import Image from "next/image";

export default function Quote() {
  return (
    <section
      id="quote-section"
      className="relative overflow-hidden px-6 py-20 sm:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        {/* Full-Width Golden Tree Image */}
        <div className="relative mb-8 w-full max-w-6xl">
        <Image
            src="/images/Golden_tree2.png"
            alt="Golden tree symbol"
            width={1200}
            height={675}
            priority
            sizes="(max-width: 640px) 100vw, 768px"
            className="mx-auto h-auto w-full object-contain"
        />
        </div>

        {/* Decorative Opening Quote */}
        <span
          aria-hidden="true"
          className="font-serif text-5xl leading-none text-[#D4AF37]/70"
        >
          “
        </span>

        {/* Quote Text */}
        <blockquote className="max-w-3xl text-xl font-medium leading-relaxed tracking-tight text-[#16161A] dark:text-white/90 sm:text-2xl md:text-3xl">
          Good design is not just about how things look, but how they work and
          how they make people feel.
        </blockquote>

        {/* Gold Divider */}
        <div className="mt-8 h-px w-12 bg-[#A67F12] dark:bg-[#D4AF37]" />

        {/* Caption */}
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#5B5B63] dark:text-white/45">
          Design Philosophy
        </p>
      </div>
    </section>
  );
}