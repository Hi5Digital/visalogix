import { Link } from "react-router-dom";
import logo from "@/assets/visalogix-logo.png";

const Footer = () => (
  <footer className="bg-foreground text-background py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="mb-4">
            <img src={logo} alt="Visalogix" className="h-10 w-auto brightness-0 invert" />
          </div>
          <p className="text-background/60 text-sm leading-relaxed">
            Global Mobility, Visa Facilitation, and Corporate Relocation experts for a borderless world.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-primary">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            <Link to="/" className="text-background/60 hover:text-primary transition-colors text-sm">Home</Link>
            <Link to="/about" className="text-background/60 hover:text-primary transition-colors text-sm">About Us</Link>
            <a href="#contact" className="text-background/60 hover:text-primary transition-colors text-sm">Contact</a>
          </nav>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-primary">Services</h4>
          <ul className="flex flex-col gap-2 text-sm text-background/60">
            <li>Police Clearance Certificates</li>
            <li>UK & Immigration</li>
            <li>Document Legalisation</li>
            <li>Schengen & ETIAS</li>
            <li>Global Courier</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/40 text-xs">
        © {new Date().getFullYear()} Visalogix. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
