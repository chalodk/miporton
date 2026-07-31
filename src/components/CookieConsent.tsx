"use client";

import { useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "miporton_consent";

type ConsentChoice = "granted" | "denied";
type Snapshot = ConsentChoice | "unset" | "ssr";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function applyConsent(choice: ConsentChoice) {
  const analytics = choice === "granted" ? "granted" : "denied";
  window.gtag?.("consent", "update", {
    analytics_storage: analytics,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    personalization_storage: "denied",
  });
}

function readSnapshot(): Snapshot {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === "granted" || value === "denied") return value;
  } catch {
    // ignore
  }
  return "unset";
}

function subscribe() {
  return () => {};
}

export function CookieConsent() {
  const stored = useSyncExternalStore(subscribe, readSnapshot, () => "ssr");
  const [override, setOverride] = useState<ConsentChoice | null>(null);
  const consent = override ?? stored;

  function choose(choice: ConsentChoice) {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore
    }
    applyConsent(choice);
    setOverride(choice);
  }

  if (consent === "ssr" || consent === "granted" || consent === "denied") {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Preferencias de cookies"
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
    >
      <div className="mx-auto flex max-w-[var(--max-content)] flex-col gap-4 border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-5 shadow-[0_-8px_40px_-20px_rgba(15,23,42,0.35)] sm:flex-row sm:items-end sm:justify-between sm:gap-8 sm:p-6">
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink-subtle)]">
            Cookies
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)] sm:text-[0.95rem]">
            Usamos cookies de analítica para entender cómo se usa miporton.cl y
            mejorar la experiencia. No usamos cookies publicitarias. Puedes
            aceptar o continuar solo con las esenciales.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="rounded-[var(--radius-sm)] border border-[var(--color-border)] px-4 py-2.5 text-sm font-medium text-[var(--color-ink)] transition hover:border-[var(--color-accent)]"
          >
            Solo esenciales
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
