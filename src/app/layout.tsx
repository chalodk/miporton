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
    default: "Mi portón — Portero digital para comunidades",
    template: "%s · Mi portón",
  },
  description:
    "El residente llama como siempre. La comunidad administra quién abre el portón y ve el historial de acceso — como un portero humano en la puerta.",
  keywords: [
    "mi portón",
    "portero digital",
    "acceso comunidad",
    "administración condominio",
    "parcelación",
    "portón telefónico",
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
    title: "Mi portón — Portero digital para comunidades",
    description:
      "El residente llama como siempre. La comunidad gana control y visibilidad de acceso.",
    images: [
      {
        url: "/hero-gate.jpg",
        width: 1920,
        height: 1080,
        alt: "Acceso a una comunidad residencial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi portón — Portero digital para comunidades",
    description:
      "El residente llama como siempre. La comunidad administra y ve quién intenta entrar.",
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
