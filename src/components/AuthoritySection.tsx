import { Shield, Users, Clock, Award } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Vidros Certificados",
    description: "Têmperas de qualidade com certificação de segurança",
  },
  {
    icon: Users,
    title: "Equipe Própria Especializada",
    description: "Profissionais treinados, sem terceirização",
  },
  {
    icon: Clock,
    title: "Entrega no Prazo Combinado",
    description: "Compromisso com prazos e cronograma definido",
  },
  {
    icon: Award,
    title: "Garantia de Instalação",
    description: "Garantia completa de instalação e vedação",
  },
];

export const AuthoritySection = () => {
  return (
    <section className="bg-background py-20 lg:py-28" id="sobre">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Por que escolher a{" "}
            <span className="text-primary">Vidraçaria Civil</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Anos de experiência e centenas de clientes satisfeitos em Uberaba e
            região.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group rounded-xl bg-card p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-light text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
