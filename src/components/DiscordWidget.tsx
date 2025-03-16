
import { MessagesSquare } from 'lucide-react';

const DiscordWidget = () => {
  return (
    <div className="bg-gaming-gray border border-gaming-light-gray rounded-lg p-5 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <MessagesSquare className="h-6 w-6 text-gaming-red" />
          <h3 className="text-white font-bold">Discord</h3>
        </div>
        <span className="bg-gaming-red text-white text-xs px-2 py-1 rounded-full">
          Comunidade
        </span>
      </div>
      
      <div className="space-y-4 mb-6 text-center">
        <img 
          src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" 
          alt="Discord Logo" 
          className="h-16 w-16 mx-auto"
        />
        <p className="text-white">Junte-se à nossa comunidade no Discord!</p>
        <p className="text-gray-400 text-sm">
          Tenha acesso a suporte técnico, atualizações e interaja com outros usuários
        </p>
      </div>
      
      <a 
        href="https://discord.gg/Dzu4THNpFj" 
        target="_blank" 
        rel="noopener noreferrer"
        className="game-button w-full flex items-center justify-center text-sm py-2"
      >
        <MessagesSquare className="h-5 w-5 mr-2" />
        Entrar no Discord
      </a>
    </div>
  );
};

export default DiscordWidget;
