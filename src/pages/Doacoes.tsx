import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Heart, CreditCard, Building, Users, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Doacoes = () => {
  const { toast } = useToast();

  const dadosInstituicao = {
    razaoSocial: "Lar Francisco Franco - Casa das Meninas",
    cnpj: "12.345.678/0001-90",
    endereco: "Rua Mário César de Camargo, 1345 - Centro - Rancharia/SP - CEP 19600-025",
    telefone: "(18) 3265-1200",
    email: "larfranciscofranco@hotmail.com",
    banco: "Banco do Brasil",
    agencia: "1234-5",
    conta: "12345-6",
    pix: "larfranciscofranco@hotmail.com"
  };

  const copyToClipboard = (texto: string, tipo: string) => {
    navigator.clipboard.writeText(texto);
    toast({
      title: "Copiado!",
      description: `${tipo} copiado para a área de transferência.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Como Doar
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Sua doação faz a diferença na vida de crianças e adolescentes. 
          Conheça as formas de contribuir com o Lar Francisco Franco - Casa das Meninas.
        </p>
      </div>

      {/* Formas de Doação */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="text-center hover:shadow-[var(--shadow-soft)] transition-all duration-300">
          <CardHeader>
            <div className="w-16 h-16 bg-[var(--gradient-hero)] rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-primary">Doação em Dinheiro</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Contribua diretamente via PIX, transferência bancária ou depósito.
            </p>
            <p className="text-sm text-primary font-medium">
              Toda quantia é bem-vinda!
            </p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-[var(--shadow-soft)] transition-all duration-300">
          <CardHeader>
            <div className="w-16 h-16 bg-[var(--gradient-hero)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-primary">Doação de Materiais</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Materiais escolares, roupas, brinquedos, alimentos não perecíveis.
            </p>
            <p className="text-sm text-primary font-medium">
              Entre em contato para saber nossas necessidades atuais.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-[var(--shadow-soft)] transition-all duration-300">
          <CardHeader>
            <div className="w-16 h-16 bg-[var(--gradient-hero)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-primary">Trabalho Voluntário</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Doe seu tempo e conhecimento. Sempre precisamos de voluntários.
            </p>
            <p className="text-sm text-primary font-medium">
              Profissionais de diversas áreas são bem-vindos!
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Dados para Doação */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* PIX */}
        <Card className="hover:shadow-[var(--shadow-soft)] transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-primary">
              <CreditCard className="h-6 w-6 mr-2 text-primary" />
              Doação via PIX
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-[var(--gradient-warm)] rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-2">Chave PIX (E-mail):</p>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-primary font-medium break-all">
                    {dadosInstituicao.pix}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(dadosInstituicao.pix, "Chave PIX")}
                    className="ml-2 flex-shrink-0"
                  >
                    <Copy className="h-4 w-4 text-primary" />
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Escaneie o QR Code ou copie a chave PIX para fazer sua doação de forma rápida e segura.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Dados Bancários */}
        <Card className="hover:shadow-[var(--shadow-soft)] transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-primary">
              <Building className="h-6 w-6 mr-2 text-primary" />
              Dados Bancários
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Banco:</p>
                <p className="font-medium">{dadosInstituicao.banco}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Agência:</p>
                  <div className="flex items-center">
                    <p className="font-medium mr-2">{dadosInstituicao.agencia}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(dadosInstituicao.agencia, "Agência")}
                    >
                      <Copy className="h-3 w-3 text-primary" />
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Conta:</p>
                  <div className="flex items-center">
                    <p className="font-medium mr-2">{dadosInstituicao.conta}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(dadosInstituicao.conta, "Conta")}
                    >
                      <Copy className="h-3 w-3 text-primary" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Dados da Instituição */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-center text-primary">Dados da Instituição</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Razão Social:</p>
                <p className="font-medium">{dadosInstituicao.razaoSocial}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">CNPJ:</p>
                <div className="flex items-center">
                  <p className="font-medium mr-2">{dadosInstituicao.cnpj}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(dadosInstituicao.cnpj, "CNPJ")}
                  >
                    <Copy className="h-3 w-3 text-primary" />
                  </Button>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Telefone:</p>
                <p className="font-medium">{dadosInstituicao.telefone}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">E-mail:</p>
                <p className="font-medium">{dadosInstituicao.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Endereço:</p>
                <p className="font-medium text-sm leading-relaxed">{dadosInstituicao.endereco}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Necessidades */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-center text-primary">Nossas Necessidades Atuais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-primary mb-3">Materiais Escolares</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Cadernos e papel A4</li>
                <li>• Lápis, canetas e borrachas</li>
                <li>• Material de arte</li>
                <li>• Mochilas e estojos</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-3">Roupas e Calçados</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Roupas infantis e juvenis</li>
                <li>• Uniformes escolares</li>
                <li>• Calçados esportivos</li>
                <li>• Roupas de banho</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-3">Outros Itens</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Produtos de higiene</li>
                <li>• Alimentos não perecíveis</li>
                <li>• Equipamentos esportivos</li>
                <li>• Instrumentos musicais</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="bg-[var(--gradient-hero)] rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
        <h2 className="text-3xl font-bold mb-4">
          Transforme Vidas com Sua Doação
        </h2>
        <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          Cada contribuição, por menor que seja, faz uma diferença significativa 
          na vida de nossas crianças e adolescentes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="donate"
          >
            <Heart className="mr-2 h-5 w-5 text-primary" />
            Fazer Doação Agora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Falar com Nossa Equipe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Doacoes;