import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bgColor?: string;
  containerWidth?: 'narrow' | 'default' | 'wide' | 'full';
}

const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  bgColor = 'bg-white',
  containerWidth = 'default',
}) => {
  const containerStyles = {
    narrow: 'max-w-4xl',
    default: 'max-w-6xl',
    wide: 'max-w-7xl',
    full: 'w-full',
  };

  return (
    <section id={id} className={`py-12 md:py-16 lg:py-20 ${bgColor} ${className}`}>
      <div className={`px-4 mx-auto ${containerStyles[containerWidth]}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;