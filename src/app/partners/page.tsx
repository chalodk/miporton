import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/BrandMark";
import { PartnerWhatsAppButton } from "@/components/PartnerWhatsAppButton";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Partners — Distribuidores y vendedores GSM",
  description:
    "¿Vendes o distribuyes apertura GSM? Ofrece a tus clientes un panel de control para el comité y gana al activar comunidades con Mi portón.",
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    title: "Partners Mi portón — Para vendedores y distribuidores GSM",
    description:
      "Complementa tu hardware GSM con un panel de gobernanza para parcelaciones. Habla con nosotros por WhatsApp.",
  },
};

const steps = [
  {
    n: "01",
    title: "Tu cliente tiene (o compra) el equipo GSM",
    body: "El hardware sigue siendo tuyo: RTU u otro sistema de apertura por llamada. Nosotros no competimos con eso.",
  },
  {
    n: "02",
    title: "Activan Mi portón sobre ese acceso",
    body: "El residente sigue llamando como siempre. El comité administra altas, bajas e historial desde la web — sin SMS crípticos.",
  },
  {
    n: "03",
    title: "Tú ganas al acompañar la activación",
    body: "Sumas valor a tu propuesta, cierras con menos fricción y puedes generar ingreso adicional por cada comunidad que actives con nosotros.",
  },
];

const benefits = [
  {
    title: "Más valor en tu propuesta",
    body: "Dejas de vender “solo el aparato”. Ofreces gobernanza y control al comité: eso diferencia frente a otros vendedores.",
  },
  {
    title: "Acelera rotación de equipos",
    body: "Muchos cierran lento porque el comprador duda del día a día. Un panel simple reduce esa objeción.",
  },
  {
    title: "Compatible con lo que ya vendes",
    body: "Pensado para sistemas GSM de apertura por llamada. Encaja con tu catálogo; no lo reemplaza.",
  },
];

const faqs = [
  {
    q: "¿Necesito stock o equipo especial?",
    a: "No. Trabajas con los dispositivos GSM que ya ofreces. Mi portón se suma como capa de administración para el comité.",
  },
  {
    q: "¿Reemplaza mi equipo?",
    a: "No. Potencia la venta: el hardware abre; el panel da control, historial y baja inmediata de accesos.",
  },
  {
    q: "¿Qué tengo que hacer yo?",
    a: "Presentar o acompañar la activación con el cliente. Te guiamos en el proceso. Los detalles comerciales los vemos en la conversación.",
  },
  {
    q: "¿Hay exclusividad u obligación de volumen?",
    a: "Partimos simple. También exploramos formas de trabajo conjunto según tu canal — sin atarte de entrada.",
  },
];

const ctaClass =
  "inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)]";

export default function PartnersPage() {
  return (
    <>
      <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="mx-auto flex max-w-[var(--max-content)] items-center justify-between px-5 py-5 sm:px-8">
          <Link
            href="/"
            className="text-lg text-[var(--color-accent)] transition hover:opacity-90"
          >
            <Logo />
          </Link>
          <nav className="flex items-center gap-3 text-sm sm:gap-4">
            <Link
              href="/"
              className="hidden text-[var(--color-ink-muted)] transition hover:text-[var(--color-ink)] sm:inline"
            >
              Inicio
            </Link>
            <PartnerWhatsAppButton className={ctaClass}>
              WhatsApp
            </PartnerWhatsAppButton>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section
          className="bg-[var(--color-accent)] text-white"
          style={{ paddingBlock: "var(--space-section)" }}
        >
          <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/60">
              Partners · Distribuidores
            </p>
            <h1 className="mt-4 max-w-3xl text-[clamp(1.85rem,5vw,3.1rem)] font-semibold leading-[1.12] tracking-tight">
              ¿Vendes o distribuyes apertura GSM?
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              Ofrece a tus clientes un panel de control para el comité — y gana
              con cada comunidad que actives. El residente sigue llamando; tú
              sumas valor a cada equipo que vendes.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 border border-white/25 bg-white/10 px-3.5 py-2 text-sm text-white/95">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300"
                aria-hidden
              />
              Compatible con sistemas GSM · apertura por llamada
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PartnerWhatsAppButton className="inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-accent)] transition hover:bg-white/90">
                Hablar por WhatsApp
              </PartnerWhatsAppButton>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center rounded-[var(--radius-sm)] border border-white/40 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
              >
                Cómo funciona
              </a>
            </div>
            <p className="mt-4 text-sm text-white/60">
              Respuesta en horario hábil · conversación de 15–20 min
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section
          className="border-b border-[var(--color-border)] bg-[var(--color-bg)]"
          style={{ paddingBlock: "var(--space-section)" }}
        >
          <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-ink-subtle)]">
              Por qué te sirve
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              Más valor en tu oferta. Mejor rotación en el terreno.
            </h2>
            <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              {benefits.map((item, i) => (
                <li key={item.title}>
                  <span className="font-mono text-sm text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.975rem] leading-relaxed text-[var(--color-ink-muted)]">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section
          id="como-funciona"
          className="scroll-mt-8 bg-[var(--color-bg-deep)]"
          style={{ paddingBlock: "var(--space-section)" }}
        >
          <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-ink-subtle)]">
              Cómo funciona
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              Tres pasos. Sin cambiar el hardware que ya vendes.
            </h2>
            <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              {steps.map((step) => (
                <li key={step.n}>
                  <span className="font-mono text-sm text-[var(--color-accent)]">
                    {step.n}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.975rem] leading-relaxed text-[var(--color-ink-muted)]">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-12 max-w-2xl text-base leading-relaxed text-[var(--color-ink-muted)]">
              También exploramos formas de trabajo conjunto según tu canal —
              referidos, apoyo comercial u otros esquemas — cuando tenga
              sentido para ambas partes.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="border-b border-[var(--color-border)] bg-[var(--color-bg)]"
          style={{ paddingBlock: "var(--space-section)" }}
        >
          <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-ink-subtle)]">
              Preguntas frecuentes
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              Antes de escribirnos
            </h2>
            <ul className="mt-12 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
              {faqs.map((item) => (
                <li key={item.q} className="grid gap-2 py-7 sm:grid-cols-[minmax(0,18rem)_1fr] sm:gap-10">
                  <h3 className="text-base font-semibold text-[var(--color-ink)]">
                    {item.q}
                  </h3>
                  <p className="text-[0.975rem] leading-relaxed text-[var(--color-ink-muted)]">
                    {item.a}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="bg-[var(--color-bg)]"
          style={{ paddingBlock: "var(--space-section)" }}
        >
          <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              Conversemos 15 minutos.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
              Cuéntanos qué vendes y en qué zona operas. Te mostramos el producto
              y vemos si encaja con tu canal.
            </p>
            <div className="mt-8">
              <PartnerWhatsAppButton className={ctaClass}>
                Escribir por WhatsApp
              </PartnerWhatsAppButton>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
