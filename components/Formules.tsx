interface Formule {
  _id: string;
  nom: string;
  prix: number;
  contenu: string[];
  featured: boolean;
}

const fallbackFormules: Formule[] = [
  {
    _id: "f1",
    nom: "Déjeuner",
    prix: 29,
    contenu: ["Entrée du jour", "Plat du marché", "Café offert"],
    featured: false,
  },
  {
    _id: "f2",
    nom: "Découverte",
    prix: 58,
    contenu: ["Entrée · Plat · Dessert", "Accord mets & vins", "Pain maison · Mignardises"],
    featured: true,
  },
  {
    _id: "f3",
    nom: "Gastronomique",
    prix: 85,
    contenu: ["5 services", "Accord vins inclus", "Expérience complète"],
    featured: false,
  },
];

export default function Formules({ formules }: { formules?: Formule[] }) {
  const data = formules && formules.length > 0 ? formules : fallbackFormules;

  return (
    <section id="formules" className="py-32 px-6 bg-pierre">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-or uppercase tracking-[0.4em] text-[11px] mb-6">
            Nos Offres
          </p>
          <h2
            className="font-display font-light text-creme-light leading-[1.1]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Les <span className="italic text-or">Formules</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal">
          {data.map((formule, i) => (
            <div
              key={formule._id}
              className={`p-10 border transition-all duration-300 reveal reveal-delay-${i + 1} ${
                formule.featured
                  ? "bg-or text-noir border-or"
                  : "bg-noir border-[rgba(200,169,110,0.15)] hover:border-[rgba(200,169,110,0.4)]"
              }`}
            >
              <p
                className={`uppercase tracking-[0.3em] text-[11px] mb-4 ${
                  formule.featured ? "text-terre" : "text-or"
                }`}
              >
                {formule.nom}
              </p>
              <p
                className={`font-display font-light mb-8 ${
                  formule.featured ? "text-noir" : "text-or"
                }`}
                style={{ fontSize: "52px" }}
              >
                {formule.prix}
                <span className="text-2xl">€</span>
              </p>
              <ul className="space-y-3">
                {formule.contenu.map((item, j) => (
                  <li
                    key={j}
                    className={`text-sm flex items-start gap-3 ${
                      formule.featured ? "text-terre" : "text-gris"
                    }`}
                  >
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                        formule.featured ? "bg-terre" : "bg-or"
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
