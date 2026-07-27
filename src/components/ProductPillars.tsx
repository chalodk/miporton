function PanelMockGovernanza() {
  return (
    <div
      className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white shadow-[0_12px_40px_-24px_rgba(15,23,42,0.35)]"
      aria-hidden
    >
      <div className="flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink-subtle)]">
          Autorizados
        </span>
        <span className="rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-2 py-0.5 text-[10px] font-medium text-white">
          1 clic
        </span>
      </div>
      <ul className="divide-y divide-[var(--color-border)] text-sm">
        {[
          { name: "Parcela 12 · Ana R.", on: true },
          { name: "Parcela 07 · Maestro", on: false },
          { name: "Parcela 21 · Arrendatario", on: true },
        ].map((row) => (
          <li
            key={row.name}
            className="flex items-center justify-between gap-3 px-4 py-3"
          >
            <span className="text-[var(--color-ink)]">{row.name}</span>
            <span
              className={`relative h-5 w-9 rounded-full ${
                row.on ? "bg-[var(--color-accent)]" : "bg-[var(--color-border)]"
              }`}
            >
              <span
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${
                  row.on ? "right-0.5" : "left-0.5"
                }`}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PanelMockHistorial() {
  return (
    <div
      className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white shadow-[0_12px_40px_-24px_rgba(15,23,42,0.35)]"
      aria-hidden
    >
      <div className="border-b border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink-subtle)]">
          Historial en vivo
        </span>
      </div>
      <ul className="divide-y divide-[var(--color-border)] text-sm">
        {[
          { t: "18:42", label: "Parcela 12 · autorizado", ok: true },
          { t: "17:11", label: "Invitado · pendiente", ok: false },
          { t: "16:03", label: "Parcela 03 · autorizado", ok: true },
        ].map((row) => (
          <li key={row.t} className="flex items-start gap-3 px-4 py-3">
            <span className="font-mono text-xs text-[var(--color-ink-subtle)]">
              {row.t}
            </span>
            <span className="flex-1 text-[var(--color-ink)]">{row.label}</span>
            <span
              className={`mt-0.5 h-2 w-2 shrink-0 rounded-full ${
                row.ok ? "bg-[var(--color-success)]" : "bg-amber-500"
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function PanelMockAprobacion() {
  return (
    <div
      className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white shadow-[0_12px_40px_-24px_rgba(15,23,42,0.35)]"
      aria-hidden
    >
      <div className="border-b border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink-subtle)]">
          Solicitud de acceso
        </span>
      </div>
      <div className="space-y-3 px-4 py-4 text-sm">
        <p className="text-[var(--color-ink)]">
          Parcela 18 pide acceso para visita · Vie 14:00–18:00
        </p>
        <div className="flex gap-2">
          <span className="rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-3 py-1.5 text-xs font-semibold text-white">
            Aprobar
          </span>
          <span className="rounded-[var(--radius-sm)] border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium text-[var(--color-ink-muted)]">
            Rechazar
          </span>
        </div>
      </div>
    </div>
  );
}

const pillars = [
  {
    title: "Gobernanza a 1 clic",
    body: "Habilita o revoca números autorizados al instante desde una interfaz web intuitiva. Chau a los comandos SMS complejos.",
    mock: <PanelMockGovernanza />,
  },
  {
    title: "Historial y trazabilidad en tiempo real",
    body: "Audita el acceso exactamente cuando ocurre. Sabes qué parcela o invitado activó el portón, a qué hora y con qué frecuencia.",
    mock: <PanelMockHistorial />,
  },
  {
    title: "Flujos de aprobación y control de abuso",
    body: "El vecino solicita el acceso para sus visitas o trabajadores; la administración aprueba con un clic. Mantén la llave y el control total de la parcelación.",
    mock: <PanelMockAprobacion />,
  },
];

export function ProductPillars() {
  return (
    <section
      id="pilares"
      className="scroll-mt-8 border-b border-[var(--color-border)] bg-[var(--color-bg)]"
      style={{ paddingBlock: "var(--space-section)" }}
    >
      <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-ink-subtle)]">
          Panel de control
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
          Gobernanza, seguridad y control — sin cambiar el hábito de llamar.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
          Para comités de parcelaciones, loteos residenciales y condominios de
          casas sin conserjería 24/7.
        </p>

        <div className="mt-14 space-y-16">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <span className="font-mono text-sm text-[var(--color-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[0.975rem] leading-relaxed text-[var(--color-ink-muted)]">
                  {pillar.body}
                </p>
              </div>
              {pillar.mock}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
