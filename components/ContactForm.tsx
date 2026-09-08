"use client";

import { useState } from "react";
import Script from "next/script";
import { CONTACT_EMAIL } from "@/lib/content";

type Audience = "seller" | "community";
type Status = "idle" | "submitting" | "success" | "error";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

/**
 * Contact form (§5A). Posts to the edge API route /api/contact.
 * - Honeypot field ("company_url") — hidden from humans, silently drops bots.
 * - Cloudflare Turnstile injects a `cf-turnstile-response` token into the form.
 * - On any failure we surface the hello@wameir.com mailto so no enquiry is lost.
 * The page is readable without JS; this form's submit needs JS + Turnstile, and
 * the mailto is always shown alongside as the graceful fallback.
 */
export default function ContactForm({
  defaultAudience = "seller",
  source = "/",
}: {
  defaultAudience?: Audience;
  source?: string;
}) {
  const [audience, setAudience] = useState<Audience>(defaultAudience);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      audience,
      name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      message: String(fd.get("message") || ""),
      source,
      // Honeypot — must stay empty.
      company_url: String(fd.get("company_url") || ""),
      // Turnstile token (auto-injected into the form by the widget).
      turnstileToken: String(fd.get("cf-turnstile-response") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="form" role="status">
        <p className="form__success-title">Thank you — we have your note.</p>
        <p className="form__success-body">
          We read every message ourselves and will reply personally. If it&apos;s
          time-sensitive, email us directly at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {SITE_KEY && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        />
      )}

      <div className="form__audience" role="group" aria-label="I am">
        <button
          type="button"
          className={`form__seg${audience === "seller" ? " is-active" : ""}`}
          aria-pressed={audience === "seller"}
          onClick={() => setAudience("seller")}
        >
          Selling my company
        </button>
        <button
          type="button"
          className={`form__seg${audience === "community" ? " is-active" : ""}`}
          aria-pressed={audience === "community"}
          onClick={() => setAudience("community")}
        >
          Asking about my community
        </button>
      </div>

      <div className="form__row">
        <label className="form__field">
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        {audience === "seller" && (
          <label className="form__field">
            <span>Company</span>
            <input name="company" type="text" autoComplete="organization" />
          </label>
        )}
      </div>

      <div className="form__row">
        <label className="form__field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="form__field">
          <span>
            Phone <em>(optional)</em>
          </span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>

      <label className="form__field">
        <span>Message</span>
        <textarea name="message" rows={4} required />
      </label>

      {/* Honeypot — visually hidden, off the tab order. Bots fill it; humans don't. */}
      <div aria-hidden="true" className="form__hp">
        <label>
          Company website
          <input name="company_url" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {SITE_KEY ? (
        <div className="cf-turnstile" data-sitekey={SITE_KEY} data-theme="light" />
      ) : (
        <p className="form__note">
          {/* Turnstile site key not configured yet (blocking #4). */}
          Spam protection activates once the Turnstile key is set in the environment.
        </p>
      )}

      {status === "error" && (
        <p className="form__error" role="alert">
          {error} You can also email us directly at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      )}

      <div className="form__actions">
        <button
          type="submit"
          className="btn btn--gold"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send your message"}
        </button>
        <span className="form__fallback">
          or email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </span>
      </div>
    </form>
  );
}
