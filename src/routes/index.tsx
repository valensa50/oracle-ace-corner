import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { posts } from "@/lib/posts";
import heroImg from "@/assets/hero.jpg";
import { ArrowRight, Database, Layers, ShieldCheck, MoveUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Valja Vassileva — Oracle DBA & APEX Developer" },
      {
        name: "description",
        content:
          "Independent Oracle consultant. Oracle DBA, APEX application development, performance tuning and honest advice for teams running Oracle databases.",
      },
      { property: "og:title", content: "Valja Vassileva — Oracle DBA & APEX Developer" },
      {
        property: "og:description",
        content:
          "Independent Oracle DBA and APEX developer. Consulting, troubleshooting and blog posts on real-world Oracle problems.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.16] pointer-events-none"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/75 to-background pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[42rem] rounded-full bg-accent/15 blur-3xl pointer-events-none"
          aria-hidden
        />

        <div className="container-page relative pt-16 pb-20 md:pt-28 md:pb-32">
          <span className="chip fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-accent pulse-dot" aria-hidden />
            Available for new engagements — 2026
          </span>

          <h1
            className="mt-6 text-[2.6rem] sm:text-6xl md:text-7xl leading-[1.03] max-w-4xl fade-up"
            style={{ animationDelay: "60ms" }}
          >
            Behind Every Great App Is a{" "}
            <em className="not-italic text-gradient-accent">Quiet</em> Database
          </h1>

          <p
            className="mt-6 text-base sm:text-lg md:text-xl text-ink-muted max-w-2xl fade-up"
            style={{ animationDelay: "120ms" }}
          >
            I'm Valja Vassileva — an independent Oracle DBA and APEX developer.
            I help teams tune slow databases, ship internal applications and
            sleep through the night.
          </p>

          <div
            className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 fade-up"
            style={{ animationDelay: "180ms" }}
          >
            <Link to="/contact" className="btn-primary justify-center">
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-ghost justify-center">
              See services
            </Link>
          </div>

          <ul
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-widest text-ink-muted fade-up"
            style={{ animationDelay: "220ms" }}
          >
            {["Oracle 12c → 23ai", "APEX 5 → 24", "RAC & Data Guard", "OCI"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                {t}
              </li>
            ))}
          </ul>

          <dl
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 max-w-3xl fade-up"
            style={{ animationDelay: "260ms" }}
          >
            {[
              ["15+", "Years with Oracle"],
              ["120+", "APEX apps shipped"],
              ["24/7", "DBA support available"],
              ["EU", "Timezone friendly"],
            ].map(([k, v]) => (
              <div key={v} className="border-l-2 border-accent/30 pl-4">
                <dt className="font-serif text-3xl md:text-4xl">{k}</dt>
                <dd className="text-[11px] uppercase tracking-widest text-ink-muted mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-20 md:py-24 border-t border-border/60">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-14 items-start">
          <div className="md:sticky md:top-24">
            <span className="chip">What I do</span>
            <h2 className="mt-4 text-3xl md:text-4xl">Two disciplines, one stack.</h2>
            <p className="mt-4 text-sm text-ink-muted max-w-sm">
              Deep database engineering paired with the application layer that sits
              on top of it — so nothing gets lost between the two.
            </p>
            <Link to="/services" className="mt-6 link-underline text-sm inline-flex items-center gap-1.5">
              Explore services <MoveUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <article key={s.title} className="card-elevated p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-accent">
                    <s.Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[11px] text-ink-muted tracking-widest">{s.tag}</span>
                </div>
                <h3 className="mt-4 text-xl md:text-2xl leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{s.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="container-page py-20 md:py-24 border-t border-border/60">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="chip">Latest writing</span>
            <h2 className="mt-4 text-3xl md:text-4xl">From the blog</h2>
          </div>
          <Link to="/blog" className="link-underline text-sm">All posts</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {posts.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group card-elevated p-6 flex flex-col"
            >
              <div className="text-xs font-mono text-ink-muted">
                {formatDate(p.date)} · {p.readingTime}
              </div>
              <h3 className="mt-3 text-xl leading-snug group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-ink-muted flex-1">{p.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-widest text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Read post <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 md:py-24 border-t border-border/60">
        <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-16 relative overflow-hidden">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/40 blur-3xl" aria-hidden />
          <div
            className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-accent-glow/20 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl max-w-2xl leading-tight">
              Have a slow query, a stuck APEX app or a migration on the horizon?
            </h2>
            <p className="mt-4 max-w-xl text-primary-foreground/90">
              I take on a limited number of engagements each quarter — from
              one-off audits to long-term retainers.
            </p>
            <Link
              to="/contact"
              className="mt-8 btn-ghost bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20 inline-flex"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
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
    Icon: Layers,
    title: "Oracle APEX development",
    blurb:
      "End-to-end APEX applications — from data model to UX. Custom auth, integrations and upgrades of legacy apps.",
  },
  {
    tag: "02 · DBA",
    Icon: Database,
    title: "Oracle DBA & tuning",
    blurb:
      "Performance tuning, upgrades, backup/recovery strategy, RAC and Data Guard. Emergency support included.",
  },
  {
    tag: "03 · Advisory",
    Icon: ShieldCheck,
    title: "Architecture reviews",
    blurb:
      "A second pair of eyes on your Oracle stack before things go wrong — data model, security, scaling.",
  },
  {
    tag: "04 · Migrations",
    Icon: MoveUpRight,
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
