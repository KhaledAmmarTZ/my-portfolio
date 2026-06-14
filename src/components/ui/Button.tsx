"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";

type ButtonProps = {
  text: string;

  icon?: ReactNode; 

  iconPosition?: "left" | "right";

  variant?: "gold" | "dark";

  normalIcon?: string;   // default icon path
  pressedIcon?: string;  // icon when pressed

  onClick?: () => void;

  fullWidth?: boolean;
};

export default function Button({
  text,
  icon,
  iconPosition = "right",
  variant = "gold",
  normalIcon,
  pressedIcon,
  onClick,
  fullWidth = false,
}: ButtonProps) {

  const [pressed, setPressed] = useState(false);

  // decide which icon to show
  const currentIcon =
    pressed && pressedIcon
      ? pressedIcon
      : normalIcon;

  // BASE STYLE
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-[12px] font-medium transition-all duration-150 cursor-pointer select-none ";

  // VARIANTS
  const gold =
    "bg-[#D4AF37] text-black";

  const dark =
    "bg-[#15161A] border border-[#D4AF37] text-white";

  // PRESS GLOW (ALL BUTTONS)
  const pressGlow =
    pressed
      ? "shadow-[0_0_18px_rgba(212,175,55,0.45)]"
      : "";

  // TEXT COLOR
  const textColor =
    variant === "dark"
      ? pressed
        ? "text-[#D4AF37]"
        : "text-white"
      : "text-black";

  return (
    <button
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onTouchCancel={() => setPressed(false)}
      onClick={onClick}
      className={`
        ${base}
        ${variant === "gold" ? gold : dark}
        ${pressGlow}
        ${fullWidth ? "w-full justify-center" : ""}
      `}
    >

      {/* LEFT ICON */}
        {iconPosition === "left" && currentIcon && (
        <span className="flex items-center justify-center">
            <Image
            src={currentIcon}
            alt="icon"
            width={18}
            height={18}
            />
        </span>
        )}

      {/* TEXT */}
      <span className={`${textColor}`}>
        {text}
      </span>

      {/* RIGHT ICON */}
        {iconPosition === "right" && currentIcon && (
        <span className="flex items-center justify-center">
            <Image
            src={currentIcon}
            alt="icon"
            width={18}
            height={18}
            />
        </span>
        )}

    </button>
  );
}