"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type RightSidebarProps = {
  mobile?: boolean;
};

export default function RightSidebar({
  mobile = false,
}: RightSidebarProps) {
  const [pressed, setPressed] = useState<string | null>(null);

  const social = [
    {
      id: "github",
      href: "https://github.com",
      normal: "/icons/github.svg",
      active: "/icons/gold_github.svg",
    },
    {
      id: "linkedin",
      href: "https://linkedin.com",
      normal: "/icons/linkedin.svg",
      active: "/icons/gold_linkedin.svg",
    },
    {
      id: "email",
      href: "mailto:khaled@example.com",
      normal: "/icons/email.svg",
      active: "/icons/gold_email.svg",
    },
    {
      id: "whatsapp",
      href: "https://wa.me/YOUR_NUMBER",
      normal: "/icons/whatsapp.svg",
      active: "/icons/gold_whatsapp.svg",
    },
    {
      id: "behance",
      href: "https://behance.net",
      normal: "/icons/behance.svg",
      active: "/icons/gold_behance.svg",
    },
  ];

  return (
    <aside
      className={
        mobile
          ? "flex flex-row justify-center gap-4"
          : "absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-5"
      }
    >
      {social.map((item, index) => (
        <motion.a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          initial={
            mobile
              ? {
                  opacity: 0,
                  y: 50,
                  scale: 0.8,
                }
              : {
                  opacity: 0,
                  x: 50,
                  scale: 0.8,
                }
          }
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: mobile ? 0.5 : 0.36,
            delay: index * (mobile ? 0.02 : 0.12),
            ease: "easeOut",
          }}
          onMouseDown={() => setPressed(item.id)}
          onMouseUp={() => setPressed(null)}
          onMouseLeave={() => setPressed(null)}
          onTouchStart={() => setPressed(item.id)}
          onTouchEnd={() => setPressed(null)}
          onTouchCancel={() => setPressed(null)}
          className={`
            w-12 h-12
            flex items-center justify-center
            rounded-xl
            bg-[#15161A]
            border border-[#D4AF37]/40
            transition-all duration-150
            cursor-pointer
            select-none
            ${
              pressed === item.id
                ? "shadow-[0_0_18px_rgba(212,175,55,0.45)] scale-95"
                : ""
            }
          `}
        >
          <Image
            src={pressed === item.id ? item.active : item.normal}
            alt={item.id}
            width={18}
            height={18}
          />
        </motion.a>
      ))}
    </aside>
  );
}