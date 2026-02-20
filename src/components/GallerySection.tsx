import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Corte moderno" },
  { src: gallery2, alt: "Barba alinhada" },
  { src: gallery3, alt: "Estilo completo" },
  { src: gallery4, alt: "Detalhes do corte" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary">Portfólio</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Nossa <span className="text-gradient-gold">galeria</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-sm aspect-[3/4] group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-end p-4">
                <span className="font-body text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
