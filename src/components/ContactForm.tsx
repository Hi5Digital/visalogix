import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Get In Touch
          </div>
          <h2 className="text-5xl font-black mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your global mobility journey? Reach out to our team.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary via-primary to-orange-500 p-10 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-8">Let's Talk</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm mb-1">Phone</p>
                  <p className="text-white font-semibold text-lg">+27 12 345 6789</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm mb-1">Email</p>
                  <p className="text-white font-semibold text-lg">info@visalogix.co.za</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm mb-1">Office</p>
                  <p className="text-white font-semibold text-lg">Pretoria, South Africa</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  className="h-12 border-gray-200"
                  required
                />
              </div>
              <div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  className="h-12 border-gray-200"
                  required
                />
              </div>
              <div>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number (optional)"
                  className="h-12 border-gray-200"
                />
              </div>
              <div>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message *"
                  rows={5}
                  className="border-gray-200 resize-none"
                  required
                />
              </div>
              <Button type="submit" className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90">
                Send Message
                <Send className="ml-2" size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
