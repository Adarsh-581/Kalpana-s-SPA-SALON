import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Star, Sparkles, Users, Award, MapPin } from "lucide-react";
import heroSpa from "@/assets/hero-spa.jpg";
import salonHair from "@/assets/salon-hair.jpg";
import nailSpa from "@/assets/nail-spa.jpg";
import makupBridal from "@/assets/makeup-bridal.jpg";
import bodySpa from "@/assets/body-spa.jpg";
import facialSpa from "@/assets/facial-spa.jpg";
import coupleSpa from "@/assets/couple-spa.jpg";
import spaLobby from "@/assets/spa-lobby.jpg";
import aromatherapy from "@/assets/aromatherapy.jpg";
import mensGrooming from "@/assets/mens-grooming.jpg";
import galleryWellness from "@/assets/gallery-wellness.jpg";
import branchExterior from "@/assets/branch-exterior.jpg";
import testimonialHairCurls from "@/assets/hair-curls.png";
import testimonialLayers from "@/assets/layered-style.png";
import testimonialNails from "@/assets/pink-nails.png";
import testimonialBalayage from "@/assets/balayage-back.png";
import OfferPopups from "@/components/OfferPopups";

const stats = [
  { icon: Users, value: "15,000+", label: "Happy Clients" },
  { icon: Award, value: "9", label: "Premium Branches" },
  { icon: Star, value: "4.9★", label: "Average Rating" },
  { icon: Sparkles, value: "50+", label: "Expert Therapists" },
];

const services = [
  {
    title: "Hair Services",
    tagline: "Crown Your Beauty",
    description: "From precision cuts to transformative color — expert hair artistry for all.",
    image: salonHair,
    href: "/services#hair",
    tag: "Most Popular",
  },
  {
    title: "Nail Artistry",
    tagline: "Details That Dazzle",
    description: "Manicure, pedicure, nail art and extensions — indulge every fingertip.",
    image: nailSpa,
    href: "/services#nails",
    tag: null,
  },
  {
    title: "Bridal Makeup",
    tagline: "Your Most Radiant Day",
    description: "Airbrush, HD, and bridal packages designed to make you glow.",
    image: makupBridal,
    href: "/services#makeup",
    tag: "Premium",
  },
  {
    title: "Body Spa",
    tagline: "Melt Into Bliss",
    description: "Full body massages, hot stone therapy, scrubs and detox rituals.",
    image: bodySpa,
    href: "/services#body",
    tag: null,
  },
  {
    title: "Facial Spa",
    tagline: "Reveal Your Glow",
    description: "Advanced facials tailored to your skin — brightening, anti-aging, acne care.",
    image: facialSpa,
    href: "/services#facial-spa",
    tag: null,
  },
  {
    title: "Men's Grooming",
    tagline: "Refined. Polished. Confident.",
    description: "Premium grooming, haircuts, straight razor shaves and groom packages.",
    image: mensGrooming,
    href: "/services#mens-grooming",
    tag: "Unisex",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Bandra, Mumbai",
    stars: 5,
    text: "Kalpana is genuinely the most luxurious salon experience I've ever had. The ambiance, the staff, the results — absolutely flawless. My bridal makeup was a dream.",
    image: testimonialHairCurls,
  },
  {
    name: "Rahul Mehta",
    location: "Koregaon Park, Pune",
    stars: 5,
    text: "Finally, a salon that treats men with the same premium experience. The hot stone massage and haircut package was exceptional. I leave feeling like a new man every time.",
    image: testimonialLayers,
  },
  {
    name: "Ananya Kapoor",
    location: "Indiranagar, Bangalore",
    stars: 5,
    text: "The couple's spa package was a perfect anniversary gift. Candles, rose petals, champagne — they thought of everything. We'll be coming back every year!",
    image: testimonialNails,
  },
  {
    name: "Sara Patel",
    location: "Lower Parel, Mumbai",
    stars: 5,
    text: "From consultation to finish, the color work was flawless. The compliments just don’t stop coming.",
    image: testimonialBalayage,
  },
];

const branches = [
  { city: "Mumbai", locations: ["Bandra West", "Juhu", "Andheri West", "Powai", "Lower Parel"] },
  { city: "Pune", locations: ["Koregaon Park", "Viman Nagar"] },
  { city: "Bangalore", locations: ["Indiranagar", "HSR Layout"] },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <OfferPopups />

      {/* ===== HERO ===== */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <img
          src={heroSpa}
          alt="Kalpana Spa & Salon interior"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/38 to-black/10" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="max-w-2xl">
              <p
                className="mb-4 animate-fade-up font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-light opacity-0 drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]"
                style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
              >
                Kalpana · Spa &amp; Salon
              </p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                Where Beauty
                <br />
                <span className="italic text-gold-light">Meets Ritual</span>
              </h1>
              <p className="font-body text-white/75 text-base md:text-lg leading-relaxed mb-10 max-w-xl animate-fade-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
                Step into a world of curated luxury. From transformative hair artistry to soul-restoring spa therapies — all designed for the discerning you.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-up opacity-0" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
                <Link to="/services" className="btn-gold">
                  Book Your Experience
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-outline-gold border-white/60 text-white hover:border-gold hover:bg-gold hover:text-earth">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs tracking-widest uppercase font-body">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="py-10 bg-white dark:bg-card border-b border-sand">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-sand">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2 text-center px-6">
                <stat.icon className="w-5 h-5 text-gold" />
                <p className="font-display text-3xl text-heading">{stat.value}</p>
                <p className="section-label text-[0.65rem]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">About Kalpana</p>
              <div className="gold-divider mb-6" />
              <h2 className="font-display text-4xl md:text-5xl text-heading leading-tight mb-6">
                A Sanctuary of
                <br />
                <span className="italic">Unparalleled Luxury</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                At Kalpana, we believe beauty is not merely an appearance — it is a feeling. A feeling of being cared for, renewed, and truly yourself. Our nine flagship branches across Mumbai, Pune, and Bangalore are temples of transformation.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Every treatment is an art form. Every therapist, a master of their craft. Every visit, an experience you carry with you long after you leave.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                {["Premium Ingredients", "Expert Therapists", "Hygienic Standards", "Personalized Care"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-sm font-body text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-gold">
                Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="space-y-4 mt-10">
                <img src={spaLobby} alt="Spa Lobby" className="w-full h-52 object-cover rounded-2xl shadow-luxury" loading="lazy" width={600} height={400} />
                <img src={aromatherapy} alt="Aromatherapy" className="w-full h-40 object-cover rounded-2xl shadow-luxury" loading="lazy" width={600} height={400} />
              </div>
              <div className="space-y-4">
                <img src={salonHair} alt="Hair Salon" className="w-full h-40 object-cover rounded-2xl shadow-luxury" loading="lazy" width={600} height={400} />
                <img src={coupleSpa} alt="Couple Spa" className="w-full h-52 object-cover rounded-2xl shadow-luxury" loading="lazy" width={600} height={400} />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card rounded-2xl shadow-luxury p-5 border border-sand">
                <p className="font-display text-2xl text-heading">8+ Years</p>
                <p className="text-xs text-muted-foreground font-body mt-0.5">Of Luxury Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-24 bg-gradient-luxury">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Our Expertise</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl text-heading">
              Services Crafted
              <br />
              <span className="italic">for Every You</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="luxury-card group overflow-hidden block"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 overlay-dark" />
                  {service.tag && (
                    <div className="absolute top-4 right-4 bg-gold text-white text-xs font-body font-medium px-3 py-1 rounded-full">
                      {service.tag}
                    </div>
                  )}
                  <div className="absolute bottom-4 left-5">
                    <p className="text-white/70 text-xs tracking-wider uppercase font-body">{service.tagline}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-heading mb-2">{service.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center gap-1.5 text-gold-deep text-sm font-body font-medium group-hover:gap-3 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-gold">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE STRIP ===== */}
      <section className="relative py-28 overflow-hidden">
        <img
          src={coupleSpa}
          alt="Luxury Couple Spa"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width={1200}
          height={900}
        />
        <div className="absolute inset-0 bg-earth/75" />
        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
          <p className="section-label text-gold mb-4">Our Promise</p>
          <h2 className="font-display text-4xl md:text-6xl text-white leading-tight mb-6">
            "Not just a salon visit.
            <br />
            <span className="italic text-gold-light">A ritual of renewal."</span>
          </h2>
          <p className="font-body text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-10">
            We curate every detail — from the scent in the air to the texture of your towel. Because you deserve nothing less than extraordinary.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/services" className="btn-gold">
              Book Your Ritual <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services#premium" className="btn-outline-gold border-white/60 text-white hover:border-gold hover:bg-gold hover:text-earth">
              View Packages
            </Link>
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="py-24 bg-white dark:bg-card">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Our World</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl text-heading">
              A Glimpse Inside
              <br />
              <span className="italic">The Kalpana Experience</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[heroSpa, spaLobby, salonHair, nailSpa, bodySpa, facialSpa, aromatherapy, galleryWellness, coupleSpa, makupBridal, mensGrooming, branchExterior].map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-xl relative group ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ height: i === 0 ? "400px" : "190px" }}
                  loading="lazy"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="btn-outline-gold">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS – TIMELINE CAROUSEL ===== */}
      <section className="py-24 bg-gradient-to-b from-gold-soft via-ivory to-sage-soft/45 dark:from-background dark:via-card dark:to-background">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <p className="section-label mb-4 text-gold-deep">Real Stories</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-heading">
              What Our Valued
              <br />
              <span className="italic text-gold-deep">Customers Say</span>
            </h2>
          </div>

          {/* Timeline line + avatars */}
          <div className="relative mb-10">
            <div className="h-px w-full bg-sand/90 dark:bg-border" />
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between">
              {testimonials.map((t, index) => {
                const isActive = index === activeTestimonial;
                return (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setActiveTestimonial(index)}
                    className="group flex -translate-y-6 flex-col items-center gap-3 focus-visible:outline-none"
                  >
                    <div
                      className={[
                        "relative h-14 w-14 overflow-hidden rounded-full border-2 transition-all duration-300",
                        isActive ? "border-gold ring-4 ring-gold/25 shadow-gold" : "border-sand/90 dark:border-border group-hover:border-gold/80",
                      ].join(" ")}
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div
                      className={[
                        "h-2 w-2 rounded-full border border-sand dark:border-border bg-ivory dark:bg-card",
                        isActive ? "bg-gold" : "group-hover:bg-gold/70",
                      ].join(" ")}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active testimonial card */}
          <div key={activeTestimonial} className="mx-auto max-w-3xl rounded-3xl border border-sand/80 bg-white/90 dark:bg-card/95 p-8 shadow-[0_18px_55px_rgba(107,79,58,0.2)] dark:shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur-md md:p-10 animate-fade-in">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-body uppercase tracking-[0.22em] text-gold-deep">
                  Guest {activeTestimonial + 1} of {testimonials.length}
                </p>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  {testimonials[activeTestimonial].location}
                </p>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: testimonials[activeTestimonial].stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
            </div>
            <p className="font-display text-xl md:text-2xl leading-relaxed text-heading">
              “{testimonials[activeTestimonial].text}”
            </p>
            <div className="mt-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-body text-sm font-semibold text-heading">
                  {testimonials[activeTestimonial].name}
                </p>
                <p className="text-xs font-body uppercase tracking-[0.18em] text-gold-deep/90">
                  Verified Kalpana Guest
                </p>
              </div>
              <div className="hidden text-xs font-body text-muted-foreground md:block">
                Auto-advancing every few seconds · Tap a portrait to explore another story.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BRANCHES PREVIEW ===== */}
      <section className="py-24 bg-white dark:bg-card">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Find Us Near You</p>
              <div className="gold-divider mb-6" />
              <h2 className="font-display text-4xl md:text-5xl text-heading leading-tight mb-6">
                9 Branches,
                <br />
                <span className="italic">One Standard of Excellence</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                From the bustling streets of Mumbai to the cosmopolitan neighbourhoods of Pune and Bangalore — Kalpana is always close to you.
              </p>
              <div className="space-y-6 mb-10">
                {branches.map((b) => (
                  <div key={b.city}>
                    <p className="font-body font-medium text-heading text-sm mb-2 uppercase tracking-wider">{b.city}</p>
                    <div className="flex flex-wrap gap-2">
                      {b.locations.map((loc) => (
                        <span key={loc} className="flex items-center gap-1.5 text-sm font-body text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
                          <MapPin className="w-3 h-3 text-gold" />
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/branches" className="btn-gold">
                View All Branches <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={branchExterior}
                alt="Kalpana branch"
                className="w-full h-[500px] object-cover rounded-3xl shadow-luxury"
                loading="lazy"
                width={1200}
                height={900}
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card rounded-2xl shadow-luxury p-6 border border-sand max-w-[200px]">
                <p className="font-display text-3xl text-gold">9</p>
                <p className="font-body text-sm text-muted-foreground mt-1">Premium Branches Across India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
