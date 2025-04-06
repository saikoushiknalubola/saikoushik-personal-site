
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  style?: 'default' | 'kafka' | 'rebel' | 'futuristic' | 'dostoevsky' | 'apple';
  highlightText?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  align = 'left',
  className,
  style = 'default',
  highlightText
}) => {
  const getStyleClasses = () => {
    switch(style) {
      case 'kafka':
        return "after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:bottom-0 after:left-0";
      case 'rebel':
        return "border-l-4 border-neon-purple pl-4";
      case 'futuristic':
        return "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400";
      case 'dostoevsky':
        return "border-b-2 border-red-700 pb-2";
      case 'apple':
        return "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 font-montserrat font-bold tracking-tight";
      default:
        return "relative inline-block";
    }
  };
  
  return (
    <div 
      className={cn(
        "mb-12",
        align === 'center' && "text-center",
        align === 'right' && "text-right",
        className
      )}
    >
      <h2 className={cn("text-3xl md:text-5xl font-bold mb-4", getStyleClasses())}>
        {title}
        {style === 'default' && <span className="block h-1 w-1/2 bg-neon-purple mt-2"></span>}
        {style === 'apple' && <span className="block h-1 w-12 bg-gradient-to-r from-blue-400 to-blue-600 mt-4 rounded-full"></span>}
        {highlightText && (
          <span className="block text-neon-purple italic text-xl mt-2 font-normal">{highlightText}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
