import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { TrendingUp, Search, Globe, Palette, Bot, BarChart3, Mail, ShoppingCart, Video, Megaphone, Users, Wrench, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Vastav Digital" },
      { name: "description", content: "Performance marketing, SEO, web design, brand & creative, AI automation and more. The full growth stack under one roof." },
      { property: "og:title", content: "Services — Vastav Digital" },
      { property: "og:description", content: "The full digital growth stack. One partner." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const groups = [
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    items: ["Google Ads", "Meta (Facebook & Instagram)", "LinkedIn Ads", "YouTube Ads", "TikTok Ads", "X (Twitter) Ads", "Pinterest & Snapchat", "Remarketing Campaigns"],
  },
  {
    icon: Search,
    title: "SEO",
    items: ["Technical SEO", "Local SEO", "E-commerce SEO", "YouTube SEO", "Content Strategy", "Link Building", "Schema Markup", "Core Web Vitals"],
  },
  {
    icon: Globe,
    title: "Web & Development",
    items: ["Website Design", "Next.js Development", "Shopify Development", "WordPress Development", "Landing Pages", "CRO / A/B Testing", "Sales Funnel Design", "Speed Optimization"],
  },
  {
    icon: Palette,
    title: "Brand & Creative",
    items: ["Brand Identity", "Logo Design", "Graphic Design", "Motion Graphics", "Video Editing", "Short-form Reels", "Copywriting", "Ad Creative Studio"],
  },
  {
    icon: Bot,
    title: "AI Solutions",
    items: ["AI Chatbot Integration", "AI Lead Qualification", "AI Customer Support", "AI Content Creation", "Marketing Automation", "Workflow Automation"],
  },
  {
    icon: BarChart3,
    title: "Analytics & CRO",
    items: ["Google Analytics 4", "Google Tag Manager", "Meta Pixel Setup", "Conversion Tracking", "CRM Integration", "Attribution Modelling"],
  },
  {
    icon: Mail,
    title: "Lifecycle & Retention",
    items: ["Email Marketing", "WhatsApp Marketing", "SMS Campaigns", "Newsletter Design", "Lead Nurture Flows", "Loyalty Programs"],
  },
  {
    icon: ShoppingCart,
    title: "Marketplace & Commerce",
    items: ["Amazon Marketing", "Flipkart Marketing", "App Marketing", "Shopify Growth", "Product Listing Ads", "Marketplace SEO"],
  },
  {
    icon: Megaphone,
    title: "Influencer & Reputation",
    items: ["Influencer Marketing", "UGC Campaigns", "Online Reputation Management", "PR & Outreach", "Community Building"],
  },
  {
    icon: Users,
    title: "Consulting",
    items: ["Digital Growth Strategy", "Fractional CMO", "Go-to-Market Planning", "Positioning & Messaging", "Team Training"],
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Everything you need to <span className="text-gradient">grow.</span></>}
        subtitle="Fifty+ services across performance, SEO, web, creative, AI and analytics — orchestrated as one growth engine."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl btn-royal">
                  <g.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold">{g.title}</h3>
              </div>
              <ul className="mt-6 grid gap-2 text-sm">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-royal" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Marketing Tools We Use" title="Best-in-class stack, expertly wielded" />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-6">
            {["Google Ads","Meta Ads","GA4","GTM","HubSpot","Ahrefs","SEMrush","Hotjar","Klaviyo","Figma","Webflow","Zapier"].map((t) => (
              <div key={t} className="glass rounded-2xl p-4 text-center text-sm font-medium">{t}</div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
