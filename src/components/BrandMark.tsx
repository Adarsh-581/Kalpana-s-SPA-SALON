import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
  inverse?: boolean;
};

export default function BrandMark({ className, compact = false, inverse = false }: BrandMarkProps) {
  return (
    <div className={cn("inline-flex flex-col", className)}>
      <div className="flex items-center gap-2">
        {!compact && (
          <span
            className={cn(
              "h-px w-5",
              inverse ? "bg-gold-light/70" : "bg-gold/60"
            )}
            aria-hidden
          />
        )}
        <p
          className={cn(
            "font-display leading-none tracking-[0.16em]",
            compact ? "text-[1.05rem]" : "text-[1.22rem]",
            inverse ? "text-white" : "text-heading"
          )}
        >
          KALPANA
        </p>
        {!compact && (
          <span
            className={cn(
              "h-px w-5",
              inverse ? "bg-gold-light/70" : "bg-gold/60"
            )}
            aria-hidden
          />
        )}
      </div>
      <p
        className={cn(
          "mt-1 font-body uppercase tracking-[0.34em]",
          compact ? "text-[0.48rem]" : "text-[0.54rem]",
          inverse ? "text-gold-light/90" : "text-gold-deep"
        )}
      >
        SPA &amp; SALON
      </p>
    </div>
  );
}
