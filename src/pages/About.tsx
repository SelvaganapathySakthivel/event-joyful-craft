import AnimatedSection from "@/components/AnimatedSection";
import { Award, Heart, Target, Eye } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import founderImg from "@/assets/founder.jpg";

const stats = [
  { value: "500+", label: "Events Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
  { value: "100%", label: "Client Satisfaction" },
];

const About = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="relative h-[50vh] flex items-center justify-center">
      <img src={aboutHero} alt="About DD Events" className="absolute inset-0 w-full h-full object-cover" width={1200} height={600} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, hsla(1,76%,55%,0.3), hsla(0,0%,0%,0.5), hsl(0,0%,100%))" }} />
      <div className="relative z-10 text-center px-4">
        <AnimatedSection>
          <span className="text-white text-sm font-semibold tracking-[0.15em] uppercase drop-shadow">About Us</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mt-3 text-white drop-shadow-lg">Our Story</h1>
        </AnimatedSection>
      </div>
    </section>

    {/* Company Intro */}
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            DD Event Management & <span className="gradient-primary-text">Catering Boys</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Established in Tirupur, DD Event Management & Catering Boys has been the trusted name for premium catering and complete event management services. From intimate family gatherings to grand wedding celebrations, we bring passion, quality, and perfection to every event.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our A to Z services mean you don't have to worry about a single detail — from venue decoration and menu planning to entertainment and logistics, we handle everything with the utmost professionalism.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 section-alt-bg">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold gradient-primary-text">{s.value}</div>
              <div className="text-muted-foreground text-sm mt-1">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Founder */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden border border-secondary/30">
              <img src={founderImg} alt="A. Kiran - Founder" loading="lazy" width={600} height={800} className="w-full object-cover" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <span className="text-primary text-sm font-semibold tracking-[0.15em] uppercase">Meet Our Founder</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6">A. Kiran</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With a passion for creating memorable experiences and over a decade of expertise in the catering and event industry, A. Kiran founded DD Event Management & Catering Boys with a simple vision — to deliver world-class service at affordable prices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Under his leadership, the company has grown from a small catering service to a full-fledged event management powerhouse, serving hundreds of clients across Tirupur and surrounding regions.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding section-alt-bg">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="bg-card rounded-xl p-8 h-full border border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-500">
              <div className="w-12 h-12 rounded-full gradient-primary-bg flex items-center justify-center mb-5">
                <Target size={22} className="text-white" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional catering and event management services that exceed expectations, creating joyful memories for every client while maintaining the highest standards of quality and hygiene.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bg-card rounded-xl p-8 h-full border border-border hover:shadow-lg hover:shadow-secondary/10 transition-all duration-500">
              <div className="w-12 h-12 rounded-full gradient-secondary-bg flex items-center justify-center mb-5">
                <Eye size={22} className="text-white" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted and preferred event management and catering brand in Tamil Nadu, known for innovation, reliability, and creating unforgettable experiences.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </div>
);

export default About;
