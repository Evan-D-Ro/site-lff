import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { Heart, Users, Award, Shield, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-6 px-4 bg-[var(--gradient-hero)] text-primary-foreground ">
        <div className="container mx-auto text-center">
          <div className="align-center flex justify-center">
            <section className="py-6 px-4">
              <div className="container mx-auto">
                <div className="max-w-4xl mx-auto">
                  <img
                    src="/lovable-uploads/cc725601-fb09-4024-a5cb-406f08a68f8e.png"
                    alt="Fachada do Lar Francisco Franco - Casa das Meninas"
                    className="w-full h-56 md:h-64 object-cover rounded-2xl shadow-[var(--shadow-warm)]"
                  />
                </div>
              </div>
            </section>
          </div>
          <div className="max-w-4xl mx-auto text-primary">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-primary">
              Lar Francisco Franco
              <span className="block text-3xl md:text-4xl font-normal mt-2">
                Casa das Meninas
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary leading-relaxed">
              Instituição sem fins lucrativos de atendimento à criança e ao adolescente,
              com atuação no município de Rancharia/SP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="hero"
              >
                <NavLink to="/sobre-nos">
                  Conheça Nossa História
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <NavLink to="/doacoes">
                  <Heart className="mr-2 h-5 w-5" />
                  Fazer Doação
                </NavLink>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-foreground/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-xl"></div>
      </section>

      {/* Facility Image */}

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nossa Missão
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicamos nosso trabalho ao cuidado e desenvolvimento integral de crianças e adolescentes,
              oferecendo um ambiente seguro e acolhedor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-[var(--shadow-soft)] transition-all duration-300 border-accent">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[var(--gradient-hero)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Cuidado e Amor</h3>
                <p className="text-muted-foreground">
                  Oferecemos um ambiente acolhedor onde cada criança e adolescente
                  se sente em casa, cercada de carinho e atenção.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-[var(--shadow-soft)] transition-all duration-300 border-accent">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[var(--gradient-hero)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Desenvolvimento Social</h3>
                <p className="text-muted-foreground">
                  Promovemos atividades que estimulam o crescimento pessoal e
                  o desenvolvimento de habilidades sociais fundamentais.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-[var(--shadow-soft)] transition-all duration-300 border-accent">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[var(--gradient-hero)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Serviço de Qualidade</h3>
                <p className="text-muted-foreground">
                  Apoiamos o processo educacional e oferecemos atividades
                  complementares que enriquecem o aprendizado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[var(--gradient-warm)] border-b border-border">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Faça Parte Desta História
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Sua contribuição faz a diferença na vida de crianças e adolescentes.
              Juntos, podemos construir um futuro melhor para todos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="donate"
              >
                <NavLink to="/doacoes">
                  <Heart className="mr-2 h-5 w-5" />
                  Como Doar
                </NavLink>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <NavLink to="/fale-conosco">
                  Fale Conosco
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;