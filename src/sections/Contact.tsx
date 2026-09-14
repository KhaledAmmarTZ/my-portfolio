"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import RightSidebar from "@/components/RightSidebar";

export default function Contact() {
  const isAvailable = false; // Change this to false if not available
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#0B0B0F]
        py-16
        sm:py-20
        md:py-24
      "
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-56
            w-56
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#D4AF37]/10
            blur-[140px]
            sm:h-72
            sm:w-72
            sm:blur-[180px]
          "
        />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                Get In Touch
              </span>
            </div>

        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center text-center">


          {/* Heading */}
          <h2
            className="
              mt-5
              text-3xl
              font-medium
              leading-tight
              text-white
              sm:mt-6
              sm:text-4xl
              md:text-5xl
            "
          >
            Let's Work Together
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-2xl
              px-2
              text-sm
              leading-6
              text-[#A1A1AA]
              sm:mt-6
              sm:px-0
              sm:text-base
              sm:leading-7
            "
          >
            Have a project in mind? Let's discuss how we can bring your ideas
            to life.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            items-start
            gap-10
            sm:mt-14
            sm:gap-12
            lg:mt-16
            lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]
            lg:gap-12
            xl:grid-cols-[460px_minmax(0,1fr)]
          "
        >

          {/* ========================================================= */}
          {/* LEFT COLUMN */}
          {/* ========================================================= */}
          <div className="flex min-w-0 flex-col gap-6">

            {/* ================= CONTACT INFORMATION ================= */}
            <div className="flex flex-col gap-5 sm:gap-6">

              <h3
                className="
                  text-xl
                  font-medium
                  text-white
                  sm:text-2xl
                "
              >
                Contact Information
              </h3>

              {/* ================= EMAIL ================= */}
              <div className="flex min-w-0 items-start gap-3 sm:gap-4">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#D4AF37]/50
                    sm:h-12
                    sm:w-12
                  "
                >
                  <Image
                    src="/icons/gold_email.svg"
                    alt="Email"
                    width={20}
                    height={20}
                  />
                </div>

                <div className="min-w-0 flex flex-col">
                  <span className="text-sm text-[#A1A1AA]">
                    Email
                  </span>

                  <span
                    className="
                      mt-1
                      break-all
                      text-sm
                      text-white
                      sm:text-base
                    "
                  >
                    khaledammartz@gmail.com
                  </span>
                </div>

              </div>

              {/* ================= WHATSAPP ================= */}
              <div className="flex min-w-0 items-start gap-3 sm:gap-4">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#D4AF37]/50
                    sm:h-12
                    sm:w-12
                  "
                >
                  <Image
                    src="/icons/gold_whatsapp.svg"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                  />
                </div>

                <div className="min-w-0 flex flex-col">
                  <span className="text-sm text-[#A1A1AA]">
                    WhatsApp
                  </span>

                  <span
                    className="
                      mt-1
                      text-sm
                      text-white
                      sm:text-base
                    "
                  >
                    +999999999
                  </span>
                </div>

              </div>

            </div>

            {/* ================= SOCIAL ================= */}
            <div className="flex flex-col gap-4">

              <h3
                className="
                  text-xl
                  font-medium
                  text-white
                  sm:text-2xl
                "
              >
                Follow Me
              </h3>

              <div className="flex gap-3">
                <RightSidebar mobile />
              </div>

            </div>

            {/* ================= AVAILABILITY ================= */}
            <div
              className="
                rounded-2xl
                border
                border-[#D4AF37]/50
                bg-[linear-gradient(135deg,#15161A_0%,#121317_25%,#101014_50%,#0D0E12_75%,#0B0B0F_100%)]
                p-5
                sm:p-6
              "
            >
              <h3
                className="
                  text-base
                  font-medium
                  text-[#F5F5F5]
                  sm:text-lg
                "
              >
                Availability
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-[#A1A1AA]
                  sm:leading-relaxed
                "
              >
                {isAvailable
                  ? "I'm currently available for new projects and full-time opportunities."
                  : "I'm currently not available for new  projects or full-time opportunities."}
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span
                    className={`absolute inline-flex h-full w-full rounded-full ${
                      isAvailable ? "bg-[#D4AF37]" : "bg-white/40"
                    }`}
                  />
                </span>

                <span
                  className={`text-sm ${
                    isAvailable ? "text-[#D4AF37]" : "text-white/40"
                  }`}
                >
                  {isAvailable ? "Available Now" : "Not Available"}
                </span>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN / FORM */}
          {/* ========================================================= */}
          <div
            className="
              min-w-0
              rounded-2xl
              border
              border-[#D4AF37]/50
              bg-[linear-gradient(135deg,#15161A_0%,#121317_25%,#101014_50%,#0D0E12_75%,#0B0B0F_100%)]
              p-5
              sm:p-6
              md:p-8
            "
          >

            {/* ================= NAME + EMAIL ================= */}
            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">

              {/* Name */}
              <div className="min-w-0">

                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="
                    h-12
                    w-full
                    min-w-0
                    rounded-xl
                    border
                    border-[#D4AF37]/20
                    bg-[#0B0B0F]
                    px-4
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-[#A1A1AA]
                    focus:border-[#D4AF37]
                    sm:text-base
                  "
                />

              </div>

              {/* Email */}
              <div className="min-w-0">

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="
                    h-12
                    w-full
                    min-w-0
                    rounded-xl
                    border
                    border-[#D4AF37]/20
                    bg-[#0B0B0F]
                    px-4
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-[#A1A1AA]
                    focus:border-[#D4AF37]
                    sm:text-base
                  "
                />

              </div>

            </div>

            {/* ================= SUBJECT ================= */}
            <div className="mt-5 sm:mt-6">

              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-white"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="Project inquiry"
                className="
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-[#D4AF37]/20
                  bg-[#0B0B0F]
                  px-4
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-[#A1A1AA]
                  focus:border-[#D4AF37]
                  sm:text-base
                "
              />

            </div>

            {/* ================= MESSAGE ================= */}
            <div className="mt-5 sm:mt-6">

              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-white"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={6}
                placeholder="Tell me about your project..."
                className="
                  min-h-40
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-[#D4AF37]/20
                  bg-[#0B0B0F]
                  px-4
                  py-3
                  text-sm
                  leading-6
                  text-white
                  outline-none
                  placeholder:text-[#A1A1AA]
                  focus:border-[#D4AF37]
                  sm:min-h-44
                  sm:text-base
                "
              />

            </div>

            {/* ================= BUTTON ================= */}
            <div className="mt-5 sm:mt-6">

              <Button
                fullWidth
                text="Send Message"
                variant="gold"
                iconPosition="right"
                normalIcon="/icons/right.svg"
                pressedIcon="/icons/right.svg"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}