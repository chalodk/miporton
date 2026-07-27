const pathYes = [
  "Agregan el número de Mi portón a su sistema actual.",
  "El vendedor marca desde la plataforma.",
  "Si el portón abre, la prueba quedó hecha.",
];

const pathNo = [
  "Nos dan acceso al dispositivo de la parcelación (o coordinamos con quien lo administra).",
  "Si hace falta, se reinicia la contraseña con el botón del equipo — es simple y lo guiamos.",
  "Agregamos el número de Mi portón.",
  "El vendedor marca desde la plataforma y validamos que el portón abre.",
];

const checklist = [
  "Quién administra hoy el acceso de la parcelación o loteo.",
  "Si ya pueden agregar un número al sistema actual.",
  "Si hace falta, alguien con acceso físico al equipo.",
];

export function HowToStart() {
  return (
    <section
      id="como-iniciar"
      className="scroll-mt-8 border-b border-[var(--color-border)] bg-[var(--color-bg)]"
      style={{ paddingBlock: "var(--space-section)" }}
    >
      <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-ink-subtle)]">
          Cómo iniciar
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
          En la mayoría de las parcelaciones se parte con una llamada.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
          Primero vemos si el comité puede agregar el número de Mi portón al
          sistema que ya abre el portón. Según eso, el camino es corto.
        </p>

        <div className="mt-12 border-y border-[var(--color-border)] py-10">
          <p className="text-xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-2xl">
            ¿Pueden agregar un número nuevo al sistema de acceso de su
            parcelación o loteo?
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--color-ink-subtle)]">
            Suele ser el listado o equipo que hoy abre el portón.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-14">
          <article>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Camino A · Sí, ya pueden
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
              Prueba en vivo
            </h3>
            <p className="mt-3 text-[0.975rem] leading-relaxed text-[var(--color-ink-muted)]">
              Si pueden cargar el número, arrancamos ahí mismo.
            </p>
            <ol className="mt-8 space-y-5">
              {pathYes.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="font-mono text-sm text-[var(--color-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.975rem] leading-relaxed text-[var(--color-ink)]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm leading-relaxed text-[var(--color-ink-muted)]">
              Sin instalar apps para el residente. Misma llamada de siempre.
            </p>
            <a
              href="#demo"
              className="mt-6 inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
            >
              Solicitar demo
              <span className="ml-2 font-normal text-white/75">
                · Probemos en vivo
              </span>
            </a>
          </article>

          <article>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-ink-subtle)]">
              Camino B · Aún no / no tienen acceso
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
              Te acompañamos con el equipo
            </h3>
            <p className="mt-3 text-[0.975rem] leading-relaxed text-[var(--color-ink-muted)]">
              También es habitual. Lo resolvemos juntos y después hacemos la
              misma prueba.
            </p>
            <ol className="mt-8 space-y-5">
              {pathNo.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="font-mono text-sm text-[var(--color-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.975rem] leading-relaxed text-[var(--color-ink)]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
           
            <a
              href="#demo"
              className="mt-6 inline-flex items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-accent)] transition hover:border-[var(--color-accent)]"
            >
              Hablar con nosotros
              <span className="ml-2 font-normal text-[var(--color-ink-subtle)]">
                · Te guiamos
              </span>
            </a>
          </article>
        </div>

        <div className="mt-16 border-t border-[var(--color-border)] pt-12">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-ink-subtle)]">
            Antes de la llamada
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-2xl">
            Para llegar listos a la demo
          </h3>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-6">
            {checklist.map((item, index) => (
              <li key={item}>
                <span className="font-mono text-sm text-[var(--color-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-[0.975rem] leading-relaxed text-[var(--color-ink-muted)]">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
