import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Award, Heart, ChefHat, Calendar, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import BookingModal from "@/components/BookingModal";

import heroBg from "@/assets/hero-bg.jpg";
import weddingImg from "@/assets/wedding-catering.jpg";
import birthdayImg from "@/assets/birthday-party.jpg";
import corporateImg from "@/assets/corporate-event.jpg";
import traditionalImg from "@/assets/traditional-function.jpg";
import outdoorImg from "@/assets/outdoor-event.jpg";
import engagementImg from "@/assets/engagement-reception.jpg";

const services = [
  { title: "Wedding Catering", img: weddingImg, desc: "Exquisite menus crafted for your special day" },
  { title: "Birthday Parties", img: birthdayImg, desc: "Fun & delicious celebrations for all ages" },
  { title: "Corporate Events", img: corporateImg, desc: "Professional catering for business occasions" },
  { title: "Traditional Functions", img: traditionalImg, desc: "Authentic flavors for cultural celebrations" },
];

const whyUs = [
  { icon: Users, title: "Experienced Team", desc: "10+ years of event management expertise" },
  { icon: ChefHat, title: "Quality Food", desc: "Fresh ingredients, authentic recipes" },
  { icon: Star, title: "Affordable Pricing", desc: "Premium quality at competitive prices" },
  { icon: Calendar, title: "Full Event Management", desc: "A to Z planning & execution" },
];

const testimonials = [
  { name: "Priya S.", text: "DD Events made our wedding absolutely magical! The food was incredible and the service was impeccable.", rating: 5 },
  { name: "Rajesh K.", text: "Best corporate catering in Tirupur. Professional, punctual, and the food quality is outstanding.", rating: 5 },
  { name: "Meena R.", text: "From decoration to food, everything was perfect for our daughter's birthday. Highly recommended!", rating: 5 },
];

const galleryImages = [weddingImg, corporateImg, outdoorImg, engagementImg, traditionalImg, birthdayImg];

const Index = () => (
  <div className="overflow-hidden">
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img src={heroBg} alt="DD Events Catering" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, hsla(1,76%,55%,0.4), hsla(0,0%,0%,0.6), hsl(0,0%,100%))" }} />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-primary text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
            ✦ Premium Catering & Events ✦
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 text-white drop-shadow-lg"
        >
          Taste the Love in{" "}
          <span className="gradient-primary-text">Every Bite</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow"
        >
          A to Z Event Management & Catering Services — Making your celebrations extraordinary in Tirupur
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <BookingModal>
            <button className="gradient-primary-bg text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2 justify-center shadow-lg">
              Book Your Event <ArrowRight size={18} />
            </button>
          </BookingModal>
          <Link
            to="/services"
            className="border-2 border-white/40 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors text-center"
          >
            Our Services
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-[0.15em] uppercase">What We Offer</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">From intimate gatherings to grand celebrations, we deliver excellence in every detail.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <Link to="/services" className="group flex flex-col h-full bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] transition-all duration-500">
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <img src={s.img} alt={s.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-heading text-lg font-semibold mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding section-alt-bg">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-[0.15em] uppercase">Why Us</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-4">Why Choose DD Events</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-8 text-center border border-border hover:shadow-lg hover:shadow-secondary/10 hover:scale-[1.02] transition-all duration-500">
                <div className="w-14 h-14 rounded-full gradient-secondary-bg flex items-center justify-center mx-auto mb-5">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery Preview */}
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-[0.15em] uppercase">Our Work</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-4">Featured Events</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="relative group overflow-hidden rounded-xl aspect-[4/3] border border-border">
                <img src={img} alt={`Event ${i + 1}`} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="text-center mt-10">
          <Link to="/gallery" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View Full Gallery <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding section-alt-bg">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-secondary text-sm font-semibold tracking-[0.15em] uppercase">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-4">What Our Clients Say</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-dd-gold fill-dd-gold" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <p className="font-heading font-semibold text-primary">{t.name}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary-bg opacity-5" />
      <AnimatedSection className="container mx-auto text-center relative z-10">
        <Sparkles className="mx-auto text-primary mb-4" size={36} />
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          Ready to Create <span className="gradient-primary-text">Unforgettable</span> Moments?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
          Let us handle every detail while you enjoy the celebration. Contact us today for a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <BookingModal>
            <button className="gradient-primary-bg text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg">
              Book Now
            </button>
          </BookingModal>
          <a
            href="tel:6381459317"
            className="border-2 border-secondary/30 text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary/10 transition-colors"
          >
            Call: 6381459317
          </a>
        </div>
      </AnimatedSection>
    </section>
  </div>
);

export default Index;
