
import { useState, useEffect } from 'react';
import { Loader2, MessagesSquare } from 'lucide-react';

interface DiscordData {
  id: string;
  name: string;
  instant_invite: string;
  presence_count: number;
  members: {
    id: string;
    username: string;
    avatar: string;
    status: string;
  }[];
}

const DiscordWidget = () => {
  const [discordData, setDiscordData] = useState<DiscordData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDiscordData = async () => {
      try {
        setLoading(true);
        // Use the correct server ID for Dzu4THNpFj
        const response = await fetch('https://discord.com/api/guilds/1077696606667923626/widget.json');
        
        if (!response.ok) {
          throw new Error('Failed to fetch Discord data');
        }
        
        const data = await response.json();
        setDiscordData(data);
      } catch (err) {
        console.error('Error fetching Discord data:', err);
        setError('Não foi possível carregar o widget do Discord');
      } finally {
        setLoading(false);
      }
    };

    fetchDiscordData();
  }, []);

  if (loading) {
    return (
      <div className="bg-gaming-gray border border-gaming-light-gray rounded-lg p-5 h-[300px] flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-gaming-red animate-spin" />
      </div>
    );
  }

  if (error || !discordData) {
    return (
      <div className="bg-gaming-gray border border-gaming-light-gray rounded-lg p-5">
        <div className="flex items-center space-x-2 mb-4">
          <MessagesSquare className="h-6 w-6 text-gaming-red" />
          <h3 className="text-white font-bold">Discord</h3>
        </div>
        <div className="h-[200px] flex flex-col items-center justify-center">
          <p className="text-gray-400 text-center mb-4">
            {error || 'Widget temporariamente indisponível'}
          </p>
          <a 
            href="https://discord.gg/Dzu4THNpFj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="game-button text-sm py-2"
          >
            Entrar no Discord
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gaming-gray border border-gaming-light-gray rounded-lg p-5 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <MessagesSquare className="h-6 w-6 text-gaming-red" />
          <h3 className="text-white font-bold">{discordData.name}</h3>
        </div>
        <span className="bg-gaming-red text-white text-xs px-2 py-1 rounded-full">
          {discordData.presence_count} online
        </span>
      </div>
      
      <div className="space-y-3 mb-4 max-h-[180px] overflow-y-auto pr-2">
        {discordData.members.map((member) => (
          <div key={member.id} className="flex items-center space-x-2 bg-gaming-light-gray/50 p-2 rounded-md">
            <div className="relative">
              <img 
                src={member.avatar || '/placeholder.svg'} 
                alt={member.username} 
                className="w-8 h-8 rounded-full"
              />
              <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-gaming-gray ${
                member.status === 'online' ? 'bg-green-500' : 
                member.status === 'idle' ? 'bg-yellow-500' : 
                'bg-gray-500'
              }`}></span>
            </div>
            <span className="text-white text-sm truncate">{member.username}</span>
          </div>
        ))}
      </div>
      
      <a 
        href={discordData.instant_invite || "https://discord.gg/Dzu4THNpFj"} 
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
