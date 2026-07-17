import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <nav className={`glass flex items-center justify-between rounded-full px-4 py-2.5 transition-all ${scrolled ? "shadow-[0_10px_40px_-15px_rgba(30,91,255,0.25)]" : ""}`}>
          <Link to="/" className="flex items-center gap-2 pl-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg btn-royal text-sm font-bold">V</span>
            <span className="font-display text-lg font-bold tracking-tight">Vastav<span className="text-gradient">.</span></span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="rounded-full px-3 py-1.5 text-sm text-foreground/75 transition-colors hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "rounded-full px-3 py-1.5 text-sm text-foreground font-medium bg-accent" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full btn-royal px-4 py-2 text-sm font-medium"
            >
              Book Free Call <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="glass mt-2 rounded-3xl p-3 lg:hidden">
            <ul className="grid gap-1">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-2.5 text-sm hover:bg-accent"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 block rounded-2xl btn-royal px-4 py-2.5 text-center text-sm font-medium"
                >
                  Book Free Call
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
