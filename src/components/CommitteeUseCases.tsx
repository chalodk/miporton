const cases = [
  {
    title: "Trabajadores y maestros",
    body: "Asigna pases temporales con restricción horaria (ej. lunes a viernes de 08:00 a 18:00) y fecha de caducidad automática.",
  },
  {
    title: "Avisos que sí se escuchan",
    body: "Caminos, festividades o comunicados del comité: el mensaje se reproduce al llamar para abrir. Quien necesita entrar, escucha — sin depender del grupo de WhatsApp.",
  },
  {
    title: "Baja inmediata de arrendatarios / ex-personal",
    body: "Desvincula el acceso en segundos cuando alguien deja la parcelación. Cero riesgo por controles remotos no devueltos.",
  },
];

export function CommitteeUseCases() {
  return (
    <section
      id="casos"
      className="scroll-mt-8 bg-[var(--color-bg-deep)]"
      style={{ paddingBlock: "var(--space-section)" }}
    >
      <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-ink-subtle)]">
          Dolores del comité
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
          Problemas cotidianos de convivencia y seguridad — resueltos en el
          panel.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
          Hecho para quien administra parcelaciones, loteos y condominios de
          casas en contextos rurales o periurbanos.
        </p>

        <ul className="mt-14 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {cases.map((item, index) => (
            <li
              key={item.title}
              className="grid gap-3 py-8 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-10"
            >
              <div>
                <span className="font-mono text-sm text-[var(--color-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-[var(--color-ink)]">
                  {item.title}
                </h3>
              </div>
              <p className="text-[0.975rem] leading-relaxed text-[var(--color-ink-muted)] sm:pt-6">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
