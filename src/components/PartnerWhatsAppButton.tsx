"use client";

import { partnerWhatsAppUrl } from "@/lib/whatsapp";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Props = {
  className?: string;
  children?: React.ReactNode;
  message?: string;
};

export function PartnerWhatsAppButton({
  className,
  children = "Hablar por WhatsApp",
  message,
}: Props) {
  const href = partnerWhatsAppUrl(message);

  function onClick() {
    window.gtag?.("event", "partner_whatsapp_click", {
      event_category: "partners",
      event_label: "whatsapp_cta",
    });
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={className}
    >
      {children}
    </a>
  );
}
