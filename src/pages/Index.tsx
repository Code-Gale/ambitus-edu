
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import TestimonialSection from '../components/TestimonialSection';
import JourneySection from '../components/JourneySection';
import PartnersSection from '../components/PartnersSection';
import ServicesSection from '../components/ServicesSection';
import LoansSection from '../components/LoansSection';
import FAQSection from '../components/FAQSection';
import RegistrationSection from '../components/RegistrationSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ui/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-forest-950 overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <TestimonialSection />
      <JourneySection />
      <PartnersSection />
      <ServicesSection />
      <LoansSection />
      <FAQSection />
      <RegistrationSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
