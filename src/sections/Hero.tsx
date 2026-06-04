import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-black
        px-4
      "
    >

      <div className="text-center">

        <h1 className="
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          font-bold
          text-white
        ">
          Khaled Ammar
        </h1>

        <p className="
          mt-4
          text-gray-400
          text-sm
          sm:text-base
          md:text-lg
          max-w-xl
          mx-auto
        ">
          UI/UX Designer, Developer & Creative Builder
        </p>

        <div className="
          mt-8
          flex
          gap-4
          justify-center
          flex-wrap
        ">

          <Button
            text="View Projects"
            icon={<Image src="/icons/right.svg" alt="icon" width={18} height={18} />}
            iconPosition="right"
            variant="gold"
          />

          <Button
            text="Download CV"
            iconPosition="left"
            variant="dark"
            normalIcon="/icons/download.svg"
            pressedIcon="/icons/gold_download.svg"
            />

        </div>

      </div>

    </section>
  );
}