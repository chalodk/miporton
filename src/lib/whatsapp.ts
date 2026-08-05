export const PARTNER_WHATSAPP_E164 = "56974884316";

const DEFAULT_PARTNER_MESSAGE =
  "Hola, vendo o distribuyo dispositivos GSM de apertura y quiero info de partnership con Mi portón.";

export function partnerWhatsAppUrl(message: string = DEFAULT_PARTNER_MESSAGE): string {
  return `https://wa.me/${PARTNER_WHATSAPP_E164}?text=${encodeURIComponent(message)}`;
}
