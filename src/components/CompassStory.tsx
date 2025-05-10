
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Compass } from 'lucide-react';

interface CompassStoryProps {
  className?: string;
}

const CompassStory: React.FC<CompassStoryProps> = ({ className }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className={cn("relative overflow-hidden my-12 rounded-xl", className)}>
      <motion.div 
        className={cn(
          "p-6 glass-card-glow transition-all duration-500 ease-in-out cursor-pointer",
          expanded ? "bg-blue-900/20" : "bg-black/20 hover:bg-black/30"
        )}
        onClick={() => setExpanded(!expanded)}
        whileHover={{ scale: expanded ? 1 : 1.01 }}
        layoutId="compass-story-container"
      >
        <div className="flex items-center">
          <motion.div 
            className={cn(
              "p-3 rounded-full mr-4 transition-colors duration-300",
              expanded ? "bg-blue-500/20" : "bg-blue-500/10"
            )}
            layoutId="compass-icon-container"
          >
            <Compass 
              className={cn(
                "transition-colors duration-300",
                expanded ? "text-blue-400" : "text-blue-300"
              )} 
              size={expanded ? 36 : 24}
            />
          </motion.div>
          
          <motion.div layoutId="compass-title">
            <h3 className={cn(
              "text-xl md:text-2xl font-medium",
              expanded ? "text-blue-300" : "text-white"
            )}>
              The Compass That Changed Everything
            </h3>
          </motion.div>
        </div>

        <AnimatePresence>
          {expanded ? (
            <motion.div 
              className="mt-6 space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white/80 leading-relaxed">
                "He [Einstein] was sick in bed one day, and his father brought him a compass. He later recalled being so excited as he examined its mysterious powers that he trembled and grew cold."
              </p>
              
              <p className="text-white/80 leading-relaxed">
                "The fact that the magnetic needle behaved as if influenced by some hidden force field, rather than through the more familiar mechanical method involving touch or contact, produced a sense of wonder that motivated him throughout his life."
              </p>
              
              <div className="my-6 flex justify-center">
                <motion.div 
                  className="relative w-40 h-40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute top-0 left-1/2 w-0.5 h-full bg-blue-500/30 -translate-x-1/2"></div>
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-500/30 -translate-y-1/2"></div>
                  
                  <motion.div 
                    className="absolute top-1/2 left-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-red-500 -translate-x-1/2 -translate-y-1/2 origin-left"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, -30, 45, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                  />
                  
                  <div className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-blue-500/20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                </motion.div>
              </div>
              
              <p className="text-white/80 leading-relaxed italic">
                "I can still remember — or at least I believe I can remember — that this experience made a deep and lasting impression on me."
              </p>
              
              <p className="text-white/80 leading-relaxed">
                "After being mesmerized by the compass needle's fealty to an unseen field, Einstein would develop a lifelong devotion to field theories as a way to describe nature."
              </p>
              
              <div className="text-right">
                <p className="text-sm text-white/50">- Walter Isaacson, "Einstein: His Life and Universe"</p>
              </div>
              
              <div className="pt-4 text-center text-white/70">
                <p>Click anywhere to collapse</p>
              </div>
            </motion.div>
          ) : (
            <motion.p 
              className="mt-2 text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Discover how a simple compass inspired a lifetime of curiosity...
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CompassStory;
