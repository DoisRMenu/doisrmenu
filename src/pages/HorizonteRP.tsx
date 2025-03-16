
import { useState, useEffect } from 'react';
import ContactButtons from '../components/ContactButtons';
import FeatureList from '../components/FeatureList';
import { ArrowDown, Gift } from 'lucide-react';

const HorizonteRP = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const accountFeatures = [
    "CONTAS FULL ACESSO",
    "CONTAS COM +10HRS DE JOGO",
    "CONTAS LEVEL 10+",
    "CONTAS BOA PRA FAZER RPE PVP",
    "CONTAS NO SERVIDOR 1",
    "PODE TROCAR SENHA",
    "CHANCES DE VIM COM HZ COIN"
  ];

  const benefitFeatures = [
    "Contas verificadas e testadas",
    "Acesso imediato após a compra",
    "Garantia de funcionamento",
    "Suporte pós-venda",
    "Preço acessível"
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <div className="relative bg-gaming-darker py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-gaming-red/10 rounded-full filter blur-[100px] animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
              Contas Premium <span className="text-gaming-red">Horizonte RP</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Contas full acesso para você começar a jogar Horizonte RP com vantagens exclusivas
            </p>
            
            <div className="flex justify-center">
              <a 
                href="#features" 
                className="flex items-center gap-2 px-6 py-3 bg-gaming-red/20 text-gaming-red rounded-full hover:bg-gaming-red/30 transition-colors"
              >
                Ver recursos
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Content - Features and Description */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div id="features" className={`mb-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-white">
                Características das <span className="text-gaming-red">Contas</span>
              </h2>
              
              <FeatureList 
                features={accountFeatures}
                className="mb-8"
              />
              
              <div className="bg-gaming-red/10 border border-gaming-red/30 rounded-lg p-4 mb-8 flex gap-3">
                <Gift className="h-6 w-6 text-gaming-red shrink-0" />
                <p className="text-gray-300 text-sm">
                  <span className="font-bold text-white">Bônus exclusivo:</span> Utilizando /indicação você ganha VIP de 15 dias e uma moto de inventário.
                </p>
              </div>
              
              <p className="text-gray-300 mb-6">
                Nossas contas para Horizonte RP são full acesso, permitindo que você altere as informações conforme sua preferência. Todas as contas possuem mais de 10 horas de jogo e level 10+, ideais para quem quer começar com vantagens.
              </p>
              
              <p className="text-gray-300">
                As contas estão no Servidor 1, que é o mais popular, e são ótimas para RPE e PVP. Algumas contas podem vir com HZ Coin como bônus adicional. Aproveite também o sistema de indicação para ganhar um VIP de 15 dias e uma moto no inventário.
              </p>
            </div>
            
            <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-white">
                Benefícios <span className="text-gaming-red">Exclusivos</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <FeatureList features={benefitFeatures} />
                
                <div className="bg-gaming-gray rounded-lg border border-gaming-light-gray p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Como Funciona?</h3>
                  
                  <ol className="space-y-4 text-gray-300">
                    <li className="flex">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gaming-red flex items-center justify-center text-white font-bold mr-3">1</span>
                      <p>Entre em contato via Discord ou WhatsApp</p>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gaming-red flex items-center justify-center text-white font-bold mr-3">2</span>
                      <p>Realize o pagamento pelo método combinado</p>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gaming-red flex items-center justify-center text-white font-bold mr-3">3</span>
                      <p>Receba os dados da conta imediatamente</p>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gaming-red flex items-center justify-center text-white font-bold mr-3">4</span>
                      <p>Comece a jogar com todas as vantagens!</p>
                    </li>
                  </ol>
                </div>
              </div>
              
              <div className="bg-gaming-gray rounded-lg border border-gaming-light-gray p-6">
                <h3 className="text-xl font-bold text-white mb-4">FAQ - Perguntas Frequentes</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-gaming-red font-bold mb-1">As contas são realmente full acesso?</h4>
                    <p className="text-gray-300">Sim, você terá controle total sobre a conta, podendo alterar senha e outras informações.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gaming-red font-bold mb-1">Como recebo a conta após a compra?</h4>
                    <p className="text-gray-300">Após confirmarmos o pagamento, enviaremos os dados da conta via Discord ou WhatsApp, conforme sua preferência.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gaming-red font-bold mb-1">Existe garantia para as contas?</h4>
                    <p className="text-gray-300">Sim, oferecemos garantia de funcionamento. Se houver qualquer problema, entre em contato conosco para resolvermos.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gaming-red font-bold mb-1">Posso trocar a conta caso não goste?</h4>
                    <p className="text-gray-300">Não oferecemos trocas por insatisfação, mas garantimos que todas as contas seguem as especificações descritas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Price and Buy */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className={`sticky top-24 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
              <div className="animated-border">
                <div className="relative bg-gaming-gray rounded-lg border border-gaming-light-gray p-6 z-10">
                  <h3 className="text-xl font-bold text-white mb-2">Horizonte Contas</h3>
                  <p className="text-gray-400 mb-4">
                    Contas full acesso com todas as vantagens
                  </p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold text-gaming-red">R$ 5,00</span>
                    <span className="ml-2 text-sm text-gray-400">por conta</span>
                  </div>
                  
                  <div className="bg-gaming-light-gray rounded-lg p-4 mb-6">
                    <h4 className="text-white font-bold mb-2">O que está incluso:</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gaming-red rounded-full"></span>
                        Conta Full Acesso
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gaming-red rounded-full"></span>
                        +10 Horas de Jogo
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gaming-red rounded-full"></span>
                        Level 10+
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gaming-red rounded-full"></span>
                        Servidor 1
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gaming-red rounded-full"></span>
                        Chance de HZ Coin
                      </li>
                    </ul>
                  </div>
                  
                  <h4 className="text-white font-medium mb-2">Para comprar, entre em contato:</h4>
                  <ContactButtons 
                    discordLink="https://discord.gg/"
                    whatsappLink="https://wa.me/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizonteRP;
