import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, ArrowRight, Star } from "lucide-react";
import heroSpa from "@/assets/hero-spa.jpg";
import branchExterior from "@/assets/branch-exterior.jpg";
import spaLobby from "@/assets/spa-lobby.jpg";

const branches = [
  { id: 1, name: "Kalpana Bandra West", city: "Mumbai", address: "Shop No. 12, Hill Road, Bandra West, Mumbai – 400050", phone: "+91 98200 11001", hours: "Mon–Sun: 9:00 AM – 9:00 PM", rating: 4.9, reviews: 1240, image: spaLobby, flagship: true, services: ["Hair", "Nails", "Makeup", "Spa", "Men's Grooming"] },
  { id: 2, name: "Kalpana Juhu", city: "Mumbai", address: "Ground Floor, Sun N Sand Complex, Juhu Tara Rd, Mumbai – 400049", phone: "+91 98200 11002", hours: "Mon–Sun: 9:00 AM – 9:00 PM", rating: 4.9, reviews: 980, image: branchExterior, flagship: false, services: ["Hair", "Nails", "Makeup", "Spa"] },
  { id: 3, name: "Kalpana Andheri West", city: "Mumbai", address: "201, Infinity Mall, New Link Road, Andheri West, Mumbai – 400053", phone: "+91 98200 11003", hours: "Mon–Sun: 10:00 AM – 9:00 PM", rating: 4.8, reviews: 756, image: heroSpa, flagship: false, services: ["Hair", "Nails", "Spa", "Wellness"] },
  { id: 4, name: "Kalpana Powai", city: "Mumbai", address: "Shop G-14, Galleria, Hiranandani Gardens, Powai, Mumbai – 400076", phone: "+91 98200 11004", hours: "Mon–Sun: 9:00 AM – 9:00 PM", rating: 4.9, reviews: 891, image: spaLobby, flagship: false, services: ["Hair", "Nails", "Makeup", "Spa", "Men's Grooming"] },
  { id: 5, name: "Kalpana Lower Parel", city: "Mumbai", address: "Level 2, Phoenix Palladium, Lower Parel, Mumbai – 400013", phone: "+91 98200 11005", hours: "Mon–Sun: 10:00 AM – 10:00 PM", rating: 4.9, reviews: 1124, image: branchExterior, flagship: false, services: ["Hair", "Nails", "Makeup", "Spa", "Bridal", "Wellness"] },
  { id: 6, name: "Kalpana Koregaon Park", city: "Pune", address: "101, North Main Road, Koregaon Park, Pune – 411001", phone: "+91 98200 11006", hours: "Mon–Sun: 9:00 AM – 9:00 PM", rating: 4.8, reviews: 654, image: heroSpa, flagship: false, services: ["Hair", "Nails", "Makeup", "Spa"] },
  { id: 7, name: "Kalpana Viman Nagar", city: "Pune", address: "Shop 3, Central Avenue, Viman Nagar, Pune – 411014", phone: "+91 98200 11007", hours: "Mon–Sun: 9:00 AM – 9:00 PM", rating: 4.8, reviews: 487, image: spaLobby, flagship: false, services: ["Hair", "Nails", "Spa", "Wellness"] },
  { id: 8, name: "Kalpana Indiranagar", city: "Bangalore", address: "12th Main, HAL 2nd Stage, Indiranagar, Bengaluru – 560038", phone: "+91 98200 11008", hours: "Mon–Sun: 9:00 AM – 9:00 PM", rating: 4.9, reviews: 823, image: branchExterior, flagship: false, services: ["Hair", "Nails", "Makeup", "Spa", "Men's Grooming"] },
  { id: 9, name: "Kalpana HSR Layout", city: "Bangalore", address: "27th Main, Sector 2, HSR Layout, Bengaluru – 560102", phone: "+91 98200 11009", hours: "Mon–Sun: 9:00 AM – 9:30 PM", rating: 4.9, reviews: 692, image: heroSpa, flagship: false, services: ["Hair", "Nails", "Spa", "Bridal", "Wellness"] },
];

const cities = ["All", "Mumbai", "Pune", "Bangalore"];

export default function BranchesPage() {
  const [activeCity, setActiveCity] = useState("All");
  const filtered = activeCity === "All" ? branches : branches.filter((b) => b.city === activeCity);

  return (
    <div className="min-h-screen pt-20">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={heroSpa} alt="Branches" className="absolute inset-0 w-full h-full object-cover" loading="eager" width={1920} height={1080} />
        <div className="absolute inset-0 bg-earth/65" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <p className="section-label text-gold mb-3">Find Us</p>
          <h1 className="font-display text-5xl md:text-6xl text-white">Our Branches</h1>
          <div className="w-16 h-px bg-gradient-gold-rich mx-auto mt-4" />
          <p className="font-body text-white/70 mt-4 text-sm">9 Premium Locations · Mumbai · Pune · Bangalore</p>
        </div>
      </div>

      <div className="border-b border-sand bg-white py-5 dark:bg-card">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <button key={city} onClick={() => setActiveCity(city)}
                className={`rounded-full border px-6 py-2.5 text-sm font-body font-medium transition-all ${
                  activeCity === city
                    ? "border-gold bg-gold text-earth shadow-gold"
                    : "border-sand bg-white dark:bg-card text-muted-foreground hover:border-gold hover:bg-gold-soft hover:text-gold-deep dark:hover:bg-gold-soft"
                }`}>
                {city} {city !== "All" && `(${branches.filter((b) => b.city === city).length})`}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((branch) => (
            <div key={branch.id} className="luxury-card overflow-hidden group">
              <div className="relative h-52 overflow-hidden">
                <img src={branch.image} alt={branch.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={600} height={400} />
                <div className="absolute inset-0 overlay-dark" />
                {branch.flagship && (
                  <div className="absolute top-4 left-4 bg-gold text-white text-xs font-body font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-white" /> Flagship
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/60 text-xs font-body uppercase tracking-wider">{branch.city}</p>
                  <h3 className="font-display text-xl text-white mt-0.5">{branch.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(branch.rating) ? "fill-gold text-gold" : "text-muted-foreground"}`} />
                    ))}
                  </div>
                  <span className="text-sm font-body font-medium text-heading">{branch.rating}</span>
                  <span className="text-xs text-muted-foreground font-body">({branch.reviews})</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" /><p className="text-xs text-muted-foreground font-body leading-relaxed">{branch.address}</p></div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold flex-shrink-0" /><a href={`tel:${branch.phone}`} className="text-xs text-body hover:text-gold-deep transition-colors font-body">{branch.phone}</a></div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold flex-shrink-0" /><p className="text-xs text-muted-foreground font-body">{branch.hours}</p></div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {branch.services.map((svc) => (
                    <span key={svc} className="text-xs font-body bg-gold-soft text-gold-deep px-2.5 py-0.5 rounded-full">{svc}</span>
                  ))}
                </div>
                <div className="flex gap-3 pt-4 border-t border-sand">
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`} target="_blank" rel="noopener noreferrer" className="btn-outline-gold flex-1 text-xs py-2.5 justify-center">
                    <MapPin className="w-3.5 h-3.5" /> Directions
                  </a>
                  <a href={`tel:${branch.phone}`} className="btn-gold flex-1 text-xs py-2.5 justify-center">
                    <Phone className="w-3.5 h-3.5" /> Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-gradient-luxury px-6 py-24 text-center dark:bg-gradient-dark">
        <p className="section-label mb-4">Premium Presence</p>
        <h2 className="font-display text-4xl md:text-5xl text-heading mb-4">3 Cities. 9 Branches.<br /><span className="italic text-gold-deep">One Uncompromising Standard.</span></h2>
        <p className="font-body text-muted-foreground max-w-xl mx-auto mb-8">Wherever life takes you in Mumbai, Pune, or Bangalore — Kalpana is always close, always ready to elevate your day.</p>
        <Link to="/services" className="btn-gold">Book at Any Branch <ArrowRight className="w-4 h-4" /></Link>
      </section>
    </div>
  );
}
