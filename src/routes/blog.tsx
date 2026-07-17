import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { ArrowRight, Clock, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Vastav Digital" },
      { name: "description", content: "Growth playbooks, AI marketing insights and case studies from the Vastav team." },
      { property: "og:title", content: "Blog — Vastav Digital" },
      { property: "og:description", content: "Playbooks and insights from a modern growth agency." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  { title: "The 2026 performance marketing playbook", category: "Performance", read: "8 min", tint: "from-[#1E5BFF] to-[#6DA7FF]" },
  { title: "AI-assisted SEO: what actually moves rankings", category: "SEO", read: "6 min", tint: "from-[#0F172A] to-[#1E5BFF]" },
  { title: "How we cut CAC by 46% with lead qualification AI", category: "AI", read: "5 min", tint: "from-[#111111] to-[#334155]" },
  { title: "Landing pages that convert at 12%+", category: "CRO", read: "7 min", tint: "from-[#1E5BFF] to-[#0EA5E9]" },
  { title: "Reels-first creative for D2C brands", category: "Creative", read: "4 min", tint: "from-[#0EA5E9] to-[#1E5BFF]" },
  { title: "GA4 + GTM: the setup we ship for every client", category: "Analytics", read: "9 min", tint: "from-[#111827] to-[#1E5BFF]" },
];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Growth <span className="text-gradient">playbooks</span> & essays.</>}
        subtitle="Field notes from the Vastav team on performance, SEO, AI and modern marketing."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <a
              key={p.title}
              href="#"
              className={`group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)] animate-fade-up stagger-${Math.min(i + 1, 6)}`}
            >
              <div className={`relative aspect-[16/10] w-full bg-gradient-to-br ${p.tint}`}>
                <div className="absolute inset-0 grid-lines opacity-20" />
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">{p.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.read}</span>
                  <span className="flex items-center gap-1"><TrendingUp className="h-3 w-3" /> Featured</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug transition-colors group-hover:text-royal-deep">{p.title}</h3>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-royal-deep">
                  Read article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
