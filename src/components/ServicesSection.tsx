import { Scissors, Sparkles } from "lucide-react";

const services = [
  { name: "Corte Masculino", desc: "Cortes modernos e clássicos com acabamento perfeito.", price: "R$ 45", icon: Scissors },
  { name: "Barba", desc: "Modelagem e aparação com toalha quente e produtos premium.", price: "R$ 35", icon: Sparkles },
  { name: "Corte + Barba", desc: "O combo completo para sair renovado.", price: "R$ 70", icon: Scissors },
  { name: "Tratamentos", desc: "Hidratação, pigmentação e cuidados personalizados.", price: "A consultar", icon: Sparkles },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary">Nossos serviços</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            O que <span className="text-gradient-gold">oferecemos</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex items-start gap-6 bg-background border border-border rounded-sm p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 shrink-0 rounded-sm bg-secondary flex items-center justify-center group-hover:shadow-gold transition-shadow">
                <service.icon className="text-primary" size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-lg font-semibold">{service.name}</h3>
                  <span className="font-body text-primary font-bold text-sm">{service.price}</span>
                </div>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-gradient-gold text-primary-foreground font-body font-semibold text-sm px-8 py-3 rounded-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Agendar agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
