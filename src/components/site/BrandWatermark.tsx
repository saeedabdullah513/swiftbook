import markWhite from "@/assets/brand-mark-mono.png";
import markNavy from "@/assets/brand-mark-navy.png";

type Props = {
  className?: string;
  opacity?: number;
  /** white = dark backgrounds; navy = light/white sections */
  variant?: "white" | "navy";
};

/** Decorative brand mark — absolute, non-interactive, no layout impact. */
export function BrandWatermark({
  className = "",
  opacity = 0.06,
  variant = "white",
}: Props) {
  return (
    <img
      src={variant === "navy" ? markNavy : markWhite}
      alt=""
      aria-hidden
      draggable={false}
      className={`pointer-events-none select-none absolute z-0 max-w-none ${className}`}
      style={{ opacity }}
    />
  );
}
