import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Swift Book Marketing" },
      { name: "description", content: "Speak with a strategist at Swift Book Marketing. Dallas, TX." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="container-editorial py-20 lg:py-28 grid gap-16 lg:grid-cols-[1fr_1fr] items-start">
        <div>
          <div className="flex items-center gap-3"><span className="rule" /><span className="eyebrow">Contact</span></div>
          <h1 className="mt-4 text-5xl lg:text-6xl">Speak with a strategist.</h1>
          <p className="mt-6 text-lg text-ink/70">
            The fastest way to a real answer is a short book assessment. If you'd
            rather begin with a conversation, use one of the routes below.
          </p>
          <div className="mt-10 space-y-6">
            <ContactRow icon={Phone} label="Phone" value="+1 332 258 7478" href="tel:+13322587478" />
            <ContactRow icon={Mail} label="Email" value="hello@swiftbookmarketing.com" href="mailto:hello@swiftbookmarketing.com" />
            <ContactRow icon={MapPin} label="Office" value="5720 Lyndon B Johnson Fwy, Dallas, TX 75230" />
          </div>
        </div>
        <form className="rounded-sm border border-warm-gray bg-card p-8 space-y-5">
          <div>
            <label className="eyebrow">Name</label>
            <input className="mt-2 w-full rounded-sm border border-warm-gray bg-parchment px-4 py-3 text-sm focus:border-navy focus:outline-none" />
          </div>
          <div>
            <label className="eyebrow">Email</label>
            <input type="email" className="mt-2 w-full rounded-sm border border-warm-gray bg-parchment px-4 py-3 text-sm focus:border-navy focus:outline-none" />
          </div>
          <div>
            <label className="eyebrow">What are you working on?</label>
            <textarea rows={5} className="mt-2 w-full rounded-sm border border-warm-gray bg-parchment px-4 py-3 text-sm focus:border-navy focus:outline-none" />
          </div>
          <button type="button" className="w-full rounded-sm bg-navy px-6 py-3 text-sm text-parchment hover:bg-navy-soft">
            Send message
          </button>
          <p className="text-xs text-ink/55">
            We respond within one business day. Nothing is sold in a first reply.
          </p>
        </form>
      </section>
      <Footer />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const body = <span className="text-navy">{value}</span>;
  return (
    <div className="flex gap-4">
      <div className="mt-1 rounded-sm bg-stone p-2"><Icon className="h-4 w-4 text-navy" /></div>
      <div>
        <div className="eyebrow">{label}</div>
        <div className="mt-1 text-sm">
          {href ? <a href={href} className="text-navy hover:underline">{value}</a> : body}
        </div>
      </div>
    </div>
  );
}
