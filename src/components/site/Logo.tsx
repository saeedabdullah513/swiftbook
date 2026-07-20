import logoFull from "@/assets/logo-full.png";
import logoWhite from "@/assets/logo-white.png";

type Props = {
  className?: string;
  variant?: "color" | "white";
};

export function Logo({ className = "h-10 w-auto", variant = "color" }: Props) {
  return (
    <img
      src={variant === "white" ? logoWhite : logoFull}
      alt="Swift Book Marketing"
      className={className}
    />
  );
}
