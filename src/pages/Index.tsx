import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
