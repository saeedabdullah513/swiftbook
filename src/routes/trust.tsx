import { createFileRoute, Outlet, Link, useMatches } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/trust")({
  component: TrustLayout,
});

const pages = [
  { to: "/trust/ethical-marketing", label: "Ethical Marketing Standards" },
  { to: "/trust/author-rights", label: "Author Rights & Ownership" },
  { to: "/trust/pricing", label: "Pricing & Third-Party Costs" },
  { to: "/trust/results", label: "Results & Measurement" },
  { to: "/trust/guarantees", label: "What We Do Not Guarantee" },
] as const;

function TrustLayout() {
  const matches = useMatches();
  const current = matches[matches.length - 1]?.pathname;
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="container-editorial py-20 lg:py-24 grid gap-14 lg:grid-cols-[240px_1fr] items-start">
        <aside>
          <div className="eyebrow">Trust</div>
          <nav className="mt-4 flex flex-col gap-2">
            {pages.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className={`text-sm py-2 border-l-2 pl-4 transition-colors ${
                  current === p.to
                    ? "border-brass text-navy font-medium"
                    : "border-warm-gray text-ink/70 hover:text-navy hover:border-navy"
                }`}
              >
                {p.label}
              </Link>
            ))}
          </nav>
        </aside>
        <article className="prose-editorial">
          <Outlet />
        </article>
      </section>
      <Footer />
    </div>
  );
}
