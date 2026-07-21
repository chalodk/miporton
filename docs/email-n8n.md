# Correo de confirmación + n8n

## Flujo

1. El formulario de la landing hace `POST /api/demo`.
2. La API valida el lead y lo reenvía a:
   `https://n8n.agroanalytics.cl/webhook/contact`
3. n8n envía el correo de confirmación al usuario con el template HTML.

Override opcional: `N8N_CONTACT_WEBHOOK_URL`.

## Payload enviado al webhook

```json
{
  "nombre": "Ana Pérez",
  "comunidad": "Los Robles",
  "ciudad": "Viña del Mar",
  "telefono": "+56 9 1234 5678",
  "email": "ana@example.cl",
  "residentes": "120",
  "mensaje": "Queremos una demo",
  "receivedAt": "2026-07-21T17:00:00.000Z",
  "source": "miporton.cl"
}
```

Campos opcionales vacíos llegan como `"—"`.

## Template

Archivo: [`emails/contact-confirmation.html`](../emails/contact-confirmation.html)

Placeholders a reemplazar en n8n:

| Token | Campo |
| --- | --- |
| `{{nombre}}` | `$json.nombre` |
| `{{comunidad}}` | `$json.comunidad` |
| `{{ciudad}}` | `$json.ciudad` |
| `{{telefono}}` | `$json.telefono` |
| `{{email}}` | `$json.email` |
| `{{residentes}}` | `$json.residentes` |
| `{{mensaje}}` | `$json.mensaje` |

### Setup sugerido en n8n

1. **Webhook** (POST) → path `/contact` (URL pública ya dada).
2. **Set / Code** (opcional): cargar el HTML y reemplazar tokens.
3. **Email Send** (SMTP / Gmail / Resend):
   - To: `{{ $json.email }}`
   - Subject: `Recibimos tu solicitud — Mi portón`
   - HTML: contenido de `contact-confirmation.html` con tokens resueltos.

Ejemplo rápido en nodo Code:

```js
const fs = require('fs'); // o pegar el HTML como constante
let html = $getWorkflowStaticData('global').emailTemplate
  || `<!-- pegar HTML aquí -->`;

for (const [key, value] of Object.entries($json)) {
  html = html.replaceAll(`{{${key}}}`, String(value ?? '—'));
}

return [{ json: { ...($json), html } }];
```

## Logo en el correo

PNG liviano (128×128): `/public/brand/isotype-email-on-white.png`  
URL en template: `https://miporton.cl/brand/isotype-email-on-white.png`

Hasta que el dominio esté en producción, puedes:

- Subir el PNG a un host público y cambiar el `src` del `<img>`, o
- Usar la URL del deployment de Vercel / preview.
