import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Clock, Sparkles, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import salonHair from "@/assets/salon-hair.jpg";
import nailSpa from "@/assets/nail-spa.jpg";
import makupBridal from "@/assets/makeup-bridal.jpg";
import bodySpa from "@/assets/body-spa.jpg";
import facialSpa from "@/assets/facial-spa.jpg";
import coupleSpa from "@/assets/couple-spa.jpg";
import aromatherapy from "@/assets/aromatherapy.jpg";
import mensGrooming from "@/assets/mens-grooming.jpg";
import OfferPopups from "@/components/OfferPopups";
import heroSpa from "@/assets/hero-spa.jpg";
import galleryWellness from "@/assets/gallery-wellness.jpg";

type ServiceCategory = {
  id: string;
  title: string;
  navLabel: string;
  index: string;
  group: "Salon" | "Therapy" | "Wellness";
  audiences: ("Men" | "Women" | "Unisex")[];
  tagline: string;
  image: string;
  description: string;
  services: { name: string; variants: string; duration: string }[];
};

const serviceCategories: ServiceCategory[] = [
  {
    id: "hair",
    title: "Hair Services",
    navLabel: "Hair",
    index: "01",
    group: "Salon",
    audiences: ["Unisex"],
    tagline: "Crown Your Beauty",
    image: salonHair,
    description:
      "From precision cuts to transformative color treatments, our master stylists craft each look with artistry and expertise.",
    services: [
      { name: "Haircut", variants: "Men / Women / Kids", duration: "30–60 min" },
      { name: "Hair Styling", variants: "Blow dry, Curls, Straightening", duration: "45–90 min" },
      { name: "Hair Wash & Conditioning", variants: "", duration: "30–45 min" },
      { name: "Hair Spa", variants: "Deep conditioning, Repair", duration: "60–90 min" },
      { name: "Hair Smoothening / Rebonding / Keratin", variants: "", duration: "2–4 hours" },
      { name: "Hair Coloring", variants: "Global, Highlights, Balayage", duration: "2–5 hours" },
      { name: "Root Touch-up", variants: "", duration: "60–90 min" },
      { name: "Hair Extensions", variants: "", duration: "2–4 hours" },
      { name: "Scalp Treatments", variants: "Dandruff, Hair fall control", duration: "45–60 min" },
    ],
  },
  {
    id: "mens-grooming",
    title: "Men's Grooming",
    navLabel: "Men's Grooming",
    index: "02",
    group: "Salon",
    audiences: ["Men"],
    tagline: "Refined. Polished. Confident.",
    image: mensGrooming,
    description:
      "Premium grooming designed for modern men — expert haircuts, straight razor shaves and curated groom packages.",
    services: [
      { name: "Men's Haircut", variants: "Classic / Fade / Texture", duration: "30–60 min" },
      { name: "Straight Razor Shave", variants: "Hot towel + precision shave", duration: "30–45 min" },
      { name: "Beard Trimming & Shaping", variants: "Line-up / Styling", duration: "20–40 min" },
      { name: "Scalp Reset Treatment", variants: "Stress relief + deep cleanse", duration: "45–60 min" },
      { name: "Groom Packages", variants: "Cut + shave + beard ritual", duration: "2–3 hours" },
    ],
  },
  {
    id: "nails",
    title: "Nail Services",
    navLabel: "Nails",
    index: "03",
    group: "Salon",
    audiences: ["Women"],
    tagline: "Details That Dazzle",
    image: nailSpa,
    description:
      "Indulge in the finest nail artistry — from classic manicures to intricate nail art that tells your story.",
    services: [
      { name: "Manicure", variants: "Classic / Gel / Spa", duration: "30–60 min" },
      { name: "Pedicure", variants: "Classic / Spa / Medical", duration: "45–75 min" },
      { name: "Nail Art", variants: "", duration: "30–90 min" },
      { name: "Nail Extensions", variants: "Acrylic / Gel", duration: "60–90 min" },
      { name: "Nail Polish Application", variants: "Regular / Gel", duration: "20–30 min" },
      { name: "Cuticle Care", variants: "", duration: "15–20 min" },
    ],
  },
  {
    id: "makeup",
    title: "Makeup Services",
    navLabel: "Makeup",
    index: "04",
    group: "Salon",
    audiences: ["Women"],
    tagline: "Your Most Radiant Self",
    image: makupBridal,
    description:
      "Professional makeup artistry for every occasion — from intimate gatherings to your most special moments.",
    services: [
      { name: "Party Makeup", variants: "", duration: "60–90 min" },
      { name: "Bridal Makeup", variants: "", duration: "2–3 hours" },
      { name: "Engagement / Reception Makeup", variants: "", duration: "90–150 min" },
      { name: "HD / Airbrush Makeup", variants: "", duration: "90–120 min" },
      { name: "Eye Makeup / Hairstyling Combos", variants: "", duration: "60–90 min" },
      { name: "Makeup Trials", variants: "", duration: "60–90 min" },
    ],
  },
  {
    id: "skin",
    title: "Skin & Beauty",
    navLabel: "Skin",
    index: "05",
    group: "Therapy",
    audiences: ["Women"],
    tagline: "Reveal Your Radiance",
    image: facialSpa,
    description:
      "Comprehensive skin treatments crafted to reveal your most luminous, healthy skin.",
    services: [
      { name: "Facials", variants: "Basic / Advanced / Anti-aging", duration: "45–90 min" },
      { name: "Clean-ups", variants: "", duration: "30–45 min" },
      { name: "Bleach", variants: "", duration: "20–30 min" },
      { name: "Threading", variants: "Eyebrows, Upper lip, Face", duration: "10–30 min" },
      { name: "Waxing", variants: "Full body / Half / Rica / Chocolate wax", duration: "30–120 min" },
      { name: "Body Polishing", variants: "", duration: "60–90 min" },
    ],
  },
  {
    id: "body",
    title: "Body Treatments",
    navLabel: "Body",
    index: "06",
    group: "Therapy",
    audiences: ["Unisex"],
    tagline: "Surrender to Serenity",
    image: bodySpa,
    description:
      "Transcendent body rituals that dissolve stress, restore balance and leave you utterly transformed.",
    services: [
      { name: "Full Body Spa", variants: "", duration: "2–3 hours" },
      { name: "Body Massage", variants: "Relaxation / Deep Tissue / Swedish", duration: "60–90 min" },
      { name: "Aromatherapy Massage", variants: "", duration: "60–90 min" },
      { name: "Hot Stone Therapy", variants: "", duration: "75–90 min" },
      { name: "Body Scrubs & Wraps", variants: "", duration: "60–90 min" },
      { name: "Detox Treatments", variants: "", duration: "90–120 min" },
    ],
  },
  {
    id: "facial-spa",
    title: "Facial Spa",
    navLabel: "Facial Spa",
    index: "07",
    group: "Therapy",
    audiences: ["Women"],
    tagline: "Nourish. Renew. Glow.",
    image: aromatherapy,
    description:
      "Advanced facial spa treatments combining the finest ingredients with expert techniques for transformative results.",
    services: [
      { name: "Hydrating Facial", variants: "", duration: "60 min" },
      { name: "Anti-aging Facial", variants: "", duration: "75 min" },
      { name: "Brightening / Glow Facial", variants: "", duration: "60–75 min" },
      { name: "Acne Treatment Facial", variants: "", duration: "60–90 min" },
    ],
  },
  {
    id: "wellness",
    title: "Wellness & Relaxation",
    navLabel: "Wellness",
    index: "08",
    group: "Wellness",
    audiences: ["Unisex"],
    tagline: "Rest. Restore. Revive.",
    image: galleryWellness,
    description:
      "Dedicated wellness therapies to ease tension, restore balance and reconnect you with your inner calm.",
    services: [
      { name: "Head Massage", variants: "", duration: "30–45 min" },
      { name: "Foot Reflexology", variants: "", duration: "45–60 min" },
      { name: "Back & Shoulder Massage", variants: "", duration: "45–60 min" },
      { name: "Stress Relief Therapy", variants: "", duration: "60–90 min" },
    ],
  },
  {
    id: "premium",
    title: "Premium Packages",
    navLabel: "Packages",
    index: "09",
    group: "Wellness",
    audiences: ["Men", "Women", "Unisex"],
    tagline: "The Ultimate Indulgence",
    image: coupleSpa,
    description:
      "Curated luxury packages for life's most precious moments — bridal, groom, couple, and membership offerings.",
    services: [
      { name: "Bridal Packages", variants: "Complete bridal ritual", duration: "Full day" },
      { name: "Pre-bridal Grooming Packages", variants: "Multiple sessions", duration: "4–6 sessions" },
      { name: "Groom Packages", variants: "Complete men's grooming", duration: "4–6 hours" },
      { name: "Couple Spa Packages", variants: "For two", duration: "3–4 hours" },
      { name: "Membership Plans", variants: "Monthly / Annual", duration: "Ongoing" },
      { name: "Home Service", variants: "On demand, selected services", duration: "As per service" },
    ],
  },
];

export default function ServicesPage() {
  const [openCategory, setOpenCategory] = useState<string | null>("hair");
  const [audience, setAudience] = useState<"All" | "Women" | "Men" | "Unisex">("All");
  const { hash } = useLocation();

  const getServiceAudienceLabel = (category: ServiceCategory, serviceName: string) => {
    // Premium packages contain mixed offerings; map by intent keywords.
    if (category.id === "premium") {
      const name = serviceName.toLowerCase();
      if (name.includes("bridal")) return "For Women";
      if (name.includes("groom")) return "For Men";
      if (name.includes("couple")) return "Unisex";
      if (name.includes("home")) return "Unisex";
      if (name.includes("membership")) return "Unisex";
      return "Unisex";
    }

    const hasWomen = category.audiences.includes("Women");
    const hasMen = category.audiences.includes("Men");

    if (hasWomen && !hasMen) return "For Women";
    if (hasMen && !hasWomen) return "For Men";
    return "Unisex";
  };

  const scrollToCategory = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const currentY = window.scrollY || window.pageYOffset;
    const offset = 120; // navbar + category rail height

    window.scrollTo({
      top: currentY + rect.top - offset,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const hashId = hash.replace("#", "");
    if (!hashId) return;
    if (serviceCategories.some((c) => c.id === hashId)) {
      const category = serviceCategories.find((c) => c.id === hashId);
      const inferredAudience =
        category?.audiences?.length === 1
          ? category.audiences[0]
          : category?.audiences?.includes("Men") &&
              !category.audiences.includes("Women") &&
              !category.audiences.includes("Unisex")
            ? "Men"
            : category?.audiences?.includes("Women") &&
                !category.audiences.includes("Men") &&
                !category.audiences.includes("Unisex")
              ? "Women"
              : category?.audiences?.includes("Unisex") &&
                  !category.audiences.includes("Men") &&
                  !category.audiences.includes("Women")
                ? "Unisex"
                : "All";

      // Deep-link should always show the requested category clearly,
      // even when the URL hash changes without remounting this page.
      setAudience(inferredAudience);
      setOpenCategory(hashId);
      requestAnimationFrame(() => scrollToCategory(hashId));
    }
  }, [hash, scrollToCategory]);

  const visibleCategories = serviceCategories.filter((cat) => {
    if (audience === "All") return true;
    if (audience === "Unisex") return cat.audiences.includes("Unisex");
    return cat.audiences.includes(audience);
  });

  useEffect(() => {
    if (!visibleCategories.length) return;
    if (!openCategory || !visibleCategories.some((c) => c.id === openCategory)) {
      setOpenCategory(visibleCategories[0].id);
    }
  }, [audience, visibleCategories, openCategory]);

  const toggleCategory = (id: string) => {
    setOpenCategory((prev) => (prev === id ? null : id));
  };

  const selectCategory = (id: string) => {
    setOpenCategory(id);
    scrollToCategory(id);
  };

  return (
    <div className="min-h-screen bg-ivory dark:bg-background pt-20">
      <OfferPopups />
      {/* Hero */}
      <div className="relative h-[min(52vh,420px)] min-h-[280px] overflow-hidden md:h-[min(48vh,480px)]">
        <img
          src={heroSpa}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-earth/80 via-earth/55 to-earth/35" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="section-label mb-3 text-gold-light">Our Offerings</p>
          <h1 className="font-display text-4xl text-white md:text-6xl">The Service Collection</h1>
          <p className="mt-4 max-w-xl font-body text-sm text-white/85 md:text-base">
            Kalpana — a curated catalogue of rituals. Browse by category, explore treatments, and book with confidence.
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-gold-rich" />
        </div>
      </div>

      {/* Category rail — premium segmented control + scroll */}
      <nav className="sticky top-[72px] z-30 bg-gradient-to-b from-ivory/96 via-ivory/94 to-ivory dark:from-background/98 dark:via-background/96 dark:to-background/94 backdrop-blur-xl">
        <div className="container mx-auto max-w-7xl px-4 py-3 md:px-6">
          <div className="rounded-[1.75rem] border border-sand/70 bg-white/92 dark:bg-card/94 shadow-[0_18px_45px_rgba(74,62,56,0.14)] px-4 py-3 md:px-6">
            {/* Audience selector */}
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3 md:mb-4">
              <p className="text-[10px] font-body uppercase tracking-[0.22em] text-muted-foreground">
                Tailored for
              </p>
              <div className="flex flex-wrap gap-2">
                {(["All", "Women", "Men", "Unisex"] as const).map((key) => {
                  const active = audience === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setAudience(key)}
                      className={[
                        "rounded-full border px-4 py-2 text-[11px] font-body font-semibold uppercase tracking-[0.14em] transition-all",
                        active
                          ? "border-gold bg-gold text-earth shadow-soft"
                          : "border-sand bg-white/60 dark:bg-card/70 text-muted-foreground hover:border-gold hover:bg-gold-soft/20 hover:text-gold-deep",
                      ].join(" ")}
                    >
                      {key}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mb-2 hidden items-center justify-between md:flex">
              <p className="text-[10px] font-body uppercase tracking-[0.22em] text-muted-foreground">Browse categories</p>
              <p className="font-body text-xs text-muted-foreground">
                <span className="text-gold-deep">{visibleCategories.length}</span> collections
              </p>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-6 bg-gradient-to-r from-ivory/100 via-ivory/90 to-transparent dark:from-background/100 dark:via-background/95 md:w-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-6 bg-gradient-to-l from-ivory/100 via-ivory/90 to-transparent dark:from-background/100 dark:via-background/95 md:w-10" />
              <div
                className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 pt-0.5 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap md:justify-center md:overflow-visible [&::-webkit-scrollbar]:hidden"
                role="tablist"
                aria-label="Service categories"
              >
                {visibleCategories.map((cat) => {
                  const active = openCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => selectCategory(cat.id)}
                      className={cn(
                        "group relative flex min-w-[118px] snap-start flex-col rounded-2xl border px-3.5 py-2.5 text-left transition-all duration-300 md:min-w-0 md:px-4 md:py-3",
                        active
                          ? "border-gold/60 bg-white dark:bg-card shadow-soft ring-1 ring-gold/20"
                          : "border-sand/80 bg-white/70 dark:bg-card/60 hover:border-gold/40 hover:bg-gold-soft/18 dark:hover:bg-card/90",
                      )}
                    >
                      <span className="font-body text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {cat.index}
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 font-display text-[15px] leading-tight md:text-base",
                          active ? "text-heading" : "text-body group-hover:text-heading",
                        )}
                      >
                        {cat.navLabel}
                      </span>
                      {active && (
                        <span className="absolute bottom-2 left-1/2 h-[2px] w-10 -translate-x-1/2 rounded-full bg-gold" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Editorial catalogue */}
      <div className="container mx-auto max-w-7xl space-y-16 px-4 py-14 md:space-y-20 md:px-6 md:py-20">
        {visibleCategories.map((category, i) => {
          const expanded = openCategory === category.id;
          const reverse = i % 2 === 1;

          return (
            <section
              key={category.id}
              id={category.id}
              className={cn(
                "scroll-mt-[7.5rem] rounded-[2rem] border border-sand/60 bg-white dark:bg-card p-5 shadow-soft md:p-8 lg:p-10",
                i % 2 === 1 &&
                  "bg-gradient-to-br from-white via-ivory to-sage-soft/25 dark:from-earth-deep/60 dark:via-background/40 dark:to-sage-soft/15",
              )}
            >
              <div
                className={cn(
                  "grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10",
                  reverse && "lg:[direction:rtl] [&>*]:[direction:ltr]",
                )}
              >
                {/* Visual */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/5] max-h-[420px] overflow-hidden rounded-3xl md:aspect-[16/11] md:max-h-none lg:aspect-[4/5] lg:max-h-[440px]">
                    <img
                      src={category.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.03]"
                      loading="lazy"
                      width={900}
                      height={1100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                      <p className="section-label mb-2 text-gold-light">{category.tagline}</p>
                      <h2 className="font-display text-3xl text-white md:text-4xl">{category.title}</h2>
                    </div>
                  </div>
                </div>

                {/* Copy + action */}
                <div className="flex flex-col justify-center lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-sand bg-ivory px-3 py-1 font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {category.group}
                    </span>
                    <span className="font-body text-xs text-muted-foreground">Collection {category.index}</span>
                  </div>
                  <p className="mt-5 font-body text-base leading-relaxed text-muted-foreground md:text-[17px]">
                    {category.description}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => toggleCategory(category.id)}
                      className="btn-gold inline-flex items-center gap-2 text-xs"
                    >
                      {expanded ? "Hide treatment list" : "View treatment list"}
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform duration-300", expanded && "rotate-180")}
                      />
                    </button>
                    <Link
                      to="/branches"
                      className="btn-outline-gold inline-flex items-center gap-2 text-xs py-2.5 px-5"
                    >
                      Find a branch <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Treatment list — editorial table, not grid of boxes */}
              <div
                className={cn(
                  "mt-10 overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-out",
                  expanded ? "max-h-[1500px] translate-y-0 opacity-100" : "max-h-0 -translate-y-2 opacity-0 pointer-events-none",
                )}
                aria-hidden={!expanded}
              >
                <div className="border-t border-sand pt-10">
                  <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="section-label mb-1">Included treatments</p>
                      <h3 className="font-display text-2xl text-heading md:text-3xl">What you can book</h3>
                    </div>
                    <p className="max-w-md font-body text-sm text-muted-foreground">
                      Timings are indicative; your therapist will confirm duration at consultation.
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-sand bg-ivory/50 dark:bg-sage-soft/10">
                    <ul className="divide-y divide-sand/80">
                      {category.services.map((service, idx) => (
                        <li
                          key={service.name}
                          className="group flex flex-col gap-3 px-5 py-5 transition-colors hover:bg-white/80 dark:hover:bg-card/80 md:flex-row md:items-baseline md:justify-between md:gap-8 md:px-8 md:py-6 animate-fade-in"
                          style={{ animationDelay: `${idx * 40}ms` }}
                        >
                          <div className="min-w-0 flex-1">
                            <h4 className="font-display text-lg text-heading md:text-xl">{service.name}</h4>
                            <div className="mt-2 flex flex-wrap items-center gap-2">
                              <span className="inline-flex items-center rounded-full border border-sand bg-white/60 dark:bg-card/60 px-3 py-1 text-[10px] font-body uppercase tracking-[0.2em] text-gold-deep">
                                {getServiceAudienceLabel(category, service.name)}
                              </span>
                            </div>
                            {service.variants ? (
                              <p className="mt-1 font-body text-sm text-muted-foreground">{service.variants}</p>
                            ) : null}
                          </div>
                          <div className="flex shrink-0 items-center gap-2 font-body text-xs uppercase tracking-[0.14em] text-gold-deep md:flex-col md:items-end md:gap-1 md:text-[11px]">
                            <span className="inline-flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" />
                              {service.duration}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-sand/80 pt-8">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Sparkles className="h-4 w-4 text-gold" />
                      <span className="font-body text-sm">Available at all nine Kalpana branches.</span>
                    </div>
                    <Link to="/branches" className="btn-gold text-xs py-2.5 px-5">
                      Book nearest location <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="bg-earth px-6 py-24 text-center">
        <p className="section-label mb-4 text-gold">Personalised for You</p>
        <h2 className="mb-6 font-display text-4xl text-white md:text-5xl">
          Can&apos;t decide? Let us curate
          <br />
          <span className="italic text-gold-light">your perfect treatment</span>
        </h2>
        <p className="mx-auto mb-8 max-w-xl font-body text-white/75">
          Our wellness consultants are here to craft a bespoke experience tailored to your skin, style, and soul.
        </p>
        <a href="tel:+919999999999" className="btn-gold">
          Call to Consult <ArrowRight className="h-4 w-4" />
        </a>
      </section>
    </div>
  );
}
