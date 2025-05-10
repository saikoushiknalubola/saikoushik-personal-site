
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
  animation?: 'fade' | 'scale' | 'slide' | 'none';
}

// Define animation variants types for better type safety
interface AnimationVariant {
  initial?: Record<string, any>;
  whileInView?: Record<string, any>;
  transition?: Record<string, any>;
}

const LiteraryQuote: React.FC<LiteraryQuoteProps> = ({ 
  text, 
  author, 
  work,
  className,
  style = 'kafka',
  quote,
  source,
  animation = 'fade'
}) => {
  // Use either quote or text, and either source or work
  const quoteText = quote || text;
  const sourceText = source || work;

  // Motion animation variants with proper typing
  const animationVariants: Record<string, AnimationVariant> = {
    fade: {
      initial: { opacity: 0, y: 10 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.5 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.5 }
    },
    slide: {
      initial: { opacity: 0, x: -20 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.5 }
    },
    none: {} // Empty object for no animation
  };

  const selectedAnimation = animationVariants[animation];
  
  // Default animation props to use when none is specified or certain properties are missing
  const defaultAnimationProps = {
    initial: { opacity: 1 },
    whileInView: { opacity: 1 },
    transition: { duration: 0 }
  };

  return (
    <motion.div 
      className={cn(
        "p-6 rounded-md my-8 shadow-lg backdrop-blur-sm", 
        getStyleClasses(style),
        className
      )}
      initial={selectedAnimation.initial || defaultAnimationProps.initial}
      whileInView={selectedAnimation.whileInView || defaultAnimationProps.whileInView}
      viewport={{ once: true, margin: "-50px" }}
      transition={selectedAnimation.transition || defaultAnimationProps.transition}
    >
      <p className={cn("text-lg font-playfair italic mb-4", 
        style === 'einstein' ? "relative pl-5 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-blue-500 before:rounded-full" : "")}>{quoteText}</p>
      <div className="flex flex-col">
        <span className={cn("font-medium font-inter", style === 'einstein' ? "text-blue-400" : "")}>{author}</span>
        {sourceText && <span className="text-sm text-muted-foreground font-inter">{sourceText}</span>}
      </div>
    </motion.div>
  );
};

// Helper function to get style classes based on the style prop
const getStyleClasses = (style: string = 'kafka') => {
  switch(style) {
    case 'kafka':
      return "bg-gradient-to-r from-slate-800/90 to-slate-900/90 border-l-4 border-amber-400";
    case 'dostoevsky':
      return "bg-gradient-to-r from-slate-900/90 to-indigo-950/90 border-l-4 border-red-700";
    case 'kalam':
      return "bg-gradient-to-r from-slate-800/90 to-blue-900/90 border-l-4 border-orange-500";
    case 'jobs':
      return "bg-gradient-to-r from-zinc-900/90 to-zinc-800/90 border-l-4 border-zinc-400";
    case 'guevara':
      return "bg-gradient-to-r from-slate-900/90 to-red-950/90 border-l-4 border-red-600";
    case 'einstein':
      return "bg-gradient-to-r from-slate-800/90 to-blue-900/90 border-l-4 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]";
    default:
      return "bg-gradient-to-r from-slate-800/90 to-slate-900/90 border-l-4 border-amber-400";
  }
};

export default LiteraryQuote;
