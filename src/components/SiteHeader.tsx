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
        <nav className="flex items-center gap-5 text-sm text-white/90">
          <a
            href="#como-se-vive"
            className="hidden transition hover:text-white sm:inline"
          >
            Cómo se vive
          </a>
          <a
            href="#demo"
            className="rounded-[var(--radius-sm)] bg-white px-4 py-2 font-medium text-[var(--color-accent)] transition hover:bg-white/90"
          >
            Solicitar demo
          </a>
        </nav>
      </div>
    </header>
  );
}
