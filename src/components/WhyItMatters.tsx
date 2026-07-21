export function WhyItMatters() {
  return (
    <section
      id="por-que"
      className="scroll-mt-8 border-b border-[var(--color-border)] bg-[var(--color-bg)]"
      style={{ paddingBlock: "var(--space-section)" }}
    >
      <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-ink-subtle)]">
              Por qué importa
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              Orden y tranquilidad. Sin fricción para quien vive ahí.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-[var(--color-ink-muted)]">
            <p>
              En muchas comunidades el acceso por teléfono ya existe, pero la
              gestión es frágil: rotación de residentes, olvidos de baja y
              sensación de acceso a ciegas.
            </p>
            <p className="text-[var(--color-ink)]">
              Mi portón mantiene el flujo conocido del residente y moderniza
              la administración detrás — reconoce, decide y registra, como un
              portero humano en la puerta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
