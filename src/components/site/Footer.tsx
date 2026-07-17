import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

export function Footer() {
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
            <form className="mt-6 flex max-w-sm gap-2">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/40"
              />
              <button className="rounded-full btn-royal px-4 py-2.5 text-sm font-medium">Subscribe</button>
            </form>
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
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" /> hello@vastavdigital.com</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" /> +91 90000 00000</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> Mumbai · Bengaluru · Remote</li>
            </ul>
            <div className="mt-5 flex gap-2">
              {[Instagram, Linkedin, Youtube, Twitter].map((I, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:bg-white/10">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Vastav Digital. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
