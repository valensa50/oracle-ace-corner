import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

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
  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-40">
      <div className="container-page flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif text-lg">
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
              className="text-ink-muted hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="btn-primary text-sm hidden sm:inline-flex">
          Hire me
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="container-page py-12 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <div className="font-serif text-xl mb-2">Valja Vassileva</div>
          <p className="text-ink-muted max-w-xs">
            Oracle DBA & APEX developer. Independent consultant helping teams keep
            their Oracle databases fast, safe, and boring.
          </p>
        </div>
        <div>
          <div className="chip mb-3">Sitemap</div>
          <ul className="space-y-1.5">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-foreground text-ink-muted">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="chip mb-3">Contact</div>
          <a
            href="mailto:hello@valjavassileva.com"
            className="link-underline text-foreground"
          >
            hello@valjavassileva.com
          </a>
          <p className="text-ink-muted mt-3 text-xs">
            © {new Date().getFullYear()} Valja Vassileva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
