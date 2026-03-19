import Image from "next/image";

export default function Introduction() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <p className="text-or uppercase tracking-[0.4em] text-[11px] mb-6">
            Notre Histoire
          </p>
          <h2
            className="font-display font-light text-creme-light mb-8 leading-[1.1]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Un mas d&apos;exception
            <br />
            <span className="italic text-or">au cœur du Gard</span>
          </h2>
          <p className="text-gris leading-[1.9] mb-6">
            Niché dans les garrigues à quelques kilomètres d&apos;Uzès, Le Mas des
            Garrigues est un mas en pierre du XVIIIe siècle transformé en
            restaurant gastronomique par Pierre &amp; Marie Arnaud en 2008.
          </p>
          <p className="text-gris leading-[1.9] mb-10">
            Notre cuisine célèbre les producteurs du Gard et de la
            Méditerranée, dans un cadre où chaque pierre raconte une histoire
            de terroir et de passion.
          </p>

          <div className="flex gap-12">
            <div className="reveal reveal-delay-1">
              <span className="font-display text-or text-4xl font-light">38</span>
              <p className="text-gris text-[11px] uppercase tracking-[0.2em] mt-1">
                Couverts
              </p>
            </div>
            <div className="reveal reveal-delay-2">
              <span className="font-display text-or text-4xl font-light">12</span>
              <p className="text-gris text-[11px] uppercase tracking-[0.2em] mt-1">
                Producteurs
              </p>
            </div>
            <div className="reveal reveal-delay-3">
              <span className="font-display text-or text-4xl font-light">2008</span>
              <p className="text-gris text-[11px] uppercase tracking-[0.2em] mt-1">
                Depuis
              </p>
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-2 relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/Intérieur table dressée.png"
            alt="Table dressée au Mas des Garrigues"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 border border-[rgba(200,169,110,0.15)]" />
        </div>
      </div>
    </section>
  );
}
