import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotAssistant from "@/components/ChatbotAssistant";
import ScrollProgress from "@/components/ScrollProgress";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import BlogPage from "./pages/BlogPage";
import BranchesPage from "./pages/BranchesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const AppLayout = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));
    sections.forEach((section) => section.classList.add("section-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ivory dark:bg-background">
          <div className="space-y-4 text-center">
            <div>
              <p className="section-label">Kalpana</p>
              <p className="mt-1 font-body text-xs uppercase tracking-[0.22em] text-muted-foreground">Spa &amp; Salon</p>
            </div>
            <div className="mx-auto h-px w-20 bg-gradient-gold-rich" />
          </div>
        </div>
      )}
      <ScrollToTop />
      <Navbar />
      <ScrollProgress />
      <main key={location.pathname} className="page-transition">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/branches" element={<BranchesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ChatbotAssistant />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
