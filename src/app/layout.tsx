import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

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
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
