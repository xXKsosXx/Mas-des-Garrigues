const producteurs = [
  "Domaine Pellerin · Uzès",
  "Maraîchage Fabre · Nîmes",
  "Fromagerie Bernard · Nîmes",
  "Moulin de Castelas · Alpilles",
  "Élevage Roussel · Causses",
  "Pêcherie Martin · Palavas",
  "Miellerie des Garrigues · Uzès",
  "Boulangerie Arnaud · Lussan",
];

export default function Terroir() {
  return (
    <section className="py-32 px-6 bg-pierre">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-or uppercase tracking-[0.4em] text-[11px] mb-6">
            Nos Producteurs
          </p>
          <h2
            className="font-display font-light text-creme-light leading-[1.1]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Le <span className="italic text-or">Terroir</span>
          </h2>
          <p className="text-gris max-w-xl mx-auto mt-6 leading-[1.9]">
            Chaque plat est le fruit d&apos;une collaboration étroite avec nos
            producteurs locaux, à moins de 50 kilomètres du restaurant.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 reveal">
          {producteurs.map((prod, i) => {
            const [name, location] = prod.split(" · ");
            return (
              <div
                key={i}
                className={`border border-[rgba(200,169,110,0.15)] p-6 hover:border-[rgba(200,169,110,0.4)] transition-colors duration-300 reveal reveal-delay-${(i % 3) + 1}`}
              >
                <p className="font-display text-creme-light text-lg">{name}</p>
                <p className="text-or text-[11px] uppercase tracking-[0.2em] mt-1">
                  {location}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
