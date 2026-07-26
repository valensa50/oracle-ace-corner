import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { submitContactMessage } from "@/lib/contact.functions";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Valja Vassileva" },
      {
        name: "description",
        content:
          "Get in touch with Valja Vassileva for Oracle DBA support, APEX development, tuning or migration work.",
      },
      { property: "og:title", content: "Contact — Valja Vassileva" },
      {
        property: "og:description",
        content: "Reach out about Oracle DBA support or APEX application development.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const send = useServerFn(submitContactMessage);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    setError("");
    try {
      await send({
        data: {
          name: String(fd.get("name") || ""),
          email: String(fd.get("email") || ""),
          company: String(fd.get("company") || ""),
          message: String(fd.get("message") || ""),
        },
      });
      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <SiteLayout>
      <section className="container-page py-20 md:py-28 max-w-3xl">
        <span className="chip">Contact</span>
        <h1 className="mt-6 text-5xl md:text-6xl">Let's talk.</h1>
        <p className="mt-6 text-lg text-ink-muted">
          Whether it's a slow query, a stalled APEX project or a database
          upgrade you've been dreading — describe what's going on and I'll get
          back to you within one business day.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <a
            href="mailto:valja.vassileva@gmail.com?subject=Oracle%20consulting%20enquiry"
            className="rounded-2xl border border-border p-6 bg-card hover:border-accent/60 transition-colors block"
          >
            <div className="font-mono text-xs text-accent tracking-widest">Email</div>
            <div className="mt-2 text-lg">valja.vassileva@gmail.com</div>
            <div className="mt-1 text-sm text-ink-muted">Best for project enquiries.</div>
          </a>
          <div className="rounded-2xl border border-border p-6 bg-card">
            <div className="font-mono text-xs text-accent tracking-widest">Response time</div>
            <div className="mt-2 text-lg">Within 1 business day</div>
            <div className="mt-1 text-sm text-ink-muted">
              Emergency Oracle support available for retainer clients 24/7.
            </div>
          </div>
        </div>

        <form className="mt-12 space-y-5" onSubmit={onSubmit}>
          <Field label="Your name" name="name" placeholder="Jane Doe" required />
          <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
          <Field label="Company (optional)" name="company" placeholder="Acme Corp" />
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-widest font-mono text-ink-muted mb-2">
              What do you need help with?
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              minLength={10}
              placeholder="A slow report, a new APEX app, a 19c upgrade..."
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>
          <button type="submit" className="btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message →"}
          </button>
          {status === "sent" && (
            <p role="status" className="text-sm text-accent">
              Thanks — your message has been received. I'll reply within one business day.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="text-sm text-destructive">
              {error}
            </p>
          )}
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-widest font-mono text-ink-muted mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}

        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}
