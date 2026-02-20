import { MapPin, Phone, Clock } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="localizacao" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary">Onde estamos</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Nossa <span className="text-gradient-gold">localização</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-sm bg-secondary flex items-center justify-center">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">Endereço</h3>
                <p className="font-body text-muted-foreground text-sm">
                  Rua Vinte e Um de Abril, 379 - Centro<br />
                  Lins - SP, 16400-030
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-sm bg-secondary flex items-center justify-center">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">Contato</h3>
                <p className="font-body text-muted-foreground text-sm">(14) 99187-1913</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-sm bg-secondary flex items-center justify-center">
                <Clock className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">Horário</h3>
                <p className="font-body text-muted-foreground text-sm">
                  Seg a Sex: 9h às 20h<br />
                  Sábado: 9h às 18h<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-sm overflow-hidden border border-border aspect-video md:aspect-auto md:min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14811.23456789!2d-49.756789!3d-21.678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94be3287383a17e5%3A0x868b16c845b4c414!2sR.%20Vinte%20e%20Um%20de%20Abril%2C%20379%20-%20Centro%2C%20Lins%20-%20SP%2C%2016400-030!5e0!3m2!1spt-BR!2sbr!4v1710000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Inova Barbearia"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
