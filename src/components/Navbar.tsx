
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Youtube, DiscordLogo, Phone, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gaming-darker/95 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="DoisRMenuVendas" className="h-10 w-10" />
            <span className="text-white font-display font-bold text-xl">
              DoisR<span className="text-gaming-red">Menu</span>Vendas
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className={`menu-item ${location.pathname === '/' ? 'text-gaming-red before:w-full' : ''}`}>
              Início
            </Link>
            <Link 
              to="/rio-rise" 
              className={`menu-item ${location.pathname === '/rio-rise' ? 'text-gaming-red before:w-full' : ''}`}
            >
              Rio Rise
            </Link>
            <Link 
              to="/horizonte-rp" 
              className={`menu-item ${location.pathname === '/horizonte-rp' ? 'text-gaming-red before:w-full' : ''}`}
            >
              Horizonte RP
            </Link>
            <div className="relative group">
              <button className="menu-item flex items-center">
                Contato <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute hidden group-hover:block right-0 mt-2 w-48 bg-gaming-gray border border-gaming-light-gray rounded-md shadow-lg overflow-hidden z-50 animate-fade-in">
                <a 
                  href="https://discord.gg/" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center px-4 py-3 text-white hover:bg-gaming-light-gray transition-colors"
                >
                  <DiscordLogo className="mr-2 h-5 w-5 text-gaming-red" />
                  Discord
                </a>
                <a 
                  href="https://wa.me/" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center px-4 py-3 text-white hover:bg-gaming-light-gray transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5 text-gaming-red" />
                  WhatsApp
                </a>
                <a 
                  href="https://youtube.com/@doisrmods2" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center px-4 py-3 text-white hover:bg-gaming-light-gray transition-colors"
                >
                  <Youtube className="mr-2 h-5 w-5 text-gaming-red" />
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gaming-gray/95 backdrop-blur-lg animate-fade-in px-4 py-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-gaming-red transition-colors py-2 border-b border-gaming-light-gray">
              Início
            </Link>
            <Link to="/rio-rise" className="text-white hover:text-gaming-red transition-colors py-2 border-b border-gaming-light-gray">
              Rio Rise
            </Link>
            <Link to="/horizonte-rp" className="text-white hover:text-gaming-red transition-colors py-2 border-b border-gaming-light-gray">
              Horizonte RP
            </Link>
            <div className="py-2 border-b border-gaming-light-gray">
              <h3 className="text-gaming-red font-bold mb-2">Contatos</h3>
              <div className="flex space-x-4 mt-2">
                <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gaming-red">
                  <DiscordLogo size={24} />
                </a>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gaming-red">
                  <Phone size={24} />
                </a>
                <a href="https://youtube.com/@doisrmods2" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gaming-red">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
