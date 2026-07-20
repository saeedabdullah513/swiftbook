import logoFull from "@/assets/logo-full.png";
import logoWhite from "@/assets/logo-white.png";
import v2LogoHorizontal from "@/assets/v2/logo-horizontal.png";
import v2LogoStacked from "@/assets/v2/logo-stacked.png";
import v2Monogram from "@/assets/v2/monogram.png";
import { useIsV2 } from "@/hooks/use-v2";

type Props = {
  className?: string;
  variant?: "color" | "white";
  /** V2 only: "horizontal" (navbar) | "stacked" (footer) | "monogram" */
  v2Asset?: "horizontal" | "stacked" | "monogram";
};

export function Logo({ className = "h-10 w-auto", variant = "color", v2Asset = "horizontal" }: Props) {
  const isV2 = useIsV2();

  if (isV2) {
    const src = v2Asset === "stacked" ? v2LogoStacked
      : v2Asset === "monogram" ? v2Monogram
      : v2LogoHorizontal;
    return (
      <img
        src={src}
        alt="Swift Book Marketing"
        className={className}
        style={variant === "white" ? { filter: "brightness(0) invert(1)" } : undefined}
      />
    );
  }

  return (
    <img
      src={variant === "white" ? logoWhite : logoFull}
      alt="Swift Book Marketing"
      className={className}
    />
  );
}
