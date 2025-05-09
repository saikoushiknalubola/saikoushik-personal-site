
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface QuoteProps {
  className?: string;
}

const ThinkDifferentQuote: React.FC<QuoteProps> = ({ className }) => {
  return (
    <div className={cn("my-16 max-w-4xl mx-auto px-4", className)}>
      <motion.div 
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Apple rainbow stripe top */}
        <div className="h-1.5 w-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 mb-8 rounded-full"></div>
        
        <div className="text-center">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* First line only */}
            <motion.p 
              className="text-xl md:text-2xl font-sf font-light text-white/90 italic"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Here's to the crazy ones. The misfits. The rebels. The troublemakers.
            </motion.p>
          </motion.div>

          <motion.p 
            className="mt-8 font-sf text-lg text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Think Different
          </motion.p>
        </div>
        
        {/* Apple rainbow stripe bottom */}
        <div className="h-1.5 w-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 mt-8 rounded-full"></div>
      </motion.div>
    </div>
  );
};

export default ThinkDifferentQuote;
