import HeroSection from "@/components/HeroSection";
import EligibilityChecker from "@/components/EligibilityChecker";
import ServiceBlocks from "@/components/ServiceBlocks";
import StrategicApproach from "@/components/StrategicApproach";
import CoreValues from "@/components/CoreValues";
import VisaAcquisition from "@/components/VisaAcquisition";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";

const Index = () => (
  <>
    <JsonLd />
    <HeroSection />
    <ServiceBlocks />
    <EligibilityChecker />
    <StrategicApproach />
    <CoreValues />
    <VisaAcquisition />
    <Testimonials />
    <ContactForm />
  </>
);

export default Index;
