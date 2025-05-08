import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  className = '', 
  children, 
  hoverEffect = false 
}) => {
  const baseStyles = 'bg-white rounded-lg shadow-card overflow-hidden';
  const hoverStyles = hoverEffect ? 'transition-shadow hover:shadow-card-hover' : '';
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`p-5 ${className}`}>
      {children}
    </div>
  );
};

export interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`px-5 pb-5 ${className}`}>
      {children}
    </div>
  );
};

export interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`px-5 py-4 border-t border-gray-100 ${className}`}>
      {children}
    </div>
  );
};

export default Card;