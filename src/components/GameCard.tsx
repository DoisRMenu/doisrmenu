
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GameCardProps {
  title: string;
  description: string;
  imageSrc: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  linkTo: string;
}

const GameCard = ({ 
  title, 
  description, 
  imageSrc, 
  price, 
  originalPrice, 
  discount, 
  linkTo 
}: GameCardProps) => {
  return (
    <div className="game-card group">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Discount badge */}
        {discount && (
          <div className="absolute top-3 right-3 bg-gaming-red text-white text-sm font-bold px-3 py-1 rounded-full">
            {discount}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
        
        {/* Price */}
        <div className="flex items-center mb-4">
          <span className="text-2xl font-bold text-gaming-red">{price}</span>
          {originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              {originalPrice}
            </span>
          )}
        </div>
        
        {/* Button */}
        <Link 
          to={linkTo} 
          className="flex items-center justify-between text-white font-medium bg-gaming-light-gray hover:bg-gaming-red transition-colors duration-300 rounded-md px-4 py-2"
        >
          <span>Ver Detalhes</span>
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
