const audiences = [
  "Parcelaciones y eco-comunidades",
  "Condominios y barrios cerrados",
  "Comités y operadores de acceso",
  "Administradores que necesitan altas, bajas y trazabilidad sin inventar un nuevo hábito para el residente",
];

export function ForWhom() {
  return (
    <section
      id="para-quien"
      className="scroll-mt-8 bg-[var(--color-accent)] text-white"
      style={{ paddingBlock: "var(--space-section)" }}
    >
      <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/60">
          Para quién es
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Comunidades que ya abren con una llamada — o quieren ese modelo
          simple.
        </h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {audiences.map((item) => (
            <li
              key={item}
              className="border-t border-white/20 pt-4 text-base leading-relaxed text-white/90 sm:text-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}