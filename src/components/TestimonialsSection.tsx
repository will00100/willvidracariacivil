import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "Uberaba - MG",
    text: "Excelente trabalho! O box ficou perfeito e a equipe foi super pontual. Deixaram tudo limpo depois da instalação.",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    location: "Uberaba - MG",
    text: "Fechamos nossa sacada com eles e ficou maravilhoso. Agora podemos aproveitar o espaço o ano todo, sem preocupação com chuva.",
    rating: 5,
  },
  {
    name: "Ana Paula Santos",
    location: "Uberaba - MG",
    text: "Instalaram o espelho do nosso quarto de casal. Atendimento nota 10, desde o orçamento até a finalização. Recomendo!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="bg-secondary py-20 lg:py-28" id="depoimentos">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A satisfação dos nossos clientes é nossa maior conquista.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="rounded-xl bg-card p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-muted-foreground italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
