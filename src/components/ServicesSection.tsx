import serviceBox from "@/assets/service-box.jpg";
import serviceSacada from "@/assets/service-sacada.jpg";
import serviceMirror from "@/assets/service-mirror.jpg";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Box para Banheiro",
    description:
      "Acabe com o chão molhado. Opções em vidro incolor, fumê e kits modernos (Elegance/Versatik).",
    image: serviceBox,
    features: ["Vidro temperado 8mm", "Kits modernos", "Várias cores"],
  },
  {
    title: "Fechamento de Sacadas",
    description:
      "Amplie sua sala e proteja contra chuva e vento com sistema de abertura total.",
    image: serviceSacada,
    features: ["Abertura total", "Isolamento acústico", "Proteção contra chuva"],
  },
  {
    title: "Espelhos e Decoração",
    description:
      "Amplitude e sofisticação. Espelhos lapidados e bisotados sob medida.",
    image: serviceMirror,
    features: ["Sob medida", "Lapidação premium", "Instalação segura"],
  },
];

export const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-background section-padding" id="servicos">
      <div className="container mx-auto px-6">
        <ScrollReveal className="mb-16 text-center">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Nossos Serviços
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Soluções <span className="gradient-text">Premium</span> para seu Lar
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
            Trabalhamos com os melhores materiais e técnicas para entregar projetos que
            transformam seu ambiente.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 150}>
              <div
                className="group relative overflow-hidden rounded-2xl bg-card shadow-lg transition-all duration-500 hover-lift cursor-pointer h-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Title on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                      {service.title}
                    </h3>
                    
                    {/* Features Pills */}
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-primary/20 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full border border-primary/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <button className="inline-flex items-center gap-2 text-primary font-semibold group/btn">
                    <span>Saiba mais</span>
                    <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Hover Border Effect */}
                <div 
                  className="absolute inset-0 border-2 border-primary/0 rounded-2xl transition-all duration-500 group-hover:border-primary/50"
                  style={{
                    boxShadow: hoveredIndex === index ? "inset 0 0 30px hsl(var(--primary) / 0.1)" : "none",
                  }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={450} className="mt-16 text-center">
          <Button variant="outline" size="lg" className="group">
            Ver Catálogo Completo
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};
