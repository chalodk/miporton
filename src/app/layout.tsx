import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import { CookieConsent } from "@/components/CookieConsent";
import { jsonLdScriptContent } from "@/lib/jsonLd";
import "./globals.css";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-1J8L4M9CLE";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://miporton.cl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Mi portón — Panel de control y seguridad para el portón de tu parcelación",
    template: "%s · Mi portón",
  },
  description:
    "Gobernanza, seguridad y control a 1 clic para comités de parcelaciones, loteos y condominios de casas. Conserva la llamada telefónica; elimina el desorden.",
  keywords: [
    "mi portón",
    "parcelación",
    "loteo",
    "condominio de casas",
    "comité de administración",
    "control de acceso",
    "portón",
    "Chile",
  ],
  authors: [{ name: "Mi portón" }],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/brand/isotype.svg" }],
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "Mi portón",
    title:
      "Mi portón — Panel de control y seguridad para el portón de tu parcelación",
    description:
      "Gestiona accesos a 1 clic, audita quién entra en tiempo real y protege tu parcelación, loteo o condominio de casas.",
    images: [
      {
        url: "/hero-gate.jpg",
        width: 1920,
        height: 1080,
        alt: "Portón de acceso a una parcelación",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mi portón — Panel de control y seguridad para el portón de tu parcelación",
    description:
      "Gobernanza y seguridad del portón para comités de parcelaciones y loteos.",
    images: ["/hero-gate.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CL"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          // JSON-LD is static SSR metadata for crawlers; not client-executed JS.
          dangerouslySetInnerHTML={{ __html: jsonLdScriptContent() }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {/* Consent Mode v2: deny analytics by default; banner may update */}
        <Script id="gtag-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              functionality_storage: 'granted',
              personalization_storage: 'denied',
              security_storage: 'granted',
              wait_for_update: 500
            });
            try {
              var stored = localStorage.getItem('miporton_consent');
              if (stored === 'granted') {
                gtag('consent', 'update', {
                  analytics_storage: 'granted'
                });
              }
            } catch (e) {}
          `}
        </Script>
        {children}
        <CookieConsent />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
