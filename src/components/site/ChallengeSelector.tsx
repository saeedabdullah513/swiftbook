import { useState } from "react";
import { ArrowRight } from "lucide-react";
import buyerB from "@/assets/ironpaper/buyer b.webp";
import buyer from "@/assets/ironpaper/buyer.webp";
import attentionB from "@/assets/ironpaper/attention b.webp";
import attentionA from "@/assets/ironpaper/attention a.webp";
import engagementB from "@/assets/ironpaper/engagement b.webp";
import engagement from "@/assets/ironpaper/engagement.webp";
import leadsB from "@/assets/ironpaper/leads b.webp";
import leadsA from "@/assets/ironpaper/leads a.webp";
import inspiringB from "@/assets/ironpaper/inspiring buyers b.webp";
import inspiring from "@/assets/ironpaper/Inspiring.webp";
import salesTeamA from "@/assets/ironpaper/sales team a_1.webp";
import salesTeamB from "@/assets/ironpaper/sales_team-1.webp";
import salesProcessB from "@/assets/ironpaper/sales process b.webp";
import salesProcess from "@/assets/ironpaper/sales_process.webp";
import dealB from "@/assets/ironpaper/deal b.webp";
import deal from "@/assets/ironpaper/deal.webp";
import checkIcon from "@/assets/ironpaper/Check Icon.png";
import arrowIcon from "@/assets/ironpaper/Arrow.webp";

interface Challenge {
  id: string;
  frontImg: string;
  backImg: string;
  text: string;
  description: string;
  keyword: string;
}

const CHALLENGES: Challenge[] = [
  {
    id: "reader",
    frontImg: buyerB,
    backImg: buyer,
    text: "Understanding my ideal reader",
    description: "I'm not sure who my ideal reader is or how to tailor my marketing efforts to reach them.",
    keyword: "Understand your ideal reader",
  },
  {
    id: "attention",
    frontImg: attentionB,
    backImg: attentionA,
    text: "Getting readers' attention",
    description: "I struggle to stand out and differentiate my book in a crowded marketplace.",
    keyword: "Get your readers' attention",
  },
  {
    id: "engagement",
    frontImg: engagementB,
    backImg: engagement,
    text: "Building reader engagement",
    description: "I need to create meaningful, lasting relationships with my readers that drive loyalty.",
    keyword: "Build reader engagement",
  },
  {
    id: "sales",
    frontImg: leadsB,
    backImg: leadsA,
    text: "Generating consistent book sales",
    description: "I'm struggling to turn interest into actual purchases across Amazon and other retailers.",
    keyword: "Generate consistent book sales",
  },
  {
    id: "buzz",
    frontImg: inspiringB,
    backImg: inspiring,
    text: "Building pre-launch buzz",
    description: "I don't have an effective strategy to create excitement before my book launches.",
    keyword: "Build pre-launch buzz",
  },
  {
    id: "platform",
    frontImg: salesTeamB,
    backImg: salesTeamA,
    text: "Growing my author platform",
    description: "I need to build a sustainable audience between and beyond individual book launches.",
    keyword: "Grow your author platform",
  },
  {
    id: "media",
    frontImg: salesProcessB,
    backImg: salesProcess,
    text: "Getting press & media coverage",
    description: "I want to get my book featured in podcasts, articles, and media outlets.",
    keyword: "Get press and media coverage",
  },
  {
    id: "reviews",
    frontImg: dealB,
    backImg: deal,
    text: "Getting quality reader reviews",
    description: "I need authentic, verified reviews to build social proof and trust for new readers.",
    keyword: "Get quality reader reviews",
  },
];

export function ChallengeSelector() {
  const [step, setStep] = useState<1 | 2>(1);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  };

  const handleNext = () => { if (selected.length === 0) return; setStep(2); };
  const handleRestart = () => { setSelected([]); setStep(1); };
  const selectedChallenges = CHALLENGES.filter((c) => selected.includes(c.id));

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white" id="challenges">

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

function StepOne({
  selected,
  toggle,
  handleNext,
}: {
  selected: string[];
  toggle: (id: string) => void;
  handleNext: () => void;
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  const activeInfo = hovered
    ? CHALLENGES.find((c) => c.id === hovered)
    : selected.length > 0
      ? CHALLENGES.find((c) => c.id === selected[selected.length - 1])
      : null;

  return (
    <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
      {/* Left text column */}
      <div className="flex-shrink-0 lg:w-[320px]">
        <div className="flex items-center gap-3">
          <span className="rule" />
          <span className="eyebrow">Your Challenges</span>
        </div>
        <h2 className="mt-4 font-serif text-3xl lg:text-4xl text-navy leading-tight">
          What are your biggest{" "}
          <em className="italic text-brass">book marketing challenges?</em>
        </h2>
        <p className="mt-3 text-ink/50 text-sm">
          Select your priorities — we'll build a strategy around them.
        </p>

        {activeInfo && (
          <div className="mt-8 p-5 rounded-2xl bg-parchment border border-warm-gray">
            <h3 className="text-xl font-serif text-brass leading-tight">
              {activeInfo.keyword}
            </h3>
            <p className="mt-2 text-sm text-ink/60 leading-relaxed">
              {activeInfo.description}
            </p>
          </div>
        )}

        <p className="mt-6 text-xs text-ink/40">
          {selected.length} selected
        </p>
      </div>

      {/* Right: card grid */}
      <div className="flex-1 flex flex-col gap-8">
        <div className="flex flex-wrap gap-5 lg:gap-6">
          {CHALLENGES.map((challenge) => {
            const isSelected = selected.includes(challenge.id);
            return (
              <FlipCard
                key={challenge.id}
                challenge={challenge}
                isSelected={isSelected}
                onClick={() => toggle(challenge.id)}
                onHover={() => setHovered(challenge.id)}
                onLeave={() => setHovered(null)}
              />
            );
          })}
        </div>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-5">
            <label className="flex items-center gap-2.5 text-xs text-ink/50 cursor-pointer">
              <input type="checkbox" className="h-3.5 w-3.5 rounded border-warm-gray accent-brass"
                checked={selected.includes("not-applicable")} onChange={() => toggle("not-applicable")} />
              <span>Not applicable</span>
            </label>
            <label className="flex items-center gap-2.5 text-xs text-ink/50 cursor-pointer">
              <input type="checkbox" className="h-3.5 w-3.5 rounded border-warm-gray accent-brass"
                checked={selected.includes("other")} onChange={() => toggle("other")} />
              <span>Other not listed</span>
            </label>
          </div>

          <button
            onClick={handleNext}
            disabled={selected.length === 0}
            className="inline-flex items-center gap-2 rounded-xl px-7 py-4 text-sm font-semibold text-white shadow-lg transition disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ background: "linear-gradient(135deg, #fc6e06, #fd9844)" }}
          >
            See how we can help
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============ FLIP CARD ============ */

function FlipCard({
  challenge,
  isSelected,
  onClick,
  onHover,
  onLeave,
}: {
  challenge: Challenge;
  isSelected: boolean;
  onClick: () => void;
  onHover: () => void;
  onLeave: () => void;
}) {
  const selectedGradient =
    "linear-gradient(white, white), linear-gradient(135deg, #fc6e06 0%, #fd9844 100%)";

  return (
    <button
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative cursor-pointer flex-shrink-0"
      style={{ width: 148, height: 206, perspective: 800 }}
      aria-label={challenge.text}
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
          isSelected
            ? "[transform:rotateY(180deg)]"
            : "group-hover:[transform:rotateY(180deg)]"
        }`}
      >
        {/* Front side */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden border-[7px] border-white/90 shadow-[0_4px_24px_rgba(0,0,0,0.3)] [backface-visibility:hidden]"
          style={{
            backgroundImage: `url(${challenge.frontImg})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-[13px] font-semibold leading-[17px] text-center px-2.5 max-w-[100px] mt-[-60px] [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]">
              {challenge.text}
            </span>
          </div>
        </div>

        {/* Back side */}
        <div
          className="absolute inset-0 rounded-xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-between py-5"
          style={
            isSelected
              ? {
                  backgroundImage: selectedGradient,
                  border: "7px double transparent",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                  borderRadius: 15,
                  boxShadow: "none",
                  width: 148,
                  height: 206,
                }
              : {
                  backgroundImage: `url(${challenge.backImg})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  border: "7px solid white",
                  borderRadius: 12,
                }
          }
        >
          {isSelected && (
            <>
              <div className="flex-1 flex items-center justify-center px-3">
                <span className="text-[13px] font-semibold leading-[17px] text-center text-ink">
                  {challenge.text}
                </span>
              </div>
              <div
                className="w-5 h-10 shrink-0"
                style={{
                  backgroundImage: `url(${checkIcon})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            </>
          )}
        </div>
      </div>
    </button>
  );
}

/* ============ STEP TWO ============ */

function StepTwo({
  selectedChallenges,
  handleRestart,
}: {
  selectedChallenges: Challenge[];
  handleRestart: () => void;
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-14">
      {/* Left */}
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <span className="rule" />
          <span className="eyebrow">Your Priorities</span>
        </div>
        <h2 className="mt-4 font-serif text-3xl lg:text-4xl text-navy">
          A strategy built around{" "}
          <em className="italic text-brass">your goals.</em>
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {selectedChallenges.map((c) => (
            <div
              key={c.id}
              className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.3)] aspect-[4/3] relative group/card"
              style={{
                backgroundImage: `url(${c.backImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#001d43]/90 via-[#001d43]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-lg leading-tight text-white">{c.keyword}</p>
              </div>
            </div>
          ))}
        </div>

        <button onClick={handleRestart}
          className="mt-8 inline-flex items-center gap-2 text-sm text-ink/50 hover:text-navy transition group">
          <img src={arrowIcon} alt="" className="h-3 w-3 rotate-180 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Restart</span>
        </button>
      </div>

      {/* Right: Contact form */}
      <div className="lg:w-[380px] shrink-0">
        <div className="rounded-2xl bg-white shadow-lift p-7 sticky top-24">
          <span className="eyebrow">Ready to begin?</span>
          <h3 className="mt-2 font-serif text-2xl text-navy leading-tight">
            Tell us about your book.
          </h3>
          <p className="mt-2 text-sm text-ink/55">
            A strategist reviews your submission and creates a custom plan built
            around the priorities you selected.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-5 space-y-3.5">
            <input type="hidden" name="challenges" value={selectedChallenges.map((c) => c.keyword).join(", ")} />
            <input type="text" required placeholder="Full name"
              className="w-full rounded-lg border border-warm-gray bg-parchment px-4 py-3 text-sm text-ink placeholder-ink/40 focus:outline-none focus:ring-2 focus:ring-brass/40 focus:border-brass transition" />
            <input type="email" required placeholder="Email address"
              className="w-full rounded-lg border border-warm-gray bg-parchment px-4 py-3 text-sm text-ink placeholder-ink/40 focus:outline-none focus:ring-2 focus:ring-brass/40 focus:border-brass transition" />
            <input type="text" required placeholder="Book title"
              className="w-full rounded-lg border border-warm-gray bg-parchment px-4 py-3 text-sm text-ink placeholder-ink/40 focus:outline-none focus:ring-2 focus:ring-brass/40 focus:border-brass transition" />
            <button type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:opacity-95"
              style={{ background: "linear-gradient(135deg, #fc6e06, #fd9844)" }}>
              Get my custom plan
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-[11px] text-ink/45 text-center">We reply within 48 hours. Confidential.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
