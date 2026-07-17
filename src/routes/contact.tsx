import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Calendar, Mail, MapPin, MessageCircle, Phone, Send, CircleCheck as CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { CONTACT } from "@/lib/site-data";
import { useLeads } from "@/lib/use-leads";

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
  const { status, errorMsg, submit, reset } = useLeads();
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await submit({
      source: "contact",
      name: form.name,
      email: form.email,
      company: form.company,
      budget: form.budget,
      message: form.message,
    });
    if (res.ok) {
      setForm({ name: "", email: "", company: "", budget: "", message: "" });
      setTimeout(reset, 6000);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build your <span className="text-gradient">growth engine.</span></>}
        subtitle="Tell us about your business. A senior strategist gets back within 24 hours."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          {status === "success" ? (
            <div className="grid place-items-center rounded-3xl border border-border bg-card p-12 text-center animate-scale-in">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-royal-soft">
                <CheckCircle2 className="h-8 w-8 text-royal" />
              </div>
              <h3 className="mt-5 font-display text-3xl font-bold">Message Sent!</h3>
              <p className="mt-3 max-w-sm text-muted-foreground">
                Thank you for reaching out. A senior strategist will get back to you within 24 hours.
              </p>
              <button onClick={reset} className="mt-6 rounded-full btn-ghost-royal px-5 py-2.5 text-sm font-medium">
                Send another message
              </button>
            </div>
          ) : (
            <form className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-10" onSubmit={onSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="grid gap-1.5 text-sm">
                    <span className="font-medium">Name</span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-royal"
                    />
                  </label>
                  <label className="grid gap-1.5 text-sm">
                    <span className="font-medium">Work email</span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-royal"
                    />
                  </label>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="grid gap-1.5 text-sm">
                    <span className="font-medium">Company</span>
                    <input
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-royal"
                    />
                  </label>
                  <label className="grid gap-1.5 text-sm">
                    <span className="font-medium">Monthly budget</span>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-royal"
                    >
                      <option value="">Select range</option>
                      <option>&lt; ₹50,000</option>
                      <option>₹50,000 – ₹2,00,000</option>
                      <option>₹2,00,000 – ₹10,00,000</option>
                      <option>₹10,00,000+</option>
                    </select>
                  </label>
                </div>
                <label className="grid gap-1.5 text-sm">
                  <span className="font-medium">What are you looking to grow?</span>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-royal"
                  />
                </label>
                {status === "error" && <p className="text-sm text-red-500">{errorMsg}</p>}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full btn-royal px-6 py-3 text-sm font-semibold disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
                </button>
                <p className="text-xs text-muted-foreground">By submitting you agree to our privacy policy. We reply within 24 hours.</p>
              </div>
            </form>
          )}

          <div className="grid gap-6">
            <a href="#" className="glass flex items-center gap-4 rounded-3xl p-6 transition-transform hover:-translate-y-1">
              <div className="grid h-12 w-12 place-items-center rounded-2xl btn-royal"><Calendar className="h-6 w-6 text-white" /></div>
              <div>
                <p className="font-display text-lg font-semibold">Book on Calendly</p>
                <p className="text-sm text-muted-foreground">30-min free strategy call</p>
              </div>
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="glass flex items-center gap-4 rounded-3xl p-6 transition-transform hover:-translate-y-1">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#25D366]"><MessageCircle className="h-6 w-6 text-white" /></div>
              <div>
                <p className="font-display text-lg font-semibold">Chat on WhatsApp</p>
                <p className="text-sm text-muted-foreground">Fastest way to reach us</p>
              </div>
            </a>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h3 className="font-display text-lg font-semibold">Reach us</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-royal" /> <a href={`mailto:${CONTACT.email}`} className="hover:text-royal">{CONTACT.email}</a></li>
                <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-royal" /> <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-royal">{CONTACT.phone}</a></li>
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-royal" /> {CONTACT.locations}</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
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
