interface Avis {
  _id: string;
  auteur: string;
  initiales: string;
  note: number;
  texte: string;
  plateforme: string;
  date_affichage: string;
}

const fallbackAvis: Avis[] = [
  {
    _id: "a1",
    auteur: "Sophie L.",
    initiales: "SL",
    note: 5,
    texte: "Une expérience gastronomique rare dans le Gard. L'agneau des Causses était une révélation.",
    plateforme: "Google",
    date_affichage: "il y a 2 semaines",
  },
  {
    _id: "a2",
    auteur: "Thomas M.",
    initiales: "TM",
    note: 5,
    texte: "Réservation pour nos 10 ans de mariage. Pierre et Marie ont pensé à tout.",
    plateforme: "TripAdvisor",
    date_affichage: "il y a 1 mois",
  },
  {
    _id: "a3",
    auteur: "Claire B.",
    initiales: "CB",
    note: 5,
    texte: "La formule déjeuner à 29€ est un rapport qualité-prix exceptionnel.",
    plateforme: "Google",
    date_affichage: "il y a 3 semaines",
  },
];

const platformScores = [
  { name: "Google", score: "4.9/5" },
  { name: "TripAdvisor", score: "4.5/5" },
  { name: "Yelp", score: "4.5/5" },
  { name: "TheFork", score: "9.4/10" },
];

export default function Avis({ avis }: { avis?: Avis[] }) {
  const data = avis && avis.length > 0 ? avis : fallbackAvis;

  return (
    <section id="avis" className="py-32 px-6 bg-pierre">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-or uppercase tracking-[0.4em] text-[11px] mb-6">
            Témoignages
          </p>
          <p className="font-display text-or font-light" style={{ fontSize: "80px" }}>
            4.9
          </p>
          <p className="text-or text-2xl tracking-[4px] mb-2">★★★★★</p>
          <p className="text-gris text-sm">247 avis vérifiés</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16 reveal">
          {data.map((item, i) => (
            <div
              key={item._id}
              className={`border border-[rgba(200,169,110,0.15)] p-8 reveal reveal-delay-${i + 1}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[rgba(200,169,110,0.15)] flex items-center justify-center">
                  <span className="text-or text-[11px] font-medium">
                    {item.initiales}
                  </span>
                </div>
                <div>
                  <p className="text-creme-light text-sm font-medium">
                    {item.auteur}
                  </p>
                  <p className="text-gris text-[11px]">{item.date_affichage}</p>
                </div>
              </div>
              <p className="text-or text-sm tracking-[2px] mb-3">
                {"★".repeat(item.note)}
              </p>
              <p className="text-gris text-sm leading-relaxed italic font-display">
                &ldquo;{item.texte}&rdquo;
              </p>
              <p className="text-or text-[10px] uppercase tracking-[0.2em] mt-4">
                {item.plateforme}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 reveal">
          {platformScores.map((p) => (
            <div key={p.name} className="text-center">
              <p className="font-display text-or text-2xl mb-1">{p.score}</p>
              <p className="text-gris text-[11px] uppercase tracking-[0.2em]">
                {p.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
