import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { getPost, posts } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Post not found" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Valja Vassileva` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: PostPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-page py-24 text-center">
        <h1 className="text-4xl">Post not found</h1>
        <p className="mt-3 text-ink-muted">This one doesn't exist — yet.</p>
        <Link to="/blog" className="btn-primary mt-8 inline-flex">Back to blog</Link>
      </div>
    </SiteLayout>
  ),
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <SiteLayout>
      <article className="container-page py-20 md:py-28 max-w-3xl">
        <Link to="/blog" className="text-sm text-ink-muted hover:text-foreground link-underline">
          ← All posts
        </Link>
        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
        <h1 className="mt-4 text-4xl md:text-5xl leading-[1.05]">{post.title}</h1>
        <div className="mt-4 font-mono text-xs text-ink-muted uppercase tracking-widest">
          {formatDate(post.date)} · {post.readingTime}
        </div>
        <div className="mt-10 prose-content text-lg text-foreground/90 leading-relaxed space-y-5">
          {renderContent(post.content)}
        </div>
      </article>

      {others.length > 0 && (
        <section className="container-page pb-24 border-t border-border/60 pt-16">
          <h2 className="text-2xl mb-8">Keep reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="rounded-2xl border border-border p-6 bg-card hover:border-accent/60 transition-colors block"
              >
                <div className="font-mono text-xs text-ink-muted">
                  {formatDate(p.date)}
                </div>
                <h3 className="mt-2 text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </SiteLayout>
  );
}

function renderContent(md: string) {
  return md.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="font-serif text-3xl mt-10 mb-2 text-foreground">
          {block.slice(3)}
        </h2>
      );
    }
    if (/^\d+\.\s/.test(block)) {
      const items = block.split("\n").map((l) => l.replace(/^\d+\.\s/, ""));
      return (
        <ol key={i} className="list-decimal pl-6 space-y-1 text-base">
          {items.map((it, j) => <li key={j}>{it}</li>)}
        </ol>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").map((l) => l.replace(/^-\s/, ""));
      return (
        <ul key={i} className="list-disc pl-6 space-y-1 text-base">
          {items.map((it, j) => <li key={j}>{it}</li>)}
        </ul>
      );
    }
    return <p key={i}>{block}</p>;
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
