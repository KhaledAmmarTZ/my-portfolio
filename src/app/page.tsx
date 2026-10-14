import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Contact from "@/sections/Contact";
import Projects from "@/sections/Projects";
import Footer from "@/sections/Footer";
import About from "@/sections/About";
import Skill from "@/sections/Skill";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />

    </>
  );
}