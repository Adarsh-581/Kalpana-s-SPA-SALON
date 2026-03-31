import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import blogHero from "@/assets/blog-hero.jpg";
import aromatherapy from "@/assets/aromatherapy.jpg";
import facialSpa from "@/assets/facial-spa.jpg";
import salonHair from "@/assets/salon-hair.jpg";
import bodySpa from "@/assets/body-spa.jpg";
import nailSpa from "@/assets/nail-spa.jpg";
import coupleSpa from "@/assets/couple-spa.jpg";

const posts = [
  {
    title: "The Art of Bridal Preparation: A Complete 6-Month Guide",
    excerpt: "From skin prep to the final bridal look — our expert timeline ensures you step into your most radiant self on the most important day of your life.",
    image: blogHero,
    category: "Bridal Beauty",
    date: "March 10, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    title: "Hot Stone Therapy: Ancient Wisdom Meets Modern Luxury",
    excerpt: "Discover why hot stone therapy remains one of our most requested treatments — and the science behind its transformative effects on body and mind.",
    image: bodySpa,
    category: "Wellness",
    date: "February 28, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    title: "The Balayage Breakdown: Why It's Still the Crown Jewel of Hair Color",
    excerpt: "Our lead colorist breaks down balayage — the technique, the maintenance, and why it works for every skin tone and hair type.",
    image: salonHair,
    category: "Hair",
    date: "February 14, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "Skincare Rituals for Glowing Skin: What Our Facialists Recommend",
    excerpt: "The daily and weekly rituals our estheticians swear by — from double cleansing to the magic of facial massage techniques.",
    image: facialSpa,
    category: "Skincare",
    date: "January 30, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    title: "Nail Trends 2025: What's Hot & How to Wear Them",
    excerpt: "From glazed donut to chrome and 3D florals — our nail specialists break down the most wearable trends of the year.",
    image: nailSpa,
    category: "Nail Art",
    date: "January 20, 2025",
    readTime: "4 min read",
    featured: false,
  },
  {
    title: "Couple's Spa: The Secret to a Deeper Connection",
    excerpt: "Shared rituals, synchronized relaxation, and the science of why couples who spa together, stay together.",
    image: coupleSpa,
    category: "Wellness",
    date: "January 5, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    title: "Aromatherapy at Home: Kalpana's Guide to Building Your Ritual",
    excerpt: "Our therapists share how to recreate the calming atmosphere of a luxury spa in your own home — with the right oils, techniques, and intentions.",
    image: aromatherapy,
    category: "Wellness",
    date: "December 20, 2024",
    readTime: "6 min read",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={blogHero} alt="Blog" className="absolute inset-0 w-full h-full object-cover" loading="eager" width={1920} height={1080} />
        <div className="absolute inset-0 bg-earth/65" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <p className="section-label text-gold mb-3">Luxury Living</p>
          <h1 className="font-display text-5xl md:text-6xl text-white">The Kalpana Journal</h1>
          <div className="w-16 h-px bg-gradient-gold-rich mx-auto mt-4" />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-20">

        {/* Featured Post */}
        <div className="luxury-card group mb-14 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={1200}
                height={900}
              />
              <div className="absolute top-5 left-5 bg-gold text-white text-xs font-body font-medium px-3 py-1.5 rounded-full">
                Featured
              </div>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gold-soft text-gold-deep text-xs font-body font-medium px-3 py-1 rounded-full">
                  {featured.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                  <Calendar className="w-3 h-3" /> {featured.date}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                  <Clock className="w-3 h-3" /> {featured.readTime}
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-heading leading-tight mb-4">
                {featured.title}
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <a href="#" className="btn-gold self-start">
                Read Article <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <a key={post.title} href="#" className="luxury-card group block overflow-hidden transition-all duration-300 hover:-translate-y-0.5">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={600}
                  height={400}
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-card/90 backdrop-blur-sm text-gold-deep text-xs font-body font-medium px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground font-body">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <h3 className="font-display text-xl text-heading mb-3 leading-snug group-hover:text-gold-deep transition-colors">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1.5 text-gold-deep text-sm font-body font-medium group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
