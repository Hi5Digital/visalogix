import { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import passportImage from "@/assets/man-holding-passport.png";
import hero1 from "@/assets/hero/hero1.webp";
import hero2 from "@/assets/hero/hero2.webp";
import hero3 from "@/assets/hero/hero3.webp";
import hero4 from "@/assets/hero/hero4.webp";
import hero5 from "@/assets/hero/hero5.webp";
import hero6 from "@/assets/hero/hero6.webp";
import hero7 from "@/assets/hero/hero7.webp";

const HeroSection = () => {
  const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];
  
  const randomHeroImage = useMemo(() => {
    return heroImages[Math.floor(Math.random() * heroImages.length)];
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30"
            >
              <Globe size={16} />
              2026 Visa Solutions
            </motion.div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[0.95] mb-6">
              Global Mobility.
              <br />
              <span className="text-primary">Simplified.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-lg mb-10 leading-relaxed">
              Expert Visa, Courier, and Travel solutions for a borderless world. Visalogix is your strategic partner for global expansion.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                variant="hero"
                size="lg"
                className="text-base px-8 py-6 bg-primary-foreground text-primary rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Check Eligibility
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                className="text-base px-8 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-all"
              >
                Book a Consultation
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-primary-foreground"
              >
                <div className="text-3xl md:text-4xl font-black mb-1">5,000+</div>
                <div className="text-sm text-primary-foreground/70">Successful Cases</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-primary-foreground"
              >
                <div className="text-3xl md:text-4xl font-black mb-1">15+</div>
                <div className="text-sm text-primary-foreground/70">Countries Served</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-primary-foreground"
              >
                <div className="text-3xl md:text-4xl font-black mb-1">99%</div>
                <div className="text-sm text-primary-foreground/70">Success Rate</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
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

export default HeroSection;
