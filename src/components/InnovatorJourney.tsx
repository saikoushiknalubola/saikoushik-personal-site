
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Compass, Sparkles, Link, Rocket, Coffee } from 'lucide-react';
import { cn } from '@/lib/utils';
import FuturisticButton from './FuturisticButton';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Skeleton } from '@/components/ui/skeleton';

interface InnovatorJourneyProps {
  className?: string;
}

const InnovatorJourney: React.FC<InnovatorJourneyProps> = ({ className }) => {
  const [activePhilosophy, setActivePhilosophy] = useState<number>(0);
  
  const philosophies = [
    {
      id: 0,
      title: "Curiosity and Wonder",
      icon: Compass,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      einsteinQuote: "I have no special talent. I am only passionately curious.",
      jobsQuote: "Stay hungry, stay foolish.",
      description: "Both Einstein and Jobs were driven by an insatiable curiosity about the world around them. Einstein's wonder about the physical universe led to revolutionary theories, while Jobs' curiosity about human experience led to revolutionary products."
    },
    {
      id: 1,
      title: "Simplicity and Elegance",
      icon: Sparkles,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      einsteinQuote: "If you can't explain it simply, you don't understand it well enough.",
      jobsQuote: "Simple can be harder than complex. You have to work hard to get your thinking clean to make it simple.",
      description: "Both innovators valued elegance and simplicity. Einstein searched for unified, elegant theories that explained complex phenomena, while Jobs insisted on stripping away complexity to create intuitive products and experiences."
    },
    {
      id: 2,
      title: "Thinking Differently",
      icon: Lightbulb,
      color: "text-amber-400",
      bgColor: "bg-amber-400/10",
      einsteinQuote: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
      jobsQuote: "Think different. The people who are crazy enough to think they can change the world are the ones who do.",
      description: "Both were notorious for challenging conventional wisdom. Einstein's thought experiments led to revolutionary ideas about space and time, while Jobs' contrarian approach to design and business transformed multiple industries."
    },
    {
      id: 3,
      title: "Connecting Dots",
      icon: Link,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      einsteinQuote: "Combinatory play seems to be the essential feature in productive thought.",
      jobsQuote: "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something.",
      description: "Both understood the power of cross-disciplinary thinking. Einstein combined physics and mathematics in new ways, while Jobs merged technology, liberal arts, and design to create unprecedented products."
    },
    {
      id: 4,
      title: "Perseverance Through Failure",
      icon: Rocket,
      color: "text-red-400",
      bgColor: "bg-red-400/10",
      einsteinQuote: "It's not that I'm so smart, it's just that I stay with problems longer.",
      jobsQuote: "Sometimes life hits you in the head with a brick. Don't lose faith.",
      description: "Both faced significant failures and setbacks. Einstein's theories were initially rejected by the scientific establishment, while Jobs was famously fired from his own company. Both used these failures as stepping stones to greater achievements."
    },
  ];

  // Get the current philosophy's icon component
  const ActiveIcon = philosophies[activePhilosophy].icon;

  return (
    <div className={cn("my-16 p-6 rounded-xl glass-card-glow relative overflow-hidden", className)}>
      {/* Background grid element */}
      <div className="absolute inset-0 w-full h-full opacity-10">
        <div className="absolute inset-0 w-full h-full grid grid-cols-12 grid-rows-12">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div 
              key={i}
              className="border-[0.5px] border-white/10"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3 + Math.random() * 5,
                delay: Math.random() * 2 
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-10">
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-sf font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            The Genius Philosophy
          </h3>
          <p className="text-white/70 max-w-3xl mx-auto">
            Einstein and Jobs: Two revolutionary thinkers separated by time but united by their approaches to innovation, creativity, and changing the world.
          </p>
          
          <div className="flex items-center justify-center mt-6 space-x-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400/70"></div>
            <div className="flex items-center space-x-1">
              <Coffee className="h-4 w-4 text-white/50" />
              <span className="text-white/50 text-sm">Journey of Ideas</span>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400/70"></div>
          </div>
        </motion.div>

        {/* Philosophy Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {philosophies.map((philosophy, idx) => {
            const PhilosophyIcon = philosophy.icon;
            return (
              <motion.button
                key={idx}
                className={cn(
                  "p-4 rounded-lg transition-all relative overflow-hidden",
                  activePhilosophy === idx ? philosophy.bgColor : "bg-black/20 hover:bg-black/30"
                )}
                onClick={() => setActivePhilosophy(idx)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col items-center justify-center">
                  <PhilosophyIcon 
                    className={cn("w-8 h-8 mb-3", activePhilosophy === idx ? philosophy.color : "text-white/60")} 
                  />
                  <span className={cn("font-medium text-sm md:text-base", activePhilosophy === idx ? philosophy.color : "text-white/80")}>
                    {philosophy.title}
                  </span>
                </div>
                
                {activePhilosophy === idx && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      backgroundColor: philosophy.color.replace('text-', 'bg-').split('-')[1],
                      transformOrigin: 'left'
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Philosophy Content */}
        <motion.div 
          className="p-6 rounded-xl bg-white/5 backdrop-blur-sm"
          key={activePhilosophy}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center mb-6">
            <div className={cn("p-3 rounded-full mr-3", philosophies[activePhilosophy].bgColor)}>
              <ActiveIcon className={philosophies[activePhilosophy].color} size={24} />
            </div>
            <h4 className={cn("text-xl font-medium", philosophies[activePhilosophy].color)}>
              {philosophies[activePhilosophy].title}
            </h4>
          </div>
          
          <p className="text-white/80 mb-8 leading-relaxed">
            {philosophies[activePhilosophy].description}
          </p>
          
          {/* Quote Comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Einstein Quote */}
            <div className="p-4 rounded-lg bg-black/30 border border-white/10">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center mr-3">
                  <span className="font-sf font-bold text-blue-400">E</span>
                </div>
                <h5 className="font-medium text-white/90">Einstein</h5>
              </div>
              <p className="italic text-white/80">&ldquo;{philosophies[activePhilosophy].einsteinQuote}&rdquo;</p>
            </div>
            
            {/* Jobs Quote */}
            <div className="p-4 rounded-lg bg-black/30 border border-white/10">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-apple-blue/20 flex items-center justify-center mr-3">
                  <span className="font-sf font-bold text-apple-blue">J</span>
                </div>
                <h5 className="font-medium text-white/90">Jobs</h5>
              </div>
              <p className="italic text-white/80">&ldquo;{philosophies[activePhilosophy].jobsQuote}&rdquo;</p>
            </div>
          </div>
          
          {/* Expandable Section */}
          <div className="mt-6">
            <Collapsible>
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-center p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                  <span className="text-white/70 text-sm mr-2">Learn how to apply this philosophy</span>
                  <Sparkles size={16} className="text-white/50" />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="p-4 mt-4 bg-black/20 rounded-lg">
                  {activePhilosophy === 0 && (
                    <div className="space-y-4">
                      <h6 className="font-medium text-blue-400">Cultivating Curiosity</h6>
                      <p className="text-white/70">Ask questions that challenge assumptions. Both Einstein and Jobs were known for questioning everything, from the nature of space and time to why products were designed a certain way.</p>
                      <p className="text-white/70">Practice looking at familiar things with fresh eyes. Jobs would regularly ask "Why?" like a child, even about established products or processes.</p>
                    </div>
                  )}
                  
                  {activePhilosophy === 1 && (
                    <div className="space-y-4">
                      <h6 className="font-medium text-purple-400">Finding Elegance</h6>
                      <p className="text-white/70">Einstein believed that the most profound theories should be expressible in simple terms. Similarly, Jobs pushed designers to remove buttons, simplify interfaces, and make products intuitively usable.</p>
                      <p className="text-white/70">Practice by explaining complex concepts in simple terms, or by removing unnecessary elements from your work until only the essential remains.</p>
                    </div>
                  )}
                  
                  {activePhilosophy === 2 && (
                    <div className="space-y-4">
                      <h6 className="font-medium text-amber-400">Thinking Differently</h6>
                      <p className="text-white/70">Einstein used thought experiments to challenge conventional physics. Jobs rejected market research in favor of his own vision of what products could be.</p>
                      <p className="text-white/70">Practice by deliberately taking an opposing viewpoint to conventional wisdom in your field, or by combining ideas from different disciplines.</p>
                    </div>
                  )}
                  
                  {activePhilosophy === 3 && (
                    <div className="space-y-4">
                      <h6 className="font-medium text-green-400">Connecting Dots</h6>
                      <p className="text-white/70">Einstein was fascinated by music and played the violin, which influenced his scientific thinking. Jobs credited a calligraphy course with influencing the typography in Macintosh computers.</p>
                      <p className="text-white/70">Practice by studying subjects outside your expertise and looking for patterns or principles that could apply to your work.</p>
                    </div>
                  )}
                  
                  {activePhilosophy === 4 && (
                    <div className="space-y-4">
                      <h6 className="font-medium text-red-400">Embracing Failure</h6>
                      <p className="text-white/70">Einstein's early papers were rejected, and his theories were not immediately accepted. Jobs was fired from Apple before returning to lead its greatest era of innovation.</p>
                      <p className="text-white/70">Practice by reframing setbacks as learning opportunities and by remaining committed to your vision even when faced with skepticism.</p>
                    </div>
                  )}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </motion.div>
        
        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-center">
          <FuturisticButton 
            variant="secondary" 
            size="sm"
            className="btn-glow"
            onClick={() => setActivePhilosophy((activePhilosophy + 1) % philosophies.length)}
          >
            Next Philosophy
          </FuturisticButton>
        </div>
      </div>
    </div>
  );
};

export default InnovatorJourney;
