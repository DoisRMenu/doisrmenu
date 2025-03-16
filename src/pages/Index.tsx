
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import GameCard from '../components/GameCard';
import DiscordWidget from '../components/DiscordWidget';
import { Youtube, DiscordLogo, Phone } from 'lucide-react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      
      <div id="content" className="container mx-auto px-4 py-16">
        <div className={`text-center mb-16 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2 text-white">
            Produtos <span className="text-gaming-red">Premium</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Eleve sua experiência de jogo com nossos produtos exclusivos para Rio Rise e Horizonte RP
          </p>
        </div>
        
        {/* Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className={isLoaded ? 'animate-slide-in' : 'opacity-0'} style={{ animationDelay: '200ms' }}>
            <GameCard
              title="Script Rio Rise"
              description="Menu completo com teleporte, vida, colete, armas e restauração de veículos. Melhore sua experiência no Rio Rise!"
              imageSrc="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              price="R$ 25,00"
              originalPrice="R$ 30,00"
              discount="-17%"
              linkTo="/rio-rise"
            />
          </div>
          
          <div className={isLoaded ? 'animate-slide-in' : 'opacity-0'} style={{ animationDelay: '300ms' }}>
            <GameCard
              title="Contas Horizonte RP"
              description="Contas full acesso com +10hrs de jogo, level 10+ e pronta para RPE PVP. Servidor 1 garantido!"
              imageSrc="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              price="R$ 5,00"
              linkTo="/horizonte-rp"
            />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className={`mb-20 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2 text-white">
              Por que <span className="text-gaming-red">nos escolher</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Oferecemos os melhores produtos com garantia de qualidade e suporte completo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gaming-gray p-6 rounded-lg border border-gaming-light-gray hover:border-gaming-red/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gaming-red/20 flex items-center justify-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gaming-red flex items-center justify-center">
                  <Youtube className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tutoriais em Vídeo</h3>
              <p className="text-gray-400">
                Acesse nosso canal no YouTube para tutoriais completos e dicas exclusivas.
              </p>
            </div>
            
            <div className="bg-gaming-gray p-6 rounded-lg border border-gaming-light-gray hover:border-gaming-red/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gaming-red/20 flex items-center justify-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gaming-red flex items-center justify-center">
                  <DiscordLogo className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Suporte via Discord</h3>
              <p className="text-gray-400">
                Suporte técnico rápido e eficiente através do nosso servidor no Discord.
              </p>
            </div>
            
            <div className="bg-gaming-gray p-6 rounded-lg border border-gaming-light-gray hover:border-gaming-red/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gaming-red/20 flex items-center justify-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gaming-red flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Atendimento WhatsApp</h3>
              <p className="text-gray-400">
                Atendimento personalizado via WhatsApp para esclarecer todas as suas dúvidas.
              </p>
            </div>
          </div>
        </div>
        
        {/* Discord + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className={`lg:col-span-2 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
            <div className="bg-gaming-gray p-8 rounded-lg border border-gaming-light-gray h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">
                  Pronto para elevar seu <span className="text-gaming-red">gameplay</span>?
                </h2>
                <p className="text-gray-400 mb-6">
                  Adquira agora mesmo nossos produtos premium e tenha uma experiência 
                  de jogo diferenciada em Rio Rise e Horizonte RP.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/rio-rise" className="game-button flex-1 text-center">
                  Scripts Rio Rise
                </a>
                <a href="/horizonte-rp" className="game-button flex-1 text-center">
                  Contas Horizonte RP
                </a>
              </div>
            </div>
          </div>
          
          <div className={isLoaded ? 'animate-fade-in' : 'opacity-0'} style={{ animationDelay: '600ms' }}>
            <DiscordWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
