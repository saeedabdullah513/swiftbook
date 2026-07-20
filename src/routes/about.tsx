import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Swift Book Marketing" },
      { name: "description", content: "A strategic book marketing partner for US authors. Editorial standards, verified team, transparent practices." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="container-editorial py-20 lg:py-28 grid gap-16 lg:grid-cols-[1fr_1fr] items-start">
        <div>
          <div className="flex items-center gap-3"><span className="rule" /><span className="eyebrow">About</span></div>
          <h1 className="mt-4 text-5xl lg:text-6xl">A firm built for authors who read the fine print.</h1>
          <p className="mt-6 text-lg text-ink/75 leading-relaxed">
            Swift Book Marketing was founded on a straightforward observation: the
            authors who invest most carefully in their books receive the least
            thoughtful marketing advice. We built the firm to change that.
          </p>
          <p className="mt-4 text-ink/70">
            Every engagement begins with reading — the manuscript, the market, and the
            author's actual objective. Only then do we propose a plan. Sometimes that
            plan is significantly smaller than what a prospective client expected. That
            is the point.
          </p>
        </div>
        <div className="rounded-sm border border-warm-gray bg-card p-8">
          <div className="eyebrow">Where We Are</div>
          <p className="mt-3 font-serif text-2xl text-navy leading-snug">
            5720 Lyndon B Johnson Fwy<br />Dallas, TX 75230
          </p>
          <div className="mt-6 space-y-2 text-sm text-ink/80">
            <p><span className="eyebrow !text-ink/55">Phone</span><br /><a href="tel:+13322587478" className="text-navy">+1&nbsp;332&nbsp;258&nbsp;7478</a></p>
            <p><span className="eyebrow !text-ink/55">Serving</span><br />US-based fiction, nonfiction, memoir, business, academic, and children's authors.</p>
          </div>
          <Link to="/assessment" className="mt-8 inline-flex items-center gap-2 rounded-[6px] bg-brass px-5 py-3 text-sm text-white hover:bg-[var(--orange-hover)]">
            Request a Book Assessment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="container-editorial pb-24 grid gap-6 md:grid-cols-3">
        {[
          { k: "Founded", v: "2018" },
          { k: "Authors served", v: "180+" },
          { k: "Guarantee statements offered", v: "Zero" },
        ].map((s) => (
          <div key={s.k} className="rounded-sm border border-warm-gray bg-stone/50 p-8">
            <div className="eyebrow">{s.k}</div>
            <div className="mt-3 font-serif text-4xl text-navy">{s.v}</div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
