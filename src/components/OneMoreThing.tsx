
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FuturisticButton from './FuturisticButton';

interface OneMoreThingProps {
  children: React.ReactNode;
  title?: string;
}

const OneMoreThing: React.FC<OneMoreThingProps> = ({ 
  children,
  title = "One More Thing..."
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  
  return (
    <div className="w-full my-12">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.div
              key="teaser"
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h3 
                className="text-4xl md:text-5xl font-sf font-light text-white mb-8"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 1, 0.8, 1],
                  scale: [0.95, 1, 1, 0.99, 1]
                }}
                transition={{ 
                  duration: 3,
                  times: [0, 0.2, 0.4, 0.6, 1],
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                {title}
              </motion.h3>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FuturisticButton 
                  onClick={() => setIsRevealed(true)} 
                  className="font-sf tracking-tight"
                  animated
                  pulseEffect
                >
                  Reveal
                </FuturisticButton>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100, 
                damping: 15 
              }}
            >
              <div className="apple-glass-card p-8 rounded-3xl border border-white/10">
                {children}
              </div>
              <div className="text-center mt-6">
                <motion.button
                  onClick={() => setIsRevealed(false)}
                  className="text-sm text-white/60 hover:text-white transition-colors font-sf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hide
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OneMoreThing;
