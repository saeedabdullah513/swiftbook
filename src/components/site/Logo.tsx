import logoAsset from "@/assets/sbm-logo.png";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return <img src={logoAsset} alt="Swift Book Marketing" className={className} />;
}
