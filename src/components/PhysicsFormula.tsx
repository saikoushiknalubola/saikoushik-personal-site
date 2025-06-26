
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormulaProps {
  formula: string;
  meaning: string;
  humor: string;
  realWorldApp: string;
  className?: string;
}

const PhysicsFormula: React.FC<FormulaProps> = ({ 
  formula, 
  meaning, 
  humor, 
  realWorldApp, 
  className 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className={cn("relative h-48 md:h-56 perspective-1000", className)}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="relative w-full h-full transform-style-preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden glass-card p-6 flex flex-col justify-center items-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-purple-400 to-blue-400 p-3 rounded-full mb-4 mx-auto w-fit">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-sf text-xl md:text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              {formula}
            </h3>
            <p className="font-sf text-white/80 text-sm md:text-base leading-relaxed">
              {meaning}
            </p>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-4 right-4"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Lightbulb className="w-5 h-5 text-yellow-400/70" />
          </motion.div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden glass-card p-6 flex flex-col justify-center transform rotateY-180">
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-3 rounded-full mb-4 mx-auto w-fit">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-sf text-lg font-bold mb-3 text-yellow-400">
              Life Application
            </h4>
            <p className="font-sf text-purple-300/90 text-sm md:text-base italic mb-4 leading-relaxed">
              {humor}
            </p>
            <p className="font-sf text-white/80 text-xs md:text-sm">
              {realWorldApp}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PhysicsFormula;
