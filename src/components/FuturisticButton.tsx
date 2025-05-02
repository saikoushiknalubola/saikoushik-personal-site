
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface FuturisticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  icon?: React.ReactNode;
  animated?: boolean;
  pulseEffect?: boolean;
  glowIntensity?: 'low' | 'medium' | 'high';
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  onClick,
  className,
  variant = 'primary',
  size = 'md',
  href,
  to,
  icon,
  animated = true,
  pulseEffect = false,
  glowIntensity = 'medium'
}) => {
  const baseClasses = "relative overflow-hidden font-medium transition-all duration-300 flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-neon-purple hover:bg-purple-700 text-white shadow-[0_4px_15px_rgba(139,92,246,0.3)]",
    secondary: "bg-transparent border border-neon-purple text-neon-purple hover:bg-neon-purple/10 shadow-[0_4px_15px_rgba(139,92,246,0.15)]",
    ghost: "bg-transparent text-neon-purple hover:bg-white/5",
    gradient: "bg-gradient-to-r from-neon-purple to-future-primary text-white shadow-[0_4px_15px_rgba(139,92,246,0.3)]"
  };
  
  const sizeClasses = {
    sm: "text-sm px-4 py-2 rounded-md",
    md: "px-6 py-3 rounded-md",
    lg: "text-lg px-8 py-4 rounded-md"
  };
  
  const glowClasses = {
    low: "hover:shadow-[0_0_10px_rgba(139,92,246,0.3)]",
    medium: "hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]",
    high: "hover:shadow-[0_0_25px_rgba(139,92,246,0.7)]"
  };
  
  const ButtonContent = () => (
    <motion.div
      className="flex items-center justify-center w-full h-full"
      whileHover={animated ? { scale: 1.03 } : {}}
      whileTap={animated ? { scale: 0.98 } : {}}
    >
      {/* Glitch effect overlay */}
      <span className="absolute inset-0 w-full h-full bg-white opacity-0 hover:opacity-10 transition-opacity mix-blend-overlay"></span>
      
      {/* Animated border effect */}
      {variant !== 'ghost' && (
        <>
          <span className="absolute top-0 left-0 w-2 h-[1px] bg-white/70 animate-[slideRight_3s_infinite_linear]"></span>
          <span className="absolute top-0 right-0 w-[1px] h-2 bg-white/70 animate-[slideDown_3s_infinite_linear]"></span>
          <span className="absolute bottom-0 right-0 w-2 h-[1px] bg-white/70 animate-[slideLeft_3s_infinite_linear]"></span>
          <span className="absolute bottom-0 left-0 w-[1px] h-2 bg-white/70 animate-[slideUp_3s_infinite_linear]"></span>
        </>
      )}
      
      {/* Pulse effect for special emphasis */}
      {pulseEffect && variant !== 'ghost' && (
        <span className="absolute inset-0 bg-neon-purple rounded-md animate-pulse opacity-30"></span>
      )}
      
      {/* Button text with subtle text shadow */}
      <span className="relative z-10 shadow-glow flex items-center space-x-2">
        {icon && <span className="mr-2">{icon}</span>}
        <span>{children}</span>
      </span>
    </motion.div>
  );
  
  // Internal router navigation
  if (to) {
    return (
      <Link
        to={to}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          glowClasses[glowIntensity],
          className
        )}
      >
        <ButtonContent />
      </Link>
    );
  }
  
  // External link
  if (href) {
    return (
      <a
        href={href}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          glowClasses[glowIntensity],
          className
        )}
        target={href.startsWith('http') ? "_blank" : undefined}
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      >
        <ButtonContent />
      </a>
    );
  }
  
  // Regular button
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        glowClasses[glowIntensity],
        className
      )}
      whileHover={animated ? { scale: 1.03 } : {}}
      whileTap={animated ? { scale: 0.98 } : {}}
    >
      <ButtonContent />
    </motion.button>
  );
};

export default FuturisticButton;
