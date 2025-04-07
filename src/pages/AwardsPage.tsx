
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import SectionHeader from '@/components/SectionHeader';
import FuturisticButton from '@/components/FuturisticButton';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const AwardsPage = () => {
  const awards = [
    {
      title: "First Place - National AI Innovation Challenge",
      organization: "Ministry of Electronics and Information Technology",
      date: "March 2025",
      description: "Developed a novel quantum-inspired algorithm for optimizing renewable energy distribution networks that outperformed traditional approaches by 43% in real-world testing environments.",
      image: "/lovable-uploads/fe1bcb19-a6fc-49ad-94ac-da69273261a7.png",
    },
    {
      title: "IIT Bombay Entrepreneurship Summit Finalist",
      organization: "IIT Bombay E-Cell",
      date: "November 2024",
      description: "Selected among top 5 startups from over 500 applicants for revolutionary EV battery technology that extends range by 35% while reducing charging time by half.",
      image: "/lovable-uploads/9a6e6906-e56d-43ed-86e1-598f0bbeef3d.png",
    },
    {
      title: "Emerging Technologist Award",
      organization: "Future Technology Foundation",
      date: "January 2025",
      description: "Recognized for contributions to sustainable technology development and ethical AI implementation in resource-constrained environments.",
      image: "/lovable-uploads/5b6abb0a-b304-45e9-bb26-436dcdb02785.png",
    },
    {
      title: "Certificate of Excellence - Idea Pitching Competition",
      organization: "Startup India Initiative",
      date: "February 2025",
      description: "Awarded for the innovative presentation of Revitalize Innovations' water purification drone technology designed for remote villages.",
      image: "/lovable-uploads/20bf0f10-2783-44da-8f19-f2f365af1cb7.png",
    },
    {
      title: "EUREKA 2024 - Road to Enterprise Winner",
      organization: "E-CELL IIT Bombay",
      date: "November 2024",
      description: "Won first place in the startup track for innovative approach to solving electric vehicle adoption challenges in rural areas.",
      image: "/lovable-uploads/41e76e68-4249-4679-82aa-dc08a14636ea.png",
    },
    {
      title: "Innovation Leader Recognition",
      organization: "Indian Institute of Technology",
      date: "December 2024",
      description: "Recognized for leading a multidisciplinary team of 8 students to develop a proof-of-concept for quantum-secured communication channels.",
      image: "/lovable-uploads/931d5d56-b50c-44d2-b01e-6416eeb2bb98.png",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black/70 to-purple-900/30">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
          
          <SectionHeader 
            title="Awards & Recognitions" 
            subtitle="Milestones along the quantum journey through innovation and disruption"
            style="rebel"
            theoryReference="einstein"
          />
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-neon-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
                
                <div className="relative z-10">
                  <div className="aspect-video rounded-lg overflow-hidden mb-6">
                    <img 
                      src={award.image} 
                      alt={award.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold leading-tight">{award.title}</h3>
                      <p className="text-neon-purple mt-1">{award.organization}</p>
                    </div>
                    <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs font-medium">
                      {award.date}
                    </span>
                  </div>
                  
                  <p className="text-white/80 mb-6">
                    {award.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <button className="text-neon-purple hover:text-purple-400 transition-colors flex items-center text-sm font-medium">
                      View Certificate
                      <ExternalLink size={14} className="ml-1" />
                    </button>
                    
                    <div className="flex space-x-2">
                      {index === 0 && (
                        <span className="bg-neon-purple/20 text-neon-purple px-2 py-1 rounded text-xs">
                          First Place
                        </span>
                      )}
                      {index === 1 && (
                        <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">
                          Top 5
                        </span>
                      )}
                      {index === 4 && (
                        <span className="bg-neon-purple/20 text-neon-purple px-2 py-1 rounded text-xs">
                          Winner
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-white/60 mb-6 max-w-2xl mx-auto">
              These awards represent milestones along a continuing journey. The true reward is seeing how these innovations positively impact communities and inspire others to pursue their own quantum leaps.
            </p>
            
            <FuturisticButton href="/journey" variant="secondary">
              View Complete Journey Timeline
            </FuturisticButton>
          </div>
        </div>
      </section>
      
      <footer className="py-8 px-4 md:px-8 border-t border-white/10 bg-black/50">
        <div className="container mx-auto">
          <p className="text-center text-white/60">
            © {new Date().getFullYear()} Saikoushik Nalubola. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AwardsPage;
