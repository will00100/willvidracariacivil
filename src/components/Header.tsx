import { useState, useEffect } from "react";
import logo from "@/assets/logo-vidracaria.png";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 shadow-lg backdrop-blur-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={logo}
            alt="Vidraçaria Civil"
            className={`transition-all duration-300 ${isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"}`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-full ${
                  isScrolled
                    ? isActive
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                    : isActive
                    ? "text-primary"
                    : "text-primary-foreground hover:text-primary"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </a>
            );
          })}
          <WhatsAppButton className="ml-4">
            Orçamento
          </WhatsAppButton>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isScrolled 
              ? "text-foreground hover:bg-muted" 
              : "text-primary-foreground hover:bg-primary-foreground/10"
          }`}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`absolute left-0 right-0 top-full bg-background shadow-xl lg:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="container mx-auto flex flex-col gap-2 px-6 py-6">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-foreground transition-all duration-300 hover:text-primary py-3 px-4 rounded-lg hover:bg-muted"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-20px)",
                transition: `all 0.3s ease ${index * 0.05}s`,
              }}
            >
              {link.label}
            </a>
          ))}
          <WhatsAppButton className="mt-4 w-full justify-center">
            Orçamento via WhatsApp
          </WhatsAppButton>
        </nav>
      </div>
    </header>
  );
};
