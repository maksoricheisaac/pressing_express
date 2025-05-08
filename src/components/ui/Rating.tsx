import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  size = 'md',
  className = '',
}) => {
  const sizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const iconSize = sizes[size];

  return (
    <div className={`flex ${className}`}>
      {[...Array(max)].map((_, i) => (
        <Star
          key={i}
          size={iconSize}
          className={`${
            i < value
              ? 'text-warning-500 fill-warning-500'
              : 'text-gray-300'
          } ${i > 0 ? '-ml-0.5' : ''}`}
        />
      ))}
    </div>
  );
};

export default Rating;