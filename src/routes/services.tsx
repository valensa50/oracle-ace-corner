import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services — OraVertex" },
    { name: "description", content: "Oracle APEX development, database engineering, performance tuning, architecture and migrations by OraVertex." },
    { property: "og:title", content: "Services — OraVertex" },
    { property: "og:description", content: "Precision Oracle engineering for demanding systems." },
  ]}),
  component: Services,
});

const services = [
  { tag:"01", title:"Oracle APEX", lede:"Data-driven applications designed with the database as a first-class part of the product.", bullets:["New APEX applications from data model to launch","Legacy APEX rescue and modernization","SSO, OIDC, SAML and custom authentication","REST integrations and ORDS","APEX upgrades"] },
  { tag:"02", title:"Database engineering", lede:"Deep Oracle DBA work for environments where reliability and performance are not negotiable.", bullets:["SQL and AWR-driven performance tuning","RMAN backup and recovery strategy","RAC and Data Guard","Patching and 19c / 23ai upgrades","Retainer and incident support"] },
  { tag:"03", title:"Architecture review", lede:"A rigorous second opinion before a major decision — or when a system has stopped behaving as expected.", bullets:["Data model and PL/SQL review","APEX security assessment","Capacity and scaling review","Application/database boundary review","Written priorities and recommendations"] },
  { tag:"04", title:"Migrations", lede:"Carefully planned moves from legacy platforms to modern Oracle estates and OCI.", bullets:["19c / 23ai upgrades","On-premise to OCI","Cross-platform migrations","Consolidation and modernization","Rollback plans and rehearsal"] },
];

function Services(){return <SiteLayout><section className="container-page py-24 md:py-32"><span className="chip">The disciplines</span><h1 className="mt-7 text-6xl md:text-8xl max-w-5xl leading-[.82]">Engineering for<br /><em>systems that matter.</em></h1><p className="mt-9 max-w-2xl text-lg text-ink-muted leading-relaxed">OraVertex works at the intersection of Oracle databases, applications and architecture. Engagements are deliberately focused: understand the system, define the real problem, then engineer the smallest elegant solution.</p><div className="mt-20 border-t border-border">{services.map(s=><article key={s.tag} className="grid md:grid-cols-[5rem_1fr_1.2fr] gap-7 md:gap-12 py-10 border-b border-border"><span className="font-mono text-[10px] text-accent">{s.tag}</span><div><h2 className="text-4xl md:text-5xl">{s.title}</h2><p className="mt-3 text-sm text-ink-muted leading-relaxed">{s.lede}</p></div><ul className="space-y-2 text-sm text-ink-muted">{s.bullets.map(b=><li key={b} className="before:content-['—'] before:mr-3 before:text-accent">{b}</li>)}</ul></article>)}</div><div className="mt-20 pt-10 border-t border-border flex flex-col md:flex-row md:items-end justify-between gap-8"><div><span className="chip">Private enquiries</span><h2 className="mt-4 text-4xl">Have a difficult system?</h2></div><Link to="/contact" className="btn-primary">Start a conversation <span>→</span></Link></div></section></SiteLayout>}
