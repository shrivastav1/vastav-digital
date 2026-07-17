import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Vastav Digital" },
      { name: "description", content: "In-depth case studies showing how we scaled brands across e-commerce, SaaS, healthcare and more." },
      { property: "og:title", content: "Case Studies — Vastav Digital" },
      { property: "og:description", content: "How we turned strategy into revenue." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudies,
});

const studies = [
  {
    brand: "LuxeCart",
    vertical: "D2C · Fashion",
    headline: "From 2.4x to 9.1x ROAS in 90 days",
    summary: "Rebuilt the funnel, launched a creative studio, and unlocked scaled Meta + Google performance.",
    stats: [["ROAS", "9.1x"], ["Revenue", "+412%"], ["CAC", "-38%"]],
    tint: "from-[#1E5BFF] to-[#6DA7FF]",
  },
  {
    brand: "Nova Health",
    vertical: "Healthcare",
    headline: "218% lead lift with local SEO + performance",
    summary: "Hyper-local landing pages, GBP optimization and Meta lead ads delivered a full-funnel win.",
    stats: [["Leads", "+218%"], ["CPL", "-52%"], ["Clinics", "+14"]],
    tint: "from-[#0F172A] to-[#1E5BFF]",
  },
  {
    brand: "FinKart",
    vertical: "Fintech",
    headline: "-46% CAC with AI-driven qualification",
    summary: "Deployed an AI qualifier + LinkedIn ABM to compress sales cycles and cut acquisition cost.",
    stats: [["CAC", "-46%"], ["MQL→SQL", "+2.7x"], ["Payback", "3.1mo"]],
    tint: "from-[#111111] to-[#334155]",
  },
];

function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title={<>Proof, not <span className="text-gradient">promises.</span></>}
        subtitle="Deep dives into the strategy, execution and outcomes behind our client wins."
      />

      <Section>
        <div className="grid gap-10">
          {studies.map((s, i) => (
            <article
              key={s.brand}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] md:grid-cols-[1.5fr_1fr] md:p-12 md:grid animate-fade-up stagger-${Math.min(i + 1, 6)}`}
            >
              <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${s.tint} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />
              <div className="relative">
                <div className="flex items-center gap-3 text-xs font-medium">
                  <span className="rounded-full bg-royal-soft px-3 py-1 text-royal-deep">{s.vertical}</span>
                  <span className="text-muted-foreground">Case study 0{i + 1}</span>
                </div>
                <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">{s.headline}</h2>
                <p className="mt-3 text-muted-foreground">{s.summary}</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="font-display text-xl font-bold">{s.brand}</span>
                  <Link to="/contact" className="inline-flex items-center gap-1 rounded-full btn-royal px-4 py-2 text-xs font-semibold">
                    Read full story <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
              <div className="relative mt-8 grid grid-cols-3 gap-3 md:mt-0 md:grid-cols-1">
                {s.stats.map(([k, v]) => (
                  <div key={k} className="glass rounded-2xl p-5 text-center md:text-left">
                    <p className="text-xs text-muted-foreground">{k}</p>
                    <p className="mt-1 font-display text-2xl font-bold text-gradient md:text-3xl">{v}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
