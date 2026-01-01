import { useState, useEffect, useRef } from "react";
import heroImage from "@/assets/hero-bathroom.jpg";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x: x * 20, y: y * 20 });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToServices = () => {
    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0 scale-110"
        style={{
          transform: `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5 + scrollY * 0.3}px, 0) scale(1.1)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <img
          src={heroImage}
          alt="Banheiro moderno com box de vidro temperado"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Gradient Overlay with Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30 z-[1]" />
      
      {/* Animated Particles/Shapes */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float"
          style={{ top: "10%", left: "60%", animationDelay: "0s" }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full bg-primary/15 blur-2xl animate-float"
          style={{ bottom: "20%", right: "70%", animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-sm px-4 py-2 mb-6 border border-primary/30"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.6s ease-out 0.2s forwards",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">Uberaba - MG</span>
          </div>

          {/* Headline */}
          <h1 
            className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl animate-fade-in-up"
          >
            Transforme sua Casa com a{" "}
            <span className="text-primary">Elegância</span> e{" "}
            <span className="text-primary">Segurança</span> do Vidro Temperado.
          </h1>

          {/* Subheadline */}
          <p 
            className="mb-8 text-lg text-primary-foreground/90 md:text-xl leading-relaxed"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.6s forwards",
            }}
          >
            Especialistas em Fechamento de Sacadas, Box de Banheiro e Espelhos.
            Instalação rápida, limpa e garantida.
          </p>

          {/* CTA */}
          <div 
            style={{
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.8s forwards",
            }}
          >
            <WhatsAppButton variant="hero" className="animate-pulse-glow" />
          </div>

          {/* Trust Indicators */}
          <div 
            className="mt-12 flex flex-wrap items-center gap-8 text-primary-foreground/70"
            style={{
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 1s forwards",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-primary-foreground">500+</span>
              <span className="text-sm">Projetos<br/>Realizados</span>
            </div>
            <div className="w-px h-10 bg-primary-foreground/30" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-primary-foreground">10+</span>
              <span className="text-sm">Anos de<br/>Experiência</span>
            </div>
            <div className="w-px h-10 bg-primary-foreground/30" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-primary-foreground">100%</span>
              <span className="text-sm">Garantia de<br/>Satisfação</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-pointer group"
      >
        <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Explorar
        </span>
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
          <ChevronDown className="h-8 w-8 animate-bounce relative z-10" />
        </div>
      </button>
    </section>
  );
};
