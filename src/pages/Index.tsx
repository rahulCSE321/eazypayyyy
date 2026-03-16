import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import ServicesTabs from "@/components/ServicesTabs";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import JoinUsSection from "@/components/JoinUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesOverview />
      <ServicesTabs />
      <AboutSection />
      <BenefitsSection />
      <JoinUsSection />
      <TestimonialsSection />
      <DownloadCTA />
      <Footer />
    </div>
  );
};

export default Index;
