# Correo de confirmación + n8n

## Flujo

1. El formulario de la landing hace `POST /api/demo`.
2. La API valida el lead y lo reenvía a:
   `https://n8n.agroanalytics.cl/webhook/contact-miporton`
3. n8n envía el correo de confirmación al usuario con el template HTML.

Override opcional: `N8N_CONTACT_WEBHOOK_URL`.

## Payload enviado al webhook

```json
{
  "nombre": "Ana Pérez · Presidente de Comité",
  "tipoComunidad": "Parcelación",
  "comunidad": "Los Robles",
  "comuna": "Casablanca, Valparaíso",
  "telefono": "+56 9 1234 5678",
  "email": "ana@example.cl",
  "parcelas": "80",
  "mensaje": "Queremos una demo",
  "receivedAt": "2026-07-21T17:00:00.000Z",
  "source": "miporton.cl"
}
```

Campos opcionales vacíos llegan como `"—"`.

## Template

Archivo: [`emails/contact-confirmation.html`](../emails/contact-confirmation.html)

Placeholders: `{{nombre}}`, `{{tipoComunidad}}`, `{{comunidad}}`, `{{comuna}}`, `{{telefono}}`, `{{email}}`, `{{parcelas}}`, `{{mensaje}}`.
