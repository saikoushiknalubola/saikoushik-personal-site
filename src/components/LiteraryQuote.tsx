
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface LiteraryQuoteProps {
  text?: string;
  author: string;
  work?: string;
  className?: string;
  style?: 'kafka' | 'dostoevsky' | 'kalam' | 'jobs' | 'guevara' | 'einstein';
  quote?: string;
  source?: string;
}

const LiteraryQuote: React.FC<LiteraryQuoteProps> = ({ 
  text, 
  author, 
  work,
  className,
  style = 'kafka',
  quote,
  source
}) => {
  // Use either quote or text, and either source or work
  const quoteText = quote || text;
  const sourceText = source || work;

  return (
    <motion.div 
      className={cn(
        "p-6 rounded-md my-8 shadow-lg", 
        getStyleClasses(style),
        className
      )}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-lg font-serif italic mb-4">{quoteText}</p>
      <div className="flex flex-col">
        <span className="font-medium">{author}</span>
        {sourceText && <span className="text-sm text-muted-foreground">{sourceText}</span>}
      </div>
    </motion.div>
  );
};

// Helper function to get style classes based on the style prop
const getStyleClasses = (style: string = 'kafka') => {
  switch(style) {
    case 'kafka':
      return "bg-gradient-to-r from-slate-800 to-slate-900 border-l-4 border-amber-400";
    case 'dostoevsky':
      return "bg-gradient-to-r from-slate-900 to-indigo-950 border-l-4 border-red-700";
    case 'kalam':
      return "bg-gradient-to-r from-slate-800 to-blue-900 border-l-4 border-orange-500";
    case 'jobs':
      return "bg-gradient-to-r from-zinc-900 to-zinc-800 border-l-4 border-zinc-400";
    case 'guevara':
      return "bg-gradient-to-r from-slate-900 to-red-950 border-l-4 border-red-600";
    case 'einstein':
      return "bg-gradient-to-r from-slate-800 to-blue-900 border-l-4 border-blue-500";
    default:
      return "bg-gradient-to-r from-slate-800 to-slate-900 border-l-4 border-amber-400";
  }
};

export default LiteraryQuote;
