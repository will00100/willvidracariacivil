import logo from "@/assets/logo-vidracaria.png";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground" id="contato">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10 py-16 lg:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            Seu projeto merece o <span className="text-primary">melhor acabamento</span>.
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">
            Entre em contato agora e receba um orçamento personalizado em minutos.
          </p>
          <WhatsAppButton variant="hero">
            Falar com Especialista Agora
          </WhatsAppButton>
        </div>
      </div>

      {/* Footer Info */}
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Logo & Description */}
            <div>
              <img
                src={logo}
                alt="Vidraçaria Civil"
                className="mb-4 h-20 w-auto"
              />
              <p className="text-primary-foreground/70">
                Especialistas em vidros temperados para residências e comércios.
                Qualidade, segurança e beleza para seu ambiente.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-lg font-bold">Contato</h3>
              <div className="space-y-4">
                <a
                  href="tel:+5534996470196"
                  className="flex items-center gap-3 text-primary-foreground/70 transition-colors hover:text-primary"
                >
                  <Phone className="h-5 w-5" />
                  (34) 99647-0196
                </a>
                <div className="flex items-start gap-3 text-primary-foreground/70">
                  <MapPin className="h-5 w-5 shrink-0" />
                  <span>Uberaba - MG</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-4 text-lg font-bold">Serviços</h3>
              <ul className="space-y-2 text-primary-foreground/70">
                <li>Box para Banheiro</li>
                <li>Fechamento de Sacadas</li>
                <li>Espelhos Decorativos</li>
                <li>Portas de Vidro</li>
                <li>Janelas e Basculantes</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
            <p>
              © {new Date().getFullYear()} Vidraçaria Civil. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
