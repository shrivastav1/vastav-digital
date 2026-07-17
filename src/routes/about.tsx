import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { Award, Compass, HeartHandshake, Rocket, Target, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vastav Digital" },
      { name: "description", content: "We're a team of strategists, creatives and engineers building the AI-native growth agency of the next decade." },
      { property: "og:title", content: "About Vastav Digital" },
      { property: "og:description", content: "Meet the team behind 320+ scaled brands." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Target, title: "Outcomes over output", desc: "We're measured on revenue, not deliverables." },
  { icon: Rocket, title: "Ship weekly", desc: "Momentum compounds. We optimize for velocity." },
  { icon: HeartHandshake, title: "True partnership", desc: "Extension of your team, not a vendor." },
  { icon: Compass, title: "Data + taste", desc: "Numbers guide us. Craft sets us apart." },
];

const team = [
  { name: "Arjun Kapoor", role: "Founder & CEO" },
  { name: "Meera Iyer", role: "Head of Growth" },
  { name: "Kabir Shah", role: "Creative Director" },
  { name: "Diya Nair", role: "Head of SEO" },
  { name: "Rohan Bhat", role: "Head of Engineering" },
  { name: "Ananya Roy", role: "Head of AI" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Vastav"
        title={<>Built to help brands <span className="text-gradient">win the next decade.</span></>}
        subtitle="Vastav Digital is an AI-native growth agency. We combine strategy, creative, engineering and AI to deliver outcomes — not opinions."
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeader eyebrow="Our Story" title="Founded to fix agency work." subtitle="After a decade in-house at fast-scaling brands, we noticed a gap: strategy, creative and engineering rarely spoke to each other. Vastav closes that gap — one operating system for growth." />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["2019", "Founded"], ["320+", "Clients Scaled"], ["45", "Team"], ["12", "Countries Served"],
            ].map(([v, l]) => (
              <div key={l} className="glass rounded-2xl p-6">
                <p className="font-display text-3xl font-bold text-gradient">{v}</p>
                <p className="mt-1 text-sm text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Our Values" title="What we believe" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl bg-card p-8">
                <div className="grid h-12 w-12 place-items-center rounded-2xl btn-royal"><v.icon className="h-6 w-6 text-white" /></div>
                <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow="Our Team" title="Operators, not order-takers" subtitle="Ex-founders, ex-CMOs, ex-Google, ex-Meta — building alongside you." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {team.map((t) => (
            <div key={t.name} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8">
              <div className="grid h-16 w-16 place-items-center rounded-2xl btn-royal text-xl font-bold">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Awards" title="Recognized for craft & results" />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {["Awwwards SOTD", "Clutch Top B2B", "Google Partner", "Meta Business Partner"].map((a) => (
            <div key={a} className="glass flex items-center gap-3 rounded-2xl p-5">
              <Award className="h-6 w-6 text-royal" />
              <span className="text-sm font-medium">{a}</span>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
