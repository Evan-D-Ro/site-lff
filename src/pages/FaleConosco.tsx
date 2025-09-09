import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FaleConosco = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    mensagem: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples
    if (!formData.nomeCompleto || !formData.email || !formData.mensagem) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos do formulário.",
        variant: "destructive",
      });
      return;
    }

    // Simular envio
    toast({
      title: "Mensagem enviada!",
      description: "Recebemos sua mensagem e retornaremos em breve.",
    });

    // Limpar formulário
    setFormData({
      nomeCompleto: "",
      email: "",
      mensagem: ""
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Fale Conosco
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Entre em contato conosco. Estamos sempre dispostos a esclarecer dúvidas,
          receber sugestões e conhecer pessoas interessadas em apoiar nosso trabalho.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulário de Contato */}
        <Card className="hover:shadow-[var(--shadow-soft)] transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-primary">
              <Send className="h-6 w-6 mr-2 text-primary" />
              Envie sua Mensagem
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="nomeCompleto" className="text-foreground font-medium">
                  Nome Completo *
                </Label>
                <Input
                  id="nomeCompleto"
                  name="nomeCompleto"
                  type="text"
                  value={formData.nomeCompleto}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
                  className="mt-2 border-border focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground font-medium">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Digite seu e-mail"
                  className="mt-2 border-border focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div>
                <Label htmlFor="mensagem" className="text-foreground font-medium">
                  Mensagem *
                </Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  placeholder="Digite sua mensagem..."
                  className="mt-2 min-h-[120px] border-border focus:border-primary focus:ring-primary resize-vertical"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                variant="donate"
              >
                <Send className="mr-2 h-5 w-5 text-primary" />
                Enviar Mensagem
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Informações de Contato */}
        <div className="space-y-8">
          {/* Dados de Contato */}
          <Card className="hover:shadow-[var(--shadow-soft)] transition-all duration-300 h-full">
            <CardHeader>
              <CardTitle className="text-primary">Informações de Contato</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 flex flex-col justify-center min-h-[300px]">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[var(--gradient-hero)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Endereço</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Rua Mário César de Camargo, 1345<br />
                    Centro - Rancharia/SP<br />
                    CEP 19600-025
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[var(--gradient-hero)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Telefone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:1832651200" className="hover:text-primary transition-colors">
                      (18) 3265-1200
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[var(--gradient-hero)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">E-mail</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:larfranciscofranco@hotmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      larfranciscofranco@hotmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[var(--gradient-hero)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Horário de Atendimento</h3>
                  <p className="text-muted-foreground text-sm">
                    Segunda a sexta-feira<br />
                    07h00 às 17h00
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>

      {/* FAQ Rápido */}
      <div className="mt-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-primary">Perguntas Frequentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-primary mb-2">Como posso ser voluntário?</h4>
                <p className="text-muted-foreground text-sm">
                  Entre em contato conosco através do telefone ou e-mail.
                  Avaliamos as necessidades atuais e encontramos a melhor forma de você contribuir.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Quais tipos de doação vocês aceitam?</h4>
                <p className="text-muted-foreground text-sm">
                  Aceitamos doações em dinheiro, materiais escolares, roupas,
                  alimentos não perecíveis e equipamentos em bom estado.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Posso visitar a instituição?</h4>
                <p className="text-muted-foreground text-sm">
                  Sim! Agende uma visita através do nosso telefone.
                  Ficaremos felizes em mostrar nosso trabalho e nossas instalações.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Como funciona o acompanhamento das crianças?</h4>
                <p className="text-muted-foreground text-sm">
                  Oferecemos acompanhamento integral com equipe multidisciplinar,
                  incluindo educadores, psicólogos e assistentes sociais.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FaleConosco;