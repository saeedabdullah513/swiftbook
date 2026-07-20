import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "How It Works — Swift Book Marketing" },
      { name: "description", content: "A five-stage process with visible responsibilities on both sides." },
    ],
  }),
  component: Process,
});

const stages = [
  { n: "01", title: "Book Assessment", us: ["Read the book", "Review market fit", "Evaluate positioning"], you: ["Share manuscript & comps", "History of prior marketing"] },
  { n: "02", title: "Positioning & Audience Research", us: ["Define reader segments", "Message hierarchy", "Competitive framing"], you: ["Review positioning doc", "Confirm voice and category"] },
  { n: "03", title: "Campaign Recommendation", us: ["Strategy, channels, timeline", "Deliverables & investment", "Third-party costs disclosed"], you: ["Approve, modify, or decline", "No obligation to proceed"] },
  { n: "04", title: "Execution & Approval", us: ["Build creative", "Book outreach", "Run ads & coordinate placements"], you: ["Approve public-facing assets", "Retain final creative say"] },
  { n: "05", title: "Reporting & Optimization", us: ["Weekly signals", "Monthly written reports with sources"], you: ["Review, redirect, or extend", "Full data handover at close"] },
];

function Process() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="container-editorial py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3"><span className="rule" /><span className="eyebrow">How It Works</span></div>
          <h1 className="mt-4 text-5xl lg:text-6xl">Five stages. Two columns of responsibility.</h1>
          <p className="mt-6 text-lg text-ink/70">
            You always know what we're doing this week — and what we need from you.
          </p>
        </div>
        <div className="mt-16 space-y-8">
          {stages.map((s) => (
            <div key={s.n} className="grid gap-8 lg:grid-cols-[160px_1fr_1fr] rounded-sm border border-warm-gray bg-card p-8 lg:p-10">
              <div>
                <div className="font-mono text-xs text-brass">{s.n}</div>
                <h2 className="mt-2 font-serif text-3xl text-navy">{s.title}</h2>
              </div>
              <Col title="Agency" items={s.us} />
              <Col title="Author" items={s.you} />
            </div>
          ))}
        </div>
        <div className="mt-14">
          <Link to="/assessment" className="inline-flex items-center gap-2 rounded-[6px] bg-brass px-6 py-4 text-sm text-white hover:bg-[var(--orange-hover)]">
            Start with a book assessment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Col({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="eyebrow">{title}</div>
      <ul className="mt-4 space-y-2.5 text-sm text-ink/85">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-2 h-1 w-1 rounded-full bg-brass shrink-0" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
