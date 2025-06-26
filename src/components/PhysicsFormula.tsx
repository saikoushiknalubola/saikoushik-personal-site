
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap } from 'lucide-react';

interface PhysicsFormulaProps {
  formula: string;
  explanation: string;
  humorousApplication: string;
  title: string;
  className?: string;
}

const PhysicsFormula: React.FC<PhysicsFormulaProps> = ({
  formula,
  explanation,
  humorousApplication,
  title,
  className = ""
}) => {
  const [showHumor, setShowHumor] = useState(false);

  return (
    <motion.div
      className={`bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-md border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <Zap className="w-5 h-5 text-yellow-400" />
        <h3 className="text-xl font-sf font-bold text-white">{title}</h3>
      </div>
      
      <div className="text-center mb-4">
        <div className="text-2xl md:text-3xl font-sf font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text py-2">
          {formula}
        </div>
      </div>
      
      <p className="text-white/80 font-sf mb-4 leading-relaxed">{explanation}</p>
      
      <button
        onClick={() => setShowHumor(!showHumor)}
        className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-sf"
      >
        <Lightbulb className="w-4 h-4" />
        {showHumor ? 'Hide' : 'Show'} Life Application
      </button>
      
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: showHumor ? 'auto' : 0,
          opacity: showHumor ? 1 : 0
        }}
        className="overflow-hidden"
      >
        <div className="mt-4 p-4 bg-yellow-400/10 rounded-lg border border-yellow-400/20">
          <p className="text-yellow-200 font-sf italic">{humorousApplication}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PhysicsFormula;
