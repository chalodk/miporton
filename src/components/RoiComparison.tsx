const rows = [
  {
    traditional: "Conserjería física 24/7",
    friction: "+$3.000.000 CLP / mes",
    withUs: "<$1.000 CLP / mes por parcela",
  },
  {
    traditional: "Controles remotos físicos",
    friction: "~$20.000 CLP c/u (se pierden, clonan o rompen)",
    withUs: "$0 en hardware adicional",
  },
  {
    traditional: "Gestión GSM manual",
    friction: "SMS crípticos, demora y cero registro",
    withUs: "Control web en tiempo real a 1 clic",
  },
];

export function RoiComparison() {
  return (
    <section
      id="comparativa"
      className="scroll-mt-8 border-b border-[var(--color-border)] bg-[var(--color-bg)]"
      style={{ paddingBlock: "var(--space-section)" }}
    >
      <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-ink-subtle)]">
          Anclaje económico
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
          Menos fricción que conserjería, remotos o SMS.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
          Una referencia de costo y esfuerzo frente a las alternativas
          tradicionales del comité.
        </p>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="py-3 pr-4 font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-ink-subtle)]">
                  Solución tradicional
                </th>
                <th className="py-3 pr-4 font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-ink-subtle)]">
                  Costo / fricción
                </th>
                <th className="py-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-accent)]">
                  Con miporton.cl
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.traditional}
                  className="border-b border-[var(--color-border)] align-top"
                >
                  <td className="py-5 pr-4 font-medium text-[var(--color-ink)]">
                    {row.traditional}
                  </td>
                  <td className="py-5 pr-4 text-[var(--color-ink-muted)]">
                    {row.friction}
                  </td>
                  <td className="py-5 font-semibold text-[var(--color-ink)]">
                    {row.withUs}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
