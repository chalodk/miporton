export function Testimonial() {
  return (
    <section
      id="testimonio"
      className="scroll-mt-8 bg-[var(--color-accent)] text-white"
      style={{ paddingBlock: "var(--space-section)" }}
    >
      <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/60">
          Del comité
        </p>
        <blockquote className="mt-6 max-w-3xl">
          <p className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
            “Poder ver el historial en tiempo real y habilitar o deshabilitar
            números a un solo clic nos devolvió el control de la seguridad en
            nuestra parcelación.”
          </p>
          <footer className="mt-8 text-sm text-white/75">
            — Presidente de Comité de Administración
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
