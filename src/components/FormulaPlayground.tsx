
import React from 'react';
import { motion } from 'framer-motion';
import PhysicsFormula from './PhysicsFormula';

const FormulaPlayground = () => {
  const formulas = [
    {
      formula: "E = mc²",
      meaning: "Energy equals mass times the speed of light squared",
      humor: "The amount of energy I need to finish a project = my mass × coffee consumption²",
      realWorldApp: "Applied this to optimize our energy conversion systems and convince clients that small changes can have massive impact!"
    },
    {
      formula: "F = ma",
      meaning: "Force equals mass times acceleration",
      humor: "The force needed to push a feature to production = team size × deadline panic acceleration",
      realWorldApp: "Used Newton's laws to design more efficient drone propulsion systems that actually follow physics (revolutionary, I know)."
    },
    {
      formula: "v = d/t",
      meaning: "Velocity equals distance over time",
      humor: "Developer velocity = features shipped ÷ time spent debugging (spoiler: time approaches infinity)",
      realWorldApp: "Optimized our development processes by treating code delivery like physics - measurable, predictable, and occasionally explosive."
    },
    {
      formula: "P = W/t",
      meaning: "Power equals work over time",
      humor: "Startup power = actual work done ÷ time spent in meetings (result: surprisingly low numbers)",
      realWorldApp: "Calculated optimal resource allocation for our projects using power efficiency principles from electrical engineering."
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-sf text-2xl md:text-3xl font-bold text-white mb-4">
          Physics Formulas for 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Real Life</span>
        </h3>
        <p className="font-sf text-white/70 text-sm md:text-base max-w-2xl mx-auto">
          Because Einstein's equations work just as well for startups as they do for the universe. 
          <span className="italic"> (Click the cards to see the humor!)</span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {formulas.map((formula, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <PhysicsFormula {...formula} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FormulaPlayground;
