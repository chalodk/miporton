"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white px-3.5 py-3 text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-ink-subtle)] focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-soft)]";

const tiposComunidad = [
  "Parcelación",
  "Loteo",
  "Condominio de Casas",
  "Otro",
] as const;

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
        setMessage(
          json.error ?? "No pudimos enviar tu solicitud. Intenta de nuevo.",
        );
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
            Agenda una demo con datos de tu parcelación.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-ink-muted)]">
            Para comités de administración de parcelaciones, loteos y
            condominios de casas. Te contactamos a la brevedad.
          </p>
          <p className="mt-6 text-base leading-relaxed text-[var(--color-ink)]">
            Conservas la llamada telefónica. Ganas gobernanza, auditoría y
            control a 1 clic.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 sm:p-8"
          noValidate
        >
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-[var(--color-ink)]">
              Nombre del solicitante / cargo
            </span>
            <input
              name="nombre"
              required
              autoComplete="name"
              className={fieldClass}
              placeholder="Ej. Presidente de Comité, Administrador"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-[var(--color-ink)]">
                Tipo de comunidad
              </span>
              <select name="tipoComunidad" required className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Selecciona…
                </option>
                {tiposComunidad.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-[var(--color-ink)]">
                Nombre de la parcelación / proyecto
              </span>
              <input
                name="comunidad"
                required
                className={fieldClass}
                placeholder="Nombre del proyecto"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-[var(--color-ink)]">
                Comuna / región
              </span>
              <input
                name="comuna"
                required
                autoComplete="address-level2"
                className={fieldClass}
                placeholder="Ej. Casablanca, Valparaíso"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-[var(--color-ink)]">
                Número de parcelas / casas{" "}
                <span className="font-normal text-[var(--color-ink-subtle)]">
                  opcional
                </span>
              </span>
              <input
                name="parcelas"
                type="number"
                min={1}
                className={fieldClass}
                placeholder="Ej. 80"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
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
              placeholder="Contexto breve de tu parcelación o dudas"
            />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex w-full items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {status === "loading"
              ? "Enviando…"
              : "Solicitar Demo con Datos de mi Comunidad"}
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
