import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { ArrowRight, MapPin, Sparkles, HeartHandshake, GraduationCap, Plane } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Vastav Digital" },
      { name: "description", content: "Join a team building the AI-native growth agency of the next decade. Remote-friendly, outcome-driven." },
      { property: "og:title", content: "Careers — Vastav Digital" },
      { property: "og:description", content: "Build the next generation of growth marketing." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const roles = [
  { title: "Senior Performance Marketing Manager", team: "Growth", location: "Mumbai / Remote" },
  { title: "Technical SEO Lead", team: "SEO", location: "Bengaluru / Remote" },
  { title: "Next.js Engineer", team: "Engineering", location: "Remote" },
  { title: "Motion Designer", team: "Creative", location: "Mumbai" },
  { title: "AI Automation Engineer", team: "AI", location: "Remote" },
  { title: "Client Partner", team: "Accounts", location: "Bengaluru" },
];

const perks = [
  { icon: Plane, title: "Remote-first", desc: "Work from anywhere. Quarterly team offsites." },
  { icon: Sparkles, title: "Ownership", desc: "ESOPs for full-time roles. Everyone shares upside." },
  { icon: GraduationCap, title: "Learning budget", desc: "$1,500/yr for courses, conferences, books." },
  { icon: HeartHandshake, title: "Health & wellness", desc: "Premium insurance and mental health support." },
];

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build the <span className="text-gradient">next generation</span> of growth.</>}
        subtitle="We're hiring operators, engineers and creatives who want to build the agency of the AI era."
      />

      <Section>
        <SectionHeader eyebrow="Perks & Benefits" title="How we take care of the team" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <div key={p.title} className={`card-premium p-6 animate-fade-up stagger-${i + 1}`}>
              <div className="grid h-12 w-12 place-items-center rounded-2xl btn-royal"><p.icon className="h-6 w-6 text-white" /></div>
              <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Open Roles" title="Come build with us" />
          <div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-card overflow-hidden">
            {roles.map((r, i) => (
              <Link
                key={r.title}
                to="/contact"
                className={`group flex flex-wrap items-center justify-between gap-4 p-6 transition-colors hover:bg-surface animate-fade-up stagger-${Math.min(i + 1, 6)}`}
              >
                <div>
                  <h3 className="font-display text-lg font-semibold">{r.title}</h3>
                  <p className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-royal-soft px-2.5 py-0.5 font-medium text-royal-deep">{r.team}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {r.location}</span>
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-royal-deep">
                  Apply <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
