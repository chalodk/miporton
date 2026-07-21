import Image from "next/image";
import { Isotype } from "@/components/BrandMark";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <div className="absolute inset-0 animate-hero-media">
        <Image
          src="/hero-gate.jpg"
          alt="Portón de acceso a una comunidad residencial al atardecer"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.45) 0%, rgba(15,23,42,0.35) 40%, rgba(15,23,42,0.78) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[var(--max-content)] px-5 pb-16 pt-28 sm:px-8 sm:pb-20 md:pb-24">
        <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.18em] text-white/75">
          Portero digital
        </p>
        <h1 className="animate-fade-up delay-1 mt-4 flex max-w-3xl items-center gap-4 font-sans text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[0.95] tracking-tight text-white sm:gap-5">
          <Isotype
            className="h-[0.85em] w-[0.85em] shrink-0 text-white"
            title=""
            aria-hidden
          />
          <span>Mi portón</span>
        </h1>
        <p className="animate-fade-up delay-2 mt-6 max-w-2xl text-xl font-medium leading-snug text-white sm:text-2xl md:text-[1.65rem]">
          El residente llama como siempre. La comunidad ve y controla.
        </p>
        <p className="animate-fade-up delay-3 mt-4 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
          Como un portero humano en la puerta — sin pedirle al residente que
          cambie su forma de llegar a casa.
        </p>
        <div className="animate-fade-up delay-4 mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-accent)] transition hover:bg-white/90"
          >
            Solicitar demo
          </a>
          <a
            href="#como-se-vive"
            className="inline-flex items-center justify-center rounded-[var(--radius-sm)] border border-white/40 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
          >
            Cómo se vive
          </a>
        </div>
      </div>
    </section>
  );
}
