import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Target, Eye, Heart, Users } from "lucide-react";

const SobreNos = () => {
  const diretoria = [
    { nome: "Maria Silva", cargo: "Presidente", iniciais: "MS" },
    { nome: "João Santos", cargo: "Vice-Presidente", iniciais: "JS" },
    { nome: "Ana Costa", cargo: "Secretária", iniciais: "AC" },
    { nome: "Carlos Oliveira", cargo: "Tesoureiro", iniciais: "CO" },
  ];

  const equipe = [
    { nome: "Lucia Pereira", cargo: "Coordenadora Pedagógica", iniciais: "LP" },
    { nome: "Roberto Lima", cargo: "Educador Social", iniciais: "RL" },
    { nome: "Fernanda Dias", cargo: "Psicóloga", iniciais: "FD" },
    { nome: "Paulo Mendes", cargo: "Assistente Social", iniciais: "PM" },
    { nome: "Márcia Rocha", cargo: "Cuidadora", iniciais: "MR" },
    { nome: "José Ferreira", cargo: "Instrutor de Natação", iniciais: "JF" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Sobre Nós
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Conheça mais sobre nossa história, missão e as pessoas que fazem parte
          do
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Lar Francisco Franco - Casa das Meninas.</p>
      </div>

      {/* Missão, Visão e Valores */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Missão, Visão e Valores
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-[var(--shadow-soft)] transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-[var(--gradient-hero)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-primary">Missão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Proporcionar um ambiente seguro, acolhedor e educativo para crianças
                e adolescentes em situação de vulnerabilidade social, promovendo seu
                desenvolvimento integral e preparando-as para uma vida autônoma e cidadã.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-[var(--shadow-soft)] transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-[var(--gradient-hero)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-primary">Visão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ser referência em atendimento socioeducativo na região, reconhecida
                pela excelência no cuidado e desenvolvimento de crianças e adolescentes,
                contribuindo para a construção de uma sociedade mais justa e solidária.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-[var(--shadow-soft)] transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-[var(--gradient-hero)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-primary">Valores</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground text-center space-y-2">
                <li>Amor e cuidado incondicional</li>
                <li>Respeito à dignidade humana</li>
                <li>Transparência e ética</li>
                <li>Comprometimento social</li>
                <li>Desenvolvimento integral</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Diretoria */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Diretoria
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diretoria.map((membro, index) => (
            <Card key={index} className="text-center hover:shadow-[var(--shadow-soft)] transition-all duration-300">
              <CardContent className="p-6">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="bg-[var(--gradient-hero)] text-primary text-lg font-semibold">
                    {membro.iniciais}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-primary mb-1">{membro.nome}</h3>
                <p className="text-muted-foreground text-sm">{membro.cargo}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Equipe */}
      <section>
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Nossa Equipe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipe.map((membro, index) => (
            <Card key={index} className="text-center hover:shadow-[var(--shadow-soft)] transition-all duration-300">
              <CardContent className="p-6">
                <Avatar className="w-16 h-16 mx-auto mb-4">
                  <AvatarFallback className="bg-[var(--gradient-accent)] text-foreground text-sm font-semibold">
                    {membro.iniciais}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-primary mb-1">{membro.nome}</h3>
                <p className="text-muted-foreground text-sm">{membro.cargo}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* História */}
      <section className="mt-16 bg-[var(--gradient-warm)] rounded-2xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Nossa História</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-justify">
            O Lar Francisco Franco - Casa das Meninas foi fundado com o propósito de oferecer
            um lar seguro e acolhedor para crianças e adolescentes em situação de vulnerabilidade
            social no município de Rancharia/SP.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-justify">
            Ao longo dos anos, nossa instituição tem se dedicado a proporcionar não apenas
            abrigo, mas também educação, cuidados de saúde, atividades esportivas e culturais,
            sempre com foco no desenvolvimento integral de nossos assistidos.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed text-justify">
            Hoje, continuamos firmes em nossa missão de transformar vidas e construir
            um futuro melhor para cada criança e adolescente que passa por nossa casa,
            contando sempre com o apoio da comunidade e de parceiros que acreditam em nosso trabalho.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SobreNos;