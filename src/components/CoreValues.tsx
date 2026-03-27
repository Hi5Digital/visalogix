import { Lock, Users, Zap } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      icon: Lock,
      title: "Security First",
      description: "Your sensitive information is protected with enterprise-grade encryption and compliance.",
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our team stays ahead of regulatory changes to provide current, accurate advice.",
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Zap,
      title: "Fast & Reliable",
      description: "Swift processing times without compromising on accuracy or compliance standards.",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Our Core Values</h2>
          <p className="text-muted-foreground text-lg">
            What drives us to excellence in global mobility
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 text-center shadow-sm border border-border hover:shadow-lg transition-shadow"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${value.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-8 h-8 ${value.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
