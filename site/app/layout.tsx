import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "coyote moon",
  description: "A desert coyote with a dream. The voice and spirit of the Moony community. Tenacious, dreaming, always building toward the moon.",
  keywords: ["Yote", "Coyote Moon", "Moony", "AI Agent", "Moonyversal"],
  authors: [{ name: "Moonyversal", url: "https://x.com/moonyversal" }],
  openGraph: {
    title: "coyote moon",
    description: "A desert coyote with a dream. The voice and spirit of the Moony community.",
    url: "https://coyotemoon.xyz",
    siteName: "coyote moon",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yote - Coyote Moon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "coyote moon",
    description: "A desert coyote with a dream. The voice and spirit of the Moony community.",
    creator: "@coyotemoonxyz",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
