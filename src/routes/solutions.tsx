import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Marketing Solutions — Swift Book Marketing" },
      { name: "description", content: "Discoverability, authority, engagement, and conversion services organized around the outcome your book needs." },
    ],
  }),
  component: Solutions,
});

const categories = [
  {
    name: "Discoverability",
    tagline: "Help the right readers find the book on the platforms that matter.",
    services: ["Amazon optimization", "Book SEO", "Metadata strategy", "Website SEO", "Reader research"],
  },
  {
    name: "Authority",
    tagline: "Position the author as credible in the categories that shape a career.",
    services: ["Public relations", "Thought leadership", "Media outreach", "Podcast outreach", "Professional positioning"],
  },
  {
    name: "Engagement",
    tagline: "Grow and hold the audience between books.",
    services: ["Social media strategy", "Email marketing", "Reader communities", "Content development"],
  },
  {
    name: "Conversion",
    tagline: "Turn interest into ownership on the pages that sell the book.",
    services: ["Author websites", "Book landing pages", "Advertising campaigns", "Video trailers", "Retailer-page optimization"],
  },
];

export function Solutions() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="container-editorial py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3"><span className="rule" /><span className="eyebrow">Marketing Solutions</span></div>
          <h1 className="mt-4 text-5xl lg:text-6xl">Services organized around the outcome, not the invoice.</h1>
          <p className="mt-6 text-lg text-ink/70">
            Every service below is delivered inside a campaign — never sold as a
            standalone package unless it's what your book actually needs.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {categories.map((c) => (
            <div key={c.name} className="rounded-sm border border-warm-gray bg-card p-8 lg:p-10">
              <div className="eyebrow">Category</div>
              <h2 className="mt-3 font-serif text-3xl text-navy">{c.name}</h2>
              <p className="mt-3 text-ink/70">{c.tagline}</p>
              <ul className="mt-6 divide-y divide-warm-gray border-t border-warm-gray">
                {c.services.map((s) => (
                  <li key={s} className="py-3 text-sm text-ink/85 flex items-center justify-between">
                    {s}
                    <span className="text-ink/40 text-xs">Included in scoping</span>
                  </li>
                ))}
              </ul>
              <Link to="/assessment" className="mt-8 inline-flex items-center gap-2 text-sm text-navy">
                Discuss this in an assessment <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
