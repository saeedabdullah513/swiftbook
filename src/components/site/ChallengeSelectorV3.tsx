import { useState } from "react";
import { ArrowRight, BookOpen, Search, Users, Target, Sparkles, Megaphone, Radio, Star, TrendingUp, Heart } from "lucide-react";
import { BrandWatermark } from "./BrandWatermark";

type CardVariant = "light" | "navy" | "gold";

interface Challenge {
  id: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  text: string;
  variant: CardVariant;
  description: string;
  keyword: string;
}

const CHALLENGES: Challenge[] = [
  { id: "reader", icon: BookOpen, text: "Understanding my ideal reader", variant: "light", description: "I'm not sure who my ideal reader is or how to tailor my marketing efforts to reach them.", keyword: "Understand your ideal reader" },
  { id: "attention", icon: Search, text: "Getting readers' attention", variant: "navy", description: "I struggle to stand out and differentiate my book in a crowded marketplace.", keyword: "Get your readers' attention" },
  { id: "engagement", icon: Users, text: "Building reader engagement", variant: "light", description: "I need to create meaningful, lasting relationships with my readers that drive loyalty.", keyword: "Build reader engagement" },
  { id: "sales", icon: Target, text: "Generating consistent book sales", variant: "gold", description: "I'm struggling to turn interest into actual purchases across Amazon and other retailers.", keyword: "Generate consistent book sales" },
  { id: "buzz", icon: Sparkles, text: "Building pre-launch buzz", variant: "navy", description: "I don't have an effective strategy to create excitement before my book launches.", keyword: "Build pre-launch buzz" },
  { id: "platform", icon: Megaphone, text: "Creating a strategy and MVP platform", variant: "navy", description: "I need to build a sustainable audience between and beyond individual book launches.", keyword: "Create a strategy and MVP platform" },
  { id: "media", icon: Radio, text: "Getting press and media coverage", variant: "light", description: "I want to get my book featured in podcasts, articles, and media outlets.", keyword: "Get press and media coverage" },
  { id: "reviews", icon: Star, text: "Getting quality reader reviews", variant: "navy", description: "I need authentic, verified reviews to build social proof and trust for new readers.", keyword: "Get quality reader reviews" },
  { id: "amazon", icon: TrendingUp, text: "Amazon marketing and ads", variant: "gold", description: "I need help optimizing my Amazon presence and running effective ad campaigns.", keyword: "Amazon marketing and ads" },
  { id: "automation", icon: Heart, text: "Emotional marketing and automation", variant: "light", description: "I want to build automated sequences that connect emotionally with readers.", keyword: "Emotional marketing and automation" },
];

const VARIANT_STYLES: Record<CardVariant, { bg: string; color: string; iconColor: string; shadow: string }> = {
  light: { bg: "#f0ece4", color: "#0f2138", iconColor: "#0f2138", shadow: "0 4px 16px rgba(15,33,56,0.08)" },
  navy:  { bg: "#0f2138", color: "#ffffff", iconColor: "#ffffff", shadow: "0 4px 16px rgba(15,33,56,0.20)" },
  gold:  { bg: "#c9a05f", color: "#0f2138", iconColor: "#0f2138", shadow: "0 6px 20px rgba(201,160,95,0.25)" },
};

export function ChallengeSelectorV3() {
  const [step, setStep] = useState<1 | 2>(1);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => setSelected((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  const handleNext = () => { if (selected.length === 0) return; setStep(2); };
  const handleRestart = () => { setSelected([]); setStep(1); };
  const selectedChallenges = CHALLENGES.filter((c) => selected.includes(c.id));

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" id="challenges" style={{ background: "#f7f3ec" }}>
      <BrandWatermark
        className="-right-16 top-16 h-[200px] w-auto translate-x-[15%]"
        opacity={0.04}
        variant="navy"
      />

      <div className="container-editorial relative z-10">
        {step === 1 ? (
          <StepOne selected={selected} toggle={toggle} handleNext={handleNext} />
        ) : (
          <StepTwo selectedChallenges={selectedChallenges} handleRestart={handleRestart} />
        )}
      </div>
    </section>
  );
}

/* ============ STEP ONE ============ */

function StepOne({ selected, toggle, handleNext }: { selected: string[]; toggle: (id: string) => void; handleNext: () => void }) {
  return (
    <div className="flex flex-col lg:flex-row gap-14 lg:gap-16">
      {/* Left column — 35% */}
      <div className="flex-shrink-0 lg:w-[35%]">
        <span className="theme-v3-eyebrow">YOUR CHALLENGES</span>
        <h2 className="mt-4 text-3xl lg:text-[34px] leading-[1.15]" style={{ fontFamily: '"Fraunces", Georgia, serif', color: "#0f2138" }}>
          What are your biggest book marketing{" "}
          <em className="italic" style={{ color: "#c9a05f" }}>challenges?</em>
        </h2>
        <p className="mt-3 text-sm" style={{ fontFamily: '"Hanken Grotesk", system-ui, sans-serif', color: "rgba(15,33,56,0.55)" }}>
          Select your priorities — we'll build a strategy around them.
        </p>

        {/* Decorative curved arrow */}
        <div className="mt-6 hidden lg:block" aria-hidden>
          <svg width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 4C12 4 20 8 24 16C28 24 32 36 44 36"
              stroke="#c9a05f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 4"
            />
            <path
              d="M38 30L44 36L38 38"
              stroke="#c9a05f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="mt-6 text-xs" style={{ fontFamily: '"Hanken Grotesk", system-ui, sans-serif', color: "rgba(15,33,56,0.40)" }}>
          {selected.length} selected
        </p>
      </div>

      {/* Right column — 65%: card grid */}
      <div className="flex-1 flex flex-col gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
          {CHALLENGES.map((challenge) => {
            const isSelected = selected.includes(challenge.id);
            return (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                isSelected={isSelected}
                onClick={() => toggle(challenge.id)}
              />
            );
          })}
        </div>

        {/* Checkboxes + CTA row */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-5">
            <label className="flex items-center gap-2.5 text-xs cursor-pointer" style={{ fontFamily: '"Hanken Grotesk", system-ui, sans-serif', color: "#0f2138" }}>
              <input type="checkbox" className="h-3.5 w-3.5 rounded border-[#0f2138]/30" style={{ accentColor: "#0f2138" }}
                checked={selected.includes("not-applicable")} onChange={() => toggle("not-applicable")} />
              <span>Not applicable</span>
            </label>
            <label className="flex items-center gap-2.5 text-xs cursor-pointer" style={{ fontFamily: '"Hanken Grotesk", system-ui, sans-serif', color: "#0f2138" }}>
              <input type="checkbox" className="h-3.5 w-3.5 rounded border-[#0f2138]/30" style={{ accentColor: "#0f2138" }}
                checked={selected.includes("other")} onChange={() => toggle("other")} />
              <span>Other not listed</span>
            </label>
          </div>

          <button
            onClick={handleNext}
            disabled={selected.length === 0}
            className="inline-flex items-center gap-2 text-sm font-medium transition disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ fontFamily: '"Hanken Grotesk", system-ui, sans-serif', color: "#c9a05f" }}
          >
            See how we can help
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============ CHALLENGE CARD ============ */

function ChallengeCard({
  challenge,
  isSelected,
  onClick,
}: {
  challenge: Challenge;
  isSelected: boolean;
  onClick: () => void;
}) {
  const Icon = challenge.icon;
  const vs = VARIANT_STYLES[challenge.variant];

  return (
    <button
      onClick={onClick}
      className="group relative cursor-pointer flex flex-col items-center justify-center gap-3 transition-all duration-200 hover:-translate-y-0.5"
      style={{
        background: vs.bg,
        color: vs.color,
        borderRadius: 14,
        padding: "20px 8px",
        boxShadow: isSelected ? `${vs.shadow}, 0 0 0 2px #c9a05f` : vs.shadow,
      }}
      aria-label={challenge.text}
    >
      {/* Circular icon badge */}
      <div
        className="flex items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110"
        style={{
          width: 40,
          height: 40,
          background: challenge.variant === "navy" ? "rgba(255,255,255,0.12)" : "rgba(15,33,56,0.06)",
        }}
      >
        <Icon
          style={{ color: vs.iconColor, width: 20, height: 20 }}
          strokeWidth={1.5}
        />
      </div>
      <span
        className="text-[12px] leading-[16px] text-center px-1 max-w-[130px]"
        style={{ fontFamily: '"Hanken Grotesk", system-ui, sans-serif', fontWeight: isSelected ? 600 : 500 }}
      >
        {challenge.text}
      </span>
    </button>
  );
}

/* ============ STEP TWO ============ */

function StepTwo({ selectedChallenges, handleRestart }: { selectedChallenges: Challenge[]; handleRestart: () => void }) {
  return (
    <div className="flex flex-col lg:flex-row gap-14">
      {/* Left */}
      <div className="flex-1">
        <span className="theme-v3-eyebrow">YOUR PRIORITIES</span>
        <h2 className="mt-4 text-3xl lg:text-4xl" style={{ fontFamily: '"Fraunces", Georgia, serif', color: "#0f2138" }}>
          A strategy built around{" "}
          <em className="italic" style={{ color: "#c9a05f" }}>your goals.</em>
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {selectedChallenges.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.id}
                className="rounded-2xl overflow-hidden p-6 flex flex-col items-center justify-center gap-3 text-center"
                style={{
                  background: "linear-gradient(135deg, #c9a05f, #b08940)",
                  color: "#0f2138",
                  minHeight: 140,
                }}
              >
                <Icon className="h-8 w-8" strokeWidth={1.5} />
                <p className="text-lg leading-tight font-semibold" style={{ fontFamily: '"Hanken Grotesk", system-ui, sans-serif' }}>{c.keyword}</p>
              </div>
            );
          })}
        </div>

        <button onClick={handleRestart}
          className="mt-8 inline-flex items-center gap-2 text-sm hover:opacity-80 transition group"
          style={{ fontFamily: '"Hanken Grotesk", system-ui, sans-serif', color: "rgba(15,33,56,0.50)" }}>
          <ArrowRight className="h-3 w-3 rotate-180 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Restart</span>
        </button>
      </div>

      {/* Right: Contact form */}
      <div className="lg:w-[380px] shrink-0">
        <div className="rounded-2xl shadow-lift p-7 sticky top-24" style={{ background: "#ffffff" }}>
          <span className="theme-v3-eyebrow">READY TO BEGIN?</span>
          <h3 className="mt-2 text-2xl leading-tight" style={{ fontFamily: '"Fraunces", Georgia, serif', color: "#0f2138" }}>
            Tell us about your book.
          </h3>
          <p className="mt-2 text-sm" style={{ fontFamily: '"Hanken Grotesk", system-ui, sans-serif', color: "rgba(15,33,56,0.55)" }}>
            A strategist reviews your submission and creates a custom plan built
            around the priorities you selected.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-5 space-y-3.5">
            <input type="hidden" name="challenges" value={selectedChallenges.map((c) => c.keyword).join(", ")} />
            <input type="text" required placeholder="Full name"
              className="w-full rounded-lg px-4 py-3 text-sm transition"
              style={{ fontFamily: '"Hanken Grotesk", system-ui, sans-serif', border: "1px solid rgba(15,33,56,0.14)", background: "#f0ece4", color: "#0f2138" }} />
            <input type="email" required placeholder="Email address"
              className="w-full rounded-lg px-4 py-3 text-sm transition"
              style={{ fontFamily: '"Hanken Grotesk", system-ui, sans-serif', border: "1px solid rgba(15,33,56,0.14)", background: "#f0ece4", color: "#0f2138" }} />
            <input type="text" required placeholder="Book title"
              className="w-full rounded-lg px-4 py-3 text-sm transition"
              style={{ fontFamily: '"Hanken Grotesk", system-ui, sans-serif', border: "1px solid rgba(15,33,56,0.14)", background: "#f0ece4", color: "#0f2138" }} />
            <button type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:opacity-95"
              style={{ fontFamily: '"Hanken Grotesk", system-ui, sans-serif', background: "linear-gradient(135deg, #c9a05f, #b08940)" }}>
              Get my custom plan
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-[11px] text-center" style={{ fontFamily: '"Hanken Grotesk", system-ui, sans-serif', color: "rgba(15,33,56,0.45)" }}>We reply within 48 hours. Confidential.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
