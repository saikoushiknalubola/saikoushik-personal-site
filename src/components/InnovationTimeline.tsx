
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Lightbulb, Award, Rocket, Brain, Zap } from 'lucide-react';
import FuturisticButton from './FuturisticButton';
import { AspectRatio } from './ui/aspect-ratio';
import { cn } from '@/lib/utils';

interface InnovationItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image?: string;
}

const InnovationTimeline: React.FC = () => {
  const innovations: InnovationItem[] = [
    {
      year: "January 1999",
      title: "Quantum Insight",
      description: "A revolutionary theory combining quantum mechanics and user experience design principles, changing how we understand digital interactions.",
      icon: <Brain size={24} />,
      color: "from-purple-500 to-blue-500",
      image: "/lovable-uploads/f0143cf4-be0c-4ab7-a1f4-5d1dc1f2a130.png"
    },
    {
      year: "August 2004",
      title: "Gravity OS Alpha",
      description: "The first prototype of the Gravity-responsive operating system, changing how we interact with devices through intuitive physics-based interfaces.",
      icon: <Lightbulb size={24} />,
      color: "from-blue-500 to-cyan-500",
      image: "/lovable-uploads/7ea5b8d5-7a81-44f2-8b07-12e54b50a705.png"
    },
    {
      year: "October 2009",
      title: "Time Capsule Award",
      description: "Honored for pioneering work in temporal data compression and visualization, enabling groundbreaking advances in information storage.",
      icon: <Award size={24} />,
      color: "from-green-500 to-emerald-500"
    },
    {
      year: "March 2015",
      title: "Spacetime Launch",
      description: "The first successful deployment of the Spacetime communication platform, allowing instant data transfer regardless of physical distance.",
      icon: <Rocket size={24} />,
      color: "from-orange-500 to-red-500",
      image: "/lovable-uploads/0e5f08c1-a594-4014-8c44-bda687324f62.png"
    },
    {
      year: "Present 2025",
      title: "Quantum Present",
      description: "Current innovations in quantum computing and artificial intelligence, leading the way toward a more integrated technological future.",
      icon: <Zap size={24} />,
      color: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <div className="w-full py-12 font-sf">
      <div className="space-y-2 mb-12">
        <h3 className="text-2xl md:text-3xl font-sf font-semibold tracking-tight text-center">Innovation Timeline</h3>
        <p className="text-muted-foreground text-center max-w-xl mx-auto">
          A journey through time, showcasing the evolution of revolutionary ideas.
        </p>
      </div>
      
      {/* Timeline container */}
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 opacity-70"></div>
        
        <div className="space-y-20 relative">
          {innovations.map((item, index) => (
            <motion.div 
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Year bubble */}
              <div className={`flex-1 md:text-${index % 2 === 0 ? 'right md:pr-8' : 'left md:pl-8'} order-2 md:order-none`}>
                <motion.div 
                  className="inline-flex p-px rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`bg-gradient-to-r ${item.color} p-3 rounded-lg text-white font-sf font-medium text-lg tracking-tight`}>
                    {item.year}
                  </div>
                </motion.div>
              </div>
              
              {/* Center icon */}
              <div className="relative z-10 mx-4 my-6">
                <motion.div 
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                  animate={{ 
                    boxShadow: ["0 0 0 rgba(139, 92, 246, 0.4)", "0 0 25px rgba(139, 92, 246, 0.7)", "0 0 0 rgba(139, 92, 246, 0.4)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-white">
                    {item.icon}
                  </div>
                </motion.div>
              </div>
              
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} order-1 md:order-none`}>
                <div className="glass-card p-6 backdrop-blur-xl bg-black/30 border border-white/10 rounded-xl">
                  <h4 className="text-xl font-sf font-semibold mb-2">{item.title}</h4>
                  
                  {item.image && (
                    <div className="mb-4 rounded-md overflow-hidden">
                      <AspectRatio ratio={16/9} className="bg-muted">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover rounded-md transition-transform hover:scale-105 duration-700"
                        />
                      </AspectRatio>
                    </div>
                  )}
                  
                  <p className="text-white/80">{item.description}</p>
                </div>
                
                {/* Decorative corner elements */}
                <div className={cn("absolute top-0 right-0 w-10 h-10 pointer-events-none overflow-hidden", 
                                    index % 2 === 0 ? "hidden md:block" : "block")}>
                  <div className="absolute top-0 right-0 w-[1px] h-5 bg-gradient-to-b from-transparent to-neon-purple/30"></div>
                  <div className="absolute top-0 right-0 h-[1px] w-5 bg-gradient-to-l from-transparent to-neon-purple/30"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-16">
        <FuturisticButton 
          variant="secondary"
          className="font-sf font-medium tracking-tight"
          animated
          glowIntensity="medium"
        >
          Explore All Innovations
        </FuturisticButton>
      </div>
    </div>
  );
};

export default InnovationTimeline;
