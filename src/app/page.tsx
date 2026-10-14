import Navbar from "@/components/Navbar";
import GoldenLeaves from "@/components/GoldenLeaves";
import Hero from "@/sections/Hero";
import Contact from "@/sections/Contact";
import Projects from "@/sections/Projects";
import Footer from "@/sections/Footer";
import About from "@/sections/About";
import Skill from "@/sections/Skill";
import Quote from "@/sections/Quote";
import Achievement from "@/sections/Achievement";

export default function Home() {
  return (
    <div className="relative">
      <div>
        <Navbar />
        <Hero />
        <Quote />
        <About />
        <Skill />
        <Projects />
        <Contact />
        <Achievement />
        <Footer />
      </div>

      <GoldenLeaves
        startSelector="#quote-section"
        startAt={0.38}
      />
    </div>
  );
}