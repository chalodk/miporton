# Design tokens — Mi portón

Tokens visuales de la landing de marketing. Coherentes con el panel (`#1e3a5f`, IBM Plex), sin clonar la app privada.

## Color

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-bg` | `#f4f7fb` | Fondo de página |
| `--color-bg-elevated` | `#ffffff` | Superficies (formulario) |
| `--color-bg-deep` | `#e8eef6` | Secciones alternas / footer |
| `--color-ink` | `#0f172a` | Texto principal |
| `--color-ink-muted` | `#475569` | Texto de apoyo |
| `--color-ink-subtle` | `#64748b` | Labels mono / secundarios |
| `--color-accent` | `#1e3a5f` | Navy: CTAs, énfasis, sección “para quién” |
| `--color-accent-hover` | `#162d4a` | Hover de CTA |
| `--color-accent-soft` | `#d6e0ec` | Focus rings / selection |
| `--color-border` | `#cfd8e6` | Separadores |
| `--color-success` | `#1a5c45` | Mensaje de éxito del formulario |

## Tipografía

| Familia | Variable | Uso |
| --- | --- | --- |
| IBM Plex Sans | `--font-ibm-plex-sans` | UI, headlines, cuerpo |
| IBM Plex Mono | `--font-ibm-plex-mono` | Eyebrows, numeración de pasos |

## Espaciado y forma

| Token | Valor |
| --- | --- |
| `--space-section` | `clamp(4.5rem, 10vw, 7.5rem)` |
| `--max-content` | `68rem` |
| `--radius-sm` | `4px` |
| `--radius-md` | `8px` |

## Motion

- Hero media: scale + fade (`animate-hero-media`)
- Hero copy: staggered fade-up
- Respeto a `prefers-reduced-motion`

## Dirección

Serena, confiable, humana, de acceso físico. Evitar SaaS púrpura, cream+terracotta, dark neon y pills excesivos.

## Marca

Ver [brand.md](./brand.md) — isotipo (vano de acceso) + wordmark “Mi portón”.
