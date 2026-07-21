import type { HTMLAttributes, SVGProps } from "react";

type MarkProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

/**
 * Isotipo Mi portón — vano de acceso (pilares + dintel + umbral).
 * El paso vacío al centro es la idea: abrir / dejar pasar.
 */
export function Isotype({ title = "Mi portón", ...props }: MarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      {...props}
    >
      <title>{title}</title>
      <rect x="8" y="10" width="12" height="44" rx="2" />
      <rect x="44" y="10" width="12" height="44" rx="2" />
      <rect x="8" y="10" width="48" height="11" rx="2" />
      <rect x="8" y="52" width="48" height="5" rx="1.5" />
    </svg>
  );
}

type LogoProps = HTMLAttributes<HTMLSpanElement> & {
  title?: string;
  showClaim?: boolean;
  markClassName?: string;
};

/** Logotipo: isotipo + wordmark. */
export function Logo({
  title = "Mi portón",
  showClaim = false,
  className,
  markClassName,
  ...props
}: LogoProps) {
  return (
    <span
      className={["inline-flex items-center gap-2.5", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <Isotype
        className={["h-[1.2em] w-[1.2em] shrink-0", markClassName]
          .filter(Boolean)
          .join(" ")}
        title=""
        aria-hidden
      />
      <span className="inline-flex flex-col leading-none">
        <span className="font-sans text-[1em] font-semibold tracking-tight">
          Mi portón
        </span>
        {showClaim ? (
          <span className="mt-1.5 font-mono text-[0.52em] uppercase tracking-[0.14em] opacity-70">
            Portero digital
          </span>
        ) : null}
      </span>
      <span className="sr-only">{title}</span>
    </span>
  );
}
