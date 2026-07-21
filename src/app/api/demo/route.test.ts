/**
 * @jest-environment node
 */

import { POST } from "@/app/api/demo/route";

function makeRequest(body: unknown) {
  return new Request("http://localhost/api/demo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

const validLead = {
  nombre: "Ana Pérez",
  comunidad: "Los Robles",
  ciudad: "Viña del Mar",
  telefono: "+56 9 1234 5678",
  email: "ana@example.cl",
  residentes: "120",
  mensaje: "Queremos una demo",
};

describe("POST /api/demo", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => "",
    }) as unknown as typeof fetch;
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("accepts a valid lead and forwards to n8n", async () => {
    const res = await POST(makeRequest(validLead));

    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ ok: true });

    expect(global.fetch).toHaveBeenCalledWith(
      "https://n8n.agroanalytics.cl/webhook/contact",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }),
    );

    const [, options] = (global.fetch as jest.Mock).mock.calls[0] as [
      string,
      RequestInit,
    ];
    const payload = JSON.parse(String(options.body)) as Record<string, string>;
    expect(payload).toMatchObject({
      nombre: "Ana Pérez",
      comunidad: "Los Robles",
      email: "ana@example.cl",
      source: "miporton.cl",
    });
  });

  it("rejects missing required fields without calling n8n", async () => {
    const res = await POST(
      makeRequest({
        nombre: "Ana",
        email: "ana@example.cl",
      }),
    );

    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toMatch(/obligatorios/i);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("rejects invalid email without calling n8n", async () => {
    const res = await POST(
      makeRequest({
        ...validLead,
        email: "no-es-email",
      }),
    );

    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toMatch(/email/i);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("returns 502 when n8n webhook fails", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
      text: async () => "upstream error",
    }) as unknown as typeof fetch;

    const res = await POST(makeRequest(validLead));
    expect(res.status).toBe(502);
  });
});
