"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white px-3.5 py-3 text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-ink-subtle)] focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-soft)]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { error?: string; ok?: boolean };

      if (!res.ok) {
        setStatus("error");
        setMessage(json.error ?? "No pudimos enviar tu solicitud. Intenta de nuevo.");
        return;
      }

      setStatus("success");
      setMessage("Recibimos tu solicitud. Te contactamos a la brevedad.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Hubo un problema de conexión. Intenta de nuevo.");
    }
  }

  return (
    <section
      id="demo"
      className="scroll-mt-8 bg-[var(--color-bg)]"
      style={{ paddingBlock: "var(--space-section)" }}
    >
      <div className="mx-auto grid max-w-[var(--max-content)] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-ink-subtle)]">
            Solicitar demo
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            Conversemos sobre tu comunidad.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-ink-muted)]">
          Pruébalo gratis por 15 días. <br /> Cuéntanos un poco y te contactamos.
          </p>
          <p className="mt-6 text-base leading-relaxed text-[var(--color-ink)]">
            El residente sigue llamando como siempre. Tú ganas el control de un
            portero que reconoce, habilita y deja registro.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 sm:p-8"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-[var(--color-ink)]">
                Nombre
              </span>
              <input
                name="nombre"
                required
                autoComplete="name"
                className={fieldClass}
                placeholder="Tu nombre"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-[var(--color-ink)]">
                Comunidad / proyecto
              </span>
              <input
                name="comunidad"
                required
                className={fieldClass}
                placeholder="Nombre de la comunidad"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-[var(--color-ink)]">
                Ciudad / región
              </span>
              <input
                name="ciudad"
                required
                autoComplete="address-level2"
                className={fieldClass}
                placeholder="Ej. Valparaíso"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-[var(--color-ink)]">
                Teléfono / WhatsApp
              </span>
              <input
                name="telefono"
                required
                type="tel"
                autoComplete="tel"
                className={fieldClass}
                placeholder="+56 9 …"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-[var(--color-ink)]">
                Email
              </span>
              <input
                name="email"
                required
                type="email"
                autoComplete="email"
                className={fieldClass}
                placeholder="tu@email.cl"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-[var(--color-ink)]">
                Residentes (aprox.){" "}
                <span className="font-normal text-[var(--color-ink-subtle)]">
                  opcional
                </span>
              </span>
              <input
                name="residentes"
                type="number"
                min={1}
                className={fieldClass}
                placeholder="Ej. 80"
              />
            </label>
          </div>

          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-[var(--color-ink)]">
              Mensaje{" "}
              <span className="font-normal text-[var(--color-ink-subtle)]">
                opcional
              </span>
            </span>
            <textarea
              name="mensaje"
              rows={4}
              className={`${fieldClass} resize-y`}
              placeholder="Contexto breve de tu comunidad o dudas"
            />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex w-full items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {status === "loading" ? "Enviando…" : "Te contactamos"}
          </button>

          {message ? (
            <p
              role="status"
              className={`text-sm ${
                status === "success"
                  ? "text-[var(--color-success)]"
                  : "text-red-700"
              }`}
            >
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
