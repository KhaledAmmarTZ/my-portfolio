"use client";

import Image from "next/image";
import { useState } from "react";

export default function RightSidebar() {
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
    <aside className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">

      {social.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          onMouseDown={() => setPressed(item.id)}
          onMouseUp={() => setPressed(null)}
          onMouseLeave={() => setPressed(null)}
          className={`
            w-12 h-12 flex items-center justify-center
            bg-[#15161A]
            border border-[#D4AF37]/40
            rounded-xl
            transition-all duration-150
            ${pressed === item.id ? "shadow-[0_0_18px_rgba(212,175,55,0.45)] scale-95" : ""}
          `}
        >
          <Image
            src={pressed === item.id ? item.active : item.normal}
            alt={item.id}
            width={18}
            height={18}
          />
        </a>
      ))}

    </aside>
  );
}