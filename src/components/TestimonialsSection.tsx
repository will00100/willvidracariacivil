import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState } from "react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "Uberaba - MG",
    text: "Excelente trabalho! O box ficou perfeito e a equipe foi super pontual. Deixaram tudo limpo depois da instalação. Recomendo muito!",
    rating: 5,
    service: "Box para Banheiro",
  },
  {
    name: "Carlos Oliveira",
    location: "Uberaba - MG",
    text: "Fechamos nossa sacada com eles e ficou maravilhoso. Agora podemos aproveitar o espaço o ano todo, sem preocupação com chuva ou vento.",
    rating: 5,
    service: "Fechamento de Sacada",
  },
  {
    name: "Ana Paula Santos",
    location: "Uberaba - MG",
    text: "Instalaram o espelho do nosso quarto de casal. Atendimento nota 10, desde o orçamento até a finalização. Super profissionais!",
    rating: 5,
    service: "Espelho Decorativo",
  },
];

export const TestimonialsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-secondary section-padding relative overflow-hidden" id="depoimentos">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="mb-16 text-center">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Depoimentos
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            O que nossos <span className="gradient-text">clientes</span> dizem
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
            A satisfação dos nossos clientes é nossa maior conquista.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 150}>
              <div
                className="relative rounded-2xl bg-card p-8 shadow-lg transition-all duration-500 hover-lift h-full border border-transparent hover:border-primary/20"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg transform -rotate-12 transition-transform duration-300 group-hover:rotate-0">
                  <Quote className="h-6 w-6 text-primary-foreground" />
                </div>

                {/* Service Tag */}
                <div className="mb-4">
                  <span className="inline-block text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                    {testimonial.service}
                  </span>
                </div>

                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary transition-transform duration-300"
                      style={{
                        transform: hoveredIndex === index ? `scale(${1 + (i * 0.05)})` : "scale(1)",
                        transitionDelay: `${i * 50}ms`,
                      }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-teal-dark text-primary-foreground font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-whatsapp rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground text-xs">✓</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, hsl(var(--primary) / 0.1) 0%, transparent 70%)`,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
