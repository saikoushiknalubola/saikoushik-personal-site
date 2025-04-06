
import React from 'react';
import { cn } from '@/lib/utils';

interface QuoteCardProps {
  quote: string;
  className?: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, className }) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 border-l-4 border-neon-purple",
        className
      )}
    >
      <p className="text-lg font-medium italic">"{quote}"</p>
    </div>
  );
};

export default QuoteCard;
