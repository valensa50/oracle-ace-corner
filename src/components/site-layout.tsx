import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Mail, ArrowUpRight } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Field notes" },
  { to: "/contact", label: "Contact" },
] as const;

export const CONTACT_EMAIL = "valja.vassileva@gmail.com";

export function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen flex flex-col bg-background text-foreground"><Header /><main className="flex-1">{children}</main><Footer /></div>;
}

function Brand() {
  return <span className="flex items-center gap-3"><span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-mono text-[11px] font-bold tracking-tight shadow-[0_0_24px_-10px_var(--color-accent)]"><span className="absolute h-2 w-2 rounded-full bg-accent-glow -top-0.5 -right-0.5" />OV</span><span className="font-serif text-xl tracking-tight">OraVertex</span></span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="border-b border-border/60 bg-background/75 backdrop-blur-xl sticky top-0 z-40"><div className="container-page flex items-center justify-between h-[4.5rem]"><Link to="/" onClick={() => setOpen(false)}><Brand /></Link><nav className="hidden md:flex items-center gap-7 text-sm">{nav.map((n) => <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} className="relative text-ink-muted hover:text-foreground transition-colors py-1" activeProps={{ className: "text-foreground font-medium" }}>{n.label}</Link>)}</nav><div className="flex items-center gap-2"><Link to="/contact" className="btn-primary text-sm hidden sm:inline-flex">Work with us <ArrowUpRight className="h-3.5 w-3.5" /></Link><button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button></div></div>{open && <div className="md:hidden border-t border-border/60 bg-background"><nav className="container-page py-4 flex flex-col gap-1 text-sm">{nav.map((n) => <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-ink-muted hover:bg-surface hover:text-foreground transition-colors" activeProps={{ className: "text-foreground font-medium bg-surface" }}>{n.label}</Link>)}<a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 btn-primary justify-center text-sm"><Mail className="h-4 w-4" /> Email OraVertex</a></nav></div>}</header>;
}

function Footer() {
  return <footer className="border-t border-border/60 mt-20 bg-surface/45"><div className="container-page py-14 grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] text-sm"><div><Brand /><p className="text-ink-muted max-w-sm mt-4 leading-relaxed">Oracle engineering for systems that need to be fast, resilient and understandable. Database, applications and architecture — connected.</p><div className="mt-5 font-mono text-[9px] uppercase tracking-[.18em] text-ink-muted">DATA · SYSTEMS · ENGINEERING</div></div><div><div className="chip mb-3">Navigate</div><ul className="space-y-1.5">{nav.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-foreground text-ink-muted transition-colors">{n.label}</Link></li>)}</ul></div><div><div className="chip mb-3">Contact</div><a href={`mailto:${CONTACT_EMAIL}`} className="link-underline text-foreground">{CONTACT_EMAIL}</a><p className="text-ink-muted mt-3 text-xs">© {new Date().getFullYear()} OraVertex. All rights reserved.</p></div></div></footer>;
}
