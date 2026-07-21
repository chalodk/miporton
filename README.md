# Mi portón — Landing

Landing de marketing para **Mi portón** (portero digital para comunidades).  
Dominio: [miporton.cl](https://miporton.cl). La app privada del producto está en otro dominio y no se expone aquí como producto público.

## Idea fuerza

El residente **sigue llamando como siempre**. La comunidad gana administración sencilla y visibilidad de acceso — **como un portero humano en la puerta**.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS v4
- Tipografía: IBM Plex Sans / Mono

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servir build |
| `npm run lint` | ESLint |
| `npm test` | Tests del endpoint de demo |

## Estructura

- `src/app/page.tsx` — composición de la landing
- `src/components/` — hero, secciones, formulario, footer
- `src/app/api/demo/route.ts` — recepción del formulario de demo
- `docs/tokens.md` — tokens visuales
- `bootstrap.md` — brief de producto/marketing

## Formulario de demo

`POST /api/demo` valida el lead y lo reenvía al webhook n8n  
`https://n8n.agroanalytics.cl/webhook/contact`.

Template de confirmación al usuario: `emails/contact-confirmation.html`.  
Detalle del flujo: [docs/email-n8n.md](docs/email-n8n.md).

## Variables de entorno

| Variable | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canónica para metadata/OG (default `https://miporton.cl`) |
| `N8N_CONTACT_WEBHOOK_URL` | Override del webhook de contacto (default n8n agroanalytics) |

## Criterios de aceptación (brief)

- En ~5 segundos se entiende: residente no cambia; comunidad controla y ve.
- Marca **Mi portón** domina el primer viewport.
- Sin arquitectura telefónica ni features inventadas.
- CTA claro de demo/contacto; usable en mobile.
