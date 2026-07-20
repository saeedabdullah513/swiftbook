import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-parchment/85 backdrop-blur-md border-b border-warm-gray/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <Logo className="h-9 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-ink/80 hover:text-navy transition-colors relative group"
              activeProps={{ className: "text-navy" }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brass transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link
            to="/assessment"
            className="inline-flex items-center gap-2 rounded-sm bg-navy px-5 py-3 text-sm font-medium text-parchment hover:bg-navy-soft transition-colors"
          >
            Request a Book Assessment
          </Link>
        </div>
        <button
          className="lg:hidden inline-flex items-center justify-center rounded-sm border border-warm-gray p-2 text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-warm-gray bg-parchment">
          <div className="container-editorial py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-base text-ink/85"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/assessment"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-sm bg-navy px-5 py-3 text-sm font-medium text-parchment"
            >
              Request a Book Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
