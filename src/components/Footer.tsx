import logo from "@/assets/logo-vidracaria.png";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MapPin, Phone, Mail, Instagram, Facebook, ArrowUp } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState, useEffect } from "react";

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground relative" id="contato">
      {/* CTA Section */}
      <div className="relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "3s" }} />
        </div>

        <div className="relative border-b border-primary-foreground/10 py-20 lg:py-28">
          <div className="container mx-auto px-6 text-center">
            <ScrollReveal>
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                Pronto para transformar seu espaço?
              </span>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl leading-tight">
                Seu projeto merece o{" "}
                <span className="gradient-text">melhor acabamento</span>.
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-primary-foreground/80 text-lg">
                Entre em contato agora e receba um orçamento personalizado em minutos.
                Atendimento ágil via WhatsApp.
              </p>
              <WhatsAppButton variant="hero" className="animate-pulse-glow">
                Falar com Especialista Agora
              </WhatsAppButton>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo & Description */}
            <ScrollReveal direction="up" delay={0}>
              <div>
                <img
                  src={logo}
                  alt="Vidraçaria Civil"
                  className="mb-6 h-20 w-auto"
                />
                <p className="text-primary-foreground/70 leading-relaxed mb-6">
                  Especialistas em vidros temperados para residências e comércios.
                  Qualidade, segurança e beleza para seu ambiente.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact */}
            <ScrollReveal direction="up" delay={100}>
              <div>
                <h3 className="mb-6 text-lg font-bold">Contato</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+5534996470196"
                    className="flex items-center gap-3 text-primary-foreground/70 transition-colors hover:text-primary group"
                  >
                    <span className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Phone className="h-5 w-5" />
                    </span>
                    (34) 99647-0196
                  </a>
                  <div className="flex items-center gap-3 text-primary-foreground/70">
                    <span className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </span>
                    Uberaba - MG
                  </div>
                  <a
                    href="mailto:contato@vidracariacivil.com.br"
                    className="flex items-center gap-3 text-primary-foreground/70 transition-colors hover:text-primary group"
                  >
                    <span className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Mail className="h-5 w-5" />
                    </span>
                    contato@vidracariacivil.com.br
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Services */}
            <ScrollReveal direction="up" delay={200}>
              <div>
                <h3 className="mb-6 text-lg font-bold">Serviços</h3>
                <ul className="space-y-3">
                  {[
                    "Box para Banheiro",
                    "Fechamento de Sacadas",
                    "Espelhos Decorativos",
                    "Portas de Vidro",
                    "Janelas e Basculantes",
                    "Manutenção",
                  ].map((service) => (
                    <li key={service}>
                      <a 
                        href="#servicos" 
                        className="text-primary-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Hours */}
            <ScrollReveal direction="up" delay={300}>
              <div>
                <h3 className="mb-6 text-lg font-bold">Horário de Atendimento</h3>
                <div className="space-y-3 text-primary-foreground/70">
                  <div className="flex justify-between">
                    <span>Segunda - Sexta</span>
                    <span className="text-primary-foreground">08h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span className="text-primary-foreground">08h - 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span className="text-primary-foreground/50">Fechado</span>
                  </div>
                </div>
                <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <p className="text-sm text-primary-foreground/80">
                    💬 Atendimento via WhatsApp disponível fora do horário comercial
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50 text-center md:text-left">
              © {new Date().getFullYear()} Vidraçaria Civil. Todos os direitos reservados.
            </p>
            <p className="text-sm text-primary-foreground/50">
              Desenvolvido com ❤️ para Uberaba
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-card text-foreground shadow-xl flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};
