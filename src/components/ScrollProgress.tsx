import { useEffect, useMemo, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  const clamped = useMemo(() => Math.max(0, Math.min(progress, 1)), [progress]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const next = height > 0 ? scrollTop / height : 0;
      setProgress(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed left-0 top-0 z-[80] h-[2px] w-full pointer-events-none"
    >
      <div
        className="h-full w-full origin-left bg-gradient-gold-rich"
        style={{ transform: `scaleX(${clamped})`, opacity: clamped > 0.01 ? 1 : 0 }}
      />
    </div>
  );
}

