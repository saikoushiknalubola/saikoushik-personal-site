
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  align = 'left',
  className
}) => {
  return (
    <div 
      className={cn(
        "mb-12",
        align === 'center' && "text-center",
        align === 'right' && "text-right",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
        {title}
        <span className="block h-1 w-1/2 bg-neon-purple mt-2"></span>
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
