import type { ReactNode } from "react";

export function TrustPage({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="rule" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h1 className="mt-4 text-4xl lg:text-5xl">{title}</h1>
      <div className="mt-8 space-y-5 text-ink/80 leading-relaxed [&_h3]:font-serif [&_h3]:text-2xl [&_h3]:text-navy [&_h3]:mt-10 [&_h3]:mb-3 [&_ul]:list-none [&_ul]:pl-0 [&_ul]:space-y-2 [&_li]:pl-5 [&_li]:relative before:[&_li]:content-[''] before:[&_li]:absolute before:[&_li]:left-0 before:[&_li]:top-3 before:[&_li]:h-px before:[&_li]:w-3 before:[&_li]:bg-brass [&_p]:text-[17px] [&_b]:text-navy [&_b]:font-medium">
        {children}
      </div>
    </div>
  );
}
