
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  style?: 'default' | 'kafka' | 'rebel' | 'futuristic' | 'dostoevsky' | 'apple';
  highlightText?: string;
  theoryReference?: 'einstein' | 'newton' | 'hawking';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  align = 'left',
  className,
  style = 'default',
  highlightText,
  theoryReference
}) => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (style === 'futuristic' && headerRef.current) {
      const header = headerRef.current;
      const glitchEffect = () => {
        header.classList.add('animate-glitch');
        setTimeout(() => {
          header.classList.remove('animate-glitch');
        }, 300);
      };
      
      const interval = setInterval(glitchEffect, 5000);
      return () => clearInterval(interval);
    }
  }, [style]);
  
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
        return "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 font-sf tracking-tight";
      default:
        return "relative inline-block";
    }
  };
  
  const theoryQuotes = {
    einstein: "Time is relative to the observer.",
    newton: "For every action, there is an equal and opposite reaction.",
    hawking: "Intelligence is the ability to adapt to change."
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
      <motion.h2 
        ref={headerRef}
        className={cn("text-3xl md:text-5xl font-bold mb-4", getStyleClasses())}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
        
        {style === 'default' && (
          <motion.span 
            className="block h-1 w-1/2 bg-neon-purple mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: '50%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          ></motion.span>
        )}
        
        {style === 'apple' && (
          <motion.span 
            className="block h-1 w-12 bg-gradient-to-r from-blue-400 to-blue-600 mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '3rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          ></motion.span>
        )}
        
        {highlightText && (
          <motion.span 
            className="block text-neon-purple italic text-xl mt-2 font-normal"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {highlightText}
          </motion.span>
        )}
        
        {theoryReference && (
          <motion.span 
            className="block text-sm font-mono mt-3 text-white/60 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            "{theoryQuotes[theoryReference]}"
          </motion.span>
        )}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-white/70 text-lg max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
