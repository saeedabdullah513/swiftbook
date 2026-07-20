import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Play,
  Sparkles,
  X,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ChallengeSelectorV3 } from "@/components/site/ChallengeSelectorV3";
import { ConnectedServices } from "@/components/site/ConnectedServices";
import { Process } from "@/components/site/Process";
import { BrandWatermark } from "@/components/site/BrandWatermark";

export const Route = createFileRoute("/v3/")({
  head: () => ({
    meta: [
      { title: "Swift Book Marketing — Marketing Built Around Your Book" },
      {
        name: "description",
        content:
          "US-based book marketing for serious authors. Assessment-first strategy across Amazon, PR, podcasts, social, and press. Transparent pricing, verified results.",
      },
      { property: "og:title", content: "Swift Book Marketing — Marketing Built Around Your Book" },
      {
        property: "og:description",
        content:
          "Strategic book marketing for US authors: Amazon, press, podcasts, social, email. Assessment-first. No bestseller promises.",
      },
    ],
  }),
  component: Home,
});

export function Home() {
  return (
    <div className="theme-v3 min-h-screen">
      <Nav />
      <Hero />
      <ChallengeSelectorV3 />
      <Story />
      <ConnectedServices />
      <StatsCTA />
      <Portfolio />
      <Process />
      <TestimonialsReel />
      <Platforms />
      <FAQAndSocial />
      <Footer />
    </div>
  );
}

/* ============ HERO — futuristic parallax + lead form ============ */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [mouseInside, setMouseInside] = useState(false);
  const [spot, setSpot] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      setT({ x, y });
      setSpot({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      });
    };
    const onScroll = () => setScrollY(window.scrollY);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", () => setMouseInside(true));
    el.addEventListener("mouseleave", () => setMouseInside(false));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const layer = (depth: number) => ({
    transform: `translate3d(${t.x * depth}px, ${t.y * depth - scrollY * (depth / 400)}px, 0)`,
    transition: mouseInside ? "transform 0.08s linear" : "transform 0.6s ease-out",
  });

  const rotatingWords = ["deserves.", "commands.", "earns.", "demands."];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink text-parchment isolate"
      style={{ minHeight: "min(100vh, 900px)" }}
    >
      {/* Deep navy gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 20% 15%, rgba(15,33,56,0.95), transparent 55%), radial-gradient(900px 700px at 85% 20%, rgba(201,160,95,0.22), transparent 55%), radial-gradient(1100px 900px at 60% 110%, rgba(15,33,56,0.9), transparent 60%), linear-gradient(180deg, #0f2138, #162d4a)",
        }}
      />

      {/* Reactive spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: mouseInside ? 1 : 0.6,
          background: `radial-gradient(450px 450px at ${spot.x}% ${spot.y}%, rgba(201,160,95,0.18), transparent 70%)`,
        }}
      />

      {/* Animated grid floor */}
      <div
        className="absolute inset-0 opacity-[0.18] animate-grid"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,160,95,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(201,160,95,0.28) 1px, transparent 1px)",
          backgroundSize: "80px 80px, 80px 80px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 60%, black 30%, transparent 75%)",
        }}
      />

      {/* Noise / scanline */}
      <div className="absolute inset-x-0 top-0 h-16 pointer-events-none animate-scan bg-gradient-to-b from-transparent via-brass/20 to-transparent blur-md" />

      {/* Orbital rings behind book stack */}
      <div className="absolute top-1/2 right-[-8%] -translate-y-1/2 pointer-events-none hidden md:block" style={layer(-20)}>
        <div className="relative h-[560px] w-[560px]">
          <div className="absolute inset-0 rounded-full border border-brass/25 animate-orbit">
            <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-brass shadow-[0_0_20px_rgba(201,160,95,0.7)]" />
          </div>
          <div className="absolute inset-8 rounded-full border border-brass/30 animate-orbit-reverse">
            <div className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rounded-full bg-brass shadow-[0_0_18px_rgba(201,160,95,0.65)]" />
          </div>
          <div className="absolute inset-20 rounded-full border border-white/25 animate-orbit">
            <div className="absolute -bottom-1 left-1/3 h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.45)]" />
          </div>
          <div className="absolute inset-0 m-auto h-40 w-40 rounded-full bg-brass/20 blur-3xl animate-glow" />
        </div>
      </div>

      {/* Floating parallax books */}
      <div className="pointer-events-none absolute inset-0">
        <div style={layer(-30)} className="absolute top-24 left-[6%] animate-float">
          <FloatingBook tone="warm" tilt={-8} label="Novel" />
        </div>
        <div style={layer(-55)} className="absolute top-72 left-[20%] hidden md:block animate-float [animation-delay:1.2s]">
          <FloatingBook tone="cool" tilt={6} label="Memoir" />
        </div>
        <div style={layer(-40)} className="absolute bottom-24 left-[4%] hidden lg:block animate-float [animation-delay:2s]">
          <FloatingBook tone="sun" tilt={-4} label="Business" />
        </div>
        <div style={layer(-70)} className="absolute top-20 right-[6%] hidden md:block animate-float [animation-delay:0.6s]">
          <FloatingBook tone="cool" tilt={9} label="Fantasy" />
        </div>
      </div>

      {/* HUD corner marks */}
      <HudCorner className="top-6 left-6" />
      <HudCorner className="top-6 right-6 rotate-90" />
      <HudCorner className="bottom-6 left-6 -rotate-90" />
      <HudCorner className="bottom-6 right-6 rotate-180" />

      {/* Live telemetry chip */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 hidden md:flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl px-4 py-1.5 text-[11px] tracking-widest uppercase">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-brass opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brass" />
        </span>
        <span className="text-parchment/80">Signal · Q3 · US Authors</span>
        <span className="text-brass/90">◆ 04 slots open</span>
      </div>

      <div className="container-editorial relative z-10 grid gap-14 lg:grid-cols-[1.15fr_1fr] items-center pt-36 pb-28 lg:pt-40 lg:pb-36">
        <div style={layer(6)} className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-brass/30 bg-brass/10 backdrop-blur px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-brass" />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brass">
              Assessment-First Book Marketing
            </span>
          </div>
          <h1 className="mt-6 text-[32px] sm:text-4xl lg:text-[52px] leading-[1.02] font-serif hero-gold">
            The marketing team <br />
            your book{" "}
            <span className="relative inline-block align-baseline min-w-[3.5em]">
              {rotatingWords.map((w, i) => (
                <span
                  key={w}
                  className="absolute left-0 top-0 italic bg-gradient-to-r from-brass via-brass-soft to-brass bg-clip-text text-transparent animate-word"
                  style={{ animationDelay: `${i * 1.5}s` }}
                >
                  {w}
                </span>
              ))}
              <span className="invisible italic">deserves.</span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-parchment/75 leading-relaxed">
            Amazon, press, podcasts, social, email — orchestrated around a strategy
            built from <em className="text-brass not-italic font-medium">your</em> book, audience, and goals.
            No packages. No hype. Just the plan that moves your book forward.
          </p>

          {/* Live stat ticker */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm">
            <Stat n="1,200+" l="Authors served" />
            <span className="h-8 w-px bg-parchment/20" />
            <Stat n="3,400+" l="Books marketed" />
            <span className="h-8 w-px bg-parchment/20" />
            <Stat n="4.9★" l="Author rating" />
          </div>

          {/* Scroll indicator */}
          <div className="mt-10 hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-parchment/50">
            <span className="h-px w-8 bg-parchment/30" />
            Scroll to explore
            <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
          </div>
        </div>

        <div style={layer(10)} className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brass/30 via-brass/20 to-navy/30 blur-2xl animate-glow" />
          <LeadForm />
        </div>
      </div>

      {/* Seamless transition */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-parchment" />
    </section>
  );
}

function HudCorner({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute h-8 w-8 pointer-events-none ${className}`}>
      <span className="absolute top-0 left-0 h-full w-px bg-brass/60" />
      <span className="absolute top-0 left-0 h-px w-full bg-brass/60" />
      <span className="absolute top-0 left-0 h-1.5 w-1.5 rounded-full bg-brass shadow-[0_0_10px_rgba(201,160,95,0.7)]" />
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-serif text-2xl text-parchment">{n}</div>
      <div className="text-xs text-parchment/60 mt-0.5">{l}</div>
    </div>
  );
}

function FloatingBook({ tone, tilt, label }: { tone: "warm" | "cool" | "sun"; tilt: number; label: string }) {
  const bg =
    tone === "warm"
      ? "linear-gradient(135deg, #c9a05f, #b08940)"
      : tone === "cool"
        ? "linear-gradient(135deg, #0f2138, #162d4a)"
        : "linear-gradient(135deg, #d4b06f, #c9a05f)";
  return (
    <div
      className="w-28 h-40 md:w-36 md:h-52 rounded-md shadow-lift ring-1 ring-white/20 relative overflow-hidden backdrop-blur-sm"
      style={{ background: bg, transform: `rotate(${tilt}deg)` }}
    >
      <div className="absolute inset-y-0 left-1 w-1.5 bg-black/30" />
      <div className="absolute inset-x-4 top-5 text-white/95">
        <div className="text-[8px] tracking-[0.3em] uppercase opacity-80">{label}</div>
        <div className="mt-2 font-serif italic text-sm leading-tight">
          Untitled Works, Vol. {tilt > 0 ? "II" : "I"}
        </div>
      </div>
      <div className="absolute bottom-4 left-4 h-px w-8 bg-white/70" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
    </div>
  );
}

function LeadForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="relative rounded-2xl bg-white border border-white shadow-lift p-7 lg:p-8"
    >
      <div className="absolute -top-3 -right-3 h-16 w-16 rounded-2xl gradient-warm opacity-90 blur-xl" />
      <div className="relative">
        <div className="flex items-center gap-2 text-brass">
          <Sparkles className="h-4 w-4" />
          <span className="eyebrow !text-brass">Free Book Assessment</span>
        </div>
        <h3 className="mt-2 font-serif text-3xl text-navy leading-tight">
          Tell us about your book.
        </h3>
        <p className="mt-1 text-sm text-ink/65">
          A strategist reviews it within 48 hours. No obligation.
        </p>
        {sent ? (
          <div className="mt-6 rounded-xl bg-brass/30 border border-brass p-5">
            <div className="font-serif text-xl text-navy">Thank you.</div>
            <p className="mt-1 text-sm text-ink/75">
              We've received your details. A strategist will reach out within 48 hours.
            </p>
          </div>
        ) : (
          <div className="mt-5 space-y-3">
            <Field label="Full name" placeholder="Jane Doe" />
            <Field label="Email" type="email" placeholder="jane@author.com" />
            <div className="grid grid-cols-2 gap-3">
              <Field label="Phone" placeholder="+1 555 000 0000" />
              <SelectField label="Book stage" options={["Manuscript", "Pre-launch", "Just launched", "Backlist / Relaunch"]} />
            </div>
            <Field label="Book title" placeholder="Your working title" />
            <button
              type="submit"
              className="group mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl gradient-warm px-6 py-4 text-sm font-semibold text-white shadow-editorial hover:opacity-95 transition"
            >
              Request my free assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <p className="text-[11px] text-ink/55 text-center">
              We reply within 48 hours. Your details are kept confidential.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder?: string; type?: string }) {
  return (
    <label className="block">
      <span className="block text-[11px] font-medium tracking-wide uppercase text-ink/60">{label}</span>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="mt-1 w-full rounded-[6px] border-[1.5px] border-brass/20 bg-surface px-4 py-3 text-sm text-ink placeholder-ink/40 focus:outline-none focus:ring-2 focus:ring-brass/25 focus:border-brass transition"
      />
    </label>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="block text-[11px] font-medium tracking-wide uppercase text-ink/60">{label}</span>
      <select
        required
        className="mt-1 w-full rounded-[6px] border-[1.5px] border-brass/20 bg-surface px-3 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brass/25 focus:border-brass transition"
      >
        <option value="">Select…</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

/* ============ STORY — video right ============ */
function Story() {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="relative bg-stone/50">
      <BrandWatermark className="-left-20 top-12 h-[260px] w-auto -translate-x-[15%]" opacity={0.04} variant="navy" />
      <div className="container-editorial py-24 lg:py-32 grid gap-14 lg:grid-cols-[1.1fr_1fr] items-center">
        <div>
          <div className="flex items-center gap-3">
            <span className="rule" />
            <span className="eyebrow">Our Story</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl lg:text-4xl text-navy">
            We exist because most authors are sold <em className="italic text-brass">packages</em>,
            not <em className="not-italic text-brass">strategy</em>.
          </h2>
          <div className="mt-6 space-y-4 text-ink/80 max-w-xl leading-relaxed">
            <p>
              Swift Book Marketing was founded by publishing veterans who watched
              too many good books fail — not for lack of quality, but for lack of the
              right plan.
            </p>
            <p>
              Today we work with US-based authors across fiction, nonfiction, and
              memoir. Every engagement begins with an honest read of your book,
              your audience, and your goals — <strong>then</strong> we recommend a plan.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
            {[["2018", "Founded"], ["42", "Genres served"], ["9", "In-house strategists"]].map(([n, l]) => (
              <div key={l} className="rounded-xl bg-white border border-warm-gray p-4">
                <div className="font-serif text-2xl text-navy">{n}</div>
                <div className="text-[11px] text-ink/60 mt-1 uppercase tracking-wider">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-lift ring-1 ring-white gradient-cool">
          {playing ? (
            <iframe className="absolute inset-0 h-full w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="Our story" allow="autoplay; encrypted-media" allowFullScreen />
          ) : (
            <button onClick={() => setPlaying(true)} className="group absolute inset-0 flex items-end p-8 text-left">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
              <div className="absolute top-6 left-6 text-white/80 text-[11px] uppercase tracking-[0.3em]">Play film · 2 min</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-white text-navy flex items-center justify-center shadow-lift group-hover:scale-110 transition">
                  <Play className="h-7 w-7 fill-navy" />
                </div>
              </div>
              <div className="relative text-white">
                <div className="font-serif italic text-2xl lg:text-3xl leading-snug max-w-sm">
                  "We treat every book like it's the only one on our desk."
                </div>
                <div className="mt-3 text-sm text-white/80">— Founding Team</div>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============ STATS + CTA ============ */
function StatsCTA() {
  const stats = [
    ["1,200+", "Authors trusted us"],
    ["3,400+", "Books marketed"],
    ["42", "Genres covered"],
    ["18M+", "Reader impressions / yr"],
  ];
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 gradient-cool opacity-90" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(201,160,95,0.35),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(201,160,95,0.25),transparent_55%)]" />
      <BrandWatermark className="-right-24 top-1/2 h-[360px] w-auto -translate-y-1/2 translate-x-[25%]" opacity={0.07} />
      <div className="container-editorial relative z-10 py-20 lg:py-28 grid gap-12 lg:grid-cols-[1.3fr_1fr] items-center">
        <div>
          <h2 className="font-serif text-3xl lg:text-4xl text-white leading-tight">
            Thousands of authors have already <br />
            <em className="not-italic bg-gradient-to-r from-brass to-brass-soft bg-clip-text text-transparent">
              trusted us with their book.
            </em>
          </h2>
          <p className="mt-6 text-white/72 max-w-lg">
            From debut novelists to New York Times–reviewed nonfiction authors,
            we build the marketing engine behind books that get read.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/assessment"
              className="inline-flex items-center gap-2 rounded-[6px] bg-brass text-white px-6 py-4 text-sm font-semibold hover:bg-[var(--orange-hover)] hover:-translate-y-0.5 transition-all"
            >
              Request a free assessment <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+13322587478"
              className="inline-flex items-center gap-2 rounded-[6px] border-[1.5px] border-white/50 px-6 py-4 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Call +1 332 258 7478
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map(([n, l]) => (
            <div key={l} className="rounded-[10px] bg-navy-card/80 backdrop-blur border border-white/15 p-6">
              <div className="font-serif text-3xl lg:text-4xl text-white">
                {n.split(/([+★])/).map((part, i) =>
                  part === "+" || part === "★" ? (
                    <span key={i} className="text-brass">{part}</span>
                  ) : (
                    <span key={i}>{part}</span>
                  ),
                )}
              </div>
              <div className="mt-2 text-sm text-white/72">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ PORTFOLIO — Book covers grid with modal ============ */
const BLUE = "linear-gradient(160deg,#0f2138,#162d4a,#0f2138)";
const ORANGE = "linear-gradient(160deg,#c9a05f,#b08940,#8a6d35)";

const BOOKS = [
  { title: "The Quiet Formula", author: "Ava Reynolds", genre: "Business", services: ["Amazon Marketing", "Featured Articles", "Email Marketing"], results: ["68% lift in Amazon page views", "Featured in Inc. & Fast Company", "4,200 new email subscribers in 60 days"] },
  { title: "Still Becoming", author: "Miles Carter", genre: "Memoir", services: ["Press Release", "Social Media Marketing", "Content Marketing"], results: ["12 podcast guest spots booked", "27k combined social views on launch", "National print syndication via AP"] },
  { title: "Next Level Teams", author: "Tara Benson", genre: "Leadership", services: ["SEO", "TV Interviews", "Featured Articles"], results: ["Google page 1 ranking for 14 keywords", "3 national TV appearances", "Harvard Business Review contributor"] },
  { title: "Echo Street", author: "Nina Morris", genre: "Fiction", services: ["Amazon Marketing", "Email Marketing", "Social Media Marketing"], results: ["#3 in Literary Fiction on launch day", "800+ pre-orders before release", "BookBub Featured Deal — 11k downloads"] },
  { title: "Built To Teach", author: "Ethan Lee", genre: "Education", services: ["Content Marketing", "SEO", "Press Release"], results: ["33% month-over-month traffic growth", "Adopted by 6 university syllabi", "Sold foreign rights in 4 territories"] },
  { title: "The Decisive Founder", author: "Lori Grant", genre: "Nonfiction", services: ["Featured Articles", "TV Interviews", "Email Marketing"], results: ["Op-ed placed in The Wall Street Journal", "2.3x increase in speaking inquiries", "First print run sold out in 3 weeks"] },
  { title: "Hidden Summer", author: "J. Porter", genre: "Fiction", services: ["Amazon Marketing", "Social Media Marketing", "Press Release"], results: ["Top 50 in Contemporary Fiction", "300+ verified Amazon reviews", "NetGalley Most Anticipated badge"] },
  { title: "Lead With Clarity", author: "Sophia King", genre: "Business", services: ["SEO", "Featured Articles", "Content Marketing"], results: ["Blog traffic grew 3x in 90 days", "Quoted in Forbes, Fortune, Bloomberg", "Keynote booking rate doubled"] },
  { title: "The Calm Edge", author: "Daniel Cole", genre: "Wellness", services: ["Email Marketing", "Content Marketing", "Amazon Marketing"], results: ["Email list grew from 800 to 7,500", "Amazon category bestseller 14 days", "Licensed to a major wellness app"] },
  { title: "Finding Forward", author: "Mia Brooks", genre: "Memoir", services: ["Press Release", "Featured Articles", "TV Interviews"], results: ["NPR Morning Edition segment", "Paperback edition greenlit at 30k", "Publisher's Weekly starred review"] },
];

function Portfolio() {
  const [active, setActive] = useState<typeof BOOKS[0] | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  return (
    <section className="container-editorial py-24 lg:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="rule" />
            <span className="eyebrow">Portfolio</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl lg:text-4xl text-navy">
            Books we've helped <em className="italic text-brass">get read.</em>
          </h2>
        </div>
        <p className="text-ink/70 max-w-md">
          Ten selected campaigns — click a cover to see services, results, and the full story.
        </p>
      </div>

      <div className="mt-14 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {BOOKS.map((b, i) => {
          const bg = i % 2 === 0 ? BLUE : ORANGE;
          return (
            <button key={b.title} onClick={() => { setActive(b); setActiveIndex(i); }} className="group text-left cursor-pointer border-0 bg-none p-0">
              <div
                className="aspect-[3/4] rounded-[22px] relative overflow-hidden p-4 text-white flex flex-col justify-between shadow-[0_18px_36px_rgba(0,29,67,0.15)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_24px_48px_rgba(0,29,67,0.22)]"
                style={{ background: bg }}
              >
                <span className="text-[0.72rem] tracking-[0.14em] uppercase opacity-95">{b.genre}</span>
                <strong className="font-serif text-2xl leading-[1.02] max-w-[80%]">{b.title}</strong>
                <span className="text-[0.72rem] tracking-[0.08em] uppercase opacity-90">{b.author}</span>
              </div>
              <span className="block mt-2.5 text-navy font-extrabold text-[0.95rem]">{b.title}</span>
            </button>
          );
        })}
      </div>

      {active && <BookModal book={active} bookIndex={activeIndex} onClose={() => setActive(null)} />}
    </section>
  );
}

function BookModal({ book, bookIndex, onClose }: { book: typeof BOOKS[0]; bookIndex: number; onClose: () => void }) {
  const modalBg = bookIndex % 2 === 0 ? BLUE : ORANGE;
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div onClick={onClose} className="fixed inset-0 z-[100] bg-navy/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up">
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-4xl bg-white rounded-2xl shadow-lift overflow-hidden grid md:grid-cols-[1fr_1fr]">
        <button onClick={onClose} className="absolute top-3 right-3 z-10 h-9 w-9 rounded-full bg-white/90 border border-warm-gray flex items-center justify-center text-navy hover:bg-white" aria-label="Close">
          <X className="h-4 w-4" />
        </button>
        <div className="aspect-[3/4] md:aspect-auto relative p-6 text-white flex flex-col justify-between" style={{ background: modalBg }}>
          <span className="text-xs tracking-[0.14em] uppercase opacity-90">{book.genre}</span>
          <div>
            <h3 className="font-serif text-3xl leading-tight">{book.title}</h3>
            <p className="text-sm opacity-80 mt-1">by {book.author}</p>
          </div>
        </div>
        <div className="p-6 lg:p-8 max-h-[85vh] overflow-y-auto flex flex-col gap-5">
          <video controls poster="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1200" className="w-full rounded-2xl bg-black" preload="metadata">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
          <div>
            <strong className="text-navy text-sm font-semibold">Services provided</strong>
            <ul className="mt-2 space-y-1.5">
              {book.services.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-ink/80">
                  <Check className="h-4 w-4 text-brass mt-0.5 shrink-0" />{s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <strong className="text-navy text-sm font-semibold">Results achieved</strong>
            <ul className="mt-2 space-y-1.5">
              {book.results.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-ink/80">
                  <Check className="h-4 w-4 text-brass mt-0.5 shrink-0" />{r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============ TESTIMONIALS — reel style ============ */
const REELS = [
  { author: "Elena V.", quote: "They understood my book before selling me anything.", tone: "warm" as const },
  { author: "Dr. Ronan K.", quote: "The results paid for the campaign in 90 days.", tone: "cool" as const },
  { author: "Halima F.", quote: "My paperback outsold the hardcover in six weeks.", tone: "sun" as const },
  { author: "James O.", quote: "Best marketing money I've ever spent.", tone: "cool" as const },
  { author: "Priya S.", quote: "They found readers I didn't know existed.", tone: "warm" as const },
  { author: "Marcus W.", quote: "BookTok changed everything for us.", tone: "sun" as const },
] as const;

function reelBg(tone: "warm" | "cool" | "sun") {
  switch (tone) {
    case "warm": return "linear-gradient(150deg, #c9a05f, #b08940)";
    case "cool": return "linear-gradient(150deg, #0f2138, #162d4a)";
    case "sun":  return "linear-gradient(150deg, #d4b06f, #c9a05f)";
  }
}

function TestimonialsReel() {
  const [open, setOpen] = useState(false);
  return (
    <section className="bg-parchment py-24 lg:py-32 relative">
      <BrandWatermark className="-right-20 bottom-8 h-[240px] w-auto translate-x-[20%]" opacity={0.04} variant="navy" />
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="rule" />
              <span className="eyebrow">Author Voices</span>
            </div>
          <h2 className="mt-4 font-serif text-3xl lg:text-4xl text-navy">
              Hear it from the <em className="not-italic text-brass">authors themselves.</em>
            </h2>
          </div>
          <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-[6px] bg-brass text-white px-5 py-3 text-sm font-medium hover:bg-[var(--orange-hover)] transition">
            <Play className="h-4 w-4 fill-white" /> Play the reel
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {REELS.map((r, i) => (
            <button key={r.author} onClick={() => setOpen(true)} className="group relative aspect-[9/16] rounded-2xl overflow-hidden shadow-editorial ring-1 ring-black/5" style={{ background: reelBg(r.tone) }}>
              <div className="absolute inset-0 flex items-end p-4">
                <div className="text-white">
                  <div className="text-[10px] uppercase tracking-widest text-white/70">Reel {String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-1 font-serif italic text-sm leading-snug line-clamp-3">"{r.quote}"</div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/25">
                <Play className="h-10 w-10 text-white fill-white" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && <ReelPlayer onClose={() => setOpen(false)} />}
    </section>
  );
}

function ReelPlayer({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", onKey); };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-stretch justify-center">
      <button onClick={onClose} aria-label="Close reels" className="absolute top-4 right-4 z-20 h-11 w-11 rounded-full bg-white/15 backdrop-blur border border-white/30 text-white flex items-center justify-center hover:bg-white/25">
        <X className="h-5 w-5" />
      </button>
      <div className="scroll-snap-y overflow-y-scroll h-full w-full max-w-[440px] mx-auto">
        {REELS.map((r, i) => (
          <div key={r.author} className="snap-item relative h-screen w-full flex items-end justify-center" style={{ background: reelBg(r.tone) }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
            <div className="relative w-full p-6 pb-16 text-white">
              <div className="text-[11px] uppercase tracking-[0.3em] text-white/70">Reel {String(i + 1).padStart(2, "0")} of {REELS.length}</div>
              <div className="mt-3 font-serif italic text-3xl leading-tight max-w-sm">"{r.quote}"</div>
              <div className="mt-4 text-sm text-white/85">— {r.author}, US Author</div>
              <div className="mt-6 h-1 rounded-full bg-white/20 overflow-hidden"><div className="h-full w-1/3 bg-white/70" /></div>
              <div className="mt-6 text-[11px] text-white/70">Scroll up for next reel · Press Esc or × to exit</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ PLATFORMS ============ */
function Platforms() {
  const platforms = ["Amazon", "Barnes & Noble", "Apple Books", "Kobo", "Google Play Books", "Goodreads", "IngramSpark", "Draft2Digital", "BookBub", "NetGalley", "Audible", "Spotify"];
  return (
    <section className="bg-white border-y border-warm-gray py-16">
      <div className="container-editorial">
        <div className="text-center">
          <span className="eyebrow">Platforms & partners we work across</span>
          <h3 className="mt-3 font-serif text-2xl text-navy">Every major retailer, discovery platform, and press channel.</h3>
        </div>
        <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-3 animate-marquee w-max">
            {[...platforms, ...platforms].map((p, i) => (
              <div key={i} className="shrink-0 px-6 py-4 rounded-xl bg-parchment border border-warm-gray text-navy font-serif text-lg italic">{p}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ FAQ + SOCIAL ============ */
const FAQS = [
  { q: "How do you decide which services a book needs?", a: "We begin by reviewing the book, the audience, the current positioning, and the commercial objective. The recommended service mix comes from that assessment rather than a fixed package.", video: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { q: "Do you guarantee bestseller results?", a: "No. We do not guarantee bestseller outcomes. We do guarantee strategic planning, scoped deliverables, execution, and transparent reporting with context.", video: "https://www.w3schools.com/html/movie.mp4", poster: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { q: "Can I see what will be delivered before I commit?", a: "Yes. We present sample deliverables, scoped activities, timelines, and exclusions before any payment is requested — so you know exactly what you're getting.", video: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200" },
];

const SOCIAL_ITEMS = [
  { platform: "Instagram", desc: "Campaign visual teaser and author spotlights." },
  { platform: "LinkedIn", desc: "Thought leadership posts and authority-led book marketing insights." },
  { platform: "Facebook", desc: "Client wins, launches, and engagement-first updates." },
  { platform: "YouTube", desc: "Author story videos, FAQs, and marketing explainers." },
];

function FAQAndSocial() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24 lg:py-32 bg-surface relative">
      <BrandWatermark className="-left-16 top-16 h-[220px] w-auto -translate-x-[15%]" opacity={0.04} variant="navy" />
      <div className="container-editorial">
        <div className="grid gap-7 lg:grid-cols-[1.12fr_0.88fr] items-start">
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <span className="rule" />
                <span className="eyebrow">Frequently asked questions</span>
              </div>
              <h2 className="mt-4 font-serif text-3xl lg:text-4xl text-navy max-w-xl">
                Each answer includes a video{" "}
                <em className="not-italic text-brass">and written transcript.</em>
              </h2>
            </div>

            <div className="space-y-3.5">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <article key={f.q} className="rounded-[22px] bg-white border border-warm-gray overflow-hidden shadow-[0_14px_30px_rgba(15,35,72,0.05)] transition">
                    <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between gap-4 text-left p-[22px] font-extrabold text-navy">
                      <span className="font-serif text-lg leading-tight">{f.q}</span>
                      <span className="text-2xl text-brass shrink-0 transition-transform duration-300" style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-400 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <div className="px-[22px] pb-[22px]">
                          <div className="grid md:grid-cols-2 gap-4">
                            <video controls poster={f.poster} className="w-full h-60 object-cover rounded-2xl bg-black" preload="metadata">
                              <source src={f.video} type="video/mp4" />
                            </video>
                            <div className="rounded-2xl p-4 border border-warm-gray bg-surface">
                              <strong className="block text-navy mb-2 font-semibold">Transcript</strong>
                              <p className="text-ink/60 text-sm leading-relaxed">{f.a}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <aside>
            <div className="rounded-[10px] p-[22px] border border-warm-gray shadow-editorial sticky top-28 bg-white">
              <div className="mb-5">
                <strong className="block text-navy text-xl font-serif">Social feed</strong>
                <span className="block mt-1 text-brass font-bold text-sm">@swiftbookmarketing</span>
              </div>
              <div className="space-y-3.5">
                {SOCIAL_ITEMS.map((s) => (
                  <article key={s.platform} className="p-4 rounded-2xl border border-warm-gray bg-white transition hover:shadow-md">
                    <span className="block text-brass font-extrabold text-sm mb-1.5">{s.platform}</span>
                    <p className="text-ink/60 text-sm leading-relaxed">{s.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
