import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Valja Vassileva" },
      {
        name: "description",
        content:
          "Valja Vassileva is an Oracle DBA and APEX developer with 15+ years of experience. Independent consultant based in the EU.",
      },
      { property: "og:title", content: "About — Valja Vassileva" },
      {
        property: "og:description",
        content:
          "Independent Oracle consultant. 15+ years of DBA and APEX work across finance, telco, and public sector.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <article className="container-page py-20 md:py-28 max-w-3xl">
        <span className="chip">About</span>
        <h1 className="mt-6 text-5xl md:text-6xl">
          I've spent 15+ years making Oracle databases behave.
        </h1>
        <div className="mt-10 space-y-6 text-lg text-ink-muted leading-relaxed">
          <p>
            I'm Valja — an independent Oracle DBA and APEX developer. I started
            out on Oracle 9i in a bank, spent a decade in enterprise consulting,
            and now work directly with teams that need deep Oracle expertise
            without hiring for it full-time.
          </p>
          <p>
            My work sits in two places: <strong className="text-foreground">keeping production
            Oracle databases healthy</strong> (tuning, upgrades, backup and recovery, RAC,
            Data Guard) and <strong className="text-foreground">building Oracle APEX
            applications</strong> that internal teams actually enjoy using.
          </p>
          <p>
            I like problems that other people have given up on: a query that has
            been slow for two years, an APEX app that "nobody dares to touch",
            a migration that keeps getting postponed. That's where I do my best
            work.
          </p>
        </div>

        <section className="mt-16 grid sm:grid-cols-2 gap-x-10 gap-y-8">
          <Block title="Expertise">
            <ul className="space-y-1.5 text-ink-muted">
              <li>Oracle 11g → 23ai</li>
              <li>Oracle APEX 5 → 24.x</li>
              <li>PL/SQL, SQL tuning, AWR</li>
              <li>RAC, Data Guard, RMAN</li>
              <li>OCI & on-prem</li>
            </ul>
          </Block>
          <Block title="Industries">
            <ul className="space-y-1.5 text-ink-muted">
              <li>Banking & finance</li>
              <li>Telecommunications</li>
              <li>Public sector</li>
              <li>Logistics</li>
              <li>Healthcare</li>
            </ul>
          </Block>
          <Block title="How I work">
            <ul className="space-y-1.5 text-ink-muted">
              <li>Fixed-scope audits</li>
              <li>Monthly DBA retainer</li>
              <li>APEX project delivery</li>
              <li>Emergency response</li>
            </ul>
          </Block>
          <Block title="Not what I do">
            <ul className="space-y-1.5 text-ink-muted">
              <li>SQL Server / MySQL</li>
              <li>Frontend framework work</li>
              <li>Recruiting</li>
              <li>Selling licenses</li>
            </ul>
          </Block>
        </section>

        <div className="mt-16 flex gap-3">
          <Link to="/services" className="btn-primary">Explore services →</Link>
          <Link to="/contact" className="btn-ghost">Get in touch</Link>
        </div>
      </article>
    </SiteLayout>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
        {title}
      </h2>
      <div className="text-sm">{children}</div>
    </div>
  );
}
