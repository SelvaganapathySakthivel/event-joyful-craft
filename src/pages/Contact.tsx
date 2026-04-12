import AnimatedSection from "@/components/AnimatedSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="pt-20">
      <section className="section-padding text-center">
        <AnimatedSection>
          <span className="text-primary text-sm font-semibold tracking-[0.15em] uppercase">Get In Touch</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mt-3 mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ready to plan your next event? Reach out and let's make it happen.
          </p>
        </AnimatedSection>
      </section>

      <section className="px-4 md:px-8 pb-20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:shadow-secondary/10 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full gradient-secondary-bg flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-2">Phone</h3>
                      <a href="tel:6381459317" className="text-muted-foreground hover:text-primary transition-colors block">6381459317</a>
                      <a href="tel:8489308707" className="text-muted-foreground hover:text-primary transition-colors block">8489308707</a>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:shadow-secondary/10 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full gradient-secondary-bg flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-2">Address</h3>
                      <p className="text-muted-foreground">Tirupur, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:shadow-secondary/10 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full gradient-secondary-bg flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-2">Working Hours</h3>
                      <p className="text-muted-foreground">Mon - Sun: 8:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden border border-secondary/30 h-52">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.40216442469!2d77.2830413!3d11.1085242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b0424d75a1%3A0x389c34bb42585e5c!2sTirupur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DD Events Location - Tirupur"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 space-y-5 border border-border">
                <h2 className="font-heading text-2xl font-semibold gradient-primary-text mb-2">Send a Message</h2>
                <Input placeholder="Your Name" required className="bg-accent border-border text-foreground placeholder:text-muted-foreground" />
                <Input placeholder="Phone Number" type="tel" required className="bg-accent border-border text-foreground placeholder:text-muted-foreground" />
                <Input placeholder="Email (optional)" type="email" className="bg-accent border-border text-foreground placeholder:text-muted-foreground" />
                <Textarea placeholder="Your message..." rows={5} required className="bg-accent border-border text-foreground placeholder:text-muted-foreground" />
                <button
                  type="submit"
                  className="w-full gradient-primary-bg text-primary-foreground py-3 rounded-full font-semibold hover:opacity-90 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
