import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Calendar, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vastav Digital" },
      { name: "description", content: "Book a free 30-minute strategy call. We respond within 24 hours on business days." },
      { property: "og:title", content: "Contact Vastav Digital" },
      { property: "og:description", content: "Book a free strategy call." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build your <span className="text-gradient">growth engine.</span></>}
        subtitle="Tell us about your business. A senior strategist gets back within 24 hours."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <form className="rounded-3xl border border-border bg-card p-8 md:p-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-1.5 text-sm">
                  <span className="font-medium">Name</span>
                  <input required className="rounded-2xl border border-input bg-background px-4 py-3 outline-none focus:border-royal" />
                </label>
                <label className="grid gap-1.5 text-sm">
                  <span className="font-medium">Work email</span>
                  <input required type="email" className="rounded-2xl border border-input bg-background px-4 py-3 outline-none focus:border-royal" />
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-1.5 text-sm">
                  <span className="font-medium">Company</span>
                  <input className="rounded-2xl border border-input bg-background px-4 py-3 outline-none focus:border-royal" />
                </label>
                <label className="grid gap-1.5 text-sm">
                  <span className="font-medium">Monthly budget</span>
                  <select className="rounded-2xl border border-input bg-background px-4 py-3 outline-none focus:border-royal">
                    <option>&lt; $1,000</option>
                    <option>$1,000 – $5,000</option>
                    <option>$5,000 – $25,000</option>
                    <option>$25,000+</option>
                  </select>
                </label>
              </div>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">What are you looking to grow?</span>
                <textarea rows={5} className="rounded-2xl border border-input bg-background px-4 py-3 outline-none focus:border-royal" />
              </label>
              <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full btn-royal px-6 py-3 text-sm font-semibold">
                Send Message <Send className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground">By submitting you agree to our privacy policy. We reply within 24 hours.</p>
            </div>
          </form>

          <div className="grid gap-6">
            <a href="#" className="glass flex items-center gap-4 rounded-3xl p-6 hover:-translate-y-1 transition-transform">
              <div className="grid h-12 w-12 place-items-center rounded-2xl btn-royal"><Calendar className="h-6 w-6 text-white" /></div>
              <div>
                <p className="font-display text-lg font-semibold">Book on Calendly</p>
                <p className="text-sm text-muted-foreground">30-min free strategy call</p>
              </div>
            </a>
            <a href="https://wa.me/919000000000" className="glass flex items-center gap-4 rounded-3xl p-6 hover:-translate-y-1 transition-transform">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#25D366]"><MessageCircle className="h-6 w-6 text-white" /></div>
              <div>
                <p className="font-display text-lg font-semibold">Chat on WhatsApp</p>
                <p className="text-sm text-muted-foreground">Fastest way to reach us</p>
              </div>
            </a>
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">Reach us</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-royal" /> hello@vastavdigital.com</li>
                <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-royal" /> +91 90000 00000</li>
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-royal" /> Mumbai · Bengaluru · Remote</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.8%2C18.9%2C73.0%2C19.1&layer=mapnik"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
