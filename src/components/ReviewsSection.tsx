import { Star } from "lucide-react";

const reviews = [
  { name: "Lucas M.", text: "Melhor barbearia da região! Atendimento impecável e o corte ficou exatamente como eu queria.", stars: 5 },
  { name: "Rafael S.", text: "Ambiente premium, profissionais de primeira. Sempre saio de lá me sentindo outro homem.", stars: 5 },
  { name: "João P.", text: "Agendei pelo WhatsApp e fui atendido na hora. Barba perfeita e corte moderno. Recomendo!", stars: 5 },
];

const ReviewsSection = () => {
  return (
    <section id="avaliacoes" className="section-padding bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary">Depoimentos</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            O que dizem <span className="text-gradient-gold">nossos clientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-background border border-border rounded-sm p-8 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <Star key={j} className="text-primary fill-primary" size={16} />
                ))}
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-display text-sm font-bold text-primary">{review.name[0]}</span>
                </div>
                <span className="font-body text-sm font-semibold">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
