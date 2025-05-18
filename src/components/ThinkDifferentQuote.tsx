
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useDeviceSize } from '@/hooks/use-mobile';

interface QuoteProps {
  className?: string;
  expandable?: boolean;
}

const ThinkDifferentQuote: React.FC<QuoteProps> = ({ className, expandable = true }) => {
  const [expanded, setExpanded] = React.useState(false);
  const { isMobile, isTabletOrSmaller } = useDeviceSize();

  return (
    <div className={cn("my-6 md:my-12 max-w-4xl mx-auto px-3 md:px-4", className)}>
      <motion.div 
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Apple rainbow stripe top */}
        <div className="h-1.5 w-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 mb-3 md:mb-6 rounded-full"></div>
        
        <div className="text-center px-2 sm:px-4 md:px-8">
          <motion.div 
            className="space-y-2 md:space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* First line only */}
            <motion.p 
              className="text-base sm:text-lg md:text-2xl font-sf font-light text-white/90 italic"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Here's to the crazy ones. The misfits. The rebels. The troublemakers.
            </motion.p>

            {expandable && expanded && (
              <>
                <motion.p
                  className="text-base sm:text-lg md:text-2xl font-sf font-light text-white/80 italic"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.5 }}
                >
                  The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo.
                </motion.p>
                
                <motion.p
                  className="text-base sm:text-lg md:text-2xl font-sf font-light text-white/80 italic"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things.
                </motion.p>
                
                <motion.p
                  className="text-base sm:text-lg md:text-2xl font-sf font-light text-white/80 italic"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  They push the human race forward. While some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.
                </motion.p>
              </>
            )}
          </motion.div>

          <motion.p 
            className="mt-3 md:mt-6 font-sf text-sm md:text-lg text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Think Different
          </motion.p>

          {expandable && (
            <motion.button
              className="mt-2 md:mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors p-2"
              onClick={() => setExpanded(!expanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {expanded ? "Show Less" : "Show More"}
            </motion.button>
          )}
        </div>
        
        {/* Apple rainbow stripe bottom */}
        <div className="h-1.5 w-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 mt-3 md:mt-6 rounded-full"></div>
      </motion.div>
    </div>
  );
};

export default ThinkDifferentQuote;
