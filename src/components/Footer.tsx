import { Instagram, MessageCircle, Scissors } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="text-primary" size={20} />
              <span className="font-display text-2xl font-bold text-gradient-gold">INOVA</span>
            </div>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Barbearia premium com foco em estilo, qualidade e atendimento diferenciado.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Horário</h4>
            <div className="font-body text-muted-foreground text-sm space-y-1">
              <p>Seg a Sex: 9h às 20h</p>
              <p>Sábado: 9h às 18h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Redes sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/5514991871913"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-gold transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="font-body text-muted-foreground text-xs">
            © 2025 Inova Barbearia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
