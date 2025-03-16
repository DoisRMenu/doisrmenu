
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gaming-red/20 flex items-center justify-center">
            <AlertTriangle className="h-10 w-10 text-gaming-red" />
          </div>
        </div>
        
        <h1 className="text-5xl font-display font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-gaming-red font-medium mb-2">Página não encontrada</p>
        <p className="text-gray-400 mb-8">
          A página que você está procurando não existe ou foi movida para outro endereço.
        </p>
        
        <Link 
          to="/" 
          className="game-button inline-flex items-center justify-center gap-2"
        >
          <Home className="h-5 w-5" />
          <span>Voltar para o Início</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
