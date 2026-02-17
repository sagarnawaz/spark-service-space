import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Values from "@/components/Values";
import LogoMarquee from "@/components/LogoMarquee";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import Sectors from "@/components/Sectors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Values />
      <LogoMarquee />
      <Stats />
      <Portfolio />
      <Sectors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
