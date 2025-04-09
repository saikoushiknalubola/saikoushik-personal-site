
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import { useDeviceSize } from '@/hooks/use-mobile';
import LiteraryQuote from '@/components/LiteraryQuote';
import PhilosophicalParadox from '@/components/PhilosophicalParadox';

const philosophicalThoughts = [
  {
    id: 'existence',
    title: 'Digital Existence',
    content: 'In the age of digital duplication, does the concept of original identity still hold meaning? We exist simultaneously in multiple spaces, our digital echoes extending beyond our physical selves.'
  },
  {
    id: 'consciousness',
    title: 'Artificial Consciousness',
    content: 'If we create an artificial intelligence that perfectly simulates consciousness, is it fundamentally different from our own consciousness? Perhaps what we call "being aware" is itself a complex simulation running on biological hardware.'
  },
  {
    id: 'time',
    title: 'Temporal Perception',
    content: 'Time stretches and compresses based on our perception. Technology has fundamentally altered our relationship with time, creating a new temporal experience unique to the digital era.'
  },
  {
    id: 'creativity',
    title: 'Creative Emergence',
    content: 'True innovation often emerges at the intersection of seemingly unrelated domains. The synthesis of disparate concepts creates something greater than the sum of its parts.'
  }
];

const quotes = [
  {
    text: "The universe is not only stranger than we imagine, it is stranger than we can imagine.",
    author: "Sir Arthur Eddington",
    source: "The Nature of the Physical World"
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
    source: "Nicomachean Ethics"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    source: "You Learn by Living"
  }
];

const Philosophy = () => {
  const { isTabletOrSmaller } = useDeviceSize();
  const [activeThought, setActiveThought] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection="philosophy" />
      
      <main className="container mx-auto px-4 pt-24 pb-20">
        <SectionHeader
          title="Philosophical Insights"
          subtitle="Exploring the Intersection of Technology, Consciousness and Creativity"
          align="center"
          glowColor="cyan"
        />
        
        <div className="mt-12 max-w-4xl mx-auto">
          <motion.div 
            className="glass-card p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-white/80 font-outfit leading-relaxed">
              Throughout my journey in technology and art, I've developed a philosophical framework that guides my approach to creation and innovation. 
              These reflections explore the deeper questions that emerge from our rapidly evolving digital landscape.
            </p>
          </motion.div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-raleway font-bold mb-6 text-future-primary">Core Philosophical Themes</h2>
            
            <div className={`grid ${isTabletOrSmaller ? 'grid-cols-1 gap-6' : 'grid-cols-2 gap-8'}`}>
              {philosophicalThoughts.map((thought) => (
                <motion.div
                  key={thought.id}
                  className={`bg-black/30 border border-white/10 rounded-xl p-6 hover:border-neon-purple/40 transition-all duration-300`}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * philosophicalThoughts.indexOf(thought) }}
                  onClick={() => setActiveThought(thought.id === activeThought ? null : thought.id)}
                >
                  <h3 className="text-xl font-raleway font-bold mb-3 text-white">{thought.title}</h3>
                  <p className="text-white/80 font-outfit">{thought.content}</p>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: activeThought === thought.id ? 'auto' : 0,
                      opacity: activeThought === thought.id ? 1 : 0
                    }}
                    className="overflow-hidden mt-4"
                  >
                    <div className="pt-4 border-t border-white/10 mt-2">
                      <p className="text-white/70 italic">This is an evolving concept I'm exploring through both theoretical and practical work.</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-raleway font-bold mb-6 text-future-primary">Paradoxical Contemplations</h2>
            
            <div className={`${isTabletOrSmaller ? 'space-y-6' : 'space-y-8'}`}>
              <PhilosophicalParadox
                title="The Simulation Paradox"
                description="If we can simulate reality with sufficient fidelity, how do we know we aren't already in a simulation? And if we are, does it matter?"
              />
              <PhilosophicalParadox
                title="The Innovation Contradiction"
                description="True innovation often requires destroying established patterns, yet our minds naturally seek familiar patterns. The creator must both embrace and resist cognitive bias."
              />
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-raleway font-bold mb-6 text-future-primary">Inspirational Quotes</h2>
            
            <div className={`${isTabletOrSmaller ? 'space-y-6' : 'space-y-8'}`}>
              {quotes.map((quote, index) => (
                <LiteraryQuote
                  key={index}
                  quote={quote.text}
                  author={quote.author}
                  source={quote.source}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Philosophy;
