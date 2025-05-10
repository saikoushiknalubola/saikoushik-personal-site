
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Lightbulb, Award, Rocket, Brain } from 'lucide-react';
import FuturisticButton from './FuturisticButton';

interface InnovationItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const InnovationTimeline: React.FC = () => {
  const innovations: InnovationItem[] = [
    {
      year: "1999",
      title: "Quantum Insight",
      description: "A revolutionary theory combining quantum mechanics and user experience design principles.",
      icon: <Brain size={24} />,
      color: "from-purple-500 to-blue-500"
    },
    {
      year: "2004",
      title: "Gravity OS Alpha",
      description: "The first prototype of the Gravity-responsive operating system, changing how we interact with devices.",
      icon: <Lightbulb size={24} />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2009",
      title: "Time Capsule Award",
      description: "Honored for pioneering work in temporal data compression and visualization.",
      icon: <Award size={24} />,
      color: "from-green-500 to-emerald-500"
    },
    {
      year: "2015",
      title: "Spacetime Launch",
      description: "The first successful deployment of the Spacetime communication platform.",
      icon: <Rocket size={24} />,
      color: "from-orange-500 to-red-500"
    },
    {
      year: "2022",
      title: "Quantum Present",
      description: "Current innovations in quantum computing and artificial intelligence.",
      icon: <Clock size={24} />,
      color: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <div className="w-full py-12">
      <div className="space-y-2 mb-10">
        <h3 className="text-2xl md:text-3xl font-sf font-semibold tracking-tight text-center">Innovation Timeline</h3>
        <p className="text-muted-foreground text-center max-w-xl mx-auto">
          A journey through time, showcasing the evolution of revolutionary ideas.
        </p>
      </div>
      
      {/* Timeline container */}
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 opacity-50"></div>
        
        <div className="space-y-16 relative">
          {innovations.map((item, index) => (
            <motion.div 
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Year bubble */}
              <div className="flex-1 md:text-right md:pr-8 order-2 md:order-none">
                <motion.div 
                  className={`inline-flex p-px rounded-lg overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`bg-gradient-to-r ${item.color} p-3 rounded-lg text-white font-sf font-medium text-lg tracking-tight`}>
                    {item.year}
                  </div>
                </motion.div>
              </div>
              
              {/* Center icon */}
              <div className="relative z-10 mx-4 my-4">
                <motion.div 
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}
                  animate={{ 
                    boxShadow: ["0 0 0 rgba(139, 92, 246, 0.4)", "0 0 20px rgba(139, 92, 246, 0.6)", "0 0 0 rgba(139, 92, 246, 0.4)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {item.icon}
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="flex-1 md:pl-8 order-1 md:order-none glass-card p-6">
                <h4 className="text-xl font-sf font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
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
