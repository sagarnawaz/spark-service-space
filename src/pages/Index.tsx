import { Suspense, lazy, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollProgress from "@/components/ScrollProgress";
import AIAssistant from "@/components/AIAssistant";
import OnboardingTour from "@/components/OnboardingTour";

const Services = lazy(() => import("@/components/Services"));
const Values = lazy(() => import("@/components/Values"));
const LogoMarquee = lazy(() => import("@/components/LogoMarquee"));
const Stats = lazy(() => import("@/components/Stats"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Sectors = lazy(() => import("@/components/Sectors"));
const ProcessTimeline = lazy(() => import("@/components/ProcessTimeline"));
const ConversionSection = lazy(() => import("@/components/ConversionSection"));
const PremiumSection = lazy(() => import("@/components/PremiumSection"));
const CompanyProfile = lazy(() => import("@/components/CompanyProfile"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionLoader = () => <div className="section-padding h-20 animate-pulse bg-card/20" />;

const Index = () => {
  const schema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "NexusDev",
      url: "https://example.com",
      description: "Digital product engineering services across web, mobile, dashboards, and AI enablement.",
      serviceType: ["Web Development", "Mobile Apps", "Admin Dashboards", "AI Enablement"],
      areaServed: "Global",
    }),
    [],
  );

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <Services />
        <Values />
        <LogoMarquee />
        <Stats />
        <ProcessTimeline />
        <Portfolio />
        <ConversionSection />
        <PremiumSection />
        <CompanyProfile />
        <Sectors />
        <Contact />
        <Footer />
      </Suspense>
      <OnboardingTour />
      <AIAssistant />
    </div>
  );
};

export default Index;
