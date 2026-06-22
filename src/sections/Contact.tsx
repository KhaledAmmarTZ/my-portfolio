"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { useState } from "react";
import RightSidebar from "@/components/RightSidebar";

export default function Contact() {
  const [pressedId, setPressedId] = useState<string | null>(null);

  const social = [
    { id: "github", href: "", normal: "/icons/github.svg", active: "/icons/gold_github.svg" },
    { id: "linkedin", href: "", normal: "/icons/linkdin.svg", active: "/icons/gold_linkdin.svg" },
    { id: "email", href: "", normal: "/icons/email.svg", active: "/icons/gold_email.svg" },
    { id: "whatsapp", href: "", normal: "/icons/whatsapp.svg", active: "/icons/gold_whatsapp.svg" },
    { id: "behance", href: "", normal: "/icons/behance.svg", active: "/icons/gold_behance.svg" },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-[#0B0B0F]">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 rounded-full bg-[#D4AF37]/10 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center">
          <div className="px-4 py-2 rounded-full bg-[#15161A] border border-[#D4AF37]/20">
            <span className="text-[#D4AF37] text-sm">
              Get In Touch
            </span>
          </div>

          <h2 className="mt-6 text-white text-4xl md:text-5xl font-medium">
            Let's Work Together
          </h2>

          <p className="mt-6 max-w-2xl text-[#A1A1AA] text-base leading-7">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-16 grid lg:grid-cols-[460px_1fr] gap-12 items-start">

          {/* LEFT COLUMN */}
          <div className="rounded-2xl p-6 flex flex-col gap-4">

            {/* CONTACT INFO */}
            <div className="flex flex-col gap-4 mb-6">
              <h1 className="text-2xl text-white font-medium">
                Contact Information
              </h1>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl border border-[#D4AF37]/50 flex items-center justify-center shrink-0">
                  <Image src="/icons/gold_email.svg" alt="Email" width={20} height={20} />
                </div>

                <div className="flex flex-col">
                  <span className="text-[#A1A1AA] text-sm">Email</span>
                  <span className="text-white text-base mt-1">
                    khaledammartz@gmail.com
                  </span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl border border-[#D4AF37]/50 flex items-center justify-center shrink-0">
                  <Image src="/icons/gold_whatsapp.svg" alt="WhatsApp" width={20} height={20} />
                </div>

                <div className="flex flex-col">
                  <span className="text-[#A1A1AA] text-sm">WhatsApp</span>
                  <span className="text-white text-base mt-1">
                    +999999999
                  </span>
                </div>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex flex-col gap-4 mb-6">
              <h1 className="text-2xl text-white font-medium">
                Follow Me
              </h1>

              {/* SOCIAL (HORIZONTAL) */}
                      <div className="flex gap-3 mt-4">
              
                        <RightSidebar mobile/>
                        </div>
                      
            </div>

            {/* Availability */}
            <div className="mt-6 p-6 rounded-2xl bg-[linear-gradient(135deg,#15161A_0%,#121317_25%,#101014_50%,#0D0E12_75%,#0B0B0F_100%)] border border-[#D4AF37]/50">

            <h3 className="text-[#F5F5F5] text-lg font-medium ">
                Availability
            </h3>

            <p className="mt-3 text-[#A1A1AA] text-sm leading-relaxed">
                I'm currently available for freelance projects and full-time opportunities.
            </p>

            <div className="mt-4 flex items-center gap-2">

                <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#D4AF37]"></span>
                </span>

                <span className="text-[#D4AF37] text-sm">
                Available Now
                </span>
            </div>

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="
            bg-[linear-gradient(135deg,#15161A_0%,#121317_25%,#101014_50%,#0D0E12_75%,#0B0B0F_100%)]
            border border-[#D4AF37]/50
            rounded-2xl
            p-8
          ">

            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full h-12 px-4 bg-[#0B0B0F] border border-[#D4AF37]/20 rounded-xl text-white placeholder:text-[#A1A1AA] outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full h-12 px-4 bg-[#0B0B0F] border border-[#D4AF37]/20 rounded-xl text-white placeholder:text-[#A1A1AA] outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-white mb-2">
                Subject
              </label>

              <input
                type="text"
                placeholder="Project inquiry"
                className="w-full h-12 px-4 bg-[#0B0B0F] border border-[#D4AF37]/20 rounded-xl text-white placeholder:text-[#A1A1AA] outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-white mb-2">
                Message
              </label>

              <textarea
                rows={7}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-[#0B0B0F] border border-[#D4AF37]/20 rounded-xl text-white placeholder:text-[#A1A1AA] outline-none resize-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Button */}
            <div className="mt-6">
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