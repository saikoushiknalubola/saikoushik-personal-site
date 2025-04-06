
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface LiteraryQuoteProps {
  text: string;
  author: string;
  work?: string;
  className?: string;
  style?: 'kafka' | 'dostoevsky' | 'kalam' | 'jobs' | 'guevara';
}

const LiteraryQuote: React.FC<LiteraryQuoteProps> = ({ 
  text, 
  author, 
  work,
  className,
  style = 'kafka'
}) => {
  const getQuoteStyle = () => {
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
    }
  };

  return (
    <div className={cn(
      "p-6 rounded-md my-8 shadow-lg", 
      getQuoteStyle(),
      className
    )}>
      <p className="text-lg font-serif italic mb-4">{text}</p>
      <div className="flex flex-col">
        <span className="font-medium">{author}</span>
        {work && <span className="text-sm text-muted-foreground">{work}</span>}
      </div>
    </div>
  );
};

export default LiteraryQuote;
