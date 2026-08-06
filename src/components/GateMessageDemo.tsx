"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const EXAMPLES = [
  {
    id: "caminos",
    label: "Caminos",
    src: "https://zqfkoqwagbzqrbousinr.supabase.co/storage/v1/object/sign/ivr-messages/908ba8f2-a50c-4470-bcb3-b41a76a5b6ad/2f52a96f-9b47-47a5-bc21-44bfbbac395e.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYjUyNGY3Yy01YzQ0LTRjNzAtYjViNS0yMTkyMmU1ZmFmZWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpdnItbWVzc2FnZXMvOTA4YmE4ZjItYTUwYy00NDcwLWJjYjMtYjQxYTc2YTViNmFkLzJmNTJhOTZmLTliNDctNDdhNS1iYzIxLTQ0YmZiYmFjMzk1ZS5tcDMiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg2MDU4MzAyLCJleHAiOjE4MTc1OTQzMDJ9.7GaQG81MUmvN5XCAbDWCiz5KPTGNC3ZrmwyRiljBIek",
    mockText:
      "Aviso del comité: el camino interno está en mantención. Circula con precaución hasta el viernes.",
  },
  {
    id: "festividad",
    label: "Festividad",
    src: "https://zqfkoqwagbzqrbousinr.supabase.co/storage/v1/object/sign/ivr-messages/908ba8f2-a50c-4470-bcb3-b41a76a5b6ad/862dec9c-4e92-428f-bd17-3b26ef5e2f2e.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYjUyNGY3Yy01YzQ0LTRjNzAtYjViNS0yMTkyMmU1ZmFmZWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpdnItbWVzc2FnZXMvOTA4YmE4ZjItYTUwYy00NDcwLWJjYjMtYjQxYTc2YTViNmFkLzg2MmRlYzljLTRlOTItNDI4Zi1iZDE3LTNiMjZlZjVlMmYyZS5tcDMiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg2MDU4MzE0LCJleHAiOjE4MTc1OTQzMTR9.JnB7wAApLd5SMTMW-S7Z3KwqFYskn3SqOadskQe_DzM",
    mockText:
      "Felices fiestas patrias. Recuerden respetar los horarios de silencio para el disfrute de toda la comunidad",
  },
  {
    id: "asamblea",
    label: "Asamblea",
    src: "https://zqfkoqwagbzqrbousinr.supabase.co/storage/v1/object/sign/ivr-messages/908ba8f2-a50c-4470-bcb3-b41a76a5b6ad/0a8c9829-6014-462e-b7a6-a5e764a6fa51.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYjUyNGY3Yy01YzQ0LTRjNzAtYjViNS0yMTkyMmU1ZmFmZWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpdnItbWVzc2FnZXMvOTA4YmE4ZjItYTUwYy00NDcwLWJjYjMtYjQxYTc2YTViNmFkLzBhOGM5ODI5LTYwMTQtNDYyZS1iN2E2LWE1ZTc2NGE2ZmE1MS5tcDMiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg2MDU4MjgzLCJleHAiOjE4MTc1OTQyODN9.wOtVGefBE1GSuiyyOrBVIwFdUGzvt3KEq5_m36oEJUI",
    mockText:
      "Recordatorio: asamblea ordinaria el sábado a las 11:00 en la sede. Confirma tu asistencia.",
  },
] as const;

type ExampleId = (typeof EXAMPLES)[number]["id"];

type Props = {
  /** Solo la card interactiva (partners). */
  compact?: boolean;
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function GateMessageDemo({ compact = false }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeId, setActiveId] = useState<ExampleId>("caminos");
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState(false);

  const active = EXAMPLES.find((e) => e.id === activeId) ?? EXAMPLES[0];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    setPlaying(false);
    setProgress(0);
    setDuration(0);
    setError(false);
    audio.pause();
    audio.currentTime = 0;
    audio.load();
  }, [activeId]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => setProgress(audio.currentTime);
    const onMeta = () => setDuration(audio.duration || 0);
    const onEnded = () => {
      setPlaying(false);
      setProgress(0);
    };
    const onError = () => {
      setError(true);
      setPlaying(false);
    };

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
    };
  }, [activeId]);

  async function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
      setError(false);
      window.gtag?.("event", "gate_message_play", {
        event_category: "engagement",
        event_label: active.id,
      });
    } catch {
      setError(true);
      setPlaying(false);
    }
  }

  function selectExample(id: ExampleId) {
    if (id === activeId) return;
    audioRef.current?.pause();
    setPlaying(false);
    setActiveId(id);
  }

  const pct = duration > 0 ? Math.min(100, (progress / duration) * 100) : 0;

  const card = (
    <div
      className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white shadow-[0_12px_40px_-24px_rgba(15,23,42,0.35)]"
    >
      <div className="flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink-subtle)]">
          Mensaje al abrir
        </span>
        <span className="rounded-[var(--radius-sm)] bg-[var(--color-success)]/15 px-2 py-0.5 text-[10px] font-medium text-[var(--color-success)]">
          Activo
        </span>
      </div>

      <div className="space-y-3 px-4 py-4">
        <p className="text-sm leading-relaxed text-[var(--color-ink)]">
          {active.mockText}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-subtle)]">
          Se reproduce al llamar · antes de abrir
        </p>
      </div>

      <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-4">
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Ejemplos de mensaje"
        >
          {EXAMPLES.map((ex) => {
            const selected = ex.id === activeId;
            return (
              <button
                key={ex.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => selectExample(ex.id)}
                className={`rounded-[var(--radius-sm)] px-3 py-1.5 text-xs font-medium transition ${
                  selected
                    ? "bg-[var(--color-accent)] text-white"
                    : "border border-[var(--color-border)] bg-white text-[var(--color-ink-muted)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-ink)]"
                }`}
              >
                {ex.label}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pausar mensaje de ejemplo" : "Reproducir mensaje de ejemplo"}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-white transition hover:bg-[var(--color-accent-hover)]"
          >
            {playing ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                <rect x="3" y="2" width="3.5" height="12" rx="0.5" />
                <rect x="9.5" y="2" width="3.5" height="12" rx="0.5" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                <path d="M4 2.5v11l9-5.5-9-5.5z" />
              </svg>
            )}
          </button>

          <div className="min-w-0 flex-1">
            <div
              className="h-1.5 overflow-hidden rounded-full bg-[var(--color-border)]"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(pct)}
              aria-label="Progreso del audio"
            >
              <div
                className="h-full rounded-full bg-[var(--color-accent)] transition-[width] duration-100"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="mt-1.5 flex justify-between font-mono text-[10px] text-[var(--color-ink-subtle)]">
              <span>{formatTime(progress)}</span>
              <span>{duration > 0 ? formatTime(duration) : "—:——"}</span>
            </div>
          </div>
        </div>

        {error ? (
          <p className="mt-2 text-xs text-[var(--color-ink-muted)]">
            Audio de ejemplo no disponible aún. Prueba de nuevo cuando esté
            cargado en el sitio.
          </p>
        ) : null}
      </div>

      <audio ref={audioRef} src={active.src} preload="metadata" />
    </div>
  );

  if (compact) {
    return card;
  }

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-ink-subtle)]">
          Mensajes al llamar
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
          Avisos de la comunidad con 100% de escucha.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
          Quien llama para abrir el portón escucha el mensaje del comité.
          Caminos, festividades, asambleas o lo que necesiten transmitir — sin
          apps ni carteles.
        </p>
        <ul className="mt-6 space-y-2 text-[0.975rem] text-[var(--color-ink-muted)]">
          <li className="flex gap-2">
            <span className="font-mono text-[var(--color-accent)]" aria-hidden>
              —
            </span>
            Condiciones de caminos y mantenciones
          </li>
          <li className="flex gap-2">
            <span className="font-mono text-[var(--color-accent)]" aria-hidden>
              —
            </span>
            Saludos por festividades
          </li>
          <li className="flex gap-2">
            <span className="font-mono text-[var(--color-accent)]" aria-hidden>
              —
            </span>
            Comunicados internos personalizables
          </li>
        </ul>
      </div>
      {card}
    </div>
  );
}
