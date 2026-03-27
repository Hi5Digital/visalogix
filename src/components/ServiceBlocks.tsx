import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileCheck, Plane, Stamp, Globe2, Truck, Check } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Police Clearance Certificates",
    description:
      "Expedited 5–7 day processing for South African CRC Pretoria. Our institutional relationships ensure fast-track approval.",
    bullets: ["5–7 day turnaround", "CRC Pretoria specialist", "Track & trace available"],
  },
  {
    icon: Plane,
    title: "UK & Immigration",
    description:
      "Expert guidance on 2026 Skilled Worker and Ancestry visas. Navigate eVisa transitions with confidence.",
    bullets: ["Skilled Worker visas", "Ancestry visa pathways", "2026 eVisa support"],
  },
  {
    icon: Stamp,
    title: "Document Legalisation",
    description:
      "DIRCO Apostille and Embassy Attestation. Complete document authentication for international use.",
    bullets: ["Apostille services", "Embassy attestation", "Fast-track processing"],
  },
  {
    icon: Globe2,
    title: "Schengen & ETIAS",
    description:
      "Navigating European travel requirements for late 2026. Prepare ahead for the new ETIAS system.",
    bullets: ["ETIAS Q4 2026 ready", "Schengen guidance", "Compliance assured"],
  },
  {
    icon: Truck,
    title: "Global Courier",
    description:
      'Secure "Chain of Custody" for sensitive documents. End-to-end tracking for your peace of mind.',
    bullets: ["Chain of custody", "Global delivery", "Real-time tracking"],
  },
];

const ServiceCard = ({ service, index }: { service: (typeof services)[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-orange-lg hover:-translate-y-1 flex flex-col"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gradient-orange group-hover:shadow-orange transition-all duration-500">
        <Icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors duration-500" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
      <ul className="mt-auto space-y-2">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check size={14} className="text-primary flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ServiceBlocks = () => {
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
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive visa and mobility solutions for global professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBlocks;
