import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://world-art-glass.grexa.site"),
  title: "World Art Glass Hyderabad | Premium Toughened Saint-Gobain Glass Solutions",
  description: "Specialists in Toughened Saint-Gobain Glass Partitions, Frameless Doors, Shower Cubicles, Railings, Black Slim Aluminium Partitions & ACP Glazing in Hyderabad & Telangana. 4.9 Rated on Google.",
  keywords: [
    "World Art Glass Hyderabad",
    "Toughened Glass Hyderabad",
    "Saint-Gobain Glass Hyderabad",
    "Office Glass Partitions",
    "Shower Cubicles Hyderabad",
    "Glass Railings Hyderabad",
    "Black Slim Aluminium Partitions",
    "Goshamahal Glass Shop",
    "Aghapura Glass Shop"
  ],
  authors: [{ name: "World Art Glass Hyderabad" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/world_art_glass_emblem.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/world_art_glass_emblem.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "World Art Glass Hyderabad | Premium Toughened Glass Solutions",
    description: "Strong • Stylish • Trusted. Premium Saint-Gobain Toughened Glass for Offices, Villas, Showrooms & Commercial Projects. 4.9 Rated with 188+ Google Reviews.",
    url: "https://world-art-glass.grexa.site/",
    siteName: "World Art Glass Hyderabad",
    images: [
      {
        url: "/images/world_art_glass_official_logo.jpg",
        width: 1024,
        height: 341,
        alt: "World Art Glass Hyderabad Official Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-sky-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
