import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/sobre-nos", label: "Sobre Nós" },
    { href: "/noticias", label: "Notícias" },
    { href: "/galeria", label: "Galeria" },
    { href: "/doacoes", label: "Doações" },
    { href: "/fale-conosco", label: "Fale Conosco" },
  ];

  return (
    <header className="bg-card shadow-[var(--shadow-soft)] sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[var(--gradient-hero)] rounded-full flex items-center justify-center">
              <img src="/logo.png" className="h-14 w-12 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Lar Francisco Franco</h1>
              <p className="text-xs text-muted-foreground">Casa das Meninas</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `transition-all duration-300 hover:text-primary ${isActive ? "text-primary font-medium" : "text-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Donate Button */}
          <div className="hidden md:block">
            <Button
              asChild
              variant="donate"
            >
              <NavLink to="/doacoes">
                <Heart className="h-4 w-4 mr-2" />
                Doar Agora
              </NavLink>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition-all duration-300 ${isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button
                asChild
                variant="donate"
                className="mx-4 mt-2"
              >
                <NavLink to="/doacoes" onClick={() => setIsMenuOpen(false)}>
                  <Heart className="h-4 w-4 mr-2 text-primary" />
                  Doar Agora
                </NavLink>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;