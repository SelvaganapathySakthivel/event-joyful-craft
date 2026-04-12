import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-dd-dark text-white border-t border-border">
    <div className="container mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-heading text-2xl font-bold gradient-primary-text mb-4">DD Events</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Premium catering & complete A to Z event management services in Tirupur. Making your celebrations unforgettable.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold text-white mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "About", "Services", "Gallery", "Contact"].map((l) => (
              <Link
                key={l}
                to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                className="text-white/60 text-sm hover:text-secondary transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold text-white mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <a href="tel:6381459317" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={14} className="text-secondary" /> 6381459317
            </a>
            <a href="tel:8489308707" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={14} className="text-secondary" /> 8489308707
            </a>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-secondary mt-0.5 shrink-0" />
              <span>Tirupur, Tamil Nadu, India</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-white/40">
        © {new Date().getFullYear()} DD Event Management & Catering Boys. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
