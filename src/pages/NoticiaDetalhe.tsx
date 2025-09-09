import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowLeft } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// shadcn/ui carousel
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const NoticiaDetalhes = () => {
    const { id } = useParams();
    const [noticia, setNoticia] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);


    useEffect(() => {
        if (!noticia || !noticia.imagens || noticia.imagens.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % noticia.imagens.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [noticia]);


    useEffect(() => {
        const fetchNoticia = async () => {
            const jaVisualizada = sessionStorage.getItem(`noticia_${id}`);
            const res = await fetch(
                `https://api-notion-lar.vercel.app/api/noticia?id=${id}${!jaVisualizada ? "&increment=true" : ""
                }`
            );
            const data = await res.json();
            setNoticia(data);

            if (!jaVisualizada) sessionStorage.setItem(`noticia_${id}`, "true");
            setLoading(false);
        };
        fetchNoticia();
    }, [id]);

    const getCategoriaColor = (categoria: string) => {
        switch (categoria) {
            case "Assistência Social":
                return "bg-blue-100 text-blue-800 hover:bg-blue-200";
            case "Campanhas":
                return "bg-green-100 text-green-800 hover:bg-green-200";
            case "Eventos":
                return "bg-purple-100 text-purple-800 hover:bg-purple-200";
            case "Prestação de Contas":
                return "bg-orange-100 text-orange-800 hover:bg-orange-200";
            case "Meio Ambiente":
                return "bg-emerald-100 text-emerald-800 hover:bg-emerald-200";
            case "Saúde":
                return "bg-red-100 text-red-800 hover:bg-red-200";
            case "Lazer":
                return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
            case "Atividades":
                return "bg-indigo-100 text-indigo-800 hover:bg-indigo-200";
            default:
                return "bg-gray-100 text-gray-800 hover:bg-gray-200";
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
            </div>
        );
    }
    if (!noticia)
        return (
            <div className="text-center p-12">
                <h1 className="text-2xl font-bold">Notícia não encontrada</h1>
                <Link to="/noticias">
                    <Button
                        variant="outline"
                        className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
                    </Button>
                </Link>
            </div>
        );

    return (
        <div className="container mx-auto px-4 pt-12 max-w-4xl">
            {/* Voltar */}
            <Link to="/noticias">
                <Button
                    variant="outline"
                    className="mb-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Notícias
                </Button>
            </Link>

            {noticia.imagens?.length > 0 && (
                <section className="relative mb-6 h-[400px] sm:h-[400px] overflow-hidden">
                    {noticia.imagens.map((img: string, idx: number) => (
                        <div
                            key={idx}
                            className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <img
                                src={img}
                                alt={`${noticia.titulo} - imagem ${idx + 1}`}
                                className="rounded-xl w-full max-h-[400px] object-cover"
                            />


                        </div>
                    ))}

                    {/* Botões de navegação */}
                    {noticia.imagens.length > 1 && (
                        <>
                            <button
                                onClick={() =>
                                    setCurrentSlide(
                                        currentSlide === 0
                                            ? noticia.imagens.length - 1
                                            : currentSlide - 1
                                    )
                                }
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                                aria-label="Slide anterior"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                            <button
                                onClick={() =>
                                    setCurrentSlide((currentSlide + 1) % noticia.imagens.length)
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                                aria-label="Próximo slide"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>

                            {/* Indicadores */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {noticia.imagens.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentSlide(idx)}
                                        className={`w-3 h-3 rounded-full transition-colors ${idx === currentSlide ? "bg-white" : "bg-white/50"
                                            }`}
                                        aria-label={`Ir para slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </section>
            )}

            {/* Cabeçalho */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    {noticia.titulo}
                </h1>
                <div className="flex items-center gap-6 text-muted-foreground text-sm mt-2">
                    <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {(() => {
                            const [ano, mes, dia] = noticia.data.split("-");
                            const data = new Date(
                                Number(ano),
                                Number(mes) - 1,
                                Number(dia)
                            );
                            return data.toLocaleDateString("pt-BR", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            });
                        })()}
                    </div>
                </div>
            </div>

            {/* Conteúdo */}
            <Card>
                <CardContent className="p-8">
                    <blockquote className="border-l-4 border-primary text-justify pl-4 italic text-muted-foreground mb-6">
                        {noticia.descricao}
                    </blockquote>
                    <div className="prose prose-lg text-justify max-w-none whitespace-pre-line">
                        {noticia.conteudo}
                    </div>
                    {/* Assinatura */}
                    <p className="text-right mt-8 text-muted-foreground font-medium italic">
                        - Equipe Lar Francisco Franco
                    </p>
                </CardContent>
            </Card>

            {/* Rodapé */}
            <div className="text-center mt-12 pt-8 border-t">
                <h3 className="text-xl font-semibold text-primary mb-4">
                    Gostou desta notícia?
                </h3>
                <p className="text-muted-foreground mb-6">
                    Acompanhe todas as novidades do Lar Francisco Franco
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/noticias">
                        <Button
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                            Ver Mais Notícias
                        </Button>
                    </Link>
                    <Link to="/fale-conosco">
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Entre em Contato
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NoticiaDetalhes;
