
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import LiteraryQuote from '@/components/LiteraryQuote';
import FuturisticButton from '@/components/FuturisticButton';
import { Laugh, ArrowDown, Clock, Zap, Lightbulb, Rocket } from 'lucide-react';

const ComedyHub = () => {
  useEffect(() => {
    document.title = "Quantum Comedy | Saikoushik Nalubola";
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const comedyJokes = [
    {
      setup: "Why did Einstein develop the theory of relativity?",
      punchline: "Because he wanted to prove that time flies when you're having fun with physics!"
    },
    {
      setup: "How does Einstein like his tea?",
      punchline: "Relatively hot."
    },
    {
      setup: "What did Einstein say when he was late to a meeting?",
      punchline: "It's all relative anyway!"
    },
    {
      setup: "Why couldn't Einstein play hide and seek?",
      punchline: "Because he kept shouting 'E=MC²' when they found him!"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation activeSection="comedy" />
      
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-16 px-4 md:px-8"
      >
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block"
            >
              <Laugh size={48} className="mx-auto text-yellow-400 mb-4" />
            </motion.div>
            
            <SectionHeader
              title="Quantum Comedy Hub"
              subtitle="Where physics meets hilarity and time dilates with laughter"
              style="rebel"
              align="center"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative">
              <motion.div
                initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative z-10"
              >
                <img 
                  src="/lovable-uploads/333c6b72-4298-49dc-acb9-f578b4b06784.png" 
                  alt="Einstein with funny face" 
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black p-3 rounded-full shadow-lg">
                  <Lightbulb size={24} />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 p-4 rounded-lg shadow-lg transform rotate-6"
              >
                <p className="font-handwriting text-lg">
                  "Time is an illusion. Lunchtime doubly so!"
                </p>
                <p className="text-right text-sm">- Einstein (probably)</p>
              </motion.div>
            </div>
            
            <div className="flex flex-col justify-center">
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-4">Einstein's Comedy Theory</h3>
                <p className="mb-4">
                  Welcome to the quantum realm of comedy, where jokes travel faster than light and laughter bends the fabric of spacetime!
                </p>
                <p className="mb-6">
                  Did you know that according to Einstein's little-known "Comedy Theory of Relativity," time actually slows down during bad jokes and speeds up during good ones? That's why great comedy seems to end too quickly!
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <FuturisticButton href="#jokes" variant="secondary">
                    <Laugh className="mr-2" size={18} />
                    See Quantum Jokes
                  </FuturisticButton>
                  <FuturisticButton href="#time-dilation">
                    <Clock className="mr-2" size={18} />
                    Experience Time Dilation
                  </FuturisticButton>
                </div>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="glass-card p-8 mb-16"
            id="jokes"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Zap className="mr-2 text-yellow-400" size={24} />
              Einstein's Quantum Jokes
            </h2>
            
            <div className="space-y-8">
              {comedyJokes.map((joke, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-lg p-6"
                >
                  <p className="text-lg font-medium mb-3">{joke.setup}</p>
                  <p className="text-xl font-bold text-yellow-400">{joke.punchline}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mb-16 text-center"
            id="time-dilation"
          >
            <h2 className="text-2xl font-bold mb-8 inline-flex items-center">
              <Clock className="mr-2 text-purple-400" size={24} />
              Comedy Time Dilation Experiment
            </h2>
            
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-8 rounded-xl border border-white/10">
              <p className="mb-6">
                According to Einstein's theory, time moves slower when you're having fun. Test it yourself with this interactive experiment!
              </p>
              
              <div className="mb-8">
                <div className="relative h-6 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      duration: 10, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm text-white/60">
                  <span>Now</span>
                  <span>Time is dilating...</span>
                  <span>Later</span>
                </div>
              </div>
              
              <p className="text-lg font-medium">
                Did it feel like 10 seconds? According to comedy physics, it was actually 5 seconds of fun time!
              </p>
            </div>
          </motion.div>
          
          <div className="text-center">
            <LiteraryQuote
              text="Humor is mankind's greatest blessing. Time spent laughing is time spent with the gods."
              author="Mark Twain & Albert Einstein"
              source="The Theory of Comedic Relativity"
              style="jobs"
            />
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <Link to="/experiments">
                <FuturisticButton variant="primary" size="lg">
                  <Rocket className="mr-2" size={18} />
                  Try More Quantum Experiments
                </FuturisticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComedyHub;
