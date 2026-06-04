"use client";

import { ReactNode, useState } from "react";

type ButtonProps = {
  text: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  variant?: "gold" | "dark";
  onClick?: () => void;
};

export default function Button({
  text,
  icon,
  iconPosition = "right",
  variant = "gold",
  onClick,
}: ButtonProps) {

  const [pressed, setPressed] = useState(false);

  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-[12px] font-medium transition-all duration-150 active:scale-95 select-none";

  // shared pressed effect (BOTH buttons)
  const pressEffect =
    pressed
      ? "shadow-[0_0_18px_rgba(212,175,55,0.45)]"
      : "";

  const gold = `
    bg-[#D4AF37]
    text-black
  `;

  const dark = `
    bg-[#15161A]
    border border-[#D4AF37]
    text-white
  `;

  const darkPressedText =
    pressed ? "text-[#D4AF37]" : "text-white";

  return (
    <button
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onClick={onClick}
      className={`
        ${base}
        ${pressEffect}
        ${variant === "gold" ? gold : dark}
      `}
    >
      {iconPosition === "left" && (
        <span className={variant === "dark" && pressed ? "text-[#D4AF37]" : ""}>
          {icon}
        </span>
      )}

      <span className={variant === "dark" ? darkPressedText : ""}>
        {text}
      </span>

      {iconPosition === "right" && (
        <span className={variant === "dark" && pressed ? "text-[#D4AF37]" : ""}>
          {icon}
        </span>
      )}
    </button>
  );
}