import AnimatedSection from "@/components/AnimatedSection";
import BookingModal from "@/components/BookingModal";
import { ArrowRight } from "lucide-react";

import weddingImg from "@/assets/wedding-catering.jpg";
import engagementImg from "@/assets/engagement-reception.jpg";
import birthdayImg from "@/assets/birthday-party.jpg";
import corporateImg from "@/assets/corporate-event.jpg";
import outdoorImg from "@/assets/outdoor-event.jpg";
import eventPlanningImg from "@/assets/event-planning.jpg";

const services = [
  {
    title: "Wedding Catering",
    img: weddingImg,
    desc: "Make your wedding feast unforgettable with our exquisite menu selections. From traditional South Indian thali to multi-cuisine buffets, we craft culinary experiences that delight every guest.",
  },
  {
    title: "Engagement & Reception",
    img: engagementImg,
    desc: "Celebrate your engagement or reception with elegance. Our team handles everything from stage decoration to premium food service, ensuring a seamless and memorable celebration.",
  },
  {
    title: "Birthday Events",
    img: birthdayImg,
    desc: "From kids' parties to milestone celebrations, we create magical birthday experiences with themed decorations, custom cakes, and delicious food that everyone loves.",
  },
  {
    title: "Corporate Catering",
    img: corporateImg,
    desc: "Professional catering solutions for conferences, seminars, and corporate gatherings. We ensure timely service, diverse menus, and impeccable presentation for your business events.",
  },
  {
    title: "Outdoor Events",
    img: outdoorImg,
    desc: "Beautiful outdoor setups with canopy arrangements, fairy lights, and garden-fresh menus. Perfect for intimate gatherings, celebrations, and open-air parties.",
  },
  {
    title: "Full Event Planning (A to Z)",
    img: eventPlanningImg,
    desc: "Leave everything to us! From venue selection and decoration to entertainment and catering, our comprehensive A to Z service covers every aspect of your event.",
  },
];

const Services = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="section-padding text-center">
      <AnimatedSection>
        <span className="text-primary text-sm font-semibold tracking-[0.15em] uppercase">Our Expertise</span>
        <h1 className="font-heading text-4xl md:text-6xl font-bold mt-3 mb-4">Our Services</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Complete catering and event management solutions tailored to your needs and budget.
        </p>
      </AnimatedSection>
    </section>

    {/* Service Cards */}
    <section className="pb-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="glass-card rounded-xl overflow-hidden group hover-gold-glow h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{s.desc}</p>
                  <BookingModal>
                    <button className="mt-5 gradient-gold-bg text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 w-fit">
                      Book Now <ArrowRight size={14} />
                    </button>
                  </BookingModal>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
