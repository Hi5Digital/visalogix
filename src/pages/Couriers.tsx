import { useMemo } from "react";
import { motion } from "framer-motion";
import { Check, Truck, FileCheck, MapPin, Plane, Package, Eye, Clock } from "lucide-react";
import passportImage from "@/assets/man-holding-passport.png";
import hero1 from "@/assets/hero/hero1.webp";
import hero2 from "@/assets/hero/hero2.webp";
import hero3 from "@/assets/hero/hero3.webp";
import hero4 from "@/assets/hero/hero4.webp";
import hero5 from "@/assets/hero/hero5.webp";
import hero6 from "@/assets/hero/hero6.webp";
import hero7 from "@/assets/hero/hero7.webp";

const CouriersHero = () => {
  const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];
  
  const randomHeroImage = useMemo(() => {
    return heroImages[Math.floor(Math.random() * heroImages.length)];
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={randomHeroImage}
          alt="Global cityscape at golden hour"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[0.95] mb-6">
            COURIER
            <br />
            <span className="text-primary">TO YOU</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl leading-relaxed">
            Total hand-to-hand visa courier and messenger solutions in Cape Town and Gauteng with national reach.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="hidden lg:block absolute bottom-10 right-0 z-10"
      >
        <img 
          src={passportImage} 
          alt="Professional holding passport" 
          className="h-[400px] w-auto object-contain"
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full">
          <path d="M0,60 C360,100 720,20 1440,60 L1440,100 L0,100 Z" fill="hsl(0,0%,100%)" />
        </svg>
      </div>
    </section>
  );
};

const NotJustANumber = () => {
  const beyondStandard = [
    "Personal consultation before lodgement",
    "Careful document verification",
    "Queue standing and personal lodgement",
    "Consular requirement compliance checks",
    "Continuous status monitoring",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">You're Not Just a Number</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our loyal consultants take to heart each visa applicant with commitment and consideration of your individual visa travel needs.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Time is crucial in visa processing. As a valued paying customer of Visalogix, we ensure seamless handling of all aspects of your visa acquisition.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We provide all complementary services including technical support and banking services for visa fee payments on your behalf, and follow through with the applicable consulate to monitor your visa status.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-background rounded-3xl p-8 lg:p-10 border border-primary/20">
            <h3 className="text-3xl font-bold mb-6">Beyond Standard Courier</h3>
            <div className="space-y-4">
              {beyondStandard.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HandToHandSolutions = () => {
  const solutions = [
    {
      icon: Truck,
      title: "Rapid Door-to-Door Collection",
      description: "Same day collection from your location directly into our offices with secure handling.",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: FileCheck,
      title: "Documentation Support",
      description: "Repeat attendances to collect outstanding supporting documentation as needed.",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: MapPin,
      title: "National Lodgement",
      description: "Visa application lodgement from any national centre to relevant consular offices.",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Plane,
      title: "Return Delivery",
      description: "Door-to-door delivery of your endorsed passport for seamless onward travel.",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Package,
      title: "International Airfreight",
      description: "National and international airfreight services for all your document needs.",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Eye,
      title: "Quality Verification",
      description: "Pre-lodgement verification ensuring all requirements are met before submission.",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Hand-to-Hand Courier Solutions</h2>
          <p className="text-muted-foreground text-lg">
            Available in Cape Town and Gauteng with national reach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 mb-6 rounded-lg ${solution.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${solution.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const VisaTracking = () => {
  const trackingFeatures = [
    "Email updates at each key stage of your passport movement",
    "Status reports before return delivery of endorsed passport",
    "Real-time tracking of your visa application progress",
    "Proactive communication throughout the entire process",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="bg-gradient-to-br from-primary/10 to-background rounded-3xl p-8 lg:p-10 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Real-Time Tracking</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Stay informed at every stage of your visa journey
            </p>
            <div className="space-y-4">
              {trackingFeatures.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80 text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">Visa Tracking</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              At each key stage of your passport and visa journey, we communicate with you directly via email.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Receive updated status reports before we return your duly endorsed passport, ensuring you have complete visibility into your application progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValidationServices = () => {
  const benefits = [
    "Ensures application is complete and compliant",
    "Eliminates technical rejections",
    "Prevents travel plan disruptions",
    "Guarantees consular requirement checklist compliance",
    "Avoids additional documentation requests",
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Validation Services</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              For those travellers who prefer to procure the application form themselves, we offer comprehensive validation services as part of our courier offering.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              For a nominal fee, our experts will validate your application to ensure accuracy and compliance with technical requirements laid down by consular offices.
            </p>
            <p className="font-semibold text-foreground">
              Avoid rejections. Protect your travel plans.
            </p>
          </div>

          <div className="bg-background rounded-3xl p-8 lg:p-10 border border-border">
            <h3 className="text-2xl font-bold mb-6">Benefits of Validation</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TravelReady = () => {
  const deliveryOptions = [
    "Home delivery",
    "Work delivery",
    "Airport delivery (O.R. Tambo International)",
    "Pre-flight collection and verification",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-gradient-to-br from-primary/10 to-background rounded-3xl p-8 lg:p-10 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Plane className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Delivery Options</h3>
            </div>
            <div className="space-y-4">
              {deliveryOptions.map((option, index) => (
                <div key={index} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{option}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">Travel Ready</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Your documents can be couriered to your home, work, or even just before you're ready to board your flight.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Before handover of your passport, we verify important details to ensure your visa details are correct before you depart South Africa.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We recommend double-checking these details with your travel agent for a stress-free entry into your destination country.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Couriers = () => (
  <>
    <CouriersHero />
    <NotJustANumber />
    <HandToHandSolutions />
    <VisaTracking />
    <ValidationServices />
    <TravelReady />
  </>
);

export default Couriers;
