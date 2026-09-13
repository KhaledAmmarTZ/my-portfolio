import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Contact from "@/sections/Contact";
import Projects from "@/sections/Projects";
import Footer from "@/sections/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}