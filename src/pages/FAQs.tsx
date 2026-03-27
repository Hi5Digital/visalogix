import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import passportImage from "@/assets/man-holding-passport.png";
import hero1 from "@/assets/hero/hero1.webp";
import hero2 from "@/assets/hero/hero2.webp";
import hero3 from "@/assets/hero/hero3.webp";
import hero4 from "@/assets/hero/hero4.webp";
import hero5 from "@/assets/hero/hero5.webp";
import hero6 from "@/assets/hero/hero6.webp";
import hero7 from "@/assets/hero/hero7.webp";

const FAQsHero = () => {
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
            FREQUENTLY
            <br />
            <span className="text-primary">ASKED QUESTIONS</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl leading-relaxed">
            Find answers to common questions about visa applications, consular procedures, and our services.
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

const CommonQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are consulates open on the weekend?",
      answer: "No, consular offices operate on a Saturday or Sunday in South Africa. Check the applicable published operating times for each consular office represented for that country you wish to visit, as each Embassy/Consulate has different operating times."
    },
    {
      question: "Can I submit my application through an agent like Visalogix or would I have to appear in person?",
      answer: "More recently consular offices are becoming stricter with third-party submissions. We recommend checking with us at Visalogix to determine the specific requirements for your destination country and visa type."
    },
    {
      question: "Do I require to book and pay for my air ticket prior to visa application?",
      answer: "For Schengen visas, yes—you must book and pay for your air ticket prior to submission. Other consular offices might just wish to see your flight reservation. Be absolutely sure that the name on your air ticket matches your passport name exactly."
    },
    {
      question: "Do I need to make an appointment with Visalogix consultants?",
      answer: "It is not essential to make an appointment to see our consultants. But should the application be of an urgent nature, we would like to see you as early as possible in the day. All our branches are open at 08h30 to 16h30 and we are open on a Saturday morning as well in Cape Town only, from 09h00 to 12h00."
    },
    {
      question: "What is the difference between a single entry and multiple entry visa?",
      answer: "A single entry visa allows the traveller to enter the country only once while the visa is valid. Once you exit, the visa is no longer valid, even if there are still valid days left. If your travel plans require you to re-enter the same country more than once, you must ask for a multiple entry visa and provide evidence per your travel itinerary."
    },
    {
      question: "What is the meaning of a 'business' visa?",
      answer: "A businessman would be applying for such a visa when entering into negotiations with potential new clients abroad, attending meetings, reviewing projects, or attending conferences or exhibitions. It is always better to enquire with our consultants if business travellers have more specific agendas abroad."
    },
    {
      question: "Is a visa guaranteed?",
      answer: "A visa is not guaranteed. Whether you paid a fee or the visa was gratis, the consular offices assess each application on the documentation submitted and make their decision. Some countries require you to sign your application form, giving the consular offices permission to make a character check on the applicant."
    },
    {
      question: "Should my visa be not approved will I get my visa money back?",
      answer: "Unfortunately, the consular offices do not refund any visa fees, regardless of the outcome of your visa application. Even if you asked for a multiple entry visa and were issued with a single entry visa, your visa fees will not be refunded."
    },
    {
      question: "Documents submitted to the consulate will I get them back?",
      answer: "Please make copies of your application and supporting documents for your filing. The documents you submit to the required consulate do get returned to you. If the application requires original birth or marriage certificates, make certified copies and send the originals with a letter requesting their return."
    },
    {
      question: "What if I need a passport urgently and home affairs do not issue temporary passports any longer?",
      answer: "Temporary passports are no longer being issued by Department of Home Affairs since 1 September 2014. Emergency Travel Certificates are issued on the same day in consideration of emergency circumstances such as when a passport is lost while abroad, or for assisting family members in distress."
    },
    {
      question: "What is a Schengen visa?",
      answer: "A Schengen Visa is the document issued by the appropriate authorities for visiting/travelling to and within the Schengen Area. The Schengen Area is comprised of 26 countries that have agreed to allow free movement of their citizens within this area as a single country. Make contact with Visalogix to establish which country is part of Schengen."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Common Questions</h2>
            <p className="text-muted-foreground text-lg">
              We've compiled answers to the most frequently asked questions about visa applications, consular procedures, and our services. If you don't find what you're looking for, please contact us directly.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-2xl overflow-hidden bg-background hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                >
                  <span className="font-bold text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const VisaTypesSupport = () => {
  const visaTypes = [
    {
      title: "Tourist Visas",
      description: "Short-stay tourism and leisure travel visas to explore destinations worldwide."
    },
    {
      title: "Business Visas",
      description: "For meetings, negotiations, conferences, and temporary business assignments."
    },
    {
      title: "Work Visas",
      description: "Employment visas including Skilled Worker and specialty occupations."
    },
    {
      title: "Study Visas",
      description: "Education and student visas for pursuing academic opportunities."
    },
    {
      title: "Schengen Visas",
      description: "Access to 26 European countries with a single visa application."
    },
    {
      title: "Ancestry Visas",
      description: "Heritage-based visas for those with family connections to specific countries."
    },
    {
      title: "Permit Applications",
      description: "Inbound permits and long-term residency applications."
    },
    {
      title: "ETIAS Registration",
      description: "Preparation for the European Travel Information and Authorization System."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Visa Types We Support</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {visaTypes.map((type, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold mb-3">{type.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StillHaveQuestions = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-background rounded-3xl p-12 text-center border border-primary/20">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Our expert visa consultants are here to help. Get personalized guidance for your specific visa needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" className="rounded-full px-8">
              Contact Our Experts
            </Button>
            <Button variant="heroOutline" size="lg" className="rounded-full px-8 border-2 border-primary text-primary hover:bg-primary/10">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQs = () => (
  <>
    <FAQsHero />
    <CommonQuestions />
    <VisaTypesSupport />
    <StillHaveQuestions />
  </>
);

export default FAQs;
