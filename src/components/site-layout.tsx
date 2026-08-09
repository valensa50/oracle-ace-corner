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
  return <span className="flex items-center gap-3"><span className="relative inline-flex h-8 w-8 items-center justify-center border border-accent/60 text-primary font-serif text-sm"><span className="absolute h-px w-3 bg-accent -right-1.5 -top-1" /></span><span className="font-serif text-2xl tracking-tight">OraVertex</span></span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="border-b border-border bg-background/92 backdrop-blur-xl sticky top-0 z-40"><div className="container-page flex items-center justify-between h-[4.5rem]"><Link to="/" onClick={() => setOpen(false)}><Brand /></Link><nav className="hidden md:flex items-center gap-9 font-mono text-[9px] tracking-[.18em] uppercase">{nav.slice(1).map((n) => <Link key={n.to} to={n.to} activeOptions={{exact:false}} className="text-ink-muted hover:text-foreground transition-colors" activeProps={{className:"text-accent"}}>{n.label}</Link>)}</nav><div className="flex items-center gap-5"><Link to="/contact" className="hidden sm:inline-flex items-center gap-2 font-mono text-[9px] tracking-[.18em] uppercase hover:text-accent transition-colors">Enquire <ArrowUpRight className="h-3.5 w-3.5" /></Link><button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(v=>!v)} className="md:hidden h-9 w-9 flex items-center justify-center border border-border">{open ? <X className="h-4 w-4"/>:<Menu className="h-4 w-4"/>}</button></div></div>{open&&<div className="md:hidden border-t border-border bg-background"><nav className="container-page py-5 flex flex-col font-mono text-[10px] tracking-[.16em] uppercase">{nav.slice(1).map(n=><Link key={n.to} to={n.to} onClick={()=>setOpen(false)} className="py-4 border-b border-border text-ink-muted">{n.label}</Link>)}<a href={`mailto:${CONTACT_EMAIL}`} className="py-4 text-accent flex items-center gap-2"><Mail className="h-4 w-4"/> Enquire by email</a></nav></div>}</header>;
}

function Footer() {
  return <footer className="border-t border-border mt-16 bg-[#171611] text-[#f4efe4]"><div className="container-page py-16 grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]"><div><Brand/><p className="mt-5 max-w-sm text-sm leading-relaxed text-[#f4efe4]/45">Oracle engineering for systems that matter. Precise database work, thoughtful architecture and a quieter kind of technical excellence.</p><div className="mt-7 font-mono text-[8px] tracking-[.2em] uppercase text-[#b7a47a]">Data · Systems · Engineering</div></div><div><div className="font-mono text-[8px] tracking-[.2em] uppercase text-[#f4efe4]/35 mb-5">Explore</div><ul className="space-y-3 font-mono text-[9px] tracking-[.12em] uppercase">{nav.slice(1).map(n=><li key={n.to}><Link to={n.to} className="text-[#f4efe4]/55 hover:text-[#b7a47a] transition-colors">{n.label}</Link></li>)}</ul></div><div><div className="font-mono text-[8px] tracking-[.2em] uppercase text-[#f4efe4]/35 mb-5">Private enquiries</div><a href={`mailto:${CONTACT_EMAIL}`} className="text-sm hover:text-[#b7a47a] transition-colors">{CONTACT_EMAIL}</a><p className="mt-4 font-mono text-[8px] tracking-[.14em] uppercase text-[#f4efe4]/30">© {new Date().getFullYear()} OraVertex</p></div></div></footer>;
}
