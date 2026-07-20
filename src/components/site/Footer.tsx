import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Solutions",
    links: [
      { to: "/solutions", label: "Discoverability" },
      { to: "/solutions", label: "Authority" },
      { to: "/solutions", label: "Engagement" },
      { to: "/solutions", label: "Conversion" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/results", label: "Case Studies" },
      { to: "/process", label: "How It Works" },
      { to: "/insights", label: "Insights" },
    ],
  },
  {
    title: "Trust",
    links: [
      { to: "/trust/ethical-marketing", label: "Ethical Marketing Standards" },
      { to: "/trust/author-rights", label: "Author Rights & Ownership" },
      { to: "/trust/pricing", label: "Pricing & Third-Party Costs" },
      { to: "/trust/results", label: "Results & Measurement" },
      { to: "/trust/guarantees", label: "What We Do Not Guarantee" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-32 border-t border-warm-gray bg-stone/50">
      <div className="container-editorial py-16 grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo className="h-10 w-auto" />
          <p className="mt-6 max-w-sm text-sm text-ink/70 leading-relaxed">
            A strategic book marketing partner. We assess your book, audience, and
            objectives before recommending a campaign.
          </p>
          <div className="mt-6 text-sm text-ink/70 space-y-1">
            <p>5720 Lyndon B Johnson Fwy</p>
            <p>Dallas, TX 75230, United States</p>
            <p className="pt-2">
              <a href="tel:+13322587478" className="hover:text-navy">
                +1&nbsp;332&nbsp;258&nbsp;7478
              </a>
            </p>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="eyebrow">{c.title}</p>
            <ul className="mt-5 space-y-3">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-ink/80 hover:text-navy">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-warm-gray">
        <div className="container-editorial py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink/60">
          <p>© {new Date().getFullYear()} Swift Book Marketing. All rights reserved.</p>
          <p>No bestseller promises. Every campaign is built around your book.</p>
        </div>
      </div>
    </footer>
  );
}
