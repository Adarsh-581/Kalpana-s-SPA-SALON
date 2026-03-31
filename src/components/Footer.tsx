import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import BrandMark from "@/components/BrandMark";

const branches = [
  "Bandra West, Mumbai",
  "Juhu, Mumbai",
  "Andheri West, Mumbai",
  "Powai, Mumbai",
  "Lower Parel, Mumbai",
  "Koregaon Park, Pune",
  "Viman Nagar, Pune",
  "Indiranagar, Bangalore",
  "HSR Layout, Bangalore",
];

export default function Footer() {
  return (
    <footer className="bg-earth text-gold-light">
      {/* Top CTA Strip */}
      <div
        className="py-16 text-center"
        style={{ background: "var(--gradient-gold-rich)" }}
      >
        <p className="section-label mb-3 text-white/80">Ready to Indulge?</p>
        <h2 className="font-display text-4xl md:text-5xl text-white mb-6 font-light">
          Your Luxury Experience Awaits
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm font-body text-white/85">
          Book your appointment at any of our 9 premium branches across India
        </p>
        <Link to="/services" className="btn-outline-gold">
          Book Appointment
        </Link>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="mb-6 rounded-xl bg-white/10 p-4 ring-1 ring-gold/20">
                <BrandMark inverse />
              </div>
              <p className="text-sm leading-relaxed font-body text-gold-light/85">
                Where every visit is a journey of transformation. Premium unisex spa & salon services crafted for the discerning individual.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-colors">
                  <Instagram className="w-4 h-4 text-gold" />
                </a>
                <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-colors">
                  <Facebook className="w-4 h-4 text-gold" />
                </a>
                <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-colors">
                  <Youtube className="w-4 h-4 text-gold" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg text-gold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: "About Us", href: "/about" },
                  { label: "Gallery", href: "/gallery" },
                  { label: "Blog", href: "/blog" },
                  { label: "Our Branches", href: "/branches" },
                  { label: "Book Appointment", href: "/services" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm font-body flex items-center gap-2 text-gold-light/85 transition-colors hover:text-gold group"
                    >
                      <span className="w-4 h-px bg-gold/30 group-hover:bg-gold group-hover:w-6 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Branches */}
            <div>
              <h4 className="font-display text-lg text-gold mb-6">Our Branches</h4>
              <ul className="space-y-2">
                {branches.map((branch) => (
                  <li key={branch}>
                    <Link
                      to="/branches"
                      className="flex items-start gap-2 text-sm font-body text-gold-light/85 transition-colors hover:text-gold"
                    >
                      <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-gold/60" />
                      {branch}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-lg text-gold mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <a href="tel:+919999999999" className="group flex items-start gap-3 text-gold-light/85 transition-colors hover:text-gold">
                  <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:border-gold transition-colors">
                    <Phone className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gold-light/50 uppercase tracking-wider mb-0.5">Call Us</p>
                    <p className="text-sm font-body">+91 99999 99999</p>
                  </div>
                </a>
                <a href="mailto:hello@blissandbloom.com" className="group flex items-start gap-3 text-gold-light/85 transition-colors hover:text-gold">
                  <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:border-gold transition-colors">
                    <Mail className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gold-light/50 uppercase tracking-wider mb-0.5">Email Us</p>
                    <p className="text-sm font-body">hello@blissandbloom.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-gold-light/85">
                  <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gold-light/50 uppercase tracking-wider mb-0.5">Timings</p>
                    <p className="text-sm font-body">Mon–Sun: 9:00 AM – 9:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-8">
                <p className="mb-3 text-sm font-body text-gold-light/85">Subscribe for exclusive offers</p>
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 bg-white/10 dark:bg-white/5 border border-gold/20 rounded-full px-4 py-2 text-sm text-gold-light placeholder:text-gold-light/40 focus:outline-none focus:border-gold transition-colors font-body"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-gold px-4 py-2 text-xs font-medium text-earth transition-colors hover:bg-gold-deep hover:text-white"
                  >
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gold/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gold-light/50 text-xs font-body">
              © {new Date().getFullYear()} Kalpana Spa & Salon. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cancellation Policy"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gold-light/50 text-xs hover:text-gold transition-colors font-body"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
