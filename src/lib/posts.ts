export type Post = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  tags: string[];
  content: string;
};

export const posts: Post[] = [
  {
    slug: "ora-01555-snapshot-too-old",
    title: "ORA-01555: Snapshot too old — a practical checklist",
    date: "2026-06-14",
    readingTime: "7 min",
    tags: ["Oracle DBA", "Undo", "Troubleshooting"],
    excerpt:
      "The classic 'snapshot too old' error rarely means what beginners think. Here is the checklist I run through before touching UNDO_RETENTION.",
    content: `\
When a long-running query fails with ORA-01555, the reflex is to raise UNDO_RETENTION. That is almost never the right first move.

## What actually happened
Oracle needed a consistent read for a block whose undo had already been overwritten. Three things drive that: undo pressure, commit rate  and query duration.

## The checklist
1. Confirm the query duration in v$sql_monitor — is it a runaway plan?
2. Check v$undostat for tuned_undoretention over the query window.
3. Look for LOB corruption before blaming undo: ORA-22924 is often misreported as -01555.
4. Only after 1–3, consider undo tablespace sizing or guaranteed retention.

## Prevention beats tuning
The cheapest fix is almost always making the query faster. A 40-minute report has 40 minutes to hit this error; a 40-second report almost never does.`,
  },
  {
    slug: "apex-authentication-schemes",
    title: "APEX authentication schemes I actually use in production",
    date: "2026-05-02",
    readingTime: "9 min",
    tags: ["APEX", "Security"],
    excerpt:
      "SSO, custom  or the built-in APEX accounts? After a decade of Oracle APEX projects, here is what I reach for by default — and when I break the rule.",
    content: `\
Every APEX project starts with the same question: how do people log in?

## Default: SAML / OIDC via the customer's IdP
If the client has Entra ID, Okta  or Keycloak, use it. Zero password management for you  and offboarding is automatic.

## Second choice: Database Accounts
For internal tooling where users already have DB credentials, Database Accounts save an entire user-management layer.

## Custom is the last resort
Rolling your own authentication in PL/SQL is fun exactly once. After that it is a maintenance tax you pay forever.`,
  },
  {
    slug: "apex-performance-hidden-costs",
    title: "The hidden performance costs of APEX interactive reports",
    date: "2026-03-20",
    readingTime: "6 min",
    tags: ["APEX", "Performance"],
    excerpt:
      "Interactive Reports are the fastest way to ship an APEX screen — and the fastest way to hide a full-table scan behind a friendly UI.",
    content: `\
Interactive Reports feel free. They are not.

## The three costs
- Every user filter becomes a new bind-variable predicate — plan instability is real.
- Aggregate/pivot views execute in the mid-tier session, not the DB.
- Saved reports pin queries you may want to evolve.

## What I do
For anything over ~50k rows: switch to a Classic Report backed by a well-indexed view  and expose only the filters that hit indexes.`,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
