"use client";

import { useState } from "react";

interface MenuItem {
  _id: string;
  nom: string;
  description: string;
  prix: number;
  categorie: string;
  badge?: string;
}

const fallbackMenu: MenuItem[] = [
  {
    _id: "e1",
    nom: "Burrata des Alpilles, tomate cœur de bœuf",
    description: "Huile d'olive vierge Moulin de Castelas · fleur de sel de Camargue",
    prix: 18,
    categorie: "entree",
    badge: "Produit local",
  },
  {
    _id: "e2",
    nom: "Velouté de châtaignes du Gard",
    description: "Truffe noire du Tricastin · crème de lait cru · mouillettes grillées",
    prix: 22,
    categorie: "entree",
  },
  {
    _id: "e3",
    nom: "Carpaccio de daurade, agrumes",
    description: "Daurade de Méditerranée · citron confit · herbes du jardin",
    prix: 19,
    categorie: "entree",
    badge: "Pêche locale",
  },
  {
    _id: "e4",
    nom: "Terrine de sanglier des Cévennes",
    description: "Confit d'oignons rouges · cornichons maison · brioche toastée",
    prix: 16,
    categorie: "entree",
  },
  {
    _id: "p1",
    nom: "Agneau des Causses rôti",
    description: "Jus aux herbes de garrigue · légumes confits · gratin dauphinois",
    prix: 34,
    categorie: "plat",
    badge: "Élevage local",
  },
  {
    _id: "p2",
    nom: "Loup de Méditerranée entier",
    description: "Beurre blanc au Picpoul de Pinet · fenouil braisé · pommes vapeur",
    prix: 38,
    categorie: "plat",
  },
  {
    _id: "p3",
    nom: "Risotto de petit épeautre",
    description: "Champignons des bois · parmesan 36 mois · truffe d'été",
    prix: 28,
    categorie: "plat",
    badge: "Végétarien",
  },
  {
    _id: "p4",
    nom: "Filet de bœuf Aubrac",
    description: "Sauce au Côtes du Rhône · moelle · pommes sarladaises",
    prix: 42,
    categorie: "plat",
  },
  {
    _id: "d1",
    nom: "Tarte fine aux figues du Gard",
    description: "Pâte feuilletée maison · crème d'amandes · glace miel lavande",
    prix: 14,
    categorie: "dessert",
  },
  {
    _id: "d2",
    nom: "Fondant chocolat Valrhona",
    description: "Cœur coulant · fleur de sel · crème glacée vanille Bourbon",
    prix: 13,
    categorie: "dessert",
  },
  {
    _id: "d3",
    nom: "Sélection de fromages",
    description: "Affinés par Maison Bernard · Nîmes · confiture maison · noix",
    prix: 16,
    categorie: "dessert",
  },
  {
    _id: "d4",
    nom: "Pavlova aux fruits rouges",
    description: "Meringue croquante · chantilly légère · coulis de framboises",
    prix: 12,
    categorie: "dessert",
  },
];

const categories = [
  { key: "entree", label: "Entrées" },
  { key: "plat", label: "Plats" },
  { key: "dessert", label: "Desserts" },
];

export default function CarteTabs({ items }: { items?: MenuItem[] }) {
  const [active, setActive] = useState("entree");
  const menu = items && items.length > 0 ? items : fallbackMenu;
  const filtered = menu.filter((item) => item.categorie === active);

  return (
    <section id="carte" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-or uppercase tracking-[0.4em] text-[11px] mb-6">
            Gastronomie
          </p>
          <h2
            className="font-display font-light text-creme-light leading-[1.1]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Notre <span className="italic text-or">Carte</span>
          </h2>
        </div>

        <div className="flex justify-center gap-8 mb-12 reveal">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`pb-3 uppercase tracking-[0.2em] text-[12px] transition-all duration-300 ${
                active === cat.key
                  ? "text-or border-b-2 border-or"
                  : "text-gris hover:text-creme-light border-b-2 border-transparent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Desktop: grid 2 colonnes */}
        <div className="hidden md:grid md:grid-cols-2 gap-[2px] bg-[rgba(200,169,110,0.1)] reveal">
          {filtered.map((item) => (
            <div
              key={item._id}
              className="bg-noir p-8 md:px-10 hover:bg-pierre transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-display text-[20px] text-creme-light mb-1">
                    {item.nom}
                  </h3>
                  <p className="font-display italic text-gris text-[13px] leading-relaxed">
                    {item.description}
                  </p>
                  {item.badge && (
                    <span className="inline-block mt-3 border border-or text-or px-3 py-1 text-[9px] uppercase tracking-[0.2em]">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="font-display text-or text-[22px] shrink-0">
                  {item.prix}€
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: scroll horizontal */}
        <div className="md:hidden reveal">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6">
            {filtered.map((item) => (
              <div
                key={item._id}
                className="min-w-[280px] snap-start bg-pierre border border-[rgba(200,169,110,0.12)] p-6 shrink-0"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-[18px] text-creme-light flex-1">
                    {item.nom}
                  </h3>
                  <span className="font-display text-or text-[22px] shrink-0">
                    {item.prix}€
                  </span>
                </div>
                <p className="font-display italic text-gris text-[13px] leading-relaxed">
                  {item.description}
                </p>
                {item.badge && (
                  <span className="inline-block mt-3 border border-or text-or px-3 py-1 text-[9px] uppercase tracking-[0.2em]">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-2">
            {filtered.map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-or/30"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
