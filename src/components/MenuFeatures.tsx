
import { useState } from 'react';

interface MenuCategory {
  title: string;
  features: string[];
}

interface MenuFeaturesProps {
  categories: MenuCategory[];
}

const MenuFeatures = ({ categories }: MenuFeaturesProps) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Categories navigation */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 bg-gaming-gray rounded-lg border border-gaming-light-gray p-4">
          <h3 className="font-display text-xl text-white mb-4 pb-2 border-b border-gaming-light-gray">
            Categorias
          </h3>
          <div className="space-y-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`w-full text-left px-4 py-2 rounded-md transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-gaming-red text-white'
                    : 'bg-gaming-light-gray text-gray-300 hover:bg-gaming-red/20'
                }`}
                onClick={() => setActiveCategory(index)}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Features content */}
      <div className="lg:col-span-2">
        <div className="bg-gaming-gray rounded-lg border border-gaming-light-gray p-6">
          {activeCategory !== null && (
            <>
              <h3 className="menu-category">
                {categories[activeCategory].title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                {categories[activeCategory].features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="menu-feature"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuFeatures;
