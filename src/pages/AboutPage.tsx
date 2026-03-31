import { Link } from "react-router-dom";
import { ArrowRight, Heart, Leaf, Star, Users } from "lucide-react";
import spaLobby from "@/assets/spa-lobby.jpg";
import heroSpa from "@/assets/hero-spa.jpg";
import salonHair from "@/assets/salon-hair.jpg";
import aromatherapy from "@/assets/aromatherapy.jpg";

const values = [
  {
    icon: Heart,
    title: "Guest-First Philosophy",
    description: "Every decision — from our product selection to staff training — starts and ends with your comfort and satisfaction.",
  },
  {
    icon: Leaf,
    title: "Clean & Conscious",
    description: "We use only premium, skin-safe products. Many of our treatments feature organic and botanical ingredients.",
  },
  {
    icon: Star,
    title: "Craft & Expertise",
    description: "Our therapists are extensively trained in their artform. Many hold international certifications in their specialty.",
  },
  {
    icon: Users,
    title: "Inclusive & Unisex",
    description: "Beauty has no gender at Kalpana. Our space and services are designed for every individual who walks through our doors.",
  },
];

const team = [
  { name: "Kavya Nair", role: "Creative Director & Lead Stylist", specialty: "Balayage & Color" },
  { name: "Arjun Khanna", role: "Head Spa Therapist", specialty: "Deep Tissue & Ayurvedic" },
  { name: "Meera Patel", role: "Senior Makeup Artist", specialty: "Bridal & HD Makeup" },
  { name: "Rohan Desai", role: "Men's Grooming Expert", specialty: "Precision Cuts & Shaves" },
  { name: "Sita Rao", role: "Nail Art Specialist", specialty: "Gel & 3D Nail Art" },
  { name: "Pradeep Singh", role: "Wellness Coach", specialty: "Aromatherapy & Reflexology" },
];

const milestones = [
  { year: "2016", title: "First Branch Opens", desc: "Kalpana was born in Bandra West, Mumbai — with a vision to redefine luxury wellness in India." },
  { year: "2018", title: "Expansion to Pune", desc: "Two new branches opened in Koregaon Park and Viman Nagar, serving Pune's discerning clientele." },
  { year: "2020", title: "Pandemic Resilience", desc: "We innovated with home services and stringent hygiene protocols, emerging stronger than ever." },
  { year: "2022", title: "Bangalore Entry", desc: "Two premium branches launched in Indiranagar and HSR Layout, completing our South India presence." },
  { year: "2024", title: "9 Branches & 15,000+ Clients", desc: "We celebrated 8 years and 15,000 happy clients — each one a testament to our philosophy." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={heroSpa} alt="About Kalpana" className="absolute inset-0 w-full h-full object-cover" loading="eager" width={1920} height={1080} />
        <div className="absolute inset-0 bg-earth/65" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <p className="section-label text-gold mb-3">Our Story</p>
          <h1 className="font-display text-5xl md:text-6xl text-white">About Kalpana</h1>
          <div className="w-16 h-px bg-gradient-gold-rich mx-auto mt-4" />
        </div>
      </div>

      {/* Mission */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={spaLobby}
                alt="Kalpana lobby"
                className="w-full h-[520px] object-cover rounded-3xl shadow-luxury"
                loading="lazy"
                width={1200}
                height={900}
              />
              <div className="absolute top-8 -right-8 bg-white dark:bg-card rounded-2xl shadow-luxury p-6 border border-sand max-w-[180px]">
                <p className="font-display text-4xl text-gold">2016</p>
                <p className="font-body text-xs text-muted-foreground mt-1">Founded in Mumbai</p>
              </div>
            </div>
            <div>
              <p className="section-label mb-4">Who We Are</p>
              <div className="gold-divider mb-6" />
              <h2 className="font-display text-4xl md:text-5xl text-heading leading-tight mb-6">
                Born from a Belief
                <br />
                <span className="italic">in Extraordinary</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Kalpana was founded in 2016 with one unwavering belief: that every person deserves to feel extraordinary. Not just occasionally — but every time they step through our doors.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                We saw a gap in the Indian wellness market — spaces that were either purely functional or overwhelmingly clinical. We wanted to create something different. A sanctuary. A place where luxury was woven into every sensory detail.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Today, with 9 branches across three cities and over 15,000 clients who trust us with their most cherished moments, we continue to pursue the extraordinary with the same passion that sparked us eight years ago.
              </p>
              <Link to="/services" className="btn-gold">
                Experience Kalpana <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-luxury dark:bg-gradient-dark">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <p className="section-label mb-4">What Drives Us</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl text-heading">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="luxury-card p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl text-heading mb-3">{value.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-white dark:bg-card">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Our Journey</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl text-heading">
              Eight Years of
              <br />
              <span className="italic">Building Extraordinary</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/50 to-transparent" />
            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <div key={milestone.year} className={`flex gap-8 items-center ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <p className="font-display text-4xl text-gold mb-2">{milestone.year}</p>
                    <h3 className="font-display text-xl text-heading mb-2">{milestone.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{milestone.desc}</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-gold border-4 border-white shadow-gold flex-shrink-0 z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gradient-luxury dark:bg-gradient-dark">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <p className="section-label mb-4">The Artisans</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl text-heading">
              Meet Our Expert Team
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
              Each member of the Kalpana family is selected for their mastery, passion, and commitment to your experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="luxury-card p-8 flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-xl text-white">{member.name[0]}</span>
                </div>
                <div>
                  <h3 className="font-body font-medium text-heading">{member.name}</h3>
                  <p className="text-xs text-muted-foreground font-body mt-0.5">{member.role}</p>
                  <div className="mt-3 flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-gold text-gold" />
                    <span className="text-xs font-body text-gold-deep">{member.specialty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Quote */}
      <section className="relative py-28 overflow-hidden">
        <img src={aromatherapy} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1200} height={900} />
        <div className="absolute inset-0 bg-earth/75" />
        <div className="relative z-10 text-center container mx-auto px-6 max-w-3xl">
          <p className="section-label text-gold mb-4">Our Commitment</p>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-relaxed italic">
            "Every hand that touches you at Kalpana is trained to create not just beauty — but a memory."
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
          <p className="text-white/60 text-sm font-body mt-4">— Founder, Kalpana Spa &amp; Salon</p>
        </div>
      </section>
    </div>
  );
}
