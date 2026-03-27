import { Check } from "lucide-react";

const StrategicApproach = () => {
  const features = [
    {
      title: "Institutional Compliance",
      description: "Navigate 2026 eVisa transitions with confidence and regulatory assurance.",
    },
    {
      title: "Predictive ROI Analytics",
      description: "Data-driven insights for HR managers to optimize talent mobility strategies.",
    },
    {
      title: "Enterprise Security",
      description: "Google Cloud infrastructure ensures your data is secure, fast, and reliable.",
    },
  ];

  const stats = [
    {
      number: "5,000+",
      description: "Successful international assignments managed",
    },
    {
      number: "15+",
      description: "Countries with direct institutional relationships",
    },
    {
      number: "99%",
      description: "Visa approval success rate",
    },
    {
      number: "24/7",
      description: "Dedicated support for urgent cases",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Strategic Approach</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              At Visalogix, we understand the complexity of global mobility for South African businesses. 
              We provide institutional compliance for the UK's 2026 eVisa transition and predictive ROI 
              analytics for HR managers.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our infrastructure, built on Google Cloud, delivers 2026-grade security and speed—ensuring 
              your organization stays ahead of regulatory changes while managing talent mobility seamlessly.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-gradient-to-br from-primary/10 to-background rounded-3xl p-8 lg:p-10 border border-primary/20">
            <h2 className="text-3xl font-bold mb-8">Why Choose Visalogix?</h2>
            <div className="space-y-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-black text-primary mb-2">{stat.number}</div>
                  <p className="text-foreground/80">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicApproach;
