import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/lib/posts";
import { SiteLayout } from "@/components/site-layout";
import {
  ArrowRight,
  ArrowUpRight,
  Database,
  Gauge,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OraVertex — Oracle Engineering, from the inside out" },
      {
        name: "description",
        content:
          "OraVertex engineers Oracle databases, APEX applications and resilient data platforms — performance, architecture, migrations and practical engineering.",
      },
      { property: "og:title", content: "OraVertex — Oracle Engineering, from the inside out" },
      {
        property: "og:description",
        content:
          "Oracle engineering for systems that need to be fast, resilient and understandable.",
      },
    ],
  }),
  component: Home,
});

const capabilities = [
  { icon: Database, code: "01", title: "Oracle engineering", text: "Performance, internals, upgrades, RAC, Data Guard and the hard problems that don't fit in a checklist." },
  { icon: Terminal, code: "02", title: "APEX applications", text: "Serious business applications built close to the data — clean, secure and maintainable." },
  { icon: Gauge, code: "03", title: "Performance", text: "Turn slow queries and overloaded systems into measurable, explainable improvements." },
  { icon: Network, code: "04", title: "Architecture", text: "Connect database, application and cloud decisions before complexity becomes technical debt." },
];

function Home() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden min-h-[720px] flex items-center">
        <div className="absolute inset-0 grid-lines pointer-events-none" aria-hidden />
        <div className="absolute inset-0 vertex-grid opacity-70 pointer-events-none" aria-hidden />
        <div className="absolute -top-48 right-[8%] h-[34rem] w-[34rem] rounded-full bg-accent/15 blur-3xl pointer-events-none" aria-hidden />
        <div className="absolute bottom-[-18rem] left-[8%] h-[30rem] w-[30rem] rounded-full bg-accent-glow/10 blur-3xl pointer-events-none" aria-hidden />

        <div className="container-page relative py-24 md:py-32 w-full">
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-14 lg:gap-20 items-center">
            <div>
              <div className="chip fade-up"><span className="h-1.5 w-1.5 rounded-full bg-accent pulse-dot" /> ORΛVERTEX · ORACLE ENGINEERING</div>
              <h1 className="mt-7 text-[3.4rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[.92] max-w-4xl fade-up" style={{ animationDelay: "70ms" }}>
                Oracle systems.<br />
                <span className="text-gradient-accent">Engineered</span><br />
                from the inside out.
              </h1>
              <p className="mt-7 text-base md:text-lg leading-relaxed text-ink-muted max-w-xl fade-up" style={{ animationDelay: "140ms" }}>
                OraVertex builds, tunes and evolves the systems behind serious applications — where databases, software and architecture have to work as one.
              </p>
              <div className="mt-9 flex flex-wrap gap-3 fade-up" style={{ animationDelay: "200ms" }}>
                <Link to="/contact" className="btn-primary">Start a conversation <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/services" className="btn-ghost">Explore the stack <ArrowUpRight className="h-4 w-4" /></Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[10px] uppercase tracking-[.18em] text-ink-muted fade-up" style={{ animationDelay: "250ms" }}>
                <span>Oracle 12c → 23ai</span><span>APEX</span><span>RAC</span><span>Data Guard</span><span>OCI</span>
              </div>
            </div>

            <div className="relative hidden lg:block h-[470px] fade-up" style={{ animationDelay: "180ms" }} aria-label="OraVertex architecture visualization">
              <div className="absolute inset-0 rounded-[2rem] glass-panel overflow-hidden">
                <div className="absolute inset-0 grid-lines opacity-50" />
                <div className="absolute inset-8 rounded-full border border-accent/15" />
                <div className="absolute inset-20 rounded-full border border-accent/10" />
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 470" fill="none" aria-hidden>
                  <path d="M250 235 L105 125 L88 315 L250 395 L410 315 L395 125 Z" stroke="currentColor" className="text-accent/25" />
                  <path d="M250 235 L105 125 M250 235 L395 125 M250 235 L88 315 M250 235 L410 315 M250 235 L250 395" stroke="currentColor" className="text-accent/45" strokeDasharray="5 7" />
                </svg>
                <VertexNode className="left-[20%] top-[20%]" label="APP" />
                <VertexNode className="right-[20%] top-[20%]" label="APEX" />
                <VertexNode className="left-[16%] top-[62%]" label="CLOUD" />
                <VertexNode className="right-[16%] top-[62%]" label="DATA" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-28 rounded-full border border-accent/50 bg-primary text-primary-foreground flex flex-col items-center justify-center shadow-[0_0_80px_-20px_var(--color-accent)] vertex-drift">
                  <span className="font-serif text-3xl">OV</span><span className="font-mono text-[8px] tracking-[.22em] opacity-70">CORE</span>
                </div>
                <div className="absolute bottom-5 left-6 right-6 flex justify-between font-mono text-[9px] uppercase tracking-[.16em] text-ink-muted"><span>system topology</span><span>01 / 05</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface/45">
        <div className="container-page py-7 flex flex-wrap items-center justify-between gap-5">
          <span className="font-mono text-[10px] uppercase tracking-[.2em] text-ink-muted">The OraVertex principle</span>
          <p className="font-serif text-xl md:text-2xl">Make complex systems <em className="text-gradient-accent not-italic">explainable.</em></p>
        </div>
      </section>

      <section className="container-page py-24 md:py-32">
        <div className="grid lg:grid-cols-[.72fr_1.28fr] gap-14">
          <div>
            <span className="chip">Capabilities</span>
            <h2 className="mt-5 text-4xl md:text-5xl leading-tight">One stack.<br /><span className="text-gradient-accent">No blind spots.</span></h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-muted max-w-sm">Database engineering is only half the job. OraVertex connects the data layer to the applications, infrastructure and decisions around it.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return <article key={item.code} className="bg-card p-7 md:p-8 group hover:bg-surface transition-colors min-h-[230px]">
                <div className="flex justify-between items-start"><span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-accent"><Icon className="h-5 w-5" /></span><span className="font-mono text-[10px] text-ink-muted">{item.code}</span></div>
                <h3 className="mt-7 text-2xl">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.text}</p>
                <div className="mt-5 h-px w-8 bg-accent/50 group-hover:w-16 transition-all" />
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary text-primary-foreground py-24 md:py-32">
        <div className="absolute inset-0 grid-lines opacity-20" aria-hidden />
        <div className="container-page relative">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              <span className="chip border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/70">Field notes</span>
              <h2 className="mt-5 text-4xl md:text-5xl max-w-2xl">Ideas from the database layer.</h2>
              <p className="mt-4 max-w-xl text-primary-foreground/65">Practical notes on Oracle, APEX, performance and the engineering decisions that rarely make it into documentation.</p>
            </div>
            <Link to="/blog" className="btn-ghost border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">Read all notes <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {posts.slice(0, 3).map((p) => <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[.035] p-6 hover:bg-primary-foreground/[.07] transition-colors">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary-foreground/45">{formatDate(p.date)} · {p.readingTime}</div>
              <h3 className="mt-4 text-xl leading-snug group-hover:text-accent-glow transition-colors">{p.title}</h3>
              <p className="mt-3 text-sm text-primary-foreground/55 line-clamp-3">{p.excerpt}</p>
              <span className="mt-6 inline-flex text-xs font-mono text-accent-glow items-center gap-1">Read note <ArrowUpRight className="h-3.5 w-3.5" /></span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="container-page py-24 md:py-32">
        <div className="rounded-[2rem] border border-border overflow-hidden relative bg-card">
          <div className="absolute inset-0 vertex-grid opacity-30" aria-hidden />
          <div className="relative p-9 md:p-16 lg:p-20 grid lg:grid-cols-[1fr_auto] gap-12 items-end">
            <div>
              <Sparkles className="h-6 w-6 text-accent" />
              <h2 className="mt-5 text-4xl md:text-6xl max-w-3xl leading-[.98]">When the database matters, <span className="text-gradient-accent">details matter.</span></h2>
              <p className="mt-6 text-ink-muted max-w-xl leading-relaxed">A slow query. A risky upgrade. An application that grew faster than its architecture. Bring the problem. OraVertex brings the engineering.</p>
            </div>
            <Link to="/contact" className="btn-primary whitespace-nowrap">Talk to OraVertex <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function VertexNode({ label, className }: { label: string; className: string }) {
  return <div className={`absolute ${className} -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2`}><div className="h-3 w-3 rounded-full bg-accent shadow-[0_0_25px_var(--color-accent)] vertex-pulse" /><span className="font-mono text-[9px] tracking-[.18em] text-ink-muted">{label}</span></div>;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}
