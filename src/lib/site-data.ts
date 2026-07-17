export const CONTACT = {
  phone: "+91 99044 92917",
  phoneRaw: "919904492917",
  email: "vastavdigital01@gmail.com",
  locations: "Mumbai · Bengaluru · Remote",
  whatsapp: "https://wa.me/919904492917?text=Hi%20Vastav%20Digital%2C%20I%27m%20interested%20in%20your%20services",
  socials: [
    { label: "Instagram", href: "https://instagram.com/vastavdigital" },
    { label: "LinkedIn", href: "https://linkedin.com/company/vastavdigital" },
    { label: "YouTube", href: "https://youtube.com/@vastavdigital" },
    { label: "Twitter", href: "https://twitter.com/vastavdigital" },
  ],
} as const;

export const STATS = [
  { value: 320, suffix: "+", label: "Brands Scaled" },
  { value: 1200, suffix: "M+", label: "Ad Spend Managed", prefix: "₹" },
  { value: 8, suffix: "x", label: "Avg. ROAS" },
  { value: 97, suffix: "%", label: "Client Retention" },
] as const;

export const SERVICES = [
  { icon: "TrendingUp", title: "Performance Marketing", desc: "Google, Meta, LinkedIn, YouTube. ROAS-obsessed campaigns that print pipeline." },
  { icon: "Search", title: "SEO & Content", desc: "Technical, local, and e-commerce SEO backed by editorial-grade content." },
  { icon: "Globe", title: "Web & Development", desc: "Next.js, Shopify, WordPress. Websites engineered for speed and conversion." },
  { icon: "Palette", title: "Brand & Creative", desc: "Identity, motion, reels and thumb-stopping ad creative that lifts CTR." },
  { icon: "Bot", title: "AI Automation", desc: "Chatbots, lead qualification, content ops. Human-quality output at scale." },
  { icon: "BarChart3", title: "CRO & Analytics", desc: "GA4, GTM, funnel design. Turn traffic into revenue, not just visits." },
] as const;

export const INDUSTRIES = [
  "E-commerce", "Real Estate", "Healthcare", "Education", "SaaS", "Restaurants",
  "Manufacturing", "B2B", "Fashion", "Fintech", "Travel", "Startups",
] as const;

export const PROCESS = [
  { step: "01", title: "Discover", desc: "Deep-dive into your goals, market, positioning and unit economics." },
  { step: "02", title: "Strategy", desc: "Custom growth blueprint with clear KPIs, channels and creative direction." },
  { step: "03", title: "Execute", desc: "Ship campaigns, sites and creative — fast, with weekly velocity reports." },
  { step: "04", title: "Scale", desc: "Compound wins with CRO, AI automation and expansion into new channels." },
] as const;

export const TESTIMONIALS = [
  { name: "Aarav Mehta", role: "CEO, LuxeCart", quote: "Vastav rebuilt our funnel end-to-end. ROAS went from 2.4x to 9.1x in 90 days.", rating: 5 },
  { name: "Sneha Rao", role: "Marketing Head, Nova Health", quote: "The most strategic agency we've worked with. They think like operators, not vendors.", rating: 5 },
  { name: "Rahul Verma", role: "Founder, FinKart", quote: "Our CAC dropped 46% and MQLs tripled. Genuine growth partners.", rating: 5 },
  { name: "Priya Sharma", role: "CMO, EduPrime", quote: "Creative that converts + engineering discipline. Rare combo, exceptional team.", rating: 5 },
] as const;

export const LOGOS = [
  "NOVA", "LUXE", "FINKART", "EDUPRIME", "PULSE", "AURA", "KAIROS", "VERTEX", "ORBIT", "HELIX",
] as const;

export const AI_FEATURES = [
  "AI Chatbots & Lead Qualification",
  "Content & Creative at 10x speed",
  "Marketing Automation & CRM sync",
  "24/7 AI Customer Support",
] as const;

export const AUDIT_FEATURES = [
  "30-page tactical report",
  "Channel-by-channel opportunity map",
  "90-day growth plan",
] as const;
