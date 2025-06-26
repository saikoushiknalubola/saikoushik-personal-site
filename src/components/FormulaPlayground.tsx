
import React from 'react';
import { motion } from 'framer-motion';
import PhysicsFormula from './PhysicsFormula';

const FormulaPlayground = () => {
  const formulas = [
    {
      title: "Innovation Velocity",
      formula: "I = E × T²",
      explanation: "Innovation equals Energy multiplied by Time squared - small consistent efforts compound exponentially.",
      humorousApplication: "Why I drink coffee squared: The more energy I put in over time, the more exponential my innovation output becomes. It's like Einstein's relativity, but for productivity!"
    },
    {
      title: "Creative Momentum",
      formula: "C = m × v",
      explanation: "Creativity equals mass of knowledge times velocity of execution.",
      humorousApplication: "Having lots of ideas (mass) is great, but without execution speed (velocity), you're just a very smart person sitting still. Newton would be proud of my creative physics!"
    },
    {
      title: "Problem Solving Uncertainty",
      formula: "Δx × Δp ≥ ħ/2",
      explanation: "The more precisely you define a problem, the less precisely you can predict the solution path.",
      humorousApplication: "Just like Heisenberg's principle, but for debugging code. The moment you think you know exactly what's wrong, the solution becomes completely uncertain. Quantum debugging is real!"
    },
    {
      title: "Learning Acceleration",
      formula: "a = F/m",
      explanation: "Learning acceleration equals Force of curiosity divided by mass of ego.",
      humorousApplication: "The bigger your ego (mass), the slower you learn. Apply more curiosity force and reduce your ego mass for maximum learning acceleration. Physics can't lie!"
    }
  ];

  return (
    <section className="py-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-sf font-bold text-white mb-4">
          The <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">Formula</span> Playground
        </h2>
        <p className="text-lg text-white/70 font-sf max-w-2xl mx-auto">
          Where physics meets philosophy, and Einstein's wisdom gets a modern twist. 
          These aren't just formulas - they're life principles disguised as equations.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {formulas.map((formula, index) => (
          <PhysicsFormula
            key={index}
            {...formula}
          />
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-white/60 font-sf italic">
          "God does not play dice with the universe, but he definitely has a sense of humor about debugging." - Einstein (probably)
        </p>
      </motion.div>
    </section>
  );
};

export default FormulaPlayground;
