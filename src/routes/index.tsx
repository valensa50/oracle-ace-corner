import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { posts } from "@/lib/posts";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Valja Vassileva — Oracle DBA & APEX Developer" },
      {
        name: "description",
        content:
          "Independent Oracle consultant. Oracle DBA, APEX application development, performance tuning  and honest advice for teams running Oracle databases.",
      },
      { property: "og:title", content: "Valja Vassileva — Oracle DBA & APEX Developer" },
      {
        property: "og:description",
        content:
          "Independent Oracle DBA and APEX developer. Consulting, troubleshooting  and blog posts on real-world Oracle problems.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.18] pointer-events-none"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background pointer-events-none" aria-hidden />
        <div className="container-page relative pt-20 pb-24 md:pt-32 md:pb-36">
          <span className="chip">Available for new engagements — 2026</span>
          <h1 className="mt-6 text-5xl md:text-7xl leading-[1.02] max-w-4xl">
            Behind Every Great App Is a <em className="text-accent not-italic">Quiet</em> Database
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-muted max-w-2xl">
            I'm Valja Vassileva — an independent Oracle DBA and APEX developer.
            I help teams tune slow databases, ship internal applications and
            sleep through the night.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">Start a project →</Link>
            <Link to="/services" className="btn-ghost">See services</Link>
          </div>
          <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
              ["15+", "Years with Oracle"],
              ["120+", "APEX apps shipped"],
              ["24/7", "DBA support available"],
              ["EU", "Timezone friendly"],
            ].map(([k, v]) => (
              <div key={v} className="border-l border-border pl-4">
                <dt className="font-serif text-3xl">{k}</dt>
                <dd className="text-xs uppercase tracking-widest text-ink-muted mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-page py-20 border-t border-border/60">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div>
            <span className="chip">What I do</span>
            <h2 className="mt-4 text-4xl">Two disciplines, one stack.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <article
                key={s.title}
                className="rounded-2xl border border-border p-6 bg-card hover:border-accent/60 transition-colors"
              >
                <div className="font-mono text-xs text-accent mb-3">{s.tag}</div>
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{s.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 border-t border-border/60">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="chip">Latest writing</span>
            <h2 className="mt-4 text-4xl">From the blog</h2>
          </div>
          <Link to="/blog" className="link-underline text-sm">All posts</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group rounded-2xl border border-border p-6 bg-card hover:border-accent/60 transition-colors flex flex-col"
            >
              <div className="text-xs font-mono text-ink-muted">
                {formatDate(p.date)} · {p.readingTime}
              </div>
              <h3 className="mt-3 text-xl leading-snug group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-ink-muted flex-1">{p.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-widest text-ink-muted">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page py-24 border-t border-border/60">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/40 blur-3xl" aria-hidden />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl max-w-2xl">
              Have a slow query, a stuck APEX app or a migration on the horizon?
            </h2>
            <p className="mt-4 max-w-xl opacity-80">
              I take on a limited number of engagements each quarter — from
              one-off audits to long-term retainers.
            </p>
            <Link to="/contact" className="mt-8 btn-ghost bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20 inline-flex">
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

const services = [
  {
    tag: "01 · APEX",
    title: "Oracle APEX development",
    blurb:
      "End-to-end APEX applications — from data model to UX. Custom auth, integrations  and upgrades of legacy apps.",
  },
  {
    tag: "02 · DBA",
    title: "Oracle DBA & tuning",
    blurb:
      "Performance tuning, upgrades, backup/recovery strategy, RAC and Data Guard. Emergency support included.",
  },
  {
    tag: "03 · Advisory",
    title: "Architecture reviews",
    blurb:
      "A second pair of eyes on your Oracle stack before things go wrong — data model, security, scaling.",
  },
  {
    tag: "04 · Migrations",
    title: "Version & cloud migrations",
    blurb:
      "Upgrades to 19c/23ai, moves to OCI or on-prem consolidation, with rollback plans that actually work.",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
