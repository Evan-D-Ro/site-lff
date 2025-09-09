import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Eye, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const ImageWithLoading = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full h-48 mb-4 rounded overflow-hidden bg-gray-200">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-100">
          <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-primary"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`object-cover w-full h-full transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextCursor, setNextCursor] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("");

  const CACHE_KEY = "noticiasCache";
  const CACHE_TTL = 10 * 60 * 1000; // 10 minutos

  const fetchNoticias = async (cursor = null, reset = false) => {
    try {
      if (cursor) setLoadingMore(true);
      else setLoading(true);

      const url = new URL("https://api-notion-lar.vercel.app/api/noticias");
      url.searchParams.append("limit", "6");
      if (cursor) url.searchParams.append("cursor", cursor);
      if (searchTerm) url.searchParams.append("search", searchTerm);
      if (categoriaFiltro) url.searchParams.append("categoria", categoriaFiltro);

      const res = await fetch(url.toString());
      const data = await res.json();

      if (reset) setNoticias(data.noticias);
      else if (cursor) setNoticias(prev => [...prev, ...data.noticias]);
      else setNoticias(data.noticias);

      setNextCursor(data.next_cursor);

      // só salva cache se não tiver filtros
      if (!searchTerm && !categoriaFiltro && !cursor) {
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            noticias: data.noticias,
            nextCursor: data.next_cursor,
            timestamp: Date.now(),
          })
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    // Se não tem filtros, tenta usar cache
    if (!searchTerm && !categoriaFiltro) {
      const cache = localStorage.getItem(CACHE_KEY);
      if (cache) {
        const parsed = JSON.parse(cache);
        const isExpired = Date.now() - parsed.timestamp > CACHE_TTL;

        if (!isExpired) {
          setNoticias(parsed.noticias);
          setNextCursor(parsed.nextCursor);
          setLoading(false);
          return; // evita chamada à API
        } else {
          localStorage.removeItem(CACHE_KEY);
        }
      }
    }

    // fallback: busca normal
    fetchNoticias(null, true);
  }, [searchTerm, categoriaFiltro]);


  const getCategoriaColor = (categoria) => {
    switch (categoria) {
      case "Assistência Social": return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "Campanhas": return "bg-green-100 text-green-800 hover:bg-green-200";
      case "Eventos": return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      case "Prestação de Contas": return "bg-orange-100 text-orange-800 hover:bg-orange-200";
      case "Meio Ambiente": return "bg-emerald-100 text-emerald-800 hover:bg-emerald-200";
      case "Saúde": return "bg-red-100 text-red-800 hover:bg-red-200";
      case "Lazer": return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      case "Atividades": return "bg-indigo-100 text-indigo-800 hover:bg-indigo-200";
      default: return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  const resetFilters = () => {
    setSearchTerm("");
    setCategoriaFiltro("");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Notícias</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          Acompanhe as últimas novidades, eventos e conquistas do Lar Francisco Franco - Casa das Meninas.
        </p>

        {/* Barra de busca e filtro */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <input
            type="text"
            placeholder="Buscar por título..."
            className="border rounded px-4 py-2 w-full md:w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="border rounded px-4 py-2 w-full md:w-1/4"
            value={categoriaFiltro}
            onChange={(e) => setCategoriaFiltro(e.target.value)}
          >
            <option value="">Todas categorias</option>
            <option value="Assistência Social">Assistência Social</option>
            <option value="Campanhas">Campanhas</option>
            <option value="Eventos">Eventos</option>
            <option value="Prestação de Contas">Prestação de Contas</option>
            <option value="Meio Ambiente">Meio Ambiente</option>
            <option value="Saúde">Saúde</option>
            <option value="Lazer">Lazer</option>
            <option value="Atividades">Atividades</option>
          </select>
        </div>
      </div>

      {/* Renderização de notícias */}
      {loading && noticias.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
        </div>
      ) : noticias.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground">
          <p className="text-lg mb-4">Nenhuma notícia encontrada 😔</p>
          {searchTerm || categoriaFiltro ? (
            <>
              <p>Tente limpar os filtros ou buscar por outro termo.</p>
              <Button onClick={resetFilters} variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Limpar Filtros
              </Button>
            </>
          ) : (
            <p>Volte mais tarde para conferir novas notícias.</p>
          )}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.map((noticia) => (
              <Card key={noticia.id} className="hover:shadow-[var(--shadow-soft)] transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex flex-wrap gap-1">
                      {(Array.isArray(noticia.categoria) ? noticia.categoria : noticia.categoria.split(",").map(c => c.trim())).map((cat) => (
                        <Badge key={cat} className={getCategoriaColor(cat)}>{cat}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Eye className="h-4 w-4 mr-1 text-primary" />
                      {noticia.visualizacoes}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight text-primary line-clamp-2">{noticia.titulo}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  {noticia.imagem && <ImageWithLoading src={noticia.imagem} alt={noticia.titulo} />}
                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">{noticia.descricao}</p>
                  <div className="mt-auto">
                    <div className="flex items-center text-muted-foreground text-sm mb-4">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {(() => {
                        const [ano, mes, dia] = noticia.data.split("-");
                        return `${dia}/${mes}/${ano}`;
                      })()}
                    </div>

                    <NavLink to={`/noticia/${noticia.id}`}>
                      <Button variant="outline" className="w-full group border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        Clique para ler mais
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform text-primary" />
                      </Button>
                    </NavLink>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {nextCursor && (
            <div className="text-center mt-8">
              <Button
                onClick={() => fetchNoticias(nextCursor)}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                disabled={loadingMore}
              >
                {loadingMore ? "Carregando..." : "Carregar Mais Notícias"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Noticias;
