
import { Check } from 'lucide-react';

interface FeatureListProps {
  features: string[];
  className?: string;
}

const FeatureList = ({ features, className = '' }: FeatureListProps) => {
  return (
    <ul className={`space-y-2 ${className}`}>
      {features.map((feature, index) => (
        <li 
          key={index} 
          className="feature-item"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <Check className="feature-icon" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
