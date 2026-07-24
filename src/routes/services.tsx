import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Oracle DBA & APEX Consulting" },
      {
        name: "description",
        content:
          "Oracle APEX development, Oracle DBA support, performance tuning, upgrades and migrations. Independent Oracle consulting by Valja Vassileva.",
      },
      { property: "og:title", content: "Services — Oracle DBA & APEX Consulting" },
      {
        property: "og:description",
        content:
          "APEX application development, Oracle DBA retainer, tuning  and migrations. See how I can help.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    tag: "01",
    title: "Oracle APEX development",
    lede: "New APEX applications, redesigns of legacy ones  and integrations with the rest of your stack.",
    bullets: [
      "New APEX apps from data model to launch",
      "Rescue of legacy APEX 4/5 apps",
      "SSO, OIDC, SAML, custom auth schemes",
      "REST integrations & ORDS",
      "APEX upgrades to 24.x",
    ],
  },
  {
    tag: "02",
    title: "Oracle DBA — retainer or one-off",
    lede: "Ongoing support or a fixed engagement to bring a database back to health.",
    bullets: [
      "Performance tuning (SQL, PGA, AWR-driven)",
      "Backup & recovery strategy (RMAN)",
      "RAC & Data Guard setup and audits",
      "Patching and 19c / 23ai upgrades",
      "24/7 emergency response option",
    ],
  },
  {
    tag: "03",
    title: "Architecture & code review",
    lede: "A structured second opinion before you commit to a direction — or after something has already gone wrong.",
    bullets: [
      "Data model & PL/SQL review",
      "APEX app security assessment",
      "Capacity & scaling review",
      "Written report with priorities",
    ],
  },
  {
    tag: "04",
    title: "Migrations",
    lede: "From on-prem to OCI, from legacy versions to 23ai  or consolidating a fleet of instances.",
    bullets: [
      "19c / 23ai upgrades",
      "On-prem → OCI moves",
      "Cross-platform migrations",
      "Rollback plans that actually work",
    ],
  },
];

function Services() {
  return (
    <SiteLayout>
      <section className="container-page py-20 md:py-28">
        <span className="chip">Services</span>
        <h1 className="mt-6 text-5xl md:text-6xl max-w-3xl">
          Deep Oracle expertise, on demand.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-muted">
          I work with a small number of clients at a time so every engagement
          gets my full attention. Below is what I typically do — most projects
          are some blend of these.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-border bg-card p-8 hover:border-accent/60 transition-colors"
            >
              <div className="font-mono text-xs text-accent tracking-widest">
                {s.tag} — Service
              </div>
              <h2 className="mt-3 text-3xl">{s.title}</h2>
              <p className="mt-3 text-ink-muted">{s.lede}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1 w-3 bg-accent flex-none rounded-full" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-border p-10 bg-surface flex flex-col md:flex-row md:items-center gap-6 justify-between">
          <div>
            <h2 className="text-3xl">Not sure what you need?</h2>
            <p className="mt-2 text-ink-muted max-w-xl">
              Send a quick description of the problem. If I'm not the right
              person, I'll say so — and often point you to someone who is.
            </p>
          </div>
          <Link to="/contact" className="btn-primary">Start a conversation →</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
