
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface QuoteProps {
  className?: string;
}

const ThinkDifferentQuote: React.FC<QuoteProps> = ({ className }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // The full "Think Different" text
  const fullQuote = [
    "Here's to the crazy ones. The misfits. The rebels. The troublemakers.",
    "The round pegs in the square holes. The ones who see things differently.",
    "They're not fond of rules. And they have no respect for the status quo.",
    "You can quote them, disagree with them, glorify or vilify them.",
    "About the only thing you can't do is ignore them. Because they change things.",
    "They push the human race forward. And while some may see them as the crazy ones, we see genius.",
    "Because the people who are crazy enough to think they can change the world, are the ones who do."
  ];
  
  const shortQuote = fullQuote.slice(0, 3);
  
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
          <AnimatePresence mode="wait">
            <motion.div
              key={isExpanded ? 'expanded' : 'collapsed'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-4">
                {(isExpanded ? fullQuote : shortQuote).map((line, index) => (
                  <motion.p 
                    key={index}
                    className="text-xl md:text-2xl font-sf font-light text-white/90 italic"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            className="mt-6 text-neon-purple hover:text-purple-300 font-sf text-sm tracking-wide uppercase transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </motion.button>
          
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
