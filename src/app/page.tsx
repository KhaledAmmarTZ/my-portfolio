import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Contact from "@/sections/Contact";
import Projects from "@/sections/Projects";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}