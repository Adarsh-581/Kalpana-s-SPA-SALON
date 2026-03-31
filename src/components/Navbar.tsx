import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import BrandMark from "@/components/BrandMark";

const NAV_LOCK_PX = 56;
const LOGO_SCROLL_RANGE = 120;

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Men's Grooming", href: "/services#mens-grooming", audience: "Men" },
      { label: "Nail Services", href: "/services#nails", audience: "Women" },
      { label: "Makeup Services", href: "/services#makeup", audience: "Women" },
      { label: "Skin & Beauty", href: "/services#skin", audience: "Women" },
      { label: "Facial Spa", href: "/services#facial-spa", audience: "Women" },
      { label: "Hair Services", href: "/services#hair", audience: "Unisex" },
      { label: "Body Treatments", href: "/services#body", audience: "Unisex" },
      { label: "Wellness & Relaxation", href: "/services#wellness", audience: "Unisex" },
      { label: "Premium Packages", href: "/services#premium", audience: "Shared" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Branches", href: "/branches" },
];

const navLinkClass = (opts: {
  scrolled: boolean;
  active?: boolean;
}) =>
  cn(
    "relative text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300",
    opts.scrolled
      ? opts.active
        ? "text-gold-deep"
        : "text-body hover:text-gold-deep"
      : opts.active
        ? "text-gold-light"
        : "text-white hover:text-gold-light",
  );

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [playLogoReveal, setPlayLogoReveal] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const lastY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const location = useLocation();

  const scrolled = scrollY > NAV_LOCK_PX;
  const logoProgress = Math.min(scrollY / LOGO_SCROLL_RANGE, 1);
  const logoScale = scrolled ? 1 : 1.06 - logoProgress * 0.06;

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (lastY.current <= NAV_LOCK_PX && y > NAV_LOCK_PX) {
        setPlayLogoReveal(true);
        window.setTimeout(() => setPlayLogoReveal(false), 950);
      }
      lastY.current = y;
      setScrollY(y);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const stored = window.localStorage.getItem("kalpana-theme");
    // Default to light on first visit; only respect an explicit stored value.
    const initial = stored === "dark" ? "dark" : "light";
    setTheme(initial);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("kalpana-theme", theme);
  }, [theme]);

  return (
    <>
      <nav
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-[padding,background,box-shadow] duration-500 ease-out",
          scrolled ? "bg-card/95 py-3 shadow-[0_8px_32px_rgba(46,32,20,0.08)] backdrop-blur-xl" : "bg-transparent py-5",
        )}
      >
        {/* Readability scrim under nav on hero — keeps links + logo zone legible on bright photography */}
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 -z-10 h-36 bg-gradient-to-b from-black/55 via-black/25 to-transparent transition-opacity duration-500",
            scrolled && "opacity-0",
          )}
          aria-hidden
        />

        <div className="container relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Logo — frosted plate on transparent nav; compact + center-wipe when bar locks */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            <div
              className={cn(
                "origin-left transition-all duration-500 ease-out",
                !scrolled &&
                  "rounded-2xl bg-white/95 px-3 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.18)] ring-1 ring-black/8 backdrop-blur-md",
                scrolled && "rounded-none bg-transparent px-0 py-0 shadow-none ring-0",
              )}
              style={{ transform: `scale(${logoScale})` }}
            >
              <div
                className={cn(
                  "overflow-hidden",
                  playLogoReveal && "animate-nav-logo-reveal",
                )}
              >
                <BrandMark compact className="px-1" />
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-7 lg:flex xl:gap-9">
            {navItems.map((item) =>
              item.children ? (
                <li key={item.label} className="relative group/drop">
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-1.5 pb-1 transition-colors duration-200",
                      navLinkClass({ scrolled, active: location.pathname === item.href }),
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-3 w-3 opacity-70 transition-transform duration-300 group-hover/drop:rotate-180" />
                  </Link>
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300",
                      location.pathname === item.href ? "w-full" : "w-0 group-hover/drop:w-full",
                    )}
                  />

                  {/* Mega-style dropdown — solid surface, high contrast (no washed text on photo) */}
                  <div
                    className="invisible absolute left-1/2 top-full z-[60] w-[min(100vw-2rem,22rem)] -translate-x-1/2 translate-y-1 scale-[0.98] pt-3 opacity-0 transition-all duration-200 ease-out group-hover/drop:visible group-hover/drop:translate-y-0 group-hover/drop:scale-100 group-hover/drop:opacity-100"
                    style={{ pointerEvents: "auto" }}
                  >
                    <div className="rounded-2xl border border-sand bg-card p-1 shadow-[0_24px_60px_rgba(46,32,20,0.18)] ring-1 ring-black/5">
                      <div className="max-h-[min(70vh,520px)] overflow-y-auto rounded-xl p-3">
                        {(["Men", "Women", "Unisex"] as const).map((aud) => {
                          const list = (item.children ?? []).filter((child: any) => child.audience === aud || child.audience === "Shared");
                          if (!list.length && aud !== "Unisex") return null;

                          const heading =
                            aud === "Unisex" ? "Unisex" : aud === "Men" ? "For Men" : "For Women";

                          return (
                            <div key={aud} className="mb-4 last:mb-0">
                              <p className="px-2 pb-2 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                                {heading}
                              </p>
                              <ul className="space-y-0.5">
                                {list.map((child: any) => (
                                  <li key={child.label}>
                                    <Link
                                      to={child.href}
                                      onClick={() => setServicesOpen(false)}
                                      className="block rounded-xl px-3 py-2.5 font-body text-[13px] font-medium leading-snug text-heading transition-colors duration-150 hover:bg-gold-soft hover:text-gold-deep"
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={cn(
                      navLinkClass({ scrolled, active: location.pathname === item.href }),
                      "relative inline-block pb-1 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300",
                      location.pathname === item.href ? "after:w-full" : "after:w-0 hover:after:w-full",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          {/* CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <button
              type="button"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              aria-label="Toggle dark mode"
              className={cn(
                "rounded-full border px-3 py-2 text-xs font-body tracking-[0.14em] uppercase transition-colors",
                "flex items-center gap-2",
                scrolled ? "border-sand bg-white/10 text-gold-deep hover:bg-gold-soft dark:bg-white/5 dark:text-gold-light" : "border-white/20 bg-white/10 text-white hover:bg-white/20",
              )}
            >
              {theme === "dark" ? (
                <>
                  <Sun className="h-3.5 w-3.5" />
                  Light
                </>
              ) : (
                <>
                  <Moon className="h-3.5 w-3.5" />
                  Dark
                </>
              )}
            </button>
            <a
              href="tel:+919999999999"
              className={cn(
                "flex items-center gap-1.5 text-xs font-medium tracking-wide transition-colors",
                scrolled ? "text-muted-foreground hover:text-gold-deep dark:hover:text-gold-light" : "text-white/95 drop-shadow-md hover:text-gold-light",
              )}
            >
              <Phone className="h-4 w-4 shrink-0" />
              +91 99999 99999
            </a>
            <Link to="/services" className="btn-gold py-2.5 text-[10px] tracking-[0.14em]">
              Book Now
            </Link>
          </div>

          <button
            className={cn(
              "rounded-xl p-2 transition-colors lg:hidden",
              scrolled
                ? "hover:bg-muted dark:hover:bg-muted"
                : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 dark:bg-white/10 dark:text-gold-light dark:hover:bg-white/10",
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-heading" />
            ) : (
              <Menu className={cn("h-5 w-5", scrolled ? "text-heading" : "text-white")} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 transition-all duration-300 lg:hidden",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-80 bg-card shadow-luxury transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="h-full overflow-y-auto p-6 pt-24">
            <div className="mb-8 border-b border-sand pb-6">
              <BrandMark />
            </div>
            <div className="mb-6 flex items-center justify-between gap-3 rounded-2xl border border-sand/60 bg-card/70 px-4 py-3">
              <p className="text-[10px] font-body uppercase tracking-[0.22em] text-muted-foreground">Theme</p>
              <button
                type="button"
                onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
                aria-label="Toggle dark mode"
                className="flex items-center gap-2 rounded-full border border-sand bg-white/10 px-3 py-2 text-xs font-body font-semibold text-gold-deep transition-colors hover:bg-gold-soft dark:bg-white/5 dark:text-gold-light"
              >
                {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
                {theme === "dark" ? "Light" : "Dark"}
              </button>
            </div>
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-body font-medium text-heading transition-colors hover:bg-gold-soft"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")}
                        />
                      </button>
                      {servicesOpen && (
                        <div className="mt-1 space-y-4 pl-3">
                          <Link
                            to="/services"
                            className="block rounded-xl px-4 py-2.5 font-body text-sm text-body transition-colors hover:bg-gold-soft hover:text-gold-deep"
                            onClick={() => {
                              setMobileOpen(false);
                              setServicesOpen(false);
                            }}
                          >
                            View all services
                          </Link>

                          {(["Men", "Women", "Unisex"] as const).map((aud) => {
                            const heading = aud === "Unisex" ? "Unisex" : aud === "Men" ? "For Men" : "For Women";
                            const list = item.children.filter(
                              (child: any) =>
                                child.audience === aud ||
                                (aud !== "Unisex" && child.audience === "Shared") ||
                                (aud === "Unisex" && child.audience === "Shared")
                            );

                            // Keep dropdown clean on mobile: if nothing for that audience, skip.
                            if (!list.length) return null;

                            return (
                              <div key={aud} className="space-y-1">
                                <p className="px-2 pb-1 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                                  {heading}
                                </p>
                                <div className="space-y-0.5">
                                  {list.map((child: any) => (
                                    <Link
                                      key={child.label}
                                      to={child.href}
                                      className="block rounded-xl px-4 py-2.5 font-body text-sm text-body transition-colors hover:bg-gold-soft hover:text-gold-deep"
                                      onClick={() => {
                                        setMobileOpen(false);
                                        setServicesOpen(false);
                                      }}
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block rounded-xl px-4 py-3 font-body font-medium text-heading transition-colors hover:bg-gold-soft hover:text-gold-deep"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3 border-t border-sand pt-6">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 px-4 py-3 font-body text-body transition-colors hover:text-gold-deep"
              >
                <Phone className="h-4 w-4" />
                +91 99999 99999
              </a>
              <Link to="/services" className="btn-gold w-full justify-center">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
