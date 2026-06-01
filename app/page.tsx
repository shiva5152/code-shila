import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-navy-900 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Process />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}

