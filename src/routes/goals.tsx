import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, Megaphone, Radio, Search, Sparkles, Target, Users } from "lucide-react";

export const Route = createFileRoute("/goals")({
  head: () => ({
    meta: [
      { title: "Author Goals — Swift Book Marketing" },
      { name: "description", content: "Start with the outcome your book needs — launch, relaunch, reach, authority, discoverability, or long-term platform." },
    ],
  }),
  component: Goals,
});

const goals = [
  { icon: Sparkles, title: "Launch My Book", body: "A focused pre-launch and launch window across the channels that suit your book.", steps: ["Positioning workshop", "Advance reader campaign", "Launch-week orchestration"] },
  { icon: Radio, title: "Relaunch My Book", body: "Reposition, re-cover, or re-market a book that under-performed the first time.", steps: ["Positioning audit", "Retailer page rebuild", "Second-life media plan"] },
  { icon: Users, title: "Reach More Readers", body: "Grow discoverability within a specific genre or category.", steps: ["Reader segment research", "Ads & newsletter placements", "Retailer conversion work"] },
  { icon: Megaphone, title: "Build My Authority", body: "Establish credibility through media, podcasts, features, and thought leadership.", steps: ["Story angles", "Media outreach rounds", "Long-form contributions"] },
  { icon: Search, title: "Improve Discoverability", body: "Amazon optimization, metadata, book SEO, and retailer-page conversion.", steps: ["Keyword & category research", "A+ content or covers", "Retailer conversion tests"] },
  { icon: Target, title: "Long-Term Platform", body: "The infrastructure that compounds across books.", steps: ["Author website & list", "Editorial calendar", "Quarterly authority plan"] },
];

export function Goals() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="container-editorial py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3"><span className="rule" /><span className="eyebrow">Author Goals</span></div>
          <h1 className="mt-4 text-5xl lg:text-6xl">Start with what your book <em className="italic">needs to achieve</em>.</h1>
          <p className="mt-6 text-lg text-ink/70">
            Six pathways. Each one begins with an assessment and ends with a written
            recommendation — never a package.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {goals.map((g) => (
            <div key={g.title} className="rounded-sm border border-warm-gray bg-card p-8">
              <g.icon className="h-6 w-6 text-brass stroke-[1.4]" />
              <h2 className="mt-6 font-serif text-2xl text-navy">{g.title}</h2>
              <p className="mt-3 text-sm text-ink/70">{g.body}</p>
              <ul className="mt-5 space-y-2 text-sm text-ink/85">
                {g.steps.map((s, i) => (
                  <li key={s} className="flex gap-3">
                    <span className="font-mono text-xs text-brass mt-0.5">0{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ul>
              <Link to="/assessment" className="mt-6 inline-flex items-center gap-2 text-sm text-navy">
                Start this pathway <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
