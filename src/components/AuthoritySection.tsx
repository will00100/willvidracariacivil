import { Shield, Users, Clock, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Counter } from "@/components/Counter";

const benefits = [
  {
    icon: Shield,
    title: "Vidros Certificados",
    description: "Têmperas de qualidade com certificação de segurança",
  },
  {
    icon: Users,
    title: "Equipe Própria",
    description: "Profissionais treinados, sem terceirização",
  },
  {
    icon: Clock,
    title: "Prazo Garantido",
    description: "Compromisso com prazos e cronograma definido",
  },
  {
    icon: Award,
    title: "Garantia Total",
    description: "Garantia completa de instalação e vedação",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Projetos Realizados" },
  { value: 10, suffix: "+", label: "Anos de Experiência" },
  { value: 100, suffix: "%", label: "Clientes Satisfeitos" },
  { value: 24, suffix: "h", label: "Orçamento Rápido" },
];

export const AuthoritySection = () => {
  return (
    <section className="bg-background section-padding relative overflow-hidden" id="sobre">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="mb-20 text-center">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Nossos Diferenciais
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Por que escolher a{" "}
            <span className="gradient-text">Vidraçaria Civil</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
            Anos de experiência e centenas de clientes satisfeitos em Uberaba e região.
          </p>
        </ScrollReveal>

        {/* Stats Section */}
        <ScrollReveal className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/10">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 100}>
              <div className="group relative rounded-2xl bg-card p-8 text-center shadow-md transition-all duration-500 hover-lift h-full border border-transparent hover:border-primary/20">
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary transition-all duration-500 group-hover:scale-110 group-hover:from-primary group-hover:to-teal-dark group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30">
                  <benefit.icon className="h-10 w-10" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-lg font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500 group-hover:w-1/2 rounded-full" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
