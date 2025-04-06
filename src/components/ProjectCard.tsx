
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  emoji: string;
  className?: string;
  tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  emoji,
  className,
  tags = []
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!cardRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const card = cardRef.current;
      if (!card) return;
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
      card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.12), transparent 50%)`;
    };
    
    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      cardRef.current.style.background = '';
    };
    
    const card = cardRef.current;
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative backdrop-blur-xl bg-black/10 p-6 rounded-2xl transition-all duration-300 border border-white/10 hover:border-white/20 overflow-hidden",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Neural network pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-network" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="currentColor" />
              <path d="M10 0V20M0 10H20" stroke="currentColor" strokeWidth="0.5" />
              <path d="M0 0L20 20M20 0L0 20" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#neural-network)" />
        </svg>
      </div>
      
      {/* Animated emoji with floating effect */}
      <div className="text-5xl mb-6 transform transition-all duration-300 hover:scale-110 animate-float relative z-10">
        <div className="relative">
          {emoji}
          <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl -z-10"></div>
        </div>
      </div>
      
      {/* Title with glow effect */}
      <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 relative">
        {title}
        <span className="absolute -bottom-1 left-0 w-12 h-[2px] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></span>
      </h3>
      
      {/* Description */}
      <p className="text-white/70 mb-5 leading-relaxed">{description}</p>
      
      {/* Tags with enhanced styling */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-white/5 text-xs font-medium py-1 px-3 rounded-full backdrop-blur-md border border-white/10 
              hover:bg-white/10 transition-colors duration-300 hover:border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {/* Futuristic corner accents */}
      <div className="absolute top-0 right-0 w-10 h-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[1px] h-5 bg-gradient-to-b from-transparent to-white/30"></div>
        <div className="absolute top-0 right-0 h-[1px] w-5 bg-gradient-to-l from-transparent to-white/30"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-10 h-10 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[1px] h-5 bg-gradient-to-t from-transparent to-white/30"></div>
        <div className="absolute bottom-0 left-0 h-[1px] w-5 bg-gradient-to-r from-transparent to-white/30"></div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
