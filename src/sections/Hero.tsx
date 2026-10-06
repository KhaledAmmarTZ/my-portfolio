"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import RightSidebar from "@/components/RightSidebar";
import { useState } from "react";

export default function Hero() {
  const [showCvModal, setShowCvModal] = useState(false);

  const social = [
    {
      id: "github",
      href: "",
      normal: "/icons/github.svg",
      active: "/icons/gold_github.svg",
    },
    {
      id: "linkedin",
      href: "",
      normal: "/icons/linkdin.svg",
      active: "/icons/gold_linkdin.svg",
    },
    {
      id: "email",
      href: "",
      normal: "/icons/email.svg",
      active: "/icons/gold_email.svg",
    },
    {
      id: "whatsapp",
      href: "",
      normal: "/icons/whatsapp.svg",
      active: "/icons/gold_whatsapp.svg",
    },
    {
      id: "behance",
      href: "",
      normal: "/icons/behance.svg",
      active: "/icons/gold_behance.svg",
    },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement("a");

    link.href = "/cv/Khaled-Ammar-CV.pdf";
    link.download = "Khaled-Ammar-CV.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setShowCvModal(false);
  };

  return (
    <section
      id="home"
      className="relative bg-[#0B0B0F] min-h-screen overflow-hidden"
    >
      {/* ================= DESKTOP LAYER ================= */}
      <div className="hidden md:block">

        <aside className="absolute right-32 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
          <RightSidebar />
        </aside>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 select-none">
          <img
            src="/images/Frame 5.png"
            alt="Profile"
            className="relative z-0 pointer-events-none"
            draggable={false}
          />

          <img
            src="/images/Frame 4.png"
            alt="Portfolio"
            className="absolute z-10 w-148 h-148 top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            draggable={false}
          />
        </div>

        <div className="absolute bottom-10 w-full flex flex-col items-center gap-8 z-10">
          <h1 className="text-[#D4AF37] text-[48px] font-bold text-center">
            UI/UX Designer & Frontend Developer
          </h1>

          <div className="flex gap-4">
            <Button
              text="View Projects"
              variant="gold"
              iconPosition="right"
              normalIcon="/icons/right.svg"
              pressedIcon="/icons/right.svg"
            />

            <Button
              text="Download CV"
              variant="dark"
              iconPosition="left"
              normalIcon="/icons/download.svg"
              pressedIcon="/icons/gold_download.svg"
              onClick={() => setShowCvModal(true)}
            />
          </div>
        </div>
      </div>

      {/* ================= MOBILE LAYOUT ================= */}
      <div className="md:hidden flex flex-col items-center px-6 pt-12 pb-10">

        <div className="relative w-full h-90 flex justify-center select-none">

          <img
            src="/images/Frame 5.png"
            alt="Profile"
            className="absolute z-4 top-20 pointer-events-none"
            draggable={false}
          />

          <img
            src="/images/Frame 4.png"
            alt="Portfolio"
            className="absolute z-10 w-72 h-72 top-20 left-1/2 -translate-x-1/2 pointer-events-none"
            draggable={false}
          />

        </div>

        <div className="flex flex-col items-center gap-8">

          <div className="text-center">
            <p className="text-gray-400 text-lg">
              Hello, I'm
            </p>

            <h1 className="text-white text-3xl font-bold">
              Khaled Ammar
            </h1>
          </div>

          <div className="flex flex-col gap-4 w-full">

            <Button
              text="View Projects"
              variant="gold"
              iconPosition="right"
              normalIcon="/icons/right.svg"
              pressedIcon="/icons/right.svg"
              fullWidth
            />

            <Button
              text="Download CV"
              variant="dark"
              iconPosition="left"
              normalIcon="/icons/download.svg"
              pressedIcon="/icons/gold_download.svg"
              fullWidth
              onClick={() => setShowCvModal(true)}
            />

          </div>

          <div className="flex gap-3 mt-2">
            <RightSidebar mobile />
          </div>
        </div>
      </div>

      {/* ================= CV DOWNLOAD MODAL ================= */}
      {showCvModal && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center px-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close CV download dialog"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-default"
            onClick={() => setShowCvModal(false)}
          />

          {/* Modal */}
          <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-[#111116] p-7 shadow-2xl">

            {/* Close button */}
            <button
              type="button"
              onClick={() => setShowCvModal(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-white/10 hover:text-white"
            >
              <span className="text-xl leading-none">×</span>
            </button>

            {/* Icon */}
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/10">
              <img
                src="/icons/download.svg"
                alt=""
                className="h-6 w-6"
              />
            </div>

            {/* Text */}
            <h2
              id="cv-modal-title"
              className="text-2xl font-bold text-white"
            >
              Download Khaled's CV?
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Would you like to download Khaled Ammar's CV as a PDF?
            </p>

            {/* Buttons */}
            <div className="mt-7 flex gap-3">

              {/* No */}
              <button
                type="button"
                onClick={() => setShowCvModal(false)}
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-mono text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                No
              </button>

              {/* Yes */}
              <button
                type="button"
                onClick={handleDownloadCV}
                className="flex-1 rounded-xl bg-[#D4AF37] px-5 py-3 font-mono text-sm font-semibold text-[#0B0B0F] transition hover:bg-[#E5C454] active:scale-[0.98]"
              >
                Yes, Download
              </button>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}