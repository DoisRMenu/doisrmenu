
import { Youtube, DiscordLogo, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gaming-darker pt-12 pb-6 border-t border-gaming-light-gray/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="DoisRMenuVendas" className="h-10 w-10" />
              <h3 className="text-white font-display font-bold text-xl">
                DoisR<span className="text-gaming-red">Menu</span>Vendas
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Produtos premium para elevar sua experiência em Rio Rise e Horizonte RP. 
              Scripts e contas com qualidade garantida.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://discord.gg/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gaming-gray flex items-center justify-center hover:bg-gaming-red transition-colors duration-300"
              >
                <DiscordLogo size={20} className="text-white" />
              </a>
              <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gaming-gray flex items-center justify-center hover:bg-gaming-red transition-colors duration-300"
              >
                <Phone size={20} className="text-white" />
              </a>
              <a 
                href="https://youtube.com/@doisrmods2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gaming-gray flex items-center justify-center hover:bg-gaming-red transition-colors duration-300"
              >
                <Youtube size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gaming-red transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/rio-rise" className="text-gray-400 hover:text-gaming-red transition-colors">
                  Rio Rise
                </Link>
              </li>
              <li>
                <Link to="/horizonte-rp" className="text-gray-400 hover:text-gaming-red transition-colors">
                  Horizonte RP
                </Link>
              </li>
              <li>
                <a 
                  href="https://youtube.com/@doisrmods2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gaming-red transition-colors"
                >
                  Canal YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <DiscordLogo size={20} className="text-gaming-red" />
                <span>Nosso Discord</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} className="text-gaming-red" />
                <span>WhatsApp</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Youtube size={20} className="text-gaming-red" />
                <span>@doisrmods2</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gaming-light-gray/20 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} DoisRMenuVendas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
