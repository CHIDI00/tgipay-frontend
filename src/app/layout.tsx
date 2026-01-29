import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TGIPay | Secure Payment Gateway for Nigerian Businesses",
    template: "%s | TGIPay",
  },
  description:
    "Accept payments globally with TGIPay. We provide seamless bank transfers, invoicing, offline payments, and secure payment links for SMEs and enterprises. Licensed by CBN.",
  keywords: [
    "TGIPay",
    "Payment Gateway Nigeria",
    "Online Payments",
    "SME Banking",
    "Invoicing Software",
    "POS Terminal",
    "CBN Licensed Fintech",
    "Secure Payment Links",
    "Nigeria Fintech",
  ],

  authors: [{ name: "TGIPay Team" }],
  creator: "TGIPay",
  publisher: "TGIPay",

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

  openGraph: {
    type: "website",
    locale: "en_NG",
    title: "TGIPay | The Payment Gateway Built for Speed & Trust",
    description:
      "Experience seamless payments with TGIPay. Built to ensure fast, secure transactions allowing you to focus on growing your business.",
    siteName: "TGIPay",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TGIPay Dashboard and Payment Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TGIPay | Secure Payments for Africa",
    description:
      "Seamless bank transfers, invoicing, and payment links. Licensed by CBN.",
    images: ["/og-image.jpg"],
    creator: "@tgipay",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${montserrat.variable} font-sans antialiased`}
      >
        <SmoothScroll>
          <Navigation />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
