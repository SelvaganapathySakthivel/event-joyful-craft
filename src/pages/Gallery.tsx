import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import weddingImg from "@/assets/wedding-catering.jpg";
import birthdayImg from "@/assets/birthday-party.jpg";
import corporateImg from "@/assets/corporate-event.jpg";
import traditionalImg from "@/assets/traditional-function.jpg";
import outdoorImg from "@/assets/outdoor-event.jpg";
import engagementImg from "@/assets/engagement-reception.jpg";
import eventPlanningImg from "@/assets/event-planning.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import founderImg from "@/assets/founder.jpg";

const images = [
  { src: heroBg, alt: "Grand Wedding Banquet", category: "Wedding" },
  { src: weddingImg, alt: "Wedding Catering Setup", category: "Wedding" },
  { src: engagementImg, alt: "Engagement Decoration", category: "Events" },
  { src: birthdayImg, alt: "Birthday Celebration", category: "Birthday" },
  { src: corporateImg, alt: "Corporate Event", category: "Corporate" },
  { src: outdoorImg, alt: "Outdoor Event Setup", category: "Events" },
  { src: traditionalImg, alt: "Traditional Function", category: "Events" },
  { src: eventPlanningImg, alt: "Event Planning Team", category: "Team" },
  { src: aboutHero, alt: "Catering Service", category: "Food" },
  { src: founderImg, alt: "Our Founder", category: "Team" },
];

const categories = ["All", "Wedding", "Events", "Birthday", "Corporate", "Food", "Team"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <div className="pt-20">
      <section className="section-padding text-center">
        <AnimatedSection>
          <span className="text-primary text-sm font-semibold tracking-[0.15em] uppercase">Our Portfolio</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mt-3 mb-4">Gallery</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            A glimpse into the events we've crafted with love and perfection.
          </p>
        </AnimatedSection>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "gradient-primary-bg text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="px-4 md:px-8 pb-20">
        <div className="container mx-auto columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <AnimatedSection key={img.src + filter} delay={i * 0.05}>
              <div
                className="break-inside-avoid group cursor-pointer overflow-hidden rounded-xl border border-border"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setLightbox(null)}>
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={filtered[lightbox]?.src}
              alt={filtered[lightbox]?.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
