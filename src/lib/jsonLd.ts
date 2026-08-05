const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://miporton.cl";

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Mi portón",
      url: siteUrl,
      logo: `${siteUrl}/brand/isotype.svg`,
      description:
        "Panel de control y seguridad para el portón de parcelaciones, loteos y condominios de casas en Chile.",
      areaServed: {
        "@type": "Country",
        name: "Chile",
      },
      sameAs: ["https://app.miporton.cl"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Mi portón",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "es-CL",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "Mi portón",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: siteUrl,
      description:
        "Panel web para gobernar el acceso del portón en parcelaciones y loteos. Compatible con sistemas GSM de apertura por llamada telefónica.",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/OnlineOnly",
        priceCurrency: "CLP",
        description: "Demo y planes según tamaño de la parcelación",
        url: `${siteUrl}/#demo`,
      },
      provider: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Mi portón es compatible con sistemas GSM de apertura por llamada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Mi portón es compatible con cualquier sistema GSM de apertura por llamada telefónica. El residente sigue llamando como siempre; el comité administra desde el panel web.",
          },
        },
        {
          "@type": "Question",
          name: "¿Para quién es Mi portón?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Para comités de administración de parcelaciones, loteos residenciales y condominios de casas, especialmente sin conserjería física 24/7.",
          },
        },
        {
          "@type": "Question",
          name: "¿El residente necesita una app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. El residente no cambia su hábito: llama para abrir el portón. La administración usa el panel web para habilitar, revocar y auditar accesos.",
          },
        },
      ],
    },
  ],
};

/** Safe for embedding inside a script tag. */
export function jsonLdScriptContent(): string {
  return JSON.stringify(jsonLd).replace(/</g, "\\u003c");
}
