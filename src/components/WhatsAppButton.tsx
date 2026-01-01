import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const WHATSAPP_NUMBER = "5534996470196";
const WHATSAPP_MESSAGE = "Olá! Gostaria de solicitar um orçamento.";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  variant?: "floating" | "inline" | "hero";
  children?: React.ReactNode;
}

export const WhatsAppButton = ({
  message = WHATSAPP_MESSAGE,
  className = "",
  variant = "inline",
  children,
}: WhatsAppButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  if (variant === "floating") {
    return (
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-whatsapp text-primary-foreground shadow-xl transition-all duration-300 hover:shadow-2xl ${
          isHovered ? "pr-6 pl-4" : "p-4"
        } ${className}`}
        aria-label="Contato via WhatsApp"
        style={{
          boxShadow: "0 4px 20px hsl(142 70% 45% / 0.4)",
        }}
      >
        <div className="relative">
          <MessageCircle className="h-7 w-7" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary-foreground rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary-foreground rounded-full" />
        </div>
        <span 
          className={`font-semibold whitespace-nowrap transition-all duration-300 ${
            isHovered ? "opacity-100 max-w-40" : "opacity-0 max-w-0"
          } overflow-hidden`}
        >
          Fale Conosco
        </span>
      </button>
    );
  }

  if (variant === "hero") {
    return (
      <Button
        onClick={handleClick}
        variant="heroCta"
        size="xl"
        className={`group ${className}`}
      >
        <MessageCircle className="h-6 w-6 transition-transform group-hover:scale-110" />
        {children || "Quero um Orçamento Rápido no WhatsApp"}
      </Button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      variant="whatsapp"
      size="lg"
      className={`group ${className}`}
    >
      <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
      {children || "Falar no WhatsApp"}
    </Button>
  );
};
