import { Logo } from "@/components/BrandMark";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-deep)]">
      <div className="mx-auto flex max-w-[var(--max-content)] flex-col gap-8 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <Logo
            showClaim
            className="text-xl text-[var(--color-ink)]"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--color-ink-muted)]">
            Para comunidades que quieren control y visibilidad de acceso sin
            cambiar el hábito del residente.
          </p>
        </div>
        <div className="text-sm text-[var(--color-ink-muted)]">
          <div className="flex flex-col gap-2 sm:items-end">
            <a
              href="https://app.miporton.cl"
              className="font-medium text-[var(--color-accent)] transition hover:underline"
            >
              Ingreso administrador
            </a>
            <a
              href="#demo"
              className="font-medium text-[var(--color-accent)] transition hover:underline"
            >
              Solicitar demo
            </a>
          </div>
          <p className="mt-3 sm:text-right">
            © {new Date().getFullYear()} Mi portón. Chile.
          </p>
        </div>
      </div>
    </footer>
  );
}
