import heroImage from "@/assets/hero-bathroom.jpg";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Banheiro moderno com box de vidro temperado"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Transforme sua Casa com a{" "}
            <span className="text-primary">Elegância</span> e{" "}
            <span className="text-primary">Segurança</span> do Vidro Temperado.
          </h1>
          
          <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
            Especialistas em Fechamento de Sacadas, Box de Banheiro e Espelhos em
            Uberaba. Instalação rápida, limpa e garantida.
          </p>

          <WhatsAppButton variant="hero" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-6 rounded-full border-2 border-primary-foreground/50 p-1">
          <div className="h-2 w-2 rounded-full bg-primary-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
