import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/lib/posts";
import { SiteLayout } from "@/components/site-layout";
import { ArrowDown, ArrowRight, ArrowUpRight, Database, Gauge, Network, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "OraVertex — Oracle Engineering" },
    { name: "description", content: "OraVertex engineers Oracle databases, APEX applications and resilient data platforms with precision, discretion and deep technical expertise." },
    { property: "og:title", content: "OraVertex — Oracle Engineering" },
    { property: "og:description", content: "Oracle engineering for systems that matter." },
  ]}),
  component: Home,
});

const disciplines = [
  [Database, "01", "Oracle", "Deep database engineering — performance, internals, availability and recovery."],
  [Gauge, "02", "Performance", "Measured tuning for systems where milliseconds become business outcomes."],
  [Network, "03", "Architecture", "A clear line from application to data, infrastructure and cloud."],
  [ShieldCheck, "04", "Resilience", "Upgrades, migrations, security and recovery designed before they are needed."],
] as const;

function Home() {
  return <SiteLayout>
    <section className="relative min-h-[calc(100vh-4.5rem)] overflow-hidden flex items-end bg-[#171611] text-[#f4efe4]">
      <div className="absolute inset-0 opacity-25 grid-lines" aria-hidden />
      <div className="absolute right-[-10rem] top-[-12rem] h-[45rem] w-[45rem] rounded-full border border-[#b7a47a]/25" aria-hidden />
      <div className="absolute right-[-3rem] top-[-5rem] h-[31rem] w-[31rem] rounded-full border border-[#b7a47a]/20" aria-hidden />
      <div className="absolute right-[12%] top-[18%] h-[16rem] w-[16rem] rounded-full bg-[#b7a47a]/10 blur-[90px]" aria-hidden />
      <div className="absolute left-[8%] top-[18%] font-mono text-[9px] tracking-[.35em] uppercase text-[#f4efe4]/35 [writing-mode:vertical-rl]">Data · Systems · Engineering</div>
      <div className="container-page relative py-20 md:py-24 lg:py-28">
        <div className="max-w-6xl">
          <div className="flex items-center gap-4 fade-up"><span className="h-px w-12 bg-[#b7a47a]" /><span className="font-mono text-[10px] tracking-[.24em] uppercase text-[#f4efe4]/60">Independent Oracle engineering</span></div>
          <h1 className="mt-9 max-w-5xl text-[4.6rem] sm:text-7xl md:text-[7.5rem] lg:text-[9.2rem] leading-[.78] fade-up" style={{animationDelay:"100ms"}}>ORA<br /><span className="text-[#b7a47a]">VERTEX</span></h1>
          <div className="mt-10 grid md:grid-cols-[1fr_auto] gap-8 items-end fade-up" style={{animationDelay:"180ms"}}>
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-[#f4efe4]/65">Oracle systems engineered with the care of an atelier — precise, resilient and built to disappear into the infrastructure of your business.</p>
            <Link to="/contact" className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[.18em] uppercase text-[#f4efe4] group">Begin a conversation <span className="h-9 w-9 rounded-full border border-[#b7a47a]/50 flex items-center justify-center group-hover:bg-[#b7a47a] group-hover:text-[#171611] transition-colors"><ArrowUpRight className="h-4 w-4" /></span></Link>
          </div>
          <div className="mt-20 flex items-center gap-3 text-[#f4efe4]/35 font-mono text-[9px] tracking-[.2em] uppercase"><ArrowDown className="h-3.5 w-3.5" /> Scroll to explore <span className="h-px w-20 bg-[#f4efe4]/15" /></div>
        </div>
      </div>
    </section>

    <section className="container-page py-24 md:py-32 lg:py-40">
      <div className="grid lg:grid-cols-[.7fr_1.3fr] gap-16 lg:gap-28 items-start">
        <div className="lg:sticky lg:top-32"><span className="chip">The philosophy</span><h2 className="mt-7 text-5xl md:text-6xl leading-[.9]">Quietly<br /><em>exceptional.</em></h2></div>
        <div className="max-w-2xl"><p className="text-2xl md:text-3xl font-serif leading-tight">The best infrastructure rarely asks for attention.</p><p className="mt-8 text-base md:text-lg text-ink-muted leading-relaxed">It simply works. OraVertex brings together database engineering, application architecture and performance discipline to make complex Oracle environments feel deliberate rather than fragile.</p><div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-x-10 gap-y-4 font-mono text-[9px] tracking-[.18em] uppercase text-ink-muted"><span>Oracle 19c / 23ai</span><span>APEX</span><span>RAC</span><span>Data Guard</span><span>OCI</span></div></div>
      </div>
    </section>

    <section className="bg-[#171611] text-[#f4efe4] py-24 md:py-32">
      <div className="container-page">
        <div className="flex items-end justify-between gap-8 border-b border-[#f4efe4]/15 pb-8"><div><span className="font-mono text-[9px] tracking-[.2em] uppercase text-[#b7a47a]">The disciplines</span><h2 className="mt-4 text-5xl md:text-6xl">Where precision matters.</h2></div><span className="hidden md:block font-mono text-[9px] tracking-[.18em] text-[#f4efe4]/35">04 / 04</span></div>
        <div>{disciplines.map(([Icon,num,title,text]) => <div key={num} className="group grid md:grid-cols-[5rem_1fr_1.2fr_auto] gap-6 md:gap-10 items-center py-9 border-b border-[#f4efe4]/10 hover:border-[#b7a47a]/60 transition-colors"><span className="font-mono text-[10px] text-[#b7a47a]">{num}</span><div className="flex items-center gap-5"><Icon className="h-5 w-5 text-[#b7a47a]"/><h3 className="text-3xl md:text-4xl group-hover:text-[#b7a47a] transition-colors">{title}</h3></div><p className="text-sm leading-relaxed text-[#f4efe4]/50 max-w-md">{text}</p><ArrowUpRight className="h-5 w-5 text-[#f4efe4]/25 group-hover:text-[#b7a47a] transition-colors" /></div>)}</div>
      </div>
    </section>

    <section className="container-page py-24 md:py-32 lg:py-40">
      <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-16 items-center">
        <div className="relative min-h-[430px] overflow-hidden bg-[#1a1915] text-[#f4efe4] p-8 md:p-12 flex items-end">
          <div className="absolute inset-0 vertex-grid opacity-35" aria-hidden />
          <div className="absolute inset-10 rounded-full border border-[#b7a47a]/15" /><div className="absolute inset-24 rounded-full border border-[#b7a47a]/10" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 430" fill="none" aria-hidden><path d="M300 215 L120 100 L90 330 L300 385 L510 330 L480 100 Z" stroke="#b7a47a" strokeOpacity=".28"/><path d="M300 215 L120 100 M300 215 L480 100 M300 215 L90 330 M300 215 L510 330 M300 215 L300 385" stroke="#b7a47a" strokeOpacity=".5" strokeDasharray="2 9"/></svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full border border-[#b7a47a]/60 flex flex-col items-center justify-center vertex-drift"><span className="font-serif text-4xl">OV</span><span className="font-mono text-[8px] tracking-[.28em] text-[#b7a47a]">VERTEX</span></div>
          <div className="relative font-mono text-[9px] tracking-[.18em] uppercase text-[#f4efe4]/40">System architecture · 01</div>
        </div>
        <div><span className="chip">The work</span><h2 className="mt-6 text-5xl md:text-6xl leading-[.92]">Complexity,<br /><em>made elegant.</em></h2><p className="mt-7 text-base text-ink-muted leading-relaxed max-w-lg">From a stubborn execution plan to a full platform migration, the work is the same: understand what is really happening, then change only what needs changing.</p><Link to="/services" className="mt-9 inline-flex items-center gap-3 font-mono text-[10px] tracking-[.18em] uppercase border-b border-border pb-2 hover:border-accent hover:text-accent transition-colors">Explore the disciplines <ArrowRight className="h-4 w-4" /></Link></div>
      </div>
    </section>

    <section className="border-t border-border bg-surface py-24 md:py-32">
      <div className="container-page"><div className="flex items-end justify-between gap-8"><div><span className="chip">Field notes</span><h2 className="mt-5 text-5xl md:text-6xl">From the database layer.</h2></div><Link to="/blog" className="hidden md:inline-flex items-center gap-2 font-mono text-[9px] tracking-[.18em] uppercase hover:text-accent">All notes <ArrowUpRight className="h-4 w-4" /></Link></div>
        <div className="mt-14 grid md:grid-cols-3 border-t border-border">{posts.slice(0,3).map((p,i)=><Link key={p.slug} to="/blog/$slug" params={{slug:p.slug}} className="group py-8 md:px-7 first:md:pl-0 border-b md:border-b-0 md:border-l first:border-l-0 border-border"><div className="font-mono text-[9px] tracking-[.16em] uppercase text-ink-muted">0{i+1} · {formatDate(p.date)}</div><h3 className="mt-6 text-2xl md:text-3xl leading-tight group-hover:text-accent transition-colors">{p.title}</h3><p className="mt-4 text-sm text-ink-muted leading-relaxed line-clamp-3">{p.excerpt}</p><span className="mt-7 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.16em] text-ink-muted group-hover:text-accent">Read <ArrowRight className="h-3.5 w-3.5" /></span></Link>)}</div>
      </div>
    </section>

    <section className="container-page py-28 md:py-40"><div className="max-w-5xl"><span className="chip">Private by design</span><h2 className="mt-7 text-6xl md:text-8xl leading-[.82]">When the system<br /><em>cannot fail.</em></h2><div className="mt-10 flex flex-wrap items-center gap-7"><p className="max-w-xl text-ink-muted leading-relaxed">Bring the problem that has resisted the obvious answer. OraVertex is built for the difficult layer underneath.</p><Link to="/contact" className="btn-primary">Talk to OraVertex <ArrowUpRight className="h-4 w-4" /></Link></div></div></section>
  </SiteLayout>;
}

function formatDate(iso: string) { return new Date(iso).toLocaleDateString("en-US", {year:"numeric", month:"short", day:"numeric"}); }
