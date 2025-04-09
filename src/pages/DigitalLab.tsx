
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import { useDeviceSize } from '@/hooks/use-mobile';
import { Sparkles, Zap, Binary, Code, Share2, Cpu } from 'lucide-react';

const DigitalLab = () => {
  const { isTabletOrSmaller } = useDeviceSize();
  const [activeExperiment, setActiveExperiment] = useState<string | null>(null);
  
  const experiments = [
    {
      id: 'neural',
      title: 'Neural Network Exploration',
      description: 'Immersive visualization of artificial neural networks and their learning processes.',
      icon: <Binary className="text-neon-purple w-6 h-6" />,
      color: 'from-purple-500/20 to-blue-500/20'
    },
    {
      id: 'quantum',
      title: 'Quantum Computing Simulator',
      description: 'Experimental interface for visualizing quantum algorithms and superposition states.',
      icon: <Cpu className="text-future-primary w-6 h-6" />,
      color: 'from-cyan-500/20 to-teal-500/20'
    },
    {
      id: 'code',
      title: 'Code Synthesis',
      description: 'Generative code experiments showcasing the beauty and art of programming languages.',
      icon: <Code className="text-neon-green w-6 h-6" />,
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      id: 'creative',
      title: 'Creative AI Canvas',
      description: 'Collaborative space where human creativity meets artificial intelligence.',
      icon: <Sparkles className="text-future-accent w-6 h-6" />,
      color: 'from-pink-500/20 to-purple-500/20'
    },
    {
      id: 'blockchain',
      title: 'Blockchain Visualizer',
      description: 'Interactive visualization of blockchain technology and decentralized systems.',
      icon: <Share2 className="text-yellow-500 w-6 h-6" />,
      color: 'from-yellow-500/20 to-orange-500/20'
    },
    {
      id: 'energy',
      title: 'Energy Simulation',
      description: 'Experimental modeling of sustainable energy systems and future grid technologies.',
      icon: <Zap className="text-amber-500 w-6 h-6" />,
      color: 'from-amber-500/20 to-red-500/20'
    }
  ];
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation activeSection="lab" />
      
      <main className="container mx-auto px-4 pt-24 pb-20">
        <SectionHeader
          title="Digital Laboratory"
          subtitle="Experimental Innovations at the Frontier of Technology"
          align="center"
          glowColor="purple"
        />
        
        <div className="mt-12 max-w-4xl mx-auto">
          <motion.p 
            className="text-lg text-white/80 mb-8 font-outfit text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my digital laboratory—a space where cutting-edge technology meets creative experimentation. 
            Each project represents an exploration into the unknown, pushing the boundaries of what's possible.
          </motion.p>
          
          <div className={`grid ${isTabletOrSmaller ? 'grid-cols-1' : 'grid-cols-2 gap-8'} gap-6 mt-12`}>
            {experiments.map((experiment) => (
              <motion.div
                key={experiment.id}
                className={`bg-gradient-to-br ${experiment.color} backdrop-blur-md border border-white/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300`}
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * experiments.indexOf(experiment) }}
                onClick={() => setActiveExperiment(experiment.id === activeExperiment ? null : experiment.id)}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-black/30 p-3 rounded-xl mr-4">
                    {experiment.icon}
                  </div>
                  <h3 className="text-xl font-raleway font-bold">{experiment.title}</h3>
                </div>
                
                <p className="text-white/80 font-outfit">{experiment.description}</p>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activeExperiment === experiment.id ? 'auto' : 0,
                    opacity: activeExperiment === experiment.id ? 1 : 0
                  }}
                  className="overflow-hidden mt-4"
                >
                  <div className="pt-4 border-t border-white/10 mt-4">
                    <p className="text-white/70 italic mb-3">This experiment is currently in development.</p>
                    <button className="bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-md transition-colors">
                      Coming Soon
                    </button>
                  </div>
                </motion.div>
                
                <div className="flex justify-end mt-4">
                  <motion.button
                    className="text-white/70 hover:text-white flex items-center gap-2 text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    {activeExperiment === experiment.id ? 'Show Less' : 'Learn More'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-white/60 max-w-md mx-auto">
            The laboratory is constantly evolving with new experiments. Check back later for updates.
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default DigitalLab;
