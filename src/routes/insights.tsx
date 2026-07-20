import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Swift Book Marketing" },
      { name: "description", content: "Editorial notes on book marketing strategy, positioning, and the state of the industry." },
    ],
  }),
  component: Insights,
});

const posts = [
  { cat: "Positioning", title: "Comparable titles are a strategy, not a formality.", excerpt: "Why the two books you name shape the entire launch — and how to choose them.", read: "8 min", date: "May 2025" },
  { cat: "Advertising", title: "The three questions before you spend a dollar on Amazon ads.", excerpt: "Metadata, category, and retail conversion decide whether ads amplify or leak.", read: "6 min", date: "Apr 2025" },
  { cat: "Media", title: "What a productive podcast tour actually looks like.", excerpt: "Fewer shows, tighter audience fit, and a plan for what happens after each episode.", read: "10 min", date: "Mar 2025" },
  { cat: "Ethics", title: "Reading between the lines of an author-services proposal.", excerpt: "Red flags, missing deliverables, and language that hides the real invoice.", read: "12 min", date: "Feb 2025" },
];

export function Insights() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="container-editorial py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3"><span className="rule" /><span className="eyebrow">Insights</span></div>
          <h1 className="mt-4 text-5xl lg:text-6xl">Editorial notes on marketing books well.</h1>
          <p className="mt-6 text-lg text-ink/70">
            Written by the strategists on your account. No SEO filler.
          </p>
        </div>
        <div className="mt-16 grid gap-px bg-warm-gray border border-warm-gray rounded-sm overflow-hidden md:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.title} to="/insights" className="group bg-card p-8 hover:bg-parchment transition-colors">
              <div className="flex items-center justify-between text-xs">
                <span className="eyebrow">{p.cat}</span>
                <span className="text-ink/50">{p.date} · {p.read}</span>
              </div>
              <h2 className="mt-4 font-serif text-2xl text-navy leading-snug">{p.title}</h2>
              <p className="mt-3 text-sm text-ink/70">{p.excerpt}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-navy">
                Read essay <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
