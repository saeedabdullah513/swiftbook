import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useV2Base } from "@/hooks/use-v2";

const baseLinks = [
  { to: "/solutions", label: "Marketing Solutions" },
  { to: "/goals", label: "Author Goals" },
  { to: "/results", label: "Results" },
  { to: "/process", label: "How It Works" },
  { to: "/insights", label: "Insights" },
  { to: "/about", label: "About" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const base = useV2Base();
  const isHome = pathname === base + "/";
  const onDark = isHome && !scrolled;

  const links = baseLinks.map((l) => ({ ...l, to: base + l.to }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        onDark
          ? "bg-transparent border-b border-transparent"
          : "bg-navy/95 backdrop-blur-md border-b border-white/10 shadow-lift"
      }`}
    >
      <div className="container-editorial flex items-center justify-between py-4">
        <Link to={base + "/"} className="flex items-center gap-3 shrink-0">
          <Logo variant={onDark ? "color" : "white"} className="h-9 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors relative group ${
                onDark ? "text-ink/80 hover:text-navy" : "text-white/90 hover:text-white"
              }`}
              activeProps={{ className: onDark ? "text-navy" : "text-white" }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brass transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link
            to={base + "/assessment"}
            className="inline-flex items-center gap-2 rounded-[6px] bg-brass px-5 py-3 text-sm font-medium text-white hover:bg-[var(--orange-hover)] hover:-translate-y-0.5 transition-all shadow-sm"
          >
            Request a Book Assessment
          </Link>
        </div>
        <button
          className={`lg:hidden inline-flex items-center justify-center rounded-[6px] border p-2 ${
            onDark ? "border-navy/20 text-navy" : "border-white/25 text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy">
          <div className="container-editorial py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-base text-white/90 hover:text-brass transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to={base + "/assessment"}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-[6px] bg-brass px-5 py-3 text-sm font-medium text-white hover:bg-[var(--orange-hover)] transition-colors"
            >
              Request a Book Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
