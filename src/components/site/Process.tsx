import { useEffect, useRef, useState } from "react";
import { BrandWatermark } from "./BrandWatermark";

const STEPS = [
  {
    step: "01",
    label: "Client consultation meeting",
    title: "Book Assessment",
    description:
      "We review the book, the market position, and the main commercial objective to understand your unique position.",
  },
  {
    step: "02",
    label: "Audience map",
    title: "Audience & Positioning",
    description:
      "We map the right readers, strongest angles, and the highest-value channels for your book.",
  },
  {
    step: "03",
    label: "Team presenting strategy",
    title: "Campaign Blueprint",
    description:
      "You receive a scoped plan with timing, deliverables, and measurement criteria tailored to your goals.",
  },
  {
    step: "04",
    label: "Performance loop",
    title: "Execution & Reporting",
    description:
      "Every campaign moves through approvals, clear visibility, and contextual reporting that shows real impact.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background: "linear-gradient(180deg, #001d43 0%, #0a2a58 100%)",
      }}
    >
      <BrandWatermark
        className="-left-16 top-8 h-[320px] w-auto -translate-x-[20%]"
        opacity={0.06}
      />
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(252,110,6,0.45) 1px, transparent 1px), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px, 80px 80px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brass/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brass/5 blur-[100px] pointer-events-none" />

      <div className="container-editorial relative z-10">
        {/* Section head */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="rule" />
              <span className="eyebrow">The Process</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl lg:text-4xl text-white leading-tight max-w-2xl">
              A smarter route to book marketing —{" "}
              <em className="not-italic bg-gradient-to-r from-brass via-brass-soft to-brass bg-clip-text text-transparent">
                clear, connected, and built around your book.
              </em>
            </h2>
          </div>
          <p className="text-white/60 max-w-md leading-relaxed">
            Clear steps, visible logic, and refined visual cues help the
            process feel modern without becoming complicated.
          </p>
        </div>

        {/* Process track */}
        <div className="relative">
          {/* Animated glowing beam — desktop only */}
          <div className="hidden lg:block absolute left-[8%] right-[8%] top-[60px] h-[2px] pointer-events-none"
            style={{
              background: "linear-gradient(90deg, rgba(252,110,6,0.08), rgba(252,110,6,0.7) 30%, rgba(252,110,6,0.9) 50%, rgba(252,110,6,0.7) 70%, rgba(252,110,6,0.08))",
              backgroundSize: "200% 100%",
              boxShadow: "0 0 30px rgba(252,110,6,0.4), 0 0 60px rgba(0,29,67,0.25)",
              animation: "beamFlow 3s ease-in-out infinite",
            }}
          />
          {/* Beam glow particles */}
          <div className="hidden lg:block absolute left-[12%] top-[58px] h-[6px] w-[6px] rounded-full bg-brass pointer-events-none"
            style={{ boxShadow: "0 0 14px rgba(252,110,6,0.9), 0 0 30px rgba(252,110,6,0.5)", animation: "particleDrift 4s ease-in-out infinite" }}
          />
          <div className="hidden lg:block absolute left-[45%] top-[54px] h-[10px] w-[10px] rounded-full bg-brass pointer-events-none"
            style={{ boxShadow: "0 0 20px rgba(252,110,6,0.8), 0 0 40px rgba(252,110,6,0.4)", animation: "particleDrift 5s ease-in-out 1s infinite" }}
          />
          <div className="hidden lg:block absolute left-[78%] top-[59px] h-[4px] w-[4px] rounded-full bg-white pointer-events-none"
            style={{ boxShadow: "0 0 12px rgba(255,255,255,0.6)", animation: "particleDrift 3.5s ease-in-out 0.5s infinite" }}
          />

          {/* Inline keyframes for beam + particle animations */}
          <style>{`
            @keyframes beamFlow {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            @keyframes particleDrift {
              0%, 100% { transform: translateX(0); opacity: 0.6; }
              50% { transform: translateX(80px); opacity: 1; }
            }
            @keyframes chipPulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.08); }
            }
            @keyframes cardGlow {
              0%, 100% { box-shadow: 0 0 36px rgba(0,29,67,0.2); }
              50% { box-shadow: 0 0 50px rgba(252,110,6,0.12), 0 0 24px rgba(0,29,67,0.15); }
            }
            .animate-beam { animation: beamFlow 3s ease-in-out infinite; }
            .animate-chip { animation: chipPulse 3s ease-in-out infinite; }
            .animate-card-glow { animation: cardGlow 4s ease-in-out infinite; }
            .animate-particle-1 { animation: particleDrift 4s ease-in-out infinite; }
            .animate-particle-2 { animation: particleDrift 5s ease-in-out 1s infinite; }
            .animate-particle-3 { animation: particleDrift 3.5s ease-in-out 0.5s infinite; }
          `}</style>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative z-10">
            {STEPS.map((s, i) => (
              <article
                key={s.step}
                className="group relative rounded-[22px] p-6 lg:p-7 border transition-all duration-500"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  boxShadow: "0 0 36px rgba(0,29,67,0.25)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s ease-out ${i * 0.15}s, transform 0.6s ease-out ${i * 0.15}s, border-color 0.3s, box-shadow 0.3s`,
                  animation: visible ? `cardGlow ${4 + i * 0.5}s ease-in-out ${i * 0.8}s infinite` : "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(252,110,6,0.45)";
                  e.currentTarget.style.boxShadow =
                    "0 0 50px rgba(252,110,6,0.18), 0 0 20px rgba(0,29,67,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.boxShadow =
                    "0 0 36px rgba(0,29,67,0.25)";
                }}
              >
                {/* Step chip + label */}
                <div className="flex flex-col gap-3 mb-5">
                  <span
                    className="inline-flex items-center justify-center w-[50px] h-[50px] rounded-full text-white font-extrabold text-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, #fc6e06, #e05f00)",
                      animation: `chipPulse ${2.5 + i * 0.3}s ease-in-out ${i * 0.4}s infinite`,
                    }}
                  >
                    {s.step}
                  </span>
                  <span className="text-xs uppercase tracking-[0.14em] text-brass font-semibold">
                    {s.label}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-white leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/72">
                  {s.description}
                </p>

                {/* Hover glow dot */}
                <div className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-brass opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_12px_rgba(252,110,6,0.8)]" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
