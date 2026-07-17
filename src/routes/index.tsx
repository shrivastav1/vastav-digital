import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, TrendingUp, Target, Zap, BarChart3, Users, Globe, Bot, Search, Palette, ShoppingCart, Star, CheckCircle2, PlayCircle } from "lucide-react";
import { Section, SectionHeader, Eyebrow } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vastav Digital — AI-Powered Digital Marketing Agency" },
      { name: "description", content: "Performance marketing, SEO, web design, creative and AI automation for brands that want to grow smarter and scale faster." },
      { property: "og:title", content: "Vastav Digital — AI-Powered Digital Marketing Agency" },
      { property: "og:description", content: "Grow Smarter. Scale Faster. Premium digital marketing for ambitious brands." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stats = [
  { value: 320, suffix: "+", label: "Brands Scaled" },
  { value: 1200, suffix: "M+", label: "Ad Spend Managed", prefix: "₹" },
  { value: 8, suffix: "x", label: "Avg. ROAS" },
  { value: 97, suffix: "%", label: "Client Retention" },
];

function CountUp({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1400;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setN(Math.floor(end * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [end]);
  return <span ref={ref}>{prefix}{n.toLocaleString()}{suffix}</span>;
}

const services = [
  { icon: TrendingUp, title: "Performance Marketing", desc: "Google, Meta, LinkedIn, YouTube. ROAS-obsessed campaigns that print pipeline." },
  { icon: Search, title: "SEO & Content", desc: "Technical, local, and e-commerce SEO backed by editorial-grade content." },
  { icon: Globe, title: "Web & Development", desc: "Next.js, Shopify, WordPress. Websites engineered for speed and conversion." },
  { icon: Palette, title: "Brand & Creative", desc: "Identity, motion, reels and thumb-stopping ad creative that lifts CTR." },
  { icon: Bot, title: "AI Automation", desc: "Chatbots, lead qualification, content ops. Human-quality output at scale." },
  { icon: BarChart3, title: "CRO & Analytics", desc: "GA4, GTM, funnel design. Turn traffic into revenue, not just visits." },
];

const industries = [
  "E-commerce", "Real Estate", "Healthcare", "Education", "SaaS", "Restaurants", "Manufacturing", "B2B", "Fashion", "Fintech", "Travel", "Startups",
];

const process = [
  { step: "01", title: "Discover", desc: "Deep-dive into your goals, market, positioning and unit economics." },
  { step: "02", title: "Strategy", desc: "Custom growth blueprint with clear KPIs, channels and creative direction." },
  { step: "03", title: "Execute", desc: "Ship campaigns, sites and creative — fast, with weekly velocity reports." },
  { step: "04", title: "Scale", desc: "Compound wins with CRO, AI automation and expansion into new channels." },
];

const testimonials = [
  { name: "Aarav Mehta", role: "CEO, LuxeCart", quote: "Vastav rebuilt our funnel end-to-end. ROAS went from 2.4x to 9.1x in 90 days.", rating: 5 },
  { name: "Sneha Rao", role: "Marketing Head, Nova Health", quote: "The most strategic agency we've worked with. They think like operators, not vendors.", rating: 5 },
  { name: "Rahul Verma", role: "Founder, FinKart", quote: "Our CAC dropped 46% and MQLs tripled. Genuine growth partners.", rating: 5 },
  { name: "Priya Sharma", role: "CMO, EduPrime", quote: "Creative that converts + engineering discipline. Rare combo, exceptional team.", rating: 5 },
];

const logos = ["NOVA", "LUXE", "FINKART", "EDUPRIME", "PULSE", "AURA", "KAIROS", "VERTEX", "ORBIT", "HELIX"];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="absolute inset-0 -z-10 mesh-bg" />
        <div className="absolute inset-0 -z-10 grid-lines opacity-40" />
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-royal-deep">
            <Sparkles className="h-3.5 w-3.5" /> AI-Powered Growth Partner
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            Grow Smarter.<br />
            <span className="text-gradient">Scale Faster.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Vastav Digital is a premium performance marketing, SEO and AI agency helping ambitious brands turn traffic into revenue — predictably.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full btn-royal px-6 py-3 text-sm font-semibold">
              Get Free Audit <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/case-studies" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium">
              <PlayCircle className="h-4 w-4" /> See Case Studies
            </Link>
          </div>

          {/* Floating stat cards */}
          <div className="pointer-events-none mt-16 hidden justify-center gap-6 md:flex">
            <div className="glass animate-[float_6s_ease-in-out_infinite] rounded-2xl px-5 py-3 text-left">
              <p className="text-xs text-muted-foreground">Avg. ROAS</p>
              <p className="font-display text-2xl font-bold text-gradient">8.4x</p>
            </div>
            <div className="glass rounded-2xl px-5 py-3 text-left" style={{ animation: "float 7s ease-in-out infinite .5s" }}>
              <p className="text-xs text-muted-foreground">Pipeline Generated</p>
              <p className="font-display text-2xl font-bold">₹1200M+</p>
            </div>
            <div className="glass rounded-2xl px-5 py-3 text-left" style={{ animation: "float 8s ease-in-out infinite 1s" }}>
              <p className="text-xs text-muted-foreground">Brands Scaled</p>
              <p className="font-display text-2xl font-bold">320+</p>
            </div>
          </div>
        </div>
        <style>{`@keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }`}</style>
      </section>

      {/* LOGO SLIDER */}
      <section className="border-y border-border/60 bg-surface py-10">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by 320+ ambitious brands
          </p>
          <div className="mt-6 flex gap-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex shrink-0 animate-[marquee_30s_linear_infinite] gap-12">
              {[...logos, ...logos].map((l, i) => (
                <span key={i} className="font-display text-2xl font-bold tracking-widest text-foreground/40">{l}</span>
              ))}
            </div>
          </div>
          <style>{`@keyframes marquee { to { transform: translateX(-50%) } }`}</style>
        </div>
      </section>

      {/* STATS */}
      <Section>
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-3xl p-8 text-center">
              <p className="font-display text-5xl font-bold text-gradient">
                <CountUp end={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section>
        <SectionHeader
          eyebrow="What We Do"
          title={<>Full-stack growth. <span className="text-gradient">One partner.</span></>}
          subtitle="From strategy to execution, we run the growth stack so your team can run the business."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-100" style={{ background: "radial-gradient(circle, #1E5BFF, transparent 60%)" }} />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl btn-royal">
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-royal-deep">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* AI SOLUTIONS */}
      <section className="relative overflow-hidden bg-[oklch(0.16_0.02_260)] py-24 text-white md:py-32">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(1000px 500px at 80% 20%, #1E5BFF, transparent 60%)" }} />
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div>
              <Eyebrow>AI Solutions</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
                AI that actually <span className="text-gradient">moves the needle.</span>
              </h2>
              <p className="mt-4 text-white/70">
                We deploy production-grade AI for lead qualification, content generation, chat and support — measured in revenue, not novelty.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "AI Chatbots & Lead Qualification",
                  "Content & Creative at 10x speed",
                  "Marketing Automation & CRM sync",
                  "24/7 AI Customer Support",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-white/85">
                    <CheckCircle2 className="h-5 w-5 text-royal" /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/services" className="mt-8 inline-flex items-center gap-2 rounded-full btn-royal px-6 py-3 text-sm font-semibold">
                Explore AI Suite <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="glass-dark rounded-3xl p-6">
                <div className="flex items-center gap-2">
                  <div className="grid h-9 w-9 place-items-center rounded-xl btn-royal"><Bot className="h-5 w-5" /></div>
                  <div>
                    <p className="text-sm font-semibold">Vastav AI Assistant</p>
                    <p className="text-xs text-white/50">Qualifying lead · Live</p>
                  </div>
                </div>
                <div className="mt-5 space-y-3 text-sm">
                  <div className="rounded-2xl bg-white/5 p-3">Hi 👋 What are you looking to grow this quarter?</div>
                  <div className="ml-auto max-w-[80%] rounded-2xl btn-royal p-3 text-white">We need more qualified B2B leads.</div>
                  <div className="rounded-2xl bg-white/5 p-3">Got it. Based on your ICP, LinkedIn + intent SEO will 3x MQLs in 60 days. Booking a strategist now…</div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                  {[["Leads", "+218%"], ["CAC", "-46%"], ["MQLs", "3.1x"]].map(([k, v]) => (
                    <div key={k} className="rounded-xl bg-white/5 p-3">
                      <p className="font-display text-lg font-bold text-gradient">{v}</p>
                      <p className="text-xs text-white/60">{k}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <Section>
        <SectionHeader eyebrow="Industries We Serve" title="Deep expertise across verticals" subtitle="Playbooks refined across 320+ engagements." />
        <div className="mt-10 flex flex-wrap gap-3">
          {industries.map((i) => (
            <Link to="/industries" key={i} className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-all hover:border-royal hover:text-royal">
              {i}
            </Link>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section>
        <SectionHeader
          eyebrow="Our Process"
          title={<>A proven system, not <span className="text-gradient">guesswork.</span></>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {process.map((p) => (
            <div key={p.step} className="relative rounded-3xl border border-border bg-card p-8">
              <span className="font-display text-6xl font-bold text-gradient opacity-30">{p.step}</span>
              <h3 className="mt-3 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Testimonials" title="Loved by founders & CMOs" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-3xl bg-card p-6 shadow-[var(--shadow-glass)]">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-royal text-royal" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-9 w-9 place-items-center rounded-full btn-royal text-xs font-bold">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIT FORM */}
      <Section>
        <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 md:p-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Free Digital Marketing Audit</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Get a <span className="text-gradient">free growth audit</span> in 48 hours.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A senior strategist will review your ads, funnel, website and SEO — and send back a personalized roadmap. No fluff, no pitch.
            </p>
            <ul className="mt-6 grid gap-3 text-sm">
              {["30-page tactical report", "Channel-by-channel opportunity map", "90-day growth plan"].map((f) => (
                <li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-royal" /> {f}</li>
              ))}
            </ul>
          </div>
          <form className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-3 md:grid-cols-2">
              <input required placeholder="Full name" className="rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-royal" />
              <input required type="email" placeholder="Work email" className="rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-royal" />
            </div>
            <input placeholder="Website URL" className="rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-royal" />
            <input placeholder="Monthly ad budget" className="rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-royal" />
            <textarea rows={3} placeholder="What are you trying to grow?" className="rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-royal" />
            <button className="mt-1 inline-flex items-center justify-center gap-2 rounded-full btn-royal px-6 py-3 text-sm font-semibold">
              Request Free Audit <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </Section>

      <CTA />
    </>
  );
}
