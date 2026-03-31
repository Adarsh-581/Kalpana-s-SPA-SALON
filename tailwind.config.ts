import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Jost", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          deep: "hsl(var(--primary-deep))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /* ---- Extended Luxury Palette ---- */
        ivory: "hsl(var(--ivory))",
        beige: "hsl(var(--beige))",
        sand: "hsl(var(--sand))",
        taupe: "hsl(var(--taupe))",
        "taupe-deep": "hsl(var(--taupe-deep))",
        sage: {
          soft: "hsl(var(--sage-soft))",
          light: "hsl(var(--sage-light))",
          DEFAULT: "hsl(var(--sage))",
          deep: "hsl(var(--sage-deep))",
          dark: "hsl(var(--sage-dark))",
        },
        terracotta: "hsl(var(--terracotta))",
        clay: "hsl(var(--clay))",
        earth: "hsl(var(--earth-deep))",
        gold: {
          soft: "hsl(var(--gold-soft))",
          light: "hsl(var(--gold-light))",
          DEFAULT: "hsl(var(--gold))",
          deep: "hsl(var(--gold-deep))",
        },
        heading: "hsl(var(--text-heading))",
        body: "hsl(var(--text-body))",
        "text-muted": "hsl(var(--text-muted))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        gold: "var(--shadow-gold)",
        luxury: "var(--shadow-luxury)",
      },
      backgroundImage: {
        "gradient-gold": "var(--gradient-gold)",
        "gradient-gold-rich": "var(--gradient-gold-rich)",
        "gradient-sage": "var(--gradient-sage)",
        "gradient-earth": "var(--gradient-earth)",
        "gradient-dark": "var(--gradient-dark)",
        "gradient-luxury": "var(--gradient-luxury)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        fadeUp: { from: { opacity: "0", transform: "translateY(24px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
