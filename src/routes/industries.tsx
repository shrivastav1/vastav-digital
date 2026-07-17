import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { ShoppingBag, Building2, Stethoscope, GraduationCap, UtensilsCrossed, Factory, Briefcase, Home, Plane, Landmark, Sparkles, Smartphone } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Vastav Digital" },
      { name: "description", content: "Vertical-specific growth playbooks for e-commerce, real estate, healthcare, education, SaaS, restaurants, B2B and more." },
      { property: "og:title", content: "Industries We Serve — Vastav Digital" },
      { property: "og:description", content: "Deep expertise across 12+ verticals." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

const industries = [
  { icon: ShoppingBag, name: "E-commerce", desc: "Scale DTC brands with performance + CRO + retention." },
  { icon: Building2, name: "Real Estate", desc: "Fill your pipeline with qualified property leads." },
  { icon: Stethoscope, name: "Healthcare", desc: "Compliant patient acquisition & local SEO." },
  { icon: GraduationCap, name: "Education", desc: "Enrollment growth for institutes & edtech." },
  { icon: UtensilsCrossed, name: "Restaurants", desc: "Foot traffic, reservations & delivery orders." },
  { icon: Factory, name: "Manufacturing", desc: "B2B lead gen and industrial SEO." },
  { icon: Briefcase, name: "B2B & SaaS", desc: "Content + ABM + demand gen that closes deals." },
  { icon: Home, name: "Interiors & D2C", desc: "Beautiful funnels for lifestyle brands." },
  { icon: Plane, name: "Travel & Hospitality", desc: "Direct bookings and destination marketing." },
  { icon: Landmark, name: "Fintech", desc: "Trust-first acquisition and compliance-ready ads." },
  { icon: Sparkles, name: "Beauty & Fashion", desc: "Influencer, UGC and reels-first growth." },
  { icon: Smartphone, name: "Apps & Startups", desc: "Install campaigns, activation and retention." },
];

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Playbooks tuned for <span className="text-gradient">your vertical.</span></>}
        subtitle="We don't run generic campaigns. Every engagement starts with a vertical-specific playbook, refined across dozens of brands."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <div key={i.name} className="group rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-royal">
              <div className="grid h-14 w-14 place-items-center rounded-2xl btn-royal">
                <i.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{i.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
