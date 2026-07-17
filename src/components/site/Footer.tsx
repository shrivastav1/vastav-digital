import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Instagram, Linkedin, Youtube, Twitter, ArrowRight, CircleCheck as CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { CONTACT } from "@/lib/site-data";
import { useLeads } from "@/lib/use-leads";

const socialIcons: Record<string, typeof Instagram> = {
  Instagram: Instagram,
  LinkedIn: Linkedin,
  YouTube: Youtube,
  Twitter: Twitter,
};

export function Footer() {
  const [email, setEmail] = useState("");
  const { status, submit, reset } = useLeads();

  async function onSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    const res = await submit({ source: "newsletter", email });
    if (res.ok) setEmail("");
    setTimeout(reset, 4000);
  }

  return (
    <footer className="mt-24 border-t border-border/60 bg-[oklch(0.16_0.02_260)] text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg btn-royal text-sm font-bold">V</span>
              <span className="font-display text-xl font-bold text-white">Vastav Digital</span>
            </div>
            <p className="mt-4 max-w-sm text-sm">
              Premium AI-powered digital marketing partner for ambitious brands. Grow smarter. Scale faster.
            </p>
            <form className="mt-6 flex max-w-sm gap-2" onSubmit={onSubscribe}>
              <input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Email for newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/40"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="rounded-full btn-royal px-4 py-2.5 text-sm font-medium"
              >
                {status === "submitting" ? "..." : status === "success" ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
            {status === "success" && (
              <p className="mt-2 flex items-center gap-1.5 text-xs text-[#25D366]">
                <CheckCircle2 className="h-3.5 w-3.5" /> You're on the list. Welcome aboard!
              </p>
            )}
            {status === "error" && (
              <p className="mt-2 text-xs text-red-400">Something went wrong. Please try again.</p>
            )}
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Solutions</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white">Performance Marketing</Link></li>
              <li><Link to="/services" className="hover:text-white">SEO & Content</Link></li>
              <li><Link to="/services" className="hover:text-white">Web & Development</Link></li>
              <li><Link to="/services" className="hover:text-white">Brand & Creative</Link></li>
              <li><Link to="/services" className="hover:text-white">AI Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-white">{CONTACT.phone}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {CONTACT.locations}
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              {CONTACT.socials.map((s) => {
                const Icon = socialIcons[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition-all hover:bg-white/10 hover:scale-105"
                  >
                    {Icon ? <Icon className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Vastav Digital. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <Link to="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
