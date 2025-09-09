import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SobreNos from "./pages/SobreNos";
import Noticias from "./pages/Noticias";
import Galeria from "./pages/Galeria";
import Doacoes from "./pages/Doacoes";
import FaleConosco from "./pages/FaleConosco";
import NotFound from "./pages/NotFound";
import NoticiaDetalhe from "./pages/NoticiaDetalhe";
import ScrollToTop from "./components/ScrollToTop";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sobre-nos" element={<SobreNos />} />
            <Route path="noticias" element={<Noticias />} />
            <Route path="/noticia/:id" element={<NoticiaDetalhe />} />
            <Route path="galeria" element={<Galeria />} />
            <Route path="doacoes" element={<Doacoes />} />
            <Route path="fale-conosco" element={<FaleConosco />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
