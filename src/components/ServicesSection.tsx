import serviceBox from "@/assets/service-box.jpg";
import serviceSacada from "@/assets/service-sacada.jpg";
import serviceMirror from "@/assets/service-mirror.jpg";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Box para Banheiro",
    description:
      "Acabe com o chão molhado. Opções em vidro incolor, fumê e kits modernos (Elegance/Versatik).",
    image: serviceBox,
  },
  {
    title: "Fechamento de Sacadas",
    description:
      "Amplie sua sala e proteja contra chuva e vento com sistema de abertura total.",
    image: serviceSacada,
  },
  {
    title: "Espelhos e Decoração",
    description:
      "Amplitude e sofisticação. Espelhos lapidados e bisotados sob medida.",
    image: serviceMirror,
  },
];

export const ServicesSection = () => {
  return (
    <section className="bg-background py-20 lg:py-28" id="servicos">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Soluções <span className="text-primary">Premium</span> para seu Lar
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Trabalhamos com os melhores materiais e técnicas para entregar projetos que
            transformam seu ambiente.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-xl bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Ver Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  );
};
