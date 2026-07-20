import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Author Results — Swift Book Marketing" },
      { name: "description", content: "Case studies from real author campaigns with sourced metrics, campaign context, and honest limitations." },
    ],
  }),
  component: Results,
});

const cases = [
  { cat: "Fiction", author: "Elena Vasquez", title: "The Cartographer's Daughter", cover: "from-navy to-navy-soft", challenge: "Debut literary novel with no author platform.", objective: "Establish critical footing and reach book-club audience.", strategy: "Podcast-led authority build followed by targeted newsletter placements and Amazon metadata refresh.", duration: "14 weeks", metric: "38 podcast placements · 4 national reviews", source: "Agency tracked", limit: "Sales attribution not directly measurable; results reflect reach, not units sold." },
  { cat: "Nonfiction", author: "Dr. Ronan Kelleher", title: "The Quiet Operator", cover: "from-[#001d43] to-[#0a2a58]", challenge: "Business book competing in crowded leadership category.", objective: "Position for corporate speaking and B2B authority.", strategy: "Website rebuild, LinkedIn thought leadership cadence, and podcast tour to executive audiences.", duration: "6 months", metric: "4.2× organic search to author.com · 9 keynote inquiries", source: "Platform verified", limit: "Speaking bookings depend on the author's outreach follow-through post-inquiry." },
  { cat: "Memoir", author: "Halima Farooq", title: "Between Two Coasts", cover: "from-[#0a2a58] to-[#001d43]", challenge: "Previously published memoir under-performed on launch.", objective: "Relaunch around a targeted paperback edition.", strategy: "Cover refresh, category repositioning, and a compact media round timed with paperback release.", duration: "10 weeks", metric: "Featured in 3 national outlets · Amazon rank improvement in category", source: "Publicly verifiable", limit: "Category rank improvement is timeframe-dependent and may fluctuate." },
  { cat: "Nonfiction", author: "James Ortega", title: "Signal Craft", cover: "from-[#fc6e06] to-[#e05f00]", challenge: "Independent nonfiction author with strong newsletter.", objective: "Convert existing audience into launch-week readers.", strategy: "Segmented launch sequence with reader-community activations and a two-week ad support layer.", duration: "9 weeks", metric: "62% list conversion · 4.6-star average across 240 launch-week reviews", source: "Client reported", limit: "Client-reported figures; review quality reflects existing readership goodwill." },
];

export function Results() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = filter === "All" ? cases : cases.filter((c) => c.cat === filter);
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="container-editorial py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3"><span className="rule" /><span className="eyebrow">Author Results</span></div>
          <h1 className="mt-4 text-5xl lg:text-6xl">Work explained with sources, context, and limits.</h1>
          <p className="mt-6 text-lg text-ink/70">
            Every case study lists what we did, what changed, how it was measured, and
            what the numbers cannot tell you.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {["All", "Fiction", "Nonfiction", "Memoir"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-xs uppercase tracking-widest rounded-sm border transition-colors ${
                filter === f ? "bg-navy text-white border-navy" : "border-navy/20 text-ink/70 hover:border-navy"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="mt-12 space-y-8">
          {filtered.map((c) => (
            <article key={c.title} className="rounded-sm border border-warm-gray bg-card p-8 lg:p-10 grid gap-8 lg:grid-cols-[220px_1fr]">
              <div>
                <div className={`w-40 aspect-[3/4] rounded-sm bg-gradient-to-br ${c.cover} shadow-editorial relative overflow-hidden`}>
                  <div className="absolute inset-x-4 top-6 text-parchment">
                    <div className="text-[8px] tracking-[0.3em] uppercase text-brass-soft">A Book</div>
                    <div className="font-serif italic text-sm mt-2 leading-tight">{c.title}</div>
                  </div>
                  <div className="absolute bottom-4 left-4 h-px w-6 bg-brass" />
                </div>
                <div className="mt-4 text-[11px] tracking-widest uppercase text-brass">{c.cat}</div>
                <p className="mt-1 text-sm text-ink/70">by {c.author}</p>
              </div>
              <div>
                <h2 className="font-serif text-3xl text-navy">{c.title}</h2>
                <div className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                  <Meta k="Challenge" v={c.challenge} />
                  <Meta k="Objective" v={c.objective} />
                  <Meta k="Duration" v={c.duration} />
                  <Meta k="Result source" v={c.source} />
                </div>
                <div className="mt-5">
                  <div className="eyebrow !text-ink/50">Strategy</div>
                  <p className="mt-1 text-sm text-ink/80">{c.strategy}</p>
                </div>
                <div className="mt-5">
                  <div className="eyebrow !text-ink/50">Measured result</div>
                  <p className="mt-1 font-serif italic text-xl text-navy">{c.metric}</p>
                </div>
                <div className="mt-5 rounded-sm bg-stone/60 border border-warm-gray p-4 text-sm text-ink/75">
                  <span className="eyebrow !text-ink/60">Important limitation.</span>{" "}
                  {c.limit}
                </div>
                <div className="mt-5 text-xs text-sage inline-flex items-center gap-1.5">
                  <Check className="h-3 w-3" /> Reported with source
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-14">
          <Link to="/assessment" className="inline-flex items-center gap-2 rounded-[6px] bg-brass px-6 py-4 text-sm text-white hover:bg-[var(--orange-hover)]">
            Discuss a similar campaign <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="eyebrow !text-ink/50">{k}</div>
      <div className="mt-1 text-ink/85">{v}</div>
    </div>
  );
}
