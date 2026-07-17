import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, ChevronDown, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site-data";

type NavItem = { to: string; label: string };

const PRIMARY_NAV: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`glass flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "shadow-[0_10px_40px_-15px_rgba(30,91,255,0.25)]" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2 pl-2" aria-label="Vastav Digital home">
            <span className="grid h-9 w-9 place-items-center rounded-xl btn-royal text-sm font-bold">V</span>
            <span className="font-display text-lg font-bold tracking-tight">
              Vastav<span className="text-gradient">.</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-0.5 xl:flex">
            {PRIMARY_NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="rounded-full px-3 py-1.5 text-sm text-foreground/75 transition-colors hover:bg-accent hover:text-foreground"
                  activeProps={{
                    className: "rounded-full px-3 py-1.5 text-sm text-foreground font-medium bg-accent",
                  }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-royal-deep lg:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" />
              {CONTACT.phone}
            </a>
            <Link
              to="/contact"
              className="hidden items-center gap-1.5 rounded-full btn-royal px-4 py-2 text-sm font-medium sm:inline-flex"
            >
              Book Free Call <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white xl:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="glass mt-2 rounded-3xl p-3 xl:hidden animate-fade-in">
            <ul className="grid gap-1">
              {PRIMARY_NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-2 grid gap-2 border-t border-border pt-3">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium text-foreground/80"
              >
                <Phone className="h-4 w-4" /> {CONTACT.phone}
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-center gap-2 rounded-2xl btn-royal px-4 py-2.5 text-center text-sm font-semibold"
              >
                Book Free Call <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
