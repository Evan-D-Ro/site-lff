import { Heart, Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card mt-10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informações da Instituição */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[var(--gradient-hero)] rounded-full flex items-center justify-center">
                <img src="logo.png" className="h-14 w-12 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">Lar Francisco Franco</h3>
                <p className="text-sm text-muted-foreground">Casa das Meninas</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Acompanhe nosso trabalho em nossas redes sociais e fique por dentro das novidades.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/larffranco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors"
              >
                <Instagram className="h-5 w-5 text-primary-foreground" />
              </a>
              <a
                href="https://facebook.com/larffranco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors"
              >
                <Facebook className="h-5 w-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { href: "/sobre-nos", label: "Sobre Nós" },
                { href: "/noticias", label: "Notícias" },
                { href: "/galeria", label: "Galeria" },
                { href: "/doacoes", label: "Doações" },
                { href: "/fale-conosco", label: "Fale Conosco" },
              ].map((link) => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground text-sm">
                    Rua Mário César de Camargo, 1345<br />
                    Centro - Rancharia/SP<br />
                    CEP 19600-025
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <p className="text-muted-foreground">(18) 3265-1200</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <p className="text-muted-foreground">larfranciscofranco@hotmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-muted-foreground text-sm">
                    Segunda a sexta<br />
                    07h00 às 17h00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-4 pt-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Lar Francisco Franco - Casa das Meninas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;