import balconyImage from "@/assets/balcony-gourmet.jpg";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxImage } from "@/components/ParallaxImage";
import { Check } from "lucide-react";

const benefits = [
  "Materiais de alta resistência e durabilidade",
  "Vedação perfeita contra intempéries",
  "Conforto térmico e acústico garantido",
  "Valorização imediata do imóvel",
];

export const TransformationSection = () => {
  return (
    <section className="bg-secondary section-padding overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
          {/* Image */}
          <ScrollReveal direction="left" className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ParallaxImage
                src={balconyImage}
                alt="Sacada gourmet com fechamento em vidro"
                className="aspect-[4/3]"
                speed={0.3}
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 md:bottom-6 md:right-6 bg-card p-6 rounded-xl shadow-xl border border-border glass-effect">
                <div className="text-center">
                  <span className="block text-4xl font-bold gradient-text">+40%</span>
                  <span className="text-sm text-muted-foreground">Valorização<br/>do Imóvel</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -z-10 -bottom-8 -right-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              Por que escolher vidro?
            </span>
            
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl leading-tight">
              Valorize seu Imóvel{" "}
              <span className="gradient-text">Instantaneamente</span>
            </h2>
            
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              O vidro não é apenas um detalhe, é o acabamento que define o luxo da
              sua casa. Trabalhamos com materiais de alta resistência e vedação
              perfeita para garantir conforto térmico e acústico.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((item, index) => (
                <li 
                  key={item} 
                  className="flex items-center gap-4 group"
                  style={{
                    opacity: 0,
                    animation: `fadeInUp 0.5s ease-out ${0.6 + index * 0.1}s forwards`,
                  }}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <Check className="h-5 w-5" />
                  </span>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
