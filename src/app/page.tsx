import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseMe from "@/components/WhyChooseMe";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseMe />
      <Portfolio />
      <Process />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
