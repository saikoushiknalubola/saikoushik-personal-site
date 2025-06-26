
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HumorousQuoteProps {
  quote: string;
  author: string;
  humor?: string;
  className?: string;
}

const HumorousQuote: React.FC<HumorousQuoteProps> = ({ quote, author, humor, className }) => {
  return (
    <motion.div
      className={cn("glass-card p-6 md:p-8 my-6", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div className="relative">
        <motion.p 
          className="font-sf text-lg md:text-xl text-white/90 italic leading-relaxed mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          "{quote}"
        </motion.p>
        
        {humor && (
          <motion.p 
            className="font-sf text-sm md:text-base text-purple-300/80 italic mb-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {humor}
          </motion.p>
        )}
        
        <motion.p 
          className="font-sf text-right text-white/70 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          — {author}
        </motion.p>
        
        {/* Decorative element */}
        <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse-glow"></div>
      </div>
    </motion.div>
  );
};

export default HumorousQuote;
