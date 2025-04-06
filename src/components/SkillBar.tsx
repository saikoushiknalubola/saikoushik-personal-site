
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  emoji?: string;
  className?: string;
  style?: 'default' | 'neon' | 'split' | 'futuristic' | 'dostoevsky' | 'apple';
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  name, 
  percentage, 
  color = 'bg-neon-purple',
  emoji,
  className,
  style = 'default'
}) => {
  const barRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create floating particles effect for futuristic style
    if (style === 'futuristic' && barRef.current) {
      const bar = barRef.current;
      const createParticle = () => {
        const particle = document.createElement('div');
        particle.classList.add('absolute', 'w-1', 'h-1', 'rounded-full', 'bg-white/40');
        
        // Random position along the filled portion of the bar
        const barWidth = bar.offsetWidth * (percentage / 100);
        const posX = Math.random() * barWidth;
        const posY = Math.random() * bar.offsetHeight;
        
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.opacity = '0';
        
        // Animate the particle
        particle.animate(
          [
            { opacity: 0, transform: 'translateY(0)' },
            { opacity: 1, transform: 'translateY(-10px)' },
            { opacity: 0, transform: 'translateY(-20px)' }
          ],
          {
            duration: 1500,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }
        );
        
        bar.appendChild(particle);
        setTimeout(() => particle.remove(), 1500);
      };
      
      // Create particles at random intervals
      const interval = setInterval(() => {
        createParticle();
      }, 500);
      
      return () => clearInterval(interval);
    }
  }, [percentage, style]);
  
  const getStyleClasses = () => {
    switch(style) {
      case 'neon':
        return "shadow-[0_0_15px_rgba(139,92,246,0.6)]";
      case 'split':
        return "bg-gradient-to-r from-neon-purple to-neon-cyan";
      case 'futuristic':
        return "bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 relative after:content-[''] after:absolute after:inset-0 after:bg-white after:opacity-20 after:animate-pulse";
      case 'dostoevsky':
        return "bg-gradient-to-r from-red-700 to-red-900";
      case 'apple':
        return "bg-gradient-to-r from-blue-400 to-blue-600 rounded-full backdrop-blur-sm";
      default:
        return color;
    }
  };
  
  return (
    <motion.div 
      className={cn("mb-6 transform transition-all duration-300 hover:scale-[1.01]", className)}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-2">
        <motion.span 
          className="font-medium flex items-center"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {emoji && <span className="mr-2 text-lg">{emoji}</span>}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            {name}
          </span>
        </motion.span>
        <span className="text-white/60 font-mono text-sm">
          <span className="text-white/80">{percentage}</span>
          <span className="text-white/40">%</span>
        </span>
      </div>
      
      <div className="relative h-3 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
        {/* Skill level bar */}
        <motion.div 
          ref={barRef}
          className={cn("h-full rounded-full transition-all duration-1000 relative", getStyleClasses())}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-white/10"></div>
          
          {/* Animated glow effect for apple style */}
          {style === 'apple' && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" 
              style={{ backgroundSize: '200% 100%' }}></div>
          )}
        </motion.div>
        
        {/* Digital metric markers */}
        <div className="absolute inset-0 flex justify-between items-center px-1 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-full w-[1px] bg-white/5"></div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillBar;
