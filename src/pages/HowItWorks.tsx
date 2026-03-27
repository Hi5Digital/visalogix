import { useMemo } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, BadgeCheck, Zap, Globe, Users, BarChart3, Award } from "lucide-react";
import passportImage from "@/assets/man-holding-passport.png";
import hero1 from "@/assets/hero/hero1.webp";
import hero2 from "@/assets/hero/hero2.webp";
import hero3 from "@/assets/hero/hero3.webp";
import hero4 from "@/assets/hero/hero4.webp";
import hero5 from "@/assets/hero/hero5.webp";
import hero6 from "@/assets/hero/hero6.webp";
import hero7 from "@/assets/hero/hero7.webp";

const HowItWorksHero = () => {
  const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];
  
  const randomHeroImage = useMemo(() => {
    return heroImages[Math.floor(Math.random() * heroImages.length)];
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
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
            HOW DOES IT
            <br />
            <span className="text-primary">WORK</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl leading-relaxed">
            Visalogix is South Africa's leading national outbound travel visa acquisition company and visa courier service conveniently located in Cape Town and Gauteng.
          </p>
        </motion.div>
      </div>

      {/* Passport Image - Positioned flush to right and bottom */}
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

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full">
          <path d="M0,60 C360,100 720,20 1440,60 L1440,100 L0,100 Z" fill="hsl(0,0%,100%)" />
        </svg>
      </div>
    </section>
  );
};

const OneStopSolution = () => {
  const solutions = [
    "Leisure and business travellers who prefer to make their own travel and visa arrangements",
    "Corporate travel agents who outsource visa functions",
    "Anyone needing specialist immigration and permit services",
  ];

  const whoWeAre = [
    "BEE compliant and truly empowered organization",
    "100+ years of cumulative experience",
    "Entrenched as the choice provider in South Africa",
    "Chamber of Commerce member in Cape Town and Johannesburg",
    "Not a 'fly by night' company – trusted and reliable",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-bold mb-6">One-Stop Visa Solution</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Visalogix is a one-stop outbound and inbound visa & permit immigration organization. We are an ideal solution for:
            </p>

            <div className="space-y-4 mb-8">
              {solutions.map((solution, index) => (
                <div key={index} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{solution}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              We are a smart, dynamic, and forward-thinking business, astutely led by highly trained technical visa personnel with superior quality systems and client-friendly tracking support.
            </p>
          </div>

          {/* Right Section */}
          <div className="bg-gradient-to-br from-primary/10 to-background rounded-3xl p-8 lg:p-10 border border-primary/20">
            <h3 className="text-3xl font-bold mb-6">Who We Are</h3>
            <div className="space-y-4">
              {whoWeAre.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-primary text-lg flex-shrink-0">•</span>
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

const WhatSetsUsApart = () => {
  const features = [
    {
      icon: BadgeCheck,
      title: "Guaranteed Cost Effective Rates",
      description: "Competitive pricing without compromising on quality or service excellence.",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Zap,
      title: "Quality Driven",
      description: "Get it right first time – every time with our rigorous quality systems.",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Globe,
      title: "National Over-the-Counter Service",
      description: "Upmarket accessible services across South Africa or door-to-door delivery.",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Users,
      title: "Specialized Visa Couriers",
      description: "Expert local and national visa courier lodgement and collection services.",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: BarChart3,
      title: "Visa Tracking Platform",
      description: "Real-time national tracking with update status reports for peace of mind.",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Award,
      title: "Expert Personnel",
      description: "Experienced visa technicians with internal quality management systems.",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">What Sets Us Apart</h2>
          <p className="text-muted-foreground text-lg">
            Our commitment to excellence and client satisfaction drives everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 mb-6 rounded-lg ${feature.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const AdditionalSupport = () => {
  const supports = [
    {
      title: "On-Hand Support",
      description: "Free telephonic support to answer all your visa-related questions and guide you through the process.",
    },
    {
      title: "Loyalty Programmes",
      description: "Special programmes for frequent travellers offering exclusive benefits and priority service.",
    },
    {
      title: "Immigration Attorneys",
      description: "Specialist Immigration attorneys available to assist with technical aspects of inbound permits.",
    },
    {
      title: "Legal Compliance",
      description: "Our immigration service standards are subject to the law society for maximum protection.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12">Additional Expert Support</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {supports.map((support, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-primary mb-3">{support.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{support.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => (
  <>
    <HowItWorksHero />
    <OneStopSolution />
    <WhatSetsUsApart />
    <AdditionalSupport />
  </>
);

export default HowItWorks;
