const points = [
  {
    title: "Quién puede abrir — y quién no",
    body: "Lista clara de residentes autorizados. Sin pelearse con cambios lentos cada vez que alguien llega o se va.",
  },
  {
    title: "Deshabilitar en minutos",
    body: "Cuando alguien deja la comunidad o deja de corresponder, deshabilitas el acceso sin borrar el historial.",
  },
  {
    title: "Historial de intentos",
    body: "Ves quién intentó abrir: autorizado, deshabilitado o número desconocido. Visibilidad donde antes había ceguera.",
  },
  {
    title: "Carga masiva de residentes",
    body: "Incorpora muchos de una vez desde un archivo. Ideal al partir o al migrar una comunidad grande.",
  },
  {
    title: "Admins por comunidad",
    body: "Roles para administración general o de una comunidad/portón concreto. Cada quien con lo que necesita.",
  },
];

export function ForAdmin() {
  return (
    <section
      id="administracion"
      className="scroll-mt-8 bg-[var(--color-bg-deep)]"
      style={{ paddingBlock: "var(--space-section)" }}
    >
      <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-ink-subtle)]">
          Para la administración
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
          La comunidad gana un portero que no se cansa de anotar.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
          El residente no cambia nada. Quien administra sí gana control,
          orden y tranquilidad.
        </p>

        <ul className="mt-14 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {points.map((point) => (
            <li
              key={point.title}
              className="grid gap-2 py-7 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-10"
            >
              <h3 className="text-base font-semibold text-[var(--color-ink)]">
                {point.title}
              </h3>
              <p className="text-[0.975rem] leading-relaxed text-[var(--color-ink-muted)]">
                {point.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
