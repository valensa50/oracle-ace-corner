import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Oracle & APEX field notes" },
      {
        name: "description",
        content:
          "Field notes on Oracle databases and Oracle APEX — troubleshooting, performance and real-world war stories from independent consultant Valja Vassileva.",
      },
      { property: "og:title", content: "Blog — Oracle & APEX field notes" },
      {
        property: "og:description",
        content: "Troubleshooting, tuning and APEX field notes from a working Oracle consultant.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <SiteLayout>
      <section className="container-page py-20 md:py-28">
        <span className="chip">Field notes</span>
        <h1 className="mt-6 text-5xl md:text-6xl max-w-3xl">
          Oracle problems, honestly written up.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-muted">
          Short posts from real engagements. If something here saves you an
          afternoon of debugging, that's the point.
        </p>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group grid md:grid-cols-[10rem_1fr_auto] gap-6 py-8 items-start hover:bg-surface/60 -mx-4 px-4 transition-colors rounded-lg"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-ink-muted pt-1.5">
                {formatDate(p.date)}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl group-hover:text-accent transition-colors">
                  {p.title}
                </h2>
                <p className="mt-2 text-ink-muted max-w-2xl">{p.excerpt}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
              <div className="font-mono text-xs text-ink-muted pt-1.5 md:text-right">
                {p.readingTime}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
