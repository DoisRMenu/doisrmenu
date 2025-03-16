
import { useState, useEffect } from 'react';
import MenuFeatures from '../components/MenuFeatures';
import ContactButtons from '../components/ContactButtons';
import FeatureList from '../components/FeatureList';
import { ArrowDown, AlertCircle } from 'lucide-react';

const RioRise = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const menuCategories = [
    {
      title: "MENU DE TELEPORTE",
      features: [
        "Farm Obra (Reduzido)",
        "TP Obra",
        "Igreja",
        "Montagem de Pneu",
        "Concessionária Económica",
        "Concessionária Média"
      ]
    },
    {
      title: "MENU DE VIDA",
      features: [
        "Regeneração",
        "200 de Vida",
        "150 de Vida",
        "100 de Vida",
        "20 de Vida",
        "0 de Vida"
      ]
    },
    {
      title: "MENU DE COLETE",
      features: [
        "150 de Proteção",
        "100 de Proteção",
        "Sem Colete"
      ]
    },
    {
      title: "MENU DE ARMAS",
      features: [
        "Desert Eagle",
        "Escopeta (Doze)",
        "MP5",
        "M4",
        "AK-47",
        "Lança-Foguetes (Bazuca)"
      ]
    },
    {
      title: "RESTAURAR VEICULO",
      features: [
        "Restauração de carros"
      ]
    }
  ];

  const scriptFeatures = [
    "Ativação instantânea",
    "Acesso por 3 dias",
    "Suporte direto via Discord e WhatsApp",
    "Tutorial de instalação",
    "Atualizações incluídas",
    "Menu intuitivo e fácil de usar"
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <div className="relative bg-gaming-darker py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gaming-red/10 rounded-full filter blur-[100px] animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="inline-block px-4 py-1 bg-gaming-red/20 text-gaming-red rounded-full text-sm font-medium mb-4">
              PROMOÇÃO: DE R$ 30,00 POR R$ 25,00
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
              Script Premium <span className="text-gaming-red">Rio Rise</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              O menu completo para elevar sua experiência no Rio Rise com recursos exclusivos
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
                Recursos <span className="text-gaming-red">Inclusos</span>
              </h2>
              
              <FeatureList 
                features={scriptFeatures}
                className="mb-8"
              />
              
              <div className="bg-gaming-red/10 border border-gaming-red/30 rounded-lg p-4 mb-8 flex gap-3">
                <AlertCircle className="h-6 w-6 text-gaming-red shrink-0" />
                <p className="text-gray-300 text-sm">
                  <span className="font-bold text-white">Promoção por tempo limitado:</span> Script de 3 dias com todos os recursos listados abaixo por apenas <span className="font-bold text-gaming-red">R$ 25,00</span> (preço normal: R$ 30,00).
                </p>
              </div>
              
              <p className="text-gray-300 mb-6">
                Nosso script premium para Rio Rise oferece um menu completo com recursos de teleporte, vida, colete, armas e restauração de veículos. Tudo em uma interface intuitiva e fácil de utilizar, projetada para melhorar sua experiência de jogo.
              </p>
              
              <p className="text-gray-300">
                Com este script, você terá acesso a todos os recursos por 3 dias completos, sem limitações. Oferecemos suporte via Discord e WhatsApp para ajudar com a instalação e qualquer dúvida que possa surgir.
              </p>
            </div>
            
            <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-white">
                Recursos do <span className="text-gaming-red">Menu</span>
              </h2>
              <MenuFeatures categories={menuCategories} />
            </div>
          </div>
          
          {/* Right Content - Price and Buy */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className={`sticky top-24 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
              <div className="animated-border">
                <div className="relative bg-gaming-gray rounded-lg border border-gaming-light-gray p-6 z-10">
                  <div className="absolute -top-4 right-4 bg-gaming-red text-white text-sm font-bold px-4 py-1 rounded-full">
                    -17%
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">Script 3 Dias</h3>
                  <p className="text-gray-400 mb-4">
                    Acesso completo a todos os recursos por 3 dias
                  </p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold text-gaming-red">R$ 25,00</span>
                    <span className="ml-2 text-gray-500 line-through">R$ 30,00</span>
                  </div>
                  
                  <div className="bg-gaming-light-gray rounded-lg p-4 mb-6">
                    <h4 className="text-white font-bold mb-2">O que está incluso:</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gaming-red rounded-full"></span>
                        Menu de Teleporte
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gaming-red rounded-full"></span>
                        Menu de Vida
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gaming-red rounded-full"></span>
                        Menu de Colete
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gaming-red rounded-full"></span>
                        Menu de Armas
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gaming-red rounded-full"></span>
                        Restauração de Veículos
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

export default RioRise;
