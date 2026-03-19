export default function Footer() {
  return (
    <footer className="border-t border-[rgba(200,169,110,0.1)] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div>
          <div className="mb-6">
            <span className="font-display text-or text-xl font-light">Le Mas </span>
            <span className="font-display text-or text-xl font-light italic">
              des Garrigues
            </span>
          </div>
          <p className="text-gris text-sm leading-relaxed">
            Restaurant gastronomique en plein cœur du Gard, entre Uzès et le
            Pont du Gard.
          </p>
        </div>

        <div>
          <p className="text-or uppercase tracking-[0.3em] text-[10px] mb-6">
            Contact
          </p>
          <div className="space-y-3 text-gris text-sm">
            <p>04 66 72 72 72</p>
            <p>contact@masdesgarrigues.fr</p>
          </div>
        </div>

        <div>
          <p className="text-or uppercase tracking-[0.3em] text-[10px] mb-6">
            Adresse
          </p>
          <div className="text-gris text-sm leading-relaxed">
            <p>Lieu-dit La Garrigue Haute</p>
            <p>30700 Uzès, Gard</p>
          </div>
        </div>

        <div>
          <p className="text-or uppercase tracking-[0.3em] text-[10px] mb-6">
            Horaires
          </p>
          <div className="space-y-2 text-gris text-sm">
            <p>Mer — Sam : Déjeuner &amp; Dîner</p>
            <p>Dim : Déjeuner uniquement</p>
            <p>Lun — Mar : Fermé</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[rgba(200,169,110,0.08)] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gris text-[11px]">
          © 2024 Le Mas des Garrigues. Tous droits réservés.
        </p>
        <p className="text-gris text-[11px]">
          Cuisine du terroir gardois · Produits locaux · Uzès, Gard
        </p>
      </div>

      <div className="fixed bottom-4 right-4 z-50 bg-[rgba(13,11,8,0.9)] border border-[rgba(200,169,110,0.2)] px-4 py-2 backdrop-blur-sm">
        <p className="text-gris text-[10px]">
          Site réalisé par{" "}
          <span className="text-or">sparkana.</span>
        </p>
      </div>
    </footer>
  );
}
