import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden grain">
      <Image
        src="/images/Mas en Pierre la nuit.png"
        alt="Le Mas des Garrigues de nuit"
        fill
        className="object-cover opacity-35"
        priority
        sizes="100vw"
      />

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(13,11,8,0.3) 0%, rgba(13,11,8,0.1) 40%, rgba(13,11,8,0.7) 100%)",
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-or uppercase tracking-[0.4em] text-[11px] mb-8 animate-fade-up animation-delay-300">
          Restaurant Gastronomique · Uzès, Gard
        </p>

        <h1
          className="font-display font-light leading-[0.95] mb-6 animate-fade-up animation-delay-600"
          style={{ fontSize: "clamp(56px, 8vw, 110px)" }}
        >
          <span className="block text-creme-light">Le Mas</span>
          <span className="block italic text-or">des Garrigues</span>
        </h1>

        <p className="font-display italic text-gris text-lg md:text-xl max-w-lg mb-12 animate-fade-up animation-delay-900">
          Cuisine du terroir gardois entre garrigue et Méditerranée
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-1200">
          <a
            href="#reservation"
            className="bg-or text-noir px-8 py-3.5 uppercase tracking-[0.2em] text-[11px] font-medium hover:bg-or-light transition-colors duration-300"
          >
            Réserver une table
          </a>
          <a
            href="#carte"
            className="border border-[rgba(200,169,110,0.4)] text-creme-light px-8 py-3.5 uppercase tracking-[0.2em] text-[11px] hover:border-or hover:text-or transition-all duration-300"
          >
            Découvrir la carte
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gris">
          Découvrir
        </span>
        <div className="w-px h-8 bg-or scroll-line" />
      </div>
    </section>
  );
}
