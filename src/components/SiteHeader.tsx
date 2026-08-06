import { Logo } from "@/components/BrandMark";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-[var(--max-content)] items-center justify-between px-5 py-5 sm:px-8">
        <a
          href="#inicio"
          className="text-lg text-white drop-shadow-sm transition hover:opacity-90"
        >
          <Logo />
        </a>
        <nav className="flex items-center gap-3 text-sm text-white/90 sm:gap-5">
          <a
            href="#pilares"
            className="hidden transition hover:text-white sm:inline"
          >
            Panel
          </a>
          <a
            href="#mensajes"
            className="hidden transition hover:text-white md:inline"
          >
            Mensajes
          </a>
          <a
            href="#casos"
            className="hidden transition hover:text-white lg:inline"
          >
            Casos
          </a>
          <a
            href="#como-iniciar"
            className="hidden transition hover:text-white lg:inline"
          >
            Cómo iniciar
          </a>
          <a
            href="https://app.miporton.cl"
            className="rounded-[var(--radius-sm)] border border-white/40 px-3 py-2 font-medium text-white transition hover:border-white hover:bg-white/10 sm:px-4"
          >
            Ingreso administrador
          </a>
          <a
            href="#demo"
            className="rounded-[var(--radius-sm)] bg-white px-3 py-2 font-medium text-[var(--color-accent)] transition hover:bg-white/90 sm:px-4"
          >
            Solicitar demo
          </a>
        </nav>
      </div>
    </header>
  );
}
