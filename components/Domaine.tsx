import Image from "next/image";

export default function Domaine() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/chef de cuisine.png"
            alt="Le chef du Mas des Garrigues"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 border border-[rgba(200,169,110,0.15)]" />
        </div>

        <div className="reveal order-1 lg:order-2">
          <p className="text-or uppercase tracking-[0.4em] text-[11px] mb-6">
            Notre Équipe
          </p>
          <h2
            className="font-display font-light text-creme-light mb-8 leading-[1.1]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Le <span className="italic text-or">Domaine</span>
          </h2>
          <p className="text-gris leading-[1.9] mb-6">
            Pierre Arnaud, chef étoilé passé par les grandes maisons
            parisiennes, a choisi de revenir dans son Gard natal pour ouvrir
            Le Mas des Garrigues aux côtés de Marie, sa compagne.
          </p>
          <p className="text-gris leading-[1.9] mb-10">
            Ensemble, ils ont façonné un lieu unique où la gastronomie
            rencontre l&apos;authenticité provençale. Chaque assiette est un
            hommage aux producteurs qui font la richesse de cette terre.
          </p>

          <div className="border-t border-[rgba(200,169,110,0.15)] pt-8">
            <p className="font-display italic text-or text-xl mb-2">
              Pierre &amp; Marie Arnaud
            </p>
            <p className="text-gris text-[11px] uppercase tracking-[0.2em]">
              Propriétaires &amp; Chefs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
