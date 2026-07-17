import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { Check, Sparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Vastav Digital" },
      { name: "description", content: "Transparent monthly retainers for startups, growth-stage brands and enterprises. Custom plans built to your goals." },
      { property: "og:title", content: "Pricing — Vastav Digital" },
      { property: "og:description", content: "Transparent, outcome-based plans." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const plans = [
  {
    name: "Launch",
    price: { monthly: 999, quarterly: 899 },
    tagline: "For early-stage brands finding product-market fit.",
    features: ["1 paid channel", "Landing page + tracking", "Bi-weekly reports", "Slack support", "Creative refresh monthly"],
  },
  {
    name: "Growth",
    price: { monthly: 2499, quarterly: 2249 },
    tagline: "For scaling brands ready to compound results.",
    features: ["3 paid channels", "SEO + content", "Weekly strategy calls", "Dedicated growth pod", "Advanced CRO + funnel", "AI automations included"],
    highlight: true,
  },
  {
    name: "Scale",
    price: { monthly: 5999, quarterly: 5399 },
    tagline: "For enterprise-scale programs and full-stack growth.",
    features: ["Unlimited channels", "Fractional CMO", "Custom AI stack", "Executive reporting", "Priority engineering", "Quarterly business reviews"],
  },
];

function Pricing() {
  const [cycle, setCycle] = useState<"monthly" | "quarterly">("monthly");

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={<>Simple, transparent, <span className="text-gradient">outcome-based.</span></>}
        subtitle="Choose a plan that fits your stage. Every engagement includes strategy, execution, creative and reporting."
      />

      <Section>
        <div className="mb-10 flex items-center justify-center">
          <div className="glass inline-flex rounded-full p-1 text-sm font-medium">
            {(["monthly", "quarterly"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCycle(c)}
                className={`rounded-full px-5 py-2 capitalize transition-all ${cycle === c ? "btn-royal" : "text-muted-foreground"}`}
              >
                {c} {c === "quarterly" && <span className="ml-1 text-xs opacity-80">−10%</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border p-8 ${p.highlight ? "border-royal bg-[oklch(0.16_0.02_260)] text-white shadow-[var(--shadow-elegant)]" : "border-border bg-card"}`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full btn-royal px-3 py-1 text-xs font-semibold">
                  <Sparkles className="h-3 w-3" /> Most Popular
                </div>
              )}
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <p className={`mt-2 text-sm ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>{p.tagline}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold">${p.price[cycle].toLocaleString()}</span>
                <span className={`text-sm ${p.highlight ? "text-white/60" : "text-muted-foreground"}`}>/mo</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`mt-0.5 h-4 w-4 ${p.highlight ? "text-royal" : "text-royal-deep"}`} />
                    <span className={p.highlight ? "text-white/90" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold ${p.highlight ? "btn-royal" : "border border-royal text-royal-deep hover:bg-royal-soft"}`}
              >
                Get started
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-10 grid gap-4">
          {[
            ["Is there a minimum contract?", "Most engagements start with a 3-month sprint. After that, month-to-month."],
            ["Do you work with startups?", "Yes — we have dedicated plans for pre-seed to Series B brands."],
            ["What's included in the free audit?", "A 30-page report covering ads, SEO, website, funnel and creative — with a 90-day plan."],
            ["Do you offer white-label?", "Yes, for agencies and consultancies. Ask us about partner pricing."],
          ].map(([q, a]) => (
            <details key={q} className="group rounded-2xl border border-border bg-card p-6">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold">
                {q}
                <span className="text-royal transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
