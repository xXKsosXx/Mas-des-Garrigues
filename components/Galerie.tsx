import Image from "next/image";

const galerieItems = [
  {
    src: "/images/Terrasse restaurant soir.png",
    alt: "Terrasse du soir",
    className: "col-span-2 row-span-2",
    height: "h-[520px]",
    sizes: "66vw",
  },
  {
    src: "/images/Intérieur salle voûtée.png",
    alt: "Salle voûtée",
    className: "",
    height: "h-[258px]",
    sizes: "33vw",
  },
  {
    src: "/images/chef de cuisine.png",
    alt: "Notre chef",
    className: "",
    height: "h-[258px]",
    sizes: "33vw",
  },
  {
    src: "/images/Plat gastronomique.png",
    alt: "Gastronomie",
    className: "",
    height: "h-[240px]",
    sizes: "33vw",
  },
  {
    src: "/images/Cave à vins.png",
    alt: "Cave à vins",
    className: "",
    height: "h-[240px]",
    sizes: "33vw",
  },
  {
    src: "/images/Détail plat gastronomique 2.png",
    alt: "Détail gastronomique",
    className: "",
    height: "h-[240px]",
    sizes: "33vw",
  },
];

export default function Galerie() {
  return (
    <section id="galerie" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-or uppercase tracking-[0.4em] text-[11px] mb-6">
            Ambiance
          </p>
          <h2
            className="font-display font-light text-creme-light leading-[1.1]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            La <span className="italic text-or">Galerie</span>
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-[3px] bg-noir reveal"
        >
          {galerieItems.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group border border-[rgba(200,169,110,0.12)] ${item.height} ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                style={{
                  transitionTimingFunction:
                    "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
                sizes={item.sizes}
              />
              <div className="absolute inset-0 bg-noir/20 group-hover:bg-noir/5 transition-colors duration-500" />
              <p className="absolute bottom-4 left-4 text-creme-light text-[11px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
