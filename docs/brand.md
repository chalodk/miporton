# Marca — Mi portón

## Idea del símbolo

El **isotipo** es un vano de acceso visto de frente: dos pilares, dintel y umbral.  
El vacío al centro es el concepto — *abrir / dejar pasar* — sin dibujar un portón cerrado ni iconografía de “candado smart”.

## Piezas

| Pieza | Archivo | Uso |
| --- | --- | --- |
| Isotipo (SVG) | `/public/brand/isotype.svg` | Favicon, app icon, redes |
| Logotipo (SVG) | `/public/brand/logo.svg` | Header, docs, presentaciones |
| Favicon | `/public/favicon.svg` | Browser tab |
| Componentes | `src/components/BrandMark.tsx` | `Isotype`, `Logo` (React, `currentColor`) |
| Refs raster | `/public/brand/*.png` | Exploraciones; preferir SVG en producto |

## Construcción

```
┌──────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  dintel
│▓▓          ▓▓│
│▓▓          ▓▓│  pilares + paso (paso)
│▓▓          ▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  umbral
└──────────────┘
```

- Proporción del isotipo: **1:1** (viewBox `64×64`)
- Color primario: **`#1e3a5f`** (navy de marca)
- Wordmark: **IBM Plex Sans SemiBold**, “Mi portón” (con tilde)
- Claim opcional: “Portero digital” en IBM Plex Mono

## Clear space

Dejar alrededor del isotipo al menos **¼ del ancho del mark** libre de otros elementos.

## Variantes de color

| Fondo | Marca |
| --- | --- |
| Claro (`#f4f7fb` / blanco) | `#1e3a5f` |
| Oscuro / foto (hero) | Blanco `#ffffff` |
| Navy sólido (`#1e3a5f`) | Blanco |

Usar `currentColor` en React para heredar del contexto.

## No hacer

- No deformar el vano ni redondearlo en exceso (evitar look “app genérica”).
- No añadir candados, ondas Wi‑Fi, chips ni “smart”.
- No usar el monograma “MP” como marca principal (queda solo como exploración en `monogram-mp-ref.png`).
- No reemplazar la tilde: siempre **portón**.
