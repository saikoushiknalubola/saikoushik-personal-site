
import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  depth?: 'flat' | 'shallow' | 'deep';
  interactive?: boolean;
  glowColor?: string;
  style?: 'glass' | 'solid' | 'gradient' | 'quantum';
  onClick?: () => void;
  badge?: string;
  badgeColor?: string;
}

const EnhancedCard: React.FC<EnhancedCardProps> = ({
  children,
  className,
  depth = 'shallow',
  interactive = true,
  glowColor = 'rgba(139, 92, 246, 0.5)',
  style = 'glass',
  onClick,
  badge,
  badgeColor = 'bg-neon-purple'
}) => {
  // References and motion values for 3D card effect
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  
  // Smoother movements with spring physics
  const springX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };
  
  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    if (!interactive) return;
    
    x.set(0);
    y.set(0);
  };

  // Define depth styles
  const depthStyles = {
    flat: {
      boxShadow: style === 'glass' 
        ? '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        : '0 2px 8px rgba(0, 0, 0, 0.1)',
      transform: 'translateZ(0)'
    },
    shallow: {
      boxShadow: style === 'glass'
        ? '0 10px 30px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        : '0 10px 30px rgba(0, 0, 0, 0.15)',
      transform: 'translateZ(20px)'
    },
    deep: {
      boxShadow: style === 'glass'
        ? '0 20px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        : '0 20px 40px rgba(0, 0, 0, 0.2)',
      transform: 'translateZ(40px)'
    }
  };

  // Define style classes
  const styleClasses = {
    glass: "bg-white/5 backdrop-blur-md border border-white/10",
    solid: "bg-gray-900 border border-gray-800",
    gradient: "bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-white/5",
    quantum: "bg-gradient-to-br from-purple-900/30 via-black/30 to-blue-900/30 backdrop-blur-md border border-neon-purple/20"
  };
  
  const baseClasses = cn(
    "relative rounded-xl overflow-hidden transition-all duration-300",
    styleClasses[style],
    className
  );

  return (
    <motion.div
      ref={cardRef}
      className={baseClasses}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        ...depthStyles[depth],
        rotateX: interactive ? springX : 0,
        rotateY: interactive ? springY : 0,
        boxShadow: interactive 
          ? `0 10px 30px rgba(0, 0, 0, 0.15), 0 0 20px ${glowColor}`
          : depthStyles[depth].boxShadow,
      }}
      whileHover={interactive ? { scale: 1.02 } : {}}
      whileTap={interactive && onClick ? { scale: 0.98 } : {}}
    >
      {/* Animated inner glow effect */}
      {interactive && (
        <motion.div 
          className="absolute inset-0 opacity-0 pointer-events-none"
          style={{ 
            background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), ${glowColor} 0%, transparent 70%)`,
            opacity: x.get() !== 0 || y.get() !== 0 ? 0.15 : 0
          }}
          animate={{
            '--x': `${50 + (x.get() / 5)}%`,
            '--y': `${50 + (y.get() / 5)}%`,
          } as any}
        />
      )}

      {/* Badge if provided */}
      {badge && (
        <div className={`absolute top-2 right-2 ${badgeColor} text-white text-xs px-2 py-1 rounded-full z-10`}>
          {badge}
        </div>
      )}

      {/* Card content */}
      <div className="relative z-1">
        {children}
      </div>
    </motion.div>
  );
};

export default EnhancedCard;
