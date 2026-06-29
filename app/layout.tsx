import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import JsonLd from "./components/JsonLd";
import GoogleAnalytics from "./components/GoogleAnalytics";
import WhatsAppButton from "./components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.impulzzodigital.com"),
  title: "Impulzzo Digital — Agencia Digital Premium en Colombia",
  description:
    "Construimos empresas preparadas para la era de la Inteligencia Artificial. Desarrollo web, Shopify Expert, automatización, chatbots IA y marketing digital.",
  keywords: [
    "agencia digital Colombia",
    "Shopify Expert",
    "inteligencia artificial",
    "automatización procesos",
    "desarrollo web premium",
    "Juan Felipe Prada",
  ],
  openGraph: {
    title: "Impulzzo Digital | Agencia de IA y E-commerce",
    description:
      "Construimos empresas preparadas para la era de la Inteligencia Artificial.",
    url: "https://impulzzo.com",
    siteName: "Impulzzo Digital",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Impulzzo Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impulzzo Digital | Agencia de IA y E-commerce",
    description:
      "Construimos empresas preparadas para la era de la Inteligencia Artificial.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "PENDIENTE",
  },
  icons: {
    icon: "/icons/logo.png",
    apple: "/icons/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <GoogleAnalytics />
        <JsonLd />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
