
import React from 'react';
import { cn } from '@/lib/utils';

interface QuoteCardProps {
  quote: string;
  author?: string;
  className?: string;
  color?: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ 
  quote, 
  author,
  className,
  color = "border-neon-purple" 
}) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 border-l-4 relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]",
        color,
        className
      )}
    >
      <div className="absolute top-0 right-0 opacity-10 text-6xl font-serif">"</div>
      <p className="text-lg font-medium italic relative z-10">"{quote}"</p>
      {author && (
        <p className="mt-3 text-sm text-right text-muted-foreground">— {author}</p>
      )}
    </div>
  );
};

export default QuoteCard;
