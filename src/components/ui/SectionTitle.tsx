import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  const alignment = centered ? 'text-center' : 'text-left';

  return (
    <div className={`mb-8 md:mb-12 ${alignment} ${className}`}>
      <h2 className="text-3xl font-display md:text-4xl font-bold text-primary-500 mb-3">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;