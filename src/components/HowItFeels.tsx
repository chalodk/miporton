const steps = [
  {
    n: "01",
    title: "El residente llega y llama, como siempre",
    body: "Sin app nueva. Sin aprender un flujo distinto. El mismo gesto de siempre para abrir el portón.",
  },
  {
    n: "02",
    title: "Si está autorizado, el portón abre",
    body: "Quien está habilitado entra. Quien no, no. Simple como un portero que reconoce a los de la comunidad.",
  },
  {
    n: "03",
    title: "La comunidad queda con registro y control",
    body: "Altas, bajas y deshabilitaciones desde el panel. Historial claro de quién intentó entrar.",
  },
];

export function HowItFeels() {
  return (
    <section
      id="como-se-vive"
      className="scroll-mt-8 border-b border-[var(--color-border)] bg-[var(--color-bg)]"
      style={{ paddingBlock: "var(--space-section)" }}
    >
      <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-ink-subtle)]">
          Cómo se vive
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
          Tres pasos. Ninguno pide que el residente cambie.
        </h2>

        <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <li key={step.n} className="relative">
              <span className="font-mono text-sm text-[var(--color-accent)]">
                {step.n}
              </span>
              <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-[var(--color-ink)]">
                {step.title}
              </h3>
              <p className="mt-3 text-[0.975rem] leading-relaxed text-[var(--color-ink-muted)]">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-8 border-t border-[var(--color-border)] pt-12 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-ink-subtle)]">
              Antes
            </p>
            <p className="mt-3 text-lg leading-relaxed text-[var(--color-ink-muted)]">
              Reprogramaciones engorrosas, listas rígidas y poca claridad de
              quién puede abrir — o de quién intentó entrar.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Ahora
            </p>
            <p className="mt-3 text-lg leading-relaxed text-[var(--color-ink)]">
              Panel simple, habilitar o deshabilitar cuando haga falta, e
              historial de intentos. El residente sigue llamando igual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
