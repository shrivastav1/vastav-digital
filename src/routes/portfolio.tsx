import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Vastav Digital" },
      { name: "description", content: "Selected work across e-commerce, SaaS, D2C, real estate and healthcare — designed for growth, engineered for scale." },
      { property: "og:title", content: "Portfolio — Vastav Digital" },
      { property: "og:description", content: "Selected work across verticals." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const projects = [
  { name: "LuxeCart", tag: "E-commerce", metric: "9.1x ROAS", tint: "from-[#1E5BFF] to-[#6DA7FF]" },
  { name: "Nova Health", tag: "Healthcare", metric: "218% lead lift", tint: "from-[#0F172A] to-[#1E5BFF]" },
  { name: "FinKart", tag: "Fintech", metric: "-46% CAC", tint: "from-[#111111] to-[#334155]" },
  { name: "EduPrime", tag: "Education", metric: "3.1x MQLs", tint: "from-[#1E5BFF] to-[#0EA5E9]" },
  { name: "Aura Living", tag: "D2C", metric: "5.4x revenue", tint: "from-[#0EA5E9] to-[#1E5BFF]" },
  { name: "Orbit SaaS", tag: "B2B SaaS", metric: "412% pipeline", tint: "from-[#111827] to-[#1E5BFF]" },
];

function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={<>Selected <span className="text-gradient">work.</span></>}
        subtitle="A snapshot of brands we've helped scale. Real outcomes. Real numbers."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <a key={p.name} href="#" className="group relative block overflow-hidden rounded-3xl border border-border">
              <div className={`aspect-[4/5] w-full bg-gradient-to-br ${p.tint} p-8 text-white`}>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">{p.tag}</span>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <div className="flex h-full flex-col justify-end pt-16">
                  <p className="font-display text-4xl font-bold">{p.name}</p>
                  <p className="mt-1 text-3xl font-bold text-white/85">{p.metric}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
