import markWhite from "@/assets/brand-mark-mono.png";
import markNavy from "@/assets/brand-mark-navy.png";
import v2Monogram from "@/assets/v2/monogram.png";
import { useIsV2 } from "@/hooks/use-v2";

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
  const isV2 = useIsV2();

  if (isV2) {
    const filterStyle: React.CSSProperties = variant === "white"
      ? { filter: "brightness(0) invert(1)", opacity }
      : { opacity };
    return (
      <img
        src={v2Monogram}
        alt=""
        aria-hidden
        draggable={false}
        className={`pointer-events-none select-none absolute z-0 max-w-none ${className}`}
        style={filterStyle}
      />
    );
  }

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
