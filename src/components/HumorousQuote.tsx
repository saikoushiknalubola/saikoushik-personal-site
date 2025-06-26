
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface HumorousQuoteProps {
  quote: string;
  author: string;
  humor?: string;
  className?: string;
}

const HumorousQuote: React.FC<HumorousQuoteProps> = ({ 
  quote, 
  author, 
  humor, 
  className = "" 
}) => {
  return (
    <motion.div
      className={`glass-card p-6 md:p-8 my-8 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start gap-4">
        <Quote className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
        <div>
          <blockquote className="text-lg md:text-xl font-sf text-white/90 italic mb-4 leading-relaxed">
            "{quote}"
          </blockquote>
          <cite className="text-blue-400 font-sf font-medium">— {author}</cite>
          {humor && (
            <motion.p 
              className="text-sm text-yellow-400 mt-3 font-sf italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              💡 {humor}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default HumorousQuote;
