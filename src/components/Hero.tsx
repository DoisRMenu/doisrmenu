
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToContent = () => {
    const contentElement = document.getElementById('content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gaming-darker">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gaming-red/10 rounded-full filter blur-[100px] animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-gaming-red/5 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 tracking-tight text-white">
            DoisR<span className="text-gaming-red">Menu</span>Vendas
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Produtos premium para <span className="text-gaming-red font-semibold">Rio Rise</span> e <span className="text-gaming-red font-semibold">Horizonte RP</span>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a href="/rio-rise" className="game-button">
              Rio Rise Scripts
            </a>
            <a href="/horizonte-rp" className="game-button">
              Horizonte RP Contas
            </a>
          </div>
          
          <div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
            onClick={scrollToContent}
          >
            <ChevronDown className="h-8 w-8 text-gaming-red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
