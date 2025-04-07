
import React, { useState } from 'react';
import { motion } from 'framer-motion';

type HolographicCardProps = {
  title: string;
  content: string | React.ReactNode;
  image?: string;
  icon?: React.ReactNode;
  className?: string;
};

const HolographicCard: React.FC<HolographicCardProps> = ({
  title,
  content,
  image,
  icon,
  className = '',
}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    
    // Calculate tilt effect
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20; // Adjust divisor for tilt intensity
    const rotateY = (centerX - x) / 20; // Negative because of the perspective
    
    setRotate({ x: rotateX, y: rotateY });
  };
  
  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };
  
  return (
    <motion.div
      className={`relative w-full overflow-hidden rounded-xl ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative glass-card p-6 h-full z-10 backdrop-blur-lg border border-white/20 overflow-hidden">
        {/* Holographic gradient effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-neon-purple/30 via-transparent to-cyan-500/30 opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{ opacity: isHovered ? 0.7 : 0 }}
        />
        
        {/* Shimmer effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:100%_100%] animate-shimmer opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            {icon && <div className="text-neon-purple text-2xl flex items-center justify-center">{icon}</div>}
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          
          {image && (
            <div className="mb-4 rounded-md overflow-hidden">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
          )}
          
          <div className="text-white/80">{content}</div>
        </div>
      </div>
      
      {/* Bottom and right edge effect for depth */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-neon-purple/30 transform transition-all duration-300"
        style={{ 
          opacity: isHovered ? 1 : 0.3,
          boxShadow: isHovered ? '0 0 10px 1px rgba(139, 92, 246, 0.5)' : 'none'
        }}
      />
      <div 
        className="absolute top-0 bottom-0 right-0 w-1 bg-neon-purple/30 transform transition-all duration-300"
        style={{ 
          opacity: isHovered ? 1 : 0.3,
          boxShadow: isHovered ? '0 0 10px 1px rgba(139, 92, 246, 0.5)' : 'none'
        }}
      />
    </motion.div>
  );
};

export default HolographicCard;
