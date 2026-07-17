import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { ArrowRight, MapPin } from "lucide-react";

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
  ["Remote-first", "Work from anywhere. Quarterly team offsites."],
  ["Ownership", "ESOPs for full-time roles. Everyone shares upside."],
  ["Learning budget", "$1,500/yr for courses, conferences, books."],
  ["Health & wellness", "Premium insurance and mental health support."],
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
          {perks.map(([t, d]) => (
            <div key={t} className="rounded-3xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Open Roles" title="Come build with us" />
        <div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-card">
          {roles.map((r) => (
            <a key={r.title} href="#" className="group flex flex-wrap items-center justify-between gap-4 p-6 transition-colors hover:bg-surface">
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
            </a>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
