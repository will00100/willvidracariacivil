import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  if (variant === "floating") {
    return (
      <button
        onClick={handleClick}
        className={`fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-bounce-subtle ${className}`}
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </button>
    );
  }

  if (variant === "hero") {
    return (
      <Button
        onClick={handleClick}
        variant="heroCta"
        size="xl"
        className={className}
      >
        <MessageCircle className="h-6 w-6" />
        {children || "Quero um Orçamento Rápido no WhatsApp"}
      </Button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      variant="whatsapp"
      size="lg"
      className={className}
    >
      <MessageCircle className="h-5 w-5" />
      {children || "Falar no WhatsApp"}
    </Button>
  );
};
