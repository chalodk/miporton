import { NextResponse } from "next/server";

const N8N_CONTACT_WEBHOOK =
  process.env.N8N_CONTACT_WEBHOOK_URL ??
  "https://n8n.agroanalytics.cl/webhook/contact-miporton";

type DemoPayload = {
  nombre?: string;
  tipoComunidad?: string;
  comunidad?: string;
  comuna?: string;
  /** @deprecated prefer comuna */
  ciudad?: string;
  telefono?: string;
  email?: string;
  parcelas?: string;
  /** @deprecated prefer parcelas */
  residentes?: string;
  mensaje?: string;
};

export type ContactLead = {
  nombre: string;
  tipoComunidad: string;
  comunidad: string;
  comuna: string;
  telefono: string;
  email: string;
  parcelas: string;
  mensaje: string;
  receivedAt: string;
  source: "miporton.cl";
};

function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function dashIfEmpty(value: string | null): string {
  return value && value.length > 0 ? value : "—";
}

export async function POST(request: Request) {
  let body: DemoPayload;

  try {
    body = (await request.json()) as DemoPayload;
  } catch {
    return NextResponse.json(
      { error: "Solicitud inválida." },
      { status: 400 },
    );
  }

  const {
    nombre,
    tipoComunidad,
    comunidad,
    comuna,
    ciudad,
    telefono,
    email,
    parcelas,
    residentes,
    mensaje,
  } = body;

  const comunaValue = isNonEmpty(comuna) ? comuna : ciudad;
  const parcelasValue = isNonEmpty(parcelas) ? parcelas : residentes;

  if (
    !isNonEmpty(nombre) ||
    !isNonEmpty(tipoComunidad) ||
    !isNonEmpty(comunidad) ||
    !isNonEmpty(comunaValue) ||
    !isNonEmpty(telefono) ||
    !isNonEmpty(email)
  ) {
    return NextResponse.json(
      { error: "Completa los campos obligatorios." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email.trim())) {
    return NextResponse.json(
      { error: "El email no parece válido." },
      { status: 400 },
    );
  }

  const lead: ContactLead = {
    nombre: nombre.trim(),
    tipoComunidad: tipoComunidad.trim(),
    comunidad: comunidad.trim(),
    comuna: comunaValue.trim(),
    telefono: telefono.trim(),
    email: email.trim(),
    parcelas: dashIfEmpty(
      isNonEmpty(parcelasValue) ? parcelasValue.trim() : null,
    ),
    mensaje: dashIfEmpty(isNonEmpty(mensaje) ? mensaje.trim() : null),
    receivedAt: new Date().toISOString(),
    source: "miporton.cl",
  };

  try {
    const webhookRes = await fetch(N8N_CONTACT_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(12_000),
    });

    if (!webhookRes.ok) {
      console.error(
        "[demo-lead] n8n webhook failed",
        webhookRes.status,
        await webhookRes.text().catch(() => ""),
      );
      return NextResponse.json(
        { error: "No pudimos registrar tu solicitud. Intenta de nuevo." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("[demo-lead] n8n webhook error", error);
    return NextResponse.json(
      { error: "No pudimos registrar tu solicitud. Intenta de nuevo." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
