"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      icon: "/icons/github.svg",
      href: "https://github.com",
      alt: "GitHub",
    },
    {
      icon: "/icons/linkdin.svg",
      href: "https://linkedin.com",
      alt: "LinkedIn",
    },
    {
      icon: "/icons/email.svg",
      href: "mailto:khaledammartz@gmail.com",
      alt: "Email",
    },
    {
      icon: "/icons/behance.svg",
      href: "https://behance.net",
      alt: "Behance",
    },
  ];

  return (
    <footer className="relative bg-[#0B0B0F] overflow-hidden">
      {/* Tree Image - Slightly Overlapping Footer */}
      <div className="relative z-10 flex justify-center mb-20 md:mb-25">
        <Image
          src="/images/Golden_tree2.png"
          alt="Footer Decoration"
          width={1200}
          height={400}
          className="w-full max-w-5xl h-auto object-contain"
          priority
        />
      </div>

      {/* Full Width Gradient Section */}
      <div
        className="
          relative w-full
          bg-[linear-gradient(360deg,rgba(212,175,55,0.05)_0%,rgba(0,0,0,0)_100%)]
        "
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 md:pt-32 pb-12">
          {/* Tagline */}
          <div className="flex justify-center">
            <p className="max-w-md text-center text-[#A1A1AA] text-base font-normal leading-6">
              Crafting digital experiences that inspire and innovate
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 pt-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12
                  rounded-full
                  bg-[#15161A]
                  border border-[#D4AF37]/20
                  flex items-center justify-center
                  transition-all duration-300
                  hover:border-[#D4AF37]
                  hover:bg-[#1A1B20]
                  hover:-translate-y-1
                "
              >
                <Image
                  src={social.icon}
                  alt={social.alt}
                  width={20}
                  height={20}
                />
              </a>
            ))}
          </div>

          {/* Navigation */}
          <div className="pt-8">
            <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-[#A1A1AA]">
              <Link
                href="#about"
                className="hover:text-[#D4AF37] transition-colors"
              >
                About
              </Link>

              <span>•</span>

              <Link
                href="#projects"
                className="hover:text-[#D4AF37] transition-colors"
              >
                Projects
              </Link>

              <span>•</span>

              <Link
                href="#contact"
                className="hover:text-[#D4AF37] transition-colors"
              >
                Contact
              </Link>

              <span>•</span>

              <Link
                href="/privacy"
                className="hover:text-[#D4AF37] transition-colors"
              >
                Privacy
              </Link>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="pt-12">
            <div className="border-t border-[#D4AF37]/10 pt-8">
              <div className="flex flex-wrap justify-center items-center gap-2 text-sm text-[#A1A1AA]">
                <span>Made with</span>

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="#D4AF37"
                >
                  <path d="M12 21s-6.7-4.35-9.33-8.2C-.43 8.12 1.5 3 6 3c2.1 0 4 1.2 5 3 1-1.8 2.9-3 5-3 4.5 0 6.43 5.12 3.33 9.8C18.7 16.65 12 21 12 21z" />
                </svg>

                <span>
                  by Khaled Ammar © {new Date().getFullYear()}
                </span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </footer>
  );
}