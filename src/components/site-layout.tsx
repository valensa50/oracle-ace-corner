import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Mail } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export const CONTACT_EMAIL = "valja.vassileva@gmail.com";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border/60 bg-background/70 backdrop-blur-xl sticky top-0 z-40">
      <div className="container-page flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-serif text-lg shadow-sm transition-transform group-hover:-translate-y-0.5">
            V
          </span>
          <span className="font-serif text-lg tracking-tight">Valja Vassileva</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="relative text-ink-muted hover:text-foreground transition-colors py-1"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="btn-primary text-sm hidden sm:inline-flex">
            Hire me
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <nav className="container-page py-4 flex flex-col gap-1 text-sm">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-ink-muted hover:bg-surface hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground font-medium bg-surface" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-2 btn-primary justify-center text-sm"
            >
              <Mail className="h-4 w-4" /> Email me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24 bg-surface/50">
      <div className="container-page py-14 grid gap-10 md:grid-cols-3 text-sm">
        <div>
          <div className="font-serif text-xl mb-2">Valja Vassileva</div>
          <p className="text-ink-muted max-w-xs">
            Oracle DBA & APEX developer. Independent consultant helping teams keep
            their Oracle databases fast safe and boring.
          </p>
        </div>
        <div>
          <div className="chip mb-3">Sitemap</div>
          <ul className="space-y-1.5">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-foreground text-ink-muted transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="chip mb-3">Contact</div>
          <a href={`mailto:${CONTACT_EMAIL}`} className="link-underline text-foreground">
            {CONTACT_EMAIL}
          </a>
          <p className="text-ink-muted mt-3 text-xs">
            © {new Date().getFullYear()} Valja Vassileva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
