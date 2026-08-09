import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ArrowRight, Database, Layers, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About OraVertex — Oracle Engineering" },
    { name: "description", content: "OraVertex combines deep Oracle database engineering with APEX application development and architecture." },
    { property: "og:title", content: "About OraVertex — Oracle Engineering" },
    { property: "og:description", content: "Deep Oracle expertise without the enterprise theatre." },
  ]}),
  component: About,
});

function About() {
  return <SiteLayout><article className="relative overflow-hidden"><div className="absolute inset-0 grid-lines pointer-events-none" aria-hidden /><div className="container-page relative py-20 md:py-28"><div className="max-w-4xl"><span className="chip">Inside OraVertex</span><h1 className="mt-6 text-5xl md:text-7xl leading-[.95]">Deep Oracle expertise.<br /><span className="text-gradient-accent">Practical engineering.</span></h1><p className="mt-8 text-lg md:text-xl text-ink-muted max-w-2xl leading-relaxed">OraVertex exists for the space between database administration, application engineering and architecture — the place where difficult systems problems actually live.</p></div>
    <div className="mt-20 grid lg:grid-cols-[1.2fr_.8fr] gap-14 items-start"><div className="space-y-7 text-lg text-ink-muted leading-relaxed"><p>More than a decade of Oracle work has taught one simple lesson: the database is never really just the database. Performance, reliability and user experience are connected.</p><p>OraVertex brings those layers together — production Oracle engineering, APEX applications, performance work, upgrades, resilience and architecture reviews.</p><p>The approach is deliberately practical: understand the system, measure before changing it, explain the trade-offs, and leave the environment better than it was found.</p></div><div className="rounded-3xl border border-border bg-card p-7"><Sparkles className="h-6 w-6 text-accent" /><h2 className="mt-5 text-2xl">The engineering rule</h2><p className="mt-3 text-sm text-ink-muted leading-relaxed">Complexity is inevitable. Confusion isn't. Every system should be observable, explainable and maintainable by the people who operate it.</p><div className="mt-7 h-px bg-border" /><div className="mt-6 font-mono text-[9px] uppercase tracking-[.18em] text-ink-muted">DATA · SYSTEMS · ENGINEERING</div></div></div>
    <div className="mt-20 grid sm:grid-cols-3 gap-5">{[[Database,"Oracle", "DBA · SQL · HA · Recovery"],[Layers,"APEX", "Applications · UX · Integration"],[ShieldCheck,"Resilience", "Security · Architecture · Cloud"]].map(([Icon,title,text]) => { const I=Icon as typeof Database; return <div key={title as string} className="card-elevated p-7"><I className="h-5 w-5 text-accent"/><h2 className="mt-5 text-2xl">{title as string}</h2><p className="mt-2 text-sm text-ink-muted">{text as string}</p></div>})}</div>
    <div className="mt-16 flex flex-wrap gap-3"><Link to="/services" className="btn-primary">Explore services <ArrowRight className="h-4 w-4" /></Link><Link to="/contact" className="btn-ghost">Start a conversation</Link></div>
  </div></article></SiteLayout>;
}
