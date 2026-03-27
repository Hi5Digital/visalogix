import { useMemo } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import passportImage from "@/assets/man-holding-passport.png";
import hero1 from "@/assets/hero/hero1.webp";
import hero2 from "@/assets/hero/hero2.webp";
import hero3 from "@/assets/hero/hero3.webp";
import hero4 from "@/assets/hero/hero4.webp";
import hero5 from "@/assets/hero/hero5.webp";
import hero6 from "@/assets/hero/hero6.webp";
import hero7 from "@/assets/hero/hero7.webp";

const ContactUsHero = () => {
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
            CONTACT
            <br />
            <span className="text-primary">US</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl leading-relaxed">
            Get in touch with our expert visa consultants at our Cape Town and Gauteng branches.
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

const CapeTownBranch = () => {
  const consultants = [
    { name: "Stacey Francis", email: "info@visalogix.co.za", phone: "081 055 3464" },
    { name: "Michele Kendall", email: "michele@visalogix.co.za", phone: "083 483 5639" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Cape Town Branch</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-background rounded-3xl p-8 lg:p-10 border border-primary/20">
              <p className="text-lg font-semibold mb-6 text-foreground">
                PLEASE CONTACT YOUR CONSULTANT TO BOOK AN APPOINTMENT FOR A PERSONAL VISA CONSULTATION
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Address</h3>
                    <p className="text-muted-foreground">We will have our new office address here soon</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Office Number</h3>
                    <p className="text-muted-foreground">+27 21 425 5896</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Office Hours</h3>
                    <p className="text-muted-foreground">09h00 to 16h00 Monday to Friday (Except for Public Holidays)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold mb-6">Service Consultants</h3>
              <div className="space-y-6">
                {consultants.map((consultant, index) => (
                  <div key={index} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-lg mb-3">{consultant.name}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-primary" />
                        <a href={`mailto:${consultant.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                          {consultant.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-primary" />
                        <a href={`tel:${consultant.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                          {consultant.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GautengBranch = () => {
  const consultants = [
    { name: "Diane Swartz", email: "diane@visalogix.co.za", phone: "083 344 1040" },
    { name: "Carlen McKenzie", email: "kemptonpark@visalogix.co.za", phone: "" },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Gauteng Branch</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-background rounded-3xl p-8 lg:p-10 border border-primary/20">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <a href="mailto:Kempton@visalogix.co.za" className="text-muted-foreground hover:text-primary transition-colors">
                      Kempton@visalogix.co.za
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Office Number</h3>
                    <a href="tel:+27113911773" className="text-muted-foreground hover:text-primary transition-colors">
                      +27 11 391 1773
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Office Hours</h3>
                    <p className="text-muted-foreground">09h00 to 16h00 Monday to Friday (Except for Public Holidays)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-3xl p-8 lg:p-10 border border-border">
              <h3 className="text-2xl font-bold mb-6">Service Consultants</h3>
              <div className="space-y-6">
                {consultants.map((consultant, index) => (
                  <div key={index} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-lg mb-3">{consultant.name}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-primary" />
                        <a href={`mailto:${consultant.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                          {consultant.email}
                        </a>
                      </div>
                      {consultant.phone && (
                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-primary" />
                          <a href={`tel:${consultant.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                            {consultant.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactUs = () => (
  <>
    <ContactUsHero />
    <CapeTownBranch />
    <GautengBranch />
  </>
);

export default ContactUs;
