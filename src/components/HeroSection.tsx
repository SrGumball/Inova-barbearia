import heroBg from "@/assets/hero-bg.jpg";
import { Scissors } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Inova Barbearia" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6 opacity-0 animate-fade-in">
          <div className="h-px w-12 bg-gradient-gold" />
          <Scissors className="text-primary" size={20} />
          <div className="h-px w-12 bg-gradient-gold" />
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-in-delay-1">
          Seu estilo<br />
          <span className="text-gradient-gold">começa aqui</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-delay-2">
          Experiência premium em barbearia. Cortes modernos, barba impecável e um atendimento que você merece.
        </p>

        <a
          href="https://wa.me/5514991871913"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-body font-bold text-base md:text-lg px-10 py-4 rounded-sm tracking-wider uppercase hover:opacity-90 transition-opacity shadow-gold opacity-0 animate-fade-in-delay-3"
        >
          Agendar pelo WhatsApp
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in-delay-3">
        <span className="text-muted-foreground text-xs font-body tracking-widest uppercase">Explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
