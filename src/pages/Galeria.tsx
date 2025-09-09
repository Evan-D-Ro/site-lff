import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Filter } from "lucide-react";

const Galeria = () => {
  const [filtroAtivo, setFiltroAtivo] = useState("Todas");

  const categorias = ["Todas", "Natação", "Projetos Meio Ambiente", "Atividades Esportivas", "Criatividade", "Projeto GURI"];

  const fotos = [
    {
      id: 1,
      titulo: "Aula de Natação - Turma Iniciante",
      categoria: "Natação",
      descricao: "Crianças aprendendo os primeiros movimentos na piscina",
    },
    {
      id: 2,
      titulo: "Plantio de Mudas no Jardim",
      categoria: "Projetos Meio Ambiente",
      descricao: "Atividade de conscientização ambiental",
    },
    {
      id: 3,
      titulo: "Campeonato de Futebol Interno",
      categoria: "Atividades Esportivas",
      descricao: "Competição esportiva entre os grupos da casa",
    },
    {
      id: 4,
      titulo: "Oficina de Pintura e Arte",
      categoria: "Criatividade",
      descricao: "Desenvolvimento artístico e criativo",
    },
    {
      id: 5,
      titulo: "Apresentação Musical - Violão",
      categoria: "Projeto GURI",
      descricao: "Recital dos alunos de música",
    },
    {
      id: 6,
      titulo: "Competição de Natação Regional",
      categoria: "Natação",
      descricao: "Participação em campeonato regional",
    },
    {
      id: 7,
      titulo: "Horta Comunitária",
      categoria: "Projetos Meio Ambiente",
      descricao: "Cultivo de alimentos orgânicos",
    },
    {
      id: 8,
      titulo: "Festival de Dança",
      categoria: "Atividades Esportivas",
      descricao: "Apresentação de coreografias criadas pelas crianças",
    },
    {
      id: 9,
      titulo: "Exposição de Trabalhos Manuais",
      categoria: "Criatividade",
      descricao: "Mostra dos trabalhos artesanais produzidos",
    },
  ];

  const fotosFiltradas = filtroAtivo === "Todas" 
    ? fotos 
    : fotos.filter(foto => foto.categoria === filtroAtivo);

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case "Natação": return "bg-blue-100 text-blue-800";
      case "Projetos Meio Ambiente": return "bg-green-100 text-green-800";
      case "Atividades Esportivas": return "bg-orange-100 text-orange-800";
      case "Criatividade": return "bg-purple-100 text-purple-800";
      case "Projeto GURI": return "bg-pink-100 text-pink-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Galeria de Fotos
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Confira os momentos especiais e atividades desenvolvidas no 
          Lar Francisco Franco - Casa das Meninas.
        </p>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <Filter className="h-5 w-5 text-primary mt-2.5" />
        {categorias.map((categoria) => (
          <Button
            key={categoria}
            variant={filtroAtivo === categoria ? "default" : "outline"}
            onClick={() => setFiltroAtivo(categoria)}
            className={filtroAtivo === categoria 
              ? "bg-[var(--gradient-hero)] text-primary-foreground" 
              : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            }
          >
            {categoria}
          </Button>
        ))}
      </div>

      {/* Grid de Fotos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fotosFiltradas.map((foto) => (
          <Card key={foto.id} className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-all duration-300 group">
            {/* Placeholder da Imagem */}
            <div className="relative h-64 bg-[var(--gradient-warm)] flex items-center justify-center overflow-hidden">
              <Camera className="h-16 w-16 text-primary" />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
              
              {/* Badge da Categoria */}
              <Badge className={`absolute top-4 left-4 ${getCategoriaColor(foto.categoria)}`}>
                {foto.categoria}
              </Badge>
            </div>
            
            {/* Conteúdo */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-primary mb-2 line-clamp-2">
                {foto.titulo}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {foto.descricao}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Informativo sobre as fotos */}
      {fotosFiltradas.length === 0 && (
        <div className="text-center py-12">
          <Camera className="h-16 w-16 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">
            Nenhuma foto encontrada
          </h3>
          <p className="text-muted-foreground">
            Não há fotos disponíveis para a categoria selecionada.
          </p>
        </div>
      )}

      {/* Contador de fotos */}
      <div className="text-center mt-12">
        <p className="text-muted-foreground">
          Mostrando {fotosFiltradas.length} de {fotos.length} fotos
          {filtroAtivo !== "Todas" && ` na categoria "${filtroAtivo}"`}
        </p>
      </div>

      {/* CTA */}
      <div className="bg-[var(--gradient-warm)] rounded-2xl p-8 mt-16 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Acompanhe Nosso Dia a Dia
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Siga nossas redes sociais para ver mais fotos e vídeos das atividades 
          e momentos especiais das crianças e adolescentes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            variant="donate"
          >
            <a href="https://instagram.com/larffranco" target="_blank" rel="noopener noreferrer">
              Siga no Instagram
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a href="https://facebook.com/larffranco" target="_blank" rel="noopener noreferrer">
              Curta no Facebook
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Galeria;