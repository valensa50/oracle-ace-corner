import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { z } from "zod";
import { Mail, Clock, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { SiteLayout, CONTACT_EMAIL } from "@/components/site-layout";
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

const formSchema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(120, "Name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Please add your email")
    .email("Please add a valid email address")
    .max(200),
  company: z.string().trim().max(160, "Company name is too long").optional().default(""),
  message: z
    .string()
    .trim()
    .min(10, "Please describe what you need help with (at least 10 characters)")
    .max(5000, "Message is too long"),
});

type FormValues = z.infer<typeof formSchema>;
type FieldErrors = Partial<Record<keyof FormValues, string>>;

function mailtoHref(values?: Partial<FormValues>) {
  const subject = "Oracle consulting enquiry";
  const body = values?.message
    ? `${values.message}\n\n—\n${values.name ?? ""}${values.company ? ` · ${values.company}` : ""}\n${values.email ?? ""}`
    : "";
  const params = new URLSearchParams({ subject, ...(body ? { body } : {}) });
  return `mailto:${CONTACT_EMAIL}?${params.toString().replace(/\+/g, "%20")}`;
}

function Contact() {
  const send = useServerFn(submitContactMessage);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  function update(key: keyof FormValues, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (fieldErrors[key]) setFieldErrors((f) => ({ ...f, [key]: undefined }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const parsed = formSchema.safeParse(values);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (key && !next[key]) next[key] = issue.message;
      }
      setFieldErrors(next);
      setStatus("idle");
      return;
    }

    setFieldErrors({});
    setStatus("sending");
    try {
      await send({ data: parsed.data });
      setValues({ name: "", email: "", company: "", message: "" });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try again or email me directly."
      );
    }
  }

  return (
    <SiteLayout>
      <section className="container-page py-16 md:py-24 max-w-3xl">
        <span className="chip fade-up">Contact</span>
        <h1 className="mt-6 text-[2.5rem] sm:text-5xl md:text-6xl fade-up" style={{ animationDelay: "60ms" }}>
          Let's talk.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-ink-muted fade-up" style={{ animationDelay: "120ms" }}>
          Whether it's a slow query, a stalled APEX project or a database
          upgrade you've been dreading — describe what's going on and I'll get
          back to you within one business day.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          <a
            href={mailtoHref()}
            className="card-elevated p-6 block"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-accent tracking-widest">
              <Mail className="h-4 w-4" /> Email
            </div>
            <div className="mt-2 text-base sm:text-lg break-words">{CONTACT_EMAIL}</div>
            <div className="mt-1 text-sm text-ink-muted">Best for project enquiries.</div>
          </a>
          <div className="card-elevated p-6">
            <div className="flex items-center gap-2 font-mono text-xs text-accent tracking-widest">
              <Clock className="h-4 w-4" /> Response time
            </div>
            <div className="mt-2 text-base sm:text-lg">Within 1 business day</div>
            <div className="mt-1 text-sm text-ink-muted">
              Emergency Oracle support available for retainer clients 24/7.
            </div>
          </div>
        </div>

        <form
          className="mt-12 space-y-5 rounded-3xl border border-border bg-card p-6 md:p-8"
          onSubmit={onSubmit}
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field
              label="Your name"
              name="name"
              placeholder="Jane Doe"
              value={values.name}
              onChange={(v) => update("name", v)}
              error={fieldErrors.name}
            />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="jane@company.com"
              value={values.email}
              onChange={(v) => update("email", v)}
              error={fieldErrors.email}
            />
          </div>
          <Field
            label="Company (optional)"
            name="company"
            placeholder="Acme Corp"
            value={values.company}
            onChange={(v) => update("company", v)}
            error={fieldErrors.company}
          />
          <div>
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-widest font-mono text-ink-muted mb-2"
            >
              What do you need help with?
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={values.message}
              onChange={(e) => update("message", e.target.value)}
              aria-invalid={!!fieldErrors.message}
              aria-describedby={fieldErrors.message ? "message-error" : undefined}
              placeholder="A slow report, a new APEX app, a 19c upgrade..."
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 aria-invalid:border-destructive"
            />
            {fieldErrors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-destructive">
                {fieldErrors.message}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <button
              type="submit"
              className="btn-primary justify-center"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send message"}
              {status !== "sending" && <ArrowRight className="h-4 w-4" />}
            </button>
            <a href={mailtoHref(values)} className="btn-ghost justify-center">
              <Mail className="h-4 w-4" /> Open in mail app
            </a>
          </div>

          {status === "sent" && (
            <p
              role="status"
              className="flex items-start gap-2 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-foreground"
            >
              <CheckCircle2 className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              Thanks — your message has been received. I'll reply within one business day.
            </p>
          )}
          {status === "error" && (
            <p
              role="alert"
              className="flex items-start gap-2 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-foreground"
            >
              <AlertCircle className="h-4 w-4 mt-0.5 text-destructive shrink-0" />
              <span>
                {error}{" "}
                <a href={mailtoHref(values)} className="link-underline">
                  Email {CONTACT_EMAIL} instead
                </a>
                .
              </span>
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
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-widest font-mono text-ink-muted mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 aria-invalid:border-destructive"
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
