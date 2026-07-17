import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-[oklch(0.16_0.02_260)] p-10 md:p-16">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-40 blur-3xl animate-glow-pulse" style={{ background: "radial-gradient(circle, #1E5BFF, transparent 60%)" }} />
        <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full opacity-40 blur-3xl animate-glow-pulse" style={{ background: "radial-gradient(circle, #6DA7FF, transparent 60%)", animationDelay: "2s" }} />
        <div className="absolute inset-0 grid-lines opacity-[0.07]" />
        <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div className="animate-fade-up">
            <p className="text-sm font-medium uppercase tracking-widest text-white/60">Ready to scale?</p>
            <h3 className="mt-3 font-display text-4xl font-bold leading-tight text-white md:text-6xl">
              Grow Smarter.<br />
              <span className="text-gradient">Scale Faster.</span>
            </h3>
            <p className="mt-4 max-w-xl text-white/70">
              Book a free 30-minute strategy call. Walk away with a clear growth roadmap tailored to your business — no strings attached.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end animate-fade-up stagger-2">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full btn-royal px-6 py-3 text-sm font-semibold">
              <Calendar className="h-4 w-4" /> Book Free Consultation
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105">
              Explore Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
