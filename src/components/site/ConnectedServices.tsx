import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import commerceImg from "@/assets/tinuiti/Homepage_Commerce_Service-Card.webp";
import socialImg from "@/assets/tinuiti/Homepage_Social_Service-Card.webp";
import tvAdImg from "@/assets/tinuiti/Homepage_TV-Audio-Display_Service-Card.webp";
import searchImg from "@/assets/tinuiti/Homepage_Search_Service-Card.webp";
import allImg from "@/assets/tinuiti/Homepage_All-Services_Service-Card.webp";
import foundationImg from "@/assets/tinuiti/Homepage_Foundation_Service-Card.webp";

interface ServiceCardData {
  title: string;
  tagline: string;
  description: string;
  image: string;
  bullets?: { label: string; href: string }[];
  cta: { label: string; href: string };
  featured?: boolean;
}

const SERVICES: ServiceCardData[] = [
  {
    title: "Amazon Marketing",
    tagline: "Retailer Performance",
    description:
      "Full-funnel Amazon strategy — from product page to ad dominance. We optimize listings, run targeted campaigns, and scale what works.",
    image: commerceImg,
    bullets: [
      { label: "Amazon Ads", href: "/solutions" },
      { label: "A+ Content", href: "/solutions" },
      { label: "KDP Strategy", href: "/solutions" },
    ],
    cta: { label: "Explore Amazon Marketing", href: "/solutions" },
  },
  {
    title: "Content & SEO",
    tagline: "Authority & Discovery",
    description:
      "Content that ranks, converts, and establishes lasting authority. Strategic SEO meets editorial excellence to put your book in front of the right readers.",
    image: searchImg,
    bullets: [
      { label: "Author Blog", href: "/solutions" },
      { label: "SEO Strategy", href: "/solutions" },
      { label: "Guest Posting", href: "/solutions" },
      { label: "Landing Pages", href: "/solutions" },
    ],
    cta: { label: "Explore Content & SEO", href: "/solutions" },
  },
  {
    title: "Social Media",
    tagline: "Audience Growth",
    description:
      "A disciplined, creative approach to social — Instagram, TikTok, Meta. We build communities around your book, your ideas, and your voice.",
    image: socialImg,
    bullets: [
      { label: "Instagram & TikTok", href: "/solutions" },
      { label: "Meta Ads", href: "/solutions" },
    ],
    cta: { label: "Explore Social Media", href: "/solutions" },
  },
  {
    title: "Press & PR",
    tagline: "Media Presence",
    description:
      "From major publications to niche podcasts — we position your book where it earns attention, credibility, and reader trust.",
    image: tvAdImg,
    bullets: [
      { label: "Press Releases", href: "/solutions" },
      { label: "Podcast Tours", href: "/solutions" },
      { label: "Media Outreach", href: "/solutions" },
    ],
    cta: { label: "Explore Press & PR", href: "/solutions" },
  },
  {
    title: "Email & Direct",
    tagline: "Reader Relationships",
    description:
      "Newsletters, launch sequences, and automated nurture flows that turn casual browsers into loyal readers. Own your audience.",
    image: allImg,
    bullets: [
      { label: "List Building", href: "/solutions" },
      { label: "Launch Sequences", href: "/solutions" },
      { label: "Automation", href: "/solutions" },
    ],
    cta: { label: "Explore Email & Direct", href: "/solutions" },
  },
  {
    title: "For New Authors",
    tagline: "Launch Package",
    description:
      "A curated starter program for debut authors. Every foundational channel, streamlined and measured — built to turn early momentum into real momentum.",
    image: foundationImg,
    featured: true,
    cta: { label: "Learn about the launch package", href: "/assessment" },
  },
];

export function ConnectedServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 lg:py-32 bg-white">
      <div className="container-editorial">
        {/* Header — elegant, centered */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-20">
          <div className="flex items-center justify-center gap-3">
            <span className="rule" />
            <span className="eyebrow">Connected Services</span>
            <span className="rule" />
          </div>
          <h2 className="mt-5 font-serif text-4xl lg:text-5xl text-navy leading-tight">
            Every channel,{" "}
            <em className="italic text-brass">one strategy.</em>
          </h2>
          <p className="mt-4 text-ink/60 leading-relaxed max-w-xl mx-auto">
            We don't sell disconnected services. Every campaign is designed as
            a cohesive system — Amazon, content, PR, social, and email working
            together toward a single outcome: your book, in more hands.
          </p>
          <a
            href="/solutions"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-navy text-white px-6 py-3.5 text-sm font-semibold hover:bg-navy-soft transition"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((card, i) => (
            <ServiceCard
              key={card.title}
              card={card}
              visible={visible}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  card,
  visible,
  index,
}: {
  card: ServiceCardData;
  visible: boolean;
  index: number;
}) {
  return (
    <article
      className={`group relative rounded-2xl overflow-hidden flex flex-col border transition-all duration-500 ${
        card.featured
          ? "bg-navy text-white border-navy"
          : "bg-white border-warm-gray hover:border-navy/30 hover:shadow-[0_16px_40px_-14px_rgba(0,29,67,0.13)]"
      }`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.5s ease-out ${index * 0.12}s, transform 0.5s ease-out ${index * 0.12}s`,
      }}
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 lg:p-7 flex flex-col flex-1">
        {/* Tagline chip */}
        <span
          className={`inline-block text-[10px] font-semibold tracking-[0.16em] uppercase mb-3 px-2.5 py-0.5 rounded-full w-fit ${
            card.featured
              ? "bg-brass/20 text-brass"
              : "bg-brass/10 text-brass"
          }`}
        >
          {card.tagline}
        </span>

        <h3
          className={`font-serif text-2xl leading-tight ${
            card.featured ? "text-white" : "text-navy"
          }`}
        >
          {card.title}
        </h3>

        <p
          className={`mt-2 text-sm leading-relaxed ${
            card.featured ? "text-white/65" : "text-ink/60"
          }`}
        >
          {card.description}
        </p>

        {/* Bullets */}
        {card.bullets && card.bullets.length > 0 && (
          <div className="mt-4 pt-4 border-t border-black/6 flex flex-wrap gap-x-4 gap-y-1.5">
            {card.bullets.map((b) => (
              <a
                key={b.label}
                href={b.href}
                className={`text-xs font-medium hover:underline transition ${
                  card.featured ? "text-white/60 hover:text-white" : "text-ink/50 hover:text-navy"
                }`}
              >
                {b.label}
              </a>
            ))}
          </div>
        )}

        {/* CTA */}
        <a
          href={card.cta.href}
          className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition group/link ${
            card.featured
              ? "text-brass hover:text-brass-soft"
              : "text-navy hover:text-brass"
          }`}
        >
          {card.cta.label}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
        </a>
      </div>

      {/* Accent corner line */}
      <div
        className={`absolute top-0 right-0 w-16 h-16 pointer-events-none ${
          card.featured ? "opacity-20" : "opacity-0 group-hover:opacity-100"
        } transition-opacity duration-500`}
        style={{
          background: `linear-gradient(135deg, transparent 50%, ${card.featured ? "#fc6e06" : "#001d43"}15 100%)`,
        }}
      />
    </article>
  );
}
