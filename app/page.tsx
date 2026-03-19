"use client";

import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import CarteTabs from "@/components/CarteTabs";
import Formules from "@/components/Formules";
import Terroir from "@/components/Terroir";
import Galerie from "@/components/Galerie";
import Avis from "@/components/Avis";
import Domaine from "@/components/Domaine";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Le Mas des Garrigues",
  image: "/images/Mas en Pierre la nuit.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lieu-dit La Garrigue Haute",
    addressLocality: "Uzès",
    postalCode: "30700",
    addressRegion: "Gard",
    addressCountry: "FR",
  },
  telephone: "+33466727272",
  priceRange: "€€€",
  servesCuisine: "Gastronomique française",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "247",
  },
};

export default function Home() {
  useReveal();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <CarteTabs />
        <Formules />
        <Terroir />
        <Galerie />
        <Avis />
        <Domaine />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
