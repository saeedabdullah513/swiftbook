import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "Request a Book Assessment — Swift Book Marketing" },
      {
        name: "description",
        content:
          "A strategist reviews your book, audience, and goals before recommending a plan. No payment required. No package sold during the assessment.",
      },
    ],
  }),
  component: Assessment,
});

const steps = [
  "Book",
  "Author",
  "Current Position",
  "Objective",
  "Timeline & Investment",
  "Confirm",
] as const;

type FormState = Record<string, string>;

export function Assessment() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState<FormState>({});

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="min-h-screen">
      <Nav />
      <section className="container-editorial py-16 lg:py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="rule" />
            <span className="eyebrow">Book Assessment</span>
          </div>
          <h1 className="mt-4 text-4xl lg:text-5xl">
            A strategist will review your book before anything is recommended.
          </h1>
          <p className="mt-5 text-ink/70">
            Six short steps. No payment required. No package sold during the
            assessment. You'll receive a written response, not an auto-reply.
          </p>
        </div>

        {done ? (
          <ConfirmationScreen form={form} />
        ) : (
          <div className="mt-14 grid gap-10 lg:grid-cols-[240px_1fr]">
            {/* Steps rail */}
            <ol className="hidden lg:block">
              {steps.map((s, i) => (
                <li key={s} className="flex items-start gap-3 pb-6 relative">
                  {i < steps.length - 1 && (
                    <span className="absolute left-[11px] top-6 bottom-0 w-px bg-warm-gray" />
                  )}
                  <span
                    className={`mt-0.5 h-6 w-6 rounded-full border flex items-center justify-center text-[11px] font-mono ${
                      i < step
                        ? "bg-navy text-white border-navy"
                        : i === step
                          ? "border-brass text-brass"
                          : "border-warm-gray text-ink/50"
                    }`}
                  >
                    {i < step ? <Check className="h-3 w-3" /> : i + 1}
                  </span>
                  <div>
                    <div
                      className={`text-sm ${i === step ? "text-navy font-medium" : "text-ink/60"}`}
                    >
                      {s}
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="rounded-sm border border-warm-gray bg-card p-8 lg:p-10">
              {/* mobile progress */}
              <div className="lg:hidden mb-6">
                <div className="flex items-center justify-between text-xs text-ink/60">
                  <span>Step {step + 1} of {steps.length}</span>
                  <span>{steps[step]}</span>
                </div>
                <div className="mt-2 h-1 rounded-full bg-stone">
                  <div
                    className="h-full rounded-full bg-navy transition-all"
                    style={{ width: `${((step + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>

              {step === 0 && <StepBook form={form} update={update} />}
              {step === 1 && <StepAuthor form={form} update={update} />}
              {step === 2 && <StepPosition form={form} update={update} />}
              {step === 3 && <StepObjective form={form} update={update} />}
              {step === 4 && <StepTimeline form={form} update={update} />}
              {step === 5 && <StepConfirm form={form} />}

              <div className="mt-10 pt-6 border-t border-warm-gray flex items-center justify-between">
                <button
                  onClick={back}
                  disabled={step === 0}
                  className="inline-flex items-center gap-2 text-sm text-ink/70 disabled:opacity-40"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                {step < steps.length - 1 ? (
                  <button
                    onClick={next}
                    className="inline-flex items-center gap-2 rounded-[6px] bg-brass px-6 py-3 text-sm text-white hover:bg-[var(--orange-hover)]"
                  >
                    Continue <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setDone(true)}
                    className="inline-flex items-center gap-2 rounded-[6px] bg-brass px-6 py-3 text-sm text-white hover:bg-[var(--orange-hover)]"
                  >
                    Submit Assessment <Check className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <div className="mt-2">{children}</div>
      {hint && <p className="mt-1.5 text-xs text-ink/55">{hint}</p>}
    </label>
  );
}

const inputCls =
  "w-full rounded-sm border border-warm-gray bg-parchment px-4 py-3 text-sm focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/10";

function StepBook({ form, update }: { form: FormState; update: (k: string, v: string) => void }) {
  return (
    <div className="space-y-6">
      <h2 className="font-serif text-3xl text-navy">Tell us about the book.</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Book Title">
          <input className={inputCls} value={form.title || ""} onChange={(e) => update("title", e.target.value)} placeholder="e.g. The Cartographer's Daughter" />
        </Field>
        <Field label="Genre / Category">
          <input className={inputCls} value={form.genre || ""} onChange={(e) => update("genre", e.target.value)} placeholder="Literary fiction, memoir, business…" />
        </Field>
        <Field label="Publication Status">
          <select className={inputCls} value={form.status || ""} onChange={(e) => update("status", e.target.value)}>
            <option value="">Choose one</option>
            <option>Manuscript complete</option>
            <option>Scheduled for publication</option>
            <option>Recently published</option>
            <option>Published, ready to relaunch</option>
          </select>
        </Field>
        <Field label="Publication Date (or planned)">
          <input type="date" className={inputCls} value={form.pubdate || ""} onChange={(e) => update("pubdate", e.target.value)} />
        </Field>
      </div>
      <Field label="Short Synopsis" hint="Two or three sentences is plenty.">
        <textarea rows={4} className={inputCls} value={form.synopsis || ""} onChange={(e) => update("synopsis", e.target.value)} />
      </Field>
      <Field label="Book Link (Amazon or publisher page, if any)">
        <input className={inputCls} value={form.link || ""} onChange={(e) => update("link", e.target.value)} placeholder="https://" />
      </Field>
      <Field label="Comparable Books" hint="Two or three titles readers of your book would also enjoy.">
        <input className={inputCls} value={form.comps || ""} onChange={(e) => update("comps", e.target.value)} />
      </Field>
    </div>
  );
}

function StepAuthor({ form, update }: { form: FormState; update: (k: string, v: string) => void }) {
  return (
    <div className="space-y-6">
      <h2 className="font-serif text-3xl text-navy">And about you.</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Author Name">
          <input className={inputCls} value={form.name || ""} onChange={(e) => update("name", e.target.value)} />
        </Field>
        <Field label="Email">
          <input type="email" className={inputCls} value={form.email || ""} onChange={(e) => update("email", e.target.value)} />
        </Field>
        <Field label="Author Website">
          <input className={inputCls} value={form.website || ""} onChange={(e) => update("website", e.target.value)} placeholder="Optional" />
        </Field>
        <Field label="Newsletter / Email Audience">
          <select className={inputCls} value={form.list || ""} onChange={(e) => update("list", e.target.value)}>
            <option value="">Choose one</option>
            <option>None yet</option>
            <option>Under 1,000</option>
            <option>1,000 – 10,000</option>
            <option>10,000 – 50,000</option>
            <option>50,000+</option>
          </select>
        </Field>
      </div>
      <Field label="Author Background" hint="Credentials, prior work, expertise that supports the book.">
        <textarea rows={4} className={inputCls} value={form.background || ""} onChange={(e) => update("background", e.target.value)} />
      </Field>
      <Field label="Previous Books (if any)">
        <input className={inputCls} value={form.prev || ""} onChange={(e) => update("prev", e.target.value)} />
      </Field>
    </div>
  );
}

function StepPosition({ form, update }: { form: FormState; update: (k: string, v: string) => void }) {
  return (
    <div className="space-y-6">
      <h2 className="font-serif text-3xl text-navy">Where does the book stand today?</h2>
      <Field label="Marketing already completed">
        <textarea rows={3} className={inputCls} value={form.done || ""} onChange={(e) => update("done", e.target.value)} placeholder="Reviews, ads, PR, launch events, previous agency work…" />
      </Field>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Current sales channels">
          <input className={inputCls} value={form.channels || ""} onChange={(e) => update("channels", e.target.value)} placeholder="Amazon, IngramSpark, direct…" />
        </Field>
        <Field label="Current advertising (if any)">
          <input className={inputCls} value={form.ads || ""} onChange={(e) => update("ads", e.target.value)} />
        </Field>
        <Field label="Existing reviews">
          <select className={inputCls} value={form.reviews || ""} onChange={(e) => update("reviews", e.target.value)}>
            <option value="">Choose one</option>
            <option>None yet</option>
            <option>Under 25</option>
            <option>25 – 100</option>
            <option>100 – 500</option>
            <option>500+</option>
          </select>
        </Field>
        <Field label="Previous agency experience">
          <select className={inputCls} value={form.prevAgency || ""} onChange={(e) => update("prevAgency", e.target.value)}>
            <option value="">Choose one</option>
            <option>Never worked with one</option>
            <option>Positive experience</option>
            <option>Mixed experience</option>
            <option>Poor experience</option>
          </select>
        </Field>
      </div>
      <Field label="Current challenges">
        <textarea rows={3} className={inputCls} value={form.challenges || ""} onChange={(e) => update("challenges", e.target.value)} placeholder="What is not working, or what feels stuck." />
      </Field>
    </div>
  );
}

function StepObjective({ form, update }: { form: FormState; update: (k: string, v: string) => void }) {
  const objectives = [
    "Book sales",
    "Reader reach",
    "Media visibility",
    "Professional authority",
    "Speaking opportunities",
    "Author platform development",
    "Book relaunch",
  ];
  const selected = (form.objective || "").split("|").filter(Boolean);
  const toggle = (o: string) => {
    const set = new Set(selected);
    set.has(o) ? set.delete(o) : set.add(o);
    update("objective", Array.from(set).join("|"));
  };
  return (
    <div className="space-y-6">
      <h2 className="font-serif text-3xl text-navy">What matters most for this campaign?</h2>
      <p className="text-sm text-ink/70">Select as many as apply. We'll help you rank them during the strategy call.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {objectives.map((o) => {
          const on = selected.includes(o);
          return (
            <button
              key={o}
              onClick={() => toggle(o)}
              className={`text-left rounded-sm border px-4 py-4 text-sm flex items-center justify-between ${
                on ? "border-navy bg-navy text-white" : "border-navy/20 hover:border-navy"
              }`}
            >
              {o}
              {on && <Check className="h-4 w-4" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepTimeline({ form, update }: { form: FormState; update: (k: string, v: string) => void }) {
  return (
    <div className="space-y-6">
      <h2 className="font-serif text-3xl text-navy">Timeline and investment.</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Desired campaign start">
          <select className={inputCls} value={form.start || ""} onChange={(e) => update("start", e.target.value)}>
            <option value="">Choose one</option>
            <option>Within 30 days</option>
            <option>1 – 3 months</option>
            <option>3 – 6 months</option>
            <option>Later than 6 months</option>
          </select>
        </Field>
        <Field label="Launch date (if applicable)">
          <input type="date" className={inputCls} value={form.launch || ""} onChange={(e) => update("launch", e.target.value)} />
        </Field>
        <Field label="Expected campaign duration">
          <select className={inputCls} value={form.duration || ""} onChange={(e) => update("duration", e.target.value)}>
            <option value="">Choose one</option>
            <option>Under 3 months</option>
            <option>3 – 6 months</option>
            <option>6 – 12 months</option>
            <option>Ongoing partnership</option>
          </select>
        </Field>
        <Field label="Investment range" hint="Excludes third-party ad spend and retailer fees.">
          <select className={inputCls} value={form.budget || ""} onChange={(e) => update("budget", e.target.value)}>
            <option value="">Choose one</option>
            <option>$5,000 – $15,000</option>
            <option>$15,000 – $35,000</option>
            <option>$35,000 – $75,000</option>
            <option>$75,000+</option>
            <option>Unsure — advise me</option>
          </select>
        </Field>
      </div>
    </div>
  );
}

function StepConfirm({ form }: { form: FormState }) {
  const rows = [
    ["Book", form.title],
    ["Genre", form.genre],
    ["Status", form.status],
    ["Author", form.name],
    ["Email", form.email],
    ["Objective", (form.objective || "").split("|").filter(Boolean).join(", ")],
    ["Timeline", form.start],
    ["Investment", form.budget],
  ];
  return (
    <div className="space-y-6">
      <h2 className="font-serif text-3xl text-navy">Please review before submitting.</h2>
      <p className="text-sm text-ink/70">
        Your assessment will be reviewed by a strategist before any services are
        recommended.
      </p>
      <div className="rounded-sm border border-warm-gray bg-parchment divide-y divide-warm-gray">
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-3 gap-4 px-5 py-3 text-sm">
            <div className="eyebrow !text-ink/55 col-span-1">{k}</div>
            <div className="col-span-2 text-ink/85">{v || <span className="text-ink/40">Not provided</span>}</div>
          </div>
        ))}
      </div>
      <div className="rounded-sm bg-stone/60 border border-warm-gray p-5 flex gap-3">
        <ShieldCheck className="h-5 w-5 text-brass shrink-0" />
        <p className="text-sm text-ink/80">
          No payment is required. No package will be sold during the assessment.
          You'll receive a written response from a named strategist within one
          business day.
        </p>
      </div>
    </div>
  );
}

function ConfirmationScreen({ form }: { form: FormState }) {
  return (
    <div className="mt-16 max-w-2xl">
      <div className="rounded-sm border border-warm-gray bg-card p-10 text-center">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-brass text-white">
          <Check className="h-6 w-6" />
        </div>
        <h2 className="mt-6 font-serif text-4xl text-navy">
          Assessment received{form.name ? `, ${form.name.split(" ")[0]}` : ""}.
        </h2>
        <p className="mt-4 text-ink/70">
          Miriam Alderson, our Lead Strategist, will review your book, audience, and
          goals personally. You'll hear back within one business day at{" "}
          <span className="text-navy">{form.email || "the email you provided"}</span>{" "}
          with a written response — not an auto-reply.
        </p>
        <div className="mt-8 grid gap-3 text-left text-sm text-ink/75 max-w-md mx-auto">
          {[
            "You will receive a written strategist response.",
            "No payment will be requested.",
            "No package will be pushed.",
            "You can request an assessment summary as a PDF.",
          ].map((i) => (
            <div key={i} className="flex gap-2">
              <Check className="h-4 w-4 text-brass shrink-0 mt-0.5" />
              {i}
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-sm border border-navy px-6 py-3 text-sm text-navy hover:bg-navy hover:text-parchment"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
