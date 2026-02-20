import { Award, Clock, Users } from "lucide-react";

const features = [
  { icon: Award, title: "Qualidade", desc: "Profissionais treinados com as melhores técnicas do mercado." },
  { icon: Users, title: "Atendimento", desc: "Experiência personalizada para cada cliente." },
  { icon: Clock, title: "Pontualidade", desc: "Respeito pelo seu tempo com agendamento eficiente." },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary">Sobre nós</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Tradição e <span className="text-gradient-gold">inovação</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Na Inova Barbearia, unimos o melhor da tradição com as tendências mais modernas. 
            Nosso compromisso é entregar não apenas um corte, mas uma experiência completa de cuidado e estilo masculino.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-sm p-8 text-center hover:border-primary/50 transition-colors duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-sm bg-secondary flex items-center justify-center group-hover:shadow-gold transition-shadow duration-300">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
