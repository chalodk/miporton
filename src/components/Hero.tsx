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
          alt="Portón de acceso a una parcelación residencial"
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
        <p className="animate-fade-up inline-flex items-center gap-2.5 font-sans text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          <Isotype
            className="h-[1.1em] w-[1.1em] shrink-0 text-white"
            title=""
            aria-hidden
          />
          Mi portón
        </p>
        <h1 className="animate-fade-up delay-1 mt-5 max-w-3xl font-sans text-[clamp(1.85rem,5.2vw,3.25rem)] font-semibold leading-[1.12] tracking-tight text-white">
          El Panel de Control y Seguridad para el Portón de tu Parcelación
        </h1>
        <p className="animate-fade-up delay-2 mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
          Conserva la facilidad de la llamada telefónica, elimina el desorden.
          Gestiona accesos a 1 clic, audita quién entra en tiempo real y protege
          a tu parcelación, loteo o condominio de casas.
        </p>
        <div className="animate-fade-up delay-3 mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-accent)] transition hover:bg-white/90"
          >
            Solicitar Demo para mi Comunidad
          </a>
          <a
            href="#pilares"
            className="inline-flex items-center justify-center rounded-[var(--radius-sm)] border border-white/40 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
          >
            Ver el panel
          </a>
        </div>
      </div>
    </section>
  );
}
