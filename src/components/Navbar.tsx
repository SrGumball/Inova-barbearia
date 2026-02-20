import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#inicio" className="font-display text-2xl font-bold text-gradient-gold">
          INOVA
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-body font-medium tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex bg-gradient-gold text-primary-foreground font-body font-semibold text-sm px-6 py-2.5 rounded-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
        >
          Agendar
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-body font-medium tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-gold text-primary-foreground font-body font-semibold text-sm px-8 py-3 rounded-sm tracking-wider uppercase"
              >
                Agendar
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
