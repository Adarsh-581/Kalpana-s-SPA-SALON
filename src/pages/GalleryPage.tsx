import { useState } from "react";
import { X } from "lucide-react";
import heroSpa from "@/assets/hero-spa.jpg";
import spaLobby from "@/assets/spa-lobby.jpg";
import salonHair from "@/assets/salon-hair.jpg";
import nailSpa from "@/assets/nail-spa.jpg";
import makupBridal from "@/assets/makeup-bridal.jpg";
import bodySpa from "@/assets/body-spa.jpg";
import facialSpa from "@/assets/facial-spa.jpg";
import aromatherapy from "@/assets/aromatherapy.jpg";
import coupleSpa from "@/assets/couple-spa.jpg";
import mensGrooming from "@/assets/mens-grooming.jpg";
import galleryWellness from "@/assets/gallery-wellness.jpg";
import branchExterior from "@/assets/branch-exterior.jpg";

const gallery = [
  { src: heroSpa, caption: "Our Signature Treatment Suite", category: "Interior" },
  { src: spaLobby, caption: "Grand Reception Lobby", category: "Interior" },
  { src: salonHair, caption: "Premium Hair Studio", category: "Hair" },
  { src: nailSpa, caption: "Luxury Nail Lounge", category: "Nails" },
  { src: makupBridal, caption: "Bridal Beauty Preparation", category: "Makeup" },
  { src: bodySpa, caption: "Hot Stone Therapy", category: "Spa" },
  { src: facialSpa, caption: "Premium Skincare Ritual", category: "Facial" },
  { src: aromatherapy, caption: "Aromatherapy Suite", category: "Spa" },
  { src: coupleSpa, caption: "Couple's Romance Package", category: "Spa" },
  { src: mensGrooming, caption: "Men's Grooming Excellence", category: "Grooming" },
  { src: galleryWellness, caption: "Wellness & Meditation", category: "Wellness" },
  { src: branchExterior, caption: "Kalpana Branch Facade", category: "Interior" },
];

const categories = ["All", ...Array.from(new Set(gallery.map((g) => g.category)))];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<typeof gallery[0] | null>(null);

  const filtered = activeCategory === "All" ? gallery : gallery.filter((g) => g.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={heroSpa} alt="Gallery" className="absolute inset-0 w-full h-full object-cover" loading="eager" width={1920} height={1080} />
        <div className="absolute inset-0 bg-earth/65" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <p className="section-label text-gold mb-3">Visual Journey</p>
          <h1 className="font-display text-5xl md:text-6xl text-white">Gallery</h1>
          <div className="w-16 h-px bg-gradient-gold-rich mx-auto mt-4" />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-[72px] z-30 border-b border-sand bg-white/95 dark:bg-card/95 py-4 backdrop-blur-md">
        <div className="container mx-auto px-6 max-w-7xl overflow-x-auto">
          <div className="flex min-w-max gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-5 py-2 text-xs font-body font-medium transition-all ${
                  activeCategory === cat
                    ? "border-gold bg-gold text-earth shadow-gold"
                    : "border-sand bg-white dark:bg-card text-muted-foreground hover:border-gold hover:bg-gold-soft hover:text-gold-deep"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto max-w-7xl px-6 py-20">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-2xl border border-sand shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-luxury"
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                <div className="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-body">{item.caption}</p>
                  <span className="text-gold text-xs font-body tracking-wider uppercase">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl"
              loading="eager"
              width={1200}
              height={900}
            />
            <div className="text-center mt-4">
              <p className="text-white font-body text-sm">{lightbox.caption}</p>
              <span className="text-gold text-xs font-body tracking-wider uppercase">{lightbox.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
