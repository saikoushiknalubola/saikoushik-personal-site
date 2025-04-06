
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import FuturisticButton from '@/components/FuturisticButton';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExperienceJourney = () => {
  const experiences = [
    {
      year: "2048-2050",
      title: "Quantum Reality Architect",
      company: "Hyperion Dimensional Labs",
      description: "Leading the development of neural interfaces that merge human consciousness with quantum computing architectures. Pioneered the 'Thought-to-Code' methodology that revolutionized software development by directly translating conceptual thinking into executable systems."
    },
    {
      year: "2045-2048",
      title: "Neurotech Engineering Lead",
      company: "Cognition Expansion Institute",
      description: "Designed AI systems that adapt to human brain patterns, creating personalized learning experiences that accelerated knowledge acquisition by 300%. Developed the first commercially viable brain-computer interface for mass consumer adoption."
    },
    {
      year: "2042-2045",
      title: "Founder & Chief Innovation Officer",
      company: "Revitalize Innovations",
      description: "Founded revolutionary startup focused on sustainable technology solutions. Secured $50M in funding within first year through groundbreaking pitch that combined holographic presentation with real-time neural feedback."
    },
    {
      year: "2039-2042",
      title: "AI Ethics Whistleblower & Advocate",
      company: "Global Technology Reform Initiative",
      description: "Exposed critical vulnerabilities in worldwide AI governance systems. Testimony before World Technology Council led to implementation of Universal AI Ethics Framework now used by all major tech corporations."
    },
    {
      year: "2037-2039",
      title: "Quantum Computing Specialist",
      company: "Future Systems Corporation",
      description: "Pioneered breakthrough in quantum error correction that increased qubit stability by 87%. Worked on classified projects integrating quantum processing with neural network architectures."
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <Navigation />
      
      <motion.div 
        className="container mx-auto pt-32 pb-20 px-4 md:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <Link to="/">
            <FuturisticButton variant="ghost" size="sm">
              <ArrowLeft className="mr-2" size={16} />
              Back to Timeline
            </FuturisticButton>
          </Link>
        </div>
        
        <SectionHeader 
          title="Chronological Experience Journal" 
          subtitle="A glimpse through the space-time continuum of my professional evolution"
          style="futuristic"
          theoryReference="einstein"
        />
        
        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-1 bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-purple"></div>
          
          {/* Experience items */}
          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Time marker */}
                <div className="absolute left-[-15px] md:left-1/2 md:transform md:translate-x-[-50%] top-0 w-8 h-8 rounded-full bg-neon-purple glow-effect flex items-center justify-center z-10">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                
                {/* Year */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} mb-4 md:mb-0`}>
                  <div className="inline-block font-mono text-neon-purple text-xl bg-black/50 px-3 py-1 rounded backdrop-blur-sm">
                    {exp.year}
                  </div>
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} glass-card p-6 backdrop-blur-xl hover:scale-105 transition-transform duration-500`}>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-neon-cyan mb-4 font-semibold">{exp.company}</p>
                  <p className="text-white/80 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceJourney;
