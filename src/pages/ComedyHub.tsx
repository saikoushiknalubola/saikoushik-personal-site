
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import LiteraryQuote from '@/components/LiteraryQuote';
import FuturisticButton from '@/components/FuturisticButton';
import { useDeviceSize } from '@/hooks/use-mobile';
import { Laugh, ArrowDown, Clock, Zap, Lightbulb, Rocket, Brain } from 'lucide-react';

const ComedyHub = () => {
  const { isMobile, isTabletOrSmaller } = useDeviceSize();
  
  useEffect(() => {
    document.title = "Quantum Comedy | Saikoushik Nalubola";
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Add page transition class to body
    document.body.classList.add('page-transition-top');
    
    return () => {
      // Remove class when component unmounts
      document.body.classList.remove('page-transition-top');
    };
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
      setup: "What did the quantum physicist say when he wanted to fight someone?",
      punchline: "Let me atom!"
    },
    {
      setup: "Why couldn't Einstein play hide and seek?",
      punchline: "Because he kept shouting 'E=MC²' when they found him!"
    },
    {
      setup: "Why was Schrödinger's cat such a terrible musician?",
      punchline: "Because it couldn't decide whether the note was dead or alive!"
    }
  ];

  const einsteinQuotes = [
    "Time is an illusion. Lunchtime doubly so!",
    "If E=MC², then comedy must equal tragedy plus timing!",
    "The most incomprehensible thing about the world is that it is at all comprehensible... and also memes.",
    "Two things are infinite: the universe and human comedy; and I'm not sure about the universe!"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900">
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
              <Laugh size={isMobile ? 36 : 48} className="mx-auto text-yellow-400 mb-4" />
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
                  src="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d" 
                  alt="Vintage comedy microphone with blurred background" 
                  className="rounded-lg shadow-xl w-full h-[280px] md:h-[500px] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black p-2 md:p-3 rounded-full shadow-lg">
                  <Lightbulb size={isMobile ? 16 : 24} />
                </div>
              </motion.div>
              
              {/* Only show quotes on tablet and larger screens or limit them on mobile */}
              {einsteinQuotes.map((quote, index) => (
                ((!isMobile) || (isMobile && index < 2)) && (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 + (index * 0.2), duration: 0.5 }}
                    className={`absolute ${getQuotePosition(index, isMobile)} bg-white/90 dark:bg-black/80 p-2 md:p-3 rounded-lg shadow-lg transform ${getQuoteRotation(index)}`}
                  >
                    <p className="font-handwriting text-xs md:text-sm">
                      "{quote}"
                    </p>
                    <p className="text-right text-[10px] md:text-xs">- Einstein (probably)</p>
                  </motion.div>
                )
              ))}
            </div>
            
            <div className="flex flex-col justify-center">
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 gradient-blue-purple">Einstein's Comedy Theory</h3>
                <p className="mb-4 text-sm md:text-base">
                  Welcome to the quantum realm of comedy, where jokes travel faster than light and laughter bends the fabric of spacetime!
                </p>
                <p className="mb-6 text-sm md:text-base">
                  Did you know that according to Einstein's little-known "Comedy Theory of Relativity," time actually slows down during bad jokes and speeds up during good ones? That's why great comedy seems to end too quickly!
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <FuturisticButton href="#jokes" variant="secondary" size={isMobile ? "sm" : "md"}>
                    <Laugh className="mr-2" size={isMobile ? 14 : 18} />
                    See Quantum Jokes
                  </FuturisticButton>
                  <FuturisticButton href="#time-dilation" size={isMobile ? "sm" : "md"}>
                    <Clock className="mr-2" size={isMobile ? 14 : 18} />
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
            className="glass-card p-4 md:p-8 mb-16"
            id="jokes"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
              <Zap className="mr-2 text-yellow-400" size={isMobile ? 20 : 24} />
              Quantum Jokes
            </h2>
            
            <div className="space-y-4 md:space-y-8">
              {comedyJokes.map((joke, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 md:p-6"
                >
                  <p className="text-base md:text-lg font-medium mb-2 md:mb-3">{joke.setup}</p>
                  <p className="text-lg md:text-xl font-bold text-yellow-400">{joke.punchline}</p>
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
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 inline-flex items-center">
              <Clock className="mr-2 text-purple-400" size={isMobile ? 20 : 24} />
              Comedy Time Dilation Experiment
            </h2>
            
            <div className="max-w-2xl mx-auto glass-card p-4 md:p-8 rounded-xl">
              <p className="mb-6 text-sm md:text-base">
                According to Einstein's theory, time moves slower when you're having fun. Test it yourself with this interactive experiment!
              </p>
              
              <div className="mb-8">
                <motion.div 
                  className="flex justify-center mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <Brain size={isMobile ? 36 : 48} className="text-purple-400 animate-pulse-glow" />
                </motion.div>
                
                <div className="relative h-8 bg-white/10 rounded-full overflow-hidden">
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
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-full flex items-center justify-center text-white font-bold text-xs md:text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    Your brain is perceiving time differently!
                  </motion.div>
                </div>
                <div className="flex justify-between mt-2 text-xs md:text-sm text-white/60">
                  <span>Reality: 10 sec</span>
                  <span>Your perception: 5 sec</span>
                </div>
              </div>
              
              <p className="text-base md:text-lg font-medium">
                This illusion demonstrates how your perception of time changes when engaged with something interesting - just like Einstein predicted!
              </p>
              
              <motion.div
                className="mt-6 p-3 md:p-4 bg-white/5 border border-white/10 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <p className="text-xs md:text-sm italic">
                  "The distinction between the past, present and future is only a stubbornly persistent illusion... especially when watching TikTok videos."
                </p>
                <p className="text-right text-[10px] md:text-xs mt-2">- Albert Einstein (with modern update)</p>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="text-center">
            <LiteraryQuote
              text="Humor is mankind's greatest blessing. Time spent laughing is time spent with the gods."
              author="Mark Twain & Albert Einstein"
              source="The Theory of Comedic Relativity"
              style="jobs"
              className="max-w-2xl mx-auto text-sm md:text-base"
            />
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <Link to="/experiments">
                <FuturisticButton variant="primary" size={isMobile ? "sm" : "lg"}>
                  <Rocket className="mr-2" size={isMobile ? 14 : 18} />
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

// Helper function to position quotes around the Einstein image with mobile adjustments
const getQuotePosition = (index: number, isMobile: boolean = false) => {
  const positions = isMobile 
    ? [
        "top-2 right-2 max-w-[100px]",
        "top-16 -left-4 max-w-[110px]",
        "bottom-8 -left-2 max-w-[100px]",
        "bottom-16 right-2 max-w-[110px]"
      ]
    : [
        "top-4 right-4",
        "top-20 -left-10 max-w-[140px]",
        "bottom-10 -left-4 max-w-[160px]",
        "bottom-24 right-4 max-w-[150px]"
      ];
  return positions[index % positions.length];
};

// Helper function to rotate quotes slightly for a more dynamic feel
const getQuoteRotation = (index: number) => {
  const rotations = [
    "rotate-6",
    "rotate-negative-4",
    "rotate-2",
    "rotate-negative-6"
  ];
  return rotations[index % rotations.length];
};

export default ComedyHub;
