import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Ticket, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Offer = {
  id: "festival-rituals" | "gift-card";
  kicker: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryAction?: "switch-to-next";
  backgroundVariant: "festival" | "gift";
  icon: ReactNode;
};

export default function OfferPopups() {
  const { pathname } = useLocation();
  const storageKey = `kalpana-offer-shown:${pathname}`;

  const offers = useMemo<Offer[]>(
    () => [
      {
        id: "festival-rituals",
        kicker: "Festival Rituals Offer",
        title: "Glow through the rituals",
        description:
          "Limited-time festival treatments curated for luminous skin and calm energy. Step into a refined experience—exactly when you need it.",
        ctaLabel: "Explore Rituals",
        ctaHref: "/services#facial-spa",
        secondaryLabel: "Next: Gift Card",
        secondaryAction: "switch-to-next",
        backgroundVariant: "festival",
        icon: <Sparkles className="h-4 w-4" />,
      },
      {
        id: "gift-card",
        kicker: "Gift Card Offer",
        title: "A gift that feels like luxury",
        description:
          "Share the Kalpana experience with a premium gift card. Perfect for birthdays, celebrations, and moments that deserve a ritual.",
        ctaLabel: "Get Gift Card",
        ctaHref: "/branches",
        secondaryLabel: "Close",
        backgroundVariant: "gift",
        icon: <Ticket className="h-4 w-4" />,
      },
    ],
    [],
  );

  const [open, setOpen] = useState(false);
  const [offerIndex, setOfferIndex] = useState(0);
  const [switchAnimKey, setSwitchAnimKey] = useState(0);

  const activeOffer = offers[offerIndex];

  // Strategic timing:
  // - do NOT open immediately on page load
  // - open 5 seconds after the user's first scroll interaction
  // - but ONLY once per refresh (store flag in sessionStorage)
  useEffect(() => {
    if (window.sessionStorage.getItem(storageKey) === "1") return;

    let scheduled = false;
    let timeoutId: number | null = null;

    const onScroll = () => {
      if (open) return;
      if (scheduled) return;
      if (window.scrollY < 40) return; // ignore tiny scroll/initial jitter

      scheduled = true;
      timeoutId = window.setTimeout(() => {
        setOpen(true);
        window.sessionStorage.setItem(storageKey, "1");
      }, 5000);

      window.removeEventListener("scroll", onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [open, storageKey]);

  useEffect(() => {
    if (!open) return;
    // Be strategic: advance to the second offer after the user has had a moment to read.
    if (offerIndex !== 0) return;
    const t = window.setTimeout(() => {
      setOfferIndex(1);
      setSwitchAnimKey((k) => k + 1);
    }, 9000);
    return () => window.clearTimeout(t);
  }, [open, offerIndex]);

  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const backgroundStyle =
    activeOffer.backgroundVariant === "festival"
      ? {
          backgroundImage:
            "radial-gradient(900px circle at 20% 20%, rgba(201,169,110,0.55), transparent 52%), radial-gradient(700px circle at 70% 25%, rgba(168,181,162,0.42), transparent 58%), linear-gradient(135deg, rgba(107,79,58,0.22), rgba(249,246,241,0.55))",
        }
      : {
          backgroundImage:
            "radial-gradient(900px circle at 25% 15%, rgba(201,169,110,0.60), transparent 50%), radial-gradient(700px circle at 78% 65%, rgba(200,155,123,0.35), transparent 58%), linear-gradient(135deg, rgba(46,32,20,0.36), rgba(249,246,241,0.45))",
        };

  return (
    <div
      aria-live="polite"
      className={cn(
        "fixed inset-0 z-[70] flex items-center justify-center px-4",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[2rem] border border-gold/25 bg-white/70 dark:bg-earth/55 shadow-luxury backdrop-blur-xl",
          "transition-all duration-500 ease-out",
          open ? "opacity-100 translate-y-0 animate-offer-pop" : "opacity-0 translate-y-4",
        )}
        role="group"
        aria-label="Limited-time offers"
        onMouseMove={(e) => {
          const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width; // 0..1
          const py = (e.clientY - rect.top) / rect.height; // 0..1
          const ry = (px - 0.5) * 5; // deg
          const rx = -(py - 0.5) * 3; // deg
          setTilt({ rx, ry });
        }}
        onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
        style={{
          transform: open ? `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` : undefined,
        }}
      >
        <div className="absolute inset-0" style={backgroundStyle} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/15 dark:from-black/25 dark:to-black/35" />
        <div className="absolute -left-20 top-0 h-32 w-52 rotate-12 rounded-full bg-gold-soft/40 blur-2xl dark:bg-gold/20" />
        <div className="absolute right-[-8%] bottom-[-10%] h-36 w-36 rounded-full bg-sage-soft/40 blur-2xl dark:bg-sage-soft/15" />

        {/* Decorative glint to make it feel premium, non-aggressive */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 animate-offer-glint" />

        <div className="relative p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white/60 dark:bg-white/10 px-3 py-1">
                <span className="text-gold-deep dark:text-gold-light">{activeOffer.icon}</span>
                <span className="text-[10px] font-body uppercase tracking-[0.22em] text-earth dark:text-white/90">
                  {activeOffer.kicker}
                </span>
              </div>

              <div key={switchAnimKey} className="mt-4 animate-offer-swap">
                <h3 className="font-display text-xl md:text-2xl text-earth dark:text-white leading-tight">
                  {activeOffer.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground dark:text-white/70">
                  {activeOffer.description}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-white/50 dark:bg-white/10 text-earth dark:text-white/90 transition-colors hover:bg-gold-soft/60 dark:hover:bg-white/15"
              aria-label="Close offers"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to={activeOffer.ctaHref}
              className="btn-gold inline-flex items-center justify-center gap-2"
              onClick={() => setOpen(false)}
            >
              {activeOffer.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              {activeOffer.secondaryAction === "switch-to-next" ? (
                <button
                  type="button"
                  className="btn-outline-gold inline-flex items-center justify-center gap-2"
                  onClick={() => {
                    setOfferIndex(1);
                    setSwitchAnimKey((k) => k + 1);
                  }}
                >
                  {activeOffer.secondaryLabel}
                </button>
              ) : (
                <button
                  type="button"
                  className="btn-outline-gold inline-flex items-center justify-center"
                  onClick={() => setOpen(false)}
                >
                  {activeOffer.secondaryLabel ?? "Close"}
                </button>
              )}
            </div>
          </div>

          <div className="mt-4 text-[10px] font-body uppercase tracking-[0.2em] text-gold-deep/70 dark:text-white/55">
            Tip: Save this ritual moment for your next visit.
          </div>
        </div>
      </div>
    </div>
  );
}

