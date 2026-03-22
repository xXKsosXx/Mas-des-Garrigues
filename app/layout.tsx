import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le Mas des Garrigues — Restaurant Gastronomique Uzès, Gard",
  description:
    "Restaurant gastronomique en plein cœur du Gard. Cuisine du terroir gardois, produits locaux, terrasse ombragée. Entre Uzès et le Pont du Gard.",
  keywords: [
    "restaurant gastronomique Uzès",
    "restaurant Gard",
    "cuisine terroir gardois",
    "restaurant Pont du Gard",
  ],
  openGraph: {
    title: "Le Mas des Garrigues — Restaurant Gastronomique Uzès, Gard",
    description:
      "Restaurant gastronomique en plein cœur du Gard. Cuisine du terroir gardois, produits locaux, terrasse ombragée.",
    images: ["/images/Mas en Pierre la nuit.png"],
    type: "website",
    locale: "fr_FR",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-body antialiased bg-noir text-creme">
        <div className="hidden md:block">
          <CustomCursor />
        </div>
        {children}
      </body>
    </html>
  );
}
