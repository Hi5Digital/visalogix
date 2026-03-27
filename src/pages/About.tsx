import { useMemo } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Building2, Shield, BarChart3, Cloud } from "lucide-react";
import passportImage from "@/assets/man-holding-passport.png";
import hero1 from "@/assets/hero/hero1.webp";
import hero2 from "@/assets/hero/hero2.webp";
import hero3 from "@/assets/hero/hero3.webp";
import hero4 from "@/assets/hero/hero4.webp";
import hero5 from "@/assets/hero/hero5.webp";
import hero6 from "@/assets/hero/hero6.webp";
import hero7 from "@/assets/hero/hero7.webp";

const AboutHero = () => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
            <Building2 size={16} />
            Corporate Mobility
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[0.95] mb-6">
            SECURE. FAST.
            <br />
            <span className="text-primary">RELIABLE.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl leading-relaxed">
            Visalogix is the strategic partner for South African businesses expanding globally. We manage the complexity, so you can focus on growth.
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

const solutions = [
  {
    icon: Shield,
    title: "Institutional Compliance",
    description: "Full compliance management for the UK's 2026 eVisa transition. Stay ahead of regulatory changes with our proactive monitoring.",
  },
  {
    icon: BarChart3,
    title: "Predictive ROI Analytics",
    description: "Data-driven insights for HR managers to forecast mobility costs, timelines, and success rates for international deployments.",
  },
  {
    icon: Cloud,
    title: "Enterprise Infrastructure",
    description: "Built on Google Cloud for 2026-grade security and speed. Your data is protected with enterprise-level encryption and compliance.",
  },
  {
    icon: Building2,
    title: "Strategic Partnership",
    description: "We embed into your HR workflow, providing a seamless extension of your team for all global mobility requirements.",
  },
];

const CorporateSolutions = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
            Enterprise
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            Our Corporate Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide institutional compliance for the UK's 2026 eVisa transition and predictive ROI analytics for HR managers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-orange-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gradient-orange group-hover:shadow-orange transition-all duration-500">
                  <Icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <>
    <AboutHero />
    <CorporateSolutions />
  </>
);

export default About;
