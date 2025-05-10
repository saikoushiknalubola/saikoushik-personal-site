
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Lightbulb, Award, Rocket, Brain, Zap, Globe, HeartPulse } from 'lucide-react';
import FuturisticButton from './FuturisticButton';
import { format } from 'date-fns';

interface InnovationItem {
  year: string;
  date?: Date; // Optional exact date
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const InnovationTimeline: React.FC = () => {
  const innovations: InnovationItem[] = [
    {
      year: "1999",
      date: new Date(1999, 5, 12), // June 12, 1999
      title: "Quantum Insight",
      description: "A revolutionary theory combining quantum mechanics and user experience design principles, introducing the concept of temporal interface adaptation.",
      icon: <Brain size={24} />,
      color: "from-purple-500 to-blue-500"
    },
    {
      year: "2004",
      date: new Date(2004, 2, 24), // March 24, 2004
      title: "Gravity OS Alpha",
      description: "The first prototype of the Gravity-responsive operating system, changing how we interact with devices through depth-sensing technology and natural physics.",
      icon: <Lightbulb size={24} />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2009",
      date: new Date(2009, 9, 8), // October 8, 2009
      title: "Time Capsule Award",
      description: "Honored for pioneering work in temporal data compression and visualization, enabling new forms of information archival and retrieval across time dimensions.",
      icon: <Award size={24} />,
      color: "from-green-500 to-emerald-500"
    },
    {
      year: "2015",
      date: new Date(2015, 4, 17), // May 17, 2015
      title: "Spacetime Launch",
      description: "The first successful deployment of the Spacetime communication platform, bridging the gap between quantum computing and human-readable interfaces.",
      icon: <Rocket size={24} />,
      color: "from-orange-500 to-red-500"
    },
    {
      year: "2018",
      date: new Date(2018, 1, 3), // February 3, 2018
      title: "Neural Bridge",
      description: "Created the first direct neural interface for intuitive device control through thought patterns, revolutionizing accessibility technology.",
      icon: <HeartPulse size={24} />,
      color: "from-red-500 to-pink-500"  
    },
    {
      year: "2020",
      date: new Date(2020, 7, 21), // August 21, 2020
      title: "Global Energy Grid",
      description: "Initiated the distributed quantum energy grid project, utilizing Einstein's principles to harness and share zero-point energy worldwide.",
      icon: <Globe size={24} />,
      color: "from-teal-500 to-cyan-500"
    },
    {
      year: "2022",
      date: new Date(2022, 11, 5), // December 5, 2022
      title: "Quantum Present",
      description: "Current innovations in quantum computing and artificial intelligence, merging consciousness theory with computational principles.",
      icon: <Clock size={24} />,
      color: "from-pink-500 to-purple-500"
    }
  ];

  // Format a date nicely
  const formatDate = (date: Date | undefined) => {
    if (!date) return "";
    return format(date, "MMM d, yyyy");
  };

  return (
    <div className="w-full py-12">
      <div className="space-y-2 mb-10">
        <h3 className="text-2xl md:text-3xl font-playfair font-semibold tracking-tight text-center">Innovation Timeline</h3>
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
                  className={`inline-flex p-px rounded-lg overflow-hidden flex-col`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`bg-gradient-to-r ${item.color} p-3 rounded-lg text-white font-playfair font-medium text-lg tracking-tight`}>
                    {item.year}
                    {item.date && (
                      <div className="text-xs font-light mt-1 opacity-80">
                        {formatDate(item.date)}
                      </div>
                    )}
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
                <h4 className="text-xl font-playfair font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground font-inter">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-16">
        <FuturisticButton 
          variant="secondary"
          className="font-playfair font-medium tracking-tight"
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
