import Link from "next/link";
import { PartnerWhatsAppButton } from "@/components/PartnerWhatsAppButton";

export function PartnerEntry() {
  return (
    <section
      id="partners"
      className="scroll-mt-8 border-b border-[var(--color-border)] bg-[var(--color-bg-deep)]"
      style={{ paddingBlock: "clamp(3rem, 6vw, 4.5rem)" }}
    >
      <div className="mx-auto flex max-w-[var(--max-content)] flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-8">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-ink-subtle)]">
            Distribuidores
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
            ¿Vendes dispositivos GSM de apertura?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--color-ink-muted)]">
            Suma un panel de control y mensajes al abrir: un argumento extra en
            tu visita. Compatible con lo que ya vendes.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:items-end">
          <Link
            href="/partners"
            className="inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
          >
            Ver propuesta para partners
          </Link>
          <PartnerWhatsAppButton className="text-sm font-medium text-[var(--color-accent)] transition hover:underline">
            O escríbenos por WhatsApp →
          </PartnerWhatsAppButton>
        </div>
      </div>
    </section>
  );
}
