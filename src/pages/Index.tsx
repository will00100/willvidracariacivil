import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TransformationSection } from "@/components/TransformationSection";
import { AuthoritySection } from "@/components/AuthoritySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TransformationSection />
        <AuthoritySection />
        <TestimonialsSection />
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </div>
  );
};

export default Index;
